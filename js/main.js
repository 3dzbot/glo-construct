/* new Swiper('.swiper-container', {
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
})*/

const getElement = (tagName, className, attributes) => {
	const element = document.createElement(tagName);

	if(className) {
		element.classList.add(...className);
		// element.className.add('test', 'hello', 'world');
	}

	if(attributes) {
		for (const attribute in attributes) {
			// шикарный метод!
			//добавляет каждому елементу перечень атрибутов
			// attribute - ключ
			// attributes[attribute] - значение
			element[attribute] = attributes[attribute];
		}
	}

	return element;
}

const createHeader = (param) => {
	const header = getElement('header', ['test', 'hello', 'world']);
	const container = getElement('div', ['container']);
	const wrapper = getElement('div', ['header']);

	if(param.header.logo) {
		const logo = getElement('img', ['logo'], {
			src: param.header.logo,
			alt: 'Логотип ' + param.title,
		});
		wrapper.append(logo);
	}

	if(param.header.social) {
		const socialWrapper = getElement('div', ['social']);
		const allSocial = param.header.social.map(item => {
			const socialLink = getElement('a', ['social-link']);
			socialLink.append(getElement('img', [], {
				src: item.image,
				alt: item.title,
			}))

			socialLink.href = item.link;
			return socialLink;
		})
		console.log(allSocial);
		socialWrapper.append(...allSocial);
		wrapper.append(socialWrapper);
	}

	if(param.header.menu) {

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
		social: [
			{
				title: '',
				link: 'https://twitter.com',
				image: 'witcher/social/twitter.svg',
			},
			{
				title: 'Instagram',
				link: 'https://instagram.com',
				image: 'witcher/social/instagram.svg',
			},
			{
				title: '',
				link: 'https://facebook.com',
				image: 'witcher/social/facebook.svg',
			},
		],
		menu: [
			{
				title: 'Описание',
				link: '#',
			},
			{
				title: 'Трейлер',
				link: '#',
			},
			{
				title: 'Отзывы',
				link: '#',
			},
		]
	},
});