export function topMover() {
	const mover = document.querySelector('.top-mover');
	const docDoc = document.documentElement;

	function moverChecker() {
		let moveClass = mover.classList;
		if (docDoc.scrollTop > docDoc.clientHeight && !moveClass.contains('_active')) moveClass.add('_active');
		if (docDoc.scrollTop < docDoc.clientHeight && moveClass.contains('_active')) moveClass.remove('_active');
	}

	//displaying of mover
	document.addEventListener('scroll', moverChecker)
	mover.addEventListener('click', function () {
		docDoc.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
		moverChecker();
	})

}