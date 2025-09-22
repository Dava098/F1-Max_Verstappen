const toggleBtn = document.getElementById("toggleLanguageBtn");
const verstappenText = document.getElementById("verstappenText");

const textRU = `
  Макс Верстаппен — талантливый и бесстрашный гонщик, который с
  каждым сезоном всё больше удивляет своими результатами в
  Формуле-1. Благодаря невероятной скорости, решительности и
  стратегическому мышлению он уже заслужил звание одного из самых
  великиких пилотов своего поколения. Его стиль вождения, умение
  адаптироваться к любым условиям и стремление к победе делают его
  настоящим лидером на трассе.
`;

const textEN = `
  Max Verstappen is a talented and fearless driver who continues to
  amaze with his performance in Formula 1 season after season. Thanks
  to his incredible speed, determination, and strategic thinking, he
  has already earned the title of one of the greatest drivers of his
  generation. His driving style, ability to adapt to any conditions,
  and relentless pursuit of victory make him a true leader on the track.
`;

let isRussian = true;

toggleBtn.addEventListener("click", () => {
  verstappenText.innerHTML = isRussian ? textEN : textRU;
  toggleBtn.textContent = isRussian ? "Switch to Russian" : "Переключить язык";
  isRussian = !isRussian;
});

const verstappenAudio = document.getElementById("verstappenAudio");

function playAudioOnce() {
  verstappenAudio.play().catch((e) => {
    console.log("Автовоспроизведение заблокировано браузером.");
  });

  document.removeEventListener("click", playAudioOnce);
}

document.addEventListener("click", playAudioOnce);

const audio = document.getElementById("verstappenAudio");
const audioToggleBtn = document.getElementById("audioToggleBtn");

audioToggleBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    audioToggleBtn.textContent = "Выключить музыку";
  } else {
    audio.pause();
    audioToggleBtn.textContent = "Включить музыку";
  }
});
