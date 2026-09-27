// FAQ Toggle
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    item.classList.toggle('active');
    const plus = q.querySelector('span');
    plus.textContent = item.classList.contains('active') ? '−' : '+';
  });
});

// Smooth Scrolling for buttons
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

console.log("SkyFlow AI Landing Page Loaded - Task 02 Complete");