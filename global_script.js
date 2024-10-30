const fireLoop1 = new Audio("../assets/sounds/fire_loop_1.mp3");
fireLoop1.loop = true;
fireLoop1.volume = 0.7;
const fireLoop2 = new Audio("../assets/sounds/fire_loop_1.mp3");
fireLoop2.loop = true;
fireLoop1.volume = 0.5;
const fireLoop3 = new Audio("../assets/sounds/fire_loop_1.mp3");
fireLoop3.loop = true;
fireLoop1.volume = 0.3;
const boing1 = new Audio("../assets/sounds/boing_1.mp3");
const springboard = new Audio("../assets/sounds/springboard.mp3");

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
