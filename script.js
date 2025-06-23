 document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro-elegant");
  const audio = document.getElementById("introSound");
  const countdown = document.getElementById("countdown");
  const navMenu = document.querySelector(".main-nav");
  const toggleBtn = document.querySelector(".menu-toggle");
  const modal = document.getElementById("contactModal");
  const openBtnNav = document.getElementById("openModalNav");
  const openBtnFooter = document.getElementById("openModalFooter");
  const closeBtn = document.querySelector(".close-button");

  let timeLeft = 20;
  let hasInteracted = false;

  // ======= INTRO SPLASH =========
  const introSeen = localStorage.getItem("introSeen");
  if (intro && introSeen === "true") {
    intro.remove();
  } else if (intro) {
    const countdownInterval = setInterval(() => {
      timeLeft--;
      if (countdown) countdown.textContent = timeLeft;
      if (timeLeft <= 0) endIntro();
    }, 1000);

    const autoSkip = setTimeout(() => endIntro(), 20000);

    intro.addEventListener("click", () => {
      if (!hasInteracted) {
        hasInteracted = true;
        if (audio) {
          audio.play().catch(err => {
            console.warn("Audio play blocked:", err);
          });
        }
      }
      endIntro();
    });

    function endIntro() {
      if (intro) {
        intro.style.opacity = "0";
        setTimeout(() => {
          intro.style.display = "none";
        }, 500);
        clearInterval(countdownInterval);
        clearTimeout(autoSkip);
        localStorage.setItem("introSeen", "true");
      }
    }
  }

  // ======= TOGGLE MENU =========
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (
        navMenu.classList.contains("active") &&
        !navMenu.contains(e.target) &&
        !toggleBtn.contains(e.target)
      ) {
        navMenu.classList.remove("active");
      }
    });
  }

  // ======= MODAL CONTACT FORM ========
  if (openBtnNav) openBtnNav.onclick = () => (modal.style.display = "block");
  if (openBtnFooter) openBtnFooter.onclick = () => (modal.style.display = "block");
  if (closeBtn) closeBtn.onclick = () => (modal.style.display = "none");

  // ======= LOAD PRODUCTS =============
  fetch("products.json")
    .then(res => res.json())
    .then(products => {
      const grid = document.getElementById("productGrid");
      if (!grid) return;

      grid.innerHTML = "";

      products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        let badgeHTML = "";
        if (product.badge === "New") {
          badgeHTML = `<span class="product-badge badge-new">New</span>`;
        } else if (product.badge === "BestSeller") {
          badgeHTML = `<span class="product-badge badge-bestseller">Best Seller</span>`;
        } else if (product.badge === "Limited") {
          badgeHTML = `<span class="product-badge badge-limited">Limited</span>`;
        }

        card.innerHTML = `
          ${badgeHTML}
          <img src="${product.image}" alt="${product.title}" />
          <h3>${product.title}</h3>
          <p>${product.description}</p>
          <div class="product-price">${product.price}</div>
          <a href="product.html?id=${product.id}" class="btn btn-secondary">View Details</a>
        `;

        grid.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Failed to load products:", err);
    });

  // ===== Development Only: Reset Intro =====
  localStorage.removeItem("introSeen");
});


document.querySelector('.hero-btn').addEventListener('click', () => {
  gtag('event', 'click_explore', {
    'event_category': 'Button',
    'event_label': 'Explore Products Hero'
  });
});
