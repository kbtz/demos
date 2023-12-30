export const $ = document.querySelector.bind(document)
export const $$ = query => 
	Array.from(document.querySelectorAll(query))
