export const buildForm = () => { 
    const formEl = document.querySelector(".form")
    formEl.innerHTML = `
    <form action="">
      <fieldset class="letter-form">
        <label for="author">Author</label><br>
        <input type="text" name="authorName" id="author"><br>
        <br>
        <label for="letterEntry">Letter</label><br>
        <textarea id="letterEntry" name="letterEntry" rows="5" cols="25" class="entry"></textarea><br>
        
        <div class="topics">
        <label for="topics">Topics</label>
        <select name="topics" id="topics">

        <div class="recipient">
        <label for="recipient">Recipient</label>
        <select name="recipient" id="recipient">
        
        <label for="Send Letter"></label><br>
        <input type="submit" value="submitLetter" class="button" id="send-button"><br>
        </form>
      </fieldset>
    </form>
    <br>
   
      
    </select>
    </div>`
  }