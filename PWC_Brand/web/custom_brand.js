/* window mobile check */
window.mobilecheck = function() {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
	return check; 
}

/* Namesspace object */
var custom_brand = {

	init: function(){
		custom_brand.tab_hash();
		custom_brand.tab_hash_url();
		custom_brand.brand_toggle('.brand-toggle');
		custom_brand.column_height();
		custom_brand.brand_links();
		custom_brand.mobile();

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
			jQuery('#get_started').trigger('click');
			custom_brand.tab_nav(1);
			window.location.hash = '#get_started';
		});

		jQuery('#section-link-make-your-plan').parent().click(function(){
			jQuery('#make_your_plan').trigger('click');
			custom_brand.tab_nav(2);
			window.location.hash = '#make_your_plan';

		});

		jQuery('#section-link-market-yourself').parent().click(function(){
			jQuery('#market_yourself').trigger('click');
			custom_brand.tab_nav(3);
			window.location.hash = '#market_yourself';

		});
	},
	mobile: function(){
		alert(jQuery(window).width());
		if(jQuery(window).width() < 321 || window.mobilecheck() ){
			custom_brand.use_mobile();
		}
	},
	use_mobile:function(){
		jQuery.getScript('http://pwc.com/en_GX/webadmin/assets/script/m.js',function(){
			//do stuff
		});
		$('head').append('<link rel="stylesheet" type="text/css" href="http://pwc.com/en_GX/webadmin/assets/style/m.css">');
		$('head').append('<link rel="stylesheet" type="text/css" href="custom_brand_mobile.css">');
	}
}

/* Initialize the News Accodion */
jQuery(document).ready(function(){

	custom_brand.init();

}) //end doc.ready