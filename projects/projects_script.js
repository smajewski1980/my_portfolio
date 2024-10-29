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

const ltFl4Wrapper = document.querySelector(".lt-fl4-wr");
const ltFlame4 = document.querySelector(".lt-fl4-wr .flame4");
const rtFl4Wrapper = document.querySelector(".rt-fl4-wr");
const rtFlame4 = document.querySelector(".rt-fl4-wr .flame4");

populateSlides(ltFlame4, 52, "flame4", "flames");
populateSlides(rtFlame4, 52, "flame4", "flames");
