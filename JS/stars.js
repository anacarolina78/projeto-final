const ratingContainers = document.querySelectorAll('.rating');

ratingContainers.forEach((ratingContainer) => {
  const stars = ratingContainer.querySelectorAll('.star');
  let currentRating = 0;

  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      currentRating = index + 1;
      updateRating(stars, currentRating);
    });
  });

  function updateRating(stars, currentRating) {
    stars.forEach((star, index) => {
      if (index < currentRating) {
        star.classList.add('active');
      } else {
        star.classList.remove('active');
      }
    });
  }

  // Inicializa a avaliação com 0 estrelas
  updateRating(stars, 0);
});


