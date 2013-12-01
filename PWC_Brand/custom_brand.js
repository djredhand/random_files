/* Namesspace object */
var custom_brand = {

	init: function(){
		custom_brand.column_height();
	},

	column_height: function(){
		
		var col = jQuery('.col.brand-custom');
		var col_height = col.parent().height() -12;
		col.css({
			height: col_height + 'px'
		})
		window.col = col; 
	}
}

/* Initialize the News Accodion */
jQuery(document).ready(function(){

	custom_brand.init();

}) //end doc.ready