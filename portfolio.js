document.addEventListener("DOMContentLoaded", function() {
    const spans = document.querySelectorAll(".container span");
  
    spans.forEach(span => {
      span.addEventListener("animationend", () => {
        span.style.animation = "none"; // Зупиняємо анімацію
      });
    });
  });
  