window.addEventListener('scroll', () => {
	if (window.scrollY > document.querySelector('.abonnement').offsetTop) {
		document.querySelector('.btn').classList.add('none')
	} else {
		document.querySelector('.btn').classList.remove('none')
	}
})
