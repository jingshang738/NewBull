define("store:widget/buy/u1/index.js", function (require, exports, module) {
    function rendSlider() {
        $(".storeDetail-intro-view-bigImg").unslider({
            sliderName: "productIntro-slider",
            speed: 350,
            keys: !0,
            autoplay: !1,
            infinite: !0,
            arrows: {
                prev: '<a class="productIntro-arrow prev"><span class="icon-left"></span></a>',
                next: '<a class="productIntro-arrow next"><span class="icon-right"></span></a>'
            },
            nav: function () {
                return "<img src='" + $(this).find("img").attr("src") + "'>"
            }
        })
    }
    var NiuDialog = require("common:widget/plugin/dialog/dialog.js"),
        addCart = require("store:widget/plugin/cart/cart.js");
    require("common:widget/slider/unslider.js"), require("common:widget/plugin/remote/remote.js"), module.exports = {
        init: function (pageOptions) {
            var me = this;
            me.pageOptions = pageOptions, me.PRODUCTDETAIL = pageOptions.PRODUCTDETAIL, me.J_color = $(".J_color"), me.J_version = $(".J_version"), me.J_add = $(".J_add"), me.J_sub = $(".J_sub"), me.J_niucover = $(".J_niucover"), me.J_addCart = $(".J_addCart"), me.J_price = $(".J_price"), me.J_inputQty = $(".J_inputQty"), me.J_bigImgBlock = $(".J_bigImgBlock"), me.J_singleCoverSalePrice = $(".J_singleCoverSalePrice"), me.J_singleCoverRetailPrice = $(".J_singleCoverRetailPrice"), me.J_doubleCoverSalePrice = $(".J_doubleCoverSalePrice"), me.J_doubleCoverRetailPrice = $(".J_doubleCoverRetailPrice"), me.PRODUCTDETAIL.ncode ? (me.addCartFlag = !0, me.J_addCart.html('<i class="icon-cart"></i>加入购物车'), me.J_addCart.removeClass("disabled")) : me.addCartFlag = !1, me.carMap = {
                skuId: me.PRODUCTDETAIL.defaultSku.skuId,
                quantity: 1,
                ticket: me.PRODUCTDETAIL.ncode
            }, me.coverMap = {
                skuId: me.PRODUCTDETAIL.defaultSku.singleCover.skuId,
                quantity: 1,
                ticket: me.PRODUCTDETAIL.ncode
            }, me.optionConfig = {
                "型号": me.PRODUCTDETAIL.defaultSku["型号"],
                "颜色": me.PRODUCTDETAIL.defaultSku["颜色"],
                cover: "singleCover"
            }, me.tmplSlider = function (obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with (obj || {}) {
                    __p += '<article class="storeDetail-intro-view J_bigImgBlock">\n    <div class="storeDetail-intro-view-bigImg">\n        <ul>\n            ';
                    for (var i = 0; i < urls.length; i++) __p += '\n            <li><img src="' + (null == (__t = urls[i]) ? "" : __t) + '" alt=""/></li>\n            ';
                    __p += "\n        </ul>\n    </div>\n</article>\n"
                }
                return __p
            }, me.setDefaultSku(), me.event()
        },
        event: function () {
            var e = this;
            e.J_version.on("click", function () {
                var i = $(this),
                    t = i.data("version");
                return e.optionConfig["型号"] == t ? !1 : (e.J_version.removeClass("active"), i.addClass("active"), e.optionConfig["型号"] = t, void e.setPrice())
            }), e.J_color.on("click", function () {
                var i = $(this),
                    t = i.data("color");
                return e.optionConfig["颜色"] == t ? !1 : (e.J_color.removeClass("active"), i.addClass("active"), e.optionConfig["颜色"] = t, e.setPrice(), void e.setImgSlider(e.PRODUCTDETAIL.optionImagesList.list[t]))
            }), e.J_niucover.on("click", function () {
                var i = $(this),
                    t = i.data("type");
                i.hasClass("active") ? NiuDialog.confirm({
                    title: "注意",
                    content: "取消随车办理牛油保后，将暂时无法补办该服务，<br>您可能会面临车辆丢失等风险。",
                    leftBtn: "确认放弃",
                    rightBtn: "添加牛油保:!",
                    leftBtnCallback: function () {
                        i.removeClass("active"), e.optionConfig.cover = "", e.setPrice()
                    }
                }) : (e.J_niucover.removeClass("active"), i.addClass("active"), e.optionConfig.cover = t, e.setPrice())
            }), e.J_addCart.on("click", function () {
                e.addCart()
            }), e.J_add.on("click", function () {
                NiuDialog.alert("此商品限购一件")
            }), e.J_sub.on("click", function () {
                NiuDialog.alert("此商品限购一件")
            })
        },
        addCart: function () {
            var e = this;
            if (e.addCartFlag) {
                var i = {
                    data: []
                };
                i.data.push(e.carMap), e.optionConfig.cover && i.data.push(e.coverMap), e.PRODUCTDETAIL.ncode && (i.type = "ticket"), addCart.add(i)
            } else "立即预约" == $(".J_addCart").html() && (window.location.href = $(".J_addCart").data("target"))
        },
        setDefaultSku: function () {
            var e = this;
            e.setPrice(), e.J_version.each(function (i, t) {
                $(t).data("version") == e.PRODUCTDETAIL.defaultSku["型号"] && $(t).addClass("active")
            }), e.J_color.each(function (i, t) {
                $(t).data("color") == e.PRODUCTDETAIL.defaultSku["颜色"] && $(t).addClass("active")
            })
        },
        setImgSlider: function (e) {
            var i = this;
            i.J_bigImgBlock.html(i.tmplSlider({
                urls: e
            })), rendSlider()
        },
        setPrice: function () {
            for (var e = this, i = "", t = "", a = 0; a < e.PRODUCTDETAIL.skus.length; a++) {
                var o = e.PRODUCTDETAIL.skus[a];
                if (e.optionConfig["型号"] == o["型号"] && e.optionConfig["颜色"] == o["颜色"]) {
                    i = o.skuId, e.carMap.skuId = i;
                    var r = o.price.salePrice;
                    e.optionConfig.cover && (r += o[e.optionConfig.cover].salePrice, t = o[e.optionConfig.cover].skuId, e.coverMap.skuId = t), e.J_price.html("￥" + r), e.J_singleCoverSalePrice.html(o.singleCover.salePrice), e.J_singleCoverRetailPrice.html(o.singleCover.retailPrice), e.J_doubleCoverSalePrice.html(o.doubleCover.salePrice), e.J_doubleCoverRetailPrice.html(o.doubleCover.retailPrice);
                    break
                }
            }
            e.PRODUCTDETAIL.ncode || Remote("/api/stock/getstock").map({
                id: i
            }).do(function (i) {
                $(".J_yuyueLink").hide(), 1 == i.stock ? (e.addCartFlag = !0, e.J_addCart.html('<i class="icon-cart"></i>加入购物车'), e.J_addCart.removeClass("disabled")) : (e.addCartFlag = !1, e.J_addCart.html("即将开始"), e.J_addCart.addClass("disabled"), $(".J_yuyueLink").show())
            })
        }
    }
});