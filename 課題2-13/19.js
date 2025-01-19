//if
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}

console.log(childsAllowance);

// const select = document.querySelector("select");
// const para = document.querySelector("p");

// select.addEventListener("change", setWeather);

// function setWeather() {
//   const choice = select.value;

//   if (choice === "sunny") {
//     para.textContent =
//       "今日はとてもいい天気です。半ズボンをはいて、砂浜や公園に出かけ、アイスクリームを食べましょう！";
//   } else if (choice === "rainy") {
//     para.textContent =
//       "外は雨が降っています。レインコートと傘を忘れないようにして、できる限り室内で過ごしましょう。";
//   } else if (choice === "snowing") {
//     para.textContent =
//       "雪が降ってとても寒いです！室内でホットチョコレートを飲むか、雪だるまを作るのがよいでしょう。";
//   } else if (choice === "overcast") {
//     para.textContent =
//       "雨は降っていませんが、空はとても暗くなっています。万が一に備えレインコートを持っていきましょう。";
//   } else {
//     para.textContent = "";
//   }

//   if (choice === "sunny") {
//     temperature = 25;
//     if (temperature < 30) {
//       para.textContent = `外の気温は ${temperature} 度です — とてもいい天気です。海水浴や、公園に出かけてアイスクリームを食べましょう。`;
//     } else if (temperature >= 30) {
//       para.textContent = `外の気温は ${temperature} 度です — かなり暑いです！外に出るときは、日焼け止めを塗りましょう。`;
//     }
//   }

//   if (choice === "sunny" && temperature < 30) {
//     para.textContent = `外の気温は ${temperature} 度です — とてもいい天気です。海水浴や、公園に出かけてアイスクリームを食べましょう。`;
//   } else if (choice === "sunny" && temperature >= 30) {
//     para.textContent = `外の気温は ${temperature} 度です — かなり暑いです！外に出るときは、日焼け止めを塗りましょう。`;
//   }
  
  
// }

let cheese = "チェダー";

if (cheese) {
  console.log("やった！チーズトーストを作るチーズがあるよ。");
} else {
  console.log("今日はチーズトーストのチーズがないよ。");
}

// let iceCreamVanOutside = "火事";
// let houseStatus = "火事";
// if (iceCreamVanOutside || houseStatus === "火事") {
//     console.log("すぐに家から出ましょう。");
//   } else {
//     console.log("それでは家にいましょう。");
// }

// let x = 0;
// if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "スティーブ")) {
//     // コードを実行
//     console.log(x);
//   }
  

  
//switch
// const select = document.querySelector("select");
// const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case "sunny":
      para.textContent =
        "今日はとてもいい天気です。半ズボンをはいて、砂浜や公園に出かけ、アイスクリームを食べましょう！";
      break;
    case "rainy":
      para.textContent =
        "外は雨が降っています。レインコートと傘を忘れないようにして、できる限り室内で過ごしましょう。";
      break;
    case "snowing":
      para.textContent =
        "雪が降ってとても寒いです！室内でホットチョコレートを飲むか、雪だるまを作るのがよいでしょう。";
      break;
    case "overcast":
      para.textContent =
        "雨は降っていませんが、空はとても暗くなっています。万が一に備えレインコートを持っていきましょう。";
      break;
    default:
      para.textContent = "";
  }
}


//三項演算子
// let isBirthday = false;
// const greeting = isBirthday
//   ? "スミスさん、誕生日おめでとうございます！良い一日を。"
//   : "スミスさんおはようございます。";

