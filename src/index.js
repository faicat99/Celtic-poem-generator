function displayPoem(response) {
    new Typewriter("#translator", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "bafb81c036f1dc4bfbb21532bb2ot295";
    let prompt = `User instructions: Generate a translation about ${instructionsInput.value} in the Irish Language. Show the english translation after the Irish translation`;
    let context = "In basic HTML write language translation that user has requested. Seperate each line with a <br />. At the bottom have Fainche AI in strong and green. Follow user instructions";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#translator");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⏳Generating the translation about ${instructionsInput.value}...</div>`;
    
    axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#translator-form");
poemFormElement.addEventListener("submit", generatePoem);