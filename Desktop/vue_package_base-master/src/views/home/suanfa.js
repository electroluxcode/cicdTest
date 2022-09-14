// // function quickSort(data){
// //     if(data.length<=1){return data}
// //     let temp = data[0]
// //     let left=[]
// //     let right =[]
// //     for (let i =1 ; i< data.length ; i++){
// //         if(temp<data[i]){
// //             left.push(data[i])
// //         }else{
// //             right.push(data[i])
// //         }
// //     }
// //     return quickSort(left).concat([temp],quickSort(right))
// // }
// // let data = [1,28,91,0]
// // console.log(quickSort(data))
// // quickSort(data)

// //data是object[{id:3,name:"ceshi1"},{id:1,name:"ceshi1"},{id:2,name:"ceshi1"}]

// function quickSort(data, key) {
//     if (data.length <= 1) { return data }
//     let temp = data[0]
//     let left = []
//     let right = []
//     for (let i = 1; i < data.length; i++) {
//         if (temp[key] < data[i][key]) {
//             left = left.concat(data[i])

//         } else {
//             right = right.concat(data[i])

//         }
//     }

//     return quickSort(left, key).concat([temp], quickSort(right, key))
// }
// let data = [{ id: 1, name: "ceshi1" }, { id: 2, name: "ceshi1" }, { id: 9, name: "ceshi1" }, { id: 3, name: "ceshi1" },]
// console.log(quickSort(data, "id"))

// // --------------有bug

// function unique5(array) {
//     var r = [];
//     for (var i = 0, l = array.length; i < l; i++) {
//         console.log(i, "first")
//         for (var j = i + 1; j < l; j++) {
//             if (array[i] === array[j]) {
//                 //更新i,j的初始值
//                 i = i + 1;
//                 j = i
//                 console.log(i, l, "test")
//                 // console.log(i,array[i])
//             }

//         }
//         //获取i值
//         console.log(i, "last")
//         r.push(array[i]);
//     }
//     return r;
// }; unique5([1, 1, 13, 12, 12, 12, 65, 12, 63, 12])

// // ----------------

// var arr = [1, 'b', 'b', 4, 3, 3, 4, 5, 1];

// Array.prototype.unique2 = function () {
//     var hash = {}; //定义一个hash表
//     var arr1 = []; //定义一个新数组
//     for (var i = 0; i < this.length; i++) {

//         if (!hash[this[i]]) {
//             hash[this[i]] = true;
//             arr1.push(this[i]);
//         }
//     }
//     return arr1;
// }
// console.log(arr);
// console.log(arr.unique2());

// var arr = [{ id: 3, name: "ceshi1" }, { id: 1, name: "ceshi1" }, { id: 1, name: "ceshi1" }, { id: 9, name: "ceshi1" }, { id: 3, name: "ceshi1" }

//     ,]

// Object.prototype.unique2 = function () {
//     var hash = {}; //定义一个hash表
//     var arr1 = []; //定义一个新数组
//     for (var i = 0; i < this.length; i++) {
//         if (!hash[this[i]["id"]]) {
//             hash[this[i]["id"]] = true;
//             arr1.push(this[i]);
//         }
//     }
//     return arr1;
// }
// console.log(arr);
// console.log(arr.unique2());

// 一个问题:一个10G的文件,里面全部是自然数,一行一个,乱序排列,对其排序.在32位机器上面完成,内存限制为 2G.



// 具体实现如下:

// function FindClass() {
//     var datas = new Array(100); //用来存储数据
//     //先初始化为0
//     for (var i = 0; i < datas.length; i++) {
//         datas[i] = 0;
//     }
//     //添加
//     this.add = function (m) {
//         datas[m] = 1;
//     }
//     //判断是否存在
//     this.isExist = function (m) {
//         if (datas[m] == 0) {
//             return false;
//         } else {
//             return true;
//         }
//     }
//     //返回datas
//     this.getDatas = function () {
//         return datas;
//     }
// }

// // 上面的算法虽然很快, 但有个问题, 如果数据非常的多
// // 假如是一个亿, 整数算作4个字节, 4亿个字节大概需要占用380M的内存空间
// // 我们就需要一个办法来用很少的空间来表示这一亿个数的存在
// //     (我们做的事是查找, 并不是存储)
// // 想象一下有8个路灯, 编号从1 - 8, 其中2, 5, 7, 8是亮的, 其余不亮.
// //     请说一种方法表示亮与不亮
// // 非计算机行业的人可能会说2578亮, 1346不亮

// // 计算机行业的人会怎么回答: 75
// // 因为: 75的二进制表达为 01001011   0:不亮 1: 亮

// // 1个整肃4个字节 2的四次方 32位, 就可以代表32盏灯


// 此时 value = 9, 9就表示0和3都存在 1 0 0 1
// 32bit 可以判断0 - 31是否存在 1 0 0 0 0
// 如果创建一个大小为10的数组.数组里存储整数.那么这个数组就可以表示
// 0 - 319是否存在
// datas[0] 表示0 - 31是否存在   0 0 0 0  5 存在 1 0 0 0 0 =16  | 6 存在 1 1 0 0
// datas[1] 表示32 - 63是否存在 0 0 0 0
// ....
// datas[9] 表示288 - 319是否存在
// 通过这种方式, 可以把空间的使用降低为原来的1 / 32.
// 存储一个亿数据的存在状态, 就只需要10M + 的空间

// 按照上面的思路, 重新设计一个查找类

// 思路:
// 0 - 100 只需要4个整数 4 * 32 > 100 来表示是否存在
// 创建一个大小为4的数组

// 关键点:
// 执行add()方法时, 先用 m / 32,
//     确定在arr[0], ar[1], arr[2], arr[3]哪个里面
// 比如 33就存到 arr[1] 中
// 用arr_index来表示  0 <= arr_index <= 3

// 再用 m % 32 确定 在那个二进制位上操作
// 33 就存在 arr[1] 的 下标为 1 的 bit 上
// 用bit_index来表示 0 <= bit_index <= 31

// 最后执行
// bit_arr[arr_index] = bit_arr[arr_index] | 1 << bit_index
// 执行isExist时, 先用 m / 32, 确定 arr_index的索引
// 再用 m % 32 确定 bit_index   
// 最后执行 bit_arr[arr_index] & 1 << bit_index
// bit_arr[arr_index] 取出 m
// 1 << bit_index 把 1 移到 m 处
// 两者 & 只有 两个都为 1 的时候 才为 1
// 如果 = 1, 就说明 是两个1 就存在
// 如果 = 0, 肯定是 bit_arr[arr_index] 为0, 没有存过
// 0010 0001
//     |
//     0000 0001 << 0
// 0010 0001

// 判断isexit()

// 0010 0011     3 % 32 = 3
// 0000 0010
//     &
//     0000 0010  


// 用8bit 模拟一下效果

// 先add 0   1代表选中, 左移到选中的位置
// 1 << 0 | 0

// 1 << 0 | 0
// 0000 0001   1
//     << 0
// 0000 0001
// 0000 0000   0
//     |
//     0000 0001 = value    

// add 1
// 1 << 1 | 1

// 0000 0001
//     << 1
// 0000 0010
// 0000 0001
//     |
//     0000 0011   3 代表 0, 1 都存在
// isExit(2)
// 0000 0100  1 << 2
//     &
//     0000 0011  3

// 0000 0000  表示 2 不存在
// 根据上面的思路: 实现如下

// function BitMap(size) {  //4*32 
//     var bit_arr = new Array(size); //0-3
//     for (var i = 0; i < bit_arr.length; i++) {
//         bit_arr[i] = 0;
//     }
//     this.add = function (m) {
//         var arr_index = Math.floor(m / 32); //数组中的索引
//         var bit_index = m % 32; // 32bit 中的哪一位上
//         bit_arr[arr_index] = bit_arr[arr_index] | 1 << bit_index;
//     }
//     this.isExist = function (m) {
//         var arr_index = Math.floor(m / 32);
//         var bit_index = m % 32;
//         var value = bit_arr[arr_index] & 1 << bit_index;
//         if (value != 0) {
//             return true;
//         }
//         return false;
//     }
//     this.getDatas = function () {
//         return bit_arr;
//     }
// }

// var b = new BitMap();
// var arr = [0, 3, 5, 30, 11, 19, 23, 30, 88, 99, 55, 32];
// for (var i = 0; i < arr.length; i++) {
//     b.add(arr[i]);
// }
// console.log(b.getDatas());
// b.getDatas().forEach((i) => {
//     console.log(i.toString(2))
// })
// console.log('isExist(3)', b.isExist(3));
// console.log('isExist(1)', b.isExist(1));

// 这种基于位 作映射  只能表示某个数是否存在
// 可以用于大数据去重, 排序, 取交集
// 要求数据集紧凑,
//     如果要处理的数自有3个
//     [1, 1000, 1000000000]
// 那么空间利用率就很低.
// 因为最大的值 决定了BitMap要用多少内存.
//     bitmap可用于大数据排序, 前提是数据不重复