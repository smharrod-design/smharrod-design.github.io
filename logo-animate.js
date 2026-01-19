document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');
  const paths = logo.querySelectorAll('path');

  if (!logo) return;

  function animate() {
    let totalDelay = 0;

    // Reset all animations first
    paths.forEach(path => {
      path.style.animation = 'none';
      path.getBoundingClientRect(); // force reflow
    });

    // Apply new animations
    paths.forEach(path => {
      const length = path.getTotalLength();
      const duration = length / 400; // tweak speed here
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      path.style.animation = `draw ${duration}s ease forwards ${totalDelay}s`;
      totalDelay += duration;
    });
  }

  animate(); // animate on page load
  logo.addEventListener('mouseenter', animate); // animate on hover
});
