const btnEnter = document.querySelector(".btn-enter");
const btnSkipAnim = document.querySelector(".btn-skip-anim");
const animWrapper = document.querySelector(".animation-wrapper");
const textReveal_1 = document.querySelector(".text-reveal-1");
const textReveal_2 = document.querySelector(".text-reveal-2");
const textReveal_3 = document.querySelector(".text-reveal-3");
const navListItems = document.querySelectorAll("nav li");
const nav = document.querySelector("nav");
const headingWrapper = document.querySelector(".heading-wrapper");
const tempBg = document.querySelector(".temp-bg");
const navExplosion = document.querySelector(".nav-explosion");
const flame2_1 = document.querySelector(".fl-2-1 .flame2");
const flame2_2 = document.querySelector(".fl-2-2 .flame2");
const flame2_3 = document.querySelector(".fl-2-3 .flame2");
const flame3_1 = document.querySelector(".fl-3-1 .flame3");
const flame3_2 = document.querySelector(".fl-3-2 .flame3");
const flame3_3 = document.querySelector(".fl-3-3 .flame3");
const flame3_4 = document.querySelector(".fl-3-4 .flame3");
const flame3_5 = document.querySelector(".fl-3-5 .flame3");
const flame3_6 = document.querySelector(".fl-3-6 .flame3");
const flame3Arr = [flame3_1, flame3_2, flame3_3, flame3_4, flame3_5, flame3_6];
const flame5_1 = document.querySelector(".fl-5-1 .flame5");
const flame5_2 = document.querySelector(".fl-5-2 .flame5");
const flame5_3 = document.querySelector(".fl-5-3 .flame5");
const flame6_1 = document.querySelector(".fl-6-1 .flame6");
const flame6_1W = document.querySelector(".fl-6-1");
const flame6_1W_X = document.querySelector(".fl-6-1-x-wrapper");
const flame6_2 = document.querySelector(".fl-6-2 .flame6");
const flame6_2W = document.querySelector(".fl-6-2");
const flame6_2W_X = document.querySelector(".fl-6-2-x-wrapper");
const flame6_3 = document.querySelector(".fl-6-3 .flame6");
const flame6_3W = document.querySelector(".fl-6-3");
const flame6_3W_X = document.querySelector(".fl-6-3-x-wrapper");
const flame6_4 = document.querySelector(".fl-6-4 .flame6");
const flame6_4W = document.querySelector(".fl-6-4");
const flame6_4W_X = document.querySelector(".fl-6-4-x-wrapper");
const flame6_5 = document.querySelector(".fl-6-5 .flame6");
const flame6_5W = document.querySelector(".fl-6-5");
const flame6_5W_X = document.querySelector(".fl-6-5-x-wrapper");
const flame6_6 = document.querySelector(".fl-6-6 .flame6");
const flame6_6W = document.querySelector(".fl-6-6");
const flame6_6W_X = document.querySelector(".fl-6-6-x-wrapper");
const flame6_1_rnd2W = document.querySelector(".fl-6-1-rnd2");
const flame6_1_rnd2 = document.querySelector(".fl-6-1-rnd2 .flame6");
const flame6_2_rnd2W = document.querySelector(".fl-6-2-rnd2");
const flame6_2_rnd2 = document.querySelector(".fl-6-2-rnd2 .flame6");
const flame6_3_rnd2W = document.querySelector(".fl-6-3-rnd2");
const flame6_3_rnd2 = document.querySelector(".fl-6-3-rnd2 .flame6");
const flame8_1 = document.querySelector(".fl-8-1 .flame8");
const flame8_2 = document.querySelector(".fl-8-2 .flame8");
const flame8_3 = document.querySelector(".fl-8-3 .flame8");
const smokePuffWrapper = document.querySelector(".smoke-puff-wrapper");
const smokePuff = document.querySelector(".smoke-puff");
const smokePuff2 = document.querySelector(".smoke-puff-2");

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

function setBodyBg() {
  document.body.style.backgroundImage = 'url("./assets/bgs/bgImage.png")';
}

function populateNavLinksText() {
  textReveal_1.textContent = "Bio";
  textReveal_2.textContent = "Resume";
  textReveal_3.textContent = "Projects";
}

function runFlame2(flame2, textReveal, txRevNum) {
  flame2.classList.toggle("flame2-spark");
  textReveal.classList.toggle("text-revealed");
  setTimeout(() => {
    textReveal.classList.add(`text-reveal-move-${txRevNum}`);
  }, 500);
  setTimeout(() => {
    flame2.parentElement.remove();
  }, 550);
}

function flame2Seq() {
  setTimeout(() => {
    populateSlides(flame2_1, 14, "flame2", "flames");
    setTimeout(() => {
      populateSlides(flame2_2, 14, "flame2", "flames");
    }, 350);
    setTimeout(() => {
      populateSlides(flame2_3, 14, "flame2", "flames");
    }, 350);
  }, 350);
  setTimeout(() => {
    runFlame2(flame2_1, textReveal_1, "1");
    setTimeout(() => {
      textReveal_1.classList.add("text-reveal-move-1-final");
    }, 9000);
    setTimeout(() => {
      runFlame2(flame2_2, textReveal_2, "2");
      setTimeout(() => {
        textReveal_2.classList.add("text-reveal-move-2-final");
      }, 7050);
      setTimeout(() => {
        runFlame2(flame2_3, textReveal_3, "3");
        setTimeout(() => {
          setBodyBg();
          runSmokePuff2();
        }, 4975);
        setTimeout(() => {
          textReveal_3.classList.add("text-reveal-move-3-final");
          setTimeout(() => {
            finalSeq();
          }, 400);
        }, 5050);
      }, 2000);
    }, 1900);
  }, 1650);
}

function runFlame3(flame3) {
  flame3.classList.add("flame3-spark");
  setInterval(() => {
    flame3.classList.remove("flame3-spark");
    flame3.style.setProperty(
      "--anim3-timing",
      `${getRandomNumber(0.75, 1.3)}s`
    );
    flame3.classList.add("flame3-spark");
  }, getRandomNumber(750, 900));
}

function runFlame5(flame5) {
  flame5.classList.toggle("flame5-spark");
}

function flame5Seq() {
  populateSlides(flame5_1, 83, "flame5", "flames");
  populateSlides(flame5_2, 83, "flame5", "flames");
  populateSlides(flame5_3, 83, "flame5", "flames");
  setTimeout(() => {
    runFlame5(flame5_1);
    setTimeout(() => {
      runFlame5(flame5_2);
      setTimeout(() => {
        runFlame5(flame5_3);
      }, 2000);
    }, 2000);
  }, 2500);
}

function runFlame6(flame6) {
  const interval = setInterval(() => {
    flame6.classList.remove("flame6-spark");
    flame6.style.setProperty(
      "--anim6-timing",
      `${getRandomNumber(0.4, 0.6) * 2}s`
    );
    flame6.classList.add("flame6-spark");
  }, 350);
}

function runFlame8(flame8) {
  flame8.classList.toggle("flame8-spark");
}

function flame8Seq() {
  populateSlides(flame8_1, 31, "flame8", "flames");
  populateSlides(flame8_2, 31, "flame8", "flames");
  populateSlides(flame8_3, 31, "flame8", "flames");
  setTimeout(() => {
    runFlame8(flame8_1);
    setTimeout(() => {
      flame8_1.parentElement.remove();
    }, 3000);
    setTimeout(() => {
      runFlame8(flame8_2);
      setTimeout(() => {
        flame8_2.parentElement.remove();
      }, 3000);
      setTimeout(() => {
        runFlame8(flame8_3);
        setTimeout(() => {
          flame8_3.parentElement.remove();
        }, 3000);
      }, 2000);
    }, 2000);
  }, 3000);
}

function runSmokePuff() {
  smokePuff.classList.add("smoke-puff-spark");
  setTimeout(() => {
    smokePuff.parentElement.remove();
  }, 500);
}

function runSmokePuff2() {
  smokePuff2.classList.add("smoke-puff-2-spark");
  setTimeout(() => {
    flame3Arr.forEach((flame) => {
      flame.parentElement.style.setProperty(
        "--blow-out-dist",
        `${getRandomNumber(250, 1000)}px`
      );
      flame.parentElement.style.setProperty(
        "--blow-out-timing",
        `.${getRandomNumber(4, 8)}s`
      );
      flame.parentElement.classList.add("flame3-blow-out");
    });
  }, 250);
}

function runNavExplosion() {
  navExplosion.classList.add("nav-explosion-spark");
  setTimeout(() => {
    navExplosion.parentElement.remove();
  }, 500);
}

function finalSeq() {
  runNavExplosion();
  tempBg.classList.add("bg-fly-out");
  navListItems.forEach((item) => {
    item.style.display = "list-item";
  });
  nav.classList.add("nav-move-in");
  headingWrapper.style.display = "grid";
  setTimeout(() => {
    headingWrapper.style.opacity = "1";
    headingWrapper.style.transform = "scale(1)";
    setTimeout(() => {
      tempBg.remove();
    }, 1050);
  }, 550);
}

function MasterSeq() {
  populateSlides(smokePuff, 7, "puff1", "smoke");
  btnEnter.classList.add("btn-fade");
  setTimeout(() => {
    btnEnter.remove();
  }, 750);
  setTimeout(() => {
    runSmokePuff();
  }, 250);
  runFlame6(flame6_1);
  runFlame6(flame6_2);
  setTimeout(() => {
    populateSlides(flame6_3, 24, "flame6", "flames");
    populateSlides(flame6_4, 24, "flame6", "flames");
    runFlame6(flame6_3);
    runFlame6(flame6_4);
    flame6_1W.classList.add("fl-6-1-move-y");
    flame6_1W_X.classList.add("fl-6-1-move-x");
    setTimeout(() => {
      runFlame3(flame3_6);
      flame3_6.style.opacity = "1";
      flame6_1W_X.remove();
    }, 1000);
  }, 3000);
  setTimeout(() => {
    flame6_2W.classList.add("fl-6-2-move-y");
    flame6_2W_X.classList.add("fl-6-2-move-x");
    populateSlides(flame6_5, 24, "flame6", "flames");
    populateSlides(flame6_6, 24, "flame6", "flames");
    runFlame6(flame6_5);
    runFlame6(flame6_6);
    setTimeout(() => {
      runFlame3(flame3_5);
      flame3_5.style.opacity = "1";
      flame6_2W_X.remove();
      populateSlides(flame3_3, 49, "flame3", "flames");
      populateSlides(flame3_4, 49, "flame3", "flames");
    }, 1000);
  }, 4000);
  setTimeout(() => {
    flame6_3W.classList.add("fl-6-3-move-y");
    flame6_3W_X.classList.add("fl-6-3-move-x");
    flame6_4W.classList.add("fl-6-4-move-y");
    flame6_4W_X.classList.add("fl-6-4-move-x");
    setTimeout(() => {
      runFlame3(flame3_3);
      runFlame3(flame3_4);
      flame3_3.style.opacity = "1";
      flame3_4.style.opacity = "1";
      flame6_3W_X.remove();
      flame6_4W_X.remove();
      populateSlides(flame3_1, 49, "flame3", "flames");
      populateSlides(flame3_2, 49, "flame3", "flames");
    }, 1000);
  }, 5000);
  setTimeout(() => {
    flame6_5W.classList.add("fl-6-5-move-y");
    flame6_5W_X.classList.add("fl-6-5-move-x");
    flame6_6W.classList.add("fl-6-5-move-y");
    flame6_6W_X.classList.add("fl-6-6-move-x");
    setTimeout(() => {
      runFlame3(flame3_1);
      runFlame3(flame3_2);
      flame3_1.style.opacity = "1";
      flame3_2.style.opacity = "1";
      flame6_5W_X.remove();
      flame6_6W_X.remove();
    }, 1000);
    flame5Seq();
    flame8Seq();
    populateNavLinksText();
  }, 7000);
  setTimeout(() => {
    flame2Seq();
    populateSlides(flame6_1_rnd2, 24, "flame6", "flames");
    runFlame6(flame6_1_rnd2);
    setTimeout(() => {
      flame6_1_rnd2W.classList.add("fl-6-1-rnd2-move");
      setTimeout(() => {
        setTimeout(() => {
          flame5_1.parentElement.remove();
        }, 3000);
      }, 200);
      setTimeout(() => {
        flame6_1_rnd2W.remove();
      }, 1050);
    }, 350);
    setTimeout(() => {
      populateSlides(flame6_2_rnd2, 24, "flame6", "flames");
      runFlame6(flame6_2_rnd2);
      setTimeout(() => {
        flame6_2_rnd2W.classList.add("fl-6-2-rnd2-move");
        setTimeout(() => {
          setTimeout(() => {
            flame5_2.parentElement.remove();
          }, 2500);
        }, 200);
        setTimeout(() => {
          flame6_2_rnd2W.remove();
        }, 550);
      }, 350);
      setTimeout(() => {
        populateSlides(flame6_3_rnd2, 24, "flame6", "flames");
        runFlame6(flame6_3_rnd2);
        setTimeout(() => {
          flame6_3_rnd2W.classList.add("fl-6-3-rnd2-move");
          setTimeout(() => {
            setTimeout(() => {
              flame5_3.parentElement.remove();
            }, 3000);
          }, 200);
          setTimeout(() => {
            flame6_3_rnd2W.remove();
          }, 1050);
        }, 350);
      }, 2000);
    }, 2000);
    setTimeout(() => {
      btnSkipAnim.classList.add("btn-fade");
      setTimeout(() => {
        btnSkipAnim.remove();
        setTimeout(() => {
          animWrapper.remove();
        }, 1000);
      }, 750);
    }, 11000);
  }, 9000);
}

function abortAnimation() {
  animWrapper.remove();
  btnSkipAnim.remove();
  btnEnter.remove();
  setBodyBg();
  finalSeq();
}

populateSlides(flame3_5, 49, "flame3", "flames");
populateSlides(flame3_6, 49, "flame3", "flames");
populateSlides(flame6_1, 24, "flame6", "flames");
populateSlides(flame6_2, 24, "flame6", "flames");
populateSlides(navExplosion, 10, "exp2c_rotated", "smoke");
populateSlides(smokePuff2, 10, "puff2", "smoke");

btnEnter.addEventListener("click", MasterSeq);
btnSkipAnim.addEventListener("click", abortAnimation);
