//作成
const shopping = ["パン", "牛乳", "チーズ", "ハム", "麺"];
console.log(shopping);

const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ["tree", 795, [0, 1, 2]];

//長さ
console.log(shopping.length);

//項目
console.log(shopping[0]);
// "パン"という値が戻ります

shopping[0] = "タヒーニ";
shopping;
console.log(shopping);
// 買い物リストは [ "タヒーニ", "牛乳", "チーズ", "ハム", "麺" ] に変更されています。

const birds = ["オウム", "鷹", "フクロウ"];
console.log(birds.indexOf("フクロウ")); // 2
console.log(birds.indexOf("ウサギ")); // -1

//追加
const cities = ["東京", "大阪"];
cities.push("広島");
console.log(cities); // [ "東京", "大阪", "広島" ]
cities.push("福岡", "鹿児島");
console.log(cities); // [ "東京", "大阪", "広島", "福岡", "鹿児島" ]

const newLength = cities.push("神戸");
console.log(cities); // [ "東京", "大阪", "神戸" ]
console.log(newLength); // 3

cities.unshift("札幌");
console.log(cities); // [ "札幌", "東京", "大阪" ]
console.log(cities.length); // [ "札幌", "東京", "大阪" ]

//削除
cities.pop();
console.log(cities); // [ "東京" ]

const removedCity = cities.pop();
console.log(removedCity); // "大阪"

// cities.shift();
// console.log(cities); // [ "大阪" ]
// const index = cities.indexOf("大阪");
// if (index !== -1) {
//   cities.splice(index, 1);
// }
// console.log(cities); // [ "東京", "仙台", "札幌" ]

const index = cities.indexOf("大阪");
if (index !== -1) {
  cities.splice(index, 2);
}
console.log(cities); // [ "東京", "札幌" ]

//アクセス
for (const bird of birds) {
    console.log(bird);
  }

  function double(number) {
    return number * 2;
  }
  const numbers = [5, 2, 7, 6];
  const doubled = numbers.map(double);
  console.log(doubled); // [ 10, 4, 14, 12 ]
  
  function isLong(city) {
    return city.length > 2;
}
const cities2 = ["東京", "名古屋", "大阪", "鹿児島"];
const longer = cities2.filter(isLong);
console.log(longer); // [ "名古屋", "鹿児島" ]
  

const data = "札幌,仙台,東京,名古屋,大阪,福岡";

const cities3 = data.split(",");
cities3;

cities3.length;
cities3[0]; // 配列の最初の項目
cities3[1]; // 配列の 2 番目の項目
cities3[cities3.length - 1]; // 配列の最後の項目

const commaSeparated = cities.join(",");
commaSeparated;

const dogNames = ["ポチ", "ハチ", "タロウ", "モコ"];
dogNames.toString(); //ポチ,ハチ,タロウ,モコ
