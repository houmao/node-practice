/**
 * @description:
 * @author: yitian.mao<yitian.mao@hand-china.com>
 * @date: 2019-05-09 10:50
 */
const fs = require('fs');
const path = require('path');
// 同步读取
try{
    let data = fs.readFileSync(path.join(__dirname, "./test1.txt"), 'utf8');
    console.log('文件内容: ' + data);
}catch(err){
    console.error('读取文件出错: ' + err.message);
}
// 异步读取
fs.readFile(path.join(__dirname, "./test1.txt"), 'utf8', function(err, data){
    if(err){
        return console.error('读取文件出错: ' + err.message);
    }
    console.log('文件内容: ' + data);
});

fs.createReadStream(path.join(__dirname, "./test1.txt"), 'utf8').on('data', function(chunk) {
        console.log('读取数据: ' + chunk);
    }).on('error', function(err){
        console.log('出错: ' + err.message);
    }).on('end', function(){  // 没有数据了
        console.log('没有数据了');
    }).on('close', function(){  // 已经关闭，不会再有事件抛出
        console.log('已经关闭');
    });
// 结果如下：
// 文件内容: 这是一段测试文件测试readFileSync
// 读取数据: 这是一段测试文件测试readFileSync
// 没有数据了
// 文件内容: 这是一段测试文件测试readFileSync
// 已经关闭
