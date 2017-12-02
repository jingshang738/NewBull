define("store:widget/plugin/cart/cart.js", function (t, e, a) {
    var s = t("common:widget/plugin/dialog/dialog.js");
    t("common:widget/plugin/remote/remote.js"), a.exports = {
        add: function (t) {
            var e = {
                type: t.type || "",
                reservationId: t.reservationId || "",
                actId: t.actId || "",
                data: t.data
            };
            t.reservationId && "" != t.reservationId ? e.type = "reserve" : t.actId && "" != t.actId && (e.type = "active"), console.log(t), Remote("/api/cart/multAdd").map(e).do(function (t) {
                if (1 == t.status) window.location.href = G_DOMAINS.get("www") + "/cart/";
                else if (2 == t.status) s.alert("已售罄");
                else if (0 == t.status) {
                    if (3 == t.data[0].status) return void s.alert("此商品限购或您已经添加到购物车");
                    s.alert(t.data[0].message || "加入购物车失败")
                } else 3 == t.status ? s.iTips("此商品限购") : 4 == t.status ? s.alert("当前购买人数较多,请稍候重试~") : 998 == t.status ? (s.iTips("此次预约已失效"), setTimeout(function () {
                    window.location.href = G_DOMAINS.get("www") + "/service/subscribe"
                }, 500)) : 407 == t.status ? s.alert("N码无效!") : 999 == t.status ? s.alert("当前购买人数较多,请稍候重试~") : 666 == t.status ? window.location.href = G_DOMAINS.get("www") + "/recommend?spuId=" + e.spuId + "&itemId=" + t.itemId : 776 == t.status ? s.alert("验证失败,请重新扫码购买") : 777 == t.status ? s.alert("渠道验证失败") : s.alert("网络繁忙,添加失败", function () {
                    window.location.reload()
                })
            })
        }
    }
});