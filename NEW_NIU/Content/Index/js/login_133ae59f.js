﻿define("account:widget/login/login.js", function (i) {
    function n() {
        p.on("click", function () {
            r() && s.submit()
        }), $(document).on("keyup", function (i) {
            var n = i.keyCode;
            13 === n && r() && s.submit()
        })
    }
    function o() {
        function i(i) {
            var n = $(".gt_holder"),
                o = y.val(),
                t = v.val();
            if ("blur" == i) {
                if (!validator.isNull(t)) return 3 > o ? void n.remove() : (l.isMobileNavigator(ua), void (n.length || (N = new window.Geetest(k).appendTo(".slideVerify"), a())));
                n.remove()
            }
            return 3 > o ? void n.remove() : (l.isMobileNavigator(ua), void (validator.isNull(t) && n.remove()))
        }
        i(), v.blur(function () {
            i("blur")
        }), v.keyup(function () {
            i()
        }), v.on("focus", function () {
            x.hide("account")
        })
    }
    function t() {
        f.blur(function () {
            var i = v.val(),
                n = f.val();
            return validator.isNull(n) || validator.isLength(n, 6) ? (x.hide("pwd"), validator.isNull(i) ? void 0 : void x.hide("account")) : void x.show("pwd", "密码格式不正确")
        }), f.on("focus", function () {
            x.hide("pwd")
        })
    }
    function e() {
        g.blur(function () {
            var i = (v.val(), g.val());
            return validator.isNull(i) || validator.isLength(i, 4, 4) ? (h.removeClass("verify-warning"), x.hide("code"), void x.hide("account")) : void x.show("code", "验证码格式错误")
        }), g.on("focus", function () {
            x.hide("code")
        })
    }
    function a() {
        var i = v.val();
        N.onSuccess(function () {
            C = N.getValidate(), _ = k.id;
            var n = {
                account: i,
                validate: C,
                gt: _,
                type: "login"
            }, o = {
                type: "get",
                url: "/api/geetest",
                data: n
            };
            u(o, function (i) {
                return i ? i.status ? void 0 : void alert(i.desc) : (alert("网络错误"), !1)
            })
        })
    }
    function u(i, n) {
        $.ajax({
            url: i.url,
            type: i.type,
            data: i.data,
            success: function (i) {
                n(i)
            },
            error: function () {
                n(!1)
            }
        })
    }
    function c() {
        b.account.on("click", function () {
            x.hide("account")
        }), b.pwd.on("click", function () {
            x.hide("pwd")
        }), w.on("click", function () {
            h.removeClass("verify-warning"), x.hide("code")
        })
    }
    function r() {
        var i = $(".geetest_challenge"),
            n = v.val(),
            o = f.val(),
            t = (g.val(), y.val());
        if (validator.isNull(n)) return x.show("account", "用户名不能为空"), !1;
        if (!validator.isLength(o, 6)) return x.show("pwd", "密码格式不正确"), !1;
        if (l.isMobileNavigator(ua), t >= 3) if (l.isMobileNavigator(ua));
        else if (!i.val()) {
            var e = $(".gt_holder");
            return e.length || (N = new window.Geetest(k).appendTo(".slideVerify"), a()), alert("请进行滑块验证"), !1
        }
        return !0
    }
    function d() {
        var i = m.account.text(),
            n = m.pwd.text(),
            o = m.code.text();
        validator.isNull(i) || x.show("account", i), validator.isNull(n) || x.show("pwd", n), validator.isNull(o) || x.show("code", o)
    }
    var l = (i("account:widget/common/init.js"), i("account:widget/common/utils.js")),
        s = $("#login_form"),
        v = ($("#remember"), $("#account")),
        f = $("#password"),
        g = $("#verifyCode"),
        w = $(".disabled-box"),
        h = $(".verify"),
        p = $("#loginbtn"),
        m = [],
        b = [],
        y = $("#ip_tip"),
        N = "",
        C = "",
        _ = "",
        k = {
            gt: "c15e138fc9dff0d5a00827d963c75e85",
            product: "float"
        };
    ua = navigator.userAgent, m.account = $(".niu-tipmsg-account"), m.code = $(".niu-tipmsg-msg"), m.pwd = $(".niu-tipmsg-pwd"), b.account = $(".niu-input-account"), b.code = $(".niu-input-msg"), b.pwd = $(".niu-input-pwd");
    var x = {
        _fun: function (i, n, o) {
            var t = b[n],
                e = m[n];
            "code" == n && ("show" == i ? h.addClass("verify-warning") : h.removeClass("verify-warning")), "show" == i ? t.addClass("niu-warning") : t.removeClass("niu-warning"), e.text(o || "")
        },
        show: function (i, n) {
            this._fun("show", i, n)
        },
        hide: function (i) {
            this._fun("hide", i, "")
        }
    };
    n(), d(), c(), o(), t(), e()
});