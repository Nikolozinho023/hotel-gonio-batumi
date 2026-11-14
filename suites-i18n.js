(function () {
  "use strict";

  /* English text -> [Georgian, Russian] */
  var D = {
    "Sanctuaries of Light & Tactile Comfort.": [
      "სინათლით სავსე და კომფორტული ნომრები.",
      "Светлые и комфортные номера.",
    ],
    "Framed by floor-to-ceiling glass, natural travertine masonry, and bleached oak millwork, every residence provides an uninterrupted sensory dialogue with the Black Sea horizon.":
      [
        "იატაკიდან ჭერამდე მინის ფანჯრები, ბუნებრივი ქვა და ღია ფერის ხის დეტალები — ყველა ნომერი შავი ზღვის ხედს გთავაზობთ.",
        "Панорамные окна от пола до потолка, натуральный камень и светлое дерево — из каждого номера открывается вид на Чёрное море.",
      ],
    "Unobstructed Horizons": ["ღია ჰორიზონტი", "Открытый горизонт"],
    "Private Terraces": ["კერძო ტერასები", "Личные террасы"],
    "Included with every stay": [
      "ყველა ვიზიტისას შედის",
      "Включено в каждое проживание",
    ],

    "Signature Suite": ["ფირმული ლუქსი", "Фирменный люкс"],
    Executive: ["ექსეკუტივი", "Бизнес"],
    Garden: ["ბაღი", "Сад"],
    Penthouse: ["პენტჰაუსი", "Пентхаус"],

    "48 m²": ["48 მ²", "48 м²"],
    "72 m²": ["72 მ²", "72 м²"],
    "58 m²": ["58 მ²", "58 м²"],
    "190 m²": ["190 მ²", "190 м²"],
    "King Bed": ["დიდი საწოლი", "Кровать King"],
    "Black Sea Panorama": ["შავი ზღვის პანორამა", "Панорама Чёрного моря"],
    "Panoramic Views": ["პანორამული ხედები", "Панорамные виды"],
    "Garden Access": ["ბაღში გასასვლელი", "Выход в сад"],
    "2 Bedrooms": ["2 საძინებელი", "2 спальни"],
    "Full Sea Panorama": ["ზღვის სრული პანორამა", "Полная панорама моря"],

    From: ["საწყისი ფასი", "от"],
    "per night": ["ღამეში", "за ночь"],

    "Floor-to-ceiling glass doors that open directly to the ocean breeze. Fitted with natural oak cabinetry, hand-woven linen draping, and an expansive sunset lounge that blurs the boundary between interior comfort and coastal air.":
      [
        "მინის კარები იატაკიდან ჭერამდე პირდაპირ ზღვის სიოში გადიან. ბუნებრივი მუხის ავეჯი, სელის ფარდები და დასასვენებელი ადგილი მზის ჩასვლის სანახავად.",
        "Стеклянные двери от пола до потолка открываются навстречу морскому бризу. Мебель из натурального дуба, льняные шторы и просторная зона отдыха для наблюдения за закатом.",
      ],
    "A generous dual-aspect living area with wrap-around views, hand-woven Georgian textile accents, a dedicated work alcove finished in pale travertine, and a private plunge terrace suspended above the sea.":
      [
        "ორმხრივი ხედებით ფართო მისაღები, ქართული ხელნაკეთი ტექსტილის დეტალები, სამუშაო კუთხე და კერძო ტერასა ზღვის თავზე.",
        "Просторная гостиная с панорамными видами, декор из грузинского текстиля ручной работы, рабочая зона и личная терраса над морем.",
      ],
    "Set amid subtropical gardens with a private stone terrace, outdoor daybed, and direct garden access. Serene and utterly secluded — ideal for those who seek restorative privacy alongside nature.":
      [
        "სუბტროპიკულ ბაღებში მდებარე ნომერი კერძო ქვის ტერასით, გარე ტახტითა და ბაღში პირდაპირი გასასვლელით. მშვიდი და განმარტოებული — დასვენებისთვის ბუნების გვერდით.",
        "Номер среди субтропических садов с личной каменной террасой, уличной кушеткой и прямым выходом в сад. Тихо и уединённо — идеально для спокойного отдыха рядом с природой.",
      ],
    "The pinnacle of coastal living. Two bedrooms, a private rooftop terrace with infinity plunge pool, a formal dining salon, full kitchen, and a dedicated butler suite. Reserved for guests who demand absolute discretion and total immersion in the Black Sea horizon.":
      [
        "სანაპირო ცხოვრების მწვერვალი. ორი საძინებელი, კერძო ტერასა სახურავზე აუზით, სასადილო სალონი, სრული სამზარეულო და პერსონალური მსახური. სტუმრებისთვის, ვისაც სრული კონფიდენციალურობა და შავი ზღვის ხედი სურს.",
        "Вершина прибрежной жизни. Две спальни, личная терраса на крыше с бассейном, столовая-салон, полноценная кухня и персональный дворецкий. Для гостей, ценящих полную приватность и вид на Чёрное море.",
      ],

    "High-speed Fibre": ["მაღალსიჩქარიანი ინტერნეტი", "Скоростной интернет"],
    "Marble Rainfall Shower": [
      "მარმარილოს საშხაპე",
      "Душ с мраморной отделкой",
    ],
    "In-room Minibar": ["მინიბარი ნომერში", "Мини-бар в номере"],
    "Sea-view Terrace": ["ტერასა ზღვის ხედით", "Терраса с видом на море"],
    "24/7 Concierge": ["კონსიერჟი 24/7", "Консьерж 24/7"],
    "Robes & Slippers": ["ხალათი და ჩუსტები", "Халаты и тапочки"],
    Robes: ["ხალათი", "Халаты"],
    "Wrap-around Glazing": ["პანორამული ფანჯრები", "Панорамное остекление"],
    "Panoramic Glazing": ["პანორამული ფანჯრები", "Панорамное остекление"],
    "Nespresso Machine": ["Nespresso-ს აპარატი", "Кофемашина Nespresso"],
    "Butler Service": ["პერსონალური მსახური", "Услуги дворецкого"],
    "Deep-soak Tub": ["ღრმა აბაზანა", "Глубокая ванна"],
    "Walk-in Wardrobe": ["გარდერობის ოთახი", "Гардеробная"],
    "Private Plunge Terrace": [
      "კერძო ტერასა აუზით",
      "Личная терраса с купелью",
    ],
    "Private Stone Terrace": ["კერძო ქვის ტერასა", "Личная каменная терраса"],
    "Outdoor Daybed": ["გარე ტახტი", "Уличная кушетка"],
    "Botanical Garden Access": [
      "ბოტანიკურ ბაღში გასასვლელი",
      "Выход в ботанический сад",
    ],
    "Rainfall Shower": ["წვიმის საშხაპე", "Тропический душ"],
    "Curated Mini Library": ["მინი ბიბლიოთეკა", "Мини-библиотека"],
    "Blackout Curtains": ["სინათლისგან დამცავი ფარდები", "Плотные шторы"],
    "Rooftop Plunge Pool": ["აუზი სახურავზე", "Бассейн на крыше"],
    "Private Chef's Kitchen": [
      "სამზარეულო პირადი შეფისთვის",
      "Кухня для личного шефа",
    ],
    "Private Chef Kitchen": [
      "სამზარეულო პირადი შეფისთვის",
      "Кухня для личного шефа",
    ],
    "Formal Dining Salon": ["სასადილო სალონი", "Столовая-салон"],
    "Dedicated Butler": ["პერსონალური მსახური", "Персональный дворецкий"],
    "Private Transfer": ["კერძო ტრანსფერი", "Личный трансфер"],
    "Cellar Wine Selection": ["ღვინის კოლექცია", "Подборка вин"],

    /* texts shown in the Details popup */
    "King Size Bed & Balcony": [
      "დიდი საწოლი და აივანი",
      "Кровать King-size и балкон",
    ],
    "King Bed & Plunge Terrace": [
      "დიდი საწოლი და ტერასა აუზით",
      "Кровать King и терраса с купелью",
    ],
    "King Bed & Garden Access": [
      "დიდი საწოლი და ბაღში გასასვლელი",
      "Кровать King и выход в сад",
    ],
    "2 King Bedrooms": [
      "2 საძინებელი დიდი საწოლებით",
      "2 спальни с кроватями King",
    ],
  };

  /* Suite names reuse your existing i18n keys, so they stay consistent */
  var N = {
    "Deluxe Sea View Suite": "suite_deluxe",
    "Panoramic Executive Haven": "suite_exec",
    "Garden Terrace Residence": "suite_garden",
    "Penthouse Maritime Grand Suite": "suite_penthouse",
  };

  var lang = "en";
  var orig = new WeakMap();

  function norm(s) {
    return s.replace(/\s+/g, " ").trim();
  }

  function lookup(en) {
    var i = lang === "ka" ? 0 : 1;
    if (N[en]) {
      var dict = window.FCGI18N && window.FCGI18N[lang];
      if (dict && dict[N[en]]) return dict[N[en]];
    }
    return D[en] ? D[en][i] : null;
  }

  function apply(root) {
    root = root || document.body;
    if (!root) return;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var nodes = [];
    var n;
    while ((n = w.nextNode())) nodes.push(n);

    nodes.forEach(function (node) {
      var p = node.parentElement;
      if (!p || /^(SCRIPT|STYLE|TEXTAREA)$/.test(p.tagName)) return;
      /* main.js already translates anything with data-i18n */
      if (p.closest("[data-i18n], .material-symbols-outlined")) return;

      var o = orig.get(node);
      var en = o ? o.en : norm(node.nodeValue);
      if (!en) return;

      if (lang === "en") {
        if (o) {
          node.nodeValue = o.raw;
          orig.delete(node);
        }
        return;
      }

      var t = lookup(en);
      if (!t) return;
      if (!o) orig.set(node, { en: en, raw: node.nodeValue });
      var lead = node.nodeValue.match(/^\s*/)[0];
      var trail = node.nodeValue.match(/\s*$/)[0];
      node.nodeValue = lead + t + trail;
    });
  }

  /* main.js fires "langchange" after every language switch and on page load */
  document.addEventListener("langchange", function (e) {
    lang = (e.detail && e.detail.lang) || "en";
    apply();
  });

  function init() {
    if (window.I18N && window.I18N.lang) lang = window.I18N.lang;
    apply();

    /* translate the Details popup every time it is filled */
    var m = document.getElementById("suiteDetailsModal");
    if (m && window.MutationObserver) {
      var cfg = { childList: true, subtree: true, characterData: true };
      var mo = new MutationObserver(function () {
        mo.disconnect();
        apply(m);
        mo.observe(m, cfg);
      });
      mo.observe(m, cfg);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
