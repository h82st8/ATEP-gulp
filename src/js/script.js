'use strict';

function checkFooterForm() {
	const footerEmail = document.querySelector('.footer__form-input');
	document.querySelector('.footer__form-button').disabled = footerEmail.value ? false : "disabled";
}
