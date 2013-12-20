/* Namesspace object */
var custom_brand = {

	init: function(){
		custom_brand.tab_hash();
		custom_brand.tab_hash_url();
		custom_brand.brand_toggle('.brand-toggle');
		custom_brand.column_height();
		custom_brand.brand_links();

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

	tab_nav: function(tab_index){
		var tab_items = jQuery('.tab-content .tab-nav li');
		if(tab_index == undefined){
			tab_index = 0;
		}
		jQuery(tab_items).removeClass('active');
		jQuery(tab_items[tab_index]).addClass('active');
		jQuery('.tab-content-wrap').hide();
		jQuery('.tab-content-wrap:eq('+ tab_index +')').show();
		jQuery('.tab-content .tab-nav li').click(function(){
			var tab_items = jQuery('.tab-content .tab-nav li');
			var index = tab_items.index(jQuery(this));
			custom_brand.show_tab(index);
			jQuery(window).scrollTop(window.scroll_height);
		})
		
	},

	tab_hash: function(){
		jQuery('a.tab-hash').click(function(){
			var hash = jQuery(this).attr('href');
			custom_brand.tab_hash_url(hash);
		});
	},

	tab_hash_url: function(hash){
		window.scroll_height = jQuery(window).scrollTop();
		if(!hash){
			var hash = window.location.hash;
			if (hash == ''){
				hash = jQuery('a.tab-hash').eq(0).attr('href');
			}
		}
		window.location.hash = hash;
		var index = jQuery(jQuery(hash).parent().children('li')).index(jQuery(hash));
		custom_brand.tab_nav(index);
		jQuery(hash).trigger('click');
	},

	show_tab: function(index){
		jQuery('.tab-content-wrap').hide()
		var tab = jQuery(jQuery('.tab-content-wrap')[index]);
		tab.show();
		custom_brand.column_height();
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


	},

	brand_links:function(){
		jQuery('#section-link-get-started').parent().click(function(){
			window.location.hash = '';
			window.location = window.location + '#get_started';
		});

		jQuery('#section-link-make-your-plan').parent().click(function(){
			window.location.hash = '';
			window.location = window.location + '#make_your_plan';

		});

		jQuery('#section-link-market-yourself').parent().click(function(){
			window.location.hash = '';
			window.location = window.location + '#market_yourself';

		});
	}
}

/* Initialize the News Accodion */
jQuery(document).ready(function(){

	custom_brand.init();

}) //end doc.ready