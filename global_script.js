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
