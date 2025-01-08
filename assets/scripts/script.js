function handleMouseEnter() {
  this.classList.add('s-card--hovered');
  document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
  this.classList.remove('s-card--hovered');
  document.body.id = '';
}

function addEventListenersToCards() {
  const cardElements = document.querySelectorAll('.s-card');

  cardElements.forEach((card) => {
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  });
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards);

function selectCarouselItem(selectedButtonElement) {
  const selectedItem = Number(selectedButtonElement.id);
  const carousel = document.querySelector('.s-cards-carousel');
  const rotateYDeg = -120 * (selectedItem - 1);
  
  // Atualiza a transformação do carrossel diretamente
  carousel.style.transform = `translateZ(-45vw) rotateY(${rotateYDeg}deg)`;

  // Atualiza o botão ativo
  document
    .querySelector('.s-controller__button--active')
    .classList.remove('s-controller__button--active');
  selectedButtonElement.classList.add('s-controller__button--active');
}
