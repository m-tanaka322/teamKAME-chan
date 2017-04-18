$(function(){
	$('a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});

	$x = $('.x')
	$x.on('click',function(){
		$(this).children('.icon-box').animate({opacity: 1}, 500);
	});

	$qu = $('.qu')
	$black = $('.black')
	$qu.on('mouseover',function(){
		$black.css({opacity: 0.5});
		$(this).find('img').css({'z-index': 999});
		$(this).find('.qu-box').show();
	});
	$qu.on('mouseout',function(){
		$black.css({opacity: 0});
		$(this).find('img').css({'z-index': 0, 'position': 'absolute'});
		$(this).find('.qu-box').hide();
	});
});