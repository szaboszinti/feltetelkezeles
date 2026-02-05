//Egy beolvasott számról döntse el a program, hogy -30 és 40 között van-e!
let szam = parseFloat(prompt("Adj meg egy számot!"));
if (szam > -30 && szam < 40) {
    console.log("A szám -30 és 40 között van.");
}
else{
    console.log("A szám nincs -30 és 40 között.");
}

//---------------------------------------------------------
// Két beolvasott szám közül írassuk ki a nagyobbikat! Azt is írassuk ki, ha egyenlők!
let szam1  = parseFloat(prompt("Add meg az első számot: "))
let szam2  = parseFloat(prompt("Add meg az második számot: "))

if(szam1 > szam2){
    console.log(`A nagyobb szám ${szam1}`)
}
else if(szam2 > szam1){
    console.log(`A nagyobb szám ${szam2}`)

}
else{
    console.log(`A két szám egyenlő`)
}
//---------------------------------------------------------
// 3. Egy beolvasott X számnak írjuk ki az előjelét (pozitív, negatív vagy nulla)!

//---------------------------------------------------------
//4. Kérjünk be egy számot és döntsük el, hogy egész szám-e! Csak ebben az esetben írassuk
//ki!
let szam3 = parseFloat(prompt("Adj meg egy számot: "))
if(Number.isInteger(szam3)){
    console.log("A szám egész" + szam3)
}
//---------------------------------------------------------
// A program kérdezzen két számot, s utána írja ki a köztük lévő relációt. Például, ha a két
// szám 3 és -6.12, akkor az eredmény: 3 > -6.12.

//---------------------------------------------------------
// Írj programot, ami egy életkor alapján eldönti, hogy gyerek (0-6 év), iskolás (7-18),
// dolgozó (19-60), illetve nyugdíjas-e az illető!
let eletkor = parseInt(prompt("Add meg az életkorod: "))
if (eletkor >= 0 && eletkor <=6){
    console.log("Gyerek vagy")
}
else if(eletkor >= 7 && eletkor <=18){
    console.log("Iskolás vagy")
}
else if(eletkor >= 19 && eletkor <=60){
    console.log("dolgozó vagy")
}
else if(eletkor > 60){
    console.log("Nyugdíjjas")
}

//---------------------------------------------------------
// Fej vagy írás? A játék célja, hogy a játékos eltalálja, hogy a feldobott pénz fej vagy írás
// lesz. A játékos adjon tippet (fej, írás), majd a gép dobjon fel egy pénzérmét és írja ki,
// hogy a játékos nyert vagy vesztett.
let tipp = prompt("add meg tipped (fej/írás): ").toLowerCase(); 
let dobas = Math.random()
let dobasertek = ""

if(dobas < 0.5){
    dobasertek = "fej"
}
else{
    dobasertek = "iras"
}
if(tipp === dobasertek){
    console.log("Eltaláltad")
}
else{
    console.log("Nem találtad el")
}
//---------------------------------------------------------
// Adott egy pont, melynek bekérjük a koordinátáit. Határozzuk meg, melyik
// síknegyedben van!
let x = parseFloat(prompt("Add meg az x koordinátát: "))
let y = parseFloat(prompt("Add meg az y koordinátát: "))
if(x > 0 && y > 0){
    console.log("Az első síknegyedben van")
}
else if(x < 0 && y > 0){
    console.log("A második síknegyedben van")
}
else if(x < 0 && y < 0){
    console.log("A harmadik síknegyedben van")
}
else if(x > 0 && y < 0){
    console.log("A negyedik síknegyedben van")
}
