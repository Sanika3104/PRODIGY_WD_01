// Change navbar background on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "#555";
    } else {
      navbar.style.backgroundColor = "#333";
    }
  });
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      document.querySelector(link.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  