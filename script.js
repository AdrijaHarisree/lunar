// Dark / Light Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');

// Check saved preference or system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeToggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', targetTheme);
  localStorage.setItem('theme', targetTheme);
  themeToggleBtn.textContent = targetTheme === 'dark' ? '☀️' : '🌙';
});

// Interactive Like Counter
const counterBtn = document.getElementById('counter-btn');
const likeCount = document.getElementById('like-count');
let count = 0;

counterBtn.addEventListener('click', () => {
  count++;
  likeCount.textContent = count;
  
  // Quick bounce animation
  counterBtn.style.transform = 'scale(1.1)';
  setTimeout(() => {
    counterBtn.style.transform = 'scale(1)';
  }, 150);
});

console.log("Welcome to your simple website! Everything is running smoothly.");

