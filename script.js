document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro-elegant");
  const audio = document.getElementById("introSound");
  const countdown = document.getElementById("countdown");

  // Mainkan audio intro
  if (audio) {
    audio.play().catch(() => {
      // Autoplay mungkin block oleh browser – tak apa
    });
  }

  // Mulakan countdown
  let timeLeft = 20;
  const countdownInterval = setInterval(() => {
    timeLeft--;
    if (countdown) countdown.textContent = timeLeft;
    if (timeLeft <= 0) clearInterval(countdownInterval);
  }, 1000);

  // Skip bila user tap mana-mana
  intro.addEventListener("click", () => {
    clearInterval(countdownInterval);
    intro.style.opacity = "0";
    setTimeout(() => {
      intro.style.display = "none";
    }, 500);
  });

  // Auto fade-out selepas 20 saat
  setTimeout(() => {
    intro.style.opacity = "0";
    setTimeout(() => {
      intro.style.display = "none";
    }, 500);
  }, 20000);
});


document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro-elegant");
  const audio = document.getElementById("introSound");
  const countdown = document.getElementById("countdown");

  // Mainkan audio intro
  if (audio) {
    audio.play().catch(() => {
      // Autoplay mungkin block oleh browser – tak apa
    });
  }

  // Mulakan countdown
  let timeLeft = 20;
  const countdownInterval = setInterval(() => {
    timeLeft--;
    if (countdown) countdown.textContent = timeLeft;
    if (timeLeft <= 0) clearInterval(countdownInterval);
  }, 1000);

  // Skip bila user tap mana-mana
  intro.addEventListener("click", () => {
    clearInterval(countdownInterval);
    intro.style.opacity = "0";
    setTimeout(() => {
      intro.style.display = "none";
    }, 500);
  });

  // Auto fade-out selepas 20 saat
  setTimeout(() => {
    intro.style.opacity = "0";
    setTimeout(() => {
      intro.style.display = "none";
    }, 500);
  }, 20000);
});
