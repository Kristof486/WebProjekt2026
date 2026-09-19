const parameterek = new URLSearchParams(window.location.search);

const nev = parameterek.get("name");
const email = parameterek.get("email");
const evjarat = parameterek.get("evjarat");
const budget = parameterek.get("budget");
const marka=parameterek.get("marka")

console.log(nev);
console.log(email);
console.log(evjarat);
console.log(budget);

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