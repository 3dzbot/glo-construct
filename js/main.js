/*
new Swiper('.swiper-container', {
	loop: true,
	navigation: {
		nextEl: '.arrow',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		541: {
			slidesPerView: 2,
			spaceBetween: 40
		}
	}
});

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.header');
menuButton.addEventListener('click', function () {
	menuButton.classList.toggle('menu-button-active');
	menu.classList.toggle('header-active');
})
*/

const getElement = (tagName, className) => {
	const element = document.createElement(tagName);

	if(className) {
		element.classList.add(...className);
		// element.className.add('test', 'hello', 'world');
	}

	return element;
}

const createHeader = (param) => {
	const header = getElement('header', ['test', 'hello', 'world']);
	const container = getElement('div', ['container']);
	const wrapper = getElement('div', ['header']);

	if(param.header.logo) {
		const logo = getElement('img', ['logo']);
		logo.src = param.header.logo;
		logo.alt = 'Логотип ' + param.title;
		wrapper.append(logo)
	}

	header.append(container);
	container.append(wrapper);

	return header;
};

const movieConstructor = (selector, options) => {
	
	const app = document.querySelector(selector);
	app.classList.add('body-app');
	
	if(options.header){
			app.append(createHeader(options));
	}


};
movieConstructor('.app', {
	title: 'Ведьмак',
	header: {
		logo: 'witcher/logo.png',
	},
});