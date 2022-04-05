

/*
Generare una password:
  1* scrivere il nome
  2* scrivere il cognome
  3* scrivere il colore preferito
  4* stampa la password generata con alla fine il numero 22
*/


const firstName = prompt("Inserisca qui il suo Nome")
const lastName = prompt("Inserisca qui il suo Cognome")
const favoriteColor = prompt("Inserisca qui il suo Colore preferito")
const defaultNumber = 22;


console.log(firstName, lastName, favoriteColor );


const generatedPassword = firstName + lastName + favoriteColor + defaultNumber;


console.log(generatedPassword);


document.getElementById("psw-generate").innerHTML = 

`
<h1 id="welcome" class="text-center text-light">Che la tua password sia con te</h1>

  <ul class="text-center">
    <li><h3>Dati inseriti</h3></li>
    <li>Nome: ${firstName}</li>
    <li>Cognome: ${lastName}</li>
    <li>Colore preferito: ${favoriteColor}</li>
  </ul>

  <ul class="text-center">
    <li><h3>La tua password generata è:</h3></li>
    <li>Password: ${generatedPassword}</li>
  </ul>
`
