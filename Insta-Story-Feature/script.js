var arr = [
  { dp: "./assets/image-4.jpg", story: "./assets/image-4.jpg" },
  { dp: "./assets/image-7.jpg", story: "./assets/image-7.jpg" },
  { dp: "./assets/image-1.jpg", story: "./assets/image-1.jpg" },
  { dp: "./assets/image-3.jpg", story: "./assets/image-3.jpg" },
  { dp: "./assets/image-2.jpg", story: "./assets/image-2.jpg" },
  { dp: "./assets/image-6.jpg", story: "./assets/image-6.jpg" },
  { dp: "./assets/image-5.jpg", story: "./assets/image-5.jpg" },
];

var storyian = document.querySelector("#storyian");
var clutter ="";
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}">
            </div>`
})

storyian.innerHTML = clutter;

storyian.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${
      arr[dets.target.id].story})`

     setTimeout(function(){
      document.querySelector("#full-screen").style.display = "none";
     },3000);
});