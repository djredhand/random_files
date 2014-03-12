jQuery(document).ready(function(){
// the career page
	jQuery('.program-row').hover(function(){
		var grid_items = jQuery(this).children('.grid');
		var program_content = jQuery(this).children('.program-content');
		var color = jQuery(this).css('backgroundColor');
		program_content.children('.grid-header').css({
			color: color
		})
		program_content.children('.grid-inner-content').css({
			color: color
		})
		program_content.show();
		grid_items.hide();
	},function(){
		var grid_items = jQuery(this).children('.grid');
		var program_content = jQuery(this).children('.program-content');
		program_content.show();
		grid_items.hide();
		program_content.hide();
		grid_items.show();
	})
//tax page 
	jQuery('.tax-toggle').hover(function(){
		var inner_content = jQuery(this).children('.inner-content');
		var chev = jQuery(this).find('.chevron');
		var height_adj = inner_content.height();
		var column = jQuery('#explore-team');
		window.column_height = column.height();
		chev.css({ WebkitTransform: 'rotate(' + 90 + 'deg)'});
      // For Mozilla browser: e.g. Firefox
        chev.css({ '-moz-transform': 'rotate(' + 90 + 'deg)'});
		column.height(column_height + height_adj);
		inner_content.show();
		console.log(inner_content.text())
	},function(){
		var chev = jQuery(this).find('.chevron');
		var inner_content = jQuery(this).children('.inner-content');
		var column = jQuery('#explore-team');
		column.height(window.column_height);
		chev.css({ WebkitTransform: 'rotate(' + 0 + 'deg)'});
      // For Mozilla browser: e.g. Firefox
        chev.css({ '-moz-transform': 'rotate(' + 0 + 'deg)'});
		inner_content.hide();

	})


})