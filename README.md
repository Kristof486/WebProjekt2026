# AutoNova – Komplex JavaScript weboldal projekt

## A projekt célja
Az oldal egy autókereskedői weboldal, amely a projektleírásban szereplő két fő részt valósítja meg:
1. témát leíró, portfólió jellegű főoldal;
2. JavaScript segítségével dinamikusan létrehozott űrlap és külön eredményoldal.

## Fájlok
- `index.html` – főoldal, navigáció, carousel, szolgáltatások, vélemények, elérhetőség, lábléc
- `urlap.html` – üres HTML oldal, amelyhez az űrlapot JavaScript tölti be onloadkor
- `eredmenyek.html` – az elküldött űrlapadatok külön oldalon
- `style.css` – egyedi CSS, Flexbox/Grid, transition és animation
- `script.js` – dinamikus űrlap, validáció, localStorage, eredménymegjelenítés

## Használat
Az `index.html` megnyitásával indul az oldal. Az űrlap adatai a böngésző `localStorage` tárhelyén tárolódnak, ezért a külön eredményoldalon ugyanabban a böngészőben jelennek meg.

## A projektleírás követelményeinek megfelelése
- HTML + CSS + Bootstrap: igen
- Flexbox/Grid: igen
- CSS animation/transition: igen
- menüsáv és anchor linkek: igen
- Bootstrap carousel: igen, 3 kiemelt autóval
- Bootstrap card alapú szolgáltatások és vélemények: igen
- elérhetőség rész: igen
- lábléc: igen
- minimum 5 dinamikus űrlapelem: igen, több mint 5
- JavaScript onload/domhReady dinamikus űrlap: igen
- validáció: kötelező mezők, e-mail, telefonszám, dátum min, összeg min/max, karakterszám
- külön eredményoldal: igen
