//ブラウザ組込み
// const myText = "I am a string";
// const newString = myText.replace("string", "sausage");
// console.log(newString);
// replace() 文字列関数は、対象の文字列と元の文字列を
// 受け取り、元の文字列を対象の文字列に置き換えて、
// 新しく形成した文字列を返します。

// const myArray = ["I", "love", "chocolate", "frogs"];
// const madeAString = myArray.join(" ");
// console.log(madeAString);
// join() 関数は配列を受け取り、配列のすべての
// 項目を単一の文字列に結合し、新しい文字列を
// 返します。

// const myNumber = Math.random();
// random() 関数は、 0 から 1 までの乱数を生成し、
// その乱数を返します。

//メソッド
// function draw() {
//     ctx.clearRect(0, 0, WIDTH, HEIGHT);
//     for (let i = 0; i < 100; i++) {
//       ctx.beginPath();
//       ctx.fillStyle = "rgb(255 0 0 / 50%)";
//       ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
//       ctx.fill();
//     }
// }

// draw();

function random(number) {
    return Math.floor(Math.random() * number);
}
  
//呼び出し
function myFunction() {
    alert("hello");
}
  
myFunction();
  // 関数を一度呼び出す
  
//引数
const myNumber = Math.random();

const myText = "I am a string";
const newString = myText.replace("string", "sausage");

const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// 'I love chocolate frogs' を返す

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// 'I,love,chocolate,frogs' を返す

function hello(name = "Chris") {
    console.log(`Hello ${name}!`);
}
  
  hello("Ari"); // Hello Ari!
  hello(); // Hello Chris!
  

//無名、アロー
(function () {
    alert("hello");
});

function logKey(event) {
    console.log(`"${event.key}" を押しました。`);
}
  
textBox.addEventListener("keydown", logKey);
  
textBox.addEventListener("keydown", function (event) {
    console.log(`"${event.key}" を押しました。`);
});

textBox.addEventListener("keydown", function (event) {
    console.log(`"${event.key}" を押しました。`);
});
  
textBox.addEventListener("keydown", function (event) {
    console.log(`"${event.key}" を押しました。`);
});

const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `"${event.key}" を押しました。`;
});

  
//スコ－プ、競合