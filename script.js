const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4Animation() {
    var elemC = document.querySelector(".elem-container")
var fixed = document.querySelector(".fixed-image")

elemC.addEventListener("mouseenter", function(){
    fixed.style.display = "block"
})

elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})
}


function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        speed: 600,
        parallax: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}


page4Animation()

swiperAnimation()

// var elem1 = document.querySelector(".elem1")
// elem1.addEventListener("mouseenter", function(){
//     var image= elem1.getAttribute("data-image")
//     fiexed.style.backgroundImage = `url(${image})`
// })