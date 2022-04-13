export const getPals = () => {
  return fetch("http://localhost:8088/pals").then((response) =>
    response.json()
  );
};

export const createLetters = (letterObj) => {
  return fetch("http://localhost:8088/letters", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(letterObj),
  }).then((response) => response.json());
};

//new function to export letterTopics info

export const getLetters = () => {
  return fetch(`http://localhost:8088/letters`)
    .then((response) => response.json())
    .then((parsedResponse) => {
      console.log("data with user", parsedResponse);
      //   postCollection = parsedResponse;
      return parsedResponse.reverse();
    });
};

export const showLetterList = (allPosts) => {
  let postHTML = "";

  for (const postObject of allPosts) {
    postHTML += Post(postObject);
  }
  return postHTML;
};
