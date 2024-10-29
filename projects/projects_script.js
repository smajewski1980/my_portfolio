const descTitle = document.querySelector(".desc-title");
const desc = document.querySelector(".desc");
const cards = Array.from(document.getElementsByClassName("card"));
const spotlight = document.querySelector(".spotlight");
const descriptionTitle = document.querySelector(".desc-title");
const description = document.querySelector(".desc");
let headingVisible = false;
let headingTimeout;
const descriptions = [
  {
    title: "Cleaning Shellac 78s",
    desc: "description 1 - when this is a completed page, there will be this much text or less in this section",
  },
  {
    title: "My Music Catalog v1",
    desc: "description 2 - when this is a completed page, there will be this much text or less in this section",
  },
  {
    title: "My Music Catalog v2",
    desc: "description 3 - when this is a completed page, there will be this much text or less in this section",
  },
  {
    title: "New York State Assembly Home Page",
    desc: "description 4 - when this is a completed page, there will be this much text or less in this section",
  },
  {
    title: "Assembly Sound Off(the floor)",
    desc: "description 5 - when this is a completed page, there will be this much text or less in this section",
  },
  {
    title: "Empire State Aerosciences Museum Visit Page",
    desc: "description 6 - when this is a completed page, there will be this much text or less in this section",
  },
  {
    title: "Bookmark Landing Page",
    desc: "description 7 - when this is a completed page, there will be this much text or less in this section",
  },
];

function showDescription() {
  if (headingTimeout) {
    clearInterval(headingTimeout);
  }
  spotlight.style.filter = "blur(35px) brightness(0.5)";
  const thisCard = this.dataset.card;
  const thisDesc = descriptions[parseInt(thisCard) - 1];
  descTitle.textContent = thisDesc.title;
  desc.textContent = thisDesc.desc;
  if (!headingVisible) {
    descTitle.classList.toggle("show-description");
    desc.classList.toggle("show-description");
    headingVisible = true;
  }
}

function hideDescription() {
  headingTimeout = setTimeout(() => {
    spotlight.style.filter = "blur(35px) brightness(1)";
    descTitle.classList.toggle("show-description");
    desc.classList.toggle("show-description");
    descTitle.textContent = "";
    desc.textContent = "";
    headingVisible = false;
  }, 100);
}

cards.forEach((card) => {
  card.addEventListener("mouseover", showDescription);
  card.addEventListener("mouseout", hideDescription);
});

// see if we can get two flames up and running

const ltFl4Wrapper = document.querySelector(".fl4-w-1 .lt-fl4-wr");
const ltFlame4 = document.querySelector(".fl4-w-1 .lt-fl4-wr .flame4");
const rtFl4Wrapper = document.querySelector(".fl4-w-1 .rt-fl4-wr");
const rtFlame4 = document.querySelector(".fl4-w-1 .rt-fl4-wr .flame4");
const ltFl4WrapperRear = document.querySelector(".fl4-w-2 .lt-fl4-wr");
const ltFlame4Rear = document.querySelector(".fl4-w-2 .lt-fl4-wr .flame4");
const rtFl4WrapperRear = document.querySelector(".fl4-w-2 .rt-fl4-wr");
const rtFlame4Rear = document.querySelector(".fl4-w-2 .rt-fl4-wr .flame4");

populateSlides(ltFlame4, 52, "flame4", "flames", true);
populateSlides(rtFlame4, 52, "flame4", "flames", true);
populateSlides(ltFlame4Rear, 52, "flame4", "flames", true);
populateSlides(rtFlame4Rear, 52, "flame4", "flames", true);

// stagger them, timeout(s) to start
// add spark class, raise opacity

setTimeout(() => {
  ltFlame4.classList.add("flame-4-spark");
  rtFlame4Rear.classList.add("flame-4-spark");
}, getRandomNumber(1000, 1500));

setTimeout(() => {
  rtFlame4.classList.add("flame-4-spark");
  ltFlame4Rear.classList.add("flame-4-spark");
}, getRandomNumber(1250, 1750));

setTimeout(() => {
  ltFl4Wrapper.classList.add("flame-4-fade-in");
  rtFl4Wrapper.classList.add("flame-4-fade-in");
  ltFl4WrapperRear.classList.add("flame-4-fade-in");
  rtFl4WrapperRear.classList.add("flame-4-fade-in");
}, 1800);
