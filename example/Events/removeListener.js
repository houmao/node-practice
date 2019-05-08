/**
 * @description:
 * @author: yitian.mao<yitian.mao@hand-china.com>
 * @date: 2019-04-30 11:17
 */
//引入events模块
const EventEmitter = require('events');
//创建一个新实例
const myEmitter = new EventEmitter();
const buyClothes = () => {
    console.log(`买衣服`);
    myEmitter.removeListener('去逛街', buyPants);
}
const buyPants = () => {
    console.log(`买裤子`);
}
myEmitter.on('去逛街', buyClothes);
myEmitter.on('去逛街', buyPants);
// buyClothes 移除了监听器 buyPants，但它依然会被调用。
// 触发时内部的监听器数组为 [buyClothes, buyPants]
myEmitter.emit('去逛街'); // 买衣服 买裤子
// buyPants 现已被移除。
// 内部的监听器数组为 [buyClothes]
myEmitter.emit('去逛街'); // 买衣服
