
(function($){
	$.fn.enservio_toggle= function(){ 
		function listen_handle_close_div(div){
			div = $(div);
			div.click(function(){
				$(this).parent().slideToggle();
			})
			return div
		}

	    $('p.show_hide_span').click(function(){
	    	var slide_div = $(this).next('.slidingDiv');
	    	var close_div = $('<div class="close_slide_div"><p class="show_hide_span">Hide</p></div>');
	    	slide_div.addClass('opened_slide_div');
	    	slide_div.slideToggle();
	    	

	    	if(!$(this).next().children('.close_slide_div').length >0){
	    		slide_div.append(close_div);
	    		listen_handle_close_div(close_div);
	    	}
	    });

	    $(".slidingDiv").hide();
	};
})(jQuery);


jQuery(document).ready(function(){
	$.fn.enservio_toggle()
})