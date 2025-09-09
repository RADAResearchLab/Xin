function open_accordion() {
	// Open accordion if ID found in URL
	var hash = window.location.hash;
	if (hash) {
		jQuery(hash).closest('.fold').addClass('open').find('.note').slideDown(500);
		var offset = jQuery(hash).offset();
		// scroll only if hash was found on page
		if(typeof offset !== "undefined") {
		jQuery('html, body').animate({
        scrollTop: jQuery(hash).offset().top
    	}, 500);
		}
	}
}


jQuery(document).ready(function(){

    // Open accordian if ID found in URL
    open_accordion();

    // Prevent outline when clicking on accordion toggle 

    jQuery(document).on('mousedown', '.accordion .fold .key', function() {
		event.preventDefault();
		});


    // Handle clicks on accordions
	jQuery(document).on('click', '.accordion .fold .key', function() {
		jQuery(this).blur();
		if (!jQuery(this).closest('.accordion').hasClass('off')) {
			if (jQuery(this).closest('.fold').find('.note').is(':visible')) {
				jQuery(this).closest('.fold').removeClass('open start-open').find('.note').slideUp(250);
			} else {
				if (!jQuery(this).closest('.accordion').hasClass('stay')) {
					jQuery(this).closest('.accordion').find('.note').slideUp(250);
					jQuery(this).closest('.accordion').find('.fold').removeClass('open start-open');
				}
				jQuery(this).closest('.fold').addClass('open').find('.note').slideDown(250);
			}
		}
	});
});

// Open accordions after hash change

jQuery(window).on( 'hashchange', function( e ) {
    open_accordion();
} );


// Keyboard accessiblity for accordions
jQuery('.fold').keydown(function(e) {
    key = e.keyCode;
    if (key == 32 || key == 38 || key == 40) {
    	console.log('going to toggle');
    	if (!jQuery(this).closest('.accordion').hasClass('off')) {
			if (jQuery(this).closest('.fold').find('.note').is(':visible')) {
				jQuery(this).closest('.fold').removeClass('open start-open').find('.note').slideUp(250);
			} else {
				if (!jQuery(this).closest('.accordion').hasClass('stay')) {
					jQuery(this).closest('.accordion').find('.note').slideUp(250);
					jQuery(this).closest('.accordion').find('.fold').removeClass('open start-open');
				}
				jQuery(this).closest('.fold').addClass('open').find('.note').slideDown(250);
			}
		}
    }
} );