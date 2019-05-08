/**
 * @description:
 * @author: yitian.mao<yitian.mao@hand-china.com>
 * @date: 2019-04-30 12:27
 */
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
const buySkinProd = () => {
    console.log('买护肤品');
    myEmitter.removeListener('去逛街', buySkinProd);
}
myEmitter.once('removeListener', (event, listener) => {
    if (event === '去逛街') {
        console.log('逛街结束');
    }
});
myEmitter.on('去逛街', buySkinProd);
myEmitter.emit('去逛街'); // 买护肤品 逛街结束
