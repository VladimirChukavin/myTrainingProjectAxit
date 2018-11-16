(function() {
	'use strict';

// behavior of the section tabs at active javascript
	document.addEventListener('DOMContentLoaded', function () {
		var activeJs = document.querySelector('.enable-js');
		var inactiveJs = document.querySelector('.disable-js');

		if (activeJs) {
			removeClass(activeJs, 'hidden');
		}

		if (inactiveJs) {
			addClass(inactiveJs, 'hidden');
		}

	});

// switching of tabs in the section tabs
	var buttons = document.querySelector('.tabs__buttons');
	var tabsCase = document.querySelector('.tabs__case');

	buttons.addEventListener('click', function (e) {
		var tabName = e.target.innerHTML;

		if (e.target.classList.contains('tabs__btn_active')) return;

		for (var i = 0; i < buttons.children.length; i++) {
			removeClass(buttons.children[i], 'tabs__btn_active');
		}
		addClass(e.target, 'tabs__btn_active');
		
		for (var i = 0; i < tabsCase.children.length; i++) {
			if (tabsCase.children[i].getAttribute('data-tab') != tabName) {
				removeClass(tabsCase.children[i], 'tabs__page_active');
			} else {
				addClass(tabsCase.children[i], 'tabs__page_active');
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
		removeClass(mask, 'is-active');
		removeClass(menuShow, 'is-active');

		var dataContent = e.target.getAttribute('data-destination');

		var result = document.querySelector('.' + dataContent);

		window.scrollTo({
			top: result.offsetTop,
			behavior: "smooth"
		});
	});

/**
 * deletes the class existing at an element
 * @param  {[type]} elem      DOM element
 * @param  {[type]} nameClass name of a class
 */
	function removeClass(elem, nameClass) {
		elem.classList.remove(nameClass);
	}

/**
 * adds a new class to an element
 * @param {[type]} elem      DOM element
 * @param {[type]} nameClass name of a class
 */
	function addClass(elem, nameClass) {
		elem.classList.add(nameClass);
	}

})();