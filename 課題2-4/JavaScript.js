//数値
console.log(3 / 2); // 1.5, 1 ではない

console.log(0.1 + 0.2); // 0.30000000000000004

console.log(0b111110111); // 503
console.log(0o767); // 503
console.log(0x1f7); // 503
console.log(5.03e2); // 503

console.log(-3n / 2n); // -1n

Math.sin(3.5);
//const circumference = 2 * Math.PI * r;

//文字列
console.log("Hello, world");
console.log("你好，世界！"); // ほぼすべての Unicode 文字は文字列リテラルで書くことができます。

console.log("Hello"[1] === "e"); // true

const age = 25;
console.log("私は " + age + " 歳です。"); // 文字列へ変換
console.log(`私は ${age} 歳です。`); // テンプレートリテラル

//その他
Boolean(""); // false
Boolean(234); // true
console.log(Boolean);

//変数
// let a;
// let name = "Simon";

// ここでは myLetVariable が *見えません*

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // ここでだけ myLetVariable が見えます
  console.log(myLetVariable);
}

// ここでは myLetVariable が *見えません*

const Pi = 3.14; // 変数 Pi を設定
console.log(Pi); // 3.14

const obj = {};
obj.a = 1; // エラーなし
console.log(obj); // { a: 1 }

// function foo(x, condition) {
//   if (condition) {
//     console.log(x);
//     const x = 2;
//     console.log(x);
//   }
// }
  
// foo(1, true);

let a = 1;
a = "foo";
console.log(a);

//演算子
let x = 0;
x += 5;
x = x + 5;
console.log(x);

"hello" + " world"; // "hello world"
console.log("hello" + " world");

"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"

123 == "123"; // true
1 == true; // true

123 === "123"; // false
1 === true; // false

//const a = 0 && "Hello"; // 0 は偽値なので 0
const b = "Hello" || "world"; // "Hello" と "world" は共に真値なので "Hello"
//console.log(a);
console.log(b);

//const name = o && o.getName();

//const name = cachedName || (cachedName = getName());
console.log(name);

//文法

