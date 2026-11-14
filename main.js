/* ============================================================
   HOTEL GONIO BATUMI — Shared JavaScript
   ============================================================ */
"use strict";

(function () {
  /* ══════════════════════════════════════════════════════════════
   CONFIG — edit this block
   ══════════════════════════════════════════════════════════════ */
  const CONFIG = {
    // Booking form endpoint (Web3Forms). While this is empty the form does NOT
    // pretend to send: it opens the visitor's email app instead (fallback below).
    endpoint: "https://api.web3forms.com/submit",
    extraFields: {
      access_key: "9d86bd7f-02f6-4168-bbb2-be3a70b79795",
      from_name: "Hotel Gonio Batumi Website",
    },

    fallbackEmail: "hotelgoniobatumi@gmail.com",
    fallbackPhone: "+995 577 92 93 21",

    requestTimeoutMs: 15000,
  };

  // Rooms: id, English name (must match the card, the Book button and the
  // dropdown value in the HTML) and maximum guests (adults + children).
  const SUITES = [
    { id: "lux-double", name: "Lux Double", maxGuests: 2 },
    { id: "standard-double", name: "Standard Double", maxGuests: 2 },
    { id: "standard-twin", name: "Standard Twin", maxGuests: 2 },
    { id: "standard-single", name: "Standard Single", maxGuests: 1 },
  ];

  // Details popup: English text -> translation key (keys live in i18n-fix.js)
  const ROOM_KEYS = {
    "Lux Double": "rm_lux",
    "Standard Double": "rm_std_double",
    "Standard Twin": "rm_std_twin",
    "Standard Single": "rm_std_single",
  };
  const BED_KEYS = {
    "1 double bed": "rm_bed_double",
    "2 single beds": "rm_bed_twin",
    "1 single bed": "rm_bed_single",
  };
  const AMENITY_KEYS = {
    "High-speed internet": "am_wifi",
    "Private shower": "am_shower",
    "In-room fridge": "am_fridge",
    "Sea view": "am_sea",
    "24/7 concierge": "am_concierge",
    "Robes & Slippers": "am_robes",
  };
  const AREA_UNIT = { en: "m²", ka: "მ²", ru: "м²", tr: "m²" };

  /* ══════════════════════════════════════════════════════════════
   HELPERS
   ══════════════════════════════════════════════════════════════ */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const pad = (n) => String(n).padStart(2, "0");
  // Local date (not UTC) as YYYY-MM-DD
  const toISO = (d) =>
    d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  const todayISO = () => toISO(new Date());
  function addDays(iso, n) {
    const [y, m, d] = iso.split("-").map(Number);
    return toISO(new Date(y, m - 1, d + n));
  }

  const store = {
    get(k) {
      try {
        return localStorage.getItem(k);
      } catch (_) {
        return null;
      }
    },
    set(k, v) {
      try {
        localStorage.setItem(k, v);
      } catch (_) {
        /* private mode etc. */
      }
    },
  };

  function findSuite(value) {
    if (!value) return null;
    const v = String(value).trim().toLowerCase();
    return SUITES.find((s) => s.id === v || s.name.toLowerCase() === v) || null;
  }

  /* ══════════════════════════════════════════════════════════════
   I18N ENGINE
   English text lives in the HTML. For KA/RU the dictionary is used,
   and any missing key falls back to the HTML text (never the key name).
   ══════════════════════════════════════════════════════════════ */
  const I18N = (() => {
    const KEY = "gonio_lang";
    const OLD_KEY = "fcgonio_lang";
    const SUPPORTED = ["en", "ka", "ru", "tr"];
    const LANGUAGE_META = {
      en: {
        name: "English",
        flag: `<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" fill="#fff"/><path fill="#b22234" d="M0 0h24v1.23H0zM0 2.46h24v1.23H0zM0 4.92h24v1.23H0zM0 7.38h24v1.23H0zM0 9.84h24v1.23H0zM0 12.3h24v1.23H0zM0 14.76h24v1.24H0z"/><path fill="#3c3b6e" d="M0 0h10.5v8.6H0z"/><g fill="#fff"><circle cx="1.7" cy="1.4" r=".45"/><circle cx="4.2" cy="1.4" r=".45"/><circle cx="6.7" cy="1.4" r=".45"/><circle cx="9.2" cy="1.4" r=".45"/><circle cx="2.95" cy="3.2" r=".45"/><circle cx="5.45" cy="3.2" r=".45"/><circle cx="7.95" cy="3.2" r=".45"/><circle cx="1.7" cy="5" r=".45"/><circle cx="4.2" cy="5" r=".45"/><circle cx="6.7" cy="5" r=".45"/><circle cx="9.2" cy="5" r=".45"/><circle cx="2.95" cy="6.8" r=".45"/><circle cx="5.45" cy="6.8" r=".45"/><circle cx="7.95" cy="6.8" r=".45"/></g></svg>`,
      },
      ka: {
        name: "ქართული",
        flag: `<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" fill="#fff"/><path fill="#ff0000" d="M10.5 0h3v16h-3zM0 6.5h24v3H0zM4.1 2.4h1.5v4.1H4.1zM2.8 3.7h4.1v1.5H2.8zM18.4 2.4h1.5v4.1h-1.5zM17.1 3.7h4.1v1.5h-4.1zM4.1 9.5h1.5v4.1H4.1zM2.8 10.8h4.1v1.5H2.8zM18.4 9.5h1.5v4.1h-1.5zM17.1 10.8h4.1v1.5h-4.1z"/></svg>`,
      },
      ru: {
        name: "Русский",
        flag: `<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" fill="#fff"/><path fill="#0039a6" d="M0 5.34h24v5.32H0z"/><path fill="#d52b1e" d="M0 10.66h24V16H0z"/></svg>`,
      },
      tr: {
        name: "Türkçe",
        flag: `<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" fill="#e30a17"/><circle cx="8" cy="8" r="4.5" fill="#fff"/><circle cx="9.4" cy="7" r="3.6" fill="#e30a17"/><path fill="#fff" d="m15.1 4.1.95 2.34 2.5.16-1.93 1.6.63 2.43-2.15-1.34-2.15 1.34.63-2.43-1.93-1.6 2.5-.16z"/></svg>`,
      },
    };
    let lang = "en";
    const originals = new WeakMap();

    const dict = (l) => (window.FCGI18N && window.FCGI18N[l]) || {};

    function format(str, vars) {
      return String(str).replace(/\{(\w+)\}/g, (m, k) =>
        vars && k in vars ? vars[k] : m,
      );
    }

    // For JavaScript-generated messages
    function t(key, vars) {
      const s = dict(lang)[key] ?? dict("en")[key] ?? key;
      return format(s, vars);
    }

    function phrase(text) {
      const map = dict(lang).phrases;
      return (map && map[text]) || text;
    }

    function detect() {
      const saved = store.get(KEY) || store.get(OLD_KEY);
      if (saved && SUPPORTED.includes(saved)) return saved;
      const b = (navigator.language || "en").slice(0, 2).toLowerCase();
      return SUPPORTED.includes(b) ? b : "en";
    }

    // Remember what the HTML originally said, per element and field
    function original(el, field, read) {
      let rec = originals.get(el);
      if (!rec) {
        rec = {};
        originals.set(el, rec);
      }
      if (!(field in rec)) rec[field] = read();
      return rec[field];
    }

    function pick(el, field, key, read) {
      const def = original(el, field, read);
      const hasDef = def && def.trim() !== "";
      if (lang === "en") return hasDef ? def : (dict("en")[key] ?? def ?? "");
      return dict(lang)[key] ?? (hasDef ? def : (dict("en")[key] ?? ""));
    }

    function applyAll() {
      const vars = { n: $$(".suite-card[data-category]").length };

      $$("[data-i18n]").forEach((el) => {
        el.textContent = format(
          pick(el, "text", el.dataset.i18n, () => el.textContent),
          vars,
        );
      });
      $$("[data-i18n-ph]").forEach((el) => {
        el.placeholder = pick(
          el,
          "ph",
          el.dataset.i18nPh,
          () => el.placeholder,
        );
      });
      $$("[data-i18n-html]").forEach((el) => {
        el.innerHTML = pick(
          el,
          "html",
          el.dataset.i18nHtml,
          () => el.innerHTML,
        );
      });
      $$("[data-i18n-aria]").forEach((el) => {
        el.setAttribute(
          "aria-label",
          pick(
            el,
            "aria",
            el.dataset.i18nAria,
            () => el.getAttribute("aria-label") || "",
          ),
        );
      });
      // <select data-i18n-opts="key1,key2,..."> — one key per option
      $$("select[data-i18n-opts]").forEach((sel) => {
        const keys = sel.dataset.i18nOpts.split(",").map((k) => k.trim());
        Array.from(sel.options).forEach((opt, i) => {
          if (keys[i])
            opt.textContent = pick(opt, "text", keys[i], () => opt.textContent);
        });
      });

      // Room size spans like "21 m²" (no data-i18n): only the unit changes
      $$(".suite-meta span:not([data-i18n])").forEach((el) => {
        const o = original(el, "area", () => el.textContent);
        el.textContent = o.replace(/m²/g, AREA_UNIT[lang] || "m²");
      });

      document.documentElement.lang = lang;
      $$(".language-picker").forEach((picker) => {
        const meta = LANGUAGE_META[lang] || LANGUAGE_META.en;
        const flag = $(
          ".language-picker-trigger .language-picker-flag",
          picker,
        );
        const name = $(
          ".language-picker-trigger .language-picker-name",
          picker,
        );
        const trigger = $(".language-picker-trigger", picker);
        if (flag) flag.innerHTML = meta.flag;
        if (name) name.textContent = meta.name;
        if (trigger)
          trigger.setAttribute("aria-label", `Language: ${meta.name}`);
        $$(".language-picker-option[data-lang]", picker).forEach((option) => {
          option.setAttribute(
            "aria-pressed",
            String(option.dataset.lang === lang),
          );
          const optionFlag = $(".language-picker-flag", option);
          if (optionFlag)
            optionFlag.innerHTML = LANGUAGE_META[option.dataset.lang].flag;
        });
      });
      document.dispatchEvent(
        new CustomEvent("langchange", { detail: { lang } }),
      );
    }

    function setLang(next) {
      if (!SUPPORTED.includes(next)) return;
      lang = next;
      store.set(KEY, next);
      applyAll();
    }

    function init() {
      lang = detect();
      const pickers = $$(".language-picker");
      pickers.forEach((picker) => {
        const trigger = $(".language-picker-trigger", picker);
        const menu = $(".language-picker-menu", picker);
        if (!trigger || !menu) return;
        trigger.addEventListener("click", () => {
          const open = menu.hidden;
          menu.hidden = !open;
          trigger.setAttribute("aria-expanded", String(open));
        });
        $$(".language-picker-option[data-lang]", picker).forEach((option) => {
          option.addEventListener("click", () => {
            setLang(option.dataset.lang);
            menu.hidden = true;
            trigger.setAttribute("aria-expanded", "false");
            trigger.focus();
          });
        });
      });
      document.addEventListener("click", (event) => {
        pickers.forEach((picker) => {
          if (picker.contains(event.target)) return;
          const menu = $(".language-picker-menu", picker);
          const trigger = $(".language-picker-trigger", picker);
          if (menu) menu.hidden = true;
          if (trigger) trigger.setAttribute("aria-expanded", "false");
        });
      });
      document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        pickers.forEach((picker) => {
          const menu = $(".language-picker-menu", picker);
          const trigger = $(".language-picker-trigger", picker);
          if (menu && !menu.hidden) {
            menu.hidden = true;
            if (trigger) {
              trigger.setAttribute("aria-expanded", "false");
              trigger.focus();
            }
          }
        });
      });
      applyAll();
    }

    return {
      init,
      setLang,
      t,
      phrase,
      get lang() {
        return lang;
      },
    };
  })();

  /* ══════════════════════════════════════════════════════════════
   HEADER, NAV, REVEAL, SCROLL-SPY
   ══════════════════════════════════════════════════════════════ */
  function initHeader() {
    const header = $(".site-header");
    if (!header) return;
    const update = () =>
      header.classList.toggle("scrolled", window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function initMobileNav() {
    const toggle = $(".nav-toggle");
    const nav = $(".site-nav");
    if (!toggle || !nav) return;
    if (nav.id && !toggle.hasAttribute("aria-controls"))
      toggle.setAttribute("aria-controls", nav.id);

    function setOpen(open) {
      nav.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      const icon = $(".material-symbols-outlined", toggle);
      if (icon) icon.textContent = open ? "close" : "menu";
    }

    toggle.addEventListener("click", () =>
      setOpen(!nav.classList.contains("open")),
    );
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a, .btn")) setOpen(false);
    });
    document.addEventListener("click", (e) => {
      if (!toggle.contains(e.target) && !nav.contains(e.target)) setOpen(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  function setActiveNav(page) {
    $$(".site-nav a[data-page]").forEach((a) => {
      const on = a.dataset.page === page;
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  function initActiveNav() {
    const page = document.body.dataset.page || "";
    setActiveNav(page);
    if (page !== "home") return;

    // Scroll-spy on the home page
    const ids = {
      about: "why-choose-hotel",
      facilities: "facilities",
      gallery: "gallery",
      location: "location",
      contact: "contact",
    };
    const sections = Object.entries(ids)
      .map(([p, id]) => ({ page: p, el: document.getElementById(id) }))
      .filter((s) => s.el);
    if (!sections.length) return;

    let ticking = false;
    let current = "";
    function spy() {
      ticking = false;
      const line = 140;
      let best = null;
      sections.forEach((s) => {
        const top = s.el.getBoundingClientRect().top;
        if (top <= line && (!best || top > best.top))
          best = { page: s.page, top };
      });
      const next = best ? best.page : "home";
      if (next !== current) {
        current = next;
        setActiveNav(next);
      }
    }
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(spy);
        }
      },
      { passive: true },
    );
    spy();
  }

  function initReveal() {
    const els = $$(".reveal");
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
  }

  function initGalleryIcons() {
    $$(".gallery-cell").forEach((cell) => {
      if (cell.querySelector(".zoom-icon")) return;
      const zoom = document.createElement("div");
      zoom.className = "zoom-icon";
      zoom.setAttribute("aria-hidden", "true");
      zoom.innerHTML = '<span class="material-symbols-outlined">zoom_in</span>';
      cell.appendChild(zoom);
    });
  }

  function initYear() {
    $$("[data-year]").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ══════════════════════════════════════════════════════════════
   MODAL MANAGER (stack, focus trap, safe close timing)
   ══════════════════════════════════════════════════════════════ */
  const FOCUSABLE =
    'a[href],button:not([disabled]),input:not([disabled]):not([type="hidden"]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
  const modalStack = [];
  const closeTimers = new WeakMap();
  const returnFocus = new WeakMap();

  function openOverlay(overlay, focusSelector) {
    clearTimeout(closeTimers.get(overlay));
    if (!modalStack.includes(overlay)) {
      modalStack.push(overlay);
      returnFocus.set(overlay, document.activeElement);
    }
    overlay.style.display = "flex";
    requestAnimationFrame(() => overlay.classList.add("open"));
    document.body.style.overflow = "hidden";
    const target =
      (focusSelector && $(focusSelector, overlay)) || $(FOCUSABLE, overlay);
    setTimeout(() => {
      if (target) target.focus({ preventScroll: true });
    }, 60);
  }

  function closeOverlay(overlay, instant) {
    const i = modalStack.indexOf(overlay);
    if (i === -1) return;
    modalStack.splice(i, 1);
    overlay.classList.remove("open");
    const finish = () => {
      overlay.style.display = "none";
      if (!modalStack.length) document.body.style.overflow = "";
    };
    clearTimeout(closeTimers.get(overlay));
    if (instant) {
      finish();
    } else {
      closeTimers.set(overlay, setTimeout(finish, 350));
      const prev = returnFocus.get(overlay);
      if (prev && typeof prev.focus === "function")
        prev.focus({ preventScroll: true });
    }
  }

  function initModals() {
    ["bookingModal", "suiteDetailsModal"].forEach((id) => {
      const overlay = document.getElementById(id);
      if (!overlay) return;
      // Close on backdrop only if the press AND the release were on the backdrop
      let downOnBackdrop = false;
      overlay.addEventListener("pointerdown", (e) => {
        downOnBackdrop = e.target === overlay;
      });
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay && downOnBackdrop) closeOverlay(overlay);
        downOnBackdrop = false;
      });
    });

    document.addEventListener("keydown", (e) => {
      if (!modalStack.length) return;
      const top = modalStack[modalStack.length - 1];
      if (e.key === "Escape") {
        e.preventDefault();
        closeOverlay(top);
        return;
      }
      if (e.key === "Tab") {
        const items = $$(FOCUSABLE, top).filter(
          (el) => el.offsetParent !== null,
        );
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

  /* ══════════════════════════════════════════════════════════════
   BOOKING MODAL
   ══════════════════════════════════════════════════════════════ */
  let currentSuite = "";
  let sending = false;

  function setupDates() {
    const cin = $("#res-checkin");
    const cout = $("#res-checkout");
    const today = todayISO();
    if (cin) {
      cin.min = today;
      if (!cin.value || cin.value < today) cin.value = today;
    }
    if (cout) {
      const min = addDays(cin && cin.value ? cin.value : today, 1);
      cout.min = min;
      if (!cout.value || cout.value < min) cout.value = min;
    }
  }

  function initDateInputs() {
    const cin = $("#res-checkin");
    if (cin) cin.addEventListener("change", setupDates);
    // Any other date inputs on the page (e.g. a hero booking bar)
    $$('input[type="date"]').forEach((inp) => {
      if (inp.id === "res-checkin" || inp.id === "res-checkout") return;
      const isOut = /check-?out/i.test(inp.id);
      inp.min = isOut ? addDays(todayISO(), 1) : todayISO();
    });
  }

  function showState(state) {
    const form = $("#reservationForm");
    const spinner = $("#reservationLoading");
    const success = $("#reservationSuccess");
    if (form) form.style.display = state === "form" ? "block" : "none";
    if (spinner) spinner.style.display = state === "loading" ? "flex" : "none";
    if (success) success.style.display = state === "success" ? "flex" : "none";
    setMessage("");
  }

  function setMessage(text) {
    const box = $("#formErrorMessage");
    if (!box) return;
    box.textContent = text || "";
    box.classList.toggle("visible", Boolean(text));
  }

  function openBookingModal(suite) {
    const overlay = $("#bookingModal");
    if (!overlay) return;
    const s = findSuite(suite);
    currentSuite = s ? s.name : suite || "";
    const sel = $("#res-roomtype");
    if (sel && currentSuite) sel.value = currentSuite;
    syncGuestFields();
    setupDates();
    showState("form");
    openOverlay(overlay, "#res-name");
  }

  function syncGuestFields() {
    const room = findSuite($("#res-roomtype")?.value);
    const adults = $("#res-adults");
    const singleAdult = $("#singleAdultValue");
    if (!adults || !singleAdult) return;

    const isSingleRoom = room && room.id === "standard-single";
    if (isSingleRoom) adults.value = "1";
    adults.hidden = Boolean(isSingleRoom);
    adults.disabled = Boolean(isSingleRoom);
    singleAdult.hidden = !isSingleRoom;
  }

  function initGuestFields() {
    const room = $("#res-roomtype");
    if (room) room.addEventListener("change", syncGuestFields);
    syncGuestFields();
  }

  function closeBookingModal() {
    const overlay = $("#bookingModal");
    if (overlay) closeOverlay(overlay);
  }

  function digitsOf(s) {
    return String(s).replace(/\D/g, "");
  }

  // Phone WITH country code, e.g. "+995555123456"
  function getFullPhone(input) {
    if (!input) return "";
    const raw = (input.value || "").trim();
    if (raw.startsWith("+")) return raw;

    // 1) Ask intl-tel-input for the full number
    try {
      let iti = null;
      if (
        window.intlTelInput &&
        typeof window.intlTelInput.getInstance === "function"
      ) {
        iti = window.intlTelInput.getInstance(input);
      } else if (window.intlTelInputGlobals) {
        iti = window.intlTelInputGlobals.getInstance(input);
      }
      if (iti && typeof iti.getNumber === "function") {
        const full = iti.getNumber();
        if (full) return full;
      }
    } catch (_) {}

    // 2) Fallback: read the dial code shown next to the flag
    const wrap = input.closest(".iti");
    const dial = wrap && wrap.querySelector(".iti__selected-dial-code");
    const code = dial ? dial.textContent.trim() : "";
    return code ? code + " " + raw.replace(/^0+/, "") : raw;
  }

  async function submitReservationForm(e) {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget || $("#reservationForm");
    const val = (id) =>
      ((document.getElementById(id) || {}).value || "").trim();

    const data = {
      name: val("res-name"),
      phone: getFullPhone(document.getElementById("res-phone")),
      email: val("res-email"),
      checkin: val("res-checkin"),
      checkout: val("res-checkout"),
      adults: parseInt(val("res-adults"), 10) || 1,
      children: parseInt(val("res-children"), 10) || 0,
      suite: val("res-roomtype"),
      notes: val("res-notes"),
      language: I18N.lang,
      page: location.href,
    };

    // Validation
    if (!data.checkin || !data.checkout || data.checkout <= data.checkin) {
      setMessage(I18N.t("err_dates"));
      return;
    }
    if (data.checkin < todayISO()) {
      setMessage(I18N.t("err_past"));
      return;
    }
    const digits = digitsOf(data.phone).length;
    if (digits < 7 || digits > 15) {
      setMessage(I18N.t("err_phone"));
      return;
    }
    const suite = findSuite(data.suite);
    if (suite && data.adults + data.children > suite.maxGuests) {
      setMessage(I18N.t("err_guests", { max: suite.maxGuests }));
      return;
    }

    // Honeypot: bots fill hidden fields. Pretend success, send nothing.
    const trap = form && form.querySelector('[name="_gotcha"]');
    if (trap && trap.value) {
      showState("success");
      return;
    }

    const subject =
      "Reservation request — " + (data.suite || "Hotel Gonio Batumi");

    // No backend configured: do not fake success. Open the email app instead.
    if (!CONFIG.endpoint) {
      const body = [
        "Name: " + data.name,
        "Phone: " + data.phone,
        "Email: " + data.email,
        "Room: " + data.suite,
        "Check-in: " + data.checkin,
        "Check-out: " + data.checkout,
        "Adults: " + data.adults + ", Children: " + data.children,
        "Notes: " + (data.notes || "-"),
      ].join("\n");
      window.location.href =
        "mailto:" +
        CONFIG.fallbackEmail +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
      setMessage(
        I18N.t("err_no_service", {
          email: CONFIG.fallbackEmail,
          phone: CONFIG.fallbackPhone,
        }),
      );
      return;
    }

    sending = true;
    showState("loading");
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), CONFIG.requestTimeoutMs);
    try {
      const res = await fetch(CONFIG.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(
          Object.assign({}, CONFIG.extraFields, data, {
            subject,
            _subject: subject,
          }),
        ),
        signal: ctrl.signal,
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      if (form) form.reset();
      showState("success");
    } catch (err) {
      console.error("Reservation request failed:", err);
      showState("form");
      setMessage(
        I18N.t("err_send", {
          phone: CONFIG.fallbackPhone,
          email: CONFIG.fallbackEmail,
        }),
      );
    } finally {
      clearTimeout(timer);
      sending = false;
    }
  }

  // Kept so an old hero booking bar (if any) still works
  function handleHeroBarSubmit(e) {
    e.preventDefault();
    const tier = document.getElementById("bar-tier");
    openBookingModal(tier ? tier.value : "");
  }

  function initHoneypot() {
    const form = $("#reservationForm");
    if (!form || form.querySelector('[name="_gotcha"]')) return;
    const h = document.createElement("input");
    h.type = "text";
    h.name = "_gotcha";
    h.tabIndex = -1;
    h.autocomplete = "off";
    h.setAttribute("aria-hidden", "true");
    h.style.cssText =
      "position:absolute;left:-9999px;width:1px;height:1px;opacity:0;";
    form.appendChild(h);
  }

  /* ══════════════════════════════════════════════════════════════
   ROOM DETAILS MODAL
   ══════════════════════════════════════════════════════════════ */
  // Translate one piece of English text through its key map.
  // English stays as written in the HTML; KA/RU use the key, then phrases.
  function label(map, text) {
    const key = map[text];
    if (key && I18N.lang !== "en") {
      const v = I18N.t(key);
      if (v !== key) return v;
    }
    return I18N.phrase(text);
  }

  function openSuiteDetails(title, area, bed, amenitiesStr) {
    const overlay = $("#suiteDetailsModal");
    if (!overlay) return;
    currentSuite = title; // stays English: used to preselect the booking form
    $("#modalSuiteTitle").textContent = label(ROOM_KEYS, title);
    $("#modalSuiteArea").textContent = String(area || "").replace(
      /m²/g,
      AREA_UNIT[I18N.lang] || "m²",
    );
    $("#modalSuiteBed").textContent = label(BED_KEYS, bed);

    const box = $("#modalSuiteAmenities");
    if (box) {
      box.textContent = "";
      String(amenitiesStr || "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
        .forEach((text) => {
          const item = document.createElement("div");
          item.className = "amenity-item";
          const icon = document.createElement("span");
          icon.className = "material-symbols-outlined";
          icon.setAttribute("aria-hidden", "true");
          icon.textContent = "check_circle";
          item.append(icon, " " + label(AMENITY_KEYS, text));
          box.appendChild(item);
        });
    }
    openOverlay(overlay);
  }

  function closeSuiteDetails() {
    const overlay = $("#suiteDetailsModal");
    if (overlay) closeOverlay(overlay);
  }

  function proceedFromDetails() {
    const overlay = $("#suiteDetailsModal");
    if (overlay) closeOverlay(overlay, true);
    openBookingModal(currentSuite);
  }

  /* ══════════════════════════════════════════════════════════════
   ROOM FILTER
   ══════════════════════════════════════════════════════════════ */
  function initFilter() {
    const btns = $$(".filter-btn");
    const cards = $$(".suite-card[data-category]");
    if (!btns.length) return;
    btns.forEach((b) =>
      b.setAttribute("aria-pressed", String(b.classList.contains("active"))),
    );
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;
        btns.forEach((b) => {
          const on = b === btn;
          b.classList.toggle("active", on);
          b.setAttribute("aria-pressed", String(on));
        });
        cards.forEach((card) => {
          const show = filter === "all" || card.dataset.category === filter;
          card.hidden = !show;
          card.style.display = show ? "" : "none";
        });
      });
    });
  }

  /* ══════════════════════════════════════════════════════════════
   BOOT
   ══════════════════════════════════════════════════════════════ */
  // Inline onclick="" handlers need these on window
  Object.assign(window, {
    I18N,
    openBookingModal,
    closeBookingModal,
    submitReservationForm,
    openSuiteDetails,
    closeSuiteDetails,
    proceedFromDetails,
    handleHeroBarSubmit,
  });

  function boot() {
    initHeader();
    initMobileNav();
    initActiveNav();
    initReveal();
    initGalleryIcons();
    initYear();
    initModals();
    initHoneypot();
    initDateInputs();
    initFilter();
    I18N.init();
    initGuestFields();
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
