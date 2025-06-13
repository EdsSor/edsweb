
document.body.addEventListener('click', function(e) {
  if (e.target.closest('a, button, img, input, textarea, .profile-pic')) return;
  const ripple = document.createElement('span');
  ripple.className = 'body-ripple';
  const size = 120;
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - size/2) + 'px';
  ripple.style.top = (e.clientY - size/2) + 'px';
  document.body.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
});



window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    const overlay = document.getElementById('intro-overlay');
    overlay.style.opacity = '0';
    setTimeout(() => overlay.style.display = 'none', 1000);
  }, 1500); // Show intro for 1.5 seconds
});