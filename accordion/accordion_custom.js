function click_accordion_btn(index){
	jQuery(jQuery('#accordion h2')[index]).trigger('click');

}

function show_new_hero_header(index){
	window.heroIndex = index;
	backgroundIndex = [
		'#E0301E',
		'#A32020',
		'#602320',
		'#968c6d',
		'#FFB600',
		'#666' ];

	jQuery('.hm-cont-header').each(function(){
		jQuery(this).removeClass('active');
	});

	jQuery(jQuery('.hm-cont-header')[index]).addClass('active');

	jQuery(jQuery('.hm-cont-header')[index]).parent().css({
		background: backgroundIndex[window.heroIndex]
	})

	jQuery('.hf-block-color2').css({
		background: backgroundIndex[window.heroIndex]
	})
}

jQuery("li.accordion").click(function(evt){
		var index = jQuery(this).index();
		click_accordion_btn(index);
		show_new_hero_header(index);
})
