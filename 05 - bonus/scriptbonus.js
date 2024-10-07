/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario'

// Dichiara la funzione qui.
const saluto = (name) => {
	let saluto = []
	saluto[1] = name
	const hours = new Date().getHours()
	if (hours < 13) {
		saluto[0] = 'Buongiorno'
	} else if (13 < hours && hours < 17) {
		saluto[0] = 'Buon pomeriggio'
	} else {
		saluto[0] = 'Buonasera'
	}
	saluto = saluto.join(' ')
	return saluto
}

// Invoca la funzione qui e stampa il risultato in console
console.log(saluto(name))

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
