import React from 'react';

// Contact bileşeni TEK BİR KEZ tanımlanmalı
function Contact() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>İletişim</h1>
      <p>Sorularınız, geri bildirimleriniz veya özel siparişleriniz için bizimle iletişime geçmekten çekinmeyin. Ekibimiz en kısa sürede size geri dönecektir.</p>

      <h2>İletişim Bilgileri</h2>
      <p>
        <strong>E-posta:</strong> info@bonjuteri.com <br />
        <strong>Telefon:</strong> +90 531 491 59 35 (Çalışma saatleri içinde) <br />
        <strong>Adres:</strong> ali ihsan türkkan Cad. No:123, Alibey Mah., Silivri, İstanbul, Türkiye
      </p>

      <h2>İletişim Formu</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Adınız Soyadınız:</label>
          <input type="text" id="name" name="name" required style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} />
        </div>
        <div>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>E-posta Adresiniz:</label>
          <input type="email" id="email" name="email" required style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} />
        </div>
        <div>
          <label htmlFor="subject" style={{ display: 'block', marginBottom: '5px' }}>Konu:</label>
          <input type="text" id="subject" name="subject" style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} />
        </div>
        <div>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Mesajınız:</label>
          <textarea id="message" name="message" rows="5" required style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}></textarea>
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Gönder</button>
      </form>
    </div>
  );
}

export default Contact; // Bileşeni dışa aktarmayı unutmayın