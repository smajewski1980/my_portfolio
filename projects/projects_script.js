const descTitle = document.querySelector(".desc-title");
const desc = document.querySelector(".desc");
const cards = Array.from(document.getElementsByClassName("card"));
const spotlight = document.querySelector(".spotlight");
const descriptionTitle = document.querySelector(".desc-title");
const description = document.querySelector(".desc");
let infoVisible = false;
let infoTimeout;
const descriptions = [
  {
    title: "Cleaning Shellac 78s",
    desc: "An early Codecademy project that is responsive, and will remain online as a collector's resource.",
  },
  {
    title: "My Music Catalog v1",
    desc: "Version one, before I knew any JS. I just embedded PDFs in iframes. This was a personal tool, it is not responsive.",
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
    desc: "An early Frontend Mentor project, nothing fancy, not responsive.",
  },
];

function showDescription() {
  if (infoTimeout) {
    clearInterval(infoTimeout);
  }
  spotlight.style.filter = "blur(35px) brightness(0.5)";
  const thisCard = this.dataset.card;
  const thisDesc = descriptions[parseInt(thisCard) - 1];
  descTitle.textContent = thisDesc.title;
  desc.textContent = thisDesc.desc;
  if (!infoVisible) {
    descTitle.classList.toggle("show-description");
    desc.classList.toggle("show-description");
    infoVisible = true;
  }
}

function hideDescription() {
  infoTimeout = setTimeout(() => {
    spotlight.style.filter = "blur(35px) brightness(1)";
    descTitle.classList.toggle("show-description");
    desc.classList.toggle("show-description");
    descTitle.textContent = "";
    desc.textContent = "";
    infoVisible = false;
  }, 100);
}

cards.forEach((card) => {
  card.addEventListener("mouseover", showDescription);
  card.addEventListener("mouseout", hideDescription);
});
