//文字列の宣言
const string = "革命はテレビでは放送されない。";
console.log(string);

const badString = string;
console.log(badString);

const single = '単一引用符';
const double = "二重引用符";
const backtick = `逆引用符`;

console.log(single);
console.log(double);
console.log(backtick);

//JS埋め込み
// const name = "Chris";
// const greeting = `Hello, ${name}`;
// console.log(greeting); // "Hello, Chris"

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"

const button = document.querySelector("button");

function greet() {
  const name = prompt("あなたの名前は?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `${name} さん、こんにちは。はじめまして！`;
}

button.addEventListener("click", greet);

// const greeting = "Hello";
// const name = "Chris";
// console.log(greeting + ", " + name); // "Hello, Chris"

const greeting = "Hello";
const name = "Chris";
console.log(`${greeting}, ${name}`); // "Hello, Chris"

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."

//複数行
// const newline = `One day you finally knew
// what you had to do, and began,`;
// console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/

const newline = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/

//引用符
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;

console.log(goodQuotes1);
console.log(goodQuotes2);

const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);

//数値と文字列
const Name = "フロント ";
const number = 242;
console.log(Name + number); // "フロント 242"

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
// number

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);
// string
