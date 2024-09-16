
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


jQuery(document).ready(function() {
	
	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});
	// toggle "navbar-no-bg" class
	$('.top-content .carousel-caption h1').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});
	
    /*
        Background slideshow
    */
    $('.section-4-container').backstretch("assets/img/backgrounds/1.jpg");
    
    /*
	    Wow
	*/
	new WOW().init();
	
});

document.querySelector('.more-info-btn').addEventListener('click', function(e) {
	e.preventDefault();
	var fullBio = document.querySelector('.full-bio');
	var team = document.querySelector('.team');
	if (fullBio.style.display === 'none') {
		fullBio.style.display = 'block';
		team.style.height = 'auto';
	} else {
		fullBio.style.display = 'none';
		team.style.height = 'initial';
	}
});
