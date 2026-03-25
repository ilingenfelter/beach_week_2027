# 🌊 Beach Week 2027

A fun, mobile-friendly static website for your family's beach week reunion — no server required, deploys free to GitHub Pages.

---

## 📁 File Overview

| File | Purpose |
|------|---------|
| `index.html` | Home page — countdown timer & house info |
| `meals.html` | Dinner schedule — view & edit assignments |
| `photos.html` | Photo wall — upload, view, download |
| `weather.html` | Live 7-day forecast, tide table & beach conditions |
| `activities.html` | Activity sign-ups |
| `euchre.html` | Single-elimination Euchre bracket (up to 22 teams) |
| `styles.css` | All styling (shared across all pages) |
| `config.js` | **All customizable content lives here** |
| `README.md` | This file |

---

## ✏️ How to Customize

**Edit `config.js` — it's the only file you need to touch for content.**

Open `config.js` in any text editor and update:

```js
// ── Event info ────────────────────────────────
CONFIG.familyName       // Leave blank for "Beach Week 2027", or set e.g. "Johnson"
CONFIG.year             // e.g. 2027
CONFIG.location         // e.g. "Outer Banks, NC"
CONFIG.dates.start      // Display format, e.g. "July 10, 2027"
CONFIG.dates.end        // e.g. "July 17, 2027"
CONFIG.dates.startISO   // ISO format e.g. "2027-07-10"  ← used for countdown
CONFIG.dates.endISO     // e.g. "2027-07-17"

// ── House info ────────────────────────────────
CONFIG.house.name       // Rental property name
CONFIG.house.website    // Rental website URL
CONFIG.house.address    // Street address (shown on home page)
CONFIG.house.checkin    // e.g. "4:00 PM"
CONFIG.house.checkout   // e.g. "11:00 AM"
CONFIG.house.wifi.network   // WiFi name (set "Coming Soon" if unknown)
CONFIG.house.wifi.password  // WiFi password (set "Coming Soon" if unknown)
CONFIG.house.grocery    // Nearest grocery store
CONFIG.house.urgentCare // Nearest urgent care / hospital

// ── Site password ─────────────────────────────
CONFIG.sitePassword     // e.g. "beachweek27"  ← change before sharing!

// ── Weather ───────────────────────────────────
CONFIG.weather.noaaStation     // NOAA station ID for your area

// ── Pre-set dinner schedule ───────────────────
CONFIG.initialMeals     // Array of 7 nights — who's cooking & what

// ── Pre-set activities ────────────────────────
CONFIG.initialActivities  // Starting activity list
```

---

## 🔐 Site Password

The site is protected by a password gate on every page. Visitors must enter the password before seeing any content.

- After a correct entry, access is remembered for **30 days** (stored in the browser — no re-entry needed unless they clear browser data).
- Wrong passwords shake the card and clear the field.
- To change the password, update `CONFIG.sitePassword` in `config.js` and re-deploy.

**Default password:** `beachweek27` — **change this before sharing the site!**

---

## 🔥 Firebase Setup (Cross-Device Sync)

By default, all data (meals, activities, bracket) is stored in each person's browser locally. To make changes **visible to the whole family in real time**, connect a free Firebase Realtime Database.

> **Without Firebase:** the site works fine — it just won't sync between devices.

### Step 1 — Create a Firebase project

1. Go to [console.firebase.google.com](https://console.firebase.google.com) and sign in with a Google account.
2. Click **Add project**, give it a name (e.g. `beach-week-2027`), and follow the prompts.

### Step 2 — Create a Realtime Database

1. In the left sidebar, click **Build → Realtime Database**.
2. Click **Create Database**.
3. Choose a location (US is fine), then select **Start in test mode**.
4. Click **Enable**.

### Step 3 — Get your web app config

1. Click the gear icon ⚙️ → **Project settings**.
2. Scroll to **Your apps** and click **`</>`** (Web).
3. Give the app a nickname and click **Register app**.
4. Copy the values from the `firebaseConfig` block shown.

### Step 4 — Paste config into `config.js`

Find this section near the top of `config.js` and fill it in:

```js
const FIREBASE_CONFIG = {
  apiKey:      'AIzaSy...',          // paste your apiKey
  databaseURL: 'https://your-project-default-rtdb.firebaseio.com',
};
```

### Step 5 — Set database rules to allow access

1. In the Firebase console, go to **Realtime Database → Rules**.
2. Replace the contents with:
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
3. Click **Publish**.

> This allows anyone with the database URL to read/write. Since the URL is not public and the site is password-protected, this is safe for a private family site.

### What syncs

| Data | Syncs via Firebase |
|------|--------------------|
| Dinner schedule | ✅ Yes |
| Activity sign-ups | ✅ Yes |
| Euchre bracket | ✅ Yes |
| Photos | ❌ No — stored per-device (too large for free tier) |

---

## 🌐 Deploying to GitHub Pages

### Step 1 — Create a GitHub repository

1. Go to [github.com](https://github.com) and sign in (or create a free account).
2. Click **New repository**.
3. Name it something like `beach-week-2027`.
4. Set it to **Public** (required for free GitHub Pages).
5. Click **Create repository**.

### Step 2 — Upload your files

**Option A — GitHub web interface (easiest):**
1. Open your new repository.
2. Click **Add file → Upload files**.
3. Drag all files from the `beach-week` folder into the upload area.
4. Click **Commit changes**.

**Option B — Git command line:**
```bash
cd path/to/beach-week
git init
git add .
git commit -m "Initial beach week site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/beach-week-2027.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. In your repository, go to **Settings → Pages**.
2. Under **Source**, select **Deploy from a branch**.
3. Choose **main** branch, **/ (root)** folder.
4. Click **Save**.
5. Wait ~60 seconds, then your site will be live at:
   `https://YOUR-USERNAME.github.io/beach-week-2027/`

### Step 4 — Share the link!

Send the URL and password to your family in a group text or email. Bookmark it on your phone!

---

## 📱 Tips for Family Members

- **Add to home screen** on iPhone: tap the Share button → "Add to Home Screen" for an app-like experience.
- **Add to home screen** on Android: tap the browser menu → "Add to Home screen".
- **Photos** are stored per-device — use the ⬇️ Download button to save photos to your camera roll or share them directly.
- **Meals, activities, and the bracket** sync across all devices automatically if Firebase is set up.
- **You'll need the password** the first time you open the site on any new device or browser.

---

## 🍽️ Meals Page

- Anyone can edit the dinner schedule using the **✏️ Edit Meals** button.
- Changes sync to all devices (if Firebase is configured).
- The **🎱 Dinner Excuse Generator** button provides official excuses for why you can't cook tonight.
- Use **↩️ Reset to Defaults** to restore the original schedule from `config.js`.

---

## 🗳️ Activities Page

- Anyone can add, join, or remove activities.
- Sign up by typing your name under any activity and clicking **Join**.
- Click **✕** on a name chip to remove a sign-up.
- Click **✕** in the top-right corner of a card to delete an entire activity.
- Use **💡 Add Activity** to propose a new one.

---

## 🃏 Euchre Page

- Supports **4 to 22 teams** in a single-elimination bracket.
- Click **⚙️ Tournament Setup** to enter team names and start the bracket.
- Record match results using the dropdowns in the setup panel — winners auto-advance.
- The champion banner appears automatically when a winner is determined.

---

## 🔄 Making Updates Mid-Week

- **Content updates** (meals, activities, bracket) — use the edit forms on each page. With Firebase, changes are immediately visible to everyone.
- **House info or schedule changes** — edit `config.js`, re-upload it to GitHub, and the site updates within ~60 seconds.
- **Password change** — update `CONFIG.sitePassword` in `config.js` and re-deploy. Note: anyone already authenticated won't be prompted again until their 30-day session expires.

---

## 🛠️ Troubleshooting

| Problem | Fix |
|---------|-----|
| Site shows a password screen with no way in | Make sure you're using the correct password set in `CONFIG.sitePassword` in `config.js` |
| Changes not syncing between devices | Firebase is not configured, or the database rules aren't set to allow read/write — see Firebase Setup above |
| Weather not loading | You may be offline, or the Open-Meteo/NOAA API is temporarily unavailable. Try refreshing. |
| Photos disappeared | Browser localStorage was cleared (e.g. private browsing, or browser data reset). Download important photos promptly. |
| Bracket won't advance | Make sure both teams in a match have names entered before recording a result. |
| Site looks wrong after an update | Hard-refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac). |
| Config changes not showing | Re-upload `config.js` to GitHub and wait ~60 seconds for Pages to rebuild. |

---

## 🏖️ Have an amazing beach week!
