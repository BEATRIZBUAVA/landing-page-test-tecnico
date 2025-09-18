function toggleMenu() {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('active');
}

// Fechar menu ao clicar em um link
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const navMenu = document.querySelector('.nav-menu');
      navMenu.classList.remove('active');
    });
  });

  // Efeito Parallax apenas no desktop
  window.addEventListener('scroll', () => {
    if (window.innerWidth >= 768) {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero');
      hero.style.backgroundPosition = `${-scrolled * 0.2}px center`;
    }
  });

  // Reset posição do background no mobile
  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      const hero = document.querySelector('.hero');
      hero.style.backgroundPosition = 'center';
    }
  });
});

const handleSubmit = (e) => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !phone) {
    return;
  }

  if (!emailRegex.test(email)) {
    alert('Por favor, insira um e-mail válido.');
    return;
  }

  alert(`Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}`);
}