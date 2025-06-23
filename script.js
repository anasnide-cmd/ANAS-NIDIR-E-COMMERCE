document.addEventListener("DOMContentLoaded", () => {
  
  const intro = document.getElementById("intro-elegant");
  const audio = document.getElementById("introSound");
  const countdown = document.getElementById("countdown");
  const navMenu = document.querySelector(".main-nav");
  const toggleBtn = document.querySelector(".menu-toggle");
  
  let timeLeft = 20;
  let hasInteracted = false;
  
  // ========== 1. Cek jika intro dah ditonton ==========
  const introSeen = localStorage.getItem("introSeen");
  if (intro && introSeen === "true") {
    intro.remove(); // skip terus kalau dah pernah tengok
  } else if (intro) {
    // ========== 2. Countdown Timer ==========
    const countdownInterval = setInterval(() => {
      timeLeft--;
      if (countdown) countdown.textContent = timeLeft;
      if (timeLeft <= 0) {
        endIntro();
      }
    }, 1000);
    
    // ========== 3. Auto skip selepas 20 saat ==========
    const autoSkip = setTimeout(() => {
      endIntro();
    }, 20000);
    
    // ========== 4. User click: play audio & skip ==========
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
    
    // ========== 5. Fungsi untuk tamatkan intro ==========
    function endIntro() {
      if (intro) {
        intro.style.opacity = "0";
        setTimeout(() => {
          intro.style.display = "none";
        }, 500);
        clearInterval(countdownInterval);
        clearTimeout(autoSkip);
        localStorage.setItem("introSeen", "true"); // simpan supaya tak ulang
      }
    }
  }
  
  // ========== 6. Toggle hamburger menu ==========
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
    
    // Tutup menu jika klik luar
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
});

// Force reset introSeen every time (development mode)
localStorage.removeItem("introSeen");

// ===== Auto-load products from products.json =====
fetch('products.json')
  .then(res => res.json())
  .then(products => {
    const grid = document.getElementById("productGrid");
    if (!grid) return;

    grid.innerHTML = ""; // Clear existing content

    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";

card.innerHTML = `
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
  
  const modal = document.getElementById("contactModal");
const openBtnNav = document.getElementById("openModalNav");
const openBtnFooter = document.getElementById("openModalFooter");
const closeBtn = document.querySelector(".close-button");

if (openBtnNav) {
  openBtnNav.onclick = () => modal.style.display = "block";
}
if (openBtnFooter) {
  openBtnFooter.onclick = () => modal.style.display = "block";
}
if (closeBtn) {
  closeBtn.onclick = () => modal.style.display = "none";
}
