// Smooth Scroll for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // تعويض عن ارتفاع الـ navbar
        behavior: 'smooth'
      });
    }

    // Close mobile menu after click
    document.getElementById('mobileMenu').classList.remove('active');
  });
});

// Toggle Mobile Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  const message = this.querySelector('textarea').value.trim();

  if (name.length < 3) {
    alert('يجب أن يكون الاسم مكونًا من 3 أحرف على الأقل.');
    return;
  }
  if (!email.includes('@') || !email.includes('.')) {
    alert('يرجى إدخال بريد إلكتروني صحيح.');
    return;
  }
  if (message.length < 10) {
    alert('الرسالة يجب أن تحتوي على 10 أحرف على الأقل.');
    return;
  }

  alert('تم إرسال رسالتك بنجاح!');
  this.reset();
});