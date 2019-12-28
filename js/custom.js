jQuery(document).ready(function() {
    jQuery('#carousel').jcarousel({
		scroll: 1,
		vertical: true,
		wrap: 'circular'
    });
	jQuery('#center_slider').camera({
		fx: 'stampede',
		height: '524px',
		loader: 'none',
		pagination: true,
		thumbnails: false,
		time: 1000
	});
	jQuery('#gallery').camera({
		fx: 'simpleFade',
		height: '327px',
		loader: 'none',
		pagination: false,
		thumbnails: true,
		navigation: false,
		playPause: false,
		autoAdvance: false
	});
	            
	$(".scroll-pane").mCustomScrollbar();
	
	$(".camera_thumbs_cont").mCustomScrollbar({horizontalScroll:true});

	var count = $("#gallery div.thumb").length;
	var thumb_width = 114; // thumbs width on gallery page in px
	$("#gallery .mCSB_container").width(count*thumb_width);
	
	$(".camera_thumbs_cont").mCustomScrollbar("update");;
	
	


	$('.button').each(function(){
        $(this).after(unescape('%3Cspan class="button"%3Eaa%3C/span%3E'));
        $(this).hide();
        $(this).next('span.button').text($(this).val()).click(function(){
            $(this).prev('input.button').click();
        });
	Cufon.replace('.button', { fontFamily: 'Steinerlight', hover: true });
});
});		
