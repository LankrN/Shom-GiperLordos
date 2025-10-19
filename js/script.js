// Прелоадер
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

// Бургер меню
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

// Sticky Header
window.addEventListener("scroll", () => {
  document.getElementById("header").classList.toggle("scrolled", window.scrollY > 50);
});

// Прогресс бар
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const width = (scrollTop / docHeight) * 100;
  document.getElementById("progressBar").style.width = width + "%";
});

// Печатающаяся машинка
const text = "🎉 Добро пожаловать в GameStore!";
const typedEl = document.getElementById("typed");
let i = 0;
function typing(){
  if(i < text.length){
    typedEl.textContent += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
typing();

// Анимация при скролле
const scrollAnim = document.querySelectorAll(".scroll-anim");
window.addEventListener("scroll", () => {
  scrollAnim.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) el.classList.add("show");
  });
});

// Аккордеон
document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => header.parentElement.classList.toggle("active"));
});

// Счетчик
const counters = document.querySelectorAll(".counter");
let started = false;
function startCounter(){
  counters.forEach(counter => {
    const update = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const speed = 50;
      const increment = Math.ceil(target / speed);
      if(count < target){
        counter.innerText = count + increment;
        setTimeout(update, 20);
      }else counter.innerText = target;
    };
    update();
  });
}
window.addEventListener("scroll", () => {
  const stats = document.getElementById("stats");
  if(!started && stats.getBoundingClientRect().top < window.innerHeight){
    startCounter();
    started = true;
  }
});

// Shake в форме
const form = document.getElementById("contactForm");
form.addEventListener("submit", e => {
  e.preventDefault();
  let valid = true;
  form.querySelectorAll("input[required]").forEach(input => {
    if(!input.value){
      input.classList.add("invalid");
      valid = false;
      setTimeout(()=>input.classList.remove("invalid"),500);
    }
  });
  if(valid) alert("✅ Сообщение отправлено!");
});


// Слайдер отзывов (прокрутка колесом)
const reviewsSlider = document.querySelector('.reviews-slider');
reviewsSlider.addEventListener('wheel', e => {
    e.preventDefault();
    reviewsSlider.scrollLeft += e.deltaY;
});

// Подписка на новости
const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input').value;
    if (email) {
        alert(`✅ Спасибо! ${email} добавлен в рассылку.`);
        newsletterForm.reset();
    }
});
