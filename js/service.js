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


    //   $('.carShow').slick({
    //     centerMode: true,
    //     centerPadding: '60px',
    //     slidesToShow: 1,
    //     responsive: [
    //       {
    //         breakpoint: 768,
    //         settings: {
    //           arrows: false,
    //           centerMode: true,
    //           centerPadding: '40px',
    //           slidesToShow: 3
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           arrows: false,
    //           centerMode: true,
    //           centerPadding: '40px',
    //           slidesToShow: 1
    //         }
    //       }
    //     ]
    //   });



    // $(document).ready(function () {
    //     $('.locslide').slick({
    //         dots: true,               
    //         arrows: true,             
    //         autoplay: true,           
    //         autoplaySpeed: 2000,      
    //         fade: false,              
    //         speed: 800,               
    //         infinite: true,           
    //         pauseOnHover: true       
    //     });
    // })






    




let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backbtn");
let nextBtn = document.getElementById("nextbtn");


scrollContainer.addEventListener("wheel", (evt) =>{

    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";

    
});


nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});



backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});



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




let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;



// conts head = document.querySelector('main-head');
// window.addEventListener('scroll',function () {
  
//   if(this.scrollY > 200)
//   head.classList.add('slidedown');

//   else{
//     head.classList.remove('slidedown');

//   }

// })


var myname = document.querySelector("#paraID");

function myMessage1() {
  
  
  myname.innerHTML = "this is button one";
}


function myMessage2() {
  
  
  myname.innerHTML = "this is button two";
}


var myname = document.querySelector("#paraID");

        function myMessage1() {
            myname.innerHTML = "This is button one";
        }

        function myMessage2() {
            myname.innerHTML = "This is button two";
        }


