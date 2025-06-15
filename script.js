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
// Mood response logic
function checkMood() {
  const mood = document.getElementById("moodSelector").value;
  const response = {
    happy: "That's wonderful! Keep shining 🌞",
    sad: "It's okay to feel sad. You're not alone 💙",
    anxious: "Take a deep breath. You're safe. 🌿",
    calm: "Stay present. Peace looks good on you 🌸",
    angry: "Take a moment. Breathe and release it 🔥"
  };

  document.getElementById("moodResponse").innerText = response[mood] || "";
}

// Meditation music (Pixabay link)
let meditationAudio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/11/audio_b92cbf1a1d.mp3?filename=calm-meditation-11299.mp3");
meditationAudio.loop = true;

function startMeditation() {
  meditationAudio.play();
}

function stopMeditation() {
  meditationAudio.pause();
  meditationAudio.currentTime = 0;
}

// Breathing cycle - endless until stopped
let breathingInterval;

function startBreathing() {
  clearInterval(breathingInterval); // Stop if already running

  const steps = ["Breathe in... 🫁", "Hold... ⏸️", "Breathe out... 🌬️"];
  let index = 0;

  breathingInterval = setInterval(() => {
    alert(steps[index]);
    index = (index + 1) % steps.length;
  }, 4000);
}

function stopBreathing() {
  clearInterval(breathingInterval);
  }
