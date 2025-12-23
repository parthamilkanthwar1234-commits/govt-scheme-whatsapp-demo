const chat = document.getElementById("chat");
let LANG = "en";

function addBot(m){
  chat.innerHTML += `<div class="msg">${m}</div>`;
  chat.scrollTop = chat.scrollHeight;
}

function addUser(m){
  chat.innerHTML += `<div class="msg user">${m}</div>`;
  chat.scrollTop = chat.scrollHeight;
}

function handleKey(e){
  if(e.key === "Enter") sendText();
}

function sendText(){
  let t = userInput.value.trim();
  if(!t) return;
  addUser(t);
  userInput.value = "";
  if(t.toLowerCase() === "menu") showCategories();
  else addBot("Type <b>Menu</b>");
}

/* ---------- Language Selection ---------- */
addBot(`
🌐 <b>Select Language / भाषा चुनें</b>
<div class="btn-group">
  <button onclick="setLang('en')">English</button>
  <button onclick="setLang('hi')">हिंदी</button>
  <button onclick="setLang('mr')">मराठी</button>
</div>
`);

function setLang(l){
  LANG = l;
  showCategories();
}

/* ---------- Categories ---------- */
function showCategories(){
  chat.innerHTML = "";
  addBot("📂 <b>Categories</b>");
  addBot(`
<div class="btn-group">
  <button onclick="category('women')">Women</button>
  <button onclick="category('agri')">Agriculture</button>
  <button onclick="category('edu')">Education</button>
  <button onclick="category('health')">Health</button>
  <button onclick="category('emp')">Employment</button>
</div>
`);
}

/* ---------- Category → Schemes ---------- */
function category(cat){
  chat.innerHTML = "";
  addBot(`📌 <b>${cat.toUpperCase()} Schemes</b>`);

  const lists = {
    women: ["ladli","ujjwala","bbbp","matru","sukanya"],
    agri: ["pmkisan","pmfby","soil","kcc","pmksy"],
    edu: ["scholar","pmkv","midday","diksha","swayam"],
    health: ["ayushman","jsy","poshan","tb","janaushadhi"],
    emp: ["mudra","mgnrega","skill","startup","ncs"]
  };

  let h = "<div class='btn-group'>";
  lists[cat].forEach(id=>{
    h += `<button onclick="scheme('${id}')">${DATA[id].name}</button>`;
  });
  h += "</div>";
  addBot(h);
}

/* ---------- Scheme Details ---------- */
function scheme(id){
  chat.innerHTML = "";
  const s = DATA[id][LANG];
  addBot(`
<b>${DATA[id].name}</b><br><br>
<b>Eligibility:</b><br>${s.eligibility}<br><br>
<b>Documents:</b><br>${s.documents}<br><br>
<b>Benefits:</b><br>${s.benefits}<br><br>
<a href="${DATA[id].link}" target="_blank">${DATA[id].link}</a><br><br>
<button onclick="showCategories()">Menu</button>
`);
}

/* ---------- DATA (5 schemes per category) ---------- */
const DATA = {

ladli:{
 name:"Ladli Bahin Yojana",
 link:"https://ladlibahna.mahait.org",
 en:{eligibility:"Women aged 21–60",documents:"Aadhaar, Ration Card",benefits:"₹1500 per month"},
 hi:{eligibility:"21–60 वर्ष की महिलाएं",documents:"आधार, राशन कार्ड",benefits:"₹1500 प्रति माह"},
 mr:{eligibility:"21–60 वयोगटातील महिला",documents:"आधार, रेशन कार्ड",benefits:"₹1500 दरमहा"}
},

ujjwala:{
 name:"Ujjwala Yojana",
 link:"https://pmuy.gov.in",
 en:{eligibility:"BPL women",documents:"Aadhaar, Ration Card",benefits:"Free LPG connection"},
 hi:{eligibility:"बीपीएल महिलाएं",documents:"आधार, राशन कार्ड",benefits:"मुफ्त गैस कनेक्शन"},
 mr:{eligibility:"बीपीएल महिला",documents:"आधार, रेशन कार्ड",benefits:"मोफत गॅस कनेक्शन"}
},

bbbp:{
 name:"Beti Bachao Beti Padhao",
 link:"https://wcd.gov.in",
 en:{eligibility:"Girl child families",documents:"Birth certificate",benefits:"Education awareness"},
 hi:{eligibility:"बालिका परिवार",documents:"जन्म प्रमाणपत्र",benefits:"शिक्षा प्रोत्साहन"},
 mr:{eligibility:"मुलींचे कुटुंब",documents:"जन्म प्रमाणपत्र",benefits:"शिक्षण प्रोत्साहन"}
},

matru:{
 name:"Matru Vandana",
 link:"https://wcd.nic.in",
 en:{eligibility:"Pregnant women",documents:"Aadhaar, Bank details",benefits:"₹5000 assistance"},
 hi:{eligibility:"गर्भवती महिलाएं",documents:"आधार, बैंक विवरण",benefits:"₹5000 सहायता"},
 mr:{eligibility:"गर्भवती महिला",documents:"आधार, बँक तपशील",benefits:"₹5000 मदत"}
},

sukanya:{
 name:"Sukanya Samriddhi",
 link:"https://www.india.gov.in",
 en:{eligibility:"Girl child below 10",documents:"Birth certificate",benefits:"High interest savings"},
 hi:{eligibility:"10 वर्ष से कम बालिका",documents:"जन्म प्रमाणपत्र",benefits:"उच्च ब्याज बचत"},
 mr:{eligibility:"10 वर्षाखालील मुलगी",documents:"जन्म प्रमाणपत्र",benefits:"उच्च व्याज बचत"}
},

/* ---- AGRICULTURE ---- */
pmkisan:{name:"PM-KISAN",link:"https://pmkisan.gov.in",
 en:{eligibility:"Small farmers",documents:"Land record",benefits:"₹6000 per year"},
 hi:{eligibility:"छोटे किसान",documents:"भूमि रिकॉर्ड",benefits:"₹6000 प्रति वर्ष"},
 mr:{eligibility:"लहान शेतकरी",documents:"7/12 उतारा",benefits:"₹6000 दरवर्षी"}},

pmfby:{name:"PM Fasal Bima",link:"https://pmfby.gov.in",
 en:{eligibility:"All farmers",documents:"Crop details",benefits:"Crop insurance"},
 hi:{eligibility:"सभी किसान",documents:"फसल विवरण",benefits:"फसल बीमा"},
 mr:{eligibility:"सर्व शेतकरी",documents:"पीक तपशील",benefits:"पीक विमा"}},

soil:{name:"Soil Health Card",link:"https://soilhealth.dac.gov.in",
 en:{eligibility:"Farmers",documents:"Land record",benefits:"Soil testing"},
 hi:{eligibility:"किसान",documents:"भूमि रिकॉर्ड",benefits:"मिट्टी जांच"},
 mr:{eligibility:"शेतकरी",documents:"जमीन उतारा",benefits:"माती तपासणी"}},

kcc:{name:"Kisan Credit Card",link:"https://pmkisan.gov.in",
 en:{eligibility:"Farmers",documents:"Aadhaar, Land proof",benefits:"Easy loans"},
 hi:{eligibility:"किसान",documents:"आधार, भूमि प्रमाण",benefits:"आसान ऋण"},
 mr:{eligibility:"शेतकरी",documents:"आधार, जमीन पुरावा",benefits:"सोपे कर्ज"}},

pmksy:{name:"PM Krishi Sinchai",link:"https://pmksy.gov.in",
 en:{eligibility:"Farmers",documents:"Land proof",benefits:"Irrigation support"},
 hi:{eligibility:"किसान",documents:"भूमि प्रमाण",benefits:"सिंचाई सहायता"},
 mr:{eligibility:"शेतकरी",documents:"जमीन पुरावा",benefits:"सिंचन मदत"}},

/* ---- EDUCATION ---- */
scholar:{name:"National Scholarship",link:"https://scholarships.gov.in",
 en:{eligibility:"Students",documents:"Bonafide certificate",benefits:"Scholarship"},
 hi:{eligibility:"छात्र",documents:"बोनाफाइड प्रमाणपत्र",benefits:"छात्रवृत्ति"},
 mr:{eligibility:"विद्यार्थी",documents:"बोनाफाईड प्रमाणपत्र",benefits:"शिष्यवृत्ती"}},

pmkv:{name:"PMKVY",link:"https://pmkvyofficial.org",
 en:{eligibility:"Youth",documents:"Aadhaar",benefits:"Skill training"},
 hi:{eligibility:"युवा",documents:"आधार",benefits:"कौशल प्रशिक्षण"},
 mr:{eligibility:"युवा",documents:"आधार",benefits:"कौशल्य प्रशिक्षण"}},

midday:{name:"Mid-Day Meal",link:"https://education.gov.in",
 en:{eligibility:"School students",documents:"School ID",benefits:"Free meals"},
 hi:{eligibility:"स्कूली छात्र",documents:"स्कूल आईडी",benefits:"मुफ्त भोजन"},
 mr:{eligibility:"शालेय विद्यार्थी",documents:"शाळा ओळखपत्र",benefits:"मोफत जेवण"}},

diksha:{name:"DIKSHA",link:"https://diksha.gov.in",
 en:{eligibility:"Teachers & students",documents:"Login ID",benefits:"Digital learning"},
 hi:{eligibility:"शिक्षक व छात्र",documents:"लॉगिन आईडी",benefits:"डिजिटल शिक्षा"},
 mr:{eligibility:"शिक्षक व विद्यार्थी",documents:"लॉगिन आयडी",benefits:"डिजिटल शिक्षण"}},

swayam:{name:"SWAYAM",link:"https://swayam.gov.in",
 en:{eligibility:"Anyone",documents:"Email ID",benefits:"Free courses"},
 hi:{eligibility:"कोई भी",documents:"ईमेल आईडी",benefits:"मुफ्त कोर्स"},
 mr:{eligibility:"कोणीही",documents:"ईमेल आयडी",benefits:"मोफत अभ्यासक्रम"}},

/* ---- HEALTH ---- */
ayushman:{name:"Ayushman Bharat",link:"https://pmjay.gov.in",
 en:{eligibility:"Poor families",documents:"Aadhaar",benefits:"₹5 lakh health cover"},
 hi:{eligibility:"गरीब परिवार",documents:"आधार",benefits:"₹5 लाख स्वास्थ्य बीमा"},
 mr:{eligibility:"गरिब कुटुंब",documents:"आधार",benefits:"₹5 लाख आरोग्य विमा"}},

jsy:{name:"Janani Suraksha",link:"https://nhm.gov.in",
 en:{eligibility:"Pregnant women",documents:"Aadhaar",benefits:"Safe delivery"},
 hi:{eligibility:"गर्भवती महिलाएं",documents:"आधार",benefits:"सुरक्षित प्रसव"},
 mr:{eligibility:"गर्भवती महिला",documents:"आधार",benefits:"सुरक्षित प्रसूती"}},

poshan:{name:"Poshan Abhiyaan",link:"https://poshanabhiyaan.gov.in",
 en:{eligibility:"Women & children",documents:"Aadhaar",benefits:"Nutrition support"},
 hi:{eligibility:"महिला व बच्चे",documents:"आधार",benefits:"पोषण सहायता"},
 mr:{eligibility:"महिला व मुले",documents:"आधार",benefits:"पोषण मदत"}},

tb:{name:"TB Elimination",link:"https://tbcindia.gov.in",
 en:{eligibility:"TB patients",documents:"Medical report",benefits:"Free treatment"},
 hi:{eligibility:"टीबी रोगी",documents:"मेडिकल रिपोर्ट",benefits:"मुफ्त इलाज"},
 mr:{eligibility:"टीबी रुग्ण",documents:"वैद्यकीय अहवाल",benefits:"मोफत उपचार"}},

janaushadhi:{name:"Jan Aushadhi",link:"https://janaushadhi.gov.in",
 en:{eligibility:"All citizens",documents:"Prescription",benefits:"Low-cost medicines"},
 hi:{eligibility:"सभी नागरिक",documents:"प्रिस्क्रिप्शन",benefits:"सस्ती दवाएं"},
 mr:{eligibility:"सर्व नागरिक",documents:"प्रिस्क्रिप्शन",benefits:"स्वस्त औषधे"}},

/* ---- EMPLOYMENT ---- */
mudra:{name:"PM Mudra",link:"https://mudra.org.in",
 en:{eligibility:"Small businesses",documents:"Business proof",benefits:"Loan up to ₹10L"},
 hi:{eligibility:"छोटे व्यवसाय",documents:"व्यवसाय प्रमाण",benefits:"₹10 लाख तक ऋण"},
 mr:{eligibility:"लघु व्यवसाय",documents:"व्यवसाय पुरावा",benefits:"₹10 लाख कर्ज"}},

mgnrega:{name:"MGNREGA",link:"https://nrega.nic.in",
 en:{eligibility:"Rural households",documents:"Job card",benefits:"100 days employment"},
 hi:{eligibility:"ग्रामीण परिवार",documents:"जॉब कार्ड",benefits:"100 दिन रोजगार"},
 mr:{eligibility:"ग्रामीण कुटुंब",documents:"जॉब कार्ड",benefits:"100 दिवस रोजगार"}},

skill:{name:"Skill India",link:"https://skillindia.gov.in",
 en:{eligibility:"Youth",documents:"Aadhaar",benefits:"Skill training"},
 hi:{eligibility:"युवा",documents:"आधार",benefits:"कौशल विकास"},
 mr:{eligibility:"युवा",documents:"आधार",benefits:"कौशल्य विकास"}},

startup:{name:"Startup India",link:"https://startupindia.gov.in",
 en:{eligibility:"Entrepreneurs",documents:"Business registration",benefits:"Startup support"},
 hi:{eligibility:"उद्यमी",documents:"व्यवसाय पंजीकरण",benefits:"स्टार्टअप सहायता"},
 mr:{eligibility:"उद्योजक",documents:"व्यवसाय नोंदणी",benefits:"स्टार्टअप मदत"}},

ncs:{name:"National Career Service",link:"https://ncs.gov.in",
 en:{eligibility:"Job seekers",documents:"Resume",benefits:"Job opportunities"},
 hi:{eligibility:"नौकरी चाहने वाले",documents:"रेज्यूमे",benefits:"रोजगार अवसर"},
 mr:{eligibility:"नोकरी शोधणारे",documents:"रेझ्युमे",benefits:"रोजगार संधी"}}

};
