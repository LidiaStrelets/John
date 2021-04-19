const menuBtnRef = document.querySelector('[data-menu="menu"]');
const navRef = document.querySelector('.site-nav');
// console.log(menuBtnRef);
menuBtnRef.addEventListener('click', () => {
  console.log('hi');
  document.body.classList.toggle('menu-opened');
  navRef.classList.toggle('menu-opened');
});
