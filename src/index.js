function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "eaf7dab2b2d4b14t4ff1e93aa36o60ff";

  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user's instructions. Do not include a title to the poem. Sign wih 'Shecodes AI' inside a <strong> element at the end of the poem NOT at the beginning";
  let prompt = `User's instructions: Generate a spanish poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating Poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayPoem);
}

let inputFormElement = document.querySelector("#AI-generator-form");
inputFormElement.addEventListener("submit", generatePoem);
