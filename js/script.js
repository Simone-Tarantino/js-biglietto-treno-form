// bottone genera
var genera = document.getElementById('genera-id');
genera.addEventListener('click',
  function() {
    // nome
    var nameInput = document.getElementById('name-id');
    var name = nameInput.value;

    // km da percorrere
    var kmInput = document.getElementById('km-id');
    var km = parseInt(kmInput.value);

    // calcolo prezzo biglietto pieno
    var prezzoBigliettoSingoloKm = 0.21;
    var prezzoBigliettoViaggioCompleto = km * prezzoBigliettoSingoloKm;

    // calcolo carrozza
    var carrozza = Math.floor(Math.random() * 9) + 1;

    // calcolo cp
    var cp = Math.floor(Math.random() * (100000 - 90000 + 1) ) + 90000;

    // mosta su html
    document.getElementById('ticket-div-id').classList.remove('hidden');

    document.getElementById('nome-passeggero-id').innerHTML = name;
    document.getElementById('offerta-id').innerHTML = "Tariffa standard";
    document.getElementById('carrozza-id').innerHTML = carrozza;
    document.getElementById('cp-id').innerHTML = cp;
    document.getElementById('costo-biglietto-id').innerHTML = prezzoBigliettoViaggioCompleto.toFixed(2);
    // fascia età sconto
    var ageInput = document.getElementById('age-id');
    var age = ageInput.value;

    // condizione sconto
    if (age == 'minorenne') {
      var scontoPercentuale = (prezzoBigliettoViaggioCompleto * 20) / 100;
      var prezzoBiglietto = prezzoBigliettoViaggioCompleto - scontoPercentuale;
      document.getElementById('offerta-id').innerHTML = "Sconto minorenni";
      document.getElementById('costo-biglietto-id').innerHTML = prezzoBiglietto.toFixed(2);
    } else if (age == 'over65') {
      var scontoPercentuale = (prezzoBigliettoViaggioCompleto * 40) / 100;
      var prezzoBiglietto = prezzoBigliettoViaggioCompleto - scontoPercentuale;
      document.getElementById('offerta-id').innerHTML = "Sconto Over 65";
      document.getElementById('costo-biglietto-id').innerHTML = prezzoBiglietto.toFixed(2);
    }
  }
);

var annulla = document.getElementById('annulla-id');
annulla.addEventListener('click',
  function() {
    document.getElementById('ticket-div-id').classList.add('hidden');
  }
);


// // chiedo al passeggero quanti km devo percorrere
// var kmDaPercorrere = parseInt(prompt('Quanti km devi percorrere?'));
// // chiedo al passeggero la sua età
// var etaPasseggero = parseInt(prompt('Quanti anni hai?'));
// // stabilisco variabile del costo per km
// var prezzoBigliettoSingoloKm = 0.21;
// // calcolo prezzo del biglietto completo moltiplicando i km per il prezzo del singolo km
// var  = prezzoBigliettoSingoloKm * kmDaPercorrere;
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
