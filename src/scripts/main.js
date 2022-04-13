// import { LetterCard } from "./LetterCard.js"
import { createLetter } from "./DataManager.js";
import { buildForm , author } from "./Form.js"


document.addEventListener("click", (event) => {
    event.preventDefault()
    if (event.target.id === "send-button") {
      const postObj = {
        recipient: document.querySelector("#recipient").value,
        // topic: document.querySelector("#topics").value,
        author: document.querySelector("#author").value,
        body: document.querySelector("#letterEntry").value
      };
      console.log(postObj)
      createLetter(postObj)  
  }})


buildForm()
author()