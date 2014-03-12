jQuery(document).ready(function(){
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
	function hexc(colorval) {
	    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	    delete(parts[0]);
	    for (var i = 1; i <= 3; ++i) {
	        parts[i] = parseInt(parts[i]).toString(16);
	        if (parts[i].length == 1) parts[i] = '0' + parts[i];
	    }
	    color = '#' + parts.join('');
	}
})