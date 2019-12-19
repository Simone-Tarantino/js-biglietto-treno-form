// Il programma dovrà chiedere all’utente il numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.

// // chiedo al passeggero quanti km devo percorrere
// var kmDaPercorrere = parseInt(prompt('Quanti km devi percorrere?'));
// // chiedo al passeggero la sua età
// var etaPasseggero = parseInt(prompt('Quanti anni hai?'));
// // stabilisco variabile del costo per km
// var prezzoBigliettoSingoloKm = 0.21;
// // calcolo prezzo del biglietto completo moltiplicando i km per il prezzo del singolo km
// var prezzoBigliettoViaggioCompleto = prezzoBigliettoSingoloKm * kmDaPercorrere;
// console.log(prezzoBigliettoViaggioCompleto);
// // condizione se il passeggero ha meno o uguale a 18 anni/ più di 65 anni o nessuna delle due
// if (etaPasseggero <= 18) {
//   var scontoPercentuale = (prezzoBigliettoViaggioCompleto * 20) / 100;
//   var prezzoBigliettoScontato = prezzoBigliettoViaggioCompleto - scontoPercentuale;
//   console.log(prezzoBigliettoScontato);
//   document.getElementById('prezzo-biglietto').innerHTML = "Ciao! Il prezzo del tuo biglietto è " + Math.round(prezzoBigliettoScontato) + "€. Hai usufruito dello sconto under 18 del 20% sul prezzo pieno del biglietto!";
// } else if (etaPasseggero >= 65) {
//   var scontoPercentuale = (prezzoBigliettoViaggioCompleto * 40) / 100;
//   var prezzoBigliettoScontato = prezzoBigliettoViaggioCompleto - scontoPercentuale;
//   console.log(prezzoBigliettoScontato);
//   document.getElementById('prezzo-biglietto').innerHTML = "Salve! Il prezzo del suo biglietto è " + Math.round(prezzoBigliettoScontato) + "€. Hai usufruito dello sconto under 65 del 40% sul prezzo pieno del biglietto!";
// } else {
//   console.log(prezzoBigliettoViaggioCompleto);
//   document.getElementById('prezzo-biglietto').innerHTML = "Ciao! Il prezzo del tuo biglietto è " + prezzoBigliettoViaggioCompleto + "€. Non ti è possibile utilizzare alcun tipo di sconto ci dispiace.";
// }
