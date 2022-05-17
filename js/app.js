const sliderMain = new Swiper('.slider_main', {
	freeMode: true,
	centeredSlides: true,
	mousewheel: true,
	parallax: true,
	breakpoints: {
		0: {
			slidesPerView: 2.5,
			spaceBetween: 110
		},
		680: {
			slidesPerView: 3.5,
			spaceBetween: 110
		}
	}
})
const sliderBg = new Swiper('.slider_bg', {
	centeredSlides: true,
	parallax: true,
	spaceBetween: 110,
	slidesPerView: 3.5
})
sliderMain.controller.control = sliderBg



let desc = document.querySelector('.description')
sliderMain.on('slideChange', e => {
	sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})
