const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

let count = 1;

buttonA.onclick = () => {
  buttonA.textContent = "もう一度！";
  headingA.textContent = `${count} 回クリックしました`;
  count += 1;
};


//変数の宣言
// myName;
// myAge;

//scoobyDoo;

//変数の初期化
// myName = "Chris";
//myAge = 37;

let myDog = "Rover";

//var
// var myName;
// var myAge;

// myName = "Chris";

function logName() {
//   console.log(myName);
}

logName();

// var myName;

// var myName = "Chris";
// var myName = "Bob";

let myName = "Chris";
myName = "Bob";

//変数の更新
myName = "Bob";
//myAge = 40;

//変数のデータ型
let myAge = 17;

let dolphinGoodbye = "So long and thanks for all the fish";

let iAmAlive = true;

let test = 6 < 3;

let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];

let dog = { name: "ポチ", breed: "ダルメシアン" };

//動的型付け
let myString = "Hello";

// let myNumber = "500"; // おっと、これはまだ文字列です
// typeof myNumber;
// myNumber = 500; // はるかに良い — これで数値になりました
// typeof myNumber;

//定数
// let count;

let Count = 1;
Count = 2;

const bird = { species: "Kestrel" };
console.log(bird.species); // "Kestrel"

bird.species = "Striated Caracara";
console.log(bird.species); // "Striated Caracara"
