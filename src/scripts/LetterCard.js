export const letterElement = (letterObj) => {
  {
    return `
        
    <section class="post">
   
    <header>
    <div> By: ${letterObj.author}</div>
    </header>

    <p class="letterEntry">To Whom It May Concern: ${letterObj.letter}</p>

    <p class="recipient">Journal Entry: ${letterObj.entry}</p>
    
    <div class="date" input[type="date"]>${letterObj.date}</div>

    <p class="topics">Mood: ${letterObj.topics}</p>

    </div>
    </section>`;
  }
};
