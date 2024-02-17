let navbar = document.querySelector('.navbar');

document.querySelector("#menu").onclick = () => {
    navbar.classList.toggle('active');
}

$(document).ready(function () {
    $("#pro").click(function () {
        $("#button1").slideToggle("slow");
    });
});

$(document).ready(function () {
    $("#a1").click(function () {
        $(".navbars").slideToggle("slow");
    });
});

$(document).ready(function () {
    $("#a2").click(function () {
        $(".nav").slideToggle("slow");
    });
});

$(document).ready(function () {
    $("#a3").click(function () {
        $(".nav2").slideToggle("slow");
    });
});

var swiper = new Swiper(".pro-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        400: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        430: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1080: {
            slidesPerView: 3,
            spaceBetween: 50,
        },

        1200: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});

var swiper = new Swiper(".tes-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    breakpoints: {
        690: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    },
});


let loader = document.querySelector(".loading");

window.addEventListener("load", vanish);
function vanish(){
    loader.classList.add("dispper");
}

document.querySelectorAll('.pro-slider img').forEach(image => {
    image.onclick = () => {
      document.querySelector('.pop-image').style.display = 'block';
      document.querySelector('.pop-image img').src = image.getAttribute('src');
    }
  });
  document.querySelector('.pop-image span').onclick = () => {
    document.querySelector('.pop-image').style.display = 'none';
  }