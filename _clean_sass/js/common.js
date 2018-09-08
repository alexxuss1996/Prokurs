$(document).ready(function() {

	$.stellar({
		responsive: true, 
		horizontalOffset: 50
	});

	$(".carousel").owlCarousel({
		loop: true,
		responsive: {
			0: {
				items: 1,
				nav: true,
			}
		},
		navText: ""
	});

$(".popup_content").magnificPopup();

function wResize() {
	$("header").css("min-height", $(window).height());
};
 wResize();

$(window).resize(function() {
	wResize()
});



	// TABS SHORT
	$(".top_phone .tab_item").not(":first").hide();
	$(".top_phone .wrapper .tab").click(function () {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".bottom_phone .tab_item").not(":first").hide();
	$(".bottom_phone .wrapper .tab").click(function () {
		$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".tabs_heading .tab_item").not(":first").hide();
	$(".tabs_heading .wrapper .tab").click(function () {
		$(".tabs_heading .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_heading .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".s_contacts .tab_item").not(":first").hide();
	$(".contacts_top .tab").click(function () {
		$(".contacts_top .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance;
				magnificPopup.close();
			}, 1000);
		});
	});
	return false;
});

$(window).load(function() {
	$(".top_heading").animated("fadeInDown", "fadeOut");
	$(".tabs_heading ").animated("flipInY", "fadeOut");
	$(".profi_item").animated("fadeInRight", "fadeOut");
	$(".s_profi form").animated("zoomInRight", "fadeOut");
	$(".s_back h3").animated("fadeInUp", "fadeOut");
	$("footer").animated("fadeInDown", "fadeOut");
});