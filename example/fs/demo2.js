/**
 * @description:
 * @author: yitian.mao<yitian.mao@hand-china.com>
 * @date: 2019-05-09 14:35
 */
const fs = require('fs');
const path = require('path');
// 同步写入
// try{
//     fs.writeFileSync(path.join(__dirname, "./test1.txt"), '同步写入功能测试', 'utf8');
//     console.log(fs.readFileSync(path.join(__dirname, "./test1.txt"), 'utf8'));
// }catch(err){
//     throw err;
// }
// 异步写入
fs.writeFile(path.join(__dirname, "./test1.txt"),'异步写入功能测试', 'utf8', function(err, data){
    if(err) throw err;
    console.log(fs.readFileSync(path.join(__dirname, "./test1.txt"), 'utf8'));
});

// let writeStream = fs.createWriteStream(path.join(__dirname, "./test1.txt"),'utf8');
// //已打开要写入的文件事件
// writeStream.on('open', (fd) => {
//     console.log('文件已打开:', fd); // 打开一个新的文件,文件描述符会是3
// });
// //读取文件发生错误事件
// writeStream.on('error', (err) => {
//     console.log('发生异常:', err);
// });
// //文件已经就写入完成事件
// writeStream.on('finish', () => {
//     console.log('写入已完成...');
//     console.log('读取文件内容:', fs.readFileSync(path.join(__dirname, "./test1.txt"), 'utf8'));
// });
// //文件关闭事件
// writeStream.on('close', () => {
//     console.log('文件已关闭！');
// });
// writeStream.write('文件流写入');
// writeStream.end();
// 输出结果：
// 文件已打开: 3
// 写入已完成...
// 读取文件内容: 文件流写入
// 文件已关闭！
