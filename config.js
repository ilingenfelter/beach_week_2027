/**
 * =============================================
 *  BEACH WEEK CONFIGURATION
 *  Edit this file to customize your site!
 * =============================================
 */
const CONFIG = {

  // ── FAMILY & EVENT ───────────────────────────
  familyName: "",               // Set a family name, or leave blank for "Beach Week 2027"
  year: 2027,                    // Beach week year
  location: "Outer Banks, NC",   // Short location label

  dates: {
    start:    "July 10, 2027",   // Display format
    end:      "July 17, 2027",
    startISO: "2027-07-10",      // ISO format — used for countdown timer
    endISO:   "2027-07-17"
  },

  // ── HOUSE INFO ───────────────────────────────
  house: {
    name:     "Haven on the Banks",
    website:  "https://havenonthebanks.com/",
    address:  "115 East Dove Street\nNags Head, NC 27959",
    checkin:  "4:00 PM",
    checkout: "11:00 AM",
    wifi: {
      network:  "Coming Soon",
      password: "Coming Soon"
    },
    grocery:     "Food Lion — 5101 N Croatan Hwy, Kitty Hawk (3.2 mi north)",
    urgentCare:  "The Outer Banks Hospital\n4800 S Croatan Hwy, Nags Head (1.8 mi south)\nEmergency: 911 | Direct: (252) 449-4500"
  },

  // ── ADMIN PASSWORD ───────────────────────────
  // Change this before sharing the site!
  adminPassword: "beachweek2026",

  // ── WEATHER SETTINGS ─────────────────────────
  weather: {
    city:            "Nags Head",
    state:           "NC",
    wttrQuery:       "Nags+Head,NC",    // Used in wttr.in embed URL
    noaaStation:     "8651370",         // NOAA tide gauge station ID
    noaaStationName: "Nags Head, NC"
  },

  // ── INITIAL MEAL SCHEDULE ────────────────────
  // Edit these to set your dinner assignments
  initialMeals: [
    { day: "Saturday",  date: "Jul 10", family: "The Johnsons",  dish: "Welcome BBQ 🍔",      notes: "Burgers, hot dogs & potato salad — first night tradition!" },
    { day: "Sunday",    date: "Jul 11", family: "The Smiths",    dish: "Taco Night 🌮",        notes: "All the fixings, make your own" },
    { day: "Monday",    date: "Jul 12", family: "The Williams",  dish: "Seafood Pasta 🦐",     notes: "Fresh shrimp from the Wanchese docks" },
    { day: "Tuesday",   date: "Jul 13", family: "The Garcias",   dish: "Carolina BBQ 🐷",      notes: "Pulled pork, mac & cheese, collard greens" },
    { day: "Wednesday", date: "Jul 14", family: "The Millers",   dish: "Pizza Night 🍕",       notes: "Homemade dough — kids take over the kitchen!" },
    { day: "Thursday",  date: "Jul 15", family: "The Davises",   dish: "Fish Tacos 🐟",        notes: "Catch of the day (hopefully!) or market backup" },
    { day: "Friday",    date: "Jul 16", family: "The Wilsons",   dish: "Farewell Cookout 🎉",  notes: "Last night — everyone's favorites on the grill" }
  ],

  // ── INITIAL ACTIVITY PROPOSALS ───────────────
  initialActivities: [
    { id: "act1", name: "Mini Golf",       description: "18 holes of fierce competition — trophy goes to the winner!",    proposedBy: "The Kids",  signups: [] },
    { id: "act2", name: "Kayaking",        description: "Morning kayak trip through the sound — calm water, great birds.", proposedBy: "Uncle Bob", signups: [] },
    { id: "act3", name: "Sunset Cruise",   description: "2-hour dolphin watching & sunset cruise — book early!",          proposedBy: "Grandma",   signups: [] },
    { id: "act4", name: "Fishing Charter", description: "Deep sea fishing — half-day charter, bring the sunscreen.",       proposedBy: "Uncle Jim", signups: [] },
    { id: "act5", name: "Go-Karts",        description: "Racing at the Nags Head track — adults vs. kids bracket.",       proposedBy: "The Kids",  signups: [] },
    { id: "act6", name: "Beach Bonfire",   description: "Bonfire on the beach at night — s'mores, stories, stargazing.",  proposedBy: "Aunt Mary", signups: [] }
  ],

  // ── INITIAL UKULELE SONG LIST ─────────────────
  initialSongs: [
    { id: "uke1", title: "Somewhere Over the Rainbow", artist: "Israel Kamakawiwoʻole", chordsUrl: "", suggestedBy: "Beach Week HQ", votes: 0 },
    { id: "uke2", title: "Riptide",                    artist: "Vance Joy",             chordsUrl: "", suggestedBy: "Beach Week HQ", votes: 0 },
    { id: "uke3", title: "I'm Yours",                  artist: "Jason Mraz",            chordsUrl: "", suggestedBy: "Beach Week HQ", votes: 0 },
    { id: "uke4", title: "Banana Pancakes",            artist: "Jack Johnson",          chordsUrl: "", suggestedBy: "Beach Week HQ", votes: 0 },
    { id: "uke5", title: "Three Little Birds",         artist: "Bob Marley",            chordsUrl: "", suggestedBy: "Beach Week HQ", votes: 0 }
  ]

};

// =============================================
//  FORM TOGGLE UTILITIES  (don't edit below)
// =============================================

/**
 * Wire up a toggle button that shows/hides a collapsible section.
 * No password required — anyone can access all forms.
 */
function setupAdminTrigger(triggerId, formId, onUnlock) {
  const trigger = document.getElementById(triggerId);
  const form    = document.getElementById(formId);
  if (!trigger || !form) return;

  trigger.addEventListener('click', function () {
    const isHidden = form.classList.contains('hidden');
    form.classList.toggle('hidden');
    if (isHidden && onUnlock) onUnlock();
  });
}

// Returns "Family Beach Week 2027" or just "Beach Week 2027" if no family name set
function siteName() {
  return CONFIG.familyName ? `${CONFIG.familyName} Beach Week ${CONFIG.year}` : `Beach Week ${CONFIG.year}`;
}

// Shared nav helpers
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

function setActiveNav(filename) {
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === filename) link.classList.add('active');
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () =>
      document.getElementById('navLinks').classList.remove('open'));
  });
}

function setNavBrand() {
  const el = document.getElementById('navBrand');
  if (el) el.textContent = `🌊 ${siteName()}`;
}

function setFooter() {
  const el = document.getElementById('footerText');
  if (el) el.textContent = `🌊 ${siteName()} — Made with ❤️ for the whole crew`;
}

// =============================================
//  SITE PASSWORD
//  Change this to your family's chosen password
// =============================================
CONFIG.sitePassword = 'beachweek27';

// =============================================
//  FIREBASE CONFIG
//  Fill in after creating a free Firebase project.
//  Leave blank to run localStorage-only (no cross-device sync).
//
//  Setup steps:
//  1. Go to https://console.firebase.google.com and create a project
//  2. Click "Build" → "Realtime Database" → Create database → Start in test mode
//  3. Click the gear icon → Project settings → "Your apps" → </> (Web)
//  4. Register the app, then copy the firebaseConfig values below
//  5. In Realtime Database → Rules, set both ".read" and ".write" to true, then Publish
// =============================================
const FIREBASE_CONFIG = {
  apiKey:      'AIzaSyA8YGYvYJWG1YQ2lioTLfTVdVkfhqbg2bU',   // paste from Firebase console
  databaseURL: 'https://beach-week-2027-default-rtdb.firebaseio.com',   // e.g. https://your-project-default-rtdb.firebaseio.com
};

// ── Firebase internals (don't edit below) ────
let _fbReady = null;
let _fbdb    = null;

function _loadFirebase() {
  if (_fbReady) return _fbReady;
  _fbReady = new Promise(resolve => {
    if (!FIREBASE_CONFIG.apiKey || !FIREBASE_CONFIG.databaseURL) return resolve();
    if (typeof firebase !== 'undefined') { _initFbApp(); return resolve(); }
    let done = 0;
    const urls = [
      'https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js',
      'https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js',
    ];
    urls.forEach(src => {
      const s = document.createElement('script');
      s.src = src;
      s.onload  = () => { if (++done === urls.length) { _initFbApp(); resolve(); } };
      s.onerror = () => { if (++done === urls.length) resolve(); };
      document.head.appendChild(s);
    });
  });
  return _fbReady;
}

function _initFbApp() {
  try {
    if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
    _fbdb = firebase.database();
  } catch(e) { _fbdb = null; }
}

/** Read a path from Firebase. Returns null if not configured or unavailable. */
async function dbGet(path) {
  await _loadFirebase();
  if (!_fbdb) return null;
  try {
    const snap = await _fbdb.ref('beachweek/' + path).get();
    return snap.exists() ? snap.val() : null;
  } catch(e) { return null; }
}

/** Write a path to Firebase (fire-and-forget; localStorage is always written first). */
function dbSet(path, data) {
  _loadFirebase().then(() => {
    if (!_fbdb) return;
    _fbdb.ref('beachweek/' + path).set(data).catch(() => {});
  });
}

/**
 * Firebase Realtime Database converts JS arrays to objects with numeric keys
 * (e.g. ["a","b"] → {"0":"a","1":"b"}).  Call fbArr() on any value read back
 * from Firebase that should be an array.
 */
function fbArr(val) {
  if (!val) return [];
  if (Array.isArray(val)) return val;
  return Object.keys(val)
    .filter(k => !isNaN(Number(k)))
    .sort((a, b) => Number(a) - Number(b))
    .map(k => val[k]);
}

// ── Password gate ─────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  const AUTH_KEY = 'bw_auth';
  const EXPIRES  = 30 * 24 * 60 * 60 * 1000; // 30 days

  function isAuthed() {
    try {
      const d = JSON.parse(localStorage.getItem(AUTH_KEY));
      return d && d.exp > Date.now();
    } catch(e) { return false; }
  }
  if (isAuthed()) return;

  const st = document.createElement('style');
  st.textContent = `
    #bw-gate{position:fixed;inset:0;z-index:10000;
      background:linear-gradient(150deg,#023e8a 0%,#0096c7 55%,#48cae4 100%);
      display:flex;align-items:center;justify-content:center;
      font-family:var(--font-body,'Nunito',sans-serif);}
    #bw-gate-card{background:#fff;border-radius:20px;padding:2.5rem 2rem;
      width:min(90vw,380px);text-align:center;
      box-shadow:0 8px 48px rgba(0,0,0,0.3);
      animation:gp .45s cubic-bezier(.34,1.56,.64,1);}
    @keyframes gp{from{transform:scale(0.7);opacity:0}to{transform:scale(1);opacity:1}}
    @keyframes gs{0%,100%{transform:translateX(0)}20%{transform:translateX(-8px)}
      40%{transform:translateX(8px)}60%{transform:translateX(-5px)}80%{transform:translateX(5px)}}
    #bw-gate-card.shake{animation:gs .4s ease;}
    #bw-gate-icon{font-size:3rem;margin-bottom:.4rem;}
    #bw-gate-title{font-size:1.6rem;font-weight:900;color:#023e8a;margin-bottom:.25rem;}
    #bw-gate-sub{font-size:.88rem;color:#666;margin-bottom:1.4rem;line-height:1.4;}
    #bw-gate-input{width:100%;box-sizing:border-box;padding:.75rem 1rem;
      border:2px solid #90e0ef;border-radius:10px;font-size:1.1rem;
      font-family:inherit;text-align:center;letter-spacing:.12em;
      outline:none;transition:border-color .2s;margin-bottom:.9rem;}
    #bw-gate-input:focus{border-color:#0077b6;}
    #bw-gate-btn{width:100%;padding:.75rem;background:#0077b6;color:#fff;
      border:none;border-radius:10px;font-size:1rem;font-weight:800;
      font-family:inherit;cursor:pointer;transition:background .2s;}
    #bw-gate-btn:hover{background:#023e8a;}
    #bw-gate-err{color:#e63946;font-size:.85rem;margin-top:.65rem;min-height:1.1em;}
  `;
  document.head.appendChild(st);

  const overlay = document.createElement('div');
  overlay.id = 'bw-gate';
  overlay.innerHTML = `
    <div id="bw-gate-card">
      <div id="bw-gate-icon">🏖️</div>
      <div id="bw-gate-title">${siteName()}</div>
      <div id="bw-gate-sub">Family only — enter the password to continue</div>
      <input id="bw-gate-input" type="password" placeholder="Password" autocomplete="current-password" />
      <button id="bw-gate-btn">🌊 Enter Site</button>
      <div id="bw-gate-err"></div>
    </div>`;
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  const input = document.getElementById('bw-gate-input');
  const card  = document.getElementById('bw-gate-card');
  const err   = document.getElementById('bw-gate-err');

  function attempt() {
    if (input.value === CONFIG.sitePassword) {
      localStorage.setItem(AUTH_KEY, JSON.stringify({ exp: Date.now() + EXPIRES }));
      overlay.style.transition = 'opacity .35s';
      overlay.style.opacity = '0';
      setTimeout(() => { overlay.remove(); document.body.style.overflow = ''; }, 360);
    } else {
      err.textContent = 'Wrong password — try again!';
      card.classList.remove('shake');
      void card.offsetWidth; // retrigger animation
      card.classList.add('shake');
      input.value = '';
      input.focus();
    }
  }

  document.getElementById('bw-gate-btn').addEventListener('click', attempt);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') attempt(); });
  setTimeout(() => input.focus(), 80);
});

// ── Easter Egg: Crawling Crab ─────────────────
// Appears at the bottom of every page every few minutes.
// Click to make it scurry away.
document.addEventListener('DOMContentLoaded', function() {
  const WALK_MS   = 13000; // time to cross the screen
  const MIN_WAIT  = 3 * 60 * 1000; // minimum gap between walks (3 min)
  const MAX_WAIT  = 6 * 60 * 1000; // maximum gap (6 min)

  const crab = document.createElement('div');
  crab.textContent = '🦀';
  crab.title = '🦀';
  crab.style.cssText = [
    'position:fixed',
    'bottom:8px',
    'left:calc(100vw + 60px)',
    'font-size:2rem',
    'z-index:9999',
    'cursor:pointer',
    'user-select:none',
    'line-height:1',
    // flip so crab faces the direction it walks (right→left)
    'transform:scaleX(-1)',
  ].join(';');
  document.body.appendChild(crab);

  let clicked = false;

  function randWait() {
    return MIN_WAIT + Math.random() * (MAX_WAIT - MIN_WAIT);
  }

  function walk() {
    clicked = false;

    // Snap off-screen right (no animation)
    crab.style.transition = 'none';
    crab.style.left = 'calc(100vw + 60px)';

    // Two rAFs ensure the snap is painted before we start the transition
    requestAnimationFrame(() => requestAnimationFrame(() => {
      crab.style.transition = `left ${WALK_MS}ms linear`;
      crab.style.left = '-70px';

      // After crossing, schedule the next walk
      setTimeout(() => {
        if (!clicked) setTimeout(walk, randWait());
      }, WALK_MS + 200);
    }));
  }

  crab.addEventListener('click', function() {
    if (clicked) return;
    clicked = true;
    // Scurry off left very fast
    crab.style.transition = 'left 0.3s ease-in';
    crab.style.left = '-200px';
    // Schedule the next walk after a normal wait
    setTimeout(walk, randWait());
  });

  // First appearance after 1–3 minutes
  setTimeout(walk, 60000 + Math.random() * 120000);
});
