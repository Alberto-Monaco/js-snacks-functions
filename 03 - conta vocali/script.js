/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript'
let vocali_array = []
// Dichiara la funzione qui.
function conta_vocali(word) {
	let vocali = 0

	let word_divise = word.split('')
	console.log(word_divise)

	for (let i = 0; i < word.length; i++) {
		if (
			word_divise[i] == 'a' ||
			word_divise[i] == 'e' ||
			word_divise[i] == 'i' ||
			word_divise[i] == 'o' ||
			word_divise[i] == 'u'
		) {
			vocali += 1
			vocali_array.push(word_divise[i])
		}
	}
	vocali_array.join(' , ')
	return console.log(`${vocali} (${vocali_array.join(', ')})`)
}

// Invoca la funzione qui e stampa il risultato in console
conta_vocali(word)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
