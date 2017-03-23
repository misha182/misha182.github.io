$(document).ready(function() {

function heightDetect() {
$(".main_head").css("height", $(window).height());
$(".top_wrapper").css("height", $(window).height());	
	};

heightDetect();
$(window).resize(function(){
	heightDetect();
});

(function () {
	$('.toggle_menu').on('click', function() {
		$('.bar').toggleClass('animate');
	})
})();

});

$(".top_menu ul a").click(function() {
$(".top_menu").fadeOut(600);
$(".bar").toggleClass("animate");
$(".top_wrapper").fadeIn(900);
$(".top_wrapper").removeClass("fadeOut animated");
});


$(".toggle_menu").click(function() {
	if($(".top_menu").is(":visible")) {
		$(".top_menu").fadeOut(600);
		$(".top_menu li a").removeClass("fadeInUp animated");
		$(".top_wrapper").fadeIn(900);
		$(".top_wrapper").removeClass("fadeOut animated");
	} else {
		$(".top_menu").fadeIn(600);
		$(".top_menu li a").addClass("fadeInUp animated");
		$(".top_wrapper").fadeOut(900);
		$(".top_wrapper").addClass("fadeOut animated");
	};
});

window.onload=function(){
$(".top_text_anim h1, .top_text_anim h2, .top_text_anim p").addClass("fadeInUp animated");
$(".block-form ").addClass("fadeIn animated");}

$(".animation_1").animated("flipInY", "fadeOutUp");
$(".animation_2").animated("bounceInRight", "bounceOutRight");
$(".animation_3").animated("zoomIn", "zoomOut");
$(".animation_4").animated("fadeInUp", "fadeOutDown");








	$("#portfolio_grid").mixItUp();

$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active"); 
	}); 


	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type:"inline", midClick: true, closeOnContentClick: true});

$("a[href*='#']").mPageScroll2id();


$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});
