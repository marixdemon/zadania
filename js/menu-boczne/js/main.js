$(document).ready(function () {
	$(".hamburger").click(function () {
		$(".main-menu").toggleClass("show");
		if ($(".main-menu").hasClass("show")) {
			$(".main-menu").animate({ left: 0 }, 200);
		} else {
			$(".main-menu").animate({ left: "-240px" }, 200);
		}
	});

	$(".main-menu-item a").click(function () {
		$(".out-animation-wrapper").fadeOut();
	});
});
