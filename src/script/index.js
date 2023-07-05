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

var textToType = ["Selamat Datang Di Virtual Speech", "Welcome to Virtual Speech", "Semoga Harimu Menyenangkan!", "Have a Nice Day!"];
var currentTextIndex = 0;
var typedText = "";

function typeText() {
  if (typedText.length < textToType[currentTextIndex].length) {
    typedText += textToType[currentTextIndex].charAt(typedText.length);
    $("#typed-text").text(typedText);
    setTimeout(typeText, 100);
  } else {
    currentTextIndex = (currentTextIndex + 1) % textToType.length;
    typedText = "";
    setTimeout(typeText, 500);
  }
}
$(document).ready(function () {
  typeText();
});
