document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro-elegant");
  const audio = document.getElementById("introSound");
  const countdown = document.getElementById("countdown");

  let timeLeft = 20;
  let hasInteracted = false;

  // Countdown
  const countdownInterval = setInterval(() => {
    timeLeft--;
    if (countdown) countdown.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      endIntro();
    }
  }, 1000);

  // Trigger on first user tap
  intro.addEventListener("click", () => {
    if (!hasInteracted) {
      hasInteracted = true;
      // Play audio only after user click (bypass browser block)
      audio.play().catch(err => {
        console.warn("Audio failed:", err);
      });
    }

    endIntro();
  });

  // Auto skip after 20 seconds
  setTimeout(() => {
    endIntro();
  }, 20000);

  function endIntro() {
    intro.style.opacity = "0";
    setTimeout(() => {
      intro.style.display = "none";
    }, 500);
    clearInterval(countdownInterval);
  }
});
