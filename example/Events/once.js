/**
 * @description:
 * @author: yitian.mao<yitian.mao@hand-china.com>
 * @date: 2019-04-29 17:22
 */
//引入events模块
const EventEmitter = require('events');
let count = 0;

//创建一个新实例
const myEmitter = new EventEmitter();
//给“去逛街”创建一个监听
myEmitter.once('去逛街', () => {
    console.log(`买了${++count}件衣服`);
});
//触发监听“去逛街”这个事件
myEmitter.emit('去逛街');

myEmitter.emit('去逛街'); // 没有被触发
