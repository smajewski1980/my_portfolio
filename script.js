// index page animation code

const indexHeading = document.querySelector('.indexH1');
const triangle = document.querySelector('.triangle');
const links = document.getElementById('navUL');

const burger = document.querySelector('.burgerIcon');

triangle.addEventListener('click', indexAnimation);
burger.addEventListener('click', indexAnimation);

function indexAnimation() {
    bringInLinks();
    links.style.opacity='1';
    triangle.classList.toggle('open');
    indexHeading.classList.toggle('headingMove');
    triangle.addEventListener('click', closeLinks);
}
// couldn't get burger icon to show back up when the triangle closes.
// thats why the page does a reload after the animation completes
function closeLinks(){
    if (links.style.bottom !== '-2.5dvw'){
    links.style.bottom='-2.5dvw';
    links.style.opacity='0';
    }
    triangle.removeEventListener('click', closeLinks);
    setTimeout(()=>{location.reload()}, 1250);
}
function bringInLinks(){
    burger.style.opacity='0';
    links.style.display='block';
    setTimeout(()=>{
        burger.style.display='none';
    }, 1000)
    setTimeout(()=>{
        if(links.style.bottom !== '0'){
    links.style.bottom='0';
    }}, 1000);    
}