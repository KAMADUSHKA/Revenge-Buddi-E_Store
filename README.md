# Incarnage-Style Streetwear Store (Bootstrap 5)

A clean, modern, dark-themed streetwear apparel website inspired by Incarnage. Built using pure HTML5, CSS3, JavaScript, and Bootstrap 5 without any complex build tools.

## Folder Structure
```text
streetwear-store/
├── index.html        # Main landing page & modal checkout
├── css/
│   └── style.css     # Custom dark styling, hover animations & variables
├── js/
│   └── script.js     # Modal trigger, quantity selector & WhatsApp dispatch
└── README.md         # Setup and customization guide
```

## How to Set Up & Customize

1. **Set your WhatsApp Number:**
   - Open `js/script.js`
   - Replace `"947XXXXXXXX"` with your actual WhatsApp phone number with country code (e.g. `"94771234567"` for Sri Lanka).

2. **Add / Edit T-Shirts:**
   - Open `index.html` and look for the `<div class="row g-4">` section inside `#shop`.
   - Duplicate any product card block.
   - Update `data-product`, `data-price`, and image URL in the button and image tags.

3. **Change Sizes & Colors:**
   - Modify the radio button values inside `<div class="modal fade" id="orderModal">` in `index.html`.

4. **Launch:**
   - Simply double click `index.html` to view in your browser, or upload the files directly to cPanel, GitHub Pages, Netlify, or Vercel.
