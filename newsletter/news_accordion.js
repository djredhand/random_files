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
	},

	get_section_height: function(section){
		var clone = section.clone();
		window.clone = clone;
	},

	open_list_item: function(){
		var list_btns;
	},

	find_current_section: function(){
		return jQuery('.open-news-item');
		
	},

	close_list_item: function(section){
		var sections = jQuery('section.content-section.grid-list');
		sections.each(function(){
			if(jQuery(this).attr('class') !== "open-news-item"){
				jQuery(this).slideUp()
			}
		})
	},

	animate_section:function(section, h){
window.current_section = section;
		section.removeClass('hidden')
		section.addClass('.open-news-item');
		section.slideDown("slow");
	}

}

/* Initialize the News Accodion */
jQuery(document).ready(function(){

	news_accordion.init();

}) //end doc.ready