// Loader
// --------------

setTimeout(showPage, 1700);

function showPage() {
  $('#loading').fadeOut(1500);
  $('#loader').fadeOut(1000);
}

// -------------- 
//Ajout de classe à l'élément actuel dans la fenêtre d'affichage - Objectif de lancer des effets
//---------------
(function() {
  'use strict';
  
  // vérifier si un élément est dans la fenêtre
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  var itemstime = document.querySelectorAll('.timeline li');
  
  //timeline // formation
  function callbackFuncTimeline() {
    for (var i = 0; i < itemstime.length; i++) {
      if (isElementInViewport(itemstime[i])) {
        itemstime[i].classList.add('in-view');
      }
    }
  }

  //Intro
  // define variables
  var introHobbies = document.querySelectorAll('.display-move');

  function callbackFuncIntro() {
    for (var i = 0; i < introHobbies.length; i++) {
      if (isElementInViewport(introHobbies[i])) {
        introHobbies[i].classList.add('in-view');
      }
    }
  }

  //Competence --- Skills
  var skills = document.querySelectorAll('.display-skills');

  function callbackFuncskills() {
    for (var i = 0; i < skills.length; i++) {
      if (isElementInViewport(skills[i])) {
        skills[i].classList.add('in-view');
      }
    }
  }

  //Projects
  var projects = document.querySelectorAll('.display-projects');

  function callbackFuncProjects() {
    for (var i = 0; i < projects.length; i++) {
      if (isElementInViewport(projects[i])) {
        projects[i].classList.add('in-view');
      }
    }
  }

  //CarouselProjects
  var Carousel = document.querySelectorAll('.display-carousel');

  function callbackFuncCarousel() {
    for (var i = 0; i < Carousel.length; i++) {
      if (isElementInViewport(Carousel[i])) {
        Carousel[i].classList.add('in-view');
      }
    }
  }

  // apparition titre des sections
  var title = document.querySelectorAll('.display-title');

  function callbackFuncTitle() {
    for (var i = 0; i < title.length; i++) {
      if (isElementInViewport(title[i])) {
        title[i].classList.add('in-view');
      }
    }
  }

  //Title of each section
  var icones = document.querySelectorAll('.footer-icones');

  function callbackFuncIcones() {
    for (var i = 0; i < icones.length; i++) {
      if (isElementInViewport(icones[i])) {
        icones[i].classList.add('in-view');
      }else{
        icones[i].classList.remove('in-view');
      }
    }
  }

  // donne la classe active à l'élément qui a l'id donné dans param
  function rendre_actif(element) {
    if (document.querySelector('.onAncre')) {
      document.querySelector('.onAncre').className = '';
    }
    if (element != 'home-ancre-menu') {
      document.querySelector('a[href="#' + element + '"]').className = 'onAncre';
    }
  }

  // vérifier si le haut du screen touche une ancre
  function checkAncre() {
    var scroll = window.scrollY;
     // desactive la fleche back to top
     if (scroll <= document.getElementById('home-anchor').offsetTop || scroll > (document.getElementById('about-anchor').offsetTop - 200)) {
      rendre_actif('home-ancre-menu');
      document.querySelector('.arrow-to-top').classList.remove('active');
    }
    // active la fleche back to top
    if (scroll >= (document.getElementById('about-anchor').offsetTop - 200)) {
      rendre_actif('about-anchor');
      document.querySelector('.arrow-to-top').classList.add('active');
    }
    // apparition éxperience nav
    if (scroll >= (document.getElementById('timeline-anchor').offsetTop - 200)) {
      rendre_actif('timeline-anchor')
    }
    // apparition compétences nav
    if (scroll >= (document.getElementById('skills-anchor').offsetTop - 200)) {
      rendre_actif('skills-anchor')
    }
    // apparition projets nav
    if (scroll >= (document.getElementById('projects-anchor').offsetTop - 200)) {
      rendre_actif('projects-anchor')
    }
    // apparition loisirs nav
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      rendre_actif('hobbies-anchor');
   }
  }

  // listen des evenements 
  window.addEventListener('load', callbackFuncIcones);
  window.addEventListener('resize', callbackFuncIcones);
  window.addEventListener('scroll', callbackFuncIcones);
  // listen for events
  window.addEventListener('load', checkAncre);
  window.addEventListener('resize', checkAncre);
  window.addEventListener('scroll', checkAncre);
  // listen for events
  window.addEventListener('load', callbackFuncTimeline);
  window.addEventListener('resize', callbackFuncTimeline);
  window.addEventListener('scroll', callbackFuncTimeline);
  // event des skills
  window.addEventListener('load', callbackFuncskills);
  window.addEventListener('resize', callbackFuncskills);
  window.addEventListener('scroll', callbackFuncskills);
  // event des projects
  window.addEventListener('load', callbackFuncProjects);
  window.addEventListener('resize', callbackFuncProjects);
  window.addEventListener('scroll', callbackFuncProjects);
  
  window.addEventListener('load', callbackFuncIntro);
  window.addEventListener('resize', callbackFuncIntro);
  window.addEventListener('scroll', callbackFuncIntro);

  window.addEventListener('load', callbackFuncCarousel);
  window.addEventListener('resize', callbackFuncCarousel);
  window.addEventListener('scroll', callbackFuncCarousel);

  window.addEventListener('load', callbackFuncTitle);
  window.addEventListener('resize', callbackFuncTitle);
  window.addEventListener('scroll', callbackFuncTitle);
})();

// ------------
// MENU effects pendant le scroll
// ------------

const header = document.getElementById('isFixed');

// J'en fait une fonction pour pouvoir l'appeler au chargement de la page car
// le scoll n'est pas forcément en haut au chargement.
function onWindowScroll(event) {
  if (window.pageYOffset < 46) {
    header.classList.remove('scrolled');
    $('#logoImgHeader').attr('src', 'assets/img/logo-black.png');
  } else {
    header.classList.add('scrolled');
    $('#logoImgHeader').attr('src', 'assets/img/logo-white.png');
  }
}

window.addEventListener('scroll', onWindowScroll);

// var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))
//                             for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);
//                             else 
//                             for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

//     var hamburgers = document.querySelectorAll(".hamburger");
//     if (hamburgers.length > 0) {
//       forEach(hamburgers, function(hamburger) {
//         hamburger.addEventListener("click", function() {
//           this.classList.toggle("is-active");
//         }, false);
//       });
//     }