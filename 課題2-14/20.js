//ループ有用
// const btn = document.querySelector("button");
// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");

// document.addEventListener("DOMContentLoaded", () => {
//   canvas.width = document.documentElement.clientWidth;
//   canvas.height = document.documentElement.clientHeight;
// });

// function random(number) {
//   return Math.floor(Math.random() * number);
// }

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   for (let i = 0; i < 100; i++) {
//     ctx.beginPath();
//     ctx.fillStyle = "rgb(255 0 0 / 50%)";
//     ctx.arc(
//       random(canvas.width),
//       random(canvas.height),
//       random(50),
//       0,
//       2 * Math.PI,
//     );
//     ctx.fill();
//   }
// }

// btn.addEventListener("click", draw);

//コレクション内
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}

function toUpper(string) {
    return string.toUpperCase();
}
  
//   const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
  
  const upperCats = cats.map(toUpper);
  
  console.log(upperCats);
  // [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

//   function lCat(cat) {
//     return cat.startsWith("L");
//   }
  
//   const cats2 = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
  
//   const filtered = cats2.filter(lCat);
  
//   console.log(filtered);
//   // [ "Leopard", "Lion" ]

  const cats2 = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats2.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]

  

//for
const results = document.querySelector("#results");

function calculate() {
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += "\n完了!\n\n";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));

const cats3 = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (let i = 0; i < cats3.length; i++) {
  console.log(cats3[i]);
}

const cats4 = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (const cat of cats4) {
  myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "

for (let i = 0; i < cats4.length; i++) {
    if (i === cats4.length - 1) {
      // 配列の最後にいる場合
      myFavoriteCats += `and ${cats4[i]}.`;
    } else {
      myFavoriteCats += `${cats4[i]}, `;
    }
}
  
console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."

//break
const contacts = [
    "クリス:2232322",
    "サラ:3453456",
    "ビル:7654322",
    "メアリー:9998769",
    "ダイアン:9384975",
  ];
//   const para = document.querySelector("p");
//   const input = document.querySelector("input");
//   const btn2 = document.querySelector("button2");
  
//   btn2.addEventListener("click", () => {
//     const searchName = input.value.toLowerCase();
//     input.value = "";
//     input.focus();
//     para.textContent = "";
//     for (const contact of contacts) {
//       const splitContact = contact.split(":");
//       if (splitContact[0].toLowerCase() === searchName) {
//         para.textContent = `${splitContact[0]}の電話番号は ${splitContact[1]} です。`;
//         break;
//       }
//     }
//     if (para.textContent === "") {
//       para.textContent = "連絡先が見つかりません。";
//     }
//   });
  
//continue
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  para.textContent = "出力: ";
  const num = input.value;
  input.value = "";
  input.focus();
  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    para.textContent += `${i} `;
  }
});

//while
const cats5 = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats5 = "My cats are called ";

let i = 0;

while (i < cats5.length) {
  if (i === cats5.length - 1) {
    myFavoriteCats5 += `and ${cats5[i]}.`;
  } else {
    myFavoriteCats5 += `${cats5[i]}, `;
  }

  i++;
}

console.log(myFavoriteCats5); // "My cats are called Pete, Biggles, and Jasmine."

//どの種類


