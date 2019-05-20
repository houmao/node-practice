/**
 * @description:
 * @author: yitian.mao<yitian.mao@hand-china.com>
 * @date: 2019-05-13 17:23
 */
const http=require('http');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    res.write('<html><head><title>HTTP Server</title></head>');
    res.write('<body>');
    res.write('<h1>hello HTTP Server</h1>');
    res.end('</body></html>');
}).listen(8000);

const options={
    hostname:'localhost',
    port:'8000',
};
http.request(options,function(response){
    let serverData='';
    // 通过响应对象的data，得到html数据
    response.on('data',function(chunk){
        serverData+=chunk;
    });
    response.on('end',function(){
        console.log('response status: ',response.statusCode);
        console.log('response headers: ',response.headers);
        console.log(serverData);
    });
}).end();
