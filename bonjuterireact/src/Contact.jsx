import React from 'react';
import './index.css'; // Opsiyonel: Stil için ayrı CSS dosyası

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">Bonjuteri</h1>
      <nav className="menu">
        <a href="#">Anasayfa</a>
        <a href="#">Tüm Ürünler</a>
        <a href="#">Hakkımızda</a>
        <a href="#">İletişim</a>
      </nav>
    </header>
  );
}

function Contact() {
  return (

    <div className="contact-page">
      <h2>Bize Ulaşın</h2>
      <p>Her türlü soru, öneri ve geri bildiriminiz için bizimle iletişime geçebilirsiniz.</p>

      <div className="contact-info">
        <h3>İletişim Bilgileri</h3>
        <p><strong>E-posta:</strong> contact@bonjuteri.com</p>
        <p><strong>Telefon:</strong> +90 555 123 45 67</p>
        <p><strong>Adres:</strong> Örnek Mahallesi, Örnek Caddesi, No: 123, Bonjuteri Merkezi, İstanbul</p>
      </div>

      <div className="contact-form">
        <h3>Mesaj Gönderin</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Adınız:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-posta Adresiniz:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mesajınız:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Gönder</button>
        </form>
      </div>
    </div>
  );
}

bonjuterireact/src/App.jsx

export default Contact;