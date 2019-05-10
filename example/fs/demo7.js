/**
 * @description:
 * @author: yitian.mao<yitian.mao@hand-china.com>
 * @date: 2019-05-10 14:49
 */
// const fs = require('fs');
// const path = require('path');
//
// let src = path.join(__dirname, "./fs");
//
// //判断是否存在
// fs.access(src, fs.constants.F_OK, function (err) {
//     console.log(err ? '不存在' : '存在');
// });
//
// //判断是否可读
// fs.access(src, fs.constants.R_OK, function (err) {
//     console.log(err ? '不可读' : '可读');
// });
//
// //判断是否可写
// fs.access(src, fs.constants.W_OK, function (err) {
//     console.log(err ? '不可写' : '可写');
// });　
const fs = require('fs');
const path = require('path');

// readdir读取目录下所有文件
fs.readdir(__dirname, function (err, files) {
    console.log(files);
});

// 递归的读取一个目录所有文件
function readDir(dir) {
    // 文件目录的 Stats 对象存储着关于这个文件或文件夹的一些重要信息，
    // 如创建时间、修改的时间、文章所占字节和判断文件类型的多个方法等等。
    fs.stat(dir, function (err, stats) {
        if (stats.isDirectory()) {
            console.log(dir);
            fs.readdir(dir, function (err, files) {
                files.map(value => {
                    let cur = path.join(dir, value);
                    fs.stat(cur, function (err, stats) {
                        if (stats.isDirectory()) {
                            readDir(cur);
                        } else {
                            console.log(cur);
                        }
                    });
                });
            });
        } else {
            console.log(dir);
        }
    });
}
readDir('./example');
