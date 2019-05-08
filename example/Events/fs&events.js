/**
 * @description:
 * @author: yitian.mao<yitian.mao@hand-china.com>
 * @date: 2019-04-29 18:06
 */
var fs = require("fs");

var f = fs.watch("./",function(event,filename){
    console.log("event="+event);
    console.log("filename="+filename);
});

f.on("change",function(event,filename){
    console.log("change12");
    f.close();
    //关闭
});


var ff = fs.watchFile("./message.txt",function(curr,prev){
    console.log("change21");
});

ff.on("change",function(){
    console.log("change22");
    ff.stop();
    //关闭
});
