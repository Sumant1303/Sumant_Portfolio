/* =========================
CUSTOM CURSOR
========================= */

const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');

if(cursor && cursorDot){

  let mouseX = 0;
  let mouseY = 0;

  let posX = 0;
  let posY = 0;

  document.addEventListener('mousemove',(e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top  = mouseY + 'px';

  });

  function animateCursor(){

    posX += (mouseX - posX) * 0.12;
    posY += (mouseY - posY) * 0.12;

    cursor.style.left = posX + 'px';
    cursor.style.top  = posY + 'px';

    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  document.querySelectorAll('a,button,.skill-card,.proj-card,.c-card,.tl-card')
  .forEach((el)=>{

    el.addEventListener('mouseenter',()=>{

      cursor.style.width = '60px';
      cursor.style.height = '60px';

      cursor.style.borderColor =
      'rgba(56,189,248,.5)';
    });

    el.addEventListener('mouseleave',()=>{

      cursor.style.width = '38px';
      cursor.style.height = '38px';

      cursor.style.borderColor =
      'rgba(56,189,248,.7)';
    });

  });

}

/* =========================
NAVBAR SCROLL
========================= */

const nav = document.getElementById('nav');

window.addEventListener('scroll',()=>{

  if(window.scrollY > 40){
    nav.classList.add('scrolled');
  }
  else{
    nav.classList.remove('scrolled');
  }

});

/* =========================
MOBILE MENU
========================= */

const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

if(hamburger){

  hamburger.addEventListener('click',()=>{

    mobileMenu.classList.add('open');

  });

}

if(mobileClose){

  mobileClose.addEventListener('click',closeMobile);

}

function closeMobile(){

  mobileMenu.classList.remove('open');

}

/* =========================
TYPEWRITER
========================= */



/* =========================
REVEAL ANIMATION
========================= */

/* =========================
SCROLL REVEAL ANIMATION
========================= */

/* =========================
SCROLL REVEAL EFFECT
========================= */

/* =========================
SCROLL REVEAL EFFECT
========================= */

const revealElements = document.querySelectorAll(

'.about-card, .skill-card, .exp-card, .project-card, .contact-box'

);

const revealObserver = new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{

    if(entry.isIntersecting){

      entry.target.classList.add('visible');

    }

  });

},{
  threshold:0.1
});

revealElements.forEach((el)=>{

  el.classList.add('reveal');

  revealObserver.observe(el);

});
/* =========================
SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]')
.forEach((anchor)=>{

  anchor.addEventListener('click',(e)=>{

    e.preventDefault();

    const target =
    document.querySelector(
      anchor.getAttribute('href')
    );

    if(target){

      target.scrollIntoView({
        behavior:'smooth',
        block:'start'
      });

    }

  });

});

console.log(
'%c🤖 Sumant Portfolio Loaded',
'color:#38bdf8;font-size:16px;font-weight:bold;'
);


/* =========================
HERO TYPING EFFECT
========================= */

/* =========================
HERO TYPING EFFECT
========================= */

const typing = document.getElementById('typing');

const words = [

  'Building AI Agents',
  'AI Engineer',
  'Machine Learning Engineer',
  'Data Scientist',
  'Agentic AI',
  'NLP Engineer',
  'Data Engineer',
  'GenAI Developer',
  'RAG Architect'

];

let wordIndex = 0;
let charIndex2 = 0;

let deleting2 = false;

function typeEffect2(){

  if(!typing) return;

  const current = words[wordIndex];

  if(!deleting2){

    typing.textContent =
    current.substring(0,charIndex2++);

    if(charIndex2 > current.length){

      deleting2 = true;

      setTimeout(typeEffect2,1500);

      return;
    }

  }else{

    typing.textContent =
    current.substring(0,charIndex2--);

    if(charIndex2 < 0){

      deleting2 = false;

      wordIndex =
      (wordIndex + 1) % words.length;
    }

  }

  setTimeout(typeEffect2,deleting2 ? 40 : 90);
}

typeEffect2();
