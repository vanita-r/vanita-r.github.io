document.addEventListener("DOMContentLoaded", function () {
    const eventContainer = document.getElementById("event-list");

    // The AJAX call
    fetch("data/events.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            // Clear the "Loading..." text
            eventContainer.innerHTML = "";

            // Loop through the events and create HTML for each
            data.events.forEach((event) => {
                const article = document.createElement("article");
                article.classList.add("card");

                article.innerHTML = `
                    <h3>${event.title}</h3>
                    <p><strong>${event.date}</strong></p>
                    <p>${event.description}</p>
                `;

                eventContainer.appendChild(article);
            });
        })
        .catch((error) => {
            console.error("Error loading events:", error);
            eventContainer.innerHTML = "<p>Sorry, events could not be loaded at this time.</p>";
        });
});