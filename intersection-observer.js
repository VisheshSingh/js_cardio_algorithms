// STEP 1 - allback
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('In view', entry.target);
      entry.target.classList.add('in-view');
    } else {
      console.log('Out of view');
      entry.target.classList.remove('in-view');
    }
  });
};

// STEP 2 - Options
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

// STEP 3 - Instantiate Intersection Observer
const observer = new IntersectionObserver(callback, options);

document.querySelectorAll('.target').forEach((target) => {
  observer.observe(target);
});
