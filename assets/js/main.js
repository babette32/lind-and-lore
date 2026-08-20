const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
if (toggle && navigation) {
  toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!open)); navigation.classList.toggle('is-open', !open); });
  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { toggle.setAttribute('aria-expanded', 'false'); navigation.classList.remove('is-open'); }));
}
document.querySelectorAll('[data-current-year]').forEach((element) => { element.textContent = new Date().getFullYear(); });
document.querySelectorAll('[data-placeholder-form]').forEach((form) => { form.addEventListener('submit', (event) => { event.preventDefault(); if (!form.reportValidity()) return; const status = form.querySelector('.form-status'); if (status) status.textContent = form.dataset.message || 'This form connection is coming soon.'; }); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && toggle && navigation) { toggle.setAttribute('aria-expanded', 'false'); navigation.classList.remove('is-open'); toggle.focus(); } });
