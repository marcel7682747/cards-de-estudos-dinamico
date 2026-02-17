
const form = document.querySelector("#card-form");
const topicInput = document.querySelector("#topic");
const descriptionInput = document.querySelector("#description");
const cardsContainer = document.querySelector("#cards-container");
const adviceElement = document.querySelector("#advice");


form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const topic = topicInput.value;
    const description = descriptionInput.value;


    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = topic;

    const text = document.createElement("p");
    text.textContent = description;

    card.appendChild(title);
    card.appendChild(text);
    cardsContainer.appendChild(card);

    
    form.reset();
});


async function getAdvice() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        adviceElement.textContent = `"${data.slip.advice}"`;
    } catch (error) {
        adviceElement.textContent = "Não foi possível carregar o conselho.";
    }
}

getAdvice();
