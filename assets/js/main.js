// Menu Accessibilty

// Set up aria attributes on top level menu items

jQuery('.menu-item-has-children a').not('.sub-menu a').attr('aria-haspopup','true');
jQuery('.menu-item-has-children a').not('.sub-menu a').attr('aria-expanded','false');

// Hide any open dropdown menus when a top level item focused

jQuery('.menu-item a').not('.sub-menu a').focus(function() {
  jQuery('.menu-item').not('.sub-menu a').removeClass( 'sfHover' );
  console.log('clearing');
  jQuery('.menu-item a').not('.sub-menu a').attr('aria-expanded','false');
  jQuery('.menu-item-has-children').find('.sub-menu').hide();
});

// Toggle submenus when space or down arrow is pressed
jQuery('li.menu-item-has-children').keydown(function(e) {
    key = e.keyCode;
    if (key == 32 || key == 40) {
        
        //toggle off or move down
        if (jQuery(this).hasClass( 'sfHover' )) {

            // space pressed when menu open, so close
            if (key == 32) {
            jQuery(this).removeClass( 'sfHover' );
            jQuery(this).find('.sub-menu').hide();
            jQuery(this).find('a').not('.sub-menu a').attr("aria-expanded","false");
            }
            // Down pressed when meno open so tab to next menu item
            else {
             jQuery.tabNext();
              return false;   
            }
        }
        // toggle menu on
        else {
        jQuery(this).addClass( 'sfHover' );
        jQuery(this).find('.sub-menu').show();
        jQuery(this).find('a').not('.sub-menu a').attr("aria-expanded","true");
        }
        return false;
    }
});

// Move between submenus using down arrow

jQuery('.sub-menu li').keydown(function(e) {
    key = e.keyCode;
    if (key == 40) {
        jQuery.tabNext();
        return false;
    }
});

// Move between submenus using up arrow

jQuery('.sub-menu li').keydown(function(e) {
    key = e.keyCode;
    if (key == 38) {
        jQuery.tabPrev();
        return false;
    }
});

// Toggle search box when space or arrows are pressed

jQuery('.nav-search-icon').keydown(function(e) {
    key = e.keyCode;
    if (key == 32 || key == 40 || key == 38) {
        
        jQuery('.wrap .floating_search_form').fadeToggle();
        jQuery('.search-bar').focus();
        return false;
    }
});

jQuery(document).ready(function($){
	// wrap skip links in nav tag
    let slnav = document.createElement('nav');
    slnav.className = 'skip-link-nav';
    let el = document.querySelector('ul.genesis-skip-link');
    el.parentNode.insertBefore(slnav,el);
    slnav.appendChild(el);
    
    // Hide in this issue container
    $('.this-issue .menu-container').hide();

    // Toggle in-this-issue dropdown menu on click of trigger element
    $('.js-click-a').click(function(){

        $('.this-issue').toggleClass('current-menu-item open');

        // Hide other dropdown menus in case of multiple dropdowns
        $('#thisIssue').not($(this).next()).slideUp('fast');

        // Toggle the current dropdown menu
        $(this).next('#thisIssue').slideToggle('slow');

        $('.past-issues').removeClass('current-menu-item open');
    });

    // Hide dropdown menu on click outside
    $(document).on('click touchstart', function(event){
        if(!$(event.target).closest('.this-issue').length){
            $('.this-issue').removeClass('current-menu-item open');
            $('#thisIssue').fadeOut('fast');
        }
    });

    // Hide dropdown menu on scroll
    $(document).on('scroll', function(event){
        if (window.matchMedia('(min-width: 801px)').matches) {
            if(!$(event.target).closest('.this-issue').length){
                $('#thisIssue').fadeOut('fast');
                $('.this-issue').removeClass('current-menu-item open');
            }
        }
    });

    // Hide past issue container
    $('.past-issues .menu-container').hide();

    // Toggle past-issues dropdown menu on click of trigger element
    $('.js-click-b').click(function(){

        $('.past-issues').toggleClass('current-menu-item open');

        // Hide other dropdown menus in case of multiple dropdowns
        $('#pastIssues').not($(this).next()).slideUp('fast');

        // Toggle the current dropdown menu
        $(this).next('#pastIssues').slideToggle('slow');

        // Manually refresh positioning of slick
        $('.magazine_slider').slick('setPosition');

        $('.this-issue').removeClass('current-menu-item open');
    });

    // Hide dropdown menu on click outside
    $(document).on('click touchstart', function(event){
        if(!$(event.target).closest('.past-issues').length){
            $('.past-issues').removeClass('current-menu-item open');
            $('#pastIssues').fadeOut('fast');
        }
    });

    // Hide dropdown menu on scroll
    $(document).on('scroll', function(event){
        if (window.matchMedia('(min-width: 801px)').matches) {
            if(!$(event.target).closest('.past-issues').length){
                $('.past-issues').removeClass('current-menu-item open');
                $('#pastIssues').fadeOut('fast');
            }
        }
    });

});

(function($){

$('.nav-search-icon a').on('click',function (e) {
	e.preventDefault();
    $('.wrap .floating_search_form').fadeToggle();
    $('.search-bar').focus();
});

$('.ssme-search').on('click',function (e) {
    e.preventDefault();
    $('.wrap .floating_search_form').fadeToggle();
    $('.search-bar').focus();
});

}
)(jQuery);

function findNextTabStop(el) {
    var universe = document.querySelectorAll('input, button, select, textarea, a[href]');
    var list = Array.prototype.filter.call(universe, function(item) {return item.tabIndex >= "0"});
    var index = list.indexOf(el);
    return list[index + 1] || list[0];
  }

// Add fancybox lightbox to people grid shortcode
jQuery(document).ready(function() {
    jQuery("a.youtube").fancybox({
        'width': 1000, 
        smallBtn: "true"
    });
    jQuery("a.popup").fancybox({
            'type':'iframe',
            'width': 1000, 
            smallBtn: "true"
        }
    );
     jQuery(".coeblock-popup a").fancybox({
            'type':'iframe',
            'width': 1000, 
            smallBtn: "true"
        }
    );
     jQuery("a.popup-image").fancybox({
            'type':'image',
            smallBtn: "true"
        }
    );
});

