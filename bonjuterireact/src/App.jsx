import React from "react";
import "./index.css";

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

function Urun({ image, title, fiyat }) {
  return (
    <div className="urun">
      <a href="#">
        <img src={image} alt={title} />
        <h2 style={{ color: "black" }}>{title}</h2>
        <p className="fiyat">
          <s>649.99TL</s> {fiyat}
        </p>
      </a>
    </div>
  );
}

function UrunListesi() {
  const urunler = [
    {
      image: "/images/kuyumcu1.webp",
      title: "14 Ayar Altın Kaplama Gökyüzü Kolye",
      fiyat: "499.99 TL",
    },
    {
      image: "/images/kuyumcu2.webp",
      title: "14 Ayar Altın Kaplama İtalyan İnci Kalp Kolye",
      fiyat: "499.99 TL",
    },
    {
      image: "/images/kuyumcu3.webp",
      title: "14 Ayar Altın Kaplama 100 Dilde Seni seviyorum Kolye",
      fiyat: "499.99 TL",
    },
    {
      image: "/images/kuyumcu3.webp",
      title: "14 Ayar Altın Kaplama 100 Dilde Seni seviyorum Kolye",
      fiyat: "499.99 TL",
    },
  ];

  return (
    <div className="urun-listesi">
      {urunler.map((urun, i) => (
        <Urun key={i} {...urun} />
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <p>Bonjuteri &copy; 2025</p>
        <p>Tüm hakları saklıdır.</p>
      </div>
      <div className="footer-section">
        <label>İletişim</label>
        <a href="#">contact@bonjuteri.com</a>
      </div>
      <div className="footer-section">
        <label>Sosyal Medya</label>
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
      </div>
      <div className="footer-section">
        <label>Hizmetler</label>
        <a href="#">Ürün İade</a>
        <a href="#">Garanti</a>
        <a href="#">Sıkça Sorulan Sorular</a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <hr />
      <UrunListesi />
      <UrunListesi />
      <hr />
      <Footer />
    </>
  );
}

export default App;