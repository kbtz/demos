import { $, $$ } from '../utils.js'

const debounce = 1000, elements = {}, last = {}

window.onload = () => {
	Object.assign(elements, {
		container: $('#container'),
		slider: $('#slider'),
		stars: $$('#slider use[href="#star"]'),
	})
	
	slider.onmouseleave = rate()
	for (let [i, star] of elements.stars.entries()) {
		star.onmouseover = rate(i + 1)
		star.onclick = rate(i + 1, true)
	}

	rate(3, true)()
}

function rate(value, update) {
	return () => {
		if (update) {
			if (Date.now() < last.change + debounce) return
			
			if (last.change)
				animate(elements.stars.slice(0, value))
			
			last.rating = value
			last.change = Date.now()
		}

		container.dataset.rating = value || last.rating
	}
}

function animate(stars) {
	for (let star of stars)
		star.classList.add('animate')
	
	setTimeout(() => {
		for (let star of stars)
			star.classList.remove('animate')
	}, debounce * .9)
}
