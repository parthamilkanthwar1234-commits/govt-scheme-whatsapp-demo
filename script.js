const chat = document.getElementById("chat");

function addBot(msg) {
  chat.innerHTML += `<div class="msg bot">${msg}</div>`;
  chat.scrollTop = chat.scrollHeight;
}

function addUser(msg) {
  chat.innerHTML += `<div class="msg user">${msg}</div>`;
  chat.scrollTop = chat.scrollHeight;
}

function handleKey(e) {
  if (e.key === "Enter") sendText();
}

function sendText() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;
  addUser(text);
  input.value = "";
  if (text.toLowerCase() === "menu") showCategories();
  else addBot("❓ Please type <b>Menu</b> or use buttons below.");
}

function showCategories() {
  addBot(`📂 Select Category:
  <div class="btn-group">
    <button onclick="category('Education')">🎓 Education</button>
    <button onclick="category('Agriculture')">🌾 Agriculture</button>
    <button onclick="category('Housing')">🏠 Housing</button>
    <button onclick="category('Health')">🏥 Health</button>
    <button onclick="category('Women')">👩 Women</button>
    <button onclick="category('Employment')">💼 Employment</button>
  </div>`);
}

function category(cat) {
  addUser(cat);

  const schemes = {
    Education: [
      ["National Scholarship Portal", 
      "Central portal for multiple scholarships for students.",
      "https://scholarships.gov.in"]
    ],
    Agriculture: [
      ["PM-KISAN", 
      "Provides ₹6000 per year income support to eligible farmers.",
      "https://pmkisan.gov.in"],
      ["PM Fasal Bima Yojana", 
      "Crop insurance scheme protecting farmers from crop loss.",
      "https://pmfby.gov.in"]
    ],
    Housing: [
      ["Pradhan Mantri Awas Yojana (PMAY)", 
      "Affordable housing for urban and rural poor.",
      "https://pmaymis.gov.in"]
    ],
    Health: [
      ["Ayushman Bharat (PM-JAY)", 
      "Health insurance cover up to ₹5 lakh per family per year.",
      "https://pmjay.gov.in"]
    ],
    Women: [
      ["Beti Bachao Beti Padhao", 
      "Promotes education and welfare of the girl child.",
      "https://wcd.gov.in/bbbp-scheme"],
      ["Ujjwala Yojana", 
      "Provides free LPG connections to women from poor households.",
      "https://www.pmuy.gov.in"]
    ],
    Employment: [
      ["PM Mudra Yojana", 
      "Provides loans to small and micro businesses.",
      "https://www.mudra.org.in"],
      ["Skill India / PMKVY", 
      "Skill training and certification for youth.",
      "https://www.pmkvyofficial.org"]
    ]
  };

  let html = "";
  schemes[cat].forEach(s => {
    html += `<div class="msg bot">
      <b>${s[0]}</b><br>
      ${s[1]}<br>
      🔗 <a href="${s[2]}" target="_blank">${s[2]}</a><br><br>
      <button class="action-btn" onclick="showCategories()">⬅ Back</button>
    </div>`;
  });
  chat.innerHTML += html;
  chat.scrollTop = chat.scrollHeight;
}

showCategories();
