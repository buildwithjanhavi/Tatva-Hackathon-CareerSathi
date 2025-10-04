

// ========== TYPEWRITER EFFECT (Infinite Loop) ==========
const text = "Empowering Youth Through Internships";
let i = 0;
let typewriterEl = document.getElementById("typewriter");

function typeWriter() {
  if (i < text.length) {
    typewriterEl.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100); // typing speed
  } else {
    // after finishing, reset after 2 sec
    setTimeout(() => {
      typewriterEl.innerHTML = "";
      i = 0;
      typeWriter();
    }, 2000);
  }
}
window.onload = typeWriter;


// ========== SCROLL ANIMATION (Works Up + Down) ==========
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");  // fade-in
    } else {
      entry.target.classList.remove("show"); // fade-out when leaving
    }
  });
}, { threshold: 0.2 }); // triggers when 20% visible

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));


// ========== PROGRESS BAR ==========
window.onscroll = () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
};


// ========== RANDOM CHANGING NUMBERS (Our Impact) ==========
const counters = document.querySelectorAll('.counter');

function randomizeCounters() {
  counters.forEach(counter => {
    let min = +counter.getAttribute("data-min") || 100;   // minimum value
    let max = +counter.getAttribute("data-max") || 99999; // maximum value
    let randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    counter.innerText = randomValue;
  });
}
// change numbers every 1 second
setInterval(randomizeCounters, 1000);

