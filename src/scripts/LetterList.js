export const showLetterList = () => {
    const letterElement = document.querySelector("#letterList");
    getLetters().then((allLetters) => {
      letterElement.innerHTML = LetterList(allLetters);
    });
  };