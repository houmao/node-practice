/**
 * @description:
 * @author: yitian.mao<yitian.mao@hand-china.com>
 * @date: 2019-04-30 12:09
 */
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
// EventEmitter 实例会在一个监听器被添加到其内部监听器数组之前触发自身的 'newListener' 事件；
// 只处理一次，避免无限循环。
myEmitter.once('newListener', (event, listener) => {
    if (event === '去逛街') {
        console.log('逛街前的准备');
        myEmitter.on('去逛街', () => {
            console.log('涂防晒霜');
        });
    }
});
myEmitter.on('去逛街', () => {
    console.log('买护肤品');
});
myEmitter.emit('去逛街'); // 逛街前的准备 涂防晒霜 买护肤品
myEmitter.emit('去逛街'); // 涂防晒霜 买护肤品
