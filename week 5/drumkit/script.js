// Tüm butonları seç
const buttons = document.querySelectorAll('.drum');

// Butona tıklandığında veya ilgili tuşa basıldığında çalışacak fonksiyon
function playSound(key) {
  const btn = Array.from(buttons).find(b => b.dataset.key === key.toUpperCase());
  if (!btn) return;

  // Ses dosyasını al ve çal
  const soundFile = btn.dataset.sound;
  const audio = new Audio('sounds/' + soundFile);
  audio.currentTime = 0; // Her seferinde baştan başlat
  audio.play();

  // Butona animasyon ekle
  btn.classList.add('active');

  // Farklı tuşlarda farklı animasyon (bonus)
  if (key.toUpperCase() === 'G') {
    btn.classList.add('bonus');
  }

  // Animasyonu kaldır
  setTimeout(() => {
    btn.classList.remove('active');
    btn.classList.remove('bonus');
  }, 200);
}

// Tıklama olayı
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    playSound(btn.dataset.key);
  });
});

// Klavye olayı
document.addEventListener('keydown', (e) => {
  playSound(e.key);
});
