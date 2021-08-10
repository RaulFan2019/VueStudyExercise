(() => {
  var e = {
    59: e => {
      e.exports = {
        add: function (e, t) {
          return e + t
        }, mul: function (e, t) {
          return e * t
        }
      }
    }, 288: (e, t, r) => {
      "use strict";
      r.d(t, {Z: () => i});
      var n = r(645), o = r.n(n)()((function (e) {
        return e[1]
      }));
      o.push([e.id, "body {\n  font-size: 50px;\n  color: orange;\n}\n", ""]);
      const i = o
    }, 58: (e, t, r) => {
      "use strict";
      r.d(t, {Z: () => l});
      var n = r(645), o = r.n(n), i = r(667), s = r.n(i), a = new URL(r(956), r.b), c = o()((function (e) {
        return e[1]
      })), u = s()(a);
      c.push([e.id, "body{\r\n    /*background-color: red;*/\r\n    background: url(" + u + ");\r\n}", ""]);
      const l = c
    }, 645: e => {
      "use strict";
      e.exports = function (e) {
        var t = [];
        return t.toString = function () {
          return this.map((function (t) {
            var r = e(t);
            return t[2] ? "@media ".concat(t[2], " {").concat(r, "}") : r
          })).join("")
        }, t.i = function (e, r, n) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var o = {};
          if (n) for (var i = 0; i < this.length; i++) {
            var s = this[i][0];
            null != s && (o[s] = !0)
          }
          for (var a = 0; a < e.length; a++) {
            var c = [].concat(e[a]);
            n && o[c[0]] || (r && (c[2] ? c[2] = "".concat(r, " and ").concat(c[2]) : c[2] = r), t.push(c))
          }
        }, t
      }
    }, 667: e => {
      "use strict";
      e.exports = function (e, t) {
        return t || (t = {}), e ? (e = String(e.__esModule ? e.default : e), /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]|(%20)/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e) : e
      }
    }, 570: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {default: () => g});
      var n = r(379), o = r.n(n), i = r(795), s = r.n(i), a = r(569), c = r.n(a), u = r(565), l = r.n(u), d = r(216),
          f = r.n(d), p = r(589), v = r.n(p), m = r(288), h = {};
      h.styleTagTransform = v(), h.setAttributes = l(), h.insert = c().bind(null, "head"), h.domAPI = s(), h.insertStyleElement = f(), o()(m.Z, h);
      const g = m.Z && m.Z.locals ? m.Z.locals : void 0
    }, 131: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {default: () => g});
      var n = r(379), o = r.n(n), i = r(795), s = r.n(i), a = r(569), c = r.n(a), u = r(565), l = r.n(u), d = r(216),
          f = r.n(d), p = r(589), v = r.n(p), m = r(58), h = {};
      h.styleTagTransform = v(), h.setAttributes = l(), h.insert = c().bind(null, "head"), h.domAPI = s(), h.insertStyleElement = f(), o()(m.Z, h);
      const g = m.Z && m.Z.locals ? m.Z.locals : void 0
    }, 379: e => {
      "use strict";
      var t = [];

      function r(e) {
        for (var r = -1, n = 0; n < t.length; n++) if (t[n].identifier === e) {
          r = n;
          break
        }
        return r
      }

      function n(e, n) {
        for (var i = {}, s = [], a = 0; a < e.length; a++) {
          var c = e[a], u = n.base ? c[0] + n.base : c[0], l = i[u] || 0, d = "".concat(u, " ").concat(l);
          i[u] = l + 1;
          var f = r(d), p = {css: c[1], media: c[2], sourceMap: c[3]};
          -1 !== f ? (t[f].references++, t[f].updater(p)) : t.push({
            identifier: d,
            updater: o(p, n),
            references: 1
          }), s.push(d)
        }
        return s
      }

      function o(e, t) {
        var r = t.domAPI(t);
        return r.update(e), function (t) {
          if (t) {
            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
            r.update(e = t)
          } else r.remove()
        }
      }

      e.exports = function (e, o) {
        var i = n(e = e || [], o = o || {});
        return function (e) {
          e = e || [];
          for (var s = 0; s < i.length; s++) {
            var a = r(i[s]);
            t[a].references--
          }
          for (var c = n(e, o), u = 0; u < i.length; u++) {
            var l = r(i[u]);
            0 === t[l].references && (t[l].updater(), t.splice(l, 1))
          }
          i = c
        }
      }
    }, 569: e => {
      "use strict";
      var t = {};
      e.exports = function (e, r) {
        var n = function (e) {
          if (void 0 === t[e]) {
            var r = document.querySelector(e);
            if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
              r = r.contentDocument.head
            } catch (e) {
              r = null
            }
            t[e] = r
          }
          return t[e]
        }(e);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        n.appendChild(r)
      }
    }, 216: e => {
      "use strict";
      e.exports = function (e) {
        var t = document.createElement("style");
        return e.setAttributes(t, e.attributes), e.insert(t), t
      }
    }, 565: (e, t, r) => {
      "use strict";
      e.exports = function (e) {
        var t = r.nc;
        t && e.setAttribute("nonce", t)
      }
    }, 795: e => {
      "use strict";
      e.exports = function (e) {
        var t = e.insertStyleElement(e);
        return {
          update: function (r) {
            !function (e, t, r) {
              var n = r.css, o = r.media, i = r.sourceMap;
              o ? e.setAttribute("media", o) : e.removeAttribute("media"), i && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t.styleTagTransform(n, e)
            }(t, e, r)
          }, remove: function () {
            !function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e)
            }(t)
          }
        }
      }
    }, 589: e => {
      "use strict";
      e.exports = function (e, t) {
        if (t.styleSheet) t.styleSheet.cssText = e; else {
          for (; t.firstChild;) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(e))
        }
      }
    }, 956: (e, t, r) => {
      "use strict";
      e.exports = r.p + "1201f5351001bce8a1b2.jpg"
    }
  }, t = {};

  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var i = t[n] = {id: n, exports: {}};
    return e[n](i, i.exports, r), i.exports
  }

  r.m = e, r.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, {a: t}), t
  }, r.d = (e, t) => {
    for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {enumerable: !0, get: t[n]})
  }, r.g = function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
  }, (() => {
    var e;
    r.g.importScripts && (e = r.g.location + "");
    var t = r.g.document;
    if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
      var n = t.getElementsByTagName("script");
      n.length && (e = n[n.length - 1].src)
    }
    if (!e) throw new Error("Automatic publicPath is not supported in this browser");
    e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), r.p = e
  })(), r.b = document.baseURI || self.location.href, (() => {
    "use strict";
    var e = r(59), t = e.add, n = e.mul;
    console.log(t(20, 30)), console.log(n(20, 30)), console.log("raul"), console.log(18), console.log("man"), r(131), r(570)
  })()
})();