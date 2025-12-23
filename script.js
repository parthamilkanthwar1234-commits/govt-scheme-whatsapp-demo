const chat = document.getElementById("chat");
let LANG = "en"; // en | hi | mr

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
  else addBot(getText("typeMenu"));
}

/* ---------------- LANGUAGE SELECTION ---------------- */

function selectLang(l) {
  LANG = l;
  addUser(l === "en" ? "English" : l === "hi" ? "Hindi" : "Marathi");
  showCategories();
}

function getText(key) {
  const T = {
    typeMenu: {
      en: "❓ Please type <b>Menu</b> or use buttons.",
      hi: "❓ कृपया <b>Menu</b> टाइप करें या बटन चुनें।",
      mr: "❓ कृपया <b>Menu</b> टाइप करा किंवा बटण वापरा."
    }
  };
  return T[key][LANG];
}

/* ---------------- START ---------------- */

addBot(`
🌐 Select Language:
<div class="btn-group">
  <button onclick="selectLang('en')">English</button>
  <button onclick="selectLang('hi')">हिंदी</button>
  <button onclick="selectLang('mr')">मराठी</button>
</div>
`);

/* ---------------- CATEGORIES ---------------- */

function showCategories() {
  const C = {
    en: "📂 Select Category:",
    hi: "📂 श्रेणी चुनें:",
    mr: "📂 योजना निवडा:"
  };

  addBot(`
${C[LANG]}
<div class="btn-group">
  <button onclick="category('women')">👩 Women</button>
  <button onclick="category('agri')">🌾 Agriculture</button>
  <button onclick="category('edu')">🎓 Education</button>
  <button onclick="category('health')">🏥 Health</button>
  <button onclick="category('emp')">💼 Employment</button>
</div>
`);
}

/* ---------------- SCHEME LIST ---------------- */

function category(cat) {
  addUser(cat);

  if (cat === "women") {
    addBot(`
<div class="btn-group">
  <button onclick="scheme('ladli')">Ladki Bahin Yojana</button>
</div>
`);
  }

  if (cat === "agri") {
    addBot(`
<div class="btn-group">
  <button onclick="scheme('pmkisan')">PM-KISAN</button>
</div>
`);
  }

  if (cat === "health") {
    addBot(`
<div class="btn-group">
  <button onclick="scheme('ayushman')">Ayushman Bharat</button>
</div>
`);
  }

  if (cat === "edu") {
    addBot(`
<div class="btn-group">
  <button onclick="scheme('scholar')">National Scholarship Portal</button>
</div>
`);
  }

  if (cat === "emp") {
    addBot(`
<div class="btn-group">
  <button onclick="scheme('mudra')">PM Mudra Yojana</button>
</div>
`);
  }
}

/* ---------------- SCHEME DETAILS ---------------- */

function scheme(id) {
  addUser(id);

  const data = {
    ladli: {
      mr: `
<b>👩‍🦰 मुख्यमंत्री माझी लाडकी बहीण योजना</b><br><br>
<b>✅ पात्रता निकष</b><br>
• 21 ते 60 वयोगटातील महिला<br>
• वार्षिक उत्पन्न ₹2.5 लाखांपेक्षा कमी<br>
• महाराष्ट्र रहिवासी<br>
• पिवळे/केशरी रेशन कार्ड<br><br>

<b>📄 आवश्यक कागदपत्रे</b><br>
• आधार कार्ड<br>
• रेशन कार्ड<br>
• बँक खाते<br>
• उत्पन्न प्रमाणपत्र<br>
• निवास प्रमाणपत्र<br><br>

<b>💰 फायदे</b><br>
• ₹1500 दरमहा थेट खात्यात<br><br>

<b>🌐 वेबसाइट</b><br>
<a href="https://ladlibahna.mahait.org" target="_blank">ladlibahna.mahait.org</a>
`,
      hi: `
<b>👩‍🦰 मुख्यमंत्री माझी लाडकी बहन योजना</b><br><br>
<b>✅ पात्रता</b><br>
• 21–60 वर्ष की महिलाएं<br>
• आय ₹2.5 लाख से कम<br>
• महाराष्ट्र निवासी<br><br>

<b>💰 लाभ</b><br>
• ₹1500 प्रति माह<br><br>

<b>🌐 वेबसाइट</b><br>
<a href="https://ladlibahna.mahait.org" target="_blank">ladlibahna.mahait.org</a>
`,
      en: `
<b>👩‍🦰 Ladki Bahin Yojana</b><br><br>
<b>Eligibility</b><br>
• Women aged 21–60<br>
• Annual income below ₹2.5 lakh<br>
• Maharashtra resident<br><br>

<b>Benefits</b><br>
• ₹1500 per month<br><br>

<b>Website</b><br>
<a href="https://ladlibahna.mahait.org" target="_blank">ladlibahna.mahait.org</a>
`
    },

    pmkisan: {
      en: `<b>PM-KISAN</b><br>₹6000/year support to farmers<br><a href="https://pmkisan.gov.in" target="_blank">pmkisan.gov.in</a>`,
      hi: `<b>पीएम किसान</b><br>किसानों को ₹6000/वर्ष<br><a href="https://pmkisan.gov.in" target="_blank">pmkisan.gov.in</a>`,
      mr: `<b>पीएम किसान</b><br>शेतकऱ्यांना ₹6000/वर्ष<br><a href="https://pmkisan.gov.in" target="_blank">pmkisan.gov.in</a>`
    },

    ayushman: {
      en: `<b>Ayushman Bharat</b><br>₹5 lakh health cover<br><a href="https://pmjay.gov.in" target="_blank">pmjay.gov.in</a>`,
      hi: `<b>आयुष्मान भारत</b><br>₹5 लाख स्वास्थ्य बीमा<br><a href="https://pmjay.gov.in" target="_blank">pmjay.gov.in</a>`,
      mr: `<b>आयुष्मान भारत</b><br>₹5 लाख आरोग्य विमा<br><a href="https://pmjay.gov.in" target="_blank">pmjay.gov.in</a>`
    },

    scholar: {
      en: `<b>National Scholarship Portal</b><br>Multiple scholarships<br><a href="https://scholarships.gov.in" target="_blank">scholarships.gov.in</a>`,
      hi: `<b>राष्ट्रीय छात्रवृत्ति पोर्टल</b><br><a href="https://scholarships.gov.in" target="_blank">scholarships.gov.in</a>`,
      mr: `<b>राष्ट्रीय शिष्यवृत्ती पोर्टल</b><br><a href="https://scholarships.gov.in" target="_blank">scholarships.gov.in</a>`
    },

    mudra: {
      en: `<b>PM Mudra Yojana</b><br>Loan for small businesses<br><a href="https://www.mudra.org.in" target="_blank">mudra.org.in</a>`,
      hi: `<b>पीएम मुद्रा योजना</b><br>व्यवसाय ऋण<br><a href="https://www.mudra.org.in" target="_blank">mudra.org.in</a>`,
      mr: `<b>पीएम मुद्रा योजना</b><br>व्यवसाय कर्ज<br><a href="https://www.mudra.org.in" target="_blank">mudra.org.in</a>`
    }
  };

  addBot(`
${data[id][LANG]}<br><br>
<button class="action-btn" onclick="showCategories()">⬅ Back</button>
<button class="action-btn" onclick="showCategories()">🏠 Menu</button>
`);
}
