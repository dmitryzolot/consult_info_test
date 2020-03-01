var navMenu = document.querySelector('.menu');
      var navHamburger = document.querySelector('.hamburger');
      var navMenuclose = document.querySelector('.menu-close');
      var mainTitle = document.querySelector('.main-title');

      navMenu.classList.remove('menu--nojs');
      navMenu.classList.remove('menu--opened');
      navHamburger.classList.remove('hamburger--hidden');
      mainTitle.classList.remove('main-title--visually-hidden');

      navHamburger.addEventListener('click', function() {
        navMenuclose.classList.remove('menu-close--hidden');
        navMenu.classList.add('menu--opened');
        navHamburger.classList.add('hamburger--hidden');
        mainTitle.classList.remove('main-title--visual');
        mainTitle.classList.add('main-title--visually-hidden');
        }
      );

      navMenuclose.addEventListener('click', function() {
        navMenu.classList.remove('menu--opened');
        navMenuclose.classList.add('menu-close--hidden');
        navHamburger.classList.remove('hamburger--hidden');
        mainTitle.classList.remove('main-title--visually-hidden');
        mainTitle.classList.add('main-title--visual');
        }
      );
