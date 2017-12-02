﻿!function (n, r) { "use strict"; function e(n) { return "undefined" == typeof n } function t(n) { return !e(n) } function o(n) { return "object" == typeof n } function u(n) { return "boolean" == typeof n } function c(n) { return u(n) && !n } function a(n) { return "string" == typeof n } function i(n) { return "[object Array]" === Object.prototype.toString.call(n) } function s(n) { return "function" == typeof n } function f() { } function l() { return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (n) { var r = 16 * Math.random() | 0, e = "x" == n ? r : 3 & r | 8; return e.toString(16) }) } function g(n) { try { for (var r = 1, e = arguments.length; e > r; r++) { var t, o = arguments[r]; if (o) for (t in o) o.hasOwnProperty(t) && (n[t] = o[t]) } } catch (u) { } return n } function p(n) { if (!n) return {}; try { return JSON.parse(n) } catch (r) { } var e = /[^=&;\s]+=[^=&;\s]+/g, t = n.match(e), o = {}; if (t && t.length) for (var u = 0, c = t.length; c > u; u++) { var a = t[u], i = /[^=]+/g, s = a.match(i); s.length ? o[s[0]] = s[1] : null } return o } function m(n, r) { function e(e) { return o = r(n[e], e, n), !(u && c(o)) } var t, o; if (n) if (i(n)) for (var a = 0, s = n.length; s > a && e(a) ; a++); else if (n.forEach && n.forEach !== m) n.forEach(r, this, n); else for (t in n) if (n.hasOwnProperty(t) && !e(t)) break } function h(n) { var r; if (e(n)) r = ""; else if (o(n)) try { r = JSON.stringify(n) } catch (t) { r = n.toString() } else r = s(n) ? "function " + (n.name || "") : n.toString(); return r } function v(n, r, e) { function t() { try { var n = this, t = Array.prototype.slice.call(arguments, 0); if (c(e(r, t))) return; o.apply(n, arguments) } catch (u) { yn.error("apply error", u) } } var o; return n.prototype ? (o = n.prototype[r]) && (n.prototype[r] = t) : (o = n[r] || f, n[r] = t), o } function d(n) { return o(n) && n.stack && n.message && n.name } function y(n, r) { var e = (65535 & n) + (65535 & r), t = (n >> 16) + (r >> 16) + (e >> 16); return t << 16 | 65535 & e } function x(n, r) { return n << r | n >>> 32 - r } function k(n, r, e, t, o, u) { return y(x(y(y(r, n), y(t, u)), o), e) } function b(n, r, e, t, o, u, c) { return k(r & e | ~r & t, n, r, o, u, c) } function w(n, r, e, t, o, u, c) { return k(r & t | e & ~t, n, r, o, u, c) } function E(n, r, e, t, o, u, c) { return k(r ^ e ^ t, n, r, o, u, c) } function C(n, r, e, t, o, u, c) { return k(e ^ (r | ~t), n, r, o, u, c) } function A(n, r) { n[r >> 5] |= 128 << r % 32, n[(r + 64 >>> 9 << 4) + 14] = r; var e, t, o, u, c, a = 1732584193, i = -271733879, s = -1732584194, f = 271733878; for (e = 0; e < n.length; e += 16) t = a, o = i, u = s, c = f, a = b(a, i, s, f, n[e], 7, -680876936), f = b(f, a, i, s, n[e + 1], 12, -389564586), s = b(s, f, a, i, n[e + 2], 17, 606105819), i = b(i, s, f, a, n[e + 3], 22, -1044525330), a = b(a, i, s, f, n[e + 4], 7, -176418897), f = b(f, a, i, s, n[e + 5], 12, 1200080426), s = b(s, f, a, i, n[e + 6], 17, -1473231341), i = b(i, s, f, a, n[e + 7], 22, -45705983), a = b(a, i, s, f, n[e + 8], 7, 1770035416), f = b(f, a, i, s, n[e + 9], 12, -1958414417), s = b(s, f, a, i, n[e + 10], 17, -42063), i = b(i, s, f, a, n[e + 11], 22, -1990404162), a = b(a, i, s, f, n[e + 12], 7, 1804603682), f = b(f, a, i, s, n[e + 13], 12, -40341101), s = b(s, f, a, i, n[e + 14], 17, -1502002290), i = b(i, s, f, a, n[e + 15], 22, 1236535329), a = w(a, i, s, f, n[e + 1], 5, -165796510), f = w(f, a, i, s, n[e + 6], 9, -1069501632), s = w(s, f, a, i, n[e + 11], 14, 643717713), i = w(i, s, f, a, n[e], 20, -373897302), a = w(a, i, s, f, n[e + 5], 5, -701558691), f = w(f, a, i, s, n[e + 10], 9, 38016083), s = w(s, f, a, i, n[e + 15], 14, -660478335), i = w(i, s, f, a, n[e + 4], 20, -405537848), a = w(a, i, s, f, n[e + 9], 5, 568446438), f = w(f, a, i, s, n[e + 14], 9, -1019803690), s = w(s, f, a, i, n[e + 3], 14, -187363961), i = w(i, s, f, a, n[e + 8], 20, 1163531501), a = w(a, i, s, f, n[e + 13], 5, -1444681467), f = w(f, a, i, s, n[e + 2], 9, -51403784), s = w(s, f, a, i, n[e + 7], 14, 1735328473), i = w(i, s, f, a, n[e + 12], 20, -1926607734), a = E(a, i, s, f, n[e + 5], 4, -378558), f = E(f, a, i, s, n[e + 8], 11, -2022574463), s = E(s, f, a, i, n[e + 11], 16, 1839030562), i = E(i, s, f, a, n[e + 14], 23, -35309556), a = E(a, i, s, f, n[e + 1], 4, -1530992060), f = E(f, a, i, s, n[e + 4], 11, 1272893353), s = E(s, f, a, i, n[e + 7], 16, -155497632), i = E(i, s, f, a, n[e + 10], 23, -1094730640), a = E(a, i, s, f, n[e + 13], 4, 681279174), f = E(f, a, i, s, n[e], 11, -358537222), s = E(s, f, a, i, n[e + 3], 16, -722521979), i = E(i, s, f, a, n[e + 6], 23, 76029189), a = E(a, i, s, f, n[e + 9], 4, -640364487), f = E(f, a, i, s, n[e + 12], 11, -421815835), s = E(s, f, a, i, n[e + 15], 16, 530742520), i = E(i, s, f, a, n[e + 2], 23, -995338651), a = C(a, i, s, f, n[e], 6, -198630844), f = C(f, a, i, s, n[e + 7], 10, 1126891415), s = C(s, f, a, i, n[e + 14], 15, -1416354905), i = C(i, s, f, a, n[e + 5], 21, -57434055), a = C(a, i, s, f, n[e + 12], 6, 1700485571), f = C(f, a, i, s, n[e + 3], 10, -1894986606), s = C(s, f, a, i, n[e + 10], 15, -1051523), i = C(i, s, f, a, n[e + 1], 21, -2054922799), a = C(a, i, s, f, n[e + 8], 6, 1873313359), f = C(f, a, i, s, n[e + 15], 10, -30611744), s = C(s, f, a, i, n[e + 6], 15, -1560198380), i = C(i, s, f, a, n[e + 13], 21, 1309151649), a = C(a, i, s, f, n[e + 4], 6, -145523070), f = C(f, a, i, s, n[e + 11], 10, -1120210379), s = C(s, f, a, i, n[e + 2], 15, 718787259), i = C(i, s, f, a, n[e + 9], 21, -343485551), a = y(a, t), i = y(i, o), s = y(s, u), f = y(f, c); return [a, i, s, f] } function S(n) { var r, e = ""; for (r = 0; r < 32 * n.length; r += 8) e += String.fromCharCode(n[r >> 5] >>> r % 32 & 255); return e } function j(n) { var r, e = []; for (e[(n.length >> 2) - 1] = void 0, r = 0; r < e.length; r += 1) e[r] = 0; for (r = 0; r < 8 * n.length; r += 8) e[r >> 5] |= (255 & n.charCodeAt(r / 8)) << r % 32; return e } function O(n) { return S(A(j(n), 8 * n.length)) } function D(n, r) { var e, t, o = j(n), u = [], c = []; for (u[15] = c[15] = void 0, o.length > 16 && (o = A(o, 8 * n.length)), e = 0; 16 > e; e += 1) u[e] = 909522486 ^ o[e], c[e] = 1549556828 ^ o[e]; return t = A(u.concat(j(r)), 512 + 8 * r.length), S(A(c.concat(t), 640)) } function q(n) { var r, e, t = "0123456789abcdef", o = ""; for (e = 0; e < n.length; e += 1) r = n.charCodeAt(e), o += t.charAt(r >>> 4 & 15) + t.charAt(15 & r); return o } function z(n) { return unescape(encodeURIComponent(n)) } function G(n) { return O(z(n)) } function M(n) { return q(G(n)) } function R(n, r) { return D(z(n), z(r)) } function _(n, r) { return q(R(n, r)) } function I(n, r, e) { return r ? e ? R(r, n) : _(r, n) : e ? G(n) : M(n) } function J() { if (xn) return xn; var n = p(fn.cookie); return xn = n[En] ? n[En] : n[En] = L() } function L() { var n = l(); return fn.cookie = En + "=" + n + ";expires=" + new Date(+new Date + 63072e6).toGMTString() + ";", n } function N(n) { var r = 2; if (n.length <= r) return n; var e, t, u = n.length - 1; for (((e = s(n[u])) || (t = o(n[u]))) && u--, e && u > r && o(n[u]) && u--; u > r; u--) n[u] = h(n[u]); return n } function P(n, r, e) { if (On && r.length) { dn += e ? e + 3 : 3; var t = N(r); en.apply(wn, t) } return jn } function T(n, r) { var e = r[0]; return e ? void 0 : P(n, ["Assertion failed", "Assertion failed"], 1) } function U(n, r) { function e(n, r) { yn[n] = function () { r.apply(t, arguments) } } for (var t = sn.console, o = 0, u = n.length; u > o; o++) { var c = n[o], a = v(t, c, function (n, e) { return r(n, e) }); Dn[c] = a, yn[c] && a && e(c, a) } } function H() { U(Cn, P), U(An, T) } function V(n, r, e, u) { var c = qn[n]; c && !i(r) && (o(r) ? u ? qn[n] = g({}, r) : g(c, r) : a(r) && t(e) && (c[r] = e)) } function X(n, r) { var e = qn[n]; e && (r ? (e[r] = null, delete e[r]) : qn[n] = {}) } function $(n, r) { if (!n) return qn; var e = qn[n]; return r ? e[r] : e } function B(n, r) { var e = r[0], t = r[1], o = r[2], u = r[3], c = r[4], a = c || { name: "Global Error" }; a.message = a.message || e, a.file = a.file || t, a.line = a.line || o, a.column = a.column || u; var i = e + "\n	 at " + a.file + ":" + a.line; if (a.column ? "" : i += ":" + a.column, a.stack) { var s = a.stack.split("\n"), o = s[0]; t && -1 === o.indexOf(t) && (s[0] = i + "\n" + o), a.stack = s.join("\n") } else a.stack = i; a.from = "Global", a.ts = +new Date, tn(a) } function F() { v(sn, "onerror", B) } function K(n, r) { var e = new sn.XMLHttpRequest; return e.open(n, r), e } function Q(n) { kn = n } function W() { return hn.length ? hn[hn.length - 1] : null } function Y(n) { var r = $(), e = r.website; n.path = t(kn) ? kn : ln.pathname, n.location = t(bn) ? bn : ln.href, e.version = e.version || "0.0.1", n.user = r.user, n.customize = g({}, r.custom, n.customize); var o = +new Date, u = { key: an, ts: o, app: e, device: { id: J() }, crash: n, sdk_version: gn, sign: I(o + I(an + vn)).substr(8, 4) }, c = W(); return c ? n.prev = c.crash.md5 : 0, u } function Z(n, r, e, t) { var o = n.md5; o && delete n.md5, wn && s(wn.onerror) && wn.onerror(n, r), r = r || null; var u = {}, c = on(n), a = { message: c.message, stack: c.stack, collector: n.name }, i = W(); if (i && n.from === i.from) { var f = 500; if (n.ts - i.ts < f) return } try { if (a.md5 = I(a.message + a.stack), a.customize = r, l = Y(a), !l.key) return yn.warn("å°šæœªé…ç½®é¡¹ç›®çš„general key"), u; var l, g = K("post", mn); hn.push(l), l = h(l), e && (g.onload = e), t && (g.onerror = t, g.onabort = t), g.send(l), u = { md5: a.md5, ts: a.ts, xhr: g } } catch (p) { yn.error(p) } return u } function nn(n) { return !1 } function rn() { var n, r, e; try { var t = null; t() } catch (o) { n = o, n.stack = n.stack || "" } return r = n.stack.split("\n"), e = r[0].indexOf("TypeError") > -1 ? 2 : 1, r = r.slice(e), n.array = r, n.stack = r.join("\n"), n } function en(n, r, e, t) { var o = ""; if (n instanceof Error) return void tn.apply(wn, arguments); if (a(n)) { if (n.length > 50 && (o = n + "\n", n = "Custom Error"), r instanceof Error) r.name = n, tn(r, e, t); else { var u = rn(), c = u.array; c = c.slice(dn + 1), u.stack = c.join("\n"), u.message = o + h(r), u.name = n, u.md5 = I(u.name + u.message), tn(u, e, t) } dn = 0 } } function tn(n) { function r() { s(u) && u.apply(this, arguments) } function e() { s(u) && u.apply(this, arguments) } var t = Array.prototype.slice.call(arguments, 0); if (n instanceof Error || d(n)) { if (nn(n.stack)) return void yn.warn("å·²å¿½ç•¥æŽ§åˆ¶å°è¾“å…¥çš„å¼‚å¸¸"); var o = un(t), u = o.cl, c = o.cu; Z(n, c, e, r) } } function on(n) { var r = "`${location}`", e = new RegExp(ln.href, "g"), t = { message: n.message || n.description || "", stack: n.stack }; return t.message = t.message.replace(e, r), e.lastIndex = 0, t.stack = t.stack.replace(e, r), t } function un(n) { for (var r = n.length - 1; r > 0; r--) if (t(n[r])) { n.length = r + 1; break } var e = { cl: f, cu: null }; if (n.length > 0) switch (n.length) { case 3: s(n[2]) && (e.cl = n[2]), o(n[1]) && (e.cu = n[1]); break; case 2: var u = n[1]; s(u) ? e.cl = u : o(u) && (e.cu = u) } return e } function cn(n) { function r(n) { an = n.key, Sn = n.maxConsoleLength || 10, jn = t(n.printConsole) ? !!n.printConsole : !0, On = t(n.sendConsoleError) ? n.sendConsoleError : !0, n.user && u.user(n.user), n.website && u.website(n.website), n.custom && u.custom(n.custom), n.onerror && (wn.onerror = n.onerror) } function e(n) { function r(r, e) { if (2 == arguments.length || o(r)) { var t = "user" === n ? !0 : !1; return V(n, r, e, t), u } return $(n, r) } function e(r) { X(n, r) } return { g: r, r: e } } if (wn) return wn; var u = function (n) { if (n) { var r, e = Array.prototype.slice.call(arguments, 1); dn = 1; try { r = u[n] ? u[n].apply(this, e) : void 0 } catch (t) { } return dn = 0, r } }; wn = u; var c = e("user"), a = e("custom"), i = e("website"); return u.create = function (n) { n && o(n) && (n.key && (u.create = f), r(n)) }, u.user = c.g, u.removeUser = c.r, u.custom = a.g, u.removeCustom = a.r, u.website = i.g, u.pageView = Q, u.notify = en, u.notifyException = tn, u.create(n), H(), F(), u } var an, sn = n, fn = r, ln = sn.location, gn = "0.0.17", pn = "collector.bughd.com", mn = "https://" + pn + "/web_crashes", hn = [], vn = "block", dn = 0, yn = { log: function () { console.log.apply(console, arguments) }, error: function () { console.error.apply(console, arguments) }, warn: function () { console.warn.apply(console, arguments) } }; sn.console || (sn.console = { log: f, error: f, warn: f, assert: f }); var xn, kn, bn, wn, En = "_bughduid", Cn = ["error"], An = ["assert"], Sn = 10, jn = !0, On = !0, Dn = {}, qn = { custom: {}, user: {}, website: {} }; wn = cn(), wn.version = gn, sn.bughd && sn.bughd.q && (wn.onerror = sn.bughd.onerror, m(sn.bughd.q, function (n) { wn.apply(sn, n) })), sn.bughd = wn, "function" == typeof define && define.amd ? define([], function () { return wn }) : "object" == typeof module && module.exports && (module.exports = wn) }(window, document);