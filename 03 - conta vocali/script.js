/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript'

// Dichiara la funzione qui.
function conta_vocali(word) {
	let vocali = 0
	let vocals = ['a', 'e', 'i', 'o', 'u']
	let vocali_array = []
	for (let i = 0; i < word.length; i++) {
		if (vocals.includes(word[i])) {
			vocali += 1
			vocali_array.push(word[i])
		}
	}
	return `${vocali} (${vocali_array.join(', ')})`
}

// Invoca la funzione qui e stampa il risultato in console
console.log(conta_vocali(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
