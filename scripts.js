(function () {
  'use strict';

  // ─── SMOOTH REVEAL ON SCROLL ───
  var linkCards = document.querySelectorAll('.link-card');
  var galleryRows = document.querySelectorAll('.gallery-row');

  function revealOnScroll() {
    var elements = [].concat(
      Array.prototype.slice.call(linkCards),
      Array.prototype.slice.call(galleryRows)
    );

    elements.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  }

  // Set initial hidden state
  linkCards.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  galleryRows.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  // ─── SCROLL LISTENER ───
  var ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(function () {
        revealOnScroll();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // Initial check
  revealOnScroll();
})();
