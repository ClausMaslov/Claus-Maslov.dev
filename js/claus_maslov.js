(function () { "use strict"; var e = { 6242: function (e, t, n) { var o = n(9242), c = n(3396), r = n(7139), a = n(4870); const s = (0, c._)("h1", { class: "nav__logo" }, [(0, c.Uk)(" Claus"), (0, c._)("span", null, "_"), (0, c.Uk)("Maslov ")], -1), i = (0, c._)("svg", { width: "25", height: "25", viewBox: "0 0 25 25", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, [(0, c._)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M24.2812 12.5L20.8333 15.9479V20.8333H15.9479L12.5 24.2812L9.05208 20.8333H4.16667V15.9479L0.71875 12.5L4.16667 9.05208V4.16667H9.05208L12.5 0.71875L15.9479 4.16667H20.8333V9.05208L24.2812 12.5ZM18.75 12.5C18.75 9.05208 15.9479 6.25 12.5 6.25V18.75C15.9479 18.75 18.75 15.9479 18.75 12.5Z", fill: "black" })], -1), l = [i], d = (0, c.uE)('<footer class="footer"><div class="container"><div class="footer__container"><div class="footer__creds footer-creds"><div class="footer-creds__logo">Claus_Maslov<span> v5.0</span></div><div class="footer-creds__info"><b>Копирование и изменения запрещены</b><br> Developed by Claus_Maslov @ 2023<br>Support with berch.cloud</a></div></div></div></div></footer>', 1); var _ = { __name: "App", setup(e) { const t = (0, a.qj)({ colorScheme: "light-mode" }), n = () => { "light-mode" === t.colorScheme ? t.colorScheme = "dark-mode" : t.colorScheme = "light-mode" }; return (0, c.bv)((() => { !0 === window.matchMedia("(prefers-color-scheme: dark)").matches && (t.colorScheme = "dark-mode") })), (e, o) => { const a = (0, c.up)("router-view"); return (0, c.wg)(), (0, c.iD)("div", { id: "page-main", class: (0, r.C_)(t.colorScheme) }, [(0, c._)("nav", { class: "nav" }, [(0, c._)("div", { class: "container" }, [(0, c._)("div", { class: "nav__container" }, [s, (0, c._)("ul", { class: "nav__list nav-list" }, [(0, c._)("li", { class: "nav-list__item" }, [(0, c._)("button", { onClick: n, id: "nav-theme" }, l)])])])])]), (0, c.Wm)(a), d], 2) } } }; const v = _; var p = v, u = n(678), f = n.p + "image/a.jpg"; const h = e => ((0, c.dD)("data-v-6596a892"), e = e(), (0, c.Cn)(), e), m = { class: "s-header" }, w = h((() => (0, c._)("img", { src: f, alt: "", class: "s-header__img" }, null, -1))), g = { class: "s-header__info s-header-info" }, b = h((() => (0, c._)("div", { class: "s-header-info__title" }, "Claus Maslov ✌", -1))), k = { class: "s-header-info__desc" }; var C = { __name: "HeaderComponent", setup(e) { const t = (0, a.qj)({ desc: "Веб-разработчик. Из Ukraine 🇺🇦" }); return (e, n) => ((0, c.wg)(), (0, c.iD)("section", m, [w, (0, c._)("div", g, [b, (0, c._)("div", k, (0, r.zw)(t.desc), 1)])])) } }, L = n(89); const S = (0, L.Z)(C, [["__scopeId", "data-v-6596a892"]]); var x = S; const y = e => ((0, c.dD)("data-v-62b4221b"), e = e(), (0, c.Cn)(), e), O = { class: "s-contact" }, j = y((() => (0, c._)("h2", { class: "s-contact__title g-title" }, "Связаться со мной", -1))), H = { class: "s-contact__wrapper s-contact-wrapper" }, M = ["href"], A = y((() => (0, c._)("div", { class: "s-contact-wrapper-item__logo" }, [(0, c._)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, [(0, c._)("path", { d: "M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z" })])], -1))), D = [A], Z = ["href"], B = y((() => (0, c._)("div", { class: "s-contact-wrapper-item__logo" }, [(0, c._)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512" }, [(0, c._)("path", { d: "M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z" })])], -1))), U = [B], V = ["href"], P = y((() => (0, c._)("div", { class: "s-contact-wrapper-item__logo" }, [(0, c._)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512" }, [(0, c._)("path", { d: "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" })])], -1))), W = [P]; var q = { __name: "LinksComponent", setup(e) { const t = (0, a.qj)({ telegram: "https://t.me/claus_maslov", vk: "https://vk.com/id777083974", discord: "https://discord.gg/uQzh6pNa" }); return (e, n) => ((0, c.wg)(), (0, c.iD)("section", O, [j, (0, c._)("div", H, [(0, c._)("a", { target: "_blank", href: t.telegram, id: "c-telegram", class: "s-contact-wrapper__item s-contact-wrapper-item" }, D, 8, M), (0, c._)("a", { target: "_blank", href: t.vk, id: "c-vk", class: "s-contact-wrapper__item s-contact-wrapper-item" }, U, 8, Z), (0, c._)("a", { target: "_blank", href: t.discord, id: "c-discord", class: "s-contact-wrapper__item s-contact-wrapper-item" }, W, 8, V)])])) } }; const z = (0, L.Z)(q, [["__scopeId", "data-v-62b4221b"]]); var E = z; const N = { class: "container" }; var T = { __name: "MainPage", setup(e) { const t = () => { let e = document.querySelectorAll("section"); for (let t = 0; t < e.length; t++) { let n = e[t]; setTimeout((() => { n.classList.add("section--loaded") }), 300 * t) } }; return (0, c.bv)((() => { t() })), (e, t) => ((0, c.wg)(), (0, c.iD)("main", null, [(0, c._)("div", N, [(0, c.Wm)((0, a.SU)(x)), (0, c.Wm)((0, a.SU)(E))])])) } }; const I = T; var F = I; const G = [{ path: "/", name: "main", component: F }], K = (0, u.p7)({ history: (0, u.PO)("/"), routes: G }); var J = K; (0, o.ri)(p).use(J).use(J).mount("#app") } }, t = {}; function n(o) { var c = t[o]; if (void 0 !== c) return c.exports; var r = t[o] = { exports: {} }; return e[o](r, r.exports, n), r.exports } n.m = e, function () { var e = []; n.O = function (t, o, c, r) { if (!o) { var a = 1 / 0; for (d = 0; d < e.length; d++) { o = e[d][0], c = e[d][1], r = e[d][2]; for (var s = !0, i = 0; i < o.length; i++)(!1 & r || a >= r) && Object.keys(n.O).every((function (e) { return n.O[e](o[i]) })) ? o.splice(i--, 1) : (s = !1, r < a && (a = r)); if (s) { e.splice(d--, 1); var l = c(); void 0 !== l && (t = l) } } return t } r = r || 0; for (var d = e.length; d > 0 && e[d - 1][2] > r; d--)e[d] = e[d - 1]; e[d] = [o, c, r] } }(), function () { n.n = function (e) { var t = e && e.__esModule ? function () { return e["default"] } : function () { return e }; return n.d(t, { a: t }), t } }(), function () { n.d = function (e, t) { for (var o in t) n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] }) } }(), function () { n.g = function () { if ("object" === typeof globalThis) return globalThis; try { return this || new Function("return this")() } catch (e) { if ("object" === typeof window) return window } }() }(), function () { n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) } }(), function () { n.p = "/" }(), function () { var e = { 143: 0 }; n.O.j = function (t) { return 0 === e[t] }; var t = function (t, o) { var c, r, a = o[0], s = o[1], i = o[2], l = 0; if (a.some((function (t) { return 0 !== e[t] }))) { for (c in s) n.o(s, c) && (n.m[c] = s[c]); if (i) var d = i(n) } for (t && t(o); l < a.length; l++)r = a[l], n.o(e, r) && e[r] && e[r][0](), e[r] = 0; return n.O(d) }, o = self["webpackChunkapp"] = self["webpackChunkapp"] || []; o.forEach(t.bind(null, 0)), o.push = t.bind(null, o.push.bind(o)) }(); var o = n.O(void 0, [998], (function () { return n(6242) })); o = n.O(o) })();
//# sourceMappingURL=app.d2151eca.js.map