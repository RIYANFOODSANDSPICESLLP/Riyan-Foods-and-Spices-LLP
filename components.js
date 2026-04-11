/* ── NAV HTML ── */
const NAV_HTML = `
<nav id="navbar">
  <a href="index.html" class="nav-logo">Riyan <span>Foods & Spices</span></a>
  <div class="nav-center">
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li class="nav-item">
        <a href="/products">Products ▾</a>
        <div class="nav-dropdown" style="min-width:220px">
          <a href="/products" style="color:var(--gold);font-size:.62rem;letter-spacing:.16em;padding-bottom:4px">— All Products —</a>
          <a href="product-cumin.html">Cumin Seeds</a>
          <a href="product-chilli.html">Red Chilli Powder</a>
          <a href="product-turmeric.html">Turmeric Powder</a>
          <a href="product-coriander.html">Coriander</a>
          <a href="product-fenugreek.html">Fenugreek Seeds</a>
          <a href="product-blackpepper.html">Black Pepper</a>
          <a href="product-moringa.html">Moringa Powder</a>
          <a href="product-rice.html">Basmati Rice</a>
          <a href="product-maize.html">Maize</a>
          <a href="product-chickpeas.html">Chickpeas</a>
          <a href="product-lentils.html">Yellow Lentils</a>
          <a href="product-moong.html">Green Moong</a>
          <a href="product-bajra.html">Bajra (Pearl Millet)</a>
          <a href="product-jowar.html">Jowar (Sorghum)</a>
          <a href="product-ragi.html">Ragi (Finger Millet)</a>
          <a href="product-onion-powder.html">Onion Powder</a>
          <a href="product-garlic-powder.html">Garlic Powder</a>
        </div>
      </li>
      <li><a href="about.html">About</a></li>
      <li><a href="why.html">Why Us</a></li>
      <li><a href="quality.html">Quality</a></li>
      <li><a href="markets.html">Markets</a></li>
      <li><a href="process.html">Process</a></li>
    </ul>
  </div>
  <div class="nav-right">
    <a href="contact.html" class="nav-cta btn">Get Quote</a>
    <div class="nav-hamburger" id="nav-burger">
      <span></span><span></span><span></span>
    </div>
  </div>
</nav>
<div id="mobile-menu">
  <div class="mobile-section-label">Navigate</div>
  <a href="index.html">Home</a>
  <a href="products.html">All Products</a>
  <div class="mobile-section-label">Spices</div>
  <a href="product-cumin.html">— Cumin Seeds</a>
  <a href="product-chilli.html">— Red Chilli Powder</a>
  <a href="product-turmeric.html">— Turmeric Powder</a>
  <a href="product-coriander.html">— Coriander</a>
  <a href="product-fenugreek.html">— Fenugreek Seeds</a>
  <a href="product-blackpepper.html">— Black Pepper</a>
  
  <div class="mobile-section-label">Grains & Pulses</div>

  <a href="product-rice.html">— Basmati Rice</a>
  <a href="product-maize.html">— Maize</a>
  <a href="product-chickpeas.html">— Chickpeas</a>
  <a href="product-lentils.html">— Yellow Lentils</a>
  <a href="product-moong.html">— Green Moong</a>
  <div class="mobile-section-label">Millets & Dehydrated</div>
  <a href="product-bajra.html">— Bajra (Pearl Millet)</a>
  <a href="product-jowar.html">— Jowar (Sorghum)</a>
  <a href="product-ragi.html">— Ragi (Finger Millet)</a>
  <a href="product-moringa.html">— Moringa Powder</a>
  <a href="product-onion-powder.html">— Onion Powder</a>
  <a href="product-garlic-powder.html">— Garlic Powder</a>
  <div class="mobile-section-label">Company</div>
  <a href="about.html">About Us</a>
  <a href="why.html">Why Choose Us</a>
  <a href="quality.html">Quality & Certifications</a>
  <a href="markets.html">Global Markets</a>
  <a href="process.html">Export Process</a>

  <a href="contact.html" class="mobile-cta">Request a Quote</a>
</div>
`;

const FOOTER_HTML = `
<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <a href="index.html" class="footer-logo">Riyan <span>Foods & Spices LLP</span></a>
      <p>An Indian agri-commodity exporter, working with global buyers across multiple markets. Registered with APEDA and the Spices Board, with a focus on quality and reliable export practices.</p>
      <div class="footer-certs">
        <span class="footer-cert">APEDA</span>
        <span class="footer-cert">FSSAI</span>
        <span class="footer-cert">Spices Board</span>
        <span class="footer-cert">IEC</span>
        <span class="footer-cert">GST</span>
      </div>
      <div class="social-links">
        <a class="social-link" href="https://www.linkedin.com/in/riyan-foods-and-spices-llp-074103383" title="LinkedIn">in</a>
        <a class="social-link" href="https://www.instagram.com/riyan_exim?igsh=OWx5M3U0eDVwcjMy&utm_source=qr" title="Instagram">ig</a>
        <a class="social-link" href="https://wa.me/917984794891" title="WhatsApp">WA</a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Products</h4>
      <ul>
        <li><a href="product-cumin.html">Cumin Seeds</a></li>
        <li><a href="product-chilli.html">Red Chilli Powder</a></li>
        <li><a href="product-turmeric.html">Turmeric Powder</a></li>
        <li><a href="product-moringa.html">Moringa Powder</a></li>
        <li><a href="product-coriander.html">Coriander</a></li>
        <li><a href="products.html">Full Catalogue →</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul>
        <li><a href="about.html">About Us</a></li>
        <li><a href="quality.html">Quality & Certs</a></li>
        <li><a href="markets.html">Global Markets</a></li>
        <li><a href="process.html">Export Process</a></li>

        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <ul>
        <li><a href="mailto:riyanfoodsandspice@gmail.com">riyanfoodsandspice@gmail.com</a></li>
        <li><a href="tel:+917984794891">+91 79847 94891</a></li>
        <li><a href="https://wa.me/917984794891" target="_blank">WhatsApp Business</a></li>
        <li><a href="#">Nirmal Nagar, Bhavnagar</a></li>
        <li><a href="#">Gujarat — 364001, India</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-copy">© 2025 Riyan Foods and Spices LLP. All rights reserved.</span>
    
    <a href="https://wa.me/917984794891" class="wa-cta" target="_blank">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.121 1.524 5.856L.057 23.093a.75.75 0 00.906.907l5.306-1.458A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.5A10.5 10.5 0 011.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5z"/></svg>
      WhatsApp Us
    </a>
  </div>
</footer>
<a href="https://wa.me/917984794891" class="wa-float" target="_blank" title="Chat on WhatsApp">
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.121 1.524 5.856L.057 23.093a.75.75 0 00.906.907l5.306-1.458A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.5A10.5 10.5 0 011.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5z"/></svg>
</a>
`;

/* Inject nav + footer */
(function() {
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;
})();
