var swiper = new Swiper(".visual-swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  spaceBetween: 0,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".gallery", {
  slidesPerView: 3,
  spaceBetween: 30,
});

let webBtn = document.querySelector(".main .content .con3 .btn-box .web-btn");
let ediBtn = document.querySelector(".main .content .con3 .btn-box .edi-btn");
let web = document.querySelector(".main .content .con3 .galley .galley-web");
let webDiv = document.querySelectorAll(".main .content .con3 .galley .galley-web .gallery .swiper-wrapper .swiper-slide");
let ediDiv = document.querySelectorAll(".main .content .con3 .galley .galley-edi .gallery .swiper-wrapper .swiper-slide");
let edi = document.querySelector(".main .content .con3 .galley .galley-edi");

let cnt = 0;

let menus = document.querySelectorAll(".nav .gnb li");
let logo = document.querySelector("#header .inner h1");

let popupBg = document.querySelector(".main .content .con3 .popup-bg");
let popup = document.querySelector(".main .content .con3 .popup");
let popupImg = document.querySelector(".main .content .con3 .popup img");
let close = document.querySelector(".main .content .con3 .popup i");

let mouseCursor = document.querySelector(".cursor");

webBtn.addEventListener("click", (e) => {
  web.classList.add("on");
  edi.classList.remove("on");
  web.animate([{ opacity: 0 }, { opacity: 1 }], 600);
});
ediBtn.addEventListener("click", (e) => {
  web.classList.remove("on");
  edi.classList.add("on");
  edi.animate([{ opacity: 0 }, { opacity: 1 }], 600);
});

menus[0].addEventListener("click", (e) => {
  window.scrollTo({ top: 1100, behavior: "smooth" });
});
menus[1].addEventListener("click", (e) => {
  window.scrollTo({ top: 1950, behavior: "smooth" });
});
menus[2].addEventListener("click", (e) => {
  window.scrollTo({ top: 2850, behavior: "smooth" });
});
logo.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

webDiv.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    popupBg.style.display = "block";
    popup.style.display = "block";
    popup.classList.add("show");
    popupImg.setAttribute("src", `img/popup-web/${idx}.jpg`);
  });
  item.addEventListener("mouseenter", (e) => {
    mouseCursor.setAttribute("src", `img/mouse-hover.png`);
    document.body.style.cursor = "none";
  });
  item.addEventListener("mouseleave", (e) => {
    mouseCursor.setAttribute("src", `img/mouse.png`);
    document.body.style.cursor = "none";
  });
});
ediDiv.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    popupBg.style.display = "block";
    popup.style.display = "block";
    popup.classList.add("show");
    popupImg.setAttribute("src", `img/popup-edi/${[idx]}.jpg`);
  });
  item.addEventListener("mouseenter", (e) => {
    mouseCursor.setAttribute("src", `img/mouse-hover.png`);
    document.body.style.cursor = "none";
  });
  item.addEventListener("mouseleave", (e) => {
    mouseCursor.setAttribute("src", `img/mouse.png`);
    document.body.style.cursor = "none";
  });
});

close.addEventListener("click", (e) => {
  popupBg.style.display = "none";
  popup.classList.remove("show");
});

/* window.addEventListener('scroll', (e) => {
    let scrollY = this.scrollY;
    console.log(scrollY);
});
 */
window.addEventListener("mousemove", (e) => {
  mouseCursor.style.left = e.pageX + "px";
  mouseCursor.style.top = e.pageY + "px";
});
