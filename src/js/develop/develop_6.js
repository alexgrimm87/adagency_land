function tabsChenger(){
	
	if($(window).width()>1081){
		
		$(".main-wrapper-for-triangles .triangle-part").eq(0).find("span").show();
		$(".slide .button").on("click", function(){
			$(".slide").removeClass("chosen")
			$(this).closest(".slide").addClass("chosen");
			var index = $(".chosen").index();
			$(".lower-part .left-part ul").removeClass("active");
			$(".lower-part .left-part ul").eq(index).addClass("active");
			$(".lower-part .right-part div .details").removeClass("show");
			$(".lower-part .left-part ul li").removeClass("reviewed");
			$(".main-wrapper-for-triangles .triangle-part span").hide();
			$(".main-wrapper-for-triangles .triangle-part").eq(index).find("span").show();
			if(index == 0 ){
				$(".marketing-group .details").eq(0).addClass("show");			
				$(".lower-part .left-part ul").eq(index).find("li").eq(0).addClass("reviewed");
			}else if(index == 1){
				$(".development-group .details").eq(0).addClass("show");
				$(".lower-part .left-part ul").eq(index).find("li").eq(0).addClass("reviewed");
			}else if(index == 2){
				$(".seo-group .details").eq(0).addClass("show");
				$(".lower-part .left-part ul").eq(index).find("li").eq(0).addClass("reviewed");
			}
		})

		$(".lower-part .left-part ul li").on("click", function(){
			$(".lower-part .left-part ul li").removeClass("reviewed");
			$(this).addClass("reviewed");
			if($(".lower-part .marketing-list").hasClass("active")){
				var listIndex = $(".reviewed").index();
				$(".marketing-group .details").removeClass("show");
				$(".marketing-group .details").eq(listIndex).addClass("show");
			}else if($(".lower-part .development-list").hasClass("active")){
				var listIndex = $(".reviewed").index();
				$(".development-group .details").removeClass("show");
				$(".development-group .details").eq(listIndex).addClass("show");
			}else if($(".lower-part .seo-list").hasClass("active")){
				var listIndex = $(".reviewed").index();
				$(".seo-group .details").removeClass("show");
				$(".seo-group .details").eq(listIndex).addClass("show");
			}
		})
	}else if($(window).width()<1081){
		$(".slider").on("afterChange", function(event, slick, currentSlide){
			$(".lower-mobile-part .left-part ul").removeClass("active");
			$(".lower-mobile-part .left-part ul").eq(currentSlide).addClass("active");
		})

	}
}

function tabsSlidingDown(){
	var flag = true;
	$(".vacancy .vacancy-item button").on("click", function(event){
		event.stopPropagation();
	})

	$(".vacancy-item").on("click", function(){
		if($(this).hasClass("clicked") == false){
			if(flag===true){			
				flag = false;
				$(".vacancy-item").removeClass("clicked");
				$(".inner-information").slideUp("slow");
				$(this).find(".inner-information").slideDown("slow");
				$(this).addClass("clicked");
				setTimeout(function(){
					flag= true;
				}, 1000)
			}
		}else{
			$(".vacancy-item").removeClass("clicked");
			$(".inner-information").slideUp("slow");
		}
	});			
}


var slickSettings = {
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,       	
	};
function runSlick(){
	if($(window).width()+17<1080){
		if($('.slider').hasClass("slick-initialized")==false){
			$('.slider').slick(slickSettings);
		}		
	}else if($(window).width()+16>=1080){
		if($('.slider').hasClass("slick-initialized")){
			$('.slider').slick("unslick");
		}
	}
}

$(document).ready(function(){	
	

	tabsChenger();
	tabsSlidingDown();
	
	$(".services-fancybox").fancybox({
		openEffect  : 'fade',
	    closeEffect : 'fade',
	    autoResize:true,
	    wrapCSS:'fancybox-serv',
	    'closeBtn' : true,
	    fitToView:true,
	    padding:'0',
	    maxWidth: 620
	});
	runSlick();
});

$(window).load(function(){
	
});

$(window).resize(function(){
	tabsChenger();
	runSlick();
});