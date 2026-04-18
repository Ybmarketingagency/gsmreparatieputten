// Header scroll effect
const header = document.getElementById('siteHeader');
const onScroll = () => {
    if (window.scrollY > 20) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('mainNav');
hamburger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    hamburger.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
});
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Scroll reveal
const revealTargets = document.querySelectorAll(
    '.service-card, .step, .price-card, .review-card, .why-feature, .contact-item, .section-head'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealTargets.forEach(el => io.observe(el));

// Form submit (placeholder)
function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('.form-submit');
    const original = btn.textContent;
    btn.textContent = 'Bezig met versturen...';
    btn.disabled = true;
    setTimeout(() => {
        btn.textContent = 'Bedankt! Wij nemen contact op.';
        form.reset();
        setTimeout(() => {
            btn.textContent = original;
            btn.disabled = false;
        }, 3500);
    }, 900);
}
window.handleFormSubmit = handleFormSubmit;
