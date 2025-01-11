AOS.init();
document.addEventListener("DOMContentLoaded", () => {
  const dynamicText = document.getElementById("dynamic-text");
  const phrases = [
    "el Desarrollo Web",
    "la Programación",
    "las Tecnologías de la Información",
    "el Desarrollo Móvil",
    "la Inteligencia Artificial",
    "la Ciberseguridad",
    "el Desarrollo de Software",
    "la Automatización"
  ];
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let deleting = false;

  function typeEffect() {
    const currentPhrase = phrases[currentPhraseIndex];

    if (deleting) {
      currentCharIndex--;
    } else {
      currentCharIndex++;
    }

    dynamicText.textContent = currentPhrase.slice(0, currentCharIndex);

    if (!deleting && currentCharIndex === currentPhrase.length) {
      setTimeout(() => {
        deleting = true;
      }, 1000);
    } else if (deleting && currentCharIndex === 0) {
      deleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }

    dynamicText.style.background = 'linear-gradient(40deg, #8c1df3 20%, #f714d1 30%, #9d01cd 70%, #621aaf 80%)';
    dynamicText.style.webkitBackgroundClip = 'text';
    dynamicText.style.webkitTextFillColor = 'transparent';
    dynamicText.style.color = '#007BFF';

    const speed = deleting ? 50 : 100;
    setTimeout(typeEffect, speed);
  }

  typeEffect();
});


// Cambiar el tema
const toggle = document.getElementById('theme-toggle');
const body = document.body;
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  body.classList.add(currentTheme);
  toggle.checked = currentTheme === 'dark-theme';
}
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    body.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('theme', 'light-theme');
  }
});

//Scroll hacia arriba
$(document).ready(function() {
  const fadeDuration = 500;
  const scrollDuration = 1200; 
  const scrollOffset = 100;

  $(window).scroll(function() {
    if ($(this).scrollTop() > scrollOffset) {
      $('#scrollToTop').fadeIn(fadeDuration);
    } else {
      $('#scrollToTop').fadeOut(fadeDuration);
    }
  });

  $('#scrollToTop').click(function(e) {
    e.preventDefault();
    $('html, body').stop(true, true).animate(
      { scrollTop: 0 }, 
      {
        duration: scrollDuration,
        easing: 'linear'
      }
    );
  });
});




