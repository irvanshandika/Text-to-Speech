const speech = new SpeechSynthesisUtterance();

function playSpeech() {
  const message = document.getElementById("message").value
  speech.lang = "en";
  speech.text = message;
  window.speechSynthesis.speak(speech);
}
