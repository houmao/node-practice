/**
 * @description:
 * @author: yitian.mao<yitian.mao@hand-china.com>
 * @date: 2019-04-30 12:44
 */
const EventEmitter=require('events');

class Base extends EventEmitter{
    constructor() {
        super();
        this.x = 'ceshi';
    }
    onEvent(eventName,callback){
        super.on(eventName,callback);
    }
    emitEvent(eventName,arg){
        super.emit(eventName,arg);
    }
};
class BlogInfo extends Base {
    constructor() {
        super();
    }
    onSave() {
        super.onEvent('saveStart',function(blog){
            console.log('saveStart',blog);
        });

        super.onEvent('blogCount',function(blog){
            console.log('blogCount',blog.length);
        });

        super.onEvent('saveEnd',function(blog){
            console.log('saveEnd',blog);
        });
    }
    emitEvent(blog) {
        super.emitEvent('saveStart',blog);

        super.emitEvent('blogCount',blog);

        super.emitEvent('saveEnd',blog);
    }
}

exports.blogSave=function(newblog){
    console.log(BlogInfo.__proto__.__proto__ === EventEmitter); // true
    console.log(BlogInfo.__proto__ === Base); // true
    const blogInfo=new BlogInfo();
    blogInfo.onSave(newblog);
    blogInfo.emitEvent(newblog);
};
