const parameterek = new URLSearchParams(window.location.search);


document.getElementById("eredmenyNev").textContent =
parameterek.get("name");

document.getElementById("eredmenyEmail").textContent =
parameterek.get("email");

document.getElementById("eredmenyTelefonszam").textContent =
parameterek.get("phone");

document.getElementById("eredmenyMarka").textContent =
parameterek.get("marka");

document.getElementById("eredmenyEvjarat").textContent =
parameterek.get("evjarat");

document.getElementById("eredmenyTipus").textContent =
parameterek.get("tipus");

document.getElementById("eredmenyBudget").textContent =
parameterek.get("budget");

document.getElementById("eredmenyDate").textContent =
parameterek.get("date");

document.getElementById("eredmenyMessage").textContent =
parameterek.get("message");

document.getElementById("eredmenyUzemanyag").textContent =
    parameterek.get("uzemanyag");

document.getElementById("eredmenyHenger").textContent =
    parameterek.get("nemelektromos");

document.getElementById("eredmenyAkku").textContent =
    parameterek.get("elektromosoknak");

function torles(){
document.getElementById("eredmenyNev").textContent =""
document.getElementById("eredmenyEmail").textContent =""
document.getElementById("eredmenyTelefonszam").textContent =""
document.getElementById("eredmenyMarka").textContent =""
document.getElementById("eredmenyEvjarat").textContent =""
document.getElementById("eredmenyTipus").textContent =""
document.getElementById("eredmenyBudget").textContent =""
document.getElementById("eredmenyDate").textContent =""
document.getElementById("eredmenyMessage").textContent =""
document.getElementById("eredmenyUzemanyag").textContent =""
document.getElementById("eredmenyHenger").textContent =""
document.getElementById("eredmenyAkku").textContent ="";

}