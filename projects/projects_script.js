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
    desc: "A Codecademy project that will remain online as a collector's resource.",
  },
  {
    title: "My Music Catalog v1",
    desc: "Version one, before I knew any JS. I exported PDFs from my database and embedded them in iframes.",
  },
  {
    title: "My Music Catalog v2",
    desc: "Built with React.js, it is my current catalog and is a work in progress. Yes, I really have all this.",
  },
  {
    title: "New York State Assembly Home Page",
    desc: "What a great page for a portfolio!</br>This one includes a carousel of links and an interactive calendar, it is also responsive.",
  },
  {
    title: "Assembly Sound Off(the floor)",
    desc: "This was a fun music app I made for a few laughs around the office. This one includes you gettin' down!",
  },
  {
    title: "Empire State Aerosciences Museum Visit Page",
    desc: "Went there to visit, thought this would be a fun page to build. This one includes a few modals and an image gallery.",
  },
  {
    title: "Bookmark Landing Page",
    desc: "A Frontend Mentor project. This one includes a section with tabs that switch content and a faq accordion.",
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
  desc.innerHTML = thisDesc.desc;
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
