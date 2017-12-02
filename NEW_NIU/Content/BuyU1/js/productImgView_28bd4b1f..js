define("store:widget/widgets/productImgView/productImgView.js", function (r) {
    r("common:widget/slider/unslider.js"), $(".storeDetail-intro-view-bigImg").unslider({
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
});