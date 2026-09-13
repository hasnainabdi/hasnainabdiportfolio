// GTM container loader — served as a static file so it renders server-side
// and is reliably detectable by Google Tag Assistant.
// This loads AFTER page is interactive (lazyOnload strategy) to avoid
// blocking LCP on mobile.
(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-WQ7SRMQM");
