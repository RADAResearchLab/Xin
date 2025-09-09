// adds clickable search
jQuery(document).ready (function ($) {
	$('.widget_search .widget-wrap').on('click',function (e) {
		$(e.target).find('form').fadeToggle();
		$(e.target).find('form input:first-of-type').focus(); 
	});
	$('.widget_wgs_widget .widget-wrap').on('click',function (e) {
		$(e.target).find('form').fadeToggle();
		$(e.target).find('form input:first-of-type').focus();  
	});
});

