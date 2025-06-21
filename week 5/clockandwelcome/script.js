// İsmi prompt ile al, ekrana yazdır
let person = prompt("Lütfen isminizi giriniz:");
if (person && person.trim() !== "") {
  document.getElementById("myName").textContent = person;
} else {
  document.getElementById("myName").textContent = "İsimsiz";
}

// Saat ve günü ekrana basan fonksiyon
function showTime() {
  const now = new Date();
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  const dayName = days[now.getDay()];
  const time = now.toLocaleTimeString("tr-TR", { hour12: false });
  document.getElementById("myClock").textContent = ` ${time} ${dayName}`;
}

showTime();
setInterval(showTime, 1000);
