$(document).ready(function() {
		var objToStick = $("#advers");
        var topOfObjToStick = $(objToStick).offset().top; 

        $(window).scroll(function () {
            var windowScroll = $(window).scrollTop(); 

            if (windowScroll+50 > topOfObjToStick) { 
                $(objToStick).addClass("topWindow");
            } else {
                $(objToStick).removeClass("topWindow");
            };
        });
		function left(){
			if ($('#leftaside').is(':hidden')){
				$('#leftaside').css('display','block').animate({left:"0"},1000);
				} else {
					$('#leftaside').animate({left:"-310px"},1000, function() {
						$(this).css('display','none');
						});
					}
			}
			
		function right(){
			if ($('#rightaside').is(':hidden')){
				$('#rightaside').css('display','block').animate({right:"0"},1000);
				} else {
					$('#rightaside').animate({right:"-310px"},1000, function() {
						$(this).css('display','none');
						});
					}
			}

		$('#arrow-left').click(function() {
			left();
		});
		
		$('#arrow-right').click(function() {
			right();
		});

		$('#arrow-both').click(function() {
			right();
			left();
		});
});