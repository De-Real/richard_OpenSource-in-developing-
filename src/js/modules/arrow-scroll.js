export function arrowScroll() {
	const arrow = document.querySelector('.momentum__arrow');
	const toBlock = document.querySelector('.laptop');

	arrow.addEventListener('click', function (e) {
		let topCoords = toBlock.getBoundingClientRect().top + document.documentElement.scrollTop;
		document.documentElement.scrollTo({
			top: topCoords,
			behavior: 'smooth',
		});
		e.preventDefault();
	})
}