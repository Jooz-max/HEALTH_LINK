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
const meditationAudio = document.getElementById('meditationAudio');
const meditationBtn = document.getElementById('meditationBtn');
const meditationEmoji = document.getElementById('meditationEmoji');
const meditationMessage = document.getElementById('meditationMessage');

const calmingMessages = [
  "Clear your mind and breathe deeply...",
  "Focus on the present moment...",
  "Let go of all your worries...",
  "Feel the calm wash over you...",
  "Relax your body and mind...",
  "Embrace the peaceful silence..."
];

function toggleMeditation() {
  if (meditationAudio.paused) {
    meditationAudio.play();
    meditationBtn.textContent = 'Pause Meditation';
    meditationEmoji.style.display = 'block';

    // Pick a random calming message
    const randomIndex = Math.floor(Math.random() * calmingMessages.length);
    meditationMessage.textContent = calmingMessages[randomIndex];
    meditationMessage.style.display = 'block';
  } else {
    meditationAudio.pause();
    meditationBtn.textContent = 'Start Meditation';
    meditationEmoji.style.display = 'none';
    meditationMessage.style.display = 'none';
  }
}

meditationAudio.onended = () => {
  meditationBtn.textContent = 'Start Meditation';
  meditationEmoji.style.display = 'none';
  meditationMessage.style.display = 'none';
};
// Optional: when the audio ends naturally, reset button and emoji
meditationAudio.onended = () => {
  meditationBtn.textContent = 'Start Meditation';
  meditationEmoji.style.display = 'none';
};

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
function startVoiceInput() {
  const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.start();

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    document.getElementById("symptomInput").value = transcript;
  };

  recognition.onerror = function(event) {
    alert("Voice input error: " + event.error);
  };
}
