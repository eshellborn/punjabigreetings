document.addEventListener("DOMContentLoaded", () => {
  const phrases = document.querySelectorAll(".phrase");
  let currentAudio = null; // Keep track of the currently playing audio

  phrases.forEach((phrase, phraseIndex) => {
    const phraseNumber = phraseIndex + 1;
    const speakers = phrase.querySelectorAll(".speaker");

    // Phrase contains speakers → speakers are clickable
    if (speakers.length > 0) {
      speakers.forEach((speaker, speakerIndex) => {
        const suffix = String.fromCharCode(65 + speakerIndex); // A, B, C...

        speaker.addEventListener("click", (e) => {
          e.stopPropagation(); // prevent bubbling to phrase
          playAudio(`${phraseNumber}${suffix}`);
        });
      });
    }

    // Phrase has no speakers → phrase itself is clickable
    else {
      phrase.addEventListener("click", () => {
        playAudio(String(phraseNumber));
      });
    }
  });

  function playAudio(index) {
    const audio = document.getElementById(`audio${index}`);

    if (!audio) {
      alert("no audio for this phrase");
      return;
    }

    // Stop the previous audio if one is playing
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = audio;
    audio.currentTime = 0; // restart if already playing
    audio.play();
  }
});
