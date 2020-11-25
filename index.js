const images = document.querySelectorAll("img");

const io = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.dir(entry);
      const image = entry.target;
      const src = image.dataset.lazy;
      image.src = src;

      observer.unobserve(image);
    }
  });
});

images.forEach((image) => io.observe(image));
