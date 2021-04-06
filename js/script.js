var iltuoNome = prompt("Qual è il tuo nome?");
/* console.log(iltuoNome) */

var iltuoCognome = prompt("Qual è il tuo cognome?");
/* console.log(iltuoCognome) */

var prefColore = prompt("Qual è il tuo colore preferito?");
/* console.log(prefColore) */

var prefNumero = 21;
/* console.log(prefNumero) */

var password = iltuoNome + iltuoCognome + prefColore + prefNumero;
/* console.log(password) */


document.getElementById('pwd').innerHTML = password;