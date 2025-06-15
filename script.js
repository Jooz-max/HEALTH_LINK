function showSection(id) {
  const allSections = ['mindful', 'journal', 'habits', 'checker', 'monitor'];

  allSections.forEach(section => {
    const el = document.getElementById(`${section}Section`);
    if (el) {
      el.style.display = section === id ? 'block' : 'none';
    }
  });

  document.getElementById("mainMenu").style.display = 'none';
}

function goHome() {
  const allSections = ['mindful', 'journal', 'habits', 'checker', 'monitor'];

  allSections.forEach(id => {
    const el = document.getElementById(`${id}Section`);
    if (el) el.style.display = 'none';
  });

  document.getElementById("mainMenu").style.display = 'block';
}

function startBreathing() {
  alert("Breathe in... Breathe out...");
}
