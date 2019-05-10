/**
 * @description:
 * @author: yitian.mao<yitian.mao@hand-china.com>
 * @date: 2019-05-09 16:57
 */
const fs = require('fs');
const path = require('path');
// 异步追加
// fs.appendFile(path.join(__dirname, "./test1.txt"),'文件追加数据1', 'utf8', err => {
//     if(err) throw err;
//     console.log(fs.readFileSync(path.join(__dirname, "./test1.txt"), 'utf8'));
// });
// // 使用writeFile追加写入，将flag设置为'a'就可以了。
// fs.writeFile(path.join(__dirname, "./test1.txt"), '文件追加数据2', {'flag': 'a'}, (err) => {
//     if(err) throw err;
//     console.log(fs.readFileSync(path.join(__dirname, "./test1.txt"), 'utf8'));
// });

const resource = path.join(__dirname, './test1.txt');
const target = path.join(__dirname, 'target.txt');
const { COPYFILE_EXCL } = fs.constants;
// 默认情况下将创建或覆盖目标文件。
fs.copyFile(resource, target, (err) => {
    if (err) throw err;
    console.log('test1.txt已拷贝到target.txt中');
});

// 通过使用 COPYFILE_EXCL，如果目标文件存在，则操作将失败。
// fs.copyFile(resource, target, COPYFILE_EXCL, (err) => {
//     if (err) throw err;
// });
