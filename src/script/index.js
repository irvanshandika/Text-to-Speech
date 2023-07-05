const speech = new SpeechSynthesisUtterance();

function playSpeech() {
  const message = document.getElementById("message").value;
  speech.lang = "id";
  speech.text = message;
  window.speechSynthesis.speak(speech);
}

var textToType = ["Selamat Datang Di Virtual Speech", "Welcome to Virtual Speech", "Semoga Harimu Menyenangkan!", "Have a Nice Day!"];
var currentTextIndex = 0;
var typedText = "";

function typeText() {
  if (typedText.length < textToType[currentTextIndex].length) {
    typedText += textToType[currentTextIndex].charAt(typedText.length);
    $("#typed-text").text(typedText);
    setTimeout(typeText, 100); // Delay antara setiap karakter (milidetik)
  } else {
    // Pindah ke teks berikutnya setelah menyelesaikan satu teks
    currentTextIndex = (currentTextIndex + 1) % textToType.length;
    typedText = "";
    setTimeout(typeText, 500); // Delay sebelum memulai teks berikutnya (milidetik)
  }
}

// Panggil fungsi ketika halaman selesai dimuat
$(document).ready(function () {
  typeText();
});
