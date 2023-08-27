function menuShow() {
    let menuMobileOpen = document.querySelector('.menu-mobile-open');
    if (menuMobileOpen.classList.contains('none')) {
        menuMobileOpen.classList.remove('none');
        } else {
        menuMobileOpen.classList.add('none');
        }

   }
