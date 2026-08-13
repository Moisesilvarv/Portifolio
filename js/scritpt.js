const links = document.querySelectorAll('.site-header nav a');
const sections = document.querySelectorAll('main section[id]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    links.forEach((link) => link.removeAttribute('aria-current'));
    document.querySelector(`.site-header nav a[href="#${entry.target.id}"]`)?.setAttribute('aria-current', 'page');
  });
}, { rootMargin: '-35% 0px -55%' });
sections.forEach((section) => observer.observe(section));
