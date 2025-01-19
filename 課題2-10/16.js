//オブジェクト
const string = "This is my string";
console.log(string);


//文字列の長さ
// const browserType = "mozilla";
// browserType.length;

//特定の文字列
//browserType[0];

//部分文字列
const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

if (browserType.startsWith("zilla")) {
    console.log("Found zilla!");
  } else {
    console.log("No zilla here!");
}

if (browserType.endsWith("zilla")) {
    console.log("Found zilla!");
  } else {
    console.log("No zilla here!");
}

//部分文字列位置
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20

console.log(tagline.indexOf("x")); // -1

const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35

//部分文字列抽出
console.log(browserType.slice(1, 4)); // "ozi"

browserType.slice(2); // "zilla"

//大文字小文字
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

// const updated = browserType.replace("moz", "van");

// console.log(updated); // "vanilla"
// console.log(browserType); // "mozilla"

let browserType2 = "mozilla";
browserType2 = browserType2.replace("moz", "van");

console.log(browserType2); // "vanilla"

let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"
