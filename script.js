const sahneler = document.querySelectorAll('.sahne');
let mevcutSahne = 0;

function sahneGecis(index) {
  if (index < 0 || index >= sahneler.length) return;
  sahneler[mevcutSahne].classList.remove('active');
  sahneler[index].classList.add('active');
  mevcutSahne = index;
}

function oyunBitti() {
  alert('Tebrikler! Korku evinden başarıyla kaçtın!');
  // İstersen buraya oyunu yeniden başlatma kodu ekleyebilirsin
  sahneGecis(0);
}

// Sayfa yüklendiğinde ilk sahne aktif olsun
window.onload = () => {
  sahneler.forEach(s => s.classList.remove('active'));
  sahneler[0].classList.add('active');
};
