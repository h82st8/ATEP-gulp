'use strict';

const linkLogin     = document.querySelector('.user-menu__login'),
			popupWrapper  = document.querySelector('.modal-wrapper'),
			popupLogin    = document.querySelector('.modal-login'),
			linkRecovery  = popupLogin.querySelector('.modal-login__recovery'),
			popupRecovery = document.querySelector('.modal-recovery'),
			footerEmail   = document.querySelector('.footer__form-input');

function checkFooterForm() {
	document.querySelector('.footer__form-button').disabled = footerEmail.value ? false : "disabled";
}

linkLogin.addEventListener('click', function(event) {
	event.preventDefault();
	popupWrapper.classList.add('modal-show');
	popupLogin.classList.add('modal-show');
});

linkRecovery.addEventListener('click', function(event) {
	event.preventDefault();
	popupLogin.classList.remove('modal-show');
	popupWrapper.classList.add('modal-show');
	popupRecovery.classList.add('modal-show');
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popupLogin.classList.contains('modal-show')) {
			popupWrapper.classList.remove('modal-show');
			popupLogin.classList.remove('modal-show');
		}
		if (popupLogin.classList.contains('modal-show')) {
			popupWrapper.classList.remove('modal-show');
			popupLogin.classList.remove('modal-show');
		}
	}
});

popupWrapper.addEventListener("click", function() {
	popupWrapper.classList.remove('modal-show');
	popupLogin.classList.remove('modal-show');
	popupRecovery.classList.remove('modal-show');
});