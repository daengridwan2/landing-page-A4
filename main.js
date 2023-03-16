// header slider onclick
function imgSlider(anything) {
  document.querySelector(".header").src = anything;
}

const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// categori slide
const tabNavList = document.querySelectorAll(".tab-nav li");
const tabBody = document.querySelectorAll(".tab-body");
const index = document.querySelectorAll(".index")

tabNavList.forEach((item, index, listArray) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      return;
    } else {
      document.querySelector(".active").classList.remove("active");
      item.classList.add("active");
    }

    if (listArray[0].classList.contains("active")) {
      tabBody[0].classList.add("active");
      tabBody[1].classList.remove("active");
      tabBody[2].classList.remove("active");
    }

    if (listArray[1].classList.contains("active")) {
      tabBody[1].classList.add("active");
      tabBody[0].classList.remove("active");
      tabBody[2].classList.remove("active");
    }

    if (listArray[2].classList.contains("active")) {
      tabBody[2].classList.add("active");
      tabBody[1].classList.remove("active");
      tabBody[0].classList.remove("active");
    }
  });
});


// counter
$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});

// type js
// var typed = new Typed(".tipe", {
//   strings: ["perlukah kita belajar programming ?"],
//   typeSpeed: 50,
//   backSpeed: 50,
//   loop: true,
// });
// const tabNavList = document.querySelectorAll(".tab-nav li");
// const tabBody = document.querySelectorAll(".tab-body");

// tabNavList.forEach((item, index, listArray) => {
//   item.addEventListener("click", () => {
//     if (item.classList.contains("active")) {
//       return;
//     } else {
//       document.querySelector(".active").classList.remove("active");
//       item.classList.add("active");
//     }

//     if (listArray[0].classList.contains("active")) {
//       tabBody[0].classList.add("active");
//       tabBody[1].classList.remove("active");
//       tabBody[2].classList.remove("active");
//     }

//     if (listArray[1].classList.contains("active")) {
//       tabBody[1].classList.add("active");
//       tabBody[0].classList.remove("active");
//       tabBody[2].classList.remove("active");
//     }

//     if (listArray[2].classList.contains("active")) {
//       tabBody[2].classList.add("active");
//       tabBody[1].classList.remove("active");
//       tabBody[0].classList.remove("active");
//     }
//   });
// });
