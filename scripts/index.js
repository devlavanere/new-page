import { toggleTheme } from './modules/dark-light-mode.js'
import { handleScroll, toggleMenu } from './modules/menu-burguer.js'
import { carregarSlides, inicializarSwiper } from './modules/swiper.js'

//dark-light-mode
document.getElementById("theme-toggle").addEventListener("click", toggleTheme)

//menu-burguer
window.onscroll = handleScroll
document.querySelector("#menu-icon").onclick = toggleMenu

//swiper
carregarSlides().then(() => {
    inicializarSwiper()
});