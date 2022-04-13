

export const getPals = () => {
    return fetch('http://localhost:8088/pals')
    .then(response => response.json())
    // .then(data => )
}

export const createLetter = letterObj => {
    return fetch("http://localhost:8088/letters", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(letterObj)
  
    })
        .then(response => response.json())
  }

//new function to save letterTopics info