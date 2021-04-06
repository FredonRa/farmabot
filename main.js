const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar2");

window.onscroll = function() {scrollFunction()};

// Si scrolleas 50px en Y el logo y el header se modifican
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "50px";
    document.getElementById("logo").style.width = "120px";
    menuIcon.style.top = 40;

    header.classList.add("headerActive");
  } else {
    document.getElementById("header").style.height = "100px";
    document.getElementById("logo").style.width = "170px";
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

//Scroll elements animation

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

// finish Scroll elements animation

// Send contact to helpdesk



  var emailReg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
  $("#sendContacto").click(function(e) {
    e.preventDefault();
      var valid = true;

      if ($("#nombreFarmacia").val() == "") {
          valid = false;
          $("#nombreFarmacia").removeClass("is-valid");
          $("#nombreFarmacia").addClass("is-invalid");
      } else {
          $("#nombreFarmacia").removeClass("is-invalid");
          $("#nombreFarmacia").addClass("is-valid");
      }

      if ($("#nombreContacto").val() == "") {
        valid = false;
        $("#nombreContacto").removeClass("is-valid");
        $("#nombreContacto").addClass("is-invalid");
    } else {
        $("#nombreContacto").removeClass("is-invalid");
        $("#nombreContacto").addClass("is-valid");
    }

    
    if ($("#telefono").val() == "") {
      valid = false;
      $("#telefono").removeClass("is-valid");
      $("#telefono").addClass("is-invalid");
    } else {
      $("#telefono").removeClass("is-invalid");
      $("#telefono").addClass("is-valid");
    }

    if ($("#email").val() == "" || !emailReg.test($("#email").val())) {
        valid = false;
        $("#email").removeClass("is-valid");
        $("#email").addClass("is-invalid");
    } else {
        $("#email").removeClass("is-invalid");
        $("#email").addClass("is-valid");
    }

      if ($("#cantSucursales").val() == "") {
          valid = false;
          $("#cantSucursales").removeClass("is-valid");
          $("#cantSucursales").addClass("is-invalid");
      } else {
          $("#cantSucursales").removeClass("is-invalid");
          $("#cantSucursales").addClass("is-valid");
      }


      nombreFarmacia
      nombreContacto
      telefono
      email
      cantSucursales

      if (valid) {
          //$("#contactoForm").submit();
        $.ajax({
        type : 'POST',
        url : "https://helpdesk.geco.com.ar/formularioWeb/enviar",
        data : "nombre="+$("#nombreContacto").val()+"&nombreFarmacia="+$("#nombreFarmacia").val()+"&mail="+$("#email").val()+"&telefono="+$("#telefono").val()+"&cantSucursales="+$("#cantSucursales").val()+"&canal=5",
        success: function(){
          Swal.fire(
            '¡Mensaje enviado!',
            '',
            'success'
          )
          $("input").val("");
          $("#nombreFarmacia").removeClass("is-valid");
          $("#nombreContacto").removeClass("is-valid");
          $("#telefono").removeClass("is-valid");
          $("#email").removeClass("is-valid");
          $("#cantSucursales").removeClass("is-valid");
        }
      });
      }
  });


//finish Send contacto to helpdesk