document.addEventListener("click", function(e) {
	const tgt = e.target;
	if (tgt.classList.contains('btn')) {
		document.querySelector(tgt.dataset.modal).classList.add('active')
        document.body.style.overflow = 'hidden';
	} else if (tgt.classList.contains('overlay') || tgt.classList.contains('close')) {
        document.body.style.overflow = 'visible';
		tgt.closest('.modal-container').classList.remove('active')
	}
});