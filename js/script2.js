$(function () {

	var $nav = $('#topMenu');
	var $submenus = $('.submenu');
	var $submenuContainer = $('<div id = "submenuContainer"></div>').appendTo($nav).height($submenus.outerHeight());

	$nav.find('ul > li > a').on('mouseenter', function(e){
		e.preventDefault();
		$submenus.slideDown();
		$submenuContainer.css('height','400px');
		$submenuContainer.slideDown();
	});
	$nav.on('mouseleave', function(){
		$submenus.slideUp();
		$submenuContainer.slideUp();
	});

	// page2
	// 왼쪽 메뉴 드롭다운
	$('#content1 ul.height-sub-menu').hide();
	$('#height1').click(function (e) {
		e.preventDefault();
		$('ul', this).slideToggle(300);
		$('#title1').toggleClass('ad');
		$('#height2 > li > ul').slideUp();
		$('#height3 > li > ul').slideUp();
		$('#height4 > li > ul').slideUp();
		$('#title2').removeClass();
		$('#title3').removeClass();
		$('#title4').removeClass();
	});
	$('#height2').click(function () {
		$('ul', this).slideToggle(300);
		$('#title2').toggleClass('ad');
		$('#height1 > li > ul').slideUp();
		$('#height3 > li > ul').slideUp();
		$('#height4 > li > ul').slideUp();
		$('#title1').removeClass();
		$('#title3').removeClass();
		$('#title4').removeClass();
	});
	$('#height3').click(function () {
		$('ul', this).slideToggle(300);
		$('#title3').toggleClass('ad');
		$('#height1 > li > ul').slideUp();
		$('#height2 > li > ul').slideUp();
		$('#height4 > li > ul').slideUp();
		$('#title1').removeClass();
		$('#title2').removeClass();
		$('#title4').removeClass();
	});
	$('#height4').click(function () {
		$('ul', this).slideToggle(300);
		$('#title4').toggleClass('ad');
		$('#height1 > li > ul').slideUp();
		$('#height2 > li > ul').slideUp();
		$('#height3 > li > ul').slideUp();
		$('#title1').removeClass();
		$('#title2').removeClass();
		$('#title3').removeClass();
	});

	// 선택 영역이 아닌 다른 곳을 클릭 했을 때 height menu 닫기
	/*
	$(document).on('click', function(e) {
		var content = $("#content1");
		if (!$(e.target).closest(content).length) {
			$('#height1 > li > ul').slideUp();
			$('#height2 > li > ul').slideUp();
			$('#height3 > li > ul').slideUp();
			$('#height4 > li > ul').slideUp();
			$('#title1').removeClass();
			$('#title2').removeClass();
			$('#title3').removeClass();
			$('#title4').removeClass();
		}
	}); */
	// content1 영역에서 마우스가 벗어나면 height menu 닫기
	$('#content1').on('mouseleave', function(e){
		$('#height1 > li > ul').slideUp();
			$('#height2 > li > ul').slideUp();
			$('#height3 > li > ul').slideUp();
			$('#height4 > li > ul').slideUp();
			$('#title1').removeClass();
			$('#title2').removeClass();
			$('#title3').removeClass();
			$('#title4').removeClass();
	});
});