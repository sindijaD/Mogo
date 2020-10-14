//what we do
let inText1 = document.querySelector(".innertext");
let intext2 = document.querySelector(".innertext2");
let inText3 = document.querySelector(".innertext3");

function showinnertext(first, second, third) {
  first.style.display = "none";
  second.style.display = "none";
  third.classList.add("innertext");
  third.innerHTML =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat atque consequuntur ab, dolores vero laboriosam ipsa doloribus id dolorem neque rem amet saepe, repudiandae dolor velit excepturi impedit quidem omnis, optio esse. Ullam aspernatur veritatis molestias. Laboriosam quas debitis corrupti Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus ut praesentium sit rem unde mollitia quos! Et earum voluptatibus nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsum ipsam ut repellendus ea dicta fugit sequi soluta perspiciatis, nam asperiores nulla error molestias in Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur";
  third.style.display = "block";
}

let arrowtwo = document.querySelector("#arrowtwo");
let arrowOne = document.querySelector("#arrowone");
let arrowThree = document.querySelector("#arrowthree");

arrowOne.onclick = function () {
  showinnertext(intext2, inText3, inText1);
};
arrowtwo.onclick = function () {
  showinnertext(inText1, inText3, intext2);
};
arrowThree.onclick = function () {
  showinnertext(inText1, intext2, inText3);
};
//what we do-Carousel

const carousel = document.querySelector(".customerreview");
const arrowleft = document.querySelector(".arrowleft");
const arrowright = document.querySelector(".arrowright");
let carouselItem = [
  document.querySelector("#carousel-item-1"),
  document.querySelector("#carousel-item-2"),
];
// let position = 0;

function moveright() {
  if (carouselItem[0]) {
    carouselItem[0].style.display = "none";
    carouselItem[1].style.display = "flex";
    arrowright.style.display = "none";
    arrowleft.style.display = "block";
  } else {
    carouselItem[0].style.display = "flex";
  }
}

function moveleft() {
  if (carouselItem[1]) {
    carouselItem[1].style.display = "none";
    carouselItem[0].style.display = "flex";
    arrowright.style.display = "block";
    arrowleft.style.display = "none";
  } else {
    carouselItem[1].style.display = "flex";
  }
}

arrowright.onclick = function () {
  moveright();
};
arrowleft.onclick = function () {
  moveleft();
};

// //carousel-2
// const carousel2 = document.querySelector("#carousel");
// const arrowleftcar2 = document.querySelector("#arrowleft");
// const arrowrightcar2 = document.querySelector("#arrowright");
// let carouselslide = [
//   document.querySelector("#carousel-1"),
//   document.querySelector("#carousel-2"),
// ];
// // let position = 0;

// function moveright() {
//   if (carouselslide[0]) {
//     carouselslide[0].style.display = "none";
//     carouselslide[1].style.display = "flex";
//     arrowrightcar2.style.display = "none";
//     arrowleftcar2.style.display = "block";
//   } else {
//     carouselslide[0].style.display = "flex";
//   }
// }

// function moveleft() {
//   if (carouselslide[1]) {
//     carouselslide[1].style.display = "none";
//     carouselslide[0].style.display = "flex";
//     arrowrightcar2.style.display = "block";
//     arrowleftcar2.style.display = "none";
//   } else {
//     carouselslide[1].style.display = "flex";
//   }
// }

// arrowrightcar2.onclick = function () {
//   moveright();
// };
// arrowleftcar2.onclick = function () {
//   moveleft();
// };
