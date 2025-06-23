# MR ANAS NIDIR E-COMMERCE 🛒

**Premium Digital Products Website** built using HTML, CSS, and JavaScript.  
This website showcases a modern and responsive design with an animated splash screen, dynamic product loading from JSON, and a custom product detail system using URL parameters.

---

## 🚀 Features

- ⚡ Epic animated hero section
- 🎬 Splash screen intro with audio + countdown
- 🛍 Products loaded dynamically from `products.json`
- 🔍 View details using `product.html?id=product-id`
- 📱 Fully responsive layout
- 🎨 Dark mode aesthetic with custom CSS variables
- 🔗 External purchase integration (WhatsApp, TikTok Shop, etc)

---

## 📁 Project Structure

. ├── index.html                # Main homepage ├── product.html              # Dynamic product detail page ├── products.json             # JSON data for all products ├── style.css                 # Custom styling and animations ├── script.js                 # Main logic (splash, navbar, product load) ├── script-product.js         # Logic for loading single product ├── assets/ │   ├── logo.png              # Logo image │   ├── product1.jpg          # Product image │   └── intro-sound.mp3       # Intro splash sound └── pages/ └── contact.html          # Optional pages (contact, terms, etc.)

---

## 🧪 How to Run Locally

> **⚠️ Warning:** `fetch()` won't work directly with `file://` — use a local server.

### 🔧 Option 1: With VS Code + Live Server

1. Open the folder in VS Code
2. Right-click on `index.html` → “**Open with Live Server**”

### 🔧 Option 2: Using Terminal

```bash
npx serve

Then open: http://localhost:3000


---

✨ Customization Tips

Feature	How to Change

Products	Edit products.json
Product page	Use id in URL like product.html?id=xxx
Hero text/logo	Edit index.html → .hero-section
Intro audio	Replace assets/intro-sound.mp3
Buy button link	Customize in script-product.js



---

🔗 Live Demo (Optional)

> You can host this site using GitHub Pages, Netlify, or Vercel.



Example:
https://yourusername.github.io/mr-anas-nidir-ecommerce/


---

👨‍💻 Author

Made with ❤️ by Mr Anas Nidir
🇲🇾 Malaysia | 📧 hello@anasnidir.com
TikTok: @anasnide


---

📄 License

This project is licensed under the MIT License – feel free to use & modify for personal or commercial projects.

---

Kalau nak saya terus zipkan semua fail **beserta README** atau nak versi GitHub Pages live, just bagi arahan je. Saya boleh terus setup repo structure dan push-ready 🛠️✨
