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
			if(jQuery('.open-news-item').length>0 ){
				//alert('there is')
				if(current_section[0] == jQuery(this).next()[0]){
					//alert('yep')
				}else{
					console.log(current_section);
					//alert('nope')
					console.log(jQuery(this).next())
					news_accordion.animate_section(jQuery(this).next(), height);
				}
			}else{
				window.cu_sec= jQuery(this).next()
				window.current_section = jQuery(this).next();
				window.current_section.addClass('open-news-item');
				//console.log(window.current_section);			
			}

			if(current_section.hasClass('open-news-item') ){
				current_section.removeClass('open-news-item');
			}else{
				news_accordion.animate_section(section, height);
			}
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
		section.addClass('open-news-item');
		section.slideDown(1000, function(){
			section_height = section.height() - 22;
			section.find('.acc-news').css({height: section_height + 'px'  })
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

	jQuery('font.acc-news-link').click(function(){
		var link = jQuery(this).attr('link');
		link = 'http://www.pwc.com/' + link;
		window.open(link);
	})

	jQuery('font.acc-news-link2').click(function(){
		var link = jQuery(this).attr('link');
		window.open(link);
	})

}) //end doc.ready