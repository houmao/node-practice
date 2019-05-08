/**
 * @description:
 * @author: yitian.mao<yitian.mao@hand-china.com>
 * @date: 2019-04-30 12:44
 */
const http = require('http');
const blog = require('./blog');
const serve = http.createServer((req, res) => {
    if (req.url === '/') {
        const newblog = [{title: "标题", content: "内容"}];
        blog.blogSave(newblog);
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
        res.write('<html><body>');
        res.write('<h2>Hello World!</h2>');
        res.end('</body></html>');
    }
});
serve.listen(8000);
console.log('listen 8000');
/** 运行index.js结果
 * listen 8000
 * true
 * true
 * saveStart [ { title: '标题', content: '内容' } ]
 * saveEnd [ { title: '标题', content: '内容' } ]
 */
