import { PenPal } from "./PenPal.js"
import { LetterTopics } from "./LetterTopics.js"
import { Letters } from "./Letters.js"
import { Topics } from "./Topics.js"



document.addEventListener("click", (event) => {
    if (event.target.id === "letterSubmit") {
      const postObj = {
        date: document.querySelector("#letterRecipient").value,
        concept: document.querySelector("#letterTopics").value,
        entry: document.querySelector("#letterAuthor").value,
        mood: document.querySelector("#letterBody").value,
      };
      
    DataManager.createLetter(postObj);
    renderLetter.renderLetters();
  });