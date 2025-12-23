const chat = document.getElementById("chat");

function addBot(msg) {
  chat.innerHTML += `<div class="msg bot">${msg}</div>`;
  chat.scrollTop = chat.scrollHeight;
}

function addUser(msg) {
  chat.innerHTML += `<div class="msg user">${msg}</div>`;
  chat.scrollTop = chat.scrollHeight;
}

/* ----------- INPUT HANDLING ----------- */
function handleKey(e) {
  if (e.key === "Enter") sendText();
}

function sendText() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (text === "") return;

  addUser(text);
  input.value = "";

  processText(text.toLowerCase());
}

/* ----------- BOT LOGIC ----------- */
function processText(msg) {
  if (msg === "menu") {
    showMenu();
  } else if (msg === "back") {
    showCategories();
  } else {
    addBot("❓ Please type <b>Menu</b> or <b>Back</b>");
  }
}

/* ----------- MENUS ----------- */
function showMenu() {
  addBot(`📋 Main Menu:
  <div class="btn-group">
    <button onclick="showCategories()">📂 Categories</button>
  </div>`);
}

function showCategories() {
  addBot(`Please select a category:
  <div class="btn-group">
    <button onclick="category('Education')">🎓 Education</button>
    <button onclick="category('Agriculture')">🌾 Agriculture</button>
    <button onclick="category('Women')">👩 Women</button>
    <button onclick="category('Senior')">👴 Senior Citizens</button>
    <button onclick="category('Employment')">💼 Employment</button>
  </div>`);
}

/* ----------- CATEGORY ----------- */
function category(cat) {
  addUser(cat);

  if (cat === "Education") {
    schemeList(["Scholarship Scheme", "Free Laptop Scheme", "Skill Development"]);
  } else if (cat === "Agriculture") {
    schemeList(["PM Kisan Yojana", "Crop Insurance", "Soil Health Card"]);
  } else if (cat === "Women") {
    schemeList(["Ujjwala Yojana", "Beti Bachao Beti Padhao"]);
  } else if (cat === "Senior") {
    schemeList(["Atal Pension Yojana"]);
  } else if (cat === "Employment") {
    schemeList(["PM Mudra Loan"]);
  }
}

function schemeList(list) {
  let html = `<div class="btn-group">`;
  list.forEach(s => {
    html += `<button onclick="scheme('${s}')">${s}</button>`;
  });
  html += `</div>`;
  addBot(html);
}

/* ----------- SCHEME ----------- */
function scheme(name) {
  addUser(name);
  addBot(`📌 <b>${name}</b><br>
  ✅ Eligibility: As per govt norms<br>
  ✅ Benefits: Financial / Social support<br>
  ✅ Documents: Aadhaar, Certificates<br><br>
  <button class="action-btn" onclick="showCategories()">⬅ Back</button>
  <button class="action-btn" onclick="showMenu()">🏠 Menu</button>`);
}

/* ----------- START ----------- */
showCategories();
