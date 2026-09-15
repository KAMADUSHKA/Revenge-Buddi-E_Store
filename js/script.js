// ==========================================
// CONFIGURATION: YOUR WHATSAPP NUMBER HERE
// Format: Country code without '+' or '00'
// Example for Sri Lanka (0771234567): "94771234567"
// ==========================================
const WHATSAPP_NUMBER = "94762588260"; 

document.addEventListener('DOMContentLoaded', () => {
  const buyButtons = document.querySelectorAll('.buy-btn');
  const modalProductTitle = document.getElementById('modalProductTitle');
  const modalSelectedName = document.getElementById('modalSelectedName');
  const modalSelectedPrice = document.getElementById('modalSelectedPrice');
  const modalPreviewImg = document.getElementById('modalPreviewImg');
  const selectedProductName = document.getElementById('selectedProductName');
  const selectedProductPrice = document.getElementById('selectedProductPrice');
  const orderForm = document.getElementById('orderForm');

  const qtyInput = document.getElementById('qtyInput');
  const qtyMinus = document.getElementById('qtyMinus');
  const qtyPlus = document.getElementById('qtyPlus');

  // Quantity controls
  qtyMinus.addEventListener('click', () => {
    let current = parseInt(qtyInput.value) || 1;
    if (current > 1) {
      qtyInput.value = current - 1;
    }
  });

  qtyPlus.addEventListener('click', () => {
    let current = parseInt(qtyInput.value) || 1;
    if (current < 10) {
      qtyInput.value = current + 1;
    }
  });

  // When clicking 'Buy / Select' button
  buyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productName = button.getAttribute('data-product');
      const productPrice = button.getAttribute('data-price');
      const productImg = button.getAttribute('data-img');

      modalProductTitle.innerText = `ORDER: ${productName}`;
      modalSelectedName.innerText = productName;
      modalSelectedPrice.innerText = productPrice;
      modalPreviewImg.src = productImg;

      selectedProductName.value = productName;
      selectedProductPrice.value = productPrice;
      qtyInput.value = 1;
    });
  });

  // Form submission handler -> WhatsApp direct redirect
  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const product = selectedProductName.value;
    const price = selectedProductPrice.value;
    const qty = qtyInput.value;
    const size = document.querySelector('input[name="sizeOption"]:checked').value;
    const color = document.querySelector('input[name="colorOption"]:checked').value;
    const name = document.getElementById('custName').value.trim();
    const address = document.getElementById('custAddress').value.trim();

    if (!name || !address) {
      alert('Please fill out your name and address.');
      return;
    }

    // Build the formatted order text
    const message = 
`⚡ *NEW INCARNAGE APPAREL ORDER* ⚡
-------------------------------------
👕 *Item:* ${product}
💵 *Unit Price:* ${price}
🔢 *Quantity:* ${qty}
🎨 *Color:* ${color}
📏 *Size:* ${size}
-------------------------------------
👤 *Customer Name:* ${name}
📍 *Delivery Details:*
${address}
-------------------------------------
_Sent via Official Web Store_`;

    // Encode for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  });
});
