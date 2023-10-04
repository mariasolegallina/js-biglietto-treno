// # Calcolare il costo del biglietto del treno

// - chiedere all'utente il numero di km da percorrere
let kmDaPercorrere = prompt ("Quanti chilometri devi percorrere?");
console.log(kmDaPercorrere);

// - chiedere all'utente l'età
const eta = prompt ("Quanti anni hai?");
console.log(eta);

// - calcolare il prezzo del biglietto:
//     - moltiplicare il costo chilometrico per il numero di km da percorrere
let costoBiglietto;
costoBiglietto = kmDaPercorrere * 0.21;
console.log(costoBiglietto);

//     - appplicare uno sconto:
//         - SE l'utente ha meno di 18 anni
if (eta < 18) {
 scontoGiovani = costoBiglietto * 0.2;
 console.log(scontoGiovani);
 costoGiovani = costoBiglietto - scontoGiovani;
 console.log(costoGiovani);
} else if (eta > 60) {
 scontoAnziani = costoBiglietto * 0.4;
 console.log(scontoAnziani);
 costoAnziani = costoBiglietto - scontoAnziani;
 console.log(costoAnziani);
} else {
 console.log(costoBiglietto);
}
//             - sottrarre il 20% al costo del biglietto
//         - ALTRIMENTI SE l'utente ha più di 60 anni
//             - sottrarre il 40% al costo del biglietto
//         - ALTRIMENTI
//             - non applicare nessuno sconto


