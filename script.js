document.addEventListener("DOMContentLoaded", function () {
  const greeting = document.getElementById("greeting");
  const button = document.getElementById("nextBtn");
  const footer = document.getElementById("footer");
  const music = document.getElementById("birthdayMusic"); // Musiqa elementini chaqiramiz

  let step = 1;

  button.addEventListener("click", function () {
    // Musiqani faqat birinchi bosishda ijro etamiz
    if (step === 1) {
      if (music) {
        music.play().catch((err) => {
          console.log("Musiqa autoplay bloklandi:", err);
        });
      }

      greeting.innerHTML = `
        Hurmatli Asilbek ukajon,<br>
        Senga bugun faqat bir tilak emas — butun bir minnatdorchilikni yo‘llayman.<br>
        Senning o'zinga xos jiddiyliging, dunyo qarashing, fikrlaring hamda o'ziga hos hislating haqiqiy ota onasiga mexribon farzandliging na'munasidir.<br><br>
        Tug‘ilgan kuningda senga sog‘lik, quvonch, va har kuni yangi ilhom tilayman.<br>
        Sen bilan barchamiz faxrlanamiz 🌟
      `;
      button.textContent = "So‘nggi tilak 💫";
      step++;
    } else if (step === 2) {
      greeting.innerHTML = `
        Hurmatli Asilbek ukam,<br>
        Sening borliging — hammamiz uchun xaqiqiy baxtdir. Sen turgan har bir joyda, ishonch va qovonch bo‘lsin.<br><br>
        Tug‘ilgan kuningda senga shunchaki tilak emas, balki chin yurakdan rahmat aytmoqchiman.<br>
        Senga sog‘lik, tinchlik, va qalbingdagi har bir orzuning ro‘yobini tilayman! Olloh bergan umringni mazmunli va go'zal onlari ko'p bo'lsin!<br><br>
        🎁 Xurmat bilan yana bir bor Allanazarov Bobir!.
      `;
    
      button.remove(); // tugmani olib tashlaymiz

      setTimeout(() => {
        greeting.innerHTML = `<strong>Tabrik tugamaydi yana davom etadi... 😊</strong><br><br>Yana ko‘rishguncha!`;
        footer.style.display = "none";

        // Musiqani to‘xtatamiz
        if (music) {
          music.pause();
          music.currentTime = 0;
        }
      }, 180000); // 3 daqiqa
      step++;
    }
  });
});

