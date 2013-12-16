/* Namesspace object */
var custom_brand = {

	init: function(){
		custom_brand.tab_nav();
		
		custom_brand.brand_toggle('.brand-toggle');
		custom_brand.column_height();
	},

	column_height: function(){
		
		var col = jQuery('.col.brand-custom');
		col.each(function(){
			var c = jQuery(this);
			c.css('height', '100%');//reset the height 
			var col_height = c.parent().height() -12;
			c.css({
				height: col_height + 'px'
			})
			window.col = c;
		})
		
		
		 
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
	},

	brand_toggle:function(el){
		el = jQuery(el);
		el.each(function(){
			var header = jQuery(this).children('.brand-toggle-header');
			var toggle_symbol = jQuery('<div class="toggle-symbol"></div>');
			var toggle_content = jQuery(this).children('.brand-toggle-content');
			
			var clicker = function(header, toggle_symbol){
				header.click(function(){
					var content = header.parent().children('.brand-toggle-content');
					console.log(toggle_symbol.hasClass('plus'));
					if(toggle_symbol.hasClass('plus')){
						toggle_symbol.removeClass('plus').addClass('mdash');
						content.fadeIn(500)
					}else{
						toggle_symbol.removeClass('mdash').addClass('plus');
						content.hide();
					}
					custom_brand.column_height()
				});

			}

			header.prepend(toggle_symbol);
			toggle_symbol.addClass('plus');
			toggle_content.hide();
			clicker(header, toggle_symbol);

		})



		console.log(el);

	}
}

/* Initialize the News Accodion */
jQuery(document).ready(function(){

	custom_brand.init();

}) //end doc.ready