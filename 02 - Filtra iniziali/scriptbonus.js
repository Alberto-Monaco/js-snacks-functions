/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ['Anna', 'Luca', 'Marco', 'Adele', 'Laura', 'Alessandra']

// Dichiara la funzione qui.
const initial_letter = (letter, names) => {
	let initial_name = []
	for (let i = 0; i < names.length; i++) {
		if (letter == names[i].charAt(0)) {
			initial_name.push(names[i])
		}
	}
	return initial_name
}

// Invoca la funzione qui e stampa il risultato in console

console.log(initial_letter('A', names))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
