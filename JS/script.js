var resultat = document.getElementById('resultat');
var chiffre1 = document.getElementById('chiffre1');
var chiffre2 = document.getElementById('chiffre2');

function addition() {
    resultat.value = parseInt(chiffre1.value) + parseInt(chiffre2.value);
    console.log("C'est une addition !");
}

function soustraction() {
    resultat.value = parseInt(chiffre1.value) - parseInt(chiffre2.value);
    console.log("C'est une soustraction !");
}

function multiplication() {
    resultat.value = parseInt(chiffre1.value) * parseInt(chiffre2.value);
    console.log("C'est une multiplication !");
}

function division() {
    resultat.value = parseInt(chiffre1.value) / parseInt(chiffre2.value);
    console.log("C'est une division !");
}
