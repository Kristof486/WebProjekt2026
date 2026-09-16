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

