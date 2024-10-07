/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario'

// Dichiara la funzione qui.
function saluto(name) {
	let saluto = []
	saluto[1] = name
	saluto[0] = 'Ciao'
	return `${saluto[0]} ${saluto[1]}`
}

// Invoca la funzione qui e stampa il risultato in console
console.log(saluto(name))

//Risultato atteso se si passa 'Mario': // ciao Mario
