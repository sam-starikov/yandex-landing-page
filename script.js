window.addEventListener('scroll', () => {
	console.log(
		document.querySelector('.abonnement__btn').offsetTop,
		window.scrollY
	)
	if (window.scrollY > document.querySelector('.abonnement').offsetTop) {
		document.querySelector('.btn').classList.add('none')
	} else {
		document.querySelector('.btn').classList.remove('none')
	}
})
