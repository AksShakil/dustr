// Initialize the Slider

    $(document).ready(function () {
        $('.sliderimg').slick({
            dots: true,              
            arrows: true,             
            autoplay: true,           
            autoplaySpeed: 2000,      
            fade: false,              
            speed: 800,               
            infinite: true,           
            pauseOnHover: true        
        });
    });

  



    $(document).ready(function () {
        $('.sliders').slick({
            dots: true,               
            arrows: false,            
            autoplay: true,          
            autoplaySpeed: 2000,      
            fade: false,             
            speed: 800,               
            infinite: true,           
            pauseOnHover: true        
        });
    });


    
  


   
    


    $('.wholeslide').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      dots: true
    });





    $('.responsive_slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: false,
      arrows: true,
      dots: true
    });


    
    function openNav(){

      document.getElementById("myNav").style.width = "100%";

    }

    function closeNav(){

      document.getElementById("myNav").style.width = "0%";

    }
  

    $('.carShow').slick({
        dots: true,
        infinite: true,
        speed: 300,
        centerMode: true,        
        centerPadding: '40px',
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
      });





let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backbtn");
let nextBtn = document.getElementById("nextbtn");





// Select the header
const header = document.querySelector(".header");

// Add scroll event listener
window.addEventListener("scroll", () => {
  // Check if the scroll position is greater than 120px
  if (window.scrollY > 120) {
    header.classList.add("visible"); // Add class to make it visible
  } else {
    header.classList.remove("visible"); // Remove class to hide it
  }
});



