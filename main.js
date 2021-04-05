const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar2");

window.onscroll = function() {scrollFunction()};

// Si scrolleas 50px en Y el logo y el header se modifican
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "50px";
    document.getElementById("logo").style.width = "150px";
    menuIcon.style.top = 40;

    header.classList.add("headerActive");
  } else {
    document.getElementById("header").style.height = "100px";
    document.getElementById("logo").style.width = "200px";
    header.classList.remove("headerActive");
    document.getElementById("hamburger-menu").style.top = 60;

  }
}


menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
  menuIcon.classList.toggle("change")
});

window.addEventListener('load', (event) => {
  setTimeout(()=>{
    document.getElementById("loader").style.display = "none";
    document.getElementById("home").style.display = "block";
  }, 1000)
});


$(window).on('scroll',function(){
	let scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
  // console.log(scrollBottom);
  if(scrollBottom < 200) {
    // wspButton.style.display = "none"
    $(".wsp-icon").css("display", "none");
  } else {
    $(".wsp-icon").css("display", "block");
  }
}).trigger('scroll');