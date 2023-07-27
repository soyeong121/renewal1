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

	$('#topMenuLi1').on('mouseover', function (e) {
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
	$('#topMenuLi2').on('mouseover', function (e) {
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
	$('#topMenuLi3').on('mouseover', function (e) {
		e.preventDefault();
		$container3.slideDown();
		$submenu.height('200%');
		$container1.slideUp();
		$container2.slideUp();
		$container4.slideUp();
		$container5.slideUp();
		$container6.slideUp();
		$container7.slideUp();
		$submenu.slideDown();
	});
	$('#topMenuLi4').on('mouseover', function (e) {
		e.preventDefault();
		$container4.slideDown();
		$submenu.height('100%');
		$container1.slideUp();
		$container2.slideUp();
		$container3.slideUp();
		$container5.slideUp();
		$container6.slideUp();
		$container7.slideUp();
		$submenu.slideDown();
	});
	$('#topMenuLi5').on('mouseover', function (e) {
		e.preventDefault();
		$container5.slideDown();
		$submenu.height('200%');
		$container1.slideUp();
		$container2.slideUp();
		$container3.slideUp();
		$container4.slideUp();
		$container6.slideUp();
		$container7.slideUp();
		$submenu.slideDown();
	});
	$('#topMenuLi6').on('mouseover', function (e) {
		e.preventDefault();
		$container6.slideDown();
		$submenu.height('200%');
		$container1.slideUp();
		$container2.slideUp();
		$container3.slideUp();
		$container4.slideUp();
		$container5.slideUp();
		$container7.slideUp();
		$submenu.slideDown();
	});
	$('#topMenuLi7').on('mouseover', function (e) {
		e.preventDefault();
		$container7.slideDown();
		$submenu.height('200%');
		$container1.slideUp();
		$container2.slideUp();
		$container3.slideUp();
		$container4.slideUp();
		$container5.slideUp();
		$container6.slideUp();
		$submenu.slideDown();
	});

	$nav.on('mouseleave', function () {
		$container1.slideUp();
		$container2.slideUp();
		$container3.slideUp();
		$container4.slideUp();
		$container5.slideUp();
		$container6.slideUp();
		$container7.slideUp();
		$submenu.slideUp();
	});

	// 루프 슬라이드 (배너)
	const list = document.querySelector('.slide__list');
	const items = document.querySelectorAll('.slide__list > li');
	const buttons = document.querySelector('.buttons');
	const paginations = document.querySelector('.paginations');
	const lastIndex = items.length - 1;
	let selected = 0;
	let interval;

	// Util Functions
	const setTransition = (value) => {
		list.style.transition = value;
	};

	const setTranslate = ({ index, reset }) => {
		if (reset) list.style.transform = `translate(-${list.clientWidth}px, 0)`;
		else list.style.transform = `translate(-${(index + 1) * list.clientWidth}px, 0)`;
	};

	const activePagination = (index) => {
		[...paginations.children].forEach((pagination) => {
			pagination.classList.remove('on');
		});
		paginations.children[index].classList.add('on');
	};

	// 이전 & 다음 버튼
	const handlePrev = () => {
		selected -= 1;
		setTransition('transform 0.3s linear');
		setTranslate({ index: selected });
		if (selected < 0) {
			selected = lastIndex;
			setTimeout(() => {
				setTransition('');
				setTranslate({ index: selected });
			}, 300);
		}
		if (selected >= 0) activePagination(selected);
	};

	const handleNext = () => {
		console.log(selected);
		selected += 1;
		setTransition('transform 0.3s linear');
		setTranslate({ index: selected });
		if (selected > lastIndex) {
			selected = 0;
			setTimeout(() => {
				setTransition('');
				setTranslate({ index: selected });
			}, 300);
		}
		if (selected <= lastIndex) activePagination(selected);
	};

	// 버튼을 동적으로 생성함과 동시에 이벤트도 연결하며,
	// 각 이벤트 핸들러 함수는 현재 슬라이드의 인덱스를 담고 있는
	// selected 변수의 값을 1씩 증감시키며 리스트의 Translate 값을 조정
	const makeButton = () => {
		if (items.length > 1) {
			const prevButton = document.createElement('button');
			prevButton.classList.add('prev');
			prevButton.addEventListener('click', handlePrev);

			const nextButton = document.createElement('button');
			nextButton.classList.add('next');
			nextButton.addEventListener('click', handleNext);

			buttons.appendChild(prevButton);
			buttons.appendChild(nextButton);
		}
	};

	// 페이지네이션 버튼 만들기
	// 페이지네이션 버튼은 하단에 위치, 인덱스에 맞는 슬라이드로 바로 이동할 수 있도록 함
	const handlePagination = (e) => {
		if (e.target.dataset.num) {
			selected = parseInt(e.target.dataset.num);
			setTransition('all 0.3s linear');
			setTranslate({ index: selected });
			activePagination(selected);
		}
	};

	// 슬라이드 개수에 맞춰 버튼을 동적으로 생성한 뒤,
	// 각 슬라이드의 인덱스를 버튼 요소의 data-num 속성에 할당
	const makePagination = () => {
		if (items.length > 1) {
			for (let i = 0; i < items.length; i++) {
				const button = document.createElement('button');
				button.dataset.num = i;
				button.classList.add('pagination');
				if (i === 0) {
					button.classList.add('on');
					// 웹사이트가 열리면 항상 첫 슬라이드부터 시작하기 때문에,
					// 첫 번째 버튼 요소에는 추가적으로 'on' 클래스를 지정해 
					// 현재 어떤 슬라이드가 사용자에게 보여지고 있는지 알려줌
				}
				paginations.appendChild(button);
				paginations.addEventListener('click', handlePagination);
			}
		}
	};

	// 슬라이드 맨 앞 & 맨 뒤 요소 복사
	// 슬라이드 양 끝의 요소를 복사하여,맨 앞에서 이전 슬라이드로 이동하거나 할 때 자연스럽게 넘김
	const cloneElement = () => {
		list.prepend(items[lastIndex].cloneNode(true));
		list.append(items[0].cloneNode(true));
		setTranslate({ reset: true });
	};

	// 슬라이드 자동 재생
	const autoplayIterator = () => {
		selected += 1;
		setTransition('all 0.3s linear');
		setTranslate({ index: selected });
		if (selected > lastIndex) {
			activePagination(0);
			clearInterval(interval);
			setTimeout(() => {
				selected = 0;
				setTransition('');
				setTranslate({ reset: true });
				autoplay({ duration: 4000 });
			}, 300);
		}
		if (selected <= lastIndex) activePagination(selected);
	};

	// 마우스가 올라가면 멈추고, 마우스가 벗어나면 다시 재생
	let duration = 4000;
	$('.slide__list').parent().on({
		mouseenter: function () {
			window.clearInterval(interval);
		},

		mouseleave: function () {
			interval = setInterval(autoplayIterator, duration);
		}
	});

	const autoplay = ({ duration }) => {
		interval = setInterval(autoplayIterator, duration);
	};

	const render = () => {
		makeButton();
		makePagination();
		cloneElement();
		autoplay({ duration: 4000 });
	};
	render();

	// 새로운 소식 tab
	$('#tabnav li').click(function () {
		var onTab = $(this).attr('data-tab');
		$('#tabnav li').removeClass('on');
		$('.tab-contents11').removeClass('on');
		$(this).addClass('on');
		$('#' + onTab).addClass('on');
	});

	// 관련사이트 바로가기
	$('#family_title1').click(function () {
		$('#family-list1').stop().slideToggle()
	});

	$('#family_title2').click(function () {
		$('#family-list2').stop().slideToggle()
	});

	$('#family_title3').click(function () {
		$('#family-list3').stop().slideToggle()
	});

	$('#family_title4').click(function () {
		$('#family-list4').stop().slideToggle()
	});
	// 마우스 벗어나면 닫힘
	$('.family_list').mouseleave(function(){
		$(this).hide();
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