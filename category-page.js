$("#categoryFilter").change(function () {
  var category = $(this).val();

  if (category === "all") {
    $("#parent > div").fadeIn(450);
  } else {
    $("#parent > div").fadeIn(450);
    $("#parent > div")
      .not("." + category)
      .hide();
  }
});

$(document).ready(function () {
  $(".card-slider").slick({
    dots: false,
    arrows: true,
	autoplay: true,
    slidesToShow: 4,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
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