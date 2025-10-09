document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.getElementById("timestamp");
    timestampField.value = new Date().toISOString();

    const modals = {
        npModal: document.getElementById("npModal"),
        bronzeModal: document.getElementById("bronzeModal"),
        silverModal: document.getElementById("silverModal"),
        goldModal: document.getElementById("goldModal"),
    };

    const buttons = {
        npButton: document.getElementById("npButton"),
        bronzeButton: document.getElementById("bronzeButton"),
        silverButton: document.getElementById("silverButton"),
        goldButton: document.getElementById("goldButton"),
    };

    const modalContent = {
    npModal: {
        title: "Basic Plan (Free)",
        content: "Unlimited access to the English Test Simulator, basic scores report, and community forum access.",
    },
    bronzeModal: {
        title: "Premium Study Plan",
        content: "Includes Basic features PLUS: Detailed performance analytics, personalized study tips, and priority email support.",
    },
    silverModal: {
        title: "Elite Study Plan",
        content: "Includes Premium features PLUS: Live Q&A sessions with tutors, 1-on-1 feedback on practice essays, and exclusive advanced test materials.",
    },
    goldModal: {
        title: "Teacher/Tutor Account",
        content: "Tools to track student progress, create custom quizzes, and manage study groups. Ideal for educators and language schools.",
    },
};

    function displayModal(modal, { title, content }) {
        modal.innerHTML = `
            <div class="modal-content">
                <button class="close-button" aria-label="Close">&times;</button>
                <h3>${title}</h3>
                <p>${content}</p>
            </div>
        `;
        modal.showModal();

        modal.querySelector(".close-button").addEventListener("click", () => {
            modal.close();
        });
    }

    Object.keys(buttons).forEach((key) => {
        buttons[key].addEventListener("click", () => {
            const modalKey = key.replace("Button", "Modal");
            displayModal(modals[modalKey], modalContent[modalKey]);
        });
    });

    const words = document.querySelectorAll(".word");

    words.forEach((word) => {
        word.innerHTML = [...word.textContent]
            .map((letter) => `<span class="letter">${letter}</span>`)
            .join("");
    });

    let currentWordIndex = 0;
    const maxWordIndex = words.length - 1;

    words[currentWordIndex].style.opacity = "1";

    function rotateText() {
        const currentWord = words[currentWordIndex];
        const nextWord =
            currentWordIndex === maxWordIndex
                ? words[0]
                : words[currentWordIndex + 1];

        Array.from(currentWord.children).forEach((letter, i) => {
            setTimeout(() => (letter.className = "letter out"), i * 80);
        });

        nextWord.style.opacity = "1";
        Array.from(nextWord.children).forEach((letter, i) => {
            letter.className = "letter behind";
            setTimeout(() => (letter.className = "letter in"), 340 + i * 80);
        });

        currentWordIndex =
            currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    }

    setInterval(rotateText, 4000);
    rotateText();
});