const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
if (toggle && navigation) {
  toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!open)); navigation.classList.toggle('is-open', !open); });
  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { toggle.setAttribute('aria-expanded', 'false'); navigation.classList.remove('is-open'); }));
}
document.querySelectorAll('[data-current-year]').forEach((element) => { element.textContent = new Date().getFullYear(); });
const showMailingListSuccess = () => {
  const signup = document.querySelector('.ml-subscribe-form-45032545');
  if (!signup) return;
  const form = signup.querySelector('.row-form');
  const success = signup.querySelector('.row-success');
  if (form) form.hidden = true;
  if (success) success.hidden = false;
};
window.ml_webform_success_45032545 = showMailingListSuccess;
const mailingListForm = document.querySelector('.ml-subscribe-form-45032545 .row-form');
if (mailingListForm) {
  mailingListForm.addEventListener('submit', () => {
    window.setTimeout(showMailingListSuccess, 900);
  });
}
document.querySelectorAll('[data-placeholder-form]').forEach((form) => { form.addEventListener('submit', (event) => { event.preventDefault(); if (!form.reportValidity()) return; const status = form.querySelector('.form-status'); if (status) status.textContent = form.dataset.message || 'This form connection is coming soon.'; }); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && toggle && navigation) { toggle.setAttribute('aria-expanded', 'false'); navigation.classList.remove('is-open'); toggle.focus(); } });
