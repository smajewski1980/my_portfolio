const fireLoop1 = new Audio("../assets/sounds/fire_loop_1.mp3");
fireLoop1.loop = true;
fireLoop1.volume = 0.7;
const fireLoop2 = new Audio("../assets/sounds/fire_loop_1.mp3");
fireLoop2.loop = true;
fireLoop2.volume = 0.5;
const fireLoop3 = new Audio("../assets/sounds/fire_loop_1.mp3");
fireLoop3.loop = true;
fireLoop3.volume = 0.3;
const boing1 = new Audio("../assets/sounds/boing_1.mp3");
boing1.volume = 0.6;
const springboard = new Audio("../assets/sounds/springboard.mp3");
springboard.volume = 0.4;
const finalReveal = new Audio("../assets/sounds/final_reveal.mp3");
finalReveal.volume = 0.2;
const sparkFar = new Audio("../assets/sounds/tiny_mortar_1.mp3");
const sparkCloser = new Audio("../assets/sounds/tiny_mortar_2.mp3");
sparkCloser.volume = 0.5;
const sparkClose = new Audio("../assets/sounds/tiny_mortar_2.mp3");
sparkClose.volume = 0.7;
const fireWhoosh = new Audio("../assets/sounds/fire_whoosh.mp3");

function populateSlides(divElem, slideQty, nameStr, folder, pathUp) {
  let innerMarkup = `<div class="${nameStr}-spacer"></div>`;
  let path;
  for (let i = 0; i < slideQty; i++) {
    if (!pathUp) {
      path = `./assets/${folder}/${nameStr}/${i}.png`;
    } else {
      path = `../assets/${folder}/${nameStr}/${i}.png`;
    }
    const image = `<img src="${path}" alt=""/>`;
    innerMarkup += image;
  }
  innerMarkup += `<div class="${nameStr}-spacer"></div>`;
  divElem.innerHTML = innerMarkup;
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
