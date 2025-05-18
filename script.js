let saldo = 100000;
const saldoEl = document.getElementById("saldo");

function mainkanGame(game) {
  const suara = new Audio('assets/spin.mp3');
  suara.play();

  const biayaMain = 10000;
  if (saldo >= biayaMain) {
    saldo -= biayaMain;
    saldoEl.textContent = saldo;

    setTimeout(() => {
      const menang = Math.random() < 0.5;
      if (menang) {
        const hadiah = 25000;
        saldo += hadiah;
        alert("Selamat! Anda menang Rp" + hadiah);
      } else {
        alert("Gagal! Coba lagi.");
      }
      saldoEl.textContent = saldo;
    }, 1000);
  } else {
    alert("Saldo tidak cukup!");
  }
}
