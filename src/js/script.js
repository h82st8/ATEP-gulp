'use strict';

const header         = document.querySelector('.header'),
			page           = document.querySelector('.page'),
			footerEmail    = document.querySelector('.footer__form-input'),
			linkLogin      = document.querySelectorAll('.link-login'),
			popupBody      = document.querySelector('body'),
			popupWrapper   = document.querySelector('.modal-wrapper'),
			popupLogin     = document.querySelector('.modal--login'),
			linkRecovery   = popupLogin.querySelector('.link-recovery'),
			popupRecovery  = document.querySelector('.modal--recovery'),
			linkFavorites  = document.querySelector('.link-favorites'),
			popupFavorites = document.querySelector('.modal-right--favorites'),
			buttonClose    = popupFavorites.querySelector('.modal-right__close');

popupBody.classList.remove('no-js');

function checkFooterForm() {
	document.querySelector('.footer__form-button').disabled = footerEmail.value ? false : "disabled";
}

const toggleHeader = function() {
	let animateHeader = window.pageYOffset > 133;
	let showHeader = window.pageYOffset > 350;
	header.classList.toggle('header-animate', animateHeader);
	header.classList.toggle('header-show', showHeader);
}

toggleHeader();
window.addEventListener('scroll', toggleHeader);

let lastFocus;

function modalShow() {
	lastFocus = document.activeElement;
}

function modalClose() {
	lastFocus.focus();
}

for (let i = 0; i < linkLogin.length; i++) {
	let link = linkLogin[i];
	link.addEventListener('click', function (event) {
		event.preventDefault();
		modalShow();
		if (popupRecovery.classList.contains('modal--show')) {
				popupRecovery.classList.remove('modal--show');
				popupWrapper.classList.remove('modal--show');
		}
		if (popupBody.classList.contains('modal--open')) {
				popupBody.classList.remove('modal--open');
		}
	popupBody.classList.add('modal--open');
	popupWrapper.classList.add('modal--show');
	popupLogin.classList.add('modal--show');
	popupLogin.setAttribute('tabindex', '0');
	focusRestrict();
	popupLogin.focus();
	focusRestrict();
	});
}

function focusRestrict(event) {
	if (popupLogin.classList.contains('modal--show')) {
		document.addEventListener('focus', function(event) {
			if ( popupLogin.classList.contains('modal--show') && !popupLogin.contains(event.target)) {
				event.stopPropagation();
				popupLogin.focus();
			}
		}, true);
	}
}

linkRecovery.addEventListener('click', function(event) {
	event.preventDefault();
	modalShow();
	if (popupLogin.classList.contains('modal--show')) {
			popupLogin.classList.remove('modal--show');
			popupWrapper.classList.remove('modal--show');
	}
	popupWrapper.classList.add('modal--show');
	popupRecovery.classList.add('modal--show');
	popupRecovery.setAttribute('tabindex', '0');
	popupRecovery.focus();
});

popupWrapper.addEventListener("click", function() {
	if (popupLogin.classList.contains('modal--show')) {
			popupWrapper.classList.remove('modal--show');
			popupLogin.classList.remove('modal--show');
			popupBody.classList.remove('modal--open');
			modalClose();
	}
	if (popupRecovery.classList.contains('modal--show')) {
			popupWrapper.classList.remove('modal--show');
			popupRecovery.classList.remove('modal--show');
			popupBody.classList.remove('modal--open');
			modalClose();
	}
});

function aninationOpenModal() {
	popupFavorites.classList.add('modal--animation');
}

function forAninationCloseModal() {
	popupFavorites.classList.remove('modal--show');
}

linkFavorites.addEventListener('click', function(event) {
	event.preventDefault();
	modalShow();
	popupFavorites.classList.add('modal--show');
	setTimeout(aninationOpenModal, 5);
	popupFavorites.setAttribute('tabindex', '0');
	popupFavorites.focus();
	function swap() {
		popupFavorites.parentNode.insertBefore(m, p);
	}
});

buttonClose.addEventListener('click', function(event) {
	popupFavorites.classList.remove('modal--animation');
	setTimeout(forAninationCloseModal, 1000);
	modalClose();
});

window.addEventListener('keydown', function(event) {
	if (event.keyCode === 27) {
		if (popupLogin.classList.contains('modal--show')) {
			popupWrapper.classList.remove('modal--show');
			popupLogin.classList.remove('modal--show');
			popupBody.classList.remove('modal--open');
			modalClose();
		}
		if (popupRecovery.classList.contains('modal--show')) {
			popupWrapper.classList.remove('modal--show');
			popupRecovery.classList.remove('modal--show');
			popupBody.classList.remove('modal--open');
			modalClose();
		}
		if (popupFavorites.classList.contains('modal--show')) {
			popupFavorites.classList.remove('modal--animation');
			setTimeout(forAninationCloseModal, 1000);
			modalClose();
		}
	}
});