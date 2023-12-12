function displayPoem(response) {
  new Typewriter("#lesson", {
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
    "You are very wise and experienced. Your mission is to generate a 5 or 6 line life lesson. Make sure to follow the user's instructions and avoid offensive language. Do not include a title. At the end please recommend a book related to the subject and name it's author. Separate the book recommendation by a <br />";
  let prompt = `User's instructions: provide a life lesson based on ${instructionsInput.value} and recommend a book`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let outputElement = document.querySelector("#lesson");
  outputElement.classList.remove("hidden");
  outputElement.innerHTML = `<div class="spin">⏳</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let inputFormElement = document.querySelector("#AI-generator-form");
inputFormElement.addEventListener("submit", generatePoem);
