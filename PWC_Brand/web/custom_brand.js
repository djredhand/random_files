/* Namesspace object */
var custom_brand = {

	init: function(){
		custom_brand.tab_nav();
		custom_brand.column_height();
	},

	column_height: function(){
		
		var col = jQuery('.col.brand-custom');
		var col_height = col.parent().height() -12;
		col.css({
			height: col_height + 'px'
		})
		window.col = col; 
	},

	tab_nav: function(){
		jQuery('.tab-content-wrap:eq(0)').hide();//temporary
		jQuery('.tab-content .tab-nav li').click(function(){
			var items = jQuery('.tab-content .tab-nav li');
			var index = items.index(jQuery(this));
			custom_brand.show_tab(index)
		})
	},

	show_tab: function(index){
		console.log(index);
		jQuery('.tab-content-wrap').hide()
		var tab = jQuery(jQuery('.tab-content-wrap')[index]);
		tab.show();
	}
}

/* Initialize the News Accodion */
jQuery(document).ready(function(){

	custom_brand.init();

}) //end doc.ready