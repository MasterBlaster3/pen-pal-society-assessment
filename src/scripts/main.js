// import { LetterCard } from "./LetterCard.js"
import { getLetters } from "./DataManager.js";
import { buildForm, author } from "./Form.js";
import { showLetterList } from "./LetterList.js";

document.addEventListener("click", (event) => {
  // event.preventDefault();
  if (event.target.id === "send-button") {
    const postObj = {
      recipient: document.querySelector("#recipient").value,
      // topic: document.querySelector("#topics").value,
      author: document.querySelector("#author").value,
      body: document.querySelector("#letterEntry").value,
      date: document.querySelector("input[name='dateSent']").value,
    };
    console.log(postObj);
    createLetter(postObj);
  }
});

export const getMyPosts = () => {
  const usersId = getLoggedInUser().id;
  return fetch(`http://localhost:8088/letters`)
    .then((response) => response.json())
    .then((parsedResponse) => {
      console.log("data with user", parsedResponse);
      postCollection = parsedResponse;
      return parsedResponse.reverse();
    });
};

buildForm();
author();
showLetterList();
