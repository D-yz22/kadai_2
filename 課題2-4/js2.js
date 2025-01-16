//制御構造
let name = "kittens";
if (name === "puppies") {
  name += " woof";
} else if (name === "kittens") {
  name += " meow";
} else {
  name += "!";
}
name === "kittens meow";
console.log(name);

while (true) {
  // 無限ループ!
}

let input;
do {
  input = get_input();
} while (inputIsNotValid(input));
console.log(input);

// for (let i = 0; i < 5; i++) {
//   // 5 回実行されます
// }

// for (const value of array) {
//   // 値に関する処理
// }

// for (const property in object) {
//   // オブジェクトのプロパティに関する処理
// }

// switch (action) {
//   case "draw":
//     drawIt();
//     break;
//   case "eat":
//     eatIt();
//     break;
//   default:
//     doNothing();
// }

// try {
//   buildMySite("./website");
// } catch (e) {
//   console.error("サイトの構築に失敗しました:", e);
// }

// function buildMySite(siteDirectory) {
//   if (!pathExists(siteDirectory)) {
//     throw new Error("サイトのディレクトリーが存在しません");
//   }
// }

// try {
//   buildMySite("./website");
// } catch (e) {
//   if (e instanceof RangeError) {
//     console.error("引数が範囲を超えているようです:", e);
//     console.log("再試行中...");
//     buildMySite("./website");
//   } else {
//     // 他の種類のエラーをどのように処理すればよいのかわからない場合、呼び出す
//     // スタックの上位にある何かで捕捉して処理できるように throw します。
//     throw e;
//   }
// }

// //オブジェクト
// const obj = {
//     name: "Carrot",
//     for: "Max",
//     details: {
//       color: "orange",
//       size: 12,
//     },
//   };

//   // ドット記法
// obj.name = "Simon";
// const name = obj.name;

// // ブラケット記法
// obj["name"] = "Simon";
// const name = obj["name"];

// // 変数をキー定義に使用できる
// const userName = prompt("キーは何ですか？");
// obj[userName] = prompt("値は何ですか？");

// obj.details.color; // orange
// obj["details"]["size"]; // 12

// const obj = {};
// function doSomething(o) {
//   o.x = 1;
// }
// doSomething(obj);
// console.log(obj.x); // 1

// const me = {};
// const stillMe = me;
// me.x = 1;
// console.log(stillMe.x); // 1

// //配列
// const a = ["dog", "cat", "hen"];
// a.length; // 3

// const a = ["dog", "cat", "hen"];
// a[100] = "fox";
// console.log(a.length); // 101
// console.log(a); // ['dog', 'cat', 'hen', 空 × 97, 'fox']

// const arr = [1, "foo", true];
// arr.push({});
// // arr = [1, "foo", true, {}]

// for (let i = 0; i < a.length; i++) {
//     // a[i] について何かする
// }

// for (const currentValue of a) {
//   // currentValue (現在の値) で何かをする
// }

// const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
// // babies = ['baby dog', 'baby cat', 'baby hen']

// //関数
// function add(x, y) {
//     const total = x + y;
//     return total;
// }

// add(); // NaN
// // Equivalent to add(undefined, undefined)

// add(2, 3, 4); // 5
// // 第 1、第 2 引数を加算。4 は無視される

// function avg(...args) {
//     let sum = 0;
//     for (const item of args) {
//       sum += item;
//     }
//     return sum / args.length;
// }
  
// avg(2, 3, 4, 5); // 3.5
  
// // { } 中括弧はオブジェクト野分割代入する
// function area({ width, height }) {
//     return width * height;
// }
  
//   // { } 中括弧はここでは新しいオブジェクトを作成する
// console.log(area({ width: 2, height: 3 }));
  
// function avg(firstValue, secondValue, thirdValue = 0) {
//     return (firstValue + secondValue + thirdValue) / 3;
// }
  
// avg(1, 2); // 1, instead of NaN
  
// // 括弧の前に関数名がないことに注意
// const avg = function (...args) {
//     let sum = 0;
//     for (const item of args) {
//       sum += item;
//     }
//     return sum / args.length;
// };

//   // 括弧の前に関数名がないことに注意
// const avg = (...args) => {
//     let sum = 0;
//     for (const item of args) {
//       sum += item;
//     }
//     return sum / args.length;
// };
  
//   // 単に式を返す場合は `return` を省略できる
// const sum = (a, b, c) => a + b + c;

// (function () {
//     // …
//   })();

// //再帰関数
// function countChars(elm) {
//     if (elm.nodeType === 3) {
//       // TEXT_NODE
//       return elm.nodeValue.length;
//     }
//     let count = 0;
//     for (let i = 0, child; (child = elm.childNodes[i]); i++) {
//       count += countChars(child);
//     }
//     return count;
// }
  
// const charsInBody = (function counter(elm) {
//     if (elm.nodeType === 3) {
//       // TEXT_NODE
//       return elm.nodeValue.length;
//     }
//     let count = 0;
//     for (let i = 0, child; (child = elm.childNodes[i]); i++) {
//       count += counter(child);
//     }
//     return count;
//   })(document.body);

//   // 関数を返す関数
// const add = (x) => (y) => x + y;
// // 関数を受け入れる関数
// const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);

// function parentFunc() {
//     const a = 1;
  
//     function nestedFunc() {
//       const b = 4; // parentFunc はこれを使用できない
//       return a + b;
//     }
//     return nestedFunc(); // 5
// }

// //クラス
// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//     sayHello() {
//       return `Hello, I'm ${this.name}!`;
//     }
// }
  
// const p = new Person("Maria");
// console.log(p.sayHello());

// const withAuthentication = (cls) =>
//     class extends cls {
//       authenticate() {
//         // …
//       }
// };
  
// class Admin extends withAuthentication(Person) {
//     // …
// }
 
// //非同期プログラミング
// // コールバックベース
// fs.readFile(filename, (err, content) => {
//     // このコールバックは、ファイルが読み込まれたときに呼び出される
//     if (err) {
//       throw err;
//     }
//     console.log(content);
// });
//   // このコードは、ファイルが読み込まれるのを待っている間に実行される
  
//   // プロミスベース
// fs.readFile(filename)
//     .then((content) => {
//       // ファイルが読み取られたときに実行されること
//       console.log(content);
//     })
//     .catch((err) => {
//       throw err;
//     });
//   // このコードは、ファイルが読み込まれるのを待っている間に実行される
  
//   // Async/await
// async function readFile(filename) {
//     const content = await fs.readFile(filename);
//     console.log(content);
// }

// //モジュール
// import { foo } from "./foo.js";

// // エクスポートされていない変数はモジュールにローカル
// const b = 2;

// export const a = 1;


