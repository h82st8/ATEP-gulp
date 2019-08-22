'use strict';

function checkFooterForm() {
	var footerEmail = document.querySelector('.footer__form-input');
	document.querySelector('.footer__form-button').disabled = footerEmail.value ? false : "disabled";
}
