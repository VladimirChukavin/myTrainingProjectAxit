(function() {
	'use strict';

// behavior of the section tabs at active javascript
	document.addEventListener('DOMContentLoaded', function () {
		var activeJs = document.querySelector('.enable-js');
		var inactiveJs = document.querySelector('.disable-js');

		if (activeJs) {
			activeJs.classList.remove('hidden');
		}

		if (inactiveJs) {
			inactiveJs.classList.add('hidden');
		}

	});

// switching of tabs in the section tabs
	var buttons = document.querySelector('.tabs__buttons');
	var tabsCase = document.querySelector('.tabs__case');

	buttons.addEventListener('click', function (e) {
		var tabName = e.target.innerHTML;

		for (var i = 0; i < buttons.children.length; i++) {
			buttons.children[i].classList.remove('tabs__btn_active');
		}
		e.target.classList.add('tabs__btn_active');
		
		for (var i = 0; i < tabsCase.children.length; i++) {
			if (tabsCase.children[i].getAttribute('data-tab') != tabName) {
				tabsCase.children[i].classList.remove('tabs__page_active');
			} else {
				tabsCase.children[i].classList.add('tabs__page_active');
			}
		}
	});

// scrolling up
	var raise = document.querySelector('.raise');

	raise.addEventListener('click', function () {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	});

// control menu
// - opening closing of the menu with a width of a window is less 900px
	var navBtn = document.querySelector('.navigation__btn');
	var mask = document.querySelector('.mask');
	var menuShow = document.querySelector('.navigation');

	navBtn.addEventListener('click', function () {
		menuShow.classList.toggle('is-active');
		mask.classList.toggle('is-active');
	});

// - click-through in the menu
	var menu = document.querySelector('.menu');

	menu.addEventListener('click', function (e) {
		mask.classList.remove('is-active');
		menuShow.classList.remove('is-active');

		var dataContent = e.target.getAttribute('data-destination');

		var result = document.querySelector('.' + dataContent);

		window.scrollTo({
			top: result.offsetTop,
			behavior: "smooth"
		});
	});

})();