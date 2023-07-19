<!--
 * Author  Vincy.Li
 * Date  2023-07-13 19:48:53
 * LastEditors  Vincy.Li
 * LastEditTime  2023-07-18 17:10:02
 * Description
-->

# 常用数组方法

### 1. 数组去重

```js
function unique(arr) {
  return Array.from(new Set(arr));
  // or return [...new Set(arr)]
}

// ES5
function unique2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}

console.log(unique(arr), unique2(arr));
```

### 2. 字符串转数组

```js
// 翻转字符串
console.log(str.split("").reverse().join(""));
console.log([...str].reverse().join(""));
console.log(Array.from(str).reverse().join(""));
// 找出任意网页的所有不重复的html标签
const noRepeatHtml = [
  ...new Set([...document.querySelectorAll("*")].map((item) => item.tagName)),
];
```
