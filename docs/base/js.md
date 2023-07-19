<!--
 * Author  Vincy.Li
 * Date  2023-07-13 19:45:31
 * LastEditors  Vincy.Li
 * LastEditTime  2023-07-19 15:31:34
 * Description
-->

# JavaScript

### 1. JS 中的数据类型

js 中的数据类型分为 **基本类型**和**引用类型**

- 简单数据类型有 6 种：Number、String、Boolean、symbol、null、undefined (一个 symbol 值能作为对象属性的标识符；这是该数据类型仅有的目的)
- 引用类型只有 1 种：object 包括对象、数组、函数

基本类型数据保存在栈内存中，引用类型保存在堆内存中，引用存在栈内存中，引用可以理解为数据的存储地址。

需要注意的是，我们在声明的时候并不能确认数据类型，只有到运行期间才会确定当前类型。

判断数据类型的三种方法：

```js
// 第一种：通过typeof判断 只能判断简单类型 复杂类型都是object 并且null==object
console.log(typeof "str"); // string
console.log(typeof 2); // number
console.log(typeof [1, 2]); // object
console.log(typeof { a: 1 }); // object
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof true); // boolean
console.log(typeof Symbol(1)); // symbol

// 第二种 通过instanceof instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
console.log([1] instanceof Array); // true
console.log({} instanceof Object); // true

// 第三种 Object.prototype.toString.call()
console.log(Object.prototype.toString.call(arr)); // [object Array]
console.log(Object.prototype.toString.call(str)); // [object String]
console.log(Object.prototype.toString.call(1)); // [object Number]
console.log(Object.prototype.toString.call({})); // [object Object]
```

**推荐用 Object.prototype.toString.call()来判断, 能够精确的返回数据的类型,包括日期/正则表达式/函数类型**

### 2.数组的常用方法

- 增（push）<br/>
  `push`: 向数组末尾新增任意数量的数组 返回数组的最新长度(总长度) 会改变原数组

  ```js
  const arr = [1, 2, 3];
  let addNum = arr.push(4, 4);
  console.log("addNum,arr :>> ", addNum, arr); // 5 [1,2,3,4,4]
  ```

  `unshift`: 向数组开头插入任意数量的参数 返回数组的最新长度 会改变原数组

  ```js
  let addNum = arr.unshift(0);
  console.log("arr :>> ", arr, addNum); // [0,1,2,3] 4
  ```

  `splice`: 传入三个参数，分别是开始的下标，要删除的元素个数，要插入的元素。返回被删除的元素组成的数组。改变原有数组。

  ```js
  let del = arr.splice(2, 1); // 删除下标为2的元素
  console.log("del :>> ", del, arr); // [3] [1,2]

  let delAndReplace = arr.splice(2, 1, 4); // 用4替换3
  console.log("delAndReplace :>> ", delAndReplace, arr); // [3] [1,2,4]
  ```

  `concat`: 用于合并两个或多个数组，返回新数组，不会改变原数组

  ```js
  let newArr = arr.concat([4, 5, 6], [7, 8, 9]);
  console.log("arr,newArr :>> ", arr, newArr); // [1,2,3] [1, 2, 3, 4, 5, 6, 7, 8, 9]
  ```

- 删除<br/>
  `pop`: 删除最后一个元素 返回被删除的元素 改变原数组
  ```js
  let lastDel = arr.pop();
  console.log("lastDel :>> ", lastDel, arr); // 3 [1,2]
  ```
  `shift`: 删除第一个元素 返回被删除的元素 改变原数组
  ```js
  let firstDel = arr.shift();
  console.log("firstDel :>> ", firstDel, arr); // 1 [2,3]
  ```
  `splice`: 删除某几个元素 返回被删除的元素组成的数组 改变原数组
  `slice`: 这一对象是一个由 start 和 end 决定的原数组的浅拷贝（包括 start，不包括 end），其中 start 和 end 代表了数组元素的索引。不改变原数组 返回一个新数组
  ```js
  let newArr = arr.slice(0, 2); // 浅拷贝从第0个元素到第1个元素组成数组
  console.log("newArr :>> ", newArr); // [1,2]
  ```
- 改<br/>
  `splice`: 同上 用新元素替换旧元素
- 查<br/>
  `indexOf`: 返回要查找的元素在数组中的下标，如果没找到则返回 -1<br/>
  `includes`: 数组是否包含某个元素。返回 true 或 false<br/>
  `find`: 查找满足某个条件的元素。返回第一个满足条件的元素<br/>
  `findIndex`: 查找满足某个条件的元素索引。返回第一个满足条件的元素索引
- 排序<br/>
  `reverse`: 反转数组 改变原有数组 返回新数组<br/>
  `sort`: 数组排序 改变原有数组 返回新数组
- 迭代（循环 都不改变原数组）<br/>
  `forEach`: 对数组的每一项都运行传入的函数。没有返回值。
  forEach() 方法是一个迭代方法。它按索引升序地为数组中的每个元素调用一次提供的 callbackFn 函数。与 map() 不同，forEach() 总是返回 undefined，而且不能继续链式调用。其典型的用法是在链式调用的末尾执行某些操作。forEach() 方法是通用的。它只期望 this 值具有 length 属性和整数键的属性。除非抛出异常，否则没有办法停止或中断 forEach() 循环。如果有这样的需求，则不应该使用 forEach() 方法。<br/>
  `map`: 对数组的每一项都运行传入的函数。返回每次结果组成的新数组。<br/>
  `filter`: 对数组的每一项都运行传入的函数。返回过滤后的数组它为数组中的每个元素调用提供的 callbackFn 函数一次，并构造一个由所有返回真值的元素值组成的新数组。未通过 callbackFn 测试的数组元素不会包含在新数组中。<br/>
  `some`: 对数组的每一项都执行操作，如果有一个返回 true. 则结果就为 true，否则返回 false 不改变原数组,如果找到这样的元素，some() 方法将会立即返回 true 并停止遍历数组。否则，如果 callbackFn 对所有元素都返回假值，some() 就会返回 false。<br/>
  ```js
  console.log(arr.some((item) => item <= 2)); // true
  console.log(arr.some((item) => item === 4)); // false
  ```
  `every`: 对数组的每一项都执行操作，只有所有项都返回 true. 结果才为 true<br/>
  ```js
  console.log(arr.every((item) => item <= 3)); // true
  console.log(arr.every((item) => item <= 2)); // false
  ```
- 转换
  join: 将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串，用逗号或指定的分隔符字符串分隔。如果数组只有一个元素，那么将返回该元素而不使用分隔符。
  ```js
  console.log(arr.join("and")); // 1and2and3
  console.log([1].join("and")); // 1
  ```

### 3. 常用字符串方法

- 增 <br/>
  `concat`: 用于将一个或多个字符串拼接成一个新字符串。不改变原字符串。
- 删 <br/>
  `slice`: 提取字符串的一部分 返回一个新的字符串 不会改变原字符串;传入两个参数 开始索引和结束索引，提取包括开始索引但不包括结束索引中间的部分；如果值为负数，会被当做 strLength + beginIndex 看待;endIndex 可选 如果不传 则提取到字符串末尾
  ```js
  console.log(str.slice(0, 3)); // abc 不包含3
  console.log(str.slice(-3, -1)); // ef
  console.log(str.slice(-3)); // efg
  ```
  `substring`: 提取字符串 返回一个新的字符串 不会改变原字符串；跟 slice 差不多= =
- 改 <br/>
  `trim()、trimLeft()、trimRight()`: 去除空格。并返回新的字符串。
  `repeat`: 复制当前 Str 传入数字 返回复制多少次后的字符串
  ```js
  console.log(str.repeat(3)); // abcdefgabcdefgabcdefg
  ```
  `addStart addEnd`: 用指定字符串填充当前字符串
  ```js
  console.log(str.padStart(10, "a")); // aaaabcdefg
  console.log(str.padEnd(10, "a")); // abcdefgaaa
  ```
  `toLowerCase()、 toUpperCase()`: 大小写转换
  ```js
  console.log(str.toUpperCase()); // ABCDEFG
  console.log(str.toLowerCase()); // abcdefg
  ```
- 查<br/>
  `charAt`: 返回一个由给定索引处的单个 UTF-16 码元构成的新字符串;相当于查询并返回第 N 个字符串
  ```js
  console.log(str.charAt(0)); // a
  console.log("123456".charAt(2)); // 2
  ```
  `at`: 和 charAt 相似可以查询并返回第 N 个字符串 但 at 支持负数 从最后一个往前查
  `indexOf`: 在字符串中搜索指定子字符串，并返回其第一次出现的位置索引。找不到返回-1
  ```js
  console.log(str.indexOf("e")); // 4
  ```
- 转换
  `split`: 用指定字符分割字符，返回分割后的数组
  ```js
  console.log(str.split("")); // ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  console.log(str.split("e")); // ['abcd', 'fg']
  ```

### 4. 类型转换机制

JavaScript 中的类型转换可以分为显式类型转换和隐式类型转换。

- 显式类型转换：使用 Number(), String(), Boolean(), parseInt(), parseFloat()这种显示转换函数
- 隐式类型转换：不需要显示调用函数。比如 !!'test', +'22'。
  - 字符串转数字：`Number(str) ; parseInt(str) ; str\*1 ; str-0`
  - 数字转字符串：`num.toString() ; String(num) ; num+''`
  - 布尔值转数字：
  ```js
  console.log(+true, true && 1);
  console.log(+false, false || 0);
  ```
  - 数字、字符串等转化为布尔值
  ```js
  console.log(!!1, !!str, !!true, !![], Boolean(1)); // true true true true true
  console.log(!!0, !!null, !!undefined, Boolean(0)); // false false false false
  ```

### 5. 深拷贝和浅拷贝

当拷贝对象为引用类型时，浅拷贝 拷贝对象和源对象仍然指向同一内存地址，任意对象的修改会影响另一个；深拷贝则是重新开辟内存，两个对象指向不同的地址不会相互影响<br/>

- 常用拷贝方法 `Object.assign()` 和扩展运算符 `...` 都属于浅拷贝
- 实现深拷贝常用方法

  - `JSON.parse(JSON.stringify(obj))` 需要注意：如果 obj 是函数或者 undefined 会报错
  - `lodash.cloneDeep()`
  - 手写深拷贝函数（递归）

  ```js
  function deepClone(obj) {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }

    let result = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      if (obj instanceof Array || obj instanceof Object) {
        if (typeof obj[key] === "object") {
          result[key] = deepClone(obj[key]);
        } else {
          result[key] = obj[key];
        }
      }
    }
    return result;
  }
  ```
