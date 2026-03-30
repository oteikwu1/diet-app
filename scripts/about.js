window.addEventListener('scroll', () => {
  const aboutImageContainer = document.querySelector('.about-image-container');
  let scrollY = window.scrollY;

  let scale = 1 + scrollY / 1000;

  scale = Math.min(scale, 1.5);

  aboutImageContainer.style.transform = `scale(${scale})`;
});
