﻿define("account:widget/signup/signup.js", function (i) { function e() { M.on("click", function () { v() && r(function (i) { return 1004 !== i.status ? void L.show("code", i.desc) : void w.submit() }) }) } function o() { b.on("click", function () { var i = g.val(), e = $(".geetest_challenge"), o = { type: "post", url: "/api/sendcode", data: { account: i, type: "signup" } }; return validator.isMobilePhone(i, "zh-CN") ? 0 !== G ? !1 : p.isMobileNavigator(I) || e.val() ? void c(o, function (i) { return i ? 0 !== i.status ? void L.show("code", i.desc) : (L.hide("code"), G = 60, y.removeClass("niu-btn-red"), y.addClass("niu-btn-gray"), void f(G)) : (alert("网络错误"), !1) }) : !1 : (L.show("account", "手机号格式不正确"), !1) }) } function n() { function i(i, e, o) { l(e, function (e) { e ? (i.remove(), k.signup.show(), L.show("account", "用户已存在")) : (L.hide("account"), k.signup.hide(), i.length || "blur" != o || (z = new window.Geetest(V).appendTo(".slideVerify"), u())) }) } var e = $(".gt_holder"), o = g.val(); !validator.isNull(o) && validator.isMobilePhone(o, "zh-CN") && (L.hide("account"), p.isMobileNavigator(I) || e.length || (z = new window.Geetest(V).appendTo(".slideVerify"), u())), g.blur(function () { var e = g.val(), o = $(".gt_holder"); return validator.isMobilePhone(e, "zh-CN") ? (L.hide("account"), void (p.isMobileNavigator(I) || i(o, e, "blur"))) : (L.show("account", "手机号格式错误"), void o.remove()) }), g.keyup(function () { var e = g.val(), o = $(".gt_holder"); if (validator.isNull(e)) o.remove(); else { if (!validator.isMobilePhone(e, "zh-CN")) return void o.remove(); i(o, e, "keyup") } }), g.on("focus", function () { L.hide("account") }) } function t() { m.blur(function () { var i = g.val(), e = m.val(); return validator.isLength(e, 6, 6) ? validator.isMobilePhone(i, "zh-CN") ? (L.hide("code"), void L.hide("account")) : void L.show("account", "手机号格式错误") : void L.show("code", "验证码格式错误") }), m.on("focus", function () { L.hide("code") }) } function a() { N.blur(function () { var i = N.val(), e = C.val(); if (!validator.isPassword(i, 6)) return void L.show("pwd", "密码须包含字母数字且大于6位"); if (L.hide("pwd"), !validator.isNull(e)) { if (e == i) return void L.hide("repwd"); L.show("repwd", "两次输入密码不一致") } }), N.on("focus", function () { L.hide("pwd") }), C.blur(function () { var i = (N.val(), C.val()); return validator.isPassword(i, 6) && C.val() == N.val() ? void L.hide("repwd") : void L.show("repwd", "两次输入密码不一致") }), C.on("focus", function () { L.hide("repwd") }) } function d() { _.blur(function () { var i = _.val(); validator.isNull(i) ? L.hide("email") : (validator.isEmail(i) || L.show("email", "邮箱格式错误"), L.hide("email")) }), _.on("focus", function () { L.hide("email") }) } function u() { var i = g.val(); z.onSuccess(function () { j = z.getValidate(), E = V.id; var e = { account: i, validate: j, gt: E, type: "signup" }, o = { type: "get", url: "/api/geetest", data: e }; return 0 !== G ? !1 : void c(o, function (i) { return i ? 0 !== i.status ? void L.show("code", i.desc) : (L.hide("code"), G = 60, y.removeClass("niu-btn-red"), y.addClass("niu-btn-gray"), void f(G)) : (alert("网络错误"), !1) }) }) } function r(i) { var e = g.val(), o = m.val(), n = { type: "get", url: "/api/codeverify", data: { type: "signup", code: o, mobile: e } }; c(n, function (e) { return e ? i(e) : (alert("网络错误"), !1) }) } function l(i, e) { var o = { url: "/api/verifyuser", type: "get", data: {} }; validator.isMobilePhone(i, "zh-CN") ? o.data.phone = i : validator.isEmail(i) && (o.data.email = i), c(o, function (i) { return i.status ? void e(!0) : (k.signup.hide(), L.show("account", "用户不存在"), void e(!1)) }) } function c(i, e) { $.ajax({ url: i.url, type: i.type, data: i.data, success: function (i) { e(i) }, error: function () { e(!1) } }) } function s() { var i = k.account.text(), e = k.code.text(), o = k.pwd.text(), n = k.repwd.text(), t = k.email.text(); validator.isNull(i) || L.show("account", i), validator.isNull(e) || L.show("code", e), validator.isNull(o) || L.show("pwd", o), validator.isNull(n) || L.show("repwd", n), validator.isNull(t) || L.show("email", t) } function v() { var i = g.val(), e = m.val(), o = N.val(), n = C.val(), t = _.val(); if (!validator.isMobilePhone(i, "zh-CN")) return L.show("account", "手机号格式错误"), !1; if (!validator.isLength(e, 6, 6)) return L.show("code", "验证码格式错误"), !1; if (!validator.isPassword(o, 6)) return L.show("pwd", "密码须包含字母数字且大于6位"), !1; if (!validator.isPassword(n, 6) || n != o) return L.show("repwd", "两次输入密码不一致"), !1; if (L.hide("repwd"), validator.isNull(t)) L.hide("email"); else { if (!validator.isEmail(t)) return L.show("email", "邮箱格式错误"), !1; L.hide("email") } if (!p.isMobileNavigator(I)) { var a = $(".geetest_challenge").val(); if (!a) return alert("请进行滑块验证"), !1; if (!$("#protocol").is(":checked")) return alert("请勾选用户协议"), !1 } return !0 } function h() { x.account.on("click", function () { k.signup.hide(), L.hide("account") }), P.on("click", function () { L.hide("code") }), x.pwd.on("click", function () { L.hide("pwd") }), x.repwd.on("click", function () { L.hide("repwd") }), x.email.on("click", function () { L.hide("email") }) } function f(i) { var e = window.setInterval(function () { i--, y.text(i + "s"), 0 === i && (G = 0, window.clearInterval(e), y.text("重新发送"), y.removeClass("niu-btn-gray"), y.addClass("niu-btn-red")) }, 1e3) } var p = i("account:widget/common/utils.js"), w = (i("account:widget/common/init.js"), $("#signup_form")), g = ($("#protocol"), $("#account")), m = $("#code"), b = $("#getvcode"), y = $(".timer"), N = $("#password"), C = $("#re_password"), _ = $("#email"), M = $("#signup_btn"), P = $(".verify"), k = ($(".geetest_challenge"), []), x = [], z = "", j = "", E = "", V = { gt: "c15e138fc9dff0d5a00827d963c75e85", product: "float" }, G = 0, I = navigator.userAgent; k.account = $(".niu-tipmsg-account"), k.code = $(".niu-tipmsg-msg"), k.signup = $(".tip-signup"), k.pwd = $(".niu-tipmsg-pwd"), k.repwd = $(".niu-tipmsg-repwd"), k.email = $(".niu-tipmsg-email"), x.account = $(".niu-input-account"), x.msg = $(".niu-input-msg"), x.code = $(".niu-input-msg"), x.pwd = $(".niu-input-pwd"), x.repwd = $(".niu-input-repwd"), x.email = $(".niu-input-email"); var L = { _fun: function (i, e, o) { var n = x[e], t = k[e]; "code" == e && ("show" == i ? P.addClass("verify-warning") : P.removeClass("verify-warning")), "show" == i ? n.addClass("niu-warning") : n.removeClass("niu-warning"), t.text(o || "") }, show: function (i, e) { this._fun("show", i, e) }, hide: function (i) { this._fun("hide", i, "") } }; n(), t(), a(), d(), s(), h(), e(), o() });