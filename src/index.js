

let section = document.querySelector('.indicators');
let children = [...section.children];
let bannerSection = document.querySelector('.banner');
// let header = document.querySelector('header');
// let items = [...document.querySelectorAll('.item')];
// let iconList = [... document.querySelector('.icon-area').children];
// let categorySectionCoordinate = document.querySelector('.category').getBoundingClientRect().top + window.scrollY;
// let arrOfItems = [...document.querySelectorAll('.category-item')];
// let quoteSectionCoordinate = document.querySelector('.quote').getBoundingClientRect().top + window.scrollY;
// let quote = document.querySelector('.quote');
// console.log(quoteSectionCoordinate);
// let animationStarted = false;


setInterval(() => {
  let position = document.documentElement.scrollTop || document.body.scrollTop;
  let height = window.innerHeight || document.documentElement.clientHeight ||
 document.getElementsByTagName('body')[0].clientHeight;
  if(position < height) {
    console.log("action started1");
    let activeIndex;
    children.forEach((item, index) => {
      if(item.classList.contains('active')) {
        activeIndex = index;
        item.classList.remove('active');
      }
    });
    if(activeIndex < children.length-1) {
      activeIndex++;
    } else {
      activeIndex = 0;
    }
    if(activeIndex === 0) {
      bannerSection.style.backgroundImage = "url(http://www.hd-freewallpapers.com/latest-wallpapers/images-of-fruits-to-colour-wallpaper.jpg)";
    } else if(activeIndex === 1) {
      bannerSection.style.backgroundImage = "url('https://wallpapercave.com/wp/GSiwme6.jpg')";
    } else {
      bannerSection.style.backgroundImage = "url('https://wallpapercave.com/wp/goODzrY.jpg')";
    }
    console.log("action ended!");
    children[activeIndex].classList.add('active');
  }
}, 5000);
