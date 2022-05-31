$(document).ready(function() {
  
    setTimeout(function() {
      $('#ctn-preloader').addClass('loaded');
      // Una vez haya terminado el preloader aparezca el scroll
      $('body').removeClass('no-scroll-y');
  
      if ($('#ctn-preloader').hasClass('loaded')) {
        // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
        $('#preloader').delay(1000).queue(function() {
          $(this).remove();
        });
      }
    },3000);
    
  });
  
  console.clear()
$(document).ready(function(){
  initPage()
});

// document.querySelector('.more-button').addEventListener('click', function () {
//   document.querySelector('.list-container').classList.toggle('active');
// });
// var textWrapper = document.querySelector('.ml9 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml9 .letter',
//     scale: [0, 1],
//     duration: 1500,
//     elasticity: 600,
//     delay: (el, i) => 45 * (i+1)
//   }).add({
//     targets: '.ml9',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });
////Animation slider //////









// const line1 = document.getElementById("line1");
// const line2 = document.getElementById("line2");
// const line3 = document.getElementById("line3");
const btn = document.getElementById("toggle");
// const menu = document.getElementById("menu");
const header = document.getElementById("third");

const hamburger = document.getElementById("hamburger");

btn.onclick = function () {
  if (btn.checked == true){
    header.style.display = "none";
  } else {
    header.style.display = "block";
  }
};