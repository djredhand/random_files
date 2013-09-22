/* Namesspace object */
var news_accordion = {

	init: function(){
		news_accordion.hide_list();
		news_accordion.list_item_click();
	},

	/* Listener */
	list_item_click: function(){
		jQuery('.acc-header-btn-cont').click(function(){
			var current_section = news_accordion.find_current_section();
			var section = jQuery(this).next();
			var height = news_accordion.get_section_height(section);

			news_accordion.close_list_item(current_section);
			//console.log(news_accordion.find_current_section(jQuery('.acc-header-btn-cont')));
			news_accordion.animate_section(section, height);
		})
	},

	/* Start handlers */
	hide_list: function(){
		var list = jQuery('.content-section.grid-list');
		list.addClass('hidden');
		jQuery(list[0]).removeClass('hidden');
	},

	get_section_height: function(section){
		var clone = section.clone();
		window.clone = clone;
	},

	open_list_item: function(){
		var list_btns;
	},

	find_current_section: function(){
		var open_item;
		jQuery('section.content-section.grid-list').each(function(){
			item = jQuery(this);
			if (item.css('display') !== "none"){
				open_item = item;
				return(open_item);

			}
		})
		return open_item;
		
	},

	close_list_item: function(section){
		var sections = jQuery('section.content-section.grid-list');
		sections.each(function(){
			jQuery(this).animate({
				height: '0px'
			})
		})

		/*
			window.current_section = section;
			window.current_section.original_height = section.height();
			section.animate({
				height: '0px'
			}, function(){
				console.log(section)
				jQuery(section).addClass('.hidden');
			})
		*/
	},

	animate_section:function(section, h){
		section.css({
			height: '0px'
		})
		section.removeClass('hidden')
		section.animate({
			height: '100px'
		}, 100)
	}

}

/* Initialize the News Accodion */
jQuery(document).ready(function(){

	news_accordion.init();

}) //end doc.ready