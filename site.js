(function () {
  function markImageFailed(img) {
    var figure = img.closest('.media-figure');
    if (!figure) return;
    figure.classList.add('image-failed');
  }

  function initFallbackCaptions() {
    var images = document.querySelectorAll('.media-figure img');
    images.forEach(function (img) {
      if (img.complete && img.naturalWidth === 0) {
        markImageFailed(img);
        return;
      }
      img.addEventListener('error', function () {
        markImageFailed(img);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFallbackCaptions);
  } else {
    initFallbackCaptions();
  }
})();
