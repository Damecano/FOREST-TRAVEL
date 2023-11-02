let is_Menu = false;

function menu() {
    if (is_Menu == false) {
        document.querySelector('.menu').style.display = "block"
        document.querySelector('.menu_img').src = './public/close.png'
        is_Menu = true
    }else{
        document.querySelector('.menu').style.display = "none"
        document.querySelector('.menu_img').src = './public/menu.png'
        is_Menu = false
    }
}

// GALLARY--------------------

function openModal() {
    document.getElementById('myModal').style.display = "block";
}
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// wrapper--------------

$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
})