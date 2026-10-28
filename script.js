// Get HTML elements

const smiley1 = document.getElementById("smiley1");
const smiley2 = document.getElementById("smiley2");

const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");

const rollButton = document.getElementById("rollButton");
const result = document.getElementById("result");
const history = document.getElementById("history");


// Smiley faces for values 1 to 6

const smileyFaces = [
    "",
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😎"
];


// Dice faces for values 1 to 6

const diceFaces = [
    "",
    "⚀",
    "⚁",
    "⚂",
    "⚃",
    "⚄",
    "⚅"
];


// Roll button event

rollButton.addEventListener("click", function () {

    // Generate two random numbers between 1 and 6

    const number1 = Math.floor(Math.random() * 6) + 1;
    const number2 = Math.floor(Math.random() * 6) + 1;


    // Disable button until rolling finishes

    rollButton.disabled = true;


    // Select all four objects

    const objects = [
        smiley1,
        smiley2,
        dice1,
        dice2
    ];


    // Start animation on all four objects

    objects.forEach(function (object) {

        object.classList.remove("rolling");

        // Restart animation

        void object.offsetWidth;

        object.classList.add("rolling");

    });


    // Update everything after animation

    setTimeout(function () {

        // First smiley and first dice have the same value

        smiley1.textContent = smileyFaces[number1];
        dice1.textContent = diceFaces[number1];


        // Second smiley and second dice have the same value

        smiley2.textContent = smileyFaces[number2];
        dice2.textContent = diceFaces[number2];


        // Calculate total

        const total = number1 + number2;


        // Display result

        result.textContent =
            `Result: ${number1} + ${number2} = ${total}`;


        // Create history entry

        const historyItem = document.createElement("li");

        historyItem.textContent =
            `${smileyFaces[number1]} ${number1} + ` +
            `${smileyFaces[number2]} ${number2} = ${total}`;


        // Add latest result to the top

        history.prepend(historyItem);


        // Keep only the latest 10 results

        while (history.children.length > 10) {

            history.removeChild(history.lastElementChild);

        }


        // Remove animation class

        objects.forEach(function (object) {

            object.classList.remove("rolling");

        });


        // Enable button again

        rollButton.disabled = false;

    }, 700);

});



