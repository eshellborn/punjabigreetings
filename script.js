document.addEventListener("DOMContentLoaded", () => {
  const phrases = document.querySelectorAll(".phrase");

  phrases.forEach((phrase, phraseIndex) => {
    const phraseNumber = phraseIndex + 1; // start at 1
    const speakers = phrase.querySelectorAll(".speaker");

    // Case 1: phrase has speakers → speakers are clickable
    if (speakers.length > 0) {
      speakers.forEach((speaker, speakerIndex) => {
        const suffix = String.fromCharCode(65 + speakerIndex); // A, B, C...

        speaker.addEventListener("click", () => {
          onPhraseClick(`${phraseNumber}.${suffix}`);
        });

        speaker.addEventListener("touchend", () => {
          onPhraseClick(`${phraseNumber}.${suffix}`);
        });
      });
    }

    // Case 2: phrase has NO speakers → phrase itself is clickable
    else {
      phrase.addEventListener("click", () => {
        onPhraseClick(String(phraseNumber));
      });

      phrase.addEventListener("touchend", () => {
        onPhraseClick(String(phraseNumber));
      });
    }
  });
});

function onPhraseClick(index) {
  alert(index);
}
  
