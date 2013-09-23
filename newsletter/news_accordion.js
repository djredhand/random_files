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
			section.css({height:'auto'})
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
		jQuery(list[0]).addClass('open-news-item');

		jQuery('.open-news-item .acc-news').css({
			height: jQuery('.open-news-item').height() + 'px'
		})
	},

	get_section_height: function(section){
		var clone = section.clone();
		window.clone = clone;
	},

	find_current_section: function(){
		return jQuery('.open-news-item');
		
	},

	close_list_item: function(section){
		var sections = jQuery('section.content-section.grid-list');
		sections.each(function(){
			if(jQuery(this).attr('class') !== "open-news-item"){
				jQuery(this).slideUp("slow")
			}
		})
	},

	animate_section:function(section, h){
		window.current_section = section;
		section.removeClass('hidden')
		section.addClass('.open-news-item');
		section.slideDown("slow", function(){
			section.find('.acc-news').css({height: section.height() + 'px'  })
			console.log(section.parent().prev().offset())
		} );
		var top_offset = jQuery(jQuery('.acc-news')[0]).offset().top;
		var section_index = window.current_section.parent().prevAll().length
		console.log(top_offset + (section_index*25) );
		window.scrollTo(0, 	top_offset);

		
	}

}

/* Initialize the News Accodion */
jQuery(document).ready(function(){

	news_accordion.init();
	window.current_section = jQuery(jQuery('.acc-news')[0]).parent();
	window.current_section.find('.acc-news').css({height: window.current_section.height() + 'px'  })

}) //end doc.ready