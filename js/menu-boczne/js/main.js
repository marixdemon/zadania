$(document).ready(function () {
	$(".hamburger").click(function () {
		$(".main-menu").toggleClass("show");
		if ($(".main-menu").hasClass("show")) {
			$(".main-menu").animate({ left: 0 }, 200);
		} else {
			$(".main-menu").animate({ left: "-240px" }, 200);
		}
	});

	$(".main-menu-item a").click(function (e) {
		e.preventDefault();
		$("body").fadeOut(2000, function () {
			window.location.href = $(e.target).attr("href");
		});
	});
});
