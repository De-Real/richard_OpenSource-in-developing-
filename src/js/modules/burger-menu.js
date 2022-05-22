export function menuBurger(){
	const menuBody = document.querySelector('#menu');
	const menuActivator = document.querySelector('.icon-menu');

	function menuActive(){
		menuBody.classList.toggle('_active');
		document.body.classList.toggle('_lock');
		menuActivator.classList.toggle('_active');
	}

	menuActivator.addEventListener('click', menuActive);
}