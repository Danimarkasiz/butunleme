import React from 'react';
import { Link } from 'react-router-dom'; // Urun bileşeni içinde Link kullanmak için

// Urun Bileşeni: Tek bir ürün kartını temsil eder (App.jsx'teki ile aynı)
function Urun({ image, title, fiyat }) {
  return (
    <div className="urun border p-4 rounded-lg shadow-md text-center">
      {/* Ürün detay sayfasına gitmek için Link kullanabilirsiniz */}
      <Link to={`/urunler/${title.replace(/\s+/g, '-')}`}> {/* Örnek bir Link */}
        <img src={image} alt={title} className="mx-auto h-40 object-contain" />
        <h2 className="text-lg font-semibold mt-2" style={{ color: "black" }}>
          {title}
        </h2>
        <p className="fiyat text-sm text-gray-600">
          <s>649.99TL</s> <span className="text-red-500 font-bold">{fiyat}</span>
        </p>
      </Link>
    </div>
  );
}

// Products (Tüm Ürünler) sayfasının ana bileşeni
function Products() {
  // 8 ürünlük veri seti
  const tumUrunler = [
    {
      image: "/images/kuyumcu1.webp",
      title: "14 Ayar Altın Kaplama Gökyüzü Kolye ",
      fiyat: "499.99 TL",
    },
    {
      image: "/images/kuyumcu2.webp",
      title: "14 Ayar Altın Kaplama İtalyan İnci Kalp Kolye",
      fiyat: "499.99 TL",
    },
    {
      image: "/images/kuyumcu3.webp",
      title: "14 Ayar Altın Kaplama 100 Dilde Seni Seviyorum Kolye",
      fiyat: "499.99 TL",
    },
    {
      image: "/images/kuyumcu3.webp", // Yeni bir resim yolu eklediğinizi varsaydım
      title: "14 Ayar Altın Kaplama 100 Dilde Seni Seviyorum Kolye",
      fiyat: "499.99 TL",
    },
    {
      image: "/images/kuyumcu1.webp", // Yeni bir resim yolu eklediğinizi varsaydım
      title: "14 Ayar Altın Kaplama Gökyüzü Kolye",
      fiyat: "499.99 TL",
    },
    {
      image: "/images/kuyumcu2.webp", // Yeni bir resim yolu eklediğinizi varsaydım
      title: "14 Ayar Altın Kaplama İtalyan İnci Kalp Kolye",
      fiyat: "499.99 TL",
    },
    {
      image: "/images/kuyumcu3.webp", // Yeni bir resim yolu eklediğinizi varsaydım
      title: "14 Ayar Altın Kaplama 100 Dilde Seni Seviyorum Kolye",
      fiyat: "499.99 TL",
    },
    {
      image: "/images/kuyumcu3.webp", // Yeni bir resim yolu eklediğinizi varsaydım
      title: "14 Ayar Altın Kaplama 100 Dilde Seni Seviyorum Kolye",
      fiyat: "449.99 TL",
    },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
      <h1>Tüm Ürünlerimiz</h1>
      <div className="urun-listesi grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {tumUrunler.map((urun, i) => (
          <Urun key={i} {...urun} />
        ))}
      </div>
    </div>
  );
}

export default Products; // Bileşeni dışa aktarmayı unutmayın