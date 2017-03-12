var top_show = 700, delay = 1e3;
$(document).ready(function() {
	$(window).scroll(function() {
		$(this).scrollTop() > top_show ? $("#top").fadeIn() : $("#top").fadeOut()
	}),
	$("#top").click(function() {
		$("body, html").animate({
			scrollTop: 0
		}, delay)
	})
});
