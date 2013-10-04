$(document).ready(function(){

	function listen_handle_close_div(div){
		div = $(div);
		div.click(function(){
			$(".slidingDiv").slideToggle();
			$('.close_slide_div').remove();
		})
		return div
	}

    $('span.show_hide_span').click(function(){
    	var slide_div = $(".slidingDiv");
    	var close_div = $('<div class="close_slide_div"><span class="show_hide_span">Hide</span></div>');
    	slide_div.addClass('opened_slide_div');
    	slide_div.slideToggle();
    	

    	if($(this).next().children('.close_slide_div').length >1){
    		a=1;
    	}else{
    		slide_div.append(close_div);
    		listen_handle_close_div(close_div);
    	}

    	window.open_div = $(this);
    	console.log(window.open_div);
    

    });

    


    $(".slidingDiv").hide();
	$("span.show_hide").show();


});