//JavaScript koji se odnosi na formu za prijavu

var program = localStorage.getItem("program") //U okviru scripta na stranicama grupni.html i individualni.html funckcijom saveProgram, u memoriju upisujemo naziv programa koji je odabran i sliku koja je povezana sa tim programom
var slika = localStorage.getItem("slika");      //Pomoću getItem-a postavljamo promenljive program i slika na vrednosti koje smo sačuvali preko setItem-a
picture.src = slika; //slika čiji je id=picture uzima src slike koju smo memorisali
if (program == '1') {odabraniProgram.innerHTML = "Prijava za kondicioni trening";} //provera koji program je odabran i ispisivanje toga
if (program == '2') {odabraniProgram.innerHTML = "Prijava za jutarnji miks";}      //u okviru id-a odabraniProgram
if (program == '3') {odabraniProgram.innerHTML = "Prijava za pilates";}
if (program == '4') {odabraniProgram.innerHTML = "Prijava za boks";}
if (program == '5') {odabraniProgram.innerHTML = "Prijava za jogu";}
if (program == 'ind') {odabraniProgram.innerHTML = "Prijava za individualni trening"}

function prijava() { //ukoliko forma zadovoljava zahteva ispisane u okviru html fajla, pritiskom na dugme submit dobijamo sledeći ispis
        alert("Uspešno ste se prijavili, obavestićemo Vas o dostupnim terminima putem e-maila.");
        } 

//Jquery UI, koji postavlja poruke koje će korisnik videti kada kursorom pređe preko (u ovom slučaju) delova za input u formi
$( function() {
    $("#mail").tooltip
    {show: { effect: "shake" }}
    $("#broj").tooltip
    {show: { effect: "shake" }}
    $("#ime").tooltip
    {show: { effect: "shake" }}
    $("#prezime").tooltip
    {show: { effect: "shake" }}
    $("#termin").tooltip
    {show: { effect: "shake" }}
    } );
