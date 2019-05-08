/**
 * @description:
 * @author: yitian.mao<yitian.mao@hand-china.com>
 * @date: 2019-04-21 11:15
 */
// const b = new ArrayBuffer(4);
// const v1 = new Uint8Array(b);
// const buf = Buffer.from(b);
// console.log('first, typeArray: ', v1);// first, typeArray: Uint8Array [ 0, 0, 0, 0 ]
// console.log('first, Buffer: ', buf); // first, Buffer: <Buffer 00 00 00 00>
// v1[0] = 12;
// console.log('second, typeArray: ', v1); // second, typeArray: Uint8Array [ 12, 0, 0, 0 ]
// console.log('second, Buffer: ', buf); // second, Buffer: <Buffer 0c 00 00 00>
//
// const buf1 = new Buffer.from([1,2,3,4,5]);
// const buf2 = new Buffer.from(buf1);
// console.log(buf1); // <Buffer 01 02 03 04 05>
// console.log(buf2); // <Buffer 01 02 03 04 05>
// buf1[0] = 16;
// buf1[1] = 17;
// console.log(buf1); // <Buffer 10 11 03 04 05>
// console.log(buf2); // <Buffer 01 02 03 04 05>
//
// const buf3 = Buffer.alloc(3, 'a');
// console.log(buf3); // <Buffer 61 61 61>
// const buf4 = Buffer.alloc(11, 'abCdEfGhIjK', 'base64');
// console.log(buf4); // <Buffer 69 b0 9d 11 f1 a1 22 32 69 b0 9d>

// const buf5 = Buffer.allocUnsafe(10);
// console.log(buf5);
// // 打印: <Buffer 88 63 f7 d5 f6 7f 00 00 00 00>
// // (输出的内容是内存的旧数据，每次都不同)
// buf5.fill(0);
// console.log(buf5);
// // 打印: <Buffer 00 00 00 00 00 00 00 00 00 00>

// 从c++模块层面直接申请内存
const buf4 = Buffer.allocUnsafeSlow(5);
console.log(buf4);  //<Buffer 01 e4 04 94 22>  (输出的内容是内存的旧数据，每次都不同)
