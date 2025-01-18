const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pics = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"]

/* Declaring the alternative text for each image file */
const picsAlts = ["人間の青い目の拡大","地層","紫色の花","壁画","葉っぱの上の蝶"]


/* Looping through images */

for (let i = 0; i<pics.length;i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/"+pics[i]);
    newImage.setAttribute('alt', picsAlts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", function() {
        displayedImage.src = "images/" + pics[i];
        displayedImage.alt = picsAlts[i];
    });
}
    

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click",() => {
    const btnClass = btn.getAttribute("class");
    if(btnClass == "dark"){
        btn.setAttribute("class","light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor="rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class","dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor="rgba(0, 0, 0, 0)";
    }
});

