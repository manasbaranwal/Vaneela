const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealEls.forEach((el) => observer.observe(el));

const brokenAnchors = document.querySelectorAll('a[href="#"]');
brokenAnchors.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const anchorTarget = link.getAttribute("data-target");
    if (anchorTarget) {
      const targetEl = document.getElementById(anchorTarget);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
