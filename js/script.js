
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


var owl = $('#owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    nav:true,
    lazyLoad:true,
    margin:10,
    responsive : {
     
        0 : {
            items:1
            
        },
      
        480 : {
            items:1,
            
        },
     
        768 : {
           items:2
        },
        1200 : {
            items:4
         }
    }
});

var owl1 = $('#owl-carousel1');
owl1.owlCarousel({
    items:5,
    loop:true,
    nav:true,
    lazyLoad:true,
    margin:10,
    responsive : {
      
        0 : {
            items:1
            
        },
       
        480 : {
            items:1,
            
        },
     
        768 : {
           items:2
        },
        992 : {
            items:4
         },
        1200 : {
            items:4
         }
    }
});

var owl1 = $('#owl-carousel2');
owl1.owlCarousel({
    items:4,
    loop:true,
    nav:true,
    lazyLoad:true,
    margin:10,
    responsive : {
      
        0 : {
            items:1
            
        },

        480 : {
            items:1,
            
        },
        768 : {
           items:2
        },
        992 : {
            items:4
         },
        1200 : {
            items:4
         }
    }
});

var owl1 = $('#owl-carousel3');
owl1.owlCarousel({
    items:5,
    loop:true,
    nav:true,
    lazyLoad:true,
    margin:10,
    responsive : {
       
        0 : {
            items:1
            
        },
        
        480 : {
            items:1,
            
        },
  
        768 : {
           items:2
        },
        992 : {
            items:4
         },
        1200 : {
            items:4
         }
    }
});

var owl1 = $('#owl-carousel4');
owl1.owlCarousel({
    items:6,
    loop:true,
    nav:true,
    lazyLoad:true,
    margin:10,
    responsive : {
      
        0 : {
            items:1,
            marginTop:50,
            
        },
      
        480 : {
            items:1,
            
        },

        768 : {
           items:2
        },
        992 : {
            items:4
         },
        1200 : {
            items:4
         }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const marqueeText = document.querySelector('.marquee-text');
    const playBtn = document.querySelector('.play-btn');
    const pauseBtn = document.querySelector('.pause-btn');
    const button= document.getElementById('marque-button');

    button.addEventListener('click', () => {
        if (marqueeText.style.animationPlayState === 'paused') {
            marqueeText.style.animationPlayState = 'running';
            playBtn.classList.remove('active');
            pauseBtn.classList.add('active');
        } else {
            marqueeText.style.animationPlayState = 'paused';
            playBtn.classList.add('active');
            pauseBtn.classList.remove('active');
        }
    });

    marqueeText.style.animationPlayState = 'running';
});



  document.addEventListener("DOMContentLoaded", function() {
    var lazyLoadInstance = new LazyLoad({
      elements_selector: ".owl-lazy"
     
    });
  });