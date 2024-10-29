function populateSlides(divElem, slideQty, nameStr, folder) {
  let innerMarkup = `<div class="${nameStr}-spacer"></div>`;
  for (let i = 0; i < slideQty; i++) {
    const path = `./assets/${folder}/${nameStr}/${i}.png`;
    const image = `<img src="${path}" alt=""/>`;
    innerMarkup += image;
  }
  innerMarkup += `<div class="${nameStr}-spacer"></div>`;
  divElem.innerHTML = innerMarkup;
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
