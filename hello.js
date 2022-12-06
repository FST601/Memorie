let punkteSpieler1 = 0;
let punkteSpieler2 = 0;

function getPlayer () {
    let spieler1 = prompt("Spieler 1 bitte Namen eingeben");
    let spieler2 = prompt("Spieler 2 bitte Namen eingeben");
    document.getElementById('spielerEins').innerHTML += spieler1;
    document.getElementById('spielerZwei').innerHTML += spieler2;
}

function test() {
    console.log("test")
}

function test2() {
    document.getElementById('2').src = 'Count-Dooku_4f552149.jpeg';
    console.log("funktioniert")
}