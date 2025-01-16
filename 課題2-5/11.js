// // const btn = document.querySelector("button");

// // function random(number) {
// //   return Math.floor(Math.random() * (number + 1));
// // }

// // btn.addEventListener("click", () => {
// //   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
// //   document.body.style.backgroundColor = rndCol;
// // });


// //addEventListener() の使用
// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// function changeBackground() {
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// }

// btn.addEventListener("click", changeBackground);

// btn.removeEventListener("click", changeBackground);

// const controller = new AbortController();

// btn.addEventListener("click",
//   () => {
//     const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//     document.body.style.backgroundColor = rndCol;
//   },
//   { signal: controller.signal } // このハンドラーに AbortSignal を渡す
// );

// // controller.abort(); // このコントローラーに関連付けられたすべてのイベントを除去

// myElement.addEventListener("click", functionA);
// myElement.addEventListener("click", functionB);

//イベントリスナー
// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.onclick = () => {
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// };


//イベントオブジェクト
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener("click", bgChange);

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
  output.textContent = `"${event.key}" が押されました。`;
});

//既定の動作の抑制
//11_2へ

//