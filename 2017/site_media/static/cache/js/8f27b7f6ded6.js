$(function(){var slider=$("#sponsorslider").carousel({interval:7000});slider.bind("slid",function(){var index=$(this).find(".active").index();$(this).find("#slider-nav a").removeClass("activeSlide").eq(index).addClass("activeSlide");});$("#slider-nav a").click(function(e){var index=$(this).index();slider.carousel(index);e.preventDefault();});var retina=window.devicePixelRatio>1.5?true:false;if(retina){$("div.sponsor-scroll-item").each(function(){var retinaimage=$(this).data("background-2x");$(this).css("background-image","url("+retinaimage+")");$('<img/>')[0].src=retinaimage;})};});