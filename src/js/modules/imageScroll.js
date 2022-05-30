export function scrollImage() {
	const rowBlock = document.querySelector('#comment-row');
	const rowElements = document.querySelectorAll('[data-column]');
	const stateBlock = document.querySelector('[data-state]');


	let arr = [];
	for (let i = 0; i < rowElements.length; i++) {
		let showBlock = document.createElement('span');
		showBlock.classList.add('comment__block-column');
		arr.push(showBlock);
		stateBlock.append(showBlock);
	}

	let start = 0, index = 0, prev = 0;

	rowBlock.style.left = start;

	let interval = setTimeout(swap, 100)

	function swap(){
		start += rowBlock.scrollWidth / rowElements.length;
		prev = index++;
		if (index > arr.length - 1) {
			index = 0;
			prev = arr.length - 1;
		};
		
		if (start >= rowBlock.scrollWidth) {
			start = 0;
		};


		arr[prev].classList.remove('_true');
		arr[index].classList.add('_true');

		rowBlock.style.left = (-start) + 'px';

		interval = setTimeout(swap, 5000);
	}
}