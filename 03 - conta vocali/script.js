/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript'

// Dichiara la funzione qui.
function conta_vocali(word) {
	let vocali = 0
	let vocali_array = []
	let word_divise = word.split('')
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
	return console.log(`${vocali} (${vocali_array.join(', ')})`)
}

// Invoca la funzione qui e stampa il risultato in console
conta_vocali(word)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
