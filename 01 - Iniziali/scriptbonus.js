/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ['Anna', 'Luca', 'Marco', 'Adele', 'Giovanni', 'Alessandra']

// Dichiara la funzione qui.
const initial_letter = (names) => {
	let initial_name = []
	for (let i = 0; i < names.length; i++) {
		initial_name.push(names[i].charAt(0))
	}
	return initial_name
}

// Invoca la funzione qui e stampa il risultato in console
console.log(initial_letter(names))

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
