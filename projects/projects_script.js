const descTitle = document.querySelector(".desc-title");
const desc = document.querySelector(".desc");

const descriptions = [
  {
    title: "You are hovering on card # 1",
    desc: "description 1 - when this is a completed page, there will be this much text or less in this section",
  },
  {
    title: "You are hovering on card # 2",
    desc: "description 2 - when this is a completed page, there will be this much text or less in this section",
  },
  {
    title: "You are hovering on card # 3",
    desc: "description 3 - when this is a completed page, there will be this much text or less in this section",
  },
  {
    title: "You are hovering on card # 4",
    desc: "description 4 - when this is a completed page, there will be this much text or less in this section",
  },
  {
    title: "You are hovering on card # 5",
    desc: "description 5 - when this is a completed page, there will be this much text or less in this section",
  },
  {
    title: "You are hovering on card # 6",
    desc: "description 6 - when this is a completed page, there will be this much text or less in this section",
  },
  {
    title: "You are hovering on card # 7",
    desc: "description 7 - when this is a completed page, there will be this much text or less in this section",
  },
];

const cards = Array.from(document.getElementsByClassName("card"));
// const cardWrapper = document.querySelector(".card-wrapper");
const spotlight = document.querySelector(".spotlight");
const descriptionTitle = document.querySelector(".desc-title");
const description = document.querySelector(".desc");
let headingVisible = false;
let headingTimeout;

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
