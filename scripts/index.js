import { toggleTheme } from './modules/dark-light-mode.js';
import { handleScroll, toggleMenu } from './modules/menu-burguer.js';
import { carregarSlides, inicializarSwiper } from './modules/swiper.js';

document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
window.onscroll = handleScroll;
document.querySelector("#menu-icon").onclick = toggleMenu;

carregarSlides().then(() => {
    inicializarSwiper();
});