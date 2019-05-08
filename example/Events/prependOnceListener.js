/**
 * @description:
 * @author: yitian.mao<yitian.mao@hand-china.com>
 * @date: 2019-04-30 10:55
 */
//引入events模块
const EventEmitter = require('events');
//创建一个新实例
const myEmitter = new EventEmitter();
//给“去逛街”创建一个监听
myEmitter.on('去逛街', () => {
    console.log(`买衣服`);
});
// 添加 listener 函数到名为 eventName 的事件的监听器数组的开头。
myEmitter.prependListener('去逛街', () => {
    console.log(`买裤子`);
});
// 添加单次监听器 listener 到名为 eventName 的事件的监听器数组的开头
myEmitter.prependOnceListener('去逛街', () => {
    console.log(`买鞋子`);
});
//触发监听“去逛街”这个事件
myEmitter.emit('去逛街'); // 输出结果：买鞋子 买裤子 买衣服
myEmitter.emit('去逛街'); // 输出结果：买裤子 买衣服
