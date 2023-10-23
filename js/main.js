const hamburgerMenu = document.querySelector(".hamburger__menu")
const navigationMenu = document.querySelector(".header__navigation__list")
const heroSection = document.querySelector(".hero__container")
const middleSection = document.querySelector(".middle")
const articlesSection = document.querySelector(".articles")
const footerSection = document.querySelector(".footer")

const opacityClass = "opacity-class"

hamburgerMenu.addEventListener("click", (e) => {
	navigationMenu.classList.toggle("show")
	heroSection.classList.toggle(opacityClass)
	middleSection.classList.toggle(opacityClass)
	articlesSection.classList.toggle(opacityClass)
	footerSection.classList.toggle(opacityClass)
})

function removeMobileClassesFromDesktop() {
	let screenWidth = window.innerWidth
	const largeScreen = "960"
	if (screenWidth > largeScreen) {
		navigationMenu.classList.remove("show")
		heroSection.classList.remove(opacityClass)
		middleSection.classList.remove(opacityClass)
		articlesSection.classList.remove(opacityClass)
		footerSection.classList.remove(opacityClass)
	}
}

window.addEventListener("resize", removeMobileClassesFromDesktop)
