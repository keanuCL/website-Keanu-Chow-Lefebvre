const randomHue = Math.floor(Math.random() * 360);
const lightness = Math.random() < 0.5 ? 20 : 85;
const bgColor = `hsl(${randomHue}, 60%, ${lightness}%)`;
const textColor = lightness > 50 ? 'black' : 'white';

function getContrastingColor(bgHue) {
  let newHue;
  do {
    newHue = Math.floor(Math.random() * 360);
  } while (Math.abs(newHue - bgHue) < 60 || Math.abs(newHue - bgHue) > 300);
  return `hsl(${newHue}, 100%, 70%)`;
}

document.addEventListener('DOMContentLoaded', () => {

  document.body.style.backgroundColor = bgColor;

  // Set overlay and fullsize colors if they exist on this page
  const overlay = document.getElementById('overlay');
  const fullsize = document.getElementById('fullsize-container');
  if (overlay) overlay.style.backgroundColor = bgColor;
  if (fullsize) fullsize.style.backgroundColor = bgColor;

  // Set text color
  document.querySelectorAll(
    "h1, p, a, .txt, .sous-titre, .small_txt, .center_text, .center_small_txt, .dropDown_text, .menuTexte, .content, a.fixed, .works"
  ).forEach(el => {
    el.style.setProperty('color', textColor, 'important');
  });

  // Hover color change
  document.querySelectorAll(
    'a, .small_txt, .center_text, .sous-titre, .dropdown-btn, .content, .works'
  ).forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.setProperty('color', getContrastingColor(randomHue), 'important');
    });
    el.addEventListener('mouseleave', () => {
      el.style.setProperty('color', textColor, 'important');
    });
  });

});