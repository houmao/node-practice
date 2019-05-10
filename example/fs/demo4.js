/**
 * @description:
 * @author: yitian.mao<yitian.mao@hand-china.com>
 * @date: 2019-05-09 17:53
 */
const fs = require('fs');
const path = require('path');

/* 参数一表示文件路径
*  参数二表示文件系统标志，r+:打开文件用于读取和写入。如果文件不存在，则出现异常。
*  参数三表示文件权限
*  参数四表示回调函数，err表示错误，fd表示文件描述符，是一个整型*/
fs.open(path.join(__dirname, "./test1.txt"), 'r+', 0o666, function (err, fd) {
    let wbuf = Buffer.from('这是写入的数据');
    /*参数一表示文件描述符
    * 参数二表示写入数据的Buffer
    * 参数三表示往Buffer中读取的偏移量
    * 参数四表示写入的字节数
    * 参数五表示从文件中写入的位置，如果不等于数字，则从文件的当前位置写入
    * 参数六表示回调函数，err表示错误，written表示实际写入的字节数，buffer表示写入数据的Buffer*/
    fs.write(fd, wbuf, 0, 21, null, function (err, bytesLen, buffer) {
        console.log(bytesLen); // 21
    });

    //创建一个3字节的Buffer，用来接收数据
    let rbuf = Buffer.alloc(21);
    /*参数一表示文件描述符
    * 参数二表示接收数据的Buffer
    * 参数三表示往Buffer中写入的偏移量
    * 参数四表示读取的字节数
    * 参数五表示从文件中读取的位置，如果为null，则是文件的当前位置读取
    * 参数六表示回调函数，err表示错误，bytesRead表示实际读取的字节，buffer表示接收数据的Buffer*/
    fs.read(fd, rbuf, 0, 21, 0, function (err, bytesLen, buffer) {
        console.log(rbuf.toString()); // 这是写入的数据
        console.log(bytesLen); // 21
    });
});　
