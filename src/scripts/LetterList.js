import { getLetters } from "./DataManager.js";
import { letterElement } from "./LetterCard.js";

export const showLetterList = () => {
  const postElement = document.querySelector(".showLetterList");
  getLetters().then((allLetters) => {
    for (const letter in allLetters) {
      postElement.innerHTML += letterElement(letter);
    }
  });
};
