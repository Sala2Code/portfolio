(() => {
  const img = document.querySelector('.bg-tiles');
  if (!img) return;
  const factor = 0.05; // réduire ou augmenter l'effet
  function apply() {
    img.style.transform = `translateY(${-window.scrollY * factor}vh)`;
  }
  window.addEventListener('scroll', apply, { passive: true });
  apply();
})();
