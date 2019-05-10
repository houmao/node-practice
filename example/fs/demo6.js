/**
 * @description:
 * @author: yitian.mao<yitian.mao@hand-china.com>
 * @date: 2019-05-10 14:13
 */
const fs = require('fs');
const path = require('path');
function copy(src, dest, size = 16 * 1024, callback) {
    // 打开源文件
    fs.open(src, 'r', (err, readFd) => {
        // 打开目标文件
        fs.open(dest, 'w', (err, writeFd) => {
            let buf = Buffer.alloc(size);
            let readed = 0; // 下次读取文件的位置
            let writed = 0; // 下次写入文件的位置

            (function next() {
                // 读取
                fs.read(readFd, buf, 0, size, readed, (err, bytesRead) => {
                    readed += bytesRead;
                    console.log("bytesRead："+bytesRead);

                    // 如果都不到内容关闭文件,并且不再执行
                    if (!bytesRead) {
                        fs.close(readFd, err => console.log('关闭源文件'));
                    }

                    // 写入
                    fs.write(writeFd, buf, 0, bytesRead, writed, (err, bytesWritten) => {
                        // 如果没有内容了同步缓存，并关闭文件后执行回调
                        if (!bytesWritten) {
                            return fs.fsync(writeFd, err => {
                                fs.close(writeFd, err => !err && callback(writeFd));
                            });
                        }
                        writed += bytesWritten;
                        // 继续读取、写入
                        next();
                    });
                });
            })();
        });
    });
}
/* test1.txt内容：数据0数据1数据2数据3数据4  size=7,每次读取写入7个字节*/
copy(path.join(__dirname, "./test1.txt"), path.join(__dirname, "./target.txt"), size = 7,
    (data) => {
    console.log("文件copy结束");
});
/* 结果如下，文件读取写入五次，第六次的时候没有读取到任何内容结束
* bytesRead：7
* bytesRead：7
* bytesRead：7
* bytesRead：7
* bytesRead：7
* bytesRead：0
* 关闭源文件
* 文件copy结束*/
