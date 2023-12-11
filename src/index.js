function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["La tombe dit a la rose"],
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let inputFormElement = document.querySelector("#AI-generator-form");
inputFormElement.addEventListener("submit", generatePoem);
