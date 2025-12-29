document.addEventListener("DOMContentLoaded", () => {
  const phrases = document.querySelectorAll(".phrase");

  phrases.forEach((phrase, phraseIndex) => {
    const phraseNumber = phraseIndex + 1;
    const speakers = phrase.querySelectorAll(".speaker");

    // Phrase contains speakers → speakers are clickable
    if (speakers.length > 0) {
      speakers.forEach((speaker, speakerIndex) => {
        const suffix = String.fromCharCode(65 + speakerIndex); // A, B, C...

        speaker.addEventListener("click", (e) => {
          e.stopPropagation(); // prevent bubbling to phrase
          onPhraseClick(`${phraseNumber}${suffix}`);
        });
      });
    }

    // Phrase has no speakers → phrase itself is clickable
    else {
      phrase.addEventListener("click", () => {
        onPhraseClick(String(phraseNumber));
      });
    }
  });
});

function onPhraseClick(index) {
  alert(index);
}
