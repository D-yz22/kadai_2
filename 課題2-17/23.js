//返値
const myText = "今日は寒い";
const newString = myText.replace("寒い", "暖かい");
console.log(newString); // "今日は暖かい" と出力
// 文字列の replace() 関数は文字列を受け取り、
// 一方の部分文字列をもう一方の部分文字列に置き換え、
// 置き換えられた新しい文字列を返します。

// function draw() {
//     ctx.clearRect(0, 0, WIDTH, HEIGHT);
//     for (let i = 0; i < 100; i++) {
//       ctx.beginPath();
//       ctx.fillStyle = "rgb(255 0 0 / 50%)";
//       ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
//       ctx.fill();
//     }
// }

// function random(number) {
//     return Math.floor(Math.random() * number);
// }

function random(number) {
    const result = Math.floor(Math.random() * number);
    return result;
}

// ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);

// ctx.arc(500, 200, 35, 0, 2 * Math.PI);

//あなたの番
//円の面積を求める関数
function circle(r){
    const ans = r*r*Math.PI;
    const result = Math.round(ans)
    return result + " cm^2"; 
}

//直方体の体積を求める関数
function vol(x,y,z){
    const ans2 = x*y*z;
    return ans2 + " cm^3"
}