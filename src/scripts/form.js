//pulling data from the json
import { getPals } from "./DataManager.js";

//rendering html of the form
export const buildForm = () => {
  //attaching a variable to an html element
  const formEl = document.querySelector(".form");
  //where the html is being rendered on the page
  formEl.innerHTML = `
    <form action="">
      <fieldset class="letter-form">

        <label for="author">Author</label>
        <select name="author" id="author">
        </select>

        <br>
        <label for="letterEntry">Letter</label><br>
        <textarea id="letterEntry" name="letterEntry" rows="5" cols="25" class="entry"></textarea><br>
        
        <div class="data">    
        <span>
        <input name="topics" type="checkbox" value="topics"/>
        <label for="topics">Business</label>
        </span> 

        <span>
        <input name="topics" type="checkbox" value="topics"/>
        <label for="topics">Friendly</label>
        </span>    

        <span>
        <input name="topics" type="checkbox" value="topics"/>
        <label for="topics">Family</label>
        </span>

        <span>
        <input name="topics" type="checkbox" value="topics"/>
        <label for="topic">Congratulations</label>
        </span>    

        <span>
        <input name="topics" type="checkbox" value="topics"/>
        <label for="topics">Condolences</label>
        </span>
        </div>

        <div class="recipient">
        <label for="recipient">Recipient</label>
        <select name="recipient" id="recipient"></select>

        <label for="dateSent">Pen Pal Letter Date:</label>
        <input type="date" name="dateSent" id="dateSent">
        
        <label for="Send Letter"></label><br>
        <input type="submit" value="Send Letter" class="button" id="send-button"><br>
        </form>
      </fieldset>
    </form>
    <br>
   `;
};

//function declaration
export const author = () => {
  //grabbing html element with id of author
  let author = document.querySelector("#author");
  //writing author to the DOM
  author.innerHTML = `<option>Author</option>`;
  let recipient = document.querySelector("#recipient");
  recipient.innerHTML = `<option>Recipient</option>`;
  //calling getPals and used .then as it's asynchronous, passing palsArr into an anonymous function to be able to populate the dropdown selector in the letter form
  getPals().then((palsArr) => {
    for (const authorObj of palsArr) {
      author.innerHTML += `<option id="author--${authorObj.id}" >${authorObj.name}
        </option>`;
    }
  });

  getPals().then((palsArr) => {
    for (const recipientObj of palsArr) {
      recipient.innerHTML += `<option id="recipient--${recipientObj.id}" >${recipientObj.name}
        </option>`;
    }
  });
};
