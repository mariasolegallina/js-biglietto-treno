// # Calcolare il costo del biglietto del treno

// - chiedere all'utente il numero di km da percorrere
let kmDaPercorrere = prompt ("Quanti chilometri devi percorrere?");
console.log(kmDaPercorrere);
// - eseguire un controllo sul formato dell'input utente (deve essere un numero)
if (isNaN(kmDaPercorrere)) {
    console.log('Lunghezza del viaggio non valida')
}
// - chiedere all'utente l'età
const eta = prompt ("Quanti anni hai?");
console.log(eta);
// - eseguire un controllo sul formato dell'input utente (deve essere un numero)
if (isNaN(eta)) {
    console.log("L'età non è un numero")
}

// - calcolare il prezzo del biglietto:
//     - moltiplicare il costo chilometrico per il numero di km da percorrere

 let costoBiglietto;
 costoBiglietto = kmDaPercorrere * 0.21;
 console.log(costoBiglietto);



//     - appplicare uno sconto:
//         - SE l'utente ha meno di 18 anni
//             - sottrarre il 20% al costo del biglietto
if (eta < 18) {
 scontoGiovani = costoBiglietto * 0.2;
 console.log(scontoGiovani);
 costoGiovani = costoBiglietto - scontoGiovani;
 console.log(costoGiovani);

 //         - ALTRIMENTI SE l'utente ha più di 65 anni
//             - sottrarre il 40% al costo del biglietto
} else if (eta > 65) {
 scontoAnziani = costoBiglietto * 0.4;
 console.log(scontoAnziani);
 costoAnziani = costoBiglietto - scontoAnziani;
 console.log(costoAnziani);
 //         - ALTRIMENTI
//             - non applicare nessuno sconto
} else {
 console.log(costoBiglietto);
}
