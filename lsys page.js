document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.img-lsys').forEach(el => {
    const src = lightness > 50
      ? el.dataset.normal    // light bg = black images
      : el.dataset.inverted; // dark bg = white images
    el.style.backgroundImage = `url('${src}')`;
  });
});

let currentImage = null;

function changeImage(element) {
  currentImage = element;

  const src = lightness > 50 ? element.dataset.normal : element.dataset.inverted;
  const fullsizeContainer = document.getElementById('fullsize-container');
  fullsizeContainer.style.backgroundImage = `url('${src}')`;

  document.getElementById('overlay').style.display = 'block';
  fullsizeContainer.style.display = 'block';
  document.getElementById('toggle-fullsize').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeZoom() {
  document.getElementById('overlay').style.display = 'none';
  const fullsizeContainer = document.getElementById('fullsize-container');
  fullsizeContainer.style.display = 'none';
  document.getElementById('toggle-fullsize').style.display = 'none';
  document.body.style.overflow = 'auto';
  currentImage = null;
}

function toggleFullsizeImage() {
  if (!currentImage) return;
  const fullsizeContainer = document.getElementById('fullsize-container');
  const isCurrentlyInverted = fullsizeContainer.style.backgroundImage.includes('W.png');
  const src = isCurrentlyInverted ? currentImage.dataset.normal : currentImage.dataset.inverted;
  fullsizeContainer.style.backgroundImage = `url('${src}')`;
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') closeZoom();
});