const chat = document.getElementById("chat");

function addBot(msg) {
  chat.innerHTML += `<div class="msg bot">${msg}</div>`;
  chat.scrollTop = chat.scrollHeight;
}

function addUser(msg) {
  chat.innerHTML += `<div class="msg user">${msg}</div>`;
  chat.scrollTop = chat.scrollHeight;
}

function lang(language) {
  addUser(language);
  addBot(`✅ Language selected: <b>${language}</b><br><br>
  Please select a category:
  <div class="btn-group">
    <button onclick="category('Education')">🎓 Education</button>
    <button onclick="category('Agriculture')">🌾 Agriculture</button>
    <button onclick="category('Women')">👩 Women</button>
    <button onclick="category('Senior')">👴 Senior Citizens</button>
    <button onclick="category('Employment')">💼 Employment</button>
  </div>`);
}

function category(cat) {
  addUser(cat);

  if (cat === "Education") {
    addBot(`🎓 Education Schemes:
    <div class="btn-group">
      <button onclick="scheme('Scholarship Scheme')">Scholarship Scheme</button>
      <button onclick="scheme('Free Laptop Scheme')">Free Laptop Scheme</button>
      <button onclick="scheme('Skill Development Program')">Skill Development Program</button>
    </div>`);
  }

  if (cat === "Agriculture") {
    addBot(`🌾 Agriculture Schemes:
    <div class="btn-group">
      <button onclick="scheme('PM Kisan Yojana')">PM Kisan Yojana</button>
      <button onclick="scheme('Crop Insurance Scheme')">Crop Insurance Scheme</button>
      <button onclick="scheme('Soil Health Card')">Soil Health Card</button>
    </div>`);
  }

  if (cat === "Women") {
    addBot(`👩 Women Schemes:
    <div class="btn-group">
      <button onclick="scheme('Ujjwala Yojana')">Ujjwala Yojana</button>
      <button onclick="scheme('Beti Bachao Beti Padhao')">Beti Bachao Beti Padhao</button>
      <button onclick="scheme('Mahila Shakti Kendra')">Mahila Shakti Kendra</button>
    </div>`);
  }

  if (cat === "Senior") {
    addBot(`👴 Senior Citizen Schemes:
    <div class="btn-group">
      <button onclick="scheme('Atal Pension Yojana')">Atal Pension Yojana</button>
      <button onclick="scheme('Senior Health Insurance')">Senior Health Insurance</button>
    </div>`);
  }

  if (cat === "Employment") {
    addBot(`💼 Employment Schemes:
    <div class="btn-group">
      <button onclick="scheme('PM Mudra Loan')">PM Mudra Loan</button>
      <button onclick="scheme('Rozgar Yojana')">Rozgar Yojana</button>
    </div>`);
  }
}

function scheme(name) {
  addUser(name);

  addBot(`📌 <b>${name}</b><br>
  ✅ Eligibility: As per government norms<br>
  ✅ Benefits: Financial / Social support<br>
  ✅ Documents: Aadhaar, Relevant Certificates<br><br>
  Type <b>Menu</b> to go back<br>
  Type <b>Exit</b> to end chat`);
}
