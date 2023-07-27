$(function () {

	// 하위메뉴
	var $container1 = $('#submenu1'),
		$container2 = $('#submenu2'),
		$container3 = $('#submenu3'),
		$container4 = $('#submenu4'),
		$container5 = $('#submenu5'),
		$container6 = $('#submenu6'),
		$container7 = $('#submenu7');
	var $submenu = $('.topMenuLi > div');
	var $nav = $('#topMenu');

	$('#topMenuLi1').on('mouseover', function(e){
		e.preventDefault();
		$container1.slideDown();
		$container2.slideUp();
		$container3.slideUp();
		$container4.slideUp();
		$container5.slideUp();
		$container6.slideUp();
		$container7.slideUp();
		$submenu.slideDown();
	});
	$('#topMenuLi2').on('mouseover', function(e){
		e.preventDefault();
		$container2.slideDown();
		$container1.slideUp();
		$container3.slideUp();
		$container4.slideUp();
		$container5.slideUp();
		$container6.slideUp();
		$container7.slideUp();
		$submenu.slideDown();
	});
	$('#topMenuLi3').on('mouseover', function(e){
		e.preventDefault();
		$container3.slideDown();
		$container1.slideUp();
		$container2.slideUp();
		$container4.slideUp();
		$container5.slideUp();
		$container6.slideUp();
		$container7.slideUp();
		$submenu.slideDown();
	});
	$('#topMenuLi4').on('mouseover', function(e){
		e.preventDefault();
		$container4.slideDown();
		$container1.slideUp();
		$container2.slideUp();
		$container3.slideUp();
		$container5.slideUp();
		$container6.slideUp();
		$container7.slideUp();
		$submenu.slideDown();
	});
	$('#topMenuLi5').on('mouseover', function(e){
		e.preventDefault();
		$container5.slideDown();
		$container1.slideUp();
		$container2.slideUp();
		$container3.slideUp();
		$container4.slideUp();
		$container6.slideUp();
		$container7.slideUp();
		$submenu.slideDown();
	});
	$('#topMenuLi6').on('mouseover', function(e){
		e.preventDefault();
		$container6.slideDown();
		$container1.slideUp();
		$container2.slideUp();
		$container3.slideUp();
		$container4.slideUp();
		$container5.slideUp();
		$container7.slideUp();
		$submenu.slideDown();
	});
	$('#topMenuLi7').on('mouseover', function(e){
		e.preventDefault();
		$container7.slideDown();
		$container1.slideUp();
		$container2.slideUp();
		$container3.slideUp();
		$container4.slideUp();
		$container5.slideUp();
		$container6.slideUp();
		$submenu.slideDown();
	});
	
	$nav.on('mouseleave', function(){
		$container1.slideUp();
		$container2.slideUp();
		$container3.slideUp();
		$container4.slideUp();
		$container5.slideUp();
		$container6.slideUp();
		$container7.slideUp();
		$submenu.slideUp();
	});

	// page2
	// 왼쪽 메뉴 드롭다운
	$('#content1 ul.height-sub-menu').hide();
	$('#height1').click(function () {
		$('ul', this).slideToggle(300);
		$('#title1').toggleClass('ad');
	});
	$('#height2').click(function () {
		$('ul', this).slideToggle(300);
		$('#title2').toggleClass('ad');
	});
	$('#height3').click(function () {
		$('ul', this).slideToggle(300);
		$('#title3').toggleClass('ad');
	});
	$('#height4').click(function () {
		$('ul', this).slideToggle(300);
		$('#title4').toggleClass('ad');
	});
});