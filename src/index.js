function displayPoem(response) {
    console.log("poem generated");
    new Typewriter("#poem", {
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
    let prompt = `User instructions: Generate a poem from Ireland about ${instructionsInput.value} in Irish language with english translation.`;
    let context = "In basic HTML write 1 short poem. seperate each line with a <br />. The english translation after the Irish translation has finished. Follow user instructions";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    console.log("Generating Poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);


    axios.get(apiUrl).then(displayPoem);

  
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);