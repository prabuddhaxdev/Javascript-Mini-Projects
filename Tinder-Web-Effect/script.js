let users = [
  {
    profilePic: "./assets/image-2.jpg",
    displayPic: "./assets/image-4.jpg",
    pendingMessage: 4,
    location: "Mumbai, India",
    name: "Elizabeth",
    age: 24,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "Music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "Writing",
      },
    ],
    bio: "Dreamer, adventurer, fashion enthusiast, coffee lover—let’s make life unforgettable together.",
    isFriend: null,
  },
  {
    profilePic: "./assets/image-3.jpg",
    displayPic: "./assets/image-2.jpg",
    pendingMessage: 4,
    location: "Delhi, India",
    name: "Shivangi",
    age: 26,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "Music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "Writing",
      },
    ],
    bio: "Adventurous spirit, coffee lover, bookworm. Seeking genuine connections and spontaneous adventures. Let’s explore together.",
    isFriend: null,
  },

  {
    profilePic: "./assets/image-1.jpg",
    displayPic: "./assets/image-3.jpg",
    pendingMessage: 4,
    location: "Hyderabad, India",
    name: "Nishi",
    age: 21,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "Music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "Writing",
      },
    ],
    bio: "Passionate traveler and foodie. Enjoys deep conversations and laughter. Looking for someone to share adventures and create memories with.",
    isFriend: null,
  },

  {
    profilePic: "./assets/image-2.jpg",
    displayPic: "./assets/image-5.jpg",
    pendingMessage: 4,
    location: "Kolkata, India",
    name: "Dakota",
    age: 20,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "Music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "Writing",
      },
    ],
    bio: "Art enthusiast and nature lover. Always up for a good book or a hike. Let’s connect and share our stories!",
    isFriend: null,
  },
  {
    profilePic: "./assets/image-4.jpg",
    displayPic: "./assets/image-1.jpg",
    pendingMessage: 4,
    location: "Gurgaon, India",
    name: "Scarlett",
    age: 22,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "Music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "Writing",
      },
    ],
    bio: "Creative thinker and fitness enthusiast. Love trying new recipes and exploring the outdoors. Seeking a partner for fun adventures!",
    isFriend: null,
  },
  {
    profilePic: "./assets/image-5.jpg",
    displayPic: "./assets/image-6.jpg",
    pendingMessage: 4,
    location: "Indore, India",
    name: "Emma",
    age: 23,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "Music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "Writing",
      },
    ],
    bio: "Dog lover and music junkie. Enjoys cozy nights in and spontaneous road trips. Looking for someone to share life's moments!",
    isFriend: null,
  },
];

function select(elem){
    return document.querySelector(elem);
}

let curr = 0;
let isAnimating = false;

function setData(index){
select(".prflimg img").src = users[index].profilePic;
select(".badge h5").textContent = users[index].pendingMessage;
select(".location h3").textContent = users[index].location;
select(".name h1:nth-child(1)").textContent = users[index].name;
select(".name h1:nth-child(2)").textContent = users[index].age;

let clutter = "";
users[index].interests.forEach(function (interest) {
  clutter += `<div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
              ${interest.icon}
              <h3 class="text-sm text-lg tracking-tight capitalize">${interest.interest}</h3>
            </div>`;
});

select(".tags").innerHTML = clutter;

select(".bio p").textContent = users[index].bio;
}



(function setInitial(){
    select(".maincard img ").src = users[curr].displayPic;
    select(".incomingcard img").src = users[curr+1]?.displayPic;

    setData(curr);

    curr =2;
})();

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function () {
  imageChange();
  setData(curr-1);
  gsap.from(".details .element",{
    y: "100%",
    stagger: .06,
    ease: Power4.easeInOut,
    duration: 1.5
  })
});
accept.addEventListener("click", function () {
  imageChange();
  setData(curr-1);
  gsap.from(".details .element",{
    y: "100%",
    stagger: .06,
    ease: Power4.easeInOut,
    duration: 1.5
  })
});

function imageChange(){
  if(!isAnimating){
    isAnimating = true;
    let tl = gsap.timeline({
    onComplete: function () {
      isAnimating=false;
      let main = select(".maincard");
      let incoming = select(".incomingcard");

      incoming.classList.remove("z-[2]");
      incoming.classList.add("z-[3]");
      incoming.classList.remove("incomingcard");

      main.classList.remove("z-[3]");
      main.classList.add("z-[2]");
      gsap.set(main, {
         scale: 1,
        opacity: 1,
      });
      if (curr === users.length) curr = 0;
      select(".maincard img").src = users[curr].displayPic;
      curr++;
      main.classList.remove("maincard");
      incoming.classList.add("maincard");
      main.classList.add("incomingcard");
    },
  });

  tl.to(
    ".maincard",{
      scale: 1.1,
      opacity: 0,
      ease: Circ,
      duration: 0.9,
    },"a");
  tl.from(
    ".incomingcard",{
      scale: 0.9,
      opacity: 0,
      ease: Circ,
      duration: 1.1,
    },"a");
  }
};

(function containerCreator(){
  document.querySelectorAll(".element")
  .forEach(function (element){
    let div = document.createElement("div");
    div.classList.add(`${element.classList[1]}container`,`overflow-hidden`);
    div.appendChild(element);
    select(".details").appendChild(div);
  })
})();



