/**
 * @description:
 * @author: yitian.mao<yitian.mao@hand-china.com>
 * @date: 2019-05-10 15:17
 */
const fs = require('fs');
const path = require('path');

//创建目录，默认情况下不支持递归创建目录
fs.mkdir('./e', function (err) {
    console.log(err);
});

//通过设置参数二中的recursive为true，则可以递归创建目录
fs.mkdir('./a/b/c', {'recursive': true}, function (err) {
    console.log(err);
});

//rmdir无法删除非空目录
fs.rmdir('./e', function (err) {
    console.log(err);
});

// 递归删除不为空的文件夹
function delDir(dir){
    let files = [];
    if(fs.existsSync(dir)){
        files = fs.readdirSync(dir);
        files.forEach((file, index) => {
            let curPath = path.join(dir, file);
            if(fs.statSync(curPath).isDirectory()){
                delDir(curPath); //递归删除文件夹
            } else {
                fs.unlinkSync(curPath); //删除文件
            }
        });
        fs.rmdirSync(dir);
    }
}
delDir('./a');
