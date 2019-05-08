/**
 * @description:
 * @author: yitian.mao<yitian.mao@hand-china.com>
 * @date: 2019-04-29 15:30
 */
//引入events模块
const EventEmitter = require('events');
let count = 0;
//创建一个新实例
const myEmitter = new EventEmitter();
//给“去逛街”创建一个监听
myEmitter.on('去逛街', () => {
    console.log(`买了${++count}件衣服`);
});
// 再次给“去逛街”创建一个监听，不会检查 listener 是否已被添加，依然被放到监听器数组后面。
myEmitter.on('去逛街', () => {
    console.log(`买了${++count}条裤子`);
});
//触发监听“去逛街”这个事件
myEmitter.emit('去逛街');
myEmitter.emit('去逛街');
/** 输出结果:
 * 买了1件衣服
 * 买了2条裤子
 * 买了3件衣服
 * 买了4条裤子*/
