// Toggle de tema
const themeToggle = document.getElementById("themeToggle")
const html = document.documentElement

// Verifica se há tema salvo no localStorage
const currentTheme = localStorage.getItem("theme") || "light"
html.setAttribute("data-theme", currentTheme)

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  html.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
})

// Menu mobile
const mobileMenuToggle = document.getElementById("mobileMenuToggle")
const navMenu = document.querySelector(".nav-menu")

mobileMenuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  mobileMenuToggle.classList.toggle("active")
})

// Fecha o menu ao clicar em um link
const navLinks = document.querySelectorAll(".nav-menu a")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    mobileMenuToggle.classList.remove("active")
  })
})

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Animação ao scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Aplica animação aos elementos
document.querySelectorAll(".skill-card, .project-card, .timeline-item, .stat-card").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(20px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// Header com fundo ao scroll
const header = document.querySelector(".header")
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    header.style.boxShadow = "0 2px 10px var(--shadow)"
  } else {
    header.style.boxShadow = "none"
  }

  lastScroll = currentScroll
})

// Formulário de contato
const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = new FormData(contactForm)
  const data = Object.fromEntries(formData)

  console.log("[v0] Dados do formulário:", data)

  fetch('https://formspree.io/f/mgvndqaj', {
    method: 'POST',
    body: formData
})
  // Aqui você pode adicionar a lógica para enviar o formulário
  // Por exemplo, usando fetch para enviar para um servidor

  alert("Mensagem enviada com sucesso! Entrarei em contato em breve.")
  contactForm.reset()
})

// Efeito de digitação no título (opcional)
const heroTitle = document.querySelector(".hero-title")
if (heroTitle) {
  const text = heroTitle.innerHTML
  heroTitle.innerHTML = ""
  let i = 0

  const typeWriter = () => {
    if (i < text.length) {
      heroTitle.innerHTML += text.charAt(i)
      i++
      setTimeout(typeWriter, 50)
    }
  }

  // Inicia o efeito após um pequeno delay
  setTimeout(typeWriter, 500)
}
