/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ['Anna', 'Luca', 'Marco', 'Adele', 'Giovanni', 'Alessandra']
let initial_name = []
// Dichiara la funzione qui.
function initial_letter(names) {
	for (let i = 0; i < names.length; i++) {
		initial_name.push(names[i].charAt(0))
	}
	return console.log(initial_name)
}

// Invoca la funzione qui e stampa il risultato in console
initial_letter(names)

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
