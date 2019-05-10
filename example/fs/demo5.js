/**
 * @description:
 * @author: yitian.mao<yitian.mao@hand-china.com>
 * @date: 2019-05-10 10:00
 */
const fs = require('fs');
const path = require('path');
// 0o666： 给文件所有者、群组、其他人 可读可写不可执行的权限
fs.open(path.join(__dirname, "./test1.txt"), 'w+', 0o666, function (err, fd) {
    let task = [];
    // 往文件中循环写入数据
    for (let ix = 0; ix < 5; ix++) {
        let data = Buffer.from(`数据${ix}`);
        task.push(function () {
            return new Promise((resolve, reject) => {
                fs.write(fd, data, 0, data.length, null, (err, written, buffer) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(buffer);
                    }
                });
            });
        });
    }

    // 往文件中循环写入数据
    Promise.all(task.map(fn => fn())).then(value => {
        console.log("value："+value.toString());
    });
    // 系统为了效率，在使用 write 方法向文件写入数据时
    // 通常会放到一个缓冲区中，当缓冲区满了后，系统就一次把数据写到文件。
    // 当写完数据后，一般会强制刷新缓冲区，让数据写入到文件里，然后关闭文件。
    fs.fsync(fd, (err) => {
        console.log("err1："+err);
        //关闭文件
        fs.close(fd, function (err) {
            console.log("err2："+err);
        })
    });
});
