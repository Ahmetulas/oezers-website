


let feedback = document.querySelector('.feedback');
let feedbackPos = document.querySelector('.feedback').getBoundingClientRect().top + window.scrollY;

let form = document.querySelector('.formcontainer');
let formPos = document.querySelector('.formcontainer').getBoundingClientRect().top + window.scrollY;

let images = document.querySelectorAll('.locationimages');
let imagesPos = document.querySelector('.locations').getBoundingClientRect().top + window.scrollY;


document.addEventListener('scroll', e => {
  let position = document.documentElement.scrollTop || document.body.scrollTop;
  let height = window.innerHeight || document.documentElement.clientHeight ||
 document.getElementsByTagName('body')[0].clientHeight;
 if(position*1.2 >= feedbackPos && !feedback.classList.contains('animate')) {
   feedback.classList.add('animate');
 }
 if(position*1.2 >= formPos && !form.classList.contains('animate')) {
   form.classList.add('animate');
 }
 if(images) {
   if(position*2 >= imagesPos && !images[0].classList.contains('animate')) {
     images.forEach((image, index) => {
       setTimeout(() => {
         image.classList.add('animate');
       }, index*400);
     })
   }
 }


});
