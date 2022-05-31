/*!     
        jquery.picZoomer.js
        v 1.0
        David
        http://www.CodingSerf.com
*/

//放大镜控件
(function ($) {
  $.fn.picZoomer = function (options) {
    var opts = $.extend({}, $.fn.picZoomer.defaults, options),
      $this = this,
      $picBD = $('<div class="picZoomer-pic-wp"></div>')
        .css({ width: opts.picWidth + "px", height: opts.picHeight + "px" })
        .appendTo($this),
      $pic = $this.children("img").addClass("picZoomer-pic").appendTo($picBD),
      $cursor = $(
        '<div class="picZoomer-cursor"><i class="f-is picZoomCursor-ico"></i></div>'
      ).appendTo($picBD),
      cursorSizeHalf = { w: $cursor.width() / 2, h: $cursor.height() / 2 },
      $zoomWP = $(
        '<div class="picZoomer-zoom-wp"><img src="" alt="" class="picZoomer-zoom-pic"></div>'
      ).appendTo($this),
      $zoomPic = $zoomWP.find(".picZoomer-zoom-pic"),
      picBDOffset = { x: $picBD.offset().left, y: $picBD.offset().top };

    opts.zoomWidth = opts.zoomWidth || opts.picWidth;
    opts.zoomHeight = opts.zoomHeight || opts.picHeight;
    var zoomWPSizeHalf = { w: opts.zoomWidth / 2, h: opts.zoomHeight / 2 };

    //初始化zoom容器大小
    $zoomWP.css({
      width: opts.zoomWidth + "px",
      height: opts.zoomHeight + "px",
    });
    $zoomWP.css(
      opts.zoomerPosition || { top: 0, left: opts.picWidth + 30 + "px" }
    );
    //初始化zoom图片大小
    $zoomPic.css({
      width: opts.picWidth * opts.scale + "px",
      height: opts.picHeight * opts.scale + "px",
    });

    //初始化事件
    $picBD
      .on("mouseenter", function (event) {
        $cursor.show();
        $zoomWP.show();
        $zoomPic.attr("src", $pic.attr("src"));
      })
      .on("mouseleave", function (event) {
        $cursor.hide();
        $zoomWP.hide();
      })
      .on("mousemove", function (event) {
        var x = event.pageX - picBDOffset.x,
          y = event.pageY - picBDOffset.y;

        $cursor.css({
          left: x - cursorSizeHalf.w + "px",
          top: y - cursorSizeHalf.h + "px",
        });
        $zoomPic.css({
          left: -(x * opts.scale - zoomWPSizeHalf.w) + "px",
          top: -(y * opts.scale - zoomWPSizeHalf.h) + "px",
        });
      });
    return $this;
  };
  $.fn.picZoomer.defaults = {
    picHeight: 460,
    scale: 2.5,
    zoomerPosition: { top: "0", left: "380px" },

    zoomWidth: 400,
    zoomHeight: 460,
  };
})(jQuery);

$(document).ready(function () {
  $(".picZoomer").picZoomer();
  $(".piclist li").on("click", function (event) {
    var $pic = $(this).find("img");
    $(".picZoomer-pic").attr("src", $pic.attr("src"));
  });

  var owl = $("#recent_post");
  owl.owlCarousel({
    margin: 20,
    dots: false,
    nav: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
      1200: {
        items: 4,
      },
    },
  });

  $(".decrease_").click(function () {
    decreaseValue(this);
  });
  $(".increase_").click(function () {
    increaseValue(this);
  });
  function increaseValue(_this) {
    var value = parseInt($(_this).siblings("input#number").val(), 10);
    value = isNaN(value) ? 0 : value;
    value++;
    $(_this).siblings("input#number").val(value);
  }

  function decreaseValue(_this) {
    var value = parseInt($(_this).siblings("input#number").val(), 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? (value = 1) : "";
    value--;
    $(_this).siblings("input#number").val(value);
  }
});
// ............
// coding with nick
// vars
("use strict");
var testim = document.getElementById("testim"),
  testimDots = Array.prototype.slice.call(
    document.getElementById("testim-dots").children
  ),
  testimContent = Array.prototype.slice.call(
    document.getElementById("testim-content").children
  ),
  testimleftArrow = document.getElementById("left-arrow"),
  testimRightArrow = document.getElementById("right-arrow"),
  testimSpeed = 4500,
  currentSlide = 0,
  currentActive = 0,
  testimTimer;
// coding with nick
window.onload = function () {
  // Testim Script
  function playSlide(slide) {
    for (var k = 0; k < testimDots.length; k++) {
      testimContent[k].classList.remove("active");
      testimContent[k].classList.remove("inactive");
      testimDots[k].classList.remove("active");
    }
    if (slide < 0) {
      slide = currentSlide = testimContent.length - 1;
    }
    if (slide > testimContent.length - 1) {
      slide = currentSlide = 0;
    }
    if (currentActive != currentSlide) {
      testimContent[currentActive].classList.add("inactive");
    }
    testimContent[slide].classList.add("active");
    testimDots[slide].classList.add("active");

    currentActive = currentSlide;

    clearTimeout(testimTimer);
    testimTimer = setTimeout(function () {
      playSlide((currentSlide += 1));
    }, testimSpeed);
  }
  // coding with nick
  testimleftArrow.addEventListener("click", function () {
    playSlide((currentSlide -= 1));
  });
  testimRightArrow.addEventListener("click", function () {
    playSlide((currentSlide += 1));
  });

  for (var l = 0; l < testimDots.length; l++) {
    testimDots[l].addEventListener("click", function () {
      playSlide((currentSlide = testimDots.indexOf(this)));
    });
  }
  playSlide(currentSlide);
};
// coding with nick
jQuery(document).ready(function () {
  // This button will increment the value
  $('[data-quantity="plus"]').click(function (e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr("data-field");
    // Get its current value
    var currentVal = parseInt($("input[name=" + fieldName + "]").val());
    // If is not undefined
    if (!isNaN(currentVal)) {
      // Increment
      $("input[name=" + fieldName + "]").val(currentVal + 1);
    } else {
      // Otherwise put a 0 there
      $("input[name=" + fieldName + "]").val(0);
    }
  });
  // This button will decrement the value till 0
  $('[data-quantity="minus"]').click(function (e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr("data-field");
    // Get its current value
    var currentVal = parseInt($("input[name=" + fieldName + "]").val());
    // If it isn't undefined or its greater than 0
    if (!isNaN(currentVal) && currentVal > 0) {
      // Decrement one
      $("input[name=" + fieldName + "]").val(currentVal - 1);
    } else {
      // Otherwise put a 0 there
      $("input[name=" + fieldName + "]").val(0);
    }
  });
});

// .........................
$(document).ready(function () {
  // Store initial image size
  function setImageSize() {
    var imageSize = Math.floor($(".zooma-main img:first-child").height());
    if (imageSize <= 0) {
      requestAnimationFrame(setImageSize);
    } else {
      $(".zooma-main").css({ width: imageSize, height: imageSize });
      $(".zooma-main img").addClass("is-loaded");
    }
  }

  requestAnimationFrame(setImageSize);

  // Populate thumbnails
  $(".zooma-main").children().clone().appendTo(".zooma-thumbnail");

  // Set state for first image
  $(".product img:first-child").addClass("is-active");

  // Thumbnail hover event listener
  $(".zooma-thumbnail img").on("mouseenter", function () {
    $(".product img")
      .removeClass("is-active is-zoomed-in")
      .prop("style", "")
      .off("mousemove");
    $(".product img:nth-child(" + ($(this).index() + 1) + ")").addClass(
      "is-active"
    );
  });

  // Main image click to zoom event listener
  $(".zooma-main img").on("click", function (e) {
    // Toggle zoom-out cursor and unset max-width
    $(this).toggleClass("is-zoomed-in");

    // Zoom in
    if ($(this).hasClass("is-zoomed-in")) {
      // Variables for calculating relative position
      var scale = e.target.naturalWidth / $(e.target).parent().width();
      var max = -(1 - 1 / scale);

      // Adjust mouse scale to the full-size image, then redraw
      e.offsetX *= scale;
      e.offsetY *= scale;
      calculateZoom(e);

      // Mouse event listener
      $(this).on("mousemove", calculateZoom);

      function calculateZoom(e) {
        var x = e.offsetX * max + "px";
        var y = e.offsetY * max + "px";
        $(e.target).css({ left: x, top: y });
      }
    }
    // Zoom out
    else {
      $(this).off("mousemove").prop("style", "");
    }
  });
});

$(document).ready(function () {
  $(".card-slider").slick({
    dots: false,
    arrows: true,
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
