// Mobile Menu Toggle
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Scroll Animation
const skills = document.querySelectorAll(".skill");

function revealSkills() {
  const trigger = window.innerHeight * 0.8;

  skills.forEach(skill => {
    const top = skill.getBoundingClientRect().top;

    if (top < trigger) {
      skill.classList.add("show");

      const bar = skill.querySelector(".progress div");
      const width = bar.getAttribute("data-width");
      if (width) {
        bar.style.width = width;
      }
    }
  });
}

window.addEventListener("scroll", revealSkills);