const byId = (id) => document.getElementById(id);
const uzemanyag = document.querySelectorAll("input[name='uzemanyag']");

const divNemElektromos = byId("nemelektromos");
const divElektromos = byId("elektromosoknak");
const selectEvjarat = byId("evjarat");
const budget = byId("budget");
const datum = byId("date");
const uzenet = document.getElementById("message");
const KarakterHosszusag = document.getElementById("charCount");

// Évjárat
const alapOpcio = document.createElement("option");
alapOpcio.value = "";
alapOpcio.textContent = "Válassz évjáratot...";
selectEvjarat.appendChild(alapOpcio);

for (let i = 2026; i >= 1986; i--) {
  const opcio = document.createElement("option");
  opcio.value = i;
  opcio.textContent = i;
  selectEvjarat.appendChild(opcio);
}

divNemElektromos.classList.add("rejtett"); //CSS kell hozzá
divElektromos.classList.add("rejtett");


uzemanyag.forEach(gomb => {
  gomb.addEventListener("change", () => {
    const elektromos = gomb.value === "elektromos";
    divNemElektromos.classList.toggle("rejtett", elektromos)
    divElektromos.classList.toggle("rejtett", !elektromos)
  });
});


const keret = Number(budget.value);

if (
  budget.value !== "" &&
  (keret < 500000 || keret > 50000000)) {
  budget.classList.add();
  helyes = false;
}
else {
  budget.classList.remove();
}

function datumBeallitasa() {
  const ma = new Date();
  let ev = ma.getFullYear();
  let honap = ma.getMonth() + 1;
  let nap = ma.getDate();

  if (honap < 10) {
    honap = "0" + honap;
  }

  if (nap < 10) {
    nap = "0" + nap;
  }
  datum.min = ev + "-" + honap + "-" + nap; //Ez úgy működik, hogy a mai naptól tudod csak leadni a rendelést.

  //maxdátum
  const maxDatum = new Date();
  maxDatum.setFullYear(maxDatum.getFullYear() + 1);

  let maxEv = maxDatum.getFullYear();
  let maxHonap = maxDatum.getMonth() + 1;
  let maxNap = maxDatum.getDate();

  if (maxHonap < 10) {
    maxHonap = "0" + maxHonap;
  }

  if (maxNap < 10) {
    maxNap = "0" + maxNap;
  }

  datum.max = maxEv + "-" + maxHonap + "-" + maxNap;

}
datumBeallitasa();

// Karakterhosszúság
uzenet.addEventListener("input", function () {
  KarakterHosszusag.textContent = uzenet.value.length;
});


