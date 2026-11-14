/* polish.js — progress bar, sticky mobile CTA, lightbox, header state */
(function () {
  "use strict";

  /* Scroll progress line */
  var bar = document.createElement("div");
  bar.className = "scroll-progress";
  document.body.appendChild(bar);

  var header = document.querySelector(".site-header");
  var cta = document.getElementById("mobileCta");
  var ticking = false;

  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform =
      "scaleX(" + (max > 0 ? Math.min(y / max, 1) : 0) + ")";
    if (header) header.classList.toggle("is-scrolled", y > 10);
    if (cta) cta.classList.toggle("show", y > window.innerHeight * 0.6);
    ticking = false;
  }
  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(onScroll);
      }
    },
    { passive: true },
  );
  onScroll();

  /* Lightbox */
  var SELECTORS =
    ".fac-photos img, .fac-near > img, #gallery img, .gal-all img, .loc-photo";
  var box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML =
    '<img alt=""><button type="button" aria-label="Close">&times;</button>';
  document.body.appendChild(box);
  var boxImg = box.querySelector("img");

  function closeBox() {
    box.classList.remove("open");
    /* keep page locked if the gallery popup is still open behind */
    var gm = document.getElementById("galleryModal");
    if (!(gm && !gm.hidden)) document.body.style.overflow = "";
  }
  document.addEventListener("click", function (e) {
    var img = e.target.closest && e.target.closest(SELECTORS);
    if (img && img.tagName === "IMG") {
      boxImg.src = img.currentSrc || img.src;
      boxImg.alt = img.alt || "";
      box.classList.add("open");
      document.body.style.overflow = "hidden";
    } else if (
      box.classList.contains("open") &&
      (e.target === box || e.target.closest(".lightbox button"))
    ) {
      closeBox();
    }
  });

  /* Esc: close the enlarged photo first (capture phase), popup stays open */
  document.addEventListener(
    "keydown",
    function (e) {
      if (e.key === "Escape" && box.classList.contains("open")) {
        closeBox();
        e.stopPropagation();
      }
    },
    true,
  );

  /* Reveal on scroll */
  if ("IntersectionObserver" in window) {
    var items = document.querySelectorAll(
      ".suite-card, .inclusion-item, .fac-item, .fac-near, .loc-card",
    );
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    items.forEach(function (el) {
      el.classList.add("reveal");
      io.observe(el);
    });
  }
})();
