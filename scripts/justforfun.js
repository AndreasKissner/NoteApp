function checkUserName() {
    let userName = localStorage.getItem("userName");

    if (!userName) {
        let namePrompt = prompt("Wie ist dein Name, ChronoScript Meister?");
        let validNamePattern = /^[A-Za-zäöüÄÖÜß\s]+$/;//RegEX

        if (!namePrompt || namePrompt.trim() === "") {
            alert("Du musst einen Namen eingeben, ChronoScript Meister!");
            checkUserName();
            return;
        }

        let valiName = namePrompt.trim();
        if (!validNamePattern.test(valiName)) {
            alert("Nur Buchstaben sind erlaubt, ChronoScript Meister!");
            checkUserName();
            return;
        }

        localStorage.setItem("userName", valiName);
        alert(`Salut, ${valiName}! ChronoScript ist bereit, dich zu begleiten. Ich habe dir schon ein paar Titel und Notizen auf Verdacht hinzugefügt die du gerne wieder löschen kannst. MUAHAHAHAHA`);
        justForFun(valiName);
    } else {
        console.log(`(-:) ChronoScript sagt: Willkommen zurück, ${userName}!`);
        justForFun(userName);
    }
}

//inScope
function justForFun(name) {
    let bgColors = ["#1a1a1d", "#333533", "#4b6584", "#1b262c", "#0b0c10", "#f8f9fa", "#2d4059", "#222831"];
    let textColors = ["#c3073f", "#f5cb5c", "#f7b731", "#0f4c75", "#66fcf1", "#343a40", "#ea5455", "#00adb5"];
    let messages = [
        "Der Code lebt, wenn du ihn erschaffst.",
        "Mit jeder Zeile wächst dein Vermächtnis.",
        "ChronoScript kompiliert deine Träume.",
        "Du kontrollierst den Algorithmus der Zeit.",
        "Jeder Pfad im Code ist ein neuer Weg zur Erkenntnis.",
        "Verändere den Code. Verändere die Realität.",
        "Die Konsole der Zeit gehört dir.",
        "Du schreibst nicht Code. Du schreibst Geschichte."
    ];

    let randomIndex = Math.floor(Math.random() * bgColors.length); // zufall zwischen 0 und 7
    let bgColor = bgColors[randomIndex];
    let textColor = textColors[randomIndex];
    let message = messages[randomIndex];

    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
    alert(`Wusstest du ${name}: ${message}`);
}
