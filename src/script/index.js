const speech = new SpeechSynthesisUtterance();

function changeLanguage() {
  const languageSelect = document.getElementById("language");
  speech.lang = languageSelect.value;
}

function playSpeech() {
  const message = document.getElementById("message").value;
  speech.text = message;
  window.speechSynthesis.speak(speech);
}

// Typing Text
var textToType = [
  "Selamat Datang Di Virtual Speech",
  "Ubah Sebuah Teks Menjadi Virtual Speech",
  "Welcome to Virtual Speech",
  "A Website for Converting Text into Virtual Speech",
  "Gunakanlah Website Ini Dengan Sebijaknya!",
  "Use these websites wisely!",
  "Semoga Hari Mu Menyenangkan",
  "Have a Nice Day!",
];
var currentTextIndex = 0;
var typedText = "";

function typeText() {
  if (typedText.length < textToType[currentTextIndex].length) {
    typedText += textToType[currentTextIndex].charAt(typedText.length);
    $("#typed-text").text(typedText);
    setTimeout(typeText, 150);
  } else {
    currentTextIndex = (currentTextIndex + 1) % textToType.length;
    typedText = "";
    setTimeout(typeText, 500);
  }
}
$(document).ready(function () {
  typeText();
});

// Generate kalimat
function generateKalimat() {
  var bahasa = document.getElementById("bahasa").value;
  var kata1, kata2, kata3, kata4;

  switch (bahasa) {
    case "indonesia":
      kata1 = ["Saya", "Anda", "Mereka", "Kami"];
      kata2 = ["sangat senang", "terkejut", "bahagia", "sangat sedih"];
      kata3 = ["melihat", "mendengar", "merasakan", "menemui"];
      kata4 = ["pemandangan indah", "berita gembira", "kejutan besar", "kesedihan yang mendalam"];
      break;
    case "english":
      kata1 = ["I", "You", "They", "We"];
      kata2 = ["am very happy", "am surprised", "am very sad"];
      kata3 = ["see", "hear", "feel", "meet"];
      kata4 = ["a beautiful scenery", "great news", "a big surprise", "deep sadness"];
      break;
    case "chinese":
      kata1 = ["我", "你", "他们", "我们"];
      kata2 = ["非常高兴", "很惊讶", "非常伤心"];
      kata3 = ["看到", "听到", "感受到", "见到"];
      kata4 = ["美丽的风景", "好消息", "一个大惊喜", "深深的悲伤"];
      break;
    case "korean":
      kata1 = ["나는", "당신은", "그들은", "우리는"];
      kata2 = ["매우 행복합니다", "놀랐어요", "매우 슬퍼요"];
      kata3 = ["본다", "들었다", "느꼈다", "만났다"];
      kata4 = ["아름다운 풍경을", "좋은 소식을", "큰 놀람을", "깊은 슬픔을"];
      break;
    case "japanese":
      kata1 = ["私は", "あなたは", "彼らは", "私たちは"];
      kata2 = ["とても嬉しいです", "驚きました", "とても悲しいです"];
      kata3 = ["見る", "聞く", "感じる", "出会う"];
      kata4 = ["美しい景色を", "素晴らしいニュースを", "大きな驚きを", "深い悲しみを"];
      break;
    case "français":
      kata1 = ["je", "vous", "ils", "nous"];
      kata2 = ["très heureux", "surpris", "heureux", "très triste"];
      kata3 = ["voir", "entendre", "sentir", "rencontrer"];
      kata4 = ["beau paysage", "nouvelles joyeuses", "grande surprise", "profonde tristesse"];
      break;
    case "deutsch":
      kata1 = ["ich", "ihr", "sie", "wir"];
      kata2 = ["sehr glücklich", "überrascht", "glücklich", "sehr traurig"];
      kata3 = ["sehen", "hören", "riechen", "treffen"];
      kata4 = ["schöne Landschaft", "freudige Nachrichten", "große Überraschung", "tiefe Traurigkeit"];
      break;
  }

  var randomKata1 = kata1[Math.floor(Math.random() * kata1.length)];
  var randomKata2 = kata2[Math.floor(Math.random() * kata2.length)];
  var randomKata3 = kata3[Math.floor(Math.random() * kata3.length)];
  var randomKata4 = kata4[Math.floor(Math.random() * kata4.length)];

  var kalimat = randomKata1 + " " + randomKata2 + " " + randomKata3 + " " + randomKata4;
  document.getElementById("output").value = kalimat;
  outputElement.innerHTML = kalimat;
}

function copyKalimat() {
  var resultInput = document.getElementById("output");

  // Salin teks dari input ke clipboard
  resultInput.select();
  resultInput.setSelectionRange(0, 99999);
  document.execCommand("copy");

  // Tampilkan alert
  var alertDiv = document.getElementById("alert");
  alertDiv.classList.remove("hidden");
  setTimeout(function () {
    alertDiv.classList.add("hidden");
  }, 4000);
}
// Switch mode
const lightModeBtn = document.getElementById("lightModeBtn");
const darkModeBtn = document.getElementById("darkModeBtn");
const systemModeBtn = document.getElementById("systemModeBtn");
const contentDiv = document.getElementById("content");

// Cek mode yang disimpan pada local storage saat memuat halaman
const currentMode = localStorage.getItem("mode");
if (currentMode) {
  document.documentElement.setAttribute("data-theme", currentMode);
  if (currentMode === "dark") {
    darkMode();
  } else if (currentMode === "system") {
    systemMode();
  }
}

// Fungsi untuk mengaktifkan light mode
function lightMode() {
  document.documentElement.setAttribute("data-theme", "light");
  contentDiv.classList.remove("dark-mode", "system-mode");
  localStorage.setItem("mode", "light");
}

// Fungsi untuk mengaktifkan dark mode
function darkMode() {
  document.documentElement.setAttribute("data-theme", "dark");
  contentDiv.classList.remove("system-mode");
  contentDiv.classList.add("dark-mode");
  localStorage.setItem("mode", "dark");
}

// Fungsi untuk mengaktifkan mode sistem
function systemMode() {
  document.documentElement.setAttribute("data-theme", "system");
  contentDiv.classList.remove("dark-mode");
  contentDiv.classList.add("system-mode");
  localStorage.setItem("mode", "system");
}

// Tambahkan event listener untuk tombol-tombol
lightModeBtn.addEventListener("click", lightMode);
darkModeBtn.addEventListener("click", darkMode);
systemModeBtn.addEventListener("click", systemMode);
