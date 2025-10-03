let redBtn = document.getElementById("red");
let blueBtn = document.getElementById("blue");
let blackBtn = document.getElementById("black");
let bike = document.getElementById("bike");

redBtn.onclick = function(){
    bike.style.backgroundImage = "url(images/BMW1.png)";
}
blueBtn.onclick = function(){
    bike.style.backgroundImage = "url(images/BMW2.png)";
}
blackBtn.onclick = function(){
    bike.style.backgroundImage = "url(images/BMW3.png)";
}