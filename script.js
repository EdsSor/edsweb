document.addEventListener('click', function(e) {
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.left = (e.clientX - 50) + 'px';
  ripple.style.top = (e.clientY - 50) + 'px';
  ripple.style.width = ripple.style.height = '100px';
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    const overlay = document.getElementById('intro-overlay');
    overlay.style.opacity = '0';
    setTimeout(() => overlay.style.display = 'none', 1000);
  }, 1500); // Show intro for 1.5 seconds
});