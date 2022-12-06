function getPlayer () {
    let spieler1 = prompt("Spieler 1 bitte Namen eingeben");
    let spieler2 = prompt("Spieler 2 bitte Namen eingeben");
    document.getElementById('spielerEins').innerHTML += spieler1;
    document.getElementById('spielerZwei').innerHTML += spieler2;
}