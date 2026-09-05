(function () {
  "use strict";

  /* ---------- data ---------- */
  const MOODS = [
    { id: "bosan", label: "😴 Lagi bosan" },
    { id: "sedih", label: "😢 Lagi sedih" },
    { id: "seru", label: "🤩 Pengen seru" },
    { id: "santai", label: "😌 Pengen santai" },
    { id: "produktif", label: "💪 Pengen produktif" },
    { id: "merayakan", label: "🥳 Lagi merayakan" },
  ];
  const COMPANIONS = [
    { id: "sendiri", label: "🧍 Sendiri" },
    { id: "teman", label: "👥 Bareng teman" },
    { id: "pasangan", label: "💑 Bareng pasangan" },
    { id: "keluarga", label: "👨‍👩‍👧 Bareng keluarga" },
  ];
  const CATEGORIES = {
    film: "🎬 Nonton Film",
    kuliner: "🍜 Kuliner",
    game: "🎮 Game",
    wisata: "🌳 Wisata",
    nongkrong: "☕ Nongkrong",
    olahraga: "⚽ Olahraga",
    belanja: "🛍️ Belanja",
    karaoke: "🎤 Karaoke",
    selfcare: "🧘 Self-Care",
    kreatif: "🎨 Kreatif",
  };

  const ACTIVITIES = [
    {
      id: 1,
      name: "Marathon Film di Bioskop",
      cat: "film",
      emoji: "🎬",
      desc: "Nonton film terbaru biar bosannya kegantiin sama cerita seru.",
      price: 35000,
      moods: ["bosan", "santai", "sedih"],
      companions: ["sendiri", "teman", "pasangan"],
      rating: 4.3,
    },
    {
      id: 2,
      name: "Nobar di Rumah + Cemilan",
      cat: "film",
      emoji: "🍿",
      desc: "Streaming film sambil rebahan, pas buat yang males keluar.",
      price: 15000,
      moods: ["bosan", "santai", "sedih"],
      companions: ["sendiri", "teman", "keluarga", "pasangan"],
      rating: 4.5,
    },
    {
      id: 3,
      name: "Wisata Kuliner Malam",
      cat: "kuliner",
      emoji: "🍜",
      desc: "Jelajah warung hits, nyobain menu baru bareng-bareng.",
      price: 40000,
      moods: ["bosan", "seru", "merayakan"],
      companions: ["teman", "pasangan", "keluarga"],
      rating: 4.6,
    },
    {
      id: 4,
      name: "Berburu Street Food",
      cat: "kuliner",
      emoji: "🌭",
      desc: "Jajan kaki lima yang murah tapi rasanya nagih banget.",
      price: 20000,
      moods: ["bosan", "seru"],
      companions: ["sendiri", "teman"],
      rating: 4.2,
    },
    {
      id: 5,
      name: "Mabar di Rental PS",
      cat: "game",
      emoji: "🎮",
      desc: "Main bareng temen di rental PS/warnet, ampuh usir penat.",
      price: 25000,
      moods: ["bosan", "seru"],
      companions: ["teman"],
      rating: 4.4,
    },
    {
      id: 6,
      name: "Turnamen Mobile Legend Kecil",
      cat: "game",
      emoji: "🕹️",
      desc: "Bikin turnamen mini bareng geng, yang kalah traktir es teh.",
      price: 10000,
      moods: ["bosan", "seru", "merayakan"],
      companions: ["teman"],
      rating: 4.1,
    },
    {
      id: 7,
      name: "Healing ke Air Terjun",
      cat: "wisata",
      emoji: "🌊",
      desc: "Suara air & udara sejuk, obat ampuh buat pikiran yang penat.",
      price: 20000,
      moods: ["sedih", "santai", "bosan"],
      companions: ["sendiri", "teman", "pasangan", "keluarga"],
      rating: 4.7,
    },
    {
      id: 8,
      name: "Sunset di Bukit/Pantai",
      cat: "wisata",
      emoji: "🌅",
      desc: "Duduk santai liat matahari terbenam, bikin hati lebih adem.",
      price: 10000,
      moods: ["sedih", "santai", "merayakan"],
      companions: ["sendiri", "teman", "pasangan"],
      rating: 4.8,
    },
    {
      id: 9,
      name: "Piknik di Taman Kota",
      cat: "wisata",
      emoji: "🧺",
      desc: "Gelar tikar, bawa bekal, ngobrol santai di ruang terbuka.",
      price: 15000,
      moods: ["santai", "merayakan", "seru"],
      companions: ["teman", "keluarga", "pasangan"],
      rating: 4.5,
    },
    {
      id: 10,
      name: "Ngopi di Kedai Lokal",
      cat: "nongkrong",
      emoji: "☕",
      desc: "Ngopi santai sambil ngobrol ngalor-ngidul bareng teman.",
      price: 25000,
      moods: ["bosan", "santai", "seru"],
      companions: ["teman", "pasangan"],
      rating: 4.5,
    },
    {
      id: 11,
      name: "Angkringan Malam Minggu",
      cat: "nongkrong",
      emoji: "🍢",
      desc: "Nongkrong hemat ala angkringan, cocok buat obrolan panjang.",
      price: 15000,
      moods: ["bosan", "santai", "sedih"],
      companions: ["teman", "sendiri"],
      rating: 4.6,
    },
    {
      id: 12,
      name: "Futsal / Badminton Bareng",
      cat: "olahraga",
      emoji: "⚽",
      desc: "Gerak badan bareng teman, ampuh buat lepas stres.",
      price: 30000,
      moods: ["bosan", "seru", "produktif"],
      companions: ["teman"],
      rating: 4.3,
    },
    {
      id: 13,
      name: "Jalan Sehat / Jogging Pagi",
      cat: "olahraga",
      emoji: "🏃",
      desc: "Olahraga ringan yang bikin pikiran jadi lebih plong.",
      price: 0,
      moods: ["sedih", "produktif", "santai"],
      companions: ["sendiri", "teman", "keluarga"],
      rating: 4.4,
    },
    {
      id: 14,
      name: "Window Shopping di Mall",
      cat: "belanja",
      emoji: "🛍️",
      desc: "Muterin mall buat cuci mata, gak harus beli apa-apa.",
      price: 20000,
      moods: ["bosan", "seru"],
      companions: ["teman", "pasangan", "sendiri"],
      rating: 4.0,
    },
    {
      id: 15,
      name: "Berburu Baju Thrifting",
      cat: "belanja",
      emoji: "👕",
      desc: "Cari baju second unik harga miring, seru buat diburu.",
      price: 50000,
      moods: ["bosan", "seru", "merayakan"],
      companions: ["teman", "sendiri"],
      rating: 4.3,
    },
    {
      id: 16,
      name: "Karaoke Bareng Geng",
      cat: "karaoke",
      emoji: "🎤",
      desc: "Teriak nyanyi lagu favorit, ampuh buat lepas emosi.",
      price: 45000,
      moods: ["seru", "sedih", "merayakan"],
      companions: ["teman", "pasangan"],
      rating: 4.5,
    },
    {
      id: 17,
      name: "Journaling & Me Time",
      cat: "selfcare",
      emoji: "📓",
      desc: "Nulis perasaan atau meditasi ringan buat nenangin hati.",
      price: 0,
      moods: ["sedih", "santai"],
      companions: ["sendiri"],
      rating: 4.6,
    },
    {
      id: 18,
      name: "Spa / Pijat Refleksi",
      cat: "selfcare",
      emoji: "💆",
      desc: "Manjain badan yang capek biar rileks total.",
      price: 50000,
      moods: ["sedih", "santai", "produktif"],
      companions: ["sendiri", "pasangan"],
      rating: 4.7,
    },
    {
      id: 19,
      name: "Bikin Kerajinan / DIY",
      cat: "kreatif",
      emoji: "🎨",
      desc: "Bikin sesuatu dari tangan sendiri, waktu jadi berasa produktif.",
      price: 30000,
      moods: ["bosan", "produktif"],
      companions: ["sendiri", "teman", "keluarga"],
      rating: 4.2,
    },
    {
      id: 20,
      name: "Belajar Skill Baru Online",
      cat: "kreatif",
      emoji: "💻",
      desc: "Ikut kelas singkat atau tutorial buat asah kemampuan baru.",
      price: 0,
      moods: ["produktif", "bosan"],
      companions: ["sendiri"],
      rating: 4.4,
    },
    {
      id: 21,
      name: "Nonton Midnight di Bioskop",
      cat: "film",
      emoji: "🌙",
      desc: "Sesi nonton tengah malam yang sepi, cocok buat yang susah tidur.",
      price: 35000,
      moods: ["bosan", "sedih", "seru"],
      companions: ["sendiri", "teman", "pasangan"],
      rating: 4.2,
    },
    {
      id: 22,
      name: "Berburu Dessert Box Viral",
      cat: "kuliner",
      emoji: "🍰",
      desc: "Cobain dessert yang lagi hits di media sosial bareng teman.",
      price: 30000,
      moods: ["bosan", "seru", "merayakan"],
      companions: ["teman", "pasangan"],
      rating: 4.4,
    },
    {
      id: 23,
      name: "Makan Prasmanan All You Can Eat",
      cat: "kuliner",
      emoji: "🍱",
      desc: "Puas makan sepuasnya, seru buat rayain sesuatu bareng keluarga.",
      price: 75000,
      moods: ["merayakan", "seru"],
      companions: ["keluarga", "teman", "pasangan"],
      rating: 4.5,
    },
    {
      id: 24,
      name: "Main Billiard Bareng Teman",
      cat: "game",
      emoji: "🎱",
      desc: "Main santai sambil ngobrol, seru buat ngisi waktu kosong.",
      price: 20000,
      moods: ["bosan", "santai", "seru"],
      companions: ["teman"],
      rating: 4.2,
    },
    {
      id: 25,
      name: "Escape Room Bareng Geng",
      cat: "game",
      emoji: "🔐",
      desc: "Pecahin teka-teki bareng tim, seru buat bonding sama teman dekat.",
      price: 60000,
      moods: ["seru", "merayakan"],
      companions: ["teman", "pasangan"],
      rating: 4.6,
    },
    {
      id: 26,
      name: "Camping Ceria di Bukit",
      cat: "wisata",
      emoji: "⛺",
      desc: "Nginep semalam di alam terbuka, jauh dari hiruk pikuk kota.",
      price: 50000,
      moods: ["santai", "bosan", "seru"],
      companions: ["teman", "keluarga", "pasangan"],
      rating: 4.7,
    },
    {
      id: 27,
      name: "Susur Pantai Sore Hari",
      cat: "wisata",
      emoji: "🏖️",
      desc: "Jalan santai di tepi pantai sambil dengerin suara ombak.",
      price: 5000,
      moods: ["sedih", "santai"],
      companions: ["sendiri", "teman", "pasangan", "keluarga"],
      rating: 4.6,
    },
    {
      id: 28,
      name: "Kunjungi Museum Lokal",
      cat: "wisata",
      emoji: "🏛️",
      desc: "Belajar sejarah sambil jalan-jalan santai, tenang dan mendidik.",
      price: 10000,
      moods: ["bosan", "produktif", "santai"],
      companions: ["sendiri", "teman", "keluarga"],
      rating: 4.3,
    },
    {
      id: 29,
      name: "Main ke Waterpark",
      cat: "wisata",
      emoji: "🌊",
      desc: "Basah-basahan seru di kolam renang buat lepas penat.",
      price: 45000,
      moods: ["seru", "merayakan"],
      companions: ["teman", "keluarga", "pasangan"],
      rating: 4.5,
    },
    {
      id: 30,
      name: "Ngeteh Sore di Kafe Estetik",
      cat: "nongkrong",
      emoji: "🍵",
      desc: "Duduk santai di kafe instagramable sambil foto-foto.",
      price: 30000,
      moods: ["santai", "seru"],
      companions: ["teman", "pasangan"],
      rating: 4.4,
    },
    {
      id: 31,
      name: "Nongkrong di Alun-Alun Malam",
      cat: "nongkrong",
      emoji: "🌃",
      desc: "Jajan pinggir jalan sambil liat suasana kota di malam hari.",
      price: 10000,
      moods: ["bosan", "santai"],
      companions: ["teman", "sendiri", "keluarga"],
      rating: 4.4,
    },
    {
      id: 32,
      name: "Nge-Gym Bareng Teman",
      cat: "olahraga",
      emoji: "🏋️",
      desc: "Latihan beban bareng biar makin semangat dan konsisten.",
      price: 25000,
      moods: ["produktif", "bosan"],
      companions: ["teman", "sendiri"],
      rating: 4.3,
    },
    {
      id: 33,
      name: "Bersepeda Santai Keliling Kota",
      cat: "olahraga",
      emoji: "🚴",
      desc: "Gowes santai pagi atau sore, sehat dan bikin pikiran fresh.",
      price: 0,
      moods: ["santai", "produktif", "sedih"],
      companions: ["sendiri", "teman", "keluarga"],
      rating: 4.5,
    },
    {
      id: 34,
      name: "Berenang di Kolam Umum",
      cat: "olahraga",
      emoji: "🏊",
      desc: "Renang santai buat ngilangin penat dan gerak badan.",
      price: 15000,
      moods: ["bosan", "produktif", "seru"],
      companions: ["teman", "keluarga", "sendiri"],
      rating: 4.3,
    },
    {
      id: 35,
      name: "Belanja di Pasar Tradisional",
      cat: "belanja",
      emoji: "🧺",
      desc: "Jalan-jalan lihat suasana pasar sambil cari jajanan murah.",
      price: 15000,
      moods: ["bosan", "santai"],
      companions: ["sendiri", "keluarga"],
      rating: 4.1,
    },
    {
      id: 36,
      name: "Berburu Oleh-Oleh Khas Daerah",
      cat: "belanja",
      emoji: "🎁",
      desc: "Cari camilan atau kerajinan khas buat dibawa pulang.",
      price: 35000,
      moods: ["seru", "merayakan"],
      companions: ["teman", "keluarga"],
      rating: 4.2,
    },
    {
      id: 37,
      name: "Karaoke Keluarga di Rumah",
      cat: "karaoke",
      emoji: "🏠",
      desc: "Nyanyi rame-rame pakai mic karaoke rumahan, hemat dan seru.",
      price: 0,
      moods: ["seru", "merayakan", "santai"],
      companions: ["keluarga", "teman"],
      rating: 4.3,
    },
    {
      id: 38,
      name: "Ikut Kelas Yoga",
      cat: "selfcare",
      emoji: "🧘‍♀️",
      desc: "Gerakan lembut buat nenangin pikiran dan badan sekaligus.",
      price: 40000,
      moods: ["sedih", "santai", "produktif"],
      companions: ["sendiri", "teman"],
      rating: 4.6,
    },
    {
      id: 39,
      name: "Creambath & Perawatan Rambut",
      cat: "selfcare",
      emoji: "💇",
      desc: "Manjain diri sejenak biar rileks dan segar kembali.",
      price: 35000,
      moods: ["sedih", "santai"],
      companions: ["sendiri", "pasangan"],
      rating: 4.5,
    },
    {
      id: 40,
      name: "Ikut Workshop Melukis",
      cat: "kreatif",
      emoji: "🖌️",
      desc: "Belajar melukis santai, hasil akhirnya bisa dipajang di kamar.",
      price: 50000,
      moods: ["bosan", "produktif", "merayakan"],
      companions: ["sendiri", "teman", "pasangan"],
      rating: 4.4,
    },
    {
      id: 41,
      name: "Coba Resep Masakan Baru",
      cat: "kreatif",
      emoji: "🍳",
      desc: "Eksperimen masak menu baru di rumah, hasilnya bisa dimakan bareng.",
      price: 25000,
      moods: ["bosan", "produktif"],
      companions: ["sendiri", "keluarga", "pasangan"],
      rating: 4.4,
    },
  ];

  /* ---------- login (demo only, in-memory, no real auth) ---------- */
  const loginScreen = document.getElementById("loginScreen");
  const appScreen = document.getElementById("appScreen");
  const loginForm = document.getElementById("loginForm");
  const loginEmail = document.getElementById("loginEmail");
  const loginError = document.getElementById("loginError");
  const userBadge = document.getElementById("userBadge");
  const logoutBtn = document.getElementById("logoutBtn");

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = loginEmail.value.trim();
    if (!EMAIL_RE.test(val)) {
      loginError.textContent =
        "Masukin email yang valid dulu ya, misal nama@email.com";
      return;
    }
    loginError.textContent = "";
    userBadge.textContent = "👋 " + val;
    loginScreen.classList.add("hidden");
    appScreen.classList.remove("hidden");
  });

  logoutBtn.addEventListener("click", () => {
    appScreen.classList.add("hidden");
    loginScreen.classList.remove("hidden");
    loginEmail.value = "";
    loginError.textContent = "";
  });

  /* ---------- in-memory state (session only, see note below) ---------- */
  const state = {
    mood: null,
    companion: null,
    budget: 50000,
    location: "",
    activeCat: "semua",
    search: "",
    favorites: new Set(),
    userRatings: {}, // id -> user given rating
    currentResults: [],
    view: "all", // 'all' | 'fav'
    hasSearched: false,
  };

  /* ---------- helpers ---------- */
  const $ = (sel) => document.querySelector(sel);
  const fmtRp = (n) => "Rp" + n.toLocaleString("id-ID");

  function displayRating(item) {
    const ur = state.userRatings[item.id];
    if (ur) return (item.rating + ur) / 2;
    return item.rating;
  }

  /* ---------- build static chip rows ---------- */
  const moodChipsEl = $("#moodChips");
  MOODS.forEach((m) => {
    const b = document.createElement("button");
    b.className = "chip";
    b.textContent = m.label;
    b.type = "button";
    b.addEventListener("click", () => {
      state.mood = state.mood === m.id ? null : m.id;
      [...moodChipsEl.children].forEach((c) => c.classList.remove("active"));
      if (state.mood) b.classList.add("active");
    });
    moodChipsEl.appendChild(b);
  });

  const companionChipsEl = $("#companionChips");
  COMPANIONS.forEach((c) => {
    const b = document.createElement("button");
    b.className = "chip";
    b.textContent = c.label;
    b.type = "button";
    b.addEventListener("click", () => {
      state.companion = state.companion === c.id ? null : c.id;
      [...companionChipsEl.children].forEach((x) =>
        x.classList.remove("active"),
      );
      if (state.companion) b.classList.add("active");
    });
    companionChipsEl.appendChild(b);
  });

  const catScrollEl = $("#catScroll");
  function buildCatChips() {
    catScrollEl.innerHTML = "";
    const allBtn = document.createElement("button");
    allBtn.className = "cat-chip active";
    allBtn.textContent = "✨ Semua";
    allBtn.addEventListener("click", () => setActiveCat("semua"));
    catScrollEl.appendChild(allBtn);
    Object.entries(CATEGORIES).forEach(([key, label]) => {
      const b = document.createElement("button");
      b.className = "cat-chip";
      b.textContent = label;
      b.dataset.cat = key;
      b.addEventListener("click", () => setActiveCat(key));
      catScrollEl.appendChild(b);
    });
  }
  function setActiveCat(cat) {
    state.activeCat = cat;
    [...catScrollEl.children].forEach((c) => c.classList.remove("active"));
    const target =
      cat === "semua"
        ? catScrollEl.children[0]
        : [...catScrollEl.children].find((c) => c.dataset.cat === cat);
    if (target) target.classList.add("active");
    render();
  }
  buildCatChips();

  /* ---------- budget slider ---------- */
  const budgetSlider = $("#budgetSlider");
  const budgetLabel = $("#budgetLabel");
  budgetSlider.addEventListener("input", () => {
    state.budget = parseInt(budgetSlider.value, 10);
    budgetLabel.textContent = fmtRp(state.budget);
  });

  /* ---------- location ---------- */
  $("#locInput").addEventListener("input", (e) => {
    state.location = e.target.value.trim();
  });

  /* ---------- scoring ---------- */
  function scoreItem(item) {
    let s = 0;
    if (state.mood && item.moods.includes(state.mood)) s += 40;
    if (item.price <= state.budget) {
      s += 25;
    } else {
      s -= Math.min(40, (item.price - state.budget) / 1000);
    }
    if (state.companion && item.companions.includes(state.companion)) s += 20;
    s += displayRating(item) * 3;
    if (state.favorites.has(item.id)) s += 8;
    s += Math.random() * 6; // variety factor
    return s;
  }

  function computeRecommendations() {
    const scored = ACTIVITIES.map((item) => ({ item, s: scoreItem(item) }));
    scored.sort((a, b) => b.s - a.s);
    state.currentResults = scored.slice(0, 12).map((x) => x.item);
    state.hasSearched = true;
  }

  /* ---------- rendering ---------- */
  const grid = $("#grid");
  const resultsTitle = $("#resultsTitle");

  function starsHtml(item) {
    const r = Math.round(displayRating(item));
    let html = '<div class="stars">';
    for (let i = 1; i <= 5; i++) {
      html += `<button class="star ${i <= r ? "filled" : ""}" data-id="${item.id}" data-val="${i}" type="button" aria-label="Beri rating ${i}">★</button>`;
    }
    html += `</div><span class="rating-num">${displayRating(item).toFixed(1)}</span>`;
    return html;
  }

  function cardHtml(item, idx) {
    const isFav = state.favorites.has(item.id);
    const locTag = state.location
      ? `<span class="tag">📍 dekat ${escapeHtml(state.location)}</span>`
      : "";
    return `
      <article class="card" style="animation-delay:${idx * 45}ms">
        <div class="card-top">
          <div class="card-emoji">${item.emoji}</div>
          <button class="fav-btn ${isFav ? "active" : ""}" data-id="${item.id}" type="button" aria-label="Simpan ke favorit">${isFav ? "❤️" : "🤍"}</button>
        </div>
        <h3>${escapeHtml(item.name)}</h3>
        <p class="desc">${escapeHtml(item.desc)}</p>
        <div class="tag-row">
          <span class="tag">${CATEGORIES[item.cat]}</span>
          <span class="tag price">${item.price === 0 ? "Gratis" : fmtRp(item.price)}</span>
          ${locTag}
        </div>
        <div class="card-bottom">
          ${starsHtml(item)}
        </div>
      </article>
    `;
  }

  function escapeHtml(str) {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  function getBaseList() {
    return state.view === "fav"
      ? ACTIVITIES.filter((a) => state.favorites.has(a.id))
      : state.currentResults;
  }

  function applyFilters(list) {
    return list.filter((item) => {
      if (state.activeCat !== "semua" && item.cat !== state.activeCat)
        return false;
      if (state.search) {
        const q = state.search.toLowerCase();
        if (
          !item.name.toLowerCase().includes(q) &&
          !item.desc.toLowerCase().includes(q)
        )
          return false;
      }
      return true;
    });
  }

  function render() {
    $("#favCount").textContent = state.favorites.size;

    if (state.view === "fav") {
      resultsTitle.textContent = "Kegiatan favoritmu";
    } else {
      resultsTitle.textContent = state.hasSearched
        ? "Rekomendasi buat kamu"
        : "Isi dulu preferensi di atas ✨";
    }

    let list = getBaseList();
    list = applyFilters(list);

    if (!state.hasSearched && state.view === "all") {
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
          <span class="big">🎲</span>
          Yuk isi mood, budget, lokasi, dan teman di atas, terus tekan "Cari Rekomendasi".
        </div>`;
      return;
    }

    if (list.length === 0) {
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
          <span class="big">🙈</span>
          ${state.view === "fav" ? "Belum ada favorit yang cocok sama filter ini." : "Belum ada kegiatan yang cocok. Coba ubah kategori atau pencarian."}
        </div>`;
      return;
    }

    grid.innerHTML = list.map((item, i) => cardHtml(item, i)).join("");

    grid.querySelectorAll(".fav-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.dataset.id, 10);
        if (state.favorites.has(id)) state.favorites.delete(id);
        else state.favorites.add(id);
        render();
      });
    });

    grid.querySelectorAll(".star").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.dataset.id, 10);
        const val = parseInt(btn.dataset.val, 10);
        state.userRatings[id] = val;
        render();
      });
    });
  }

  /* ---------- top-level controls ---------- */
  $("#findBtn").addEventListener("click", () => {
    computeRecommendations();
    state.view = "all";
    $("#tabAll").classList.add("active");
    $("#tabFav").classList.remove("active");
    render();
    document
      .getElementById("resultsSection")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  });

  $("#shuffleBtn").addEventListener("click", () => {
    if (state.view === "fav") return;
    computeRecommendations();
    render();
  });

  $("#searchInput").addEventListener("input", (e) => {
    state.search = e.target.value.trim();
    render();
  });

  $("#tabAll").addEventListener("click", () => {
    state.view = "all";
    $("#tabAll").classList.add("active");
    $("#tabFav").classList.remove("active");
    render();
  });
  $("#tabFav").addEventListener("click", () => {
    state.view = "fav";
    $("#tabFav").classList.add("active");
    $("#tabAll").classList.remove("active");
    render();
  });

  /* ---------- dark mode ---------- */
  const modeToggle = $("#modeToggle");
  modeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    modeToggle.textContent = document.documentElement.classList.contains("dark")
      ? "☀️"
      : "🌙";
  });

  /* ---------- initial paint ---------- */
  render();
})();
