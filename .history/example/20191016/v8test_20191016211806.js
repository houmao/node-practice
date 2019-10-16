function getme(){
    var mem = process.memoryUsage();
    var format = function(bytes){
        return (bytes/1024/1024).toFixed(2)+'MB';
    }
    console.log('heapTotal:'+format(mem.heapTotal)+'heapUsed:'+format(mem.heapUsed));
}
var size = 20*1024*1024;
var arr1 = new Array(size);
var arr2 = new Array(size);
var arr3 = new Array(size);
var arr4 = new Array(size);
var arr5 = new Array(size);
var arr6 = new Array(size);
var arr7 = new Array(size);
var arr8 = new Array(size);
getme();
