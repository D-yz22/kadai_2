//みんな数学が大好き
const myInt = 5;
const myFloat = 6.667;
myInt;
myFloat;

const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;

let myNumber = "74";
myNumber += 3;

let myNumber2 = "74";
myNumber2 = Number(myNumber) + 3;

//算術演算子
//const num1 = 10;
// const num2 = 50;
// 9 * num1;
// num1 ** 3;
// num2 / num1;

//インクリメント演算子とデクリメント演算子
//guessCount++;

let num1 = 4;
num1++;

let num2 = 6;
num2--;
num2;

// let x = 3; // x には 3 が入る
// let y = 4; // y には 4 が入る
// x = y; // x には y と同じ値:4 が入る

let x = 3; // x には 3 が入る
let y = 4; // y には 4 が入る
x *= y; // x は 12 になる

//アクティブラーニング
// Edit the two lines below here ONLY
x = 50;
y = 50;


//比較演算子
const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "起動する") {
    btn.textContent = "停止する";
    txt.textContent = "マシンが起動しました！";
  } else {
    btn.textContent = "起動する";
    txt.textContent = "マシンは停止中です。";
  }
}
