const byId = (id) => document.getElementById(id);
const uzemanyag = document.querySelectorAll("input[name='uzemanyag']");
const divNemElektromos = byId("nemelektromos");
const divElektromos = byId("elektromosoknak");
const selectEvjarat = byId("evjarat");
const budget = byId("budget");
const datum = byId("date");


const alapOpcio = document.createElement("option");
alapOpcio.value = "";
alapOpcio.textContent = "Válassz évjáratot...";
selectEvjarat.appendChild(alapOpcio);

for (let i = 2025; i >= 1995; i--) {
  const opcio = document.createElement("option");
  opcio.value = i;
  opcio.textContent = i;
  selectEvjarat.appendChild(opcio);
}

divNemElektromos.classList.add("rejtett"); //CSS kell hozzá
divElektromos.classList.add("rejtett");
divNemElektromos.classList.add("rejtett"); 
divElektromos.classList.add("rejtett");

for (let i = 0; i < uzemanyag.length; i++) {
  uzemanyag[i].addEventListener("change", function () {
    if (uzemanyag[i].checked) {
      if (uzemanyag[i].value === "elektromos") {
        divElektromos.classList.remove("rejtett");
        divNemElektromos.classList.add("rejtett");
      } else {
        divNemElektromos.classList.remove("rejtett");
        divElektromos.classList.add("rejtett");
      }
    }
  })
}

uzemanyag.forEach(gomb => {
    gomb.addEventListener("change", () => {
        const elektromos = gomb.value === "elektromos";
        divNemElektromos.classList.toggle("rejtett", elektromos)
        divElektromos.classList.toggle("rejtett", !elektromos) // Ezen kell dolgozni, az elektromos része nem működik
    });
});


const keret = Number(budget.value);

if (
    budget.value !== "" &&
    (keret < 500000 || keret > 50000000)
    )
    {
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

}
datumBeallitasa();



