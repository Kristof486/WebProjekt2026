document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("carForm");
  if (form) buildForm(form);

  const results = document.getElementById("results");
  if (results) renderResults(results);

  const clearBtn = document.getElementById("clearResults");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (confirm("Biztosan törlöd az összes mentett érdeklődést?")) {
        localStorage.removeItem("autoNovaRequests");
        renderResults(results);
      }
    });
  }
});

function buildForm(form) {
  form.innerHTML = `
    <div class="row g-4">
      <div class="col-md-6">
        <label for="name" class="form-label">Név *</label>
        <input id="name" name="name" type="text" class="form-control" minlength="3" maxlength="60" required placeholder="Pl. Kovács Anna">
        <div class="invalid-feedback">A név legalább 3 karakter legyen.</div>
      </div>
      <div class="col-md-6">
        <label for="email" class="form-label">E-mail cím *</label>
        <input id="email" name="email" type="email" class="form-control" required placeholder="pelda@email.hu">
        <div class="invalid-feedback">Adj meg egy érvényes e-mail címet.</div>
      </div>
      <div class="col-md-6">
        <label for="phone" class="form-label">Telefonszám *</label>
        <input id="phone" name="phone" type="tel" class="form-control" pattern="^[+0-9 ()-]{8,20}$" required placeholder="+36 30 123 4567">
        <div class="invalid-feedback">Adj meg érvényes telefonszámot.</div>
      </div>
      <div class="col-md-6">
        <label for="type" class="form-label">Keresett autó típusa *</label>
        <select id="type" name="type" class="form-select" required>
          <option value="">Válassz kategóriát...</option>
          <option>Városi kisautó</option><option>Kompakt</option><option>Szedán</option>
          <option>Kombi</option><option>SUV</option><option>Sportautó</option><option>Egyéb</option>
        </select>
        <div class="invalid-feedback">Válassz egy kategóriát.</div>
      </div>
      <div class="col-md-6">
        <label for="budget" class="form-label">Maximális keret (Ft) *</label>
        <input id="budget" name="budget" type="number" class="form-control" min="500000" max="100000000" step="100000" required placeholder="10000000">
        <div class="invalid-feedback">500 000 és 100 000 000 Ft közötti értéket adj meg.</div>
      </div>
      <div class="col-md-6">
        <label for="date" class="form-label">Tervezett vásárlás dátuma *</label>
        <input id="date" name="date" type="date" class="form-control" required>
        <div class="invalid-feedback">Adj meg egy jövőbeli dátumot.</div>
      </div>
      <div class="col-12">
        <label for="message" class="form-label">Megjegyzés</label>
        <textarea id="message" name="message" class="form-control" rows="4" maxlength="500" placeholder="Pl. benzines, automata váltó, családi autó..."></textarea>
        <div class="form-text"><span id="charCount">0</span>/500 karakter</div>
      </div>
      <div class="col-12">
        <div class="form-check">
          <input id="privacy" name="privacy" type="checkbox" class="form-check-input" required>
          <label for="privacy" class="form-check-label">Elfogadom az adatkezelési feltételeket. *</label>
          <div class="invalid-feedback">A feltétel elfogadása szükséges.</div>
        </div>
      </div>
      <div class="col-12 d-flex flex-wrap gap-3 align-items-center">
        <button class="btn btn-primary btn-lg" type="submit">Érdeklődés elküldése</button>
        <a class="btn btn-outline-secondary btn-lg" href="eredmenyek.html">Beküldések megtekintése</a>
      </div>
    </div>`;

  const dateInput = document.getElementById("date");
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  dateInput.min = tomorrow.toISOString().split("T")[0];

  const message = document.getElementById("message");
  message.addEventListener("input", () => {
    document.getElementById("charCount").textContent = message.value.length;
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    data.savedAt = new Date().toLocaleString("hu-HU");
    data.budget = Number(data.budget).toLocaleString("hu-HU") + " Ft";

    const requests = JSON.parse(localStorage.getItem("autoNovaRequests") || "[]");
    requests.push(data);
    localStorage.setItem("autoNovaRequests", JSON.stringify(requests));

    const box = document.getElementById("formMessage");
    box.className = "alert alert-success mt-3";
    box.textContent = "Sikeres beküldés! Az érdeklődésedet elmentettük. Az eredmények oldalon megtekinthető.";
    form.reset();
    document.getElementById("charCount").textContent = "0";
    form.classList.remove("was-validated");
    window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"});
  });
}

function renderResults(container) {
  const requests = JSON.parse(localStorage.getItem("autoNovaRequests") || "[]");
  if (!requests.length) {
    container.innerHTML = `<div class="empty-state"><div>📭</div><h2>Még nincs beküldött érdeklődés.</h2><p>Az űrlap kitöltése után az eredmény itt jelenik meg.</p></div>`;
    return;
  }

  container.innerHTML = `
    <div class="result-count">${requests.length} db érdeklődés</div>
    <div class="results-grid">
      ${requests.map((r, i) => `
        <article class="result-card">
          <div class="result-number">#${i + 1}</div>
          <h2>${escapeHTML(r.name)}</h2>
          <p><strong>E-mail:</strong> ${escapeHTML(r.email)}</p>
          <p><strong>Telefon:</strong> ${escapeHTML(r.phone)}</p>
          <p><strong>Autótípus:</strong> ${escapeHTML(r.type)}</p>
          <p><strong>Keret:</strong> ${escapeHTML(r.budget)}</p>
          <p><strong>Vásárlás:</strong> ${escapeHTML(r.date)}</p>
          <p><strong>Megjegyzés:</strong> ${escapeHTML(r.message || "–")}</p>
          <small>Beküldve: ${escapeHTML(r.savedAt)}</small>
        </article>`).join("")}
    </div>`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[char]));
}