const counters = document.querySelectorAll('.counter');

const animateCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  const speed = 100;
  let currentCount = 0;

  const updateCount = () => {
    const increment = target / speed;
    if (currentCount < target) {
      currentCount += increment;
      counter.innerText = Math.ceil(Math.min(currentCount, target));
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
};



const observerOptions = {
  root: null, 
  threshold: 0.5, 
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
     
      animateCounter(entry.target);
      
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);


counters.forEach((counter) => observer.observe(counter));