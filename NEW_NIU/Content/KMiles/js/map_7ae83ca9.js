﻿define("hd:widget/hundmil/conf/map.js", function (o, e, t) { t.exports = { backgroundColor: "#282828", tooltip: { trigger: "item", formatter: function (o) { return o.data._title } }, legend: { right: "16%", bottom: "4%", data: ["≥200", "≥100", "<100"], textStyle: { color: "#9b9b9b", fontSize: 14 } }, geo: { map: "china", silent: !0, label: { emphasis: { show: !1 } }, roam: !1, itemStyle: { normal: { areaColor: "#34383f", borderColor: "#111" }, emphasis: { areaColor: "#2a333d" } } }, series: [{ name: "<100", type: "scatter", coordinateSystem: "geo", symbolSize: 1, large: !0, label: { normal: { formatter: "{b}", position: "right", show: !1 }, emphasis: { show: !1 } }, itemStyle: { normal: { color: "rgb(241, 170, 0)", shadowBlur: 2, shadowColor: "rgba(241, 170, 0, .8)" } } }, { name: "≥100", type: "scatter", coordinateSystem: "geo", symbolSize: 2, large: !0, label: { normal: { formatter: "{b}", position: "right", show: !1 }, emphasis: { show: !1 } }, itemStyle: { gormal: { color: "rgb(206, 89, 11)", shadowBlur: 2, shadowColor: "rgba(206, 89, 11, .8)" } } }, { name: "≥200", type: "scatter", coordinateSystem: "geo", symbolSize: 2, large: !0, label: { normal: { formatter: "{b}", position: "right", show: !1 }, emphasis: { show: !1 } }, itemStyle: { normal: { color: "rgb(255, 255, 255)", shadowBlur: 2, shadowColor: "rgba(255, 255, 255, 1)" } }, silent: !0 }, { name: "", type: "effectScatter", coordinateSystem: "geo", symbolSize: function (o, e) { return e.data.mil / 1e3 }, showEffectOn: "render", rippleEffect: { brushType: "stroke" }, hoverAnimation: !0, label: { normal: { formatter: "{b}", position: ["150%", "20%"], show: !1 } }, itemStyle: { normal: { formatter: "{b}", color: "rgb(253, 208, 44)" } }, zlevel: 1 }] } });