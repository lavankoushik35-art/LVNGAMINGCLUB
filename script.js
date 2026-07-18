// Selected game details
let selectedGame = "";
let selectedPrice = "";

// Called when user clicks "Book Now"
function bookGame(game, price) {
    selectedGame = game;
    selectedPrice = price;

    // Scroll to booking form
    document.querySelector(".booking").scrollIntoView({
        behavior: "smooth"
    });

    alert("You selected: " + game);
}

// Confirm booking
document.getElementById("bookBtn").addEventListener("click", function () {

    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    if (selectedGame === "") {
        alert("Please select a game first.");
        return;
    }

    if (name === "" || date === "" || time === "") {
        alert("Please fill all booking details.");
        return;
    }

    let message =
`🎮 *LVN GAMING CLUB BOOKING*

👤 Name: ${name}

🎯 Game: ${selectedGame}

💰 Price: ${selectedPrice}

📅 Date: ${date}

⏰ Time: ${time}

Please confirm my booking.`;

    let phone = "919381687402";

    let whatsapp =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsapp, "_blank");
});
