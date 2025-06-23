// Dapatkan ID dari URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

fetch('products.json')
  .then(res => res.json())
  .then(products => {
    const product = products.find(p => p.id === productId);
    const container = document.getElementById("product-detail");

    if (!product) {
      container.innerHTML = "<p>Product not found.</p>";
      return;
    }

    container.innerHTML = `
      <h1>${product.title}</h1>
      <img src="${product.image}" alt="${product.title}" style="max-width:300px;" />
      <p>${product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <a href="https://wa.me/60105112907?text=Hi%2C%20I%20want%20to%20buy%20${encodeURIComponent(product.title)}" 
         class="btn btn-primary" target="_blank">Buy Now</a>
    `;
  })
  .catch(err => {
    console.error("Failed to load product:", err);
  });
