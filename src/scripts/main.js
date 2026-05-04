
// Update footer with current year and month
(function updateFooter() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.toLocaleString('default', { month: 'long' });
  const footerYear = document.getElementById('footer-year');
  if(footerYear) {
    footerYear.textContent = `${month} ${year}`;
  }
})();

// Apply scroll snap fallback for iOS and small touch devices (e.g., Chrome mobile)
// to prevent snap-lock behavior on tall sections.
(function applySnapFallback() {
  const ua = navigator.userAgent || '';
  const isiPhoneLike = /iPhone|iPad|iPod/i.test(ua);
  const isIPadDesktopUA = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

  const isSmallTouchViewport = window.matchMedia('(max-width: 900px)').matches &&
    window.matchMedia('(hover: none) and (pointer: coarse)').matches;

  const shouldDisableSnap = isiPhoneLike || isIPadDesktopUA || isSmallTouchViewport;
  document.documentElement.classList.toggle('ios-snap-off', shouldDisableSnap);

  window.addEventListener('resize', () => {
    const resizedSmallTouchViewport = window.matchMedia('(max-width: 900px)').matches &&
      window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    const resizedShouldDisableSnap = isiPhoneLike || isIPadDesktopUA || resizedSmallTouchViewport;
    document.documentElement.classList.toggle('ios-snap-off', resizedShouldDisableSnap);
  });
})();

// Light/Dark mode toggle
function setTheme(theme){
  const themeIcon = document.getElementById('theme-icon');
  const root = document.documentElement;
  const next = (theme === 'light') ? 'light' : 'dark';
  if(next === 'dark'){
    root.removeAttribute('data-theme');
    if(themeIcon) themeIcon.textContent = '☾';
  } else {
    root.setAttribute('data-theme', 'light');
    if(themeIcon) themeIcon.textContent = '☀';
  }
  try { localStorage.setItem('theme', next); } catch(e) {}
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
}

// Set initial icon based on current theme
window.addEventListener('DOMContentLoaded', () => {
  bindPrimaryEmailLinks();
  let saved = 'dark';
  try { saved = localStorage.getItem('theme') || 'dark'; } catch(e) {}
  setTheme(saved);
  // restore nemesis state
  let aur = 'off', nem = 'off';
  try { aur = localStorage.getItem('aurora') || 'off'; } catch(e) {}
  try { nem = localStorage.getItem('nemesis') || 'off'; } catch(e) {}
  if(aur === 'on') { setAurora(true); setNemesis(false); }
  else if(nem === 'on') { setNemesis(true); setAurora(false); }
  else { setAurora(false); setNemesis(false); }
});

// Explicit Nemesis Mode toggle using the bolt button
function setNemesis(on){
  const root = document.documentElement;
  const btn = document.getElementById('nemesis-toggle');
  if(on){
    // Nemesis and Aurora are mutually exclusive
    setAurora(false);
    root.setAttribute('data-nemesis','on');
    if(btn) { btn.classList.add('active'); btn.setAttribute('aria-pressed','true'); }
    try { localStorage.setItem('nemesis','on'); } catch(e) {}
  } else {
    root.removeAttribute('data-nemesis');
    if(btn) { btn.classList.remove('active'); btn.setAttribute('aria-pressed','false'); }
    try { localStorage.setItem('nemesis','off'); } catch(e) {}
  }
}

function toggleNemesisMode(){
  const on = document.documentElement.getAttribute('data-nemesis') === 'on';
  setNemesis(!on);
}

function setAurora(on){
  const root = document.documentElement;
  const btn = document.getElementById('aurora-toggle');
  if(on){
    // Aurora and Nemesis are mutually exclusive
    setNemesis(false);
    root.setAttribute('data-aurora','on');
    if(btn) { btn.classList.add('active'); btn.setAttribute('aria-pressed','true'); }
    try { localStorage.setItem('aurora','on'); } catch(e) {}
  } else {
    root.removeAttribute('data-aurora');
    if(btn) { btn.classList.remove('active'); btn.setAttribute('aria-pressed','false'); }
    try { localStorage.setItem('aurora','off'); } catch(e) {}
  }
}

function toggleAuroraMode(){
  const on = document.documentElement.getAttribute('data-aurora') === 'on';
  setAurora(!on);
}

function getPrimaryEmail(){
  return `admin${String.fromCharCode(64)}nemesisnet.co.za`;
}

function bindPrimaryEmailLinks(){
  const email = getPrimaryEmail();
  document.querySelectorAll('[data-email-link="primary"]').forEach((link) => {
    link.setAttribute('href', `mailto:${email}`);
  });
}

// Keep CSS --nav-height in sync with actual navbar height
let navHeightRaf = 0;
let navObserver;

function setNavHeightVar(){
  const nav = document.getElementById('navbar');
  if(!nav) return;
  const h = Math.round(nav.getBoundingClientRect().height);
  document.documentElement.style.setProperty('--nav-height', h + 'px');
}

function queueNavHeightUpdate(){
  if(navHeightRaf) return;
  navHeightRaf = window.requestAnimationFrame(() => {
    navHeightRaf = 0;
    setNavHeightVar();
  });
}

window.addEventListener('DOMContentLoaded', () => {
  queueNavHeightUpdate();
  const nav = document.getElementById('navbar');
  if(nav && 'ResizeObserver' in window){
    navObserver = new ResizeObserver(() => queueNavHeightUpdate());
    navObserver.observe(nav);
  }
});
window.addEventListener('resize', queueNavHeightUpdate, { passive: true });
window.addEventListener('orientationchange', queueNavHeightUpdate, { passive: true });

// Mobile nav toggle
// Mobile nav control helpers: open, close, toggle and overlay handling
function openNav(){
  const nav = document.getElementById('navbar');
  const btn = document.getElementById('nav-toggle');
  if(!nav) return;
  nav.classList.add('open');
  if(btn) btn.setAttribute('aria-expanded','true');
  const overlay = document.getElementById('nav-overlay');
  if(overlay){ overlay.style.display = 'block'; setTimeout(()=> overlay.classList.add('visible'),10); }
}

function closeNav(){
  const nav = document.getElementById('navbar');
  const btn = document.getElementById('nav-toggle');
  if(!nav) return;
  nav.classList.remove('open');
  if(btn) btn.setAttribute('aria-expanded','false');
  const overlay = document.getElementById('nav-overlay');
  if(overlay){ overlay.classList.remove('visible'); setTimeout(()=> overlay.style.display = 'none', 220); }
}

function toggleNav(){
  const nav = document.getElementById('navbar');
  if(!nav) return;
  if(nav.classList.contains('open')) closeNav(); else openNav();
}

// Close mobile menu when a nav link is clicked, and ensure overlay hides too
window.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('navbar');
  const btn = document.getElementById('nav-toggle');
  const overlay = document.getElementById('nav-overlay');

  // Close when clicking any link inside the mobile nav
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      if(nav && nav.classList.contains('open')){
        closeNav();
      }
    });
  });

  // Close when clicking the logo (nav-brand) on mobile as well
  const navLogo = document.querySelector('.nav-logo');
  if(navLogo){
    navLogo.addEventListener('click', (e) => {
      if(nav && nav.classList.contains('open')){
        // allow default navigation but ensure menu collapses
        closeNav();
      }
    });
  }

  // Clicking the overlay closes the mobile nav
  if(overlay){
    overlay.addEventListener('click', (e)=>{ e.preventDefault(); closeNav(); });
  }
});

// Typing animation
const typingElement = document.getElementById('typing');
const words = ["Platform Engineering", "AI Systems & Infrastructure", "Automation & Agent Integrations", "Full-Stack Product Development"];
let wordIndex = 0;
let charIndex = 0;
let typingForward = true;
// base speed (ms) — original was 70ms; slow down by ~10%
const baseTypingSpeed = 70;
const typingSpeed = Math.max(20, Math.round(baseTypingSpeed * 1.10)); // ~77ms
const pauseAfterComplete = 1000; // 1s pause after finishing a word
const pauseBetweenWords = 250; // short pause before next word cycle

function type() {
  const currentWord = words[wordIndex];

  if (typingForward) {
    // add one character
    typingElement.textContent = currentWord.slice(0, charIndex + 1);
    charIndex++;

    // when word is complete, pause for a moment before deleting
    if (charIndex === currentWord.length) {
      typingForward = false;
      setTimeout(type, pauseAfterComplete);
      return;
    }
  } else {
    // remove one character
    typingElement.textContent = currentWord.slice(0, charIndex - 1);
    charIndex--;

    // when fully erased, advance to next word
    if (charIndex === 0) {
      typingForward = true;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, pauseBetweenWords);
      return;
    }
  }

  // schedule next tick
  setTimeout(type, typingSpeed);
}

// Keep headline stable on smaller screens to reduce layout churn and improve paint timing.
if (window.matchMedia('(max-width: 768px)').matches) {
  typingElement.textContent = words[0];
} else {
  type();
}

// Fade-in scroll animations using Intersection Observer
const sections = document.querySelectorAll('section');
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{threshold:0.01});

sections.forEach(section => observer.observe(section));
cards.forEach(card => observer.observe(card));

// Navigation scroll behavior and active state
(function() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a[href*="#"]');
  const allSections = document.querySelectorAll('header, section[id]');
  
  // Add scrolled class to navbar on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    let current = '';
    allSections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      const hash = (new URL(link.href, window.location.origin)).hash;
      link.classList.remove('active');
      if (hash === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
})();

// Chevron behavior: persistent, toggles direction on last section, keyboard accessible
(function(){
  const chevron = document.querySelector('.chevron');
  if(!chevron) return;
  const allSections = Array.from(document.querySelectorAll('header, section'));
  // track the currently-centered section (use threshold 0.6)
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if(en.isIntersecting){
        // find index of this section
        const idx = allSections.indexOf(en.target);
        const lastIdx = allSections.length - 1;
        if(idx === lastIdx){
          chevron.classList.add('up');
          chevron.setAttribute('aria-label','Scroll to top');
        } else {
          chevron.classList.remove('up');
          chevron.setAttribute('aria-label','Scroll to next section');
        }
      }
    });
  }, { threshold: 0.6 });

  allSections.forEach(s => sectionObserver.observe(s));

  function scrollToNext(){
    // find which section is mostly visible
    const visibleIndex = allSections.findIndex(s => {
      const rect = s.getBoundingClientRect();
      const mid = window.innerHeight/2;
      return rect.top <= mid && rect.bottom >= mid;
    });
    if(visibleIndex === -1){
      window.scrollTo({top:0, behavior:'smooth'});
      return;
    }
    const isLast = visibleIndex === allSections.length - 1;
    if(isLast){
      // scroll to top/header
      allSections[0].scrollIntoView({behavior:'smooth'});
    } else {
      allSections[visibleIndex+1].scrollIntoView({behavior:'smooth'});
    }
  }

  chevron.addEventListener('click', (e)=>{ e.preventDefault(); scrollToNext(); });
  chevron.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scrollToNext(); } });
  chevron.setAttribute('role','button');
  chevron.setAttribute('tabindex','0');
})();

// Contact form handler: create a mailto: link from fields and open mail client
function handleContact(e){
  e.preventDefault();
  const name = document.getElementById('cname').value.trim();
  const email = document.getElementById('cemail').value.trim();
  const message = document.getElementById('cmessage').value.trim();
  const subject = encodeURIComponent(`Website contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0A${message}`);
  const mailto = `mailto:${getPrimaryEmail()}?subject=${subject}&body=${body}`;
  // open mail client
  window.location.href = mailto;
}
