
// use for js in popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
$(document).ready(function() {
    // Initialize Owl Carousel 1
    var owl1 = $('#owl-carousel1');
    owl1.owlCarousel({
        items: 5,
        loop: true,
        nav: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });

    // Initialize Owl Carousel 2
    var owl2 = $('#owl-carousel2');
    owl2.owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });

    // Initialize Owl Carousel 3
    var owl3 = $('#owl-carousel3');
    owl3.owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });

    // Initialize Owl Carousel 4
    var owl4 = $('#owl-carousel4');
    owl4.owlCarousel({
        items: 6,
        loop: true,
        nav: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                marginTop: 50 // Note: Adjust this according to Owl Carousel API documentation
            },
            480: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });

    // LazyLoad initialization (if using LazyLoad library)
    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy-load"
        // Add more options as needed
    });

    // Other initialization scripts or event listeners
    // Place them here if necessary
});
