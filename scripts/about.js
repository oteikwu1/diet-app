window.addEventListener('scroll', () => {
  const aboutImageContainer = document.querySelector('.about-image-container');
  let scrollY = window.scrollY;

  let scale = 1 + scrollY / 1000;
  console.log(scale)

  scale = Math.min(scale, 1.5);

  aboutImageContainer.style.transform = `scale(${scale})`;
});

const names = ['john', 'jane', 'james', 'ane'];
const obj = {...names}
console.log(names)