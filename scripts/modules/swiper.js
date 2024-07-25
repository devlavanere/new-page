// Função para carregar os slides do Swiper usando Fetch
// A função retorna uma Promise
export function carregarSlides() {
  const swiperWrapper = document.getElementById("swiper-wrapper");

  // Buscar dados do arquivo JSON
  return fetch("projetos.json")
    .then((response) => response.json())
    .then((projetos) => {
      projetos.forEach((projeto) => {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        slide.innerHTML = `
          <img src="${projeto.imagem}" alt="${projeto.titulo}">
          <div class="project-info">
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <a class="project-link" href="${projeto.link}" target="_blank">Acesse o projeto →</a>
          </div>
        `;
        swiperWrapper.appendChild(slide);
      });

      // Retorna a lista de slides para controle externo, se necessário
      return projetos;
    });
}

// Função para inicializar o Swiper
export function inicializarSwiper() {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
