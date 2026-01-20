document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');
  if (!logo) return;

  const paths = logo.querySelectorAll('path');
  const underline = paths[paths.length - 1]; // last path = underline
  const letters = Array.from(paths).slice(0, -1);

  // Mark underline
  underline.classList.add('underline');

  // --- Animate letters ONCE ---
  let totalDelay = 0;

  letters.forEach(path => {
    const length = path.getTotalLength();
    const duration = length / 400;

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.animation = `draw ${duration}s ease forwards ${totalDelay}s`;

    totalDelay += duration;
  });

  // --- Setup underline ---
  const underlineLength = underline.getTotalLength();
  underline.style.strokeDasharray = underlineLength;
  underline.style.strokeDashoffset = 0; // drawn by default

  // --- Hover behaviour ---
  logo.addEventListener('mouseenter', () => {
    underline.style.strokeDashoffset = underlineLength; // un-draw
  });

  logo.addEventListener('mouseleave', () => {
    underline.style.strokeDashoffset = 0; // re-draw
  });
});
