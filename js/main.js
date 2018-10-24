(function() {
	'use strict';

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
	})
	
})();