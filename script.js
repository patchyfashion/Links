
const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/patchyfashion',
  facebook: 'https://www.facebook.com/patchyfashion',
  whatsapp: 'https://wa.me/message/XXNBS5MEJ33JI1'
};

const LOGO_PATH = 'assets/logo.svg';

document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  for (const [platform, url] of Object.entries(SOCIAL_LINKS)) {
    const link = document.getElementById(`${platform}-link`);
    if (link && /^https:\/\//i.test(url)) link.href = url;
  }

  const logo = document.getElementById('brand-logo');
  const frame = document.getElementById('logo-frame');
  if (logo && frame) {
    logo.addEventListener('error', () => frame.classList.add('logo-missing'));
    logo.addEventListener('load', () => frame.classList.remove('logo-missing'));
    logo.src = LOGO_PATH;
    if (logo.complete && !logo.naturalWidth) frame.classList.add('logo-missing');
  }
});