(() => {
  var e = {
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var i in s)
                      Object.prototype.hasOwnProperty.call(s, i) &&
                        (e[i] = s[i]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            s =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            i = t && "IntersectionObserver" in window,
            n = t && "classList" in document.createElement("p"),
            a = t && window.devicePixelRatio > 1,
            r = {
              elements_selector: ".lazy",
              container: s || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            l = function (t) {
              return e({}, r, t);
            },
            o = function (e, t) {
              var s,
                i = "LazyLoad::Initialized",
                n = new e(t);
              try {
                s = new CustomEvent(i, { detail: { instance: n } });
              } catch (e) {
                (s = document.createEvent("CustomEvent")).initCustomEvent(
                  i,
                  !1,
                  !1,
                  { instance: n }
                );
              }
              window.dispatchEvent(s);
            },
            d = "src",
            c = "srcset",
            p = "sizes",
            u = "poster",
            h = "llOriginalAttrs",
            f = "data",
            m = "loading",
            g = "loaded",
            v = "applied",
            b = "error",
            w = "native",
            y = "data-",
            C = "ll-status",
            x = function (e, t) {
              return e.getAttribute(y + t);
            },
            S = function (e) {
              return x(e, C);
            },
            E = function (e, t) {
              return (function (e, t, s) {
                var i = "data-ll-status";
                null !== s ? e.setAttribute(i, s) : e.removeAttribute(i);
              })(e, 0, t);
            },
            T = function (e) {
              return E(e, null);
            },
            k = function (e) {
              return null === S(e);
            },
            M = function (e) {
              return S(e) === w;
            },
            L = [m, g, v, b],
            $ = function (e, t, s, i) {
              e &&
                (void 0 === i ? (void 0 === s ? e(t) : e(t, s)) : e(t, s, i));
            },
            P = function (e, t) {
              n
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            _ = function (e, t) {
              n
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            A = function (e) {
              return e.llTempImage;
            },
            I = function (e, t) {
              if (t) {
                var s = t._observer;
                s && s.unobserve(e);
              }
            },
            O = function (e, t) {
              e && (e.loadingCount += t);
            },
            z = function (e, t) {
              e && (e.toLoadCount = t);
            },
            B = function (e) {
              for (var t, s = [], i = 0; (t = e.children[i]); i += 1)
                "SOURCE" === t.tagName && s.push(t);
              return s;
            },
            D = function (e, t) {
              var s = e.parentNode;
              s && "PICTURE" === s.tagName && B(s).forEach(t);
            },
            G = function (e, t) {
              B(e).forEach(t);
            },
            N = [d],
            q = [d, u],
            j = [d, c, p],
            H = [f],
            W = function (e) {
              return !!e[h];
            },
            R = function (e) {
              return e[h];
            },
            V = function (e) {
              return delete e[h];
            },
            F = function (e, t) {
              if (!W(e)) {
                var s = {};
                t.forEach(function (t) {
                  s[t] = e.getAttribute(t);
                }),
                  (e[h] = s);
              }
            },
            X = function (e, t) {
              if (W(e)) {
                var s = R(e);
                t.forEach(function (t) {
                  !(function (e, t, s) {
                    s ? e.setAttribute(t, s) : e.removeAttribute(t);
                  })(e, t, s[t]);
                });
              }
            },
            Y = function (e, t, s) {
              P(e, t.class_applied),
                E(e, v),
                s &&
                  (t.unobserve_completed && I(e, t),
                  $(t.callback_applied, e, s));
            },
            U = function (e, t, s) {
              P(e, t.class_loading),
                E(e, m),
                s && (O(s, 1), $(t.callback_loading, e, s));
            },
            Q = function (e, t, s) {
              s && e.setAttribute(t, s);
            },
            K = function (e, t) {
              Q(e, p, x(e, t.data_sizes)),
                Q(e, c, x(e, t.data_srcset)),
                Q(e, d, x(e, t.data_src));
            },
            J = {
              IMG: function (e, t) {
                D(e, function (e) {
                  F(e, j), K(e, t);
                }),
                  F(e, j),
                  K(e, t);
              },
              IFRAME: function (e, t) {
                F(e, N), Q(e, d, x(e, t.data_src));
              },
              VIDEO: function (e, t) {
                G(e, function (e) {
                  F(e, N), Q(e, d, x(e, t.data_src));
                }),
                  F(e, q),
                  Q(e, u, x(e, t.data_poster)),
                  Q(e, d, x(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                F(e, H), Q(e, f, x(e, t.data_src));
              },
            },
            Z = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            ee = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                $(e.callback_finish, t);
            },
            te = function (e, t, s) {
              e.addEventListener(t, s), (e.llEvLisnrs[t] = s);
            },
            se = function (e, t, s) {
              e.removeEventListener(t, s);
            },
            ie = function (e) {
              return !!e.llEvLisnrs;
            },
            ne = function (e) {
              if (ie(e)) {
                var t = e.llEvLisnrs;
                for (var s in t) {
                  var i = t[s];
                  se(e, s, i);
                }
                delete e.llEvLisnrs;
              }
            },
            ae = function (e, t, s) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                O(s, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(s),
                _(e, t.class_loading),
                t.unobserve_completed && I(e, s);
            },
            re = function (e, t, s) {
              var i = A(e) || e;
              ie(i) ||
                (function (e, t, s) {
                  ie(e) || (e.llEvLisnrs = {});
                  var i = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  te(e, i, t), te(e, "error", s);
                })(
                  i,
                  function (n) {
                    !(function (e, t, s, i) {
                      var n = M(t);
                      ae(t, s, i),
                        P(t, s.class_loaded),
                        E(t, g),
                        $(s.callback_loaded, t, i),
                        n || ee(s, i);
                    })(0, e, t, s),
                      ne(i);
                  },
                  function (n) {
                    !(function (e, t, s, i) {
                      var n = M(t);
                      ae(t, s, i),
                        P(t, s.class_error),
                        E(t, b),
                        $(s.callback_error, t, i),
                        s.restore_on_error && X(t, j),
                        n || ee(s, i);
                    })(0, e, t, s),
                      ne(i);
                  }
                );
            },
            le = function (e, t, s) {
              !(function (e) {
                return Z.indexOf(e.tagName) > -1;
              })(e)
                ? (function (e, t, s) {
                    !(function (e) {
                      e.llTempImage = document.createElement("IMG");
                    })(e),
                      re(e, t, s),
                      (function (e) {
                        W(e) ||
                          (e[h] = { backgroundImage: e.style.backgroundImage });
                      })(e),
                      (function (e, t, s) {
                        var i = x(e, t.data_bg),
                          n = x(e, t.data_bg_hidpi),
                          r = a && n ? n : i;
                        r &&
                          ((e.style.backgroundImage = 'url("'.concat(r, '")')),
                          A(e).setAttribute(d, r),
                          U(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var i = x(e, t.data_bg_multi),
                          n = x(e, t.data_bg_multi_hidpi),
                          r = a && n ? n : i;
                        r && ((e.style.backgroundImage = r), Y(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var i = x(e, t.data_bg_set);
                        if (i) {
                          var n = i.split("|"),
                            a = n.map(function (e) {
                              return "image-set(".concat(e, ")");
                            });
                          (e.style.backgroundImage = a.join()),
                            "" === e.style.backgroundImage &&
                              ((a = n.map(function (e) {
                                return "-webkit-image-set(".concat(e, ")");
                              })),
                              (e.style.backgroundImage = a.join())),
                            Y(e, t, s);
                        }
                      })(e, t, s);
                  })(e, t, s)
                : (function (e, t, s) {
                    re(e, t, s),
                      (function (e, t, s) {
                        var i = J[e.tagName];
                        i && (i(e, t), U(e, t, s));
                      })(e, t, s);
                  })(e, t, s);
            },
            oe = function (e) {
              e.removeAttribute(d), e.removeAttribute(c), e.removeAttribute(p);
            },
            de = function (e) {
              D(e, function (e) {
                X(e, j);
              }),
                X(e, j);
            },
            ce = {
              IMG: de,
              IFRAME: function (e) {
                X(e, N);
              },
              VIDEO: function (e) {
                G(e, function (e) {
                  X(e, N);
                }),
                  X(e, q),
                  e.load();
              },
              OBJECT: function (e) {
                X(e, H);
              },
            },
            pe = function (e, t) {
              (function (e) {
                var t = ce[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (W(e)) {
                        var t = R(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  k(e) ||
                    M(e) ||
                    (_(e, t.class_entered),
                    _(e, t.class_exited),
                    _(e, t.class_applied),
                    _(e, t.class_loading),
                    _(e, t.class_loaded),
                    _(e, t.class_error));
                })(e, t),
                T(e),
                V(e);
            },
            ue = ["IMG", "IFRAME", "VIDEO"],
            he = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            fe = function (e, t, s) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, s, i) {
                      var n = (function (e) {
                        return L.indexOf(S(e)) >= 0;
                      })(e);
                      E(e, "entered"),
                        P(e, s.class_entered),
                        _(e, s.class_exited),
                        (function (e, t, s) {
                          t.unobserve_entered && I(e, s);
                        })(e, s, i),
                        $(s.callback_enter, e, t, i),
                        n || le(e, s, i);
                    })(e.target, e, t, s)
                  : (function (e, t, s, i) {
                      k(e) ||
                        (P(e, s.class_exited),
                        (function (e, t, s, i) {
                          s.cancel_on_exit &&
                            (function (e) {
                              return S(e) === m;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (ne(e),
                            (function (e) {
                              D(e, function (e) {
                                oe(e);
                              }),
                                oe(e);
                            })(e),
                            de(e),
                            _(e, s.class_loading),
                            O(i, -1),
                            T(e),
                            $(s.callback_cancel, e, t, i));
                        })(e, t, s, i),
                        $(s.callback_exit, e, t, i));
                    })(e.target, e, t, s);
              });
            },
            me = function (e) {
              return Array.prototype.slice.call(e);
            },
            ge = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ve = function (e) {
              return (function (e) {
                return S(e) === b;
              })(e);
            },
            be = function (e, t) {
              return (function (e) {
                return me(e).filter(k);
              })(e || ge(t));
            },
            we = function (e, s) {
              var n = l(e);
              (this._settings = n),
                (this.loadingCount = 0),
                (function (e, t) {
                  i &&
                    !he(e) &&
                    (t._observer = new IntersectionObserver(
                      function (s) {
                        fe(s, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(n, this),
                (function (e, s) {
                  t &&
                    ((s._onlineHandler = function () {
                      !(function (e, t) {
                        var s;
                        ((s = ge(e)), me(s).filter(ve)).forEach(function (t) {
                          _(t, e.class_error), T(t);
                        }),
                          t.update();
                      })(e, s);
                    }),
                    window.addEventListener("online", s._onlineHandler));
                })(n, this),
                this.update(s);
            };
          return (
            (we.prototype = {
              update: function (e) {
                var t,
                  n,
                  a = this._settings,
                  r = be(e, a);
                z(this, r.length),
                  !s && i
                    ? he(a)
                      ? (function (e, t, s) {
                          e.forEach(function (e) {
                            -1 !== ue.indexOf(e.tagName) &&
                              (function (e, t, s) {
                                e.setAttribute("loading", "lazy"),
                                  re(e, t, s),
                                  (function (e, t) {
                                    var s = J[e.tagName];
                                    s && s(e, t);
                                  })(e, t),
                                  E(e, w);
                              })(e, t, s);
                          }),
                            z(s, 0);
                        })(r, a, this)
                      : ((n = r),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, n))
                    : this.loadAll(r);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  t &&
                    window.removeEventListener("online", this._onlineHandler),
                  ge(this._settings).forEach(function (e) {
                    V(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  s = this._settings;
                be(e, s).forEach(function (e) {
                  I(e, t), le(e, s, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                ge(e).forEach(function (t) {
                  pe(t, e);
                });
              },
            }),
            (we.load = function (e, t) {
              var s = l(t);
              le(e, s);
            }),
            (we.resetStatus = function (e) {
              T(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var s, i = 0; (s = t[i]); i += 1) o(e, s);
                  else o(e, t);
              })(we, window.lazyLoadOptions),
            we
          );
        })();
      },
    },
    t = {};
  function s(i) {
    var n = t[i];
    if (void 0 !== n) return n.exports;
    var a = (t[i] = { exports: {} });
    return e[i].call(a.exports, a, a.exports, s), a.exports;
  }
  (() => {
    "use strict";
    const e = {};
    let t = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideUpDone", { detail: { target: e } })
              );
          }, t));
      },
      i = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let i = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = i + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide"),
                document.dispatchEvent(
                  new CustomEvent("slideDownDone", { detail: { target: e } })
                );
            }, t);
        }
      },
      n = !0,
      a = (e = 500) => {
        let t = document.querySelector("body");
        if (n) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (n = !1),
            setTimeout(function () {
              n = !0;
            }, e);
        }
      },
      r = (e = 500) => {
        let t = document.querySelector("body");
        if (n) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (n = !1),
            setTimeout(function () {
              n = !0;
            }, e);
        }
      };
    function l(e) {
      return e.filter(function (e, t, s) {
        return s.indexOf(e) === t;
      });
    }
    function o(e, t) {
      const s = Array.from(e).filter(function (e, s, i) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (s.length) {
        const e = [];
        s.forEach((s) => {
          const i = {},
            n = s.dataset[t].split(",");
          (i.value = n[0]),
            (i.type = n[1] ? n[1].trim() : "max"),
            (i.item = s),
            e.push(i);
        });
        let i = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        i = l(i);
        const n = [];
        if (i.length)
          return (
            i.forEach((t) => {
              const s = t.split(","),
                i = s[1],
                a = s[2],
                r = window.matchMedia(s[0]),
                l = e.filter(function (e) {
                  if (e.value === i && e.type === a) return !0;
                });
              n.push({ itemsArray: l, matchMedia: r });
            }),
            n
          );
      }
    }
    function d(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function c(e = {}, t = {}) {
      Object.keys(t).forEach((s) => {
        void 0 === e[s]
          ? (e[s] = t[s])
          : d(t[s]) && d(e[s]) && Object.keys(t[s]).length > 0 && c(e[s], t[s]);
      });
    }
    const p = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function u() {
      const e = "undefined" != typeof document ? document : {};
      return c(e, p), e;
    }
    const h = {
      document: p,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function f() {
      const e = "undefined" != typeof window ? window : {};
      return c(e, h), e;
    }
    class m extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function g(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...g(e)) : t.push(e);
        }),
        t
      );
    }
    function v(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function b(e, t) {
      const s = f(),
        i = u();
      let n = [];
      if (!t && e instanceof m) return e;
      if (!e) return new m(n);
      if ("string" == typeof e) {
        const s = e.trim();
        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
          let e = "div";
          0 === s.indexOf("<li") && (e = "ul"),
            0 === s.indexOf("<tr") && (e = "tbody"),
            (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
            0 === s.indexOf("<tbody") && (e = "table"),
            0 === s.indexOf("<option") && (e = "select");
          const t = i.createElement(e);
          t.innerHTML = s;
          for (let e = 0; e < t.childNodes.length; e += 1)
            n.push(t.childNodes[e]);
        } else
          n = (function (e, t) {
            if ("string" != typeof e) return [e];
            const s = [],
              i = t.querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) s.push(i[e]);
            return s;
          })(e.trim(), t || i);
      } else if (e.nodeType || e === s || e === i) n.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof m) return e;
        n = e;
      }
      return new m(
        (function (e) {
          const t = [];
          for (let s = 0; s < e.length; s += 1)
            -1 === t.indexOf(e[s]) && t.push(e[s]);
          return t;
        })(n)
      );
    }
    b.fn = m.prototype;
    const w = "resize scroll".split(" ");
    function y(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            w.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : b(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    y("click"),
      y("blur"),
      y("focus"),
      y("focusin"),
      y("focusout"),
      y("keyup"),
      y("keydown"),
      y("keypress"),
      y("submit"),
      y("change"),
      y("mousedown"),
      y("mousemove"),
      y("mouseup"),
      y("mouseenter"),
      y("mouseleave"),
      y("mouseout"),
      y("mouseover"),
      y("touchstart"),
      y("touchend"),
      y("touchmove"),
      y("resize"),
      y("scroll");
    const C = {
      addClass: function (...e) {
        const t = g(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = g(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = g(e.map((e) => e.split(" ")));
        return (
          v(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = g(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let s = 0; s < this.length; s += 1)
          if (2 === arguments.length) this[s].setAttribute(e, t);
          else
            for (const t in e)
              (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, s, i, n] = e;
        function a(e) {
          const t = e.target;
          if (!t) return;
          const n = e.target.dom7EventData || [];
          if ((n.indexOf(e) < 0 && n.unshift(e), b(t).is(s))) i.apply(t, n);
          else {
            const e = b(t).parents();
            for (let t = 0; t < e.length; t += 1)
              b(e[t]).is(s) && i.apply(e[t], n);
          }
        }
        function r(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
        }
        "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
          n || (n = !1);
        const l = t.split(" ");
        let o;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (s)
            for (o = 0; o < l.length; o += 1) {
              const e = l[o];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: i, proxyListener: a }),
                t.addEventListener(e, a, n);
            }
          else
            for (o = 0; o < l.length; o += 1) {
              const e = l[o];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: i, proxyListener: r }),
                t.addEventListener(e, r, n);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, s, i, n] = e;
        "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
          n || (n = !1);
        const a = t.split(" ");
        for (let e = 0; e < a.length; e += 1) {
          const t = a[e];
          for (let e = 0; e < this.length; e += 1) {
            const a = this[e];
            let r;
            if (
              (!s && a.dom7Listeners
                ? (r = a.dom7Listeners[t])
                : s && a.dom7LiveListeners && (r = a.dom7LiveListeners[t]),
              r && r.length)
            )
              for (let e = r.length - 1; e >= 0; e -= 1) {
                const s = r[e];
                (i && s.listener === i) ||
                (i &&
                  s.listener &&
                  s.listener.dom7proxy &&
                  s.listener.dom7proxy === i)
                  ? (a.removeEventListener(t, s.proxyListener, n),
                    r.splice(e, 1))
                  : i ||
                    (a.removeEventListener(t, s.proxyListener, n),
                    r.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = f(),
          s = e[0].split(" "),
          i = e[1];
        for (let n = 0; n < s.length; n += 1) {
          const a = s[n];
          for (let s = 0; s < this.length; s += 1) {
            const n = this[s];
            if (t.CustomEvent) {
              const s = new t.CustomEvent(a, {
                detail: i,
                bubbles: !0,
                cancelable: !0,
              });
              (n.dom7EventData = e.filter((e, t) => t > 0)),
                n.dispatchEvent(s),
                (n.dom7EventData = []),
                delete n.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function s(i) {
              i.target === this && (e.call(this, i), t.off("transitionend", s));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = f();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = f(),
            t = u(),
            s = this[0],
            i = s.getBoundingClientRect(),
            n = t.body,
            a = s.clientTop || n.clientTop || 0,
            r = s.clientLeft || n.clientLeft || 0,
            l = s === e ? e.scrollY : s.scrollTop,
            o = s === e ? e.scrollX : s.scrollLeft;
          return { top: i.top + l - a, left: i.left + o - r };
        }
        return null;
      },
      css: function (e, t) {
        const s = f();
        let i;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1)
              for (const t in e) this[i].style[t] = e[t];
            return this;
          }
          if (this[0])
            return s.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, s) => {
              e.apply(t, [t, s]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = f(),
          s = u(),
          i = this[0];
        let n, a;
        if (!i || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (i.matches) return i.matches(e);
          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
          if (i.msMatchesSelector) return i.msMatchesSelector(e);
          for (n = b(e), a = 0; a < n.length; a += 1) if (n[a] === i) return !0;
          return !1;
        }
        if (e === s) return i === s;
        if (e === t) return i === t;
        if (e.nodeType || e instanceof m) {
          for (n = e.nodeType ? [e] : e, a = 0; a < n.length; a += 1)
            if (n[a] === i) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return b([]);
        if (e < 0) {
          const s = t + e;
          return b(s < 0 ? [] : [this[s]]);
        }
        return b([this[e]]);
      },
      append: function (...e) {
        let t;
        const s = u();
        for (let i = 0; i < e.length; i += 1) {
          t = e[i];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const i = s.createElement("div");
              for (i.innerHTML = t; i.firstChild; )
                this[e].appendChild(i.firstChild);
            } else if (t instanceof m)
              for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = u();
        let s, i;
        for (s = 0; s < this.length; s += 1)
          if ("string" == typeof e) {
            const n = t.createElement("div");
            for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1)
              this[s].insertBefore(n.childNodes[i], this[s].childNodes[0]);
          } else if (e instanceof m)
            for (i = 0; i < e.length; i += 1)
              this[s].insertBefore(e[i], this[s].childNodes[0]);
          else this[s].insertBefore(e, this[s].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && b(this[0].nextElementSibling).is(e)
              ? b([this[0].nextElementSibling])
              : b([])
            : this[0].nextElementSibling
            ? b([this[0].nextElementSibling])
            : b([])
          : b([]);
      },
      nextAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return b([]);
        for (; s.nextElementSibling; ) {
          const i = s.nextElementSibling;
          e ? b(i).is(e) && t.push(i) : t.push(i), (s = i);
        }
        return b(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && b(t.previousElementSibling).is(e)
              ? b([t.previousElementSibling])
              : b([])
            : t.previousElementSibling
            ? b([t.previousElementSibling])
            : b([]);
        }
        return b([]);
      },
      prevAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return b([]);
        for (; s.previousElementSibling; ) {
          const i = s.previousElementSibling;
          e ? b(i).is(e) && t.push(i) : t.push(i), (s = i);
        }
        return b(t);
      },
      parent: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1)
          null !== this[s].parentNode &&
            (e
              ? b(this[s].parentNode).is(e) && t.push(this[s].parentNode)
              : t.push(this[s].parentNode));
        return b(t);
      },
      parents: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          let i = this[s].parentNode;
          for (; i; )
            e ? b(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
        }
        return b(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? b([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const i = this[s].querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) t.push(i[e]);
        }
        return b(t);
      },
      children: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const i = this[s].children;
          for (let s = 0; s < i.length; s += 1)
            (e && !b(i[s]).is(e)) || t.push(i[s]);
        }
        return b(t);
      },
      filter: function (e) {
        return b(v(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(C).forEach((e) => {
      Object.defineProperty(b.fn, e, { value: C[e], writable: !0 });
    });
    const x = b;
    function S(e, t = 0) {
      return setTimeout(e, t);
    }
    function E() {
      return Date.now();
    }
    function T(e, t = "x") {
      const s = f();
      let i, n, a;
      const r = (function (e) {
        const t = f();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((n = r.transform || r.webkitTransform),
            n.split(",").length > 6 &&
              (n = n
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (a = new s.WebKitCSSMatrix("none" === n ? "" : n)))
          : ((a =
              r.MozTransform ||
              r.OTransform ||
              r.MsTransform ||
              r.msTransform ||
              r.transform ||
              r
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = a.toString().split(","))),
        "x" === t &&
          (n = s.WebKitCSSMatrix
            ? a.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === t &&
          (n = s.WebKitCSSMatrix
            ? a.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        n || 0
      );
    }
    function k(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function M(...e) {
      const t = Object(e[0]),
        s = ["__proto__", "constructor", "prototype"];
      for (let n = 1; n < e.length; n += 1) {
        const a = e[n];
        if (
          null != a &&
          ((i = a),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? i instanceof HTMLElement
            : i && (1 === i.nodeType || 11 === i.nodeType)))
        ) {
          const e = Object.keys(Object(a)).filter((e) => s.indexOf(e) < 0);
          for (let s = 0, i = e.length; s < i; s += 1) {
            const i = e[s],
              n = Object.getOwnPropertyDescriptor(a, i);
            void 0 !== n &&
              n.enumerable &&
              (k(t[i]) && k(a[i])
                ? a[i].__swiper__
                  ? (t[i] = a[i])
                  : M(t[i], a[i])
                : !k(t[i]) && k(a[i])
                ? ((t[i] = {}), a[i].__swiper__ ? (t[i] = a[i]) : M(t[i], a[i]))
                : (t[i] = a[i]));
          }
        }
      }
      var i;
      return t;
    }
    function L(e, t, s) {
      e.style.setProperty(t, s);
    }
    function $({ swiper: e, targetPosition: t, side: s }) {
      const i = f(),
        n = -e.translate;
      let a,
        r = null;
      const l = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        i.cancelAnimationFrame(e.cssModeFrameID);
      const o = t > n ? "next" : "prev",
        d = (e, t) => ("next" === o && e >= t) || ("prev" === o && e <= t),
        c = () => {
          (a = new Date().getTime()), null === r && (r = a);
          const o = Math.max(Math.min((a - r) / l, 1), 0),
            p = 0.5 - Math.cos(o * Math.PI) / 2;
          let u = n + p * (t - n);
          if ((d(u, t) && (u = t), e.wrapperEl.scrollTo({ [s]: u }), d(u, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [s]: u });
              }),
              void i.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = i.requestAnimationFrame(c);
        };
      c();
    }
    let P, _, A;
    function I() {
      return (
        P ||
          (P = (function () {
            const e = f(),
              t = u();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const s = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, s);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        P
      );
    }
    function O(e = {}) {
      return (
        _ ||
          (_ = (function ({ userAgent: e } = {}) {
            const t = I(),
              s = f(),
              i = s.navigator.platform,
              n = e || s.navigator.userAgent,
              a = { ios: !1, android: !1 },
              r = s.screen.width,
              l = s.screen.height,
              o = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = n.match(/(iPad).*OS\s([\d_]+)/);
            const c = n.match(/(iPod)(.*OS\s([\d_]+))?/),
              p = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              u = "Win32" === i;
            let h = "MacIntel" === i;
            return (
              !d &&
                h &&
                t.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${r}x${l}`) >= 0 &&
                ((d = n.match(/(Version)\/([\d.]+)/)),
                d || (d = [0, 1, "13_0_0"]),
                (h = !1)),
              o && !u && ((a.os = "android"), (a.android = !0)),
              (d || p || c) && ((a.os = "ios"), (a.ios = !0)),
              a
            );
          })(e)),
        _
      );
    }
    function z() {
      return (
        A ||
          (A = (function () {
            const e = f();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        A
      );
    }
    const B = {
      on(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        const n = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][n](t);
          }),
          i
        );
      },
      once(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        function n(...s) {
          i.off(e, n),
            n.__emitterProxy && delete n.__emitterProxy,
            t.apply(i, s);
        }
        return (n.__emitterProxy = t), i.on(e, n, s);
      },
      onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof e) return s;
        const i = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed
          ? s
          : s.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((i, n) => {
                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(n, 1);
                  });
            }),
            s)
          : s;
      },
      emit(...e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsListeners) return t;
        let s, i, n;
        "string" == typeof e[0] || Array.isArray(e[0])
          ? ((s = e[0]), (i = e.slice(1, e.length)), (n = t))
          : ((s = e[0].events), (i = e[0].data), (n = e[0].context || t)),
          i.unshift(n);
        return (
          (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
            t.eventsAnyListeners &&
              t.eventsAnyListeners.length &&
              t.eventsAnyListeners.forEach((t) => {
                t.apply(n, [e, ...i]);
              }),
              t.eventsListeners &&
                t.eventsListeners[e] &&
                t.eventsListeners[e].forEach((e) => {
                  e.apply(n, i);
                });
          }),
          t
        );
      },
    };
    const D = {
      updateSize: function () {
        const e = this;
        let t, s;
        const i = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : i[0].clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(i.css("padding-left") || 0, 10) -
              parseInt(i.css("padding-right") || 0, 10)),
            (s =
              s -
              parseInt(i.css("padding-top") || 0, 10) -
              parseInt(i.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }
        const i = e.params,
          { $wrapperEl: n, size: a, rtlTranslate: r, wrongRTL: l } = e,
          o = e.virtual && i.virtual.enabled,
          d = o ? e.virtual.slides.length : e.slides.length,
          c = n.children(`.${e.params.slideClass}`),
          p = o ? e.virtual.slides.length : c.length;
        let u = [];
        const h = [],
          f = [];
        let m = i.slidesOffsetBefore;
        "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
        let g = i.slidesOffsetAfter;
        "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          b = e.slidesGrid.length;
        let w = i.spaceBetween,
          y = -m,
          C = 0,
          x = 0;
        if (void 0 === a) return;
        "string" == typeof w &&
          w.indexOf("%") >= 0 &&
          (w = (parseFloat(w.replace("%", "")) / 100) * a),
          (e.virtualSize = -w),
          r
            ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          i.centeredSlides &&
            i.cssMode &&
            (L(e.wrapperEl, "--swiper-centered-offset-before", ""),
            L(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const S = i.grid && i.grid.rows > 1 && e.grid;
        let E;
        S && e.grid.initSlides(p);
        const T =
          "auto" === i.slidesPerView &&
          i.breakpoints &&
          Object.keys(i.breakpoints).filter(
            (e) => void 0 !== i.breakpoints[e].slidesPerView
          ).length > 0;
        for (let n = 0; n < p; n += 1) {
          E = 0;
          const r = c.eq(n);
          if (
            (S && e.grid.updateSlide(n, r, p, t), "none" !== r.css("display"))
          ) {
            if ("auto" === i.slidesPerView) {
              T && (c[n].style[t("width")] = "");
              const a = getComputedStyle(r[0]),
                l = r[0].style.transform,
                o = r[0].style.webkitTransform;
              if (
                (l && (r[0].style.transform = "none"),
                o && (r[0].style.webkitTransform = "none"),
                i.roundLengths)
              )
                E = e.isHorizontal() ? r.outerWidth(!0) : r.outerHeight(!0);
              else {
                const e = s(a, "width"),
                  t = s(a, "padding-left"),
                  i = s(a, "padding-right"),
                  n = s(a, "margin-left"),
                  l = s(a, "margin-right"),
                  o = a.getPropertyValue("box-sizing");
                if (o && "border-box" === o) E = e + n + l;
                else {
                  const { clientWidth: s, offsetWidth: a } = r[0];
                  E = e + t + i + n + l + (a - s);
                }
              }
              l && (r[0].style.transform = l),
                o && (r[0].style.webkitTransform = o),
                i.roundLengths && (E = Math.floor(E));
            } else
              (E = (a - (i.slidesPerView - 1) * w) / i.slidesPerView),
                i.roundLengths && (E = Math.floor(E)),
                c[n] && (c[n].style[t("width")] = `${E}px`);
            c[n] && (c[n].swiperSlideSize = E),
              f.push(E),
              i.centeredSlides
                ? ((y = y + E / 2 + C / 2 + w),
                  0 === C && 0 !== n && (y = y - a / 2 - w),
                  0 === n && (y = y - a / 2 - w),
                  Math.abs(y) < 0.001 && (y = 0),
                  i.roundLengths && (y = Math.floor(y)),
                  x % i.slidesPerGroup == 0 && u.push(y),
                  h.push(y))
                : (i.roundLengths && (y = Math.floor(y)),
                  (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                    e.params.slidesPerGroup ==
                    0 && u.push(y),
                  h.push(y),
                  (y = y + E + w)),
              (e.virtualSize += E + w),
              (C = E),
              (x += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, a) + g),
          r &&
            l &&
            ("slide" === i.effect || "coverflow" === i.effect) &&
            n.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
          i.setWrapperSize &&
            n.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
          S && e.grid.updateWrapperSize(E, u, t),
          !i.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < u.length; s += 1) {
            let n = u[s];
            i.roundLengths && (n = Math.floor(n)),
              u[s] <= e.virtualSize - a && t.push(n);
          }
          (u = t),
            Math.floor(e.virtualSize - a) - Math.floor(u[u.length - 1]) > 1 &&
              u.push(e.virtualSize - a);
        }
        if ((0 === u.length && (u = [0]), 0 !== i.spaceBetween)) {
          const s = e.isHorizontal() && r ? "marginLeft" : t("marginRight");
          c.filter((e, t) => !i.cssMode || t !== c.length - 1).css({
            [s]: `${w}px`,
          });
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
          let e = 0;
          f.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
            (e -= i.spaceBetween);
          const t = e - a;
          u = u.map((e) => (e < 0 ? -m : e > t ? t + g : e));
        }
        if (i.centerInsufficientSlides) {
          let e = 0;
          if (
            (f.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
            (e -= i.spaceBetween),
            e < a)
          ) {
            const t = (a - e) / 2;
            u.forEach((e, s) => {
              u[s] = e - t;
            }),
              h.forEach((e, s) => {
                h[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: c,
            snapGrid: u,
            slidesGrid: h,
            slidesSizesGrid: f,
          }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
        ) {
          L(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
            L(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - f[f.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        if (
          (p !== d && e.emit("slidesLengthChange"),
          u.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          h.length !== b && e.emit("slidesGridLengthChange"),
          i.watchSlidesProgress && e.updateSlidesOffset(),
          !(o || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
        ) {
          const t = `${i.containerModifierClass}backface-hidden`,
            s = e.$el.hasClass(t);
          p <= i.maxBackfaceHiddenSlides
            ? s || e.$el.addClass(t)
            : s && e.$el.removeClass(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          i = t.virtual && t.params.virtual.enabled;
        let n,
          a = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const r = (e) =>
          i
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || x([])).each((e) => {
              s.push(e);
            });
          else
            for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
              const e = t.activeIndex + n;
              if (e > t.slides.length && !i) break;
              s.push(r(e));
            }
        else s.push(r(t.activeIndex));
        for (n = 0; n < s.length; n += 1)
          if (void 0 !== s[n]) {
            const e = s[n].offsetHeight;
            a = e > a ? e : a;
          }
        (a || 0 === a) && t.$wrapperEl.css("height", `${a}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let s = 0; s < t.length; s += 1)
          t[s].swiperSlideOffset = e.isHorizontal()
            ? t[s].offsetLeft
            : t[s].offsetTop;
      },
      updateSlidesProgress: function (e = (this && this.translate) || 0) {
        const t = this,
          s = t.params,
          { slides: i, rtlTranslate: n, snapGrid: a } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let r = -e;
        n && (r = e),
          i.removeClass(s.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < i.length; e += 1) {
          const l = i[e];
          let o = l.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (o -= i[0].swiperSlideOffset);
          const d =
              (r + (s.centeredSlides ? t.minTranslate() : 0) - o) /
              (l.swiperSlideSize + s.spaceBetween),
            c =
              (r - a[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) /
              (l.swiperSlideSize + s.spaceBetween),
            p = -(r - o),
            u = p + t.slidesSizesGrid[e];
          ((p >= 0 && p < t.size - 1) ||
            (u > 1 && u <= t.size) ||
            (p <= 0 && u >= t.size)) &&
            (t.visibleSlides.push(l),
            t.visibleSlidesIndexes.push(e),
            i.eq(e).addClass(s.slideVisibleClass)),
            (l.progress = n ? -d : d),
            (l.originalProgress = n ? -c : c);
        }
        t.visibleSlides = x(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: n, isBeginning: a, isEnd: r } = t;
        const l = a,
          o = r;
        0 === i
          ? ((n = 0), (a = !0), (r = !0))
          : ((n = (e - t.minTranslate()) / i), (a = n <= 0), (r = n >= 1)),
          Object.assign(t, { progress: n, isBeginning: a, isEnd: r }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          a && !l && t.emit("reachBeginning toEdge"),
          r && !o && t.emit("reachEnd toEdge"),
          ((l && !a) || (o && !r)) && t.emit("fromEdge"),
          t.emit("progress", n);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: s,
            $wrapperEl: i,
            activeIndex: n,
            realIndex: a,
          } = e,
          r = e.virtual && s.virtual.enabled;
        let l;
        t.removeClass(
          `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
        ),
          (l = r
            ? e.$wrapperEl.find(
                `.${s.slideClass}[data-swiper-slide-index="${n}"]`
              )
            : t.eq(n)),
          l.addClass(s.slideActiveClass),
          s.loop &&
            (l.hasClass(s.slideDuplicateClass)
              ? i
                  .children(
                    `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${a}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass)
              : i
                  .children(
                    `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${a}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass));
        let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
        s.loop &&
          0 === o.length &&
          ((o = t.eq(0)), o.addClass(s.slideNextClass));
        let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
        s.loop &&
          0 === d.length &&
          ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
          s.loop &&
            (o.hasClass(s.slideDuplicateClass)
              ? i
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${o.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass)
              : i
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${o.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass),
            d.hasClass(s.slideDuplicateClass)
              ? i
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${d.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)
              : i
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${d.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: i,
            snapGrid: n,
            params: a,
            activeIndex: r,
            realIndex: l,
            snapIndex: o,
          } = t;
        let d,
          c = e;
        if (void 0 === c) {
          for (let e = 0; e < i.length; e += 1)
            void 0 !== i[e + 1]
              ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
                ? (c = e)
                : s >= i[e] && s < i[e + 1] && (c = e + 1)
              : s >= i[e] && (c = e);
          a.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
        }
        if (n.indexOf(s) >= 0) d = n.indexOf(s);
        else {
          const e = Math.min(a.slidesPerGroupSkip, c);
          d = e + Math.floor((c - e) / a.slidesPerGroup);
        }
        if ((d >= n.length && (d = n.length - 1), c === r))
          return void (
            d !== o && ((t.snapIndex = d), t.emit("snapIndexChange"))
          );
        const p = parseInt(
          t.slides.eq(c).attr("data-swiper-slide-index") || c,
          10
        );
        Object.assign(t, {
          snapIndex: d,
          realIndex: p,
          previousIndex: r,
          activeIndex: c,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          l !== p && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          s = t.params,
          i = x(e).closest(`.${s.slideClass}`)[0];
        let n,
          a = !1;
        if (i)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === i) {
              (a = !0), (n = e);
              break;
            }
        if (!i || !a)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = i),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                x(i).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = n),
          s.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const G = {
      getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
        const {
          params: t,
          rtlTranslate: s,
          translate: i,
          $wrapperEl: n,
        } = this;
        if (t.virtualTranslate) return s ? -i : i;
        if (t.cssMode) return i;
        let a = T(n[0], e);
        return s && (a = -a), a || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          {
            rtlTranslate: i,
            params: n,
            $wrapperEl: a,
            wrapperEl: r,
            progress: l,
          } = s;
        let o,
          d = 0,
          c = 0;
        s.isHorizontal() ? (d = i ? -e : e) : (c = e),
          n.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
          n.cssMode
            ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -d : -c)
            : n.virtualTranslate ||
              a.transform(`translate3d(${d}px, ${c}px, 0px)`),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? d : c);
        const p = s.maxTranslate() - s.minTranslate();
        (o = 0 === p ? 0 : (e - s.minTranslate()) / p),
          o !== l && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e = 0, t = this.params.speed, s = !0, i = !0, n) {
        const a = this,
          { params: r, wrapperEl: l } = a;
        if (a.animating && r.preventInteractionOnTransition) return !1;
        const o = a.minTranslate(),
          d = a.maxTranslate();
        let c;
        if (
          ((c = i && e > o ? o : i && e < d ? d : e),
          a.updateProgress(c),
          r.cssMode)
        ) {
          const e = a.isHorizontal();
          if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
          else {
            if (!a.support.smoothScroll)
              return (
                $({ swiper: a, targetPosition: -c, side: e ? "left" : "top" }),
                !0
              );
            l.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (a.setTransition(0),
              a.setTranslate(c),
              s &&
                (a.emit("beforeTransitionStart", t, n),
                a.emit("transitionEnd")))
            : (a.setTransition(t),
              a.setTranslate(c),
              s &&
                (a.emit("beforeTransitionStart", t, n),
                a.emit("transitionStart")),
              a.animating ||
                ((a.animating = !0),
                a.onTranslateToWrapperTransitionEnd ||
                  (a.onTranslateToWrapperTransitionEnd = function (e) {
                    a &&
                      !a.destroyed &&
                      e.target === this &&
                      (a.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        a.onTranslateToWrapperTransitionEnd
                      ),
                      a.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        a.onTranslateToWrapperTransitionEnd
                      ),
                      (a.onTranslateToWrapperTransitionEnd = null),
                      delete a.onTranslateToWrapperTransitionEnd,
                      s && a.emit("transitionEnd"));
                  }),
                a.$wrapperEl[0].addEventListener(
                  "transitionend",
                  a.onTranslateToWrapperTransitionEnd
                ),
                a.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  a.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function N({ swiper: e, runCallbacks: t, direction: s, step: i }) {
      const { activeIndex: n, previousIndex: a } = e;
      let r = s;
      if (
        (r || (r = n > a ? "next" : n < a ? "prev" : "reset"),
        e.emit(`transition${i}`),
        t && n !== a)
      ) {
        if ("reset" === r) return void e.emit(`slideResetTransition${i}`);
        e.emit(`slideChangeTransition${i}`),
          "next" === r
            ? e.emit(`slideNextTransition${i}`)
            : e.emit(`slidePrevTransition${i}`);
      }
    }
    const q = {
      slideTo: function (e = 0, t = this.params.speed, s = !0, i, n) {
        if ("number" != typeof e && "string" != typeof e)
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          );
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const a = this;
        let r = e;
        r < 0 && (r = 0);
        const {
          params: l,
          snapGrid: o,
          slidesGrid: d,
          previousIndex: c,
          activeIndex: p,
          rtlTranslate: u,
          wrapperEl: h,
          enabled: f,
        } = a;
        if (
          (a.animating && l.preventInteractionOnTransition) ||
          (!f && !i && !n)
        )
          return !1;
        const m = Math.min(a.params.slidesPerGroupSkip, r);
        let g = m + Math.floor((r - m) / a.params.slidesPerGroup);
        g >= o.length && (g = o.length - 1);
        const v = -o[g];
        if (l.normalizeSlideIndex)
          for (let e = 0; e < d.length; e += 1) {
            const t = -Math.floor(100 * v),
              s = Math.floor(100 * d[e]),
              i = Math.floor(100 * d[e + 1]);
            void 0 !== d[e + 1]
              ? t >= s && t < i - (i - s) / 2
                ? (r = e)
                : t >= s && t < i && (r = e + 1)
              : t >= s && (r = e);
          }
        if (a.initialized && r !== p) {
          if (!a.allowSlideNext && v < a.translate && v < a.minTranslate())
            return !1;
          if (
            !a.allowSlidePrev &&
            v > a.translate &&
            v > a.maxTranslate() &&
            (p || 0) !== r
          )
            return !1;
        }
        let b;
        if (
          (r !== (c || 0) && s && a.emit("beforeSlideChangeStart"),
          a.updateProgress(v),
          (b = r > p ? "next" : r < p ? "prev" : "reset"),
          (u && -v === a.translate) || (!u && v === a.translate))
        )
          return (
            a.updateActiveIndex(r),
            l.autoHeight && a.updateAutoHeight(),
            a.updateSlidesClasses(),
            "slide" !== l.effect && a.setTranslate(v),
            "reset" !== b && (a.transitionStart(s, b), a.transitionEnd(s, b)),
            !1
          );
        if (l.cssMode) {
          const e = a.isHorizontal(),
            s = u ? v : -v;
          if (0 === t) {
            const t = a.virtual && a.params.virtual.enabled;
            t &&
              ((a.wrapperEl.style.scrollSnapType = "none"),
              (a._immediateVirtual = !0)),
              (h[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (a.wrapperEl.style.scrollSnapType = ""),
                    (a._swiperImmediateVirtual = !1);
                });
          } else {
            if (!a.support.smoothScroll)
              return (
                $({ swiper: a, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          a.setTransition(t),
          a.setTranslate(v),
          a.updateActiveIndex(r),
          a.updateSlidesClasses(),
          a.emit("beforeTransitionStart", t, i),
          a.transitionStart(s, b),
          0 === t
            ? a.transitionEnd(s, b)
            : a.animating ||
              ((a.animating = !0),
              a.onSlideToWrapperTransitionEnd ||
                (a.onSlideToWrapperTransitionEnd = function (e) {
                  a &&
                    !a.destroyed &&
                    e.target === this &&
                    (a.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      a.onSlideToWrapperTransitionEnd
                    ),
                    a.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      a.onSlideToWrapperTransitionEnd
                    ),
                    (a.onSlideToWrapperTransitionEnd = null),
                    delete a.onSlideToWrapperTransitionEnd,
                    a.transitionEnd(s, b));
                }),
              a.$wrapperEl[0].addEventListener(
                "transitionend",
                a.onSlideToWrapperTransitionEnd
              ),
              a.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                a.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const n = this;
        let a = e;
        return n.params.loop && (a += n.loopedSlides), n.slideTo(a, t, s, i);
      },
      slideNext: function (e = this.params.speed, t = !0, s) {
        const i = this,
          { animating: n, enabled: a, params: r } = i;
        if (!a) return i;
        let l = r.slidesPerGroup;
        "auto" === r.slidesPerView &&
          1 === r.slidesPerGroup &&
          r.slidesPerGroupAuto &&
          (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const o = i.activeIndex < r.slidesPerGroupSkip ? 1 : l;
        if (r.loop) {
          if (n && r.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        return r.rewind && i.isEnd
          ? i.slideTo(0, e, t, s)
          : i.slideTo(i.activeIndex + o, e, t, s);
      },
      slidePrev: function (e = this.params.speed, t = !0, s) {
        const i = this,
          {
            params: n,
            animating: a,
            snapGrid: r,
            slidesGrid: l,
            rtlTranslate: o,
            enabled: d,
          } = i;
        if (!d) return i;
        if (n.loop) {
          if (a && n.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        function c(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const p = c(o ? i.translate : -i.translate),
          u = r.map((e) => c(e));
        let h = r[u.indexOf(p) - 1];
        if (void 0 === h && n.cssMode) {
          let e;
          r.forEach((t, s) => {
            p >= t && (e = s);
          }),
            void 0 !== e && (h = r[e > 0 ? e - 1 : e]);
        }
        let f = 0;
        if (
          (void 0 !== h &&
            ((f = l.indexOf(h)),
            f < 0 && (f = i.activeIndex - 1),
            "auto" === n.slidesPerView &&
              1 === n.slidesPerGroup &&
              n.slidesPerGroupAuto &&
              ((f = f - i.slidesPerViewDynamic("previous", !0) + 1),
              (f = Math.max(f, 0)))),
          n.rewind && i.isBeginning)
        ) {
          const n =
            i.params.virtual && i.params.virtual.enabled && i.virtual
              ? i.virtual.slides.length - 1
              : i.slides.length - 1;
          return i.slideTo(n, e, t, s);
        }
        return i.slideTo(f, e, t, s);
      },
      slideReset: function (e = this.params.speed, t = !0, s) {
        return this.slideTo(this.activeIndex, e, t, s);
      },
      slideToClosest: function (e = this.params.speed, t = !0, s, i = 0.5) {
        const n = this;
        let a = n.activeIndex;
        const r = Math.min(n.params.slidesPerGroupSkip, a),
          l = r + Math.floor((a - r) / n.params.slidesPerGroup),
          o = n.rtlTranslate ? n.translate : -n.translate;
        if (o >= n.snapGrid[l]) {
          const e = n.snapGrid[l];
          o - e > (n.snapGrid[l + 1] - e) * i && (a += n.params.slidesPerGroup);
        } else {
          const e = n.snapGrid[l - 1];
          o - e <= (n.snapGrid[l] - e) * i && (a -= n.params.slidesPerGroup);
        }
        return (
          (a = Math.max(a, 0)),
          (a = Math.min(a, n.slidesGrid.length - 1)),
          n.slideTo(a, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: s } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let n,
          a = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (n = parseInt(x(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? a < e.loopedSlides - i / 2 ||
                a > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (a = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  S(() => {
                    e.slideTo(a);
                  }))
                : e.slideTo(a)
              : a > e.slides.length - i
              ? (e.loopFix(),
                (a = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                S(() => {
                  e.slideTo(a);
                }))
              : e.slideTo(a);
        } else e.slideTo(a);
      },
    };
    const j = {
      loopCreate: function () {
        const e = this,
          t = u(),
          { params: s, $wrapperEl: i } = e,
          n = i.children().length > 0 ? x(i.children()[0].parentNode) : i;
        n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
        let a = n.children(`.${s.slideClass}`);
        if (s.loopFillGroupWithBlank) {
          const e = s.slidesPerGroup - (a.length % s.slidesPerGroup);
          if (e !== s.slidesPerGroup) {
            for (let i = 0; i < e; i += 1) {
              const e = x(t.createElement("div")).addClass(
                `${s.slideClass} ${s.slideBlankClass}`
              );
              n.append(e);
            }
            a = n.children(`.${s.slideClass}`);
          }
        }
        "auto" !== s.slidesPerView ||
          s.loopedSlides ||
          (s.loopedSlides = a.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(s.loopedSlides || s.slidesPerView, 10)
          )),
          (e.loopedSlides += s.loopAdditionalSlides),
          e.loopedSlides > a.length &&
            e.params.loopedSlidesLimit &&
            (e.loopedSlides = a.length);
        const r = [],
          l = [];
        a.each((e, t) => {
          x(e).attr("data-swiper-slide-index", t);
        });
        for (let t = 0; t < e.loopedSlides; t += 1) {
          const e = t - Math.floor(t / a.length) * a.length;
          l.push(a.eq(e)[0]), r.unshift(a.eq(a.length - e - 1)[0]);
        }
        for (let e = 0; e < l.length; e += 1)
          n.append(x(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
        for (let e = r.length - 1; e >= 0; e -= 1)
          n.prepend(x(r[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: s,
          loopedSlides: i,
          allowSlidePrev: n,
          allowSlideNext: a,
          snapGrid: r,
          rtlTranslate: l,
        } = e;
        let o;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const d = -r[t] - e.getTranslate();
        if (t < i) {
          (o = s.length - 3 * i + t), (o += i);
          e.slideTo(o, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((l ? -e.translate : e.translate) - d);
        } else if (t >= s.length - i) {
          (o = -s.length + t + i), (o += i);
          e.slideTo(o, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((l ? -e.translate : e.translate) - d);
        }
        (e.allowSlidePrev = n), (e.allowSlideNext = a), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: s } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          s.removeAttr("data-swiper-slide-index");
      },
    };
    function H(e) {
      const t = this,
        s = u(),
        i = f(),
        n = t.touchEventsData,
        { params: a, touches: r, enabled: l } = t;
      if (!l) return;
      if (t.animating && a.preventInteractionOnTransition) return;
      !t.animating && a.cssMode && a.loop && t.loopFix();
      let o = e;
      o.originalEvent && (o = o.originalEvent);
      let d = x(o.target);
      if ("wrapper" === a.touchEventsTarget && !d.closest(t.wrapperEl).length)
        return;
      if (
        ((n.isTouchEvent = "touchstart" === o.type),
        !n.isTouchEvent && "which" in o && 3 === o.which)
      )
        return;
      if (!n.isTouchEvent && "button" in o && o.button > 0) return;
      if (n.isTouched && n.isMoved) return;
      const c = !!a.noSwipingClass && "" !== a.noSwipingClass,
        p = e.composedPath ? e.composedPath() : e.path;
      c && o.target && o.target.shadowRoot && p && (d = x(p[0]));
      const h = a.noSwipingSelector
          ? a.noSwipingSelector
          : `.${a.noSwipingClass}`,
        m = !(!o.target || !o.target.shadowRoot);
      if (
        a.noSwiping &&
        (m
          ? (function (e, t = this) {
              return (function t(s) {
                if (!s || s === u() || s === f()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
              })(t);
            })(h, d[0])
          : d.closest(h)[0])
      )
        return void (t.allowClick = !0);
      if (a.swipeHandler && !d.closest(a.swipeHandler)[0]) return;
      (r.currentX =
        "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX),
        (r.currentY =
          "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY);
      const g = r.currentX,
        v = r.currentY,
        b = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
        w = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
      if (b && (g <= w || g >= i.innerWidth - w)) {
        if ("prevent" !== b) return;
        e.preventDefault();
      }
      if (
        (Object.assign(n, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (r.startX = g),
        (r.startY = v),
        (n.touchStartTime = E()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        a.threshold > 0 && (n.allowThresholdMove = !1),
        "touchstart" !== o.type)
      ) {
        let e = !0;
        d.is(n.focusableElements) &&
          ((e = !1), "SELECT" === d[0].nodeName && (n.isTouched = !1)),
          s.activeElement &&
            x(s.activeElement).is(n.focusableElements) &&
            s.activeElement !== d[0] &&
            s.activeElement.blur();
        const i = e && t.allowTouchMove && a.touchStartPreventDefault;
        (!a.touchStartForcePreventDefault && !i) ||
          d[0].isContentEditable ||
          o.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !a.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", o);
    }
    function W(e) {
      const t = u(),
        s = this,
        i = s.touchEventsData,
        { params: n, touches: a, rtlTranslate: r, enabled: l } = s;
      if (!l) return;
      let o = e;
      if ((o.originalEvent && (o = o.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          s.emit("touchMoveOpposite", o)
        );
      if (i.isTouchEvent && "touchmove" !== o.type) return;
      const d =
          "touchmove" === o.type &&
          o.targetTouches &&
          (o.targetTouches[0] || o.changedTouches[0]),
        c = "touchmove" === o.type ? d.pageX : o.pageX,
        p = "touchmove" === o.type ? d.pageY : o.pageY;
      if (o.preventedByNestedSwiper) return (a.startX = c), void (a.startY = p);
      if (!s.allowTouchMove)
        return (
          x(o.target).is(i.focusableElements) || (s.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(a, {
              startX: c,
              startY: p,
              currentX: c,
              currentY: p,
            }),
            (i.touchStartTime = E()))
          )
        );
      if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
        if (s.isVertical()) {
          if (
            (p < a.startY && s.translate <= s.maxTranslate()) ||
            (p > a.startY && s.translate >= s.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (c < a.startX && s.translate <= s.maxTranslate()) ||
          (c > a.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        i.isTouchEvent &&
        t.activeElement &&
        o.target === t.activeElement &&
        x(o.target).is(i.focusableElements)
      )
        return (i.isMoved = !0), void (s.allowClick = !1);
      if (
        (i.allowTouchCallbacks && s.emit("touchMove", o),
        o.targetTouches && o.targetTouches.length > 1)
      )
        return;
      (a.currentX = c), (a.currentY = p);
      const h = a.currentX - a.startX,
        f = a.currentY - a.startY;
      if (s.params.threshold && Math.sqrt(h ** 2 + f ** 2) < s.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (s.isHorizontal() && a.currentY === a.startY) ||
        (s.isVertical() && a.currentX === a.startX)
          ? (i.isScrolling = !1)
          : h * h + f * f >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(f), Math.abs(h))) / Math.PI),
            (i.isScrolling = s.isHorizontal()
              ? e > n.touchAngle
              : 90 - e > n.touchAngle));
      }
      if (
        (i.isScrolling && s.emit("touchMoveOpposite", o),
        void 0 === i.startMoving &&
          ((a.currentX === a.startX && a.currentY === a.startY) ||
            (i.startMoving = !0)),
        i.isScrolling)
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (s.allowClick = !1),
        !n.cssMode && o.cancelable && o.preventDefault(),
        n.touchMoveStopPropagation && !n.nested && o.stopPropagation(),
        i.isMoved ||
          (n.loop && !n.cssMode && s.loopFix(),
          (i.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating &&
            s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (i.allowMomentumBounce = !1),
          !n.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", o)),
        s.emit("sliderMove", o),
        (i.isMoved = !0);
      let m = s.isHorizontal() ? h : f;
      (a.diff = m),
        (m *= n.touchRatio),
        r && (m = -m),
        (s.swipeDirection = m > 0 ? "prev" : "next"),
        (i.currentTranslate = m + i.startTranslate);
      let g = !0,
        v = n.resistanceRatio;
      if (
        (n.touchReleaseOnEdges && (v = 0),
        m > 0 && i.currentTranslate > s.minTranslate()
          ? ((g = !1),
            n.resistance &&
              (i.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + i.startTranslate + m) ** v))
          : m < 0 &&
            i.currentTranslate < s.maxTranslate() &&
            ((g = !1),
            n.resistance &&
              (i.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - i.startTranslate - m) ** v)),
        g && (o.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        n.threshold > 0)
      ) {
        if (!(Math.abs(m) > n.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (a.startX = a.currentX),
            (a.startY = a.currentY),
            (i.currentTranslate = i.startTranslate),
            void (a.diff = s.isHorizontal()
              ? a.currentX - a.startX
              : a.currentY - a.startY)
          );
      }
      n.followFinger &&
        !n.cssMode &&
        (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
          n.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        s.params.freeMode &&
          n.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate));
    }
    function R(e) {
      const t = this,
        s = t.touchEventsData,
        {
          params: i,
          touches: n,
          rtlTranslate: a,
          slidesGrid: r,
          enabled: l,
        } = t;
      if (!l) return;
      let o = e;
      if (
        (o.originalEvent && (o = o.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", o),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && i.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      i.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const d = E(),
        c = d - s.touchStartTime;
      if (t.allowClick) {
        const e = o.path || (o.composedPath && o.composedPath());
        t.updateClickedSlide((e && e[0]) || o.target),
          t.emit("tap click", o),
          c < 300 &&
            d - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", o);
      }
      if (
        ((s.lastClickTime = E()),
        S(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === n.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let p;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (p = i.followFinger
          ? a
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        i.cssMode)
      )
        return;
      if (t.params.freeMode && i.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: p });
      let u = 0,
        h = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < r.length;
        e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
      ) {
        const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        void 0 !== r[e + t]
          ? p >= r[e] && p < r[e + t] && ((u = e), (h = r[e + t] - r[e]))
          : p >= r[e] && ((u = e), (h = r[r.length - 1] - r[r.length - 2]));
      }
      let f = null,
        m = null;
      i.rewind &&
        (t.isBeginning
          ? (m =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (f = 0));
      const g = (p - r[u]) / h,
        v = u < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      if (c > i.longSwipesMs) {
        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (g >= i.longSwipesRatio
            ? t.slideTo(i.rewind && t.isEnd ? f : u + v)
            : t.slideTo(u)),
          "prev" === t.swipeDirection &&
            (g > 1 - i.longSwipesRatio
              ? t.slideTo(u + v)
              : null !== m && g < 0 && Math.abs(g) > i.longSwipesRatio
              ? t.slideTo(m)
              : t.slideTo(u));
      } else {
        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
          ? o.target === t.navigation.nextEl
            ? t.slideTo(u + v)
            : t.slideTo(u)
          : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : u + v),
            "prev" === t.swipeDirection && t.slideTo(null !== m ? m : u));
      }
    }
    function V() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: n, snapGrid: a } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = n),
        (e.allowSlideNext = i),
        e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
    }
    function F(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function X() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
      if (!i) return;
      let n;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const a = e.maxTranslate() - e.minTranslate();
      (n = 0 === a ? 0 : (e.translate - e.minTranslate()) / a),
        n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let Y = !1;
    function U() {}
    const Q = (e, t) => {
      const s = u(),
        {
          params: i,
          touchEvents: n,
          el: a,
          wrapperEl: r,
          device: l,
          support: o,
        } = e,
        d = !!i.nested,
        c = "on" === t ? "addEventListener" : "removeEventListener",
        p = t;
      if (o.touch) {
        const t = !(
          "touchstart" !== n.start ||
          !o.passiveListener ||
          !i.passiveListeners
        ) && { passive: !0, capture: !1 };
        a[c](n.start, e.onTouchStart, t),
          a[c](
            n.move,
            e.onTouchMove,
            o.passiveListener ? { passive: !1, capture: d } : d
          ),
          a[c](n.end, e.onTouchEnd, t),
          n.cancel && a[c](n.cancel, e.onTouchEnd, t);
      } else
        a[c](n.start, e.onTouchStart, !1),
          s[c](n.move, e.onTouchMove, d),
          s[c](n.end, e.onTouchEnd, !1);
      (i.preventClicks || i.preventClicksPropagation) &&
        a[c]("click", e.onClick, !0),
        i.cssMode && r[c]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[p](
              l.ios || l.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              V,
              !0
            )
          : e[p]("observerUpdate", V, !0);
    };
    const K = {
        attachEvents: function () {
          const e = this,
            t = u(),
            { params: s, support: i } = e;
          (e.onTouchStart = H.bind(e)),
            (e.onTouchMove = W.bind(e)),
            (e.onTouchEnd = R.bind(e)),
            s.cssMode && (e.onScroll = X.bind(e)),
            (e.onClick = F.bind(e)),
            i.touch && !Y && (t.addEventListener("touchstart", U), (Y = !0)),
            Q(e, "on");
        },
        detachEvents: function () {
          Q(this, "off");
        },
      },
      J = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const Z = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: s,
            loopedSlides: i = 0,
            params: n,
            $el: a,
          } = e,
          r = n.breakpoints;
        if (!r || (r && 0 === Object.keys(r).length)) return;
        const l = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
        if (!l || e.currentBreakpoint === l) return;
        const o = (l in r ? r[l] : void 0) || e.originalParams,
          d = J(e, n),
          c = J(e, o),
          p = n.enabled;
        d && !c
          ? (a.removeClass(
              `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !d &&
            c &&
            (a.addClass(`${n.containerModifierClass}grid`),
            ((o.grid.fill && "column" === o.grid.fill) ||
              (!o.grid.fill && "column" === n.grid.fill)) &&
              a.addClass(`${n.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          ["navigation", "pagination", "scrollbar"].forEach((t) => {
            const s = n[t] && n[t].enabled,
              i = o[t] && o[t].enabled;
            s && !i && e[t].disable(), !s && i && e[t].enable();
          });
        const u = o.direction && o.direction !== n.direction,
          h = n.loop && (o.slidesPerView !== n.slidesPerView || u);
        u && s && e.changeDirection(), M(e.params, o);
        const f = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          p && !f ? e.disable() : !p && f && e.enable(),
          (e.currentBreakpoint = l),
          e.emit("_beforeBreakpoint", o),
          h &&
            s &&
            (e.loopDestroy(),
            e.loopCreate(),
            e.updateSlides(),
            e.slideTo(t - i + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", o);
      },
      getBreakpoint: function (e, t = "window", s) {
        if (!e || ("container" === t && !s)) return;
        let i = !1;
        const n = f(),
          a = "window" === t ? n.innerHeight : s.clientHeight,
          r = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: a * t, point: e };
            }
            return { value: e, point: e };
          });
        r.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < r.length; e += 1) {
          const { point: a, value: l } = r[e];
          "window" === t
            ? n.matchMedia(`(min-width: ${l}px)`).matches && (i = a)
            : l <= s.clientWidth && (i = a);
        }
        return i || "max";
      },
    };
    const ee = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: s,
            rtl: i,
            $el: n,
            device: a,
            support: r,
          } = e,
          l = (function (e, t) {
            const s = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((i) => {
                      e[i] && s.push(t + i);
                    })
                  : "string" == typeof e && s.push(t + e);
              }),
              s
            );
          })(
            [
              "initialized",
              s.direction,
              { "pointer-events": !r.touch },
              { "free-mode": e.params.freeMode && s.freeMode.enabled },
              { autoheight: s.autoHeight },
              { rtl: i },
              { grid: s.grid && s.grid.rows > 1 },
              {
                "grid-column":
                  s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
              },
              { android: a.android },
              { ios: a.ios },
              { "css-mode": s.cssMode },
              { centered: s.cssMode && s.centeredSlides },
              { "watch-progress": s.watchSlidesProgress },
            ],
            s.containerModifierClass
          );
        t.push(...l), n.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const te = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopedSlidesLimit: !0,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function se(e, t) {
      return function (s = {}) {
        const i = Object.keys(s)[0],
          n = s[i];
        "object" == typeof n && null !== n
          ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
              !0 === e[i] &&
              (e[i] = { auto: !0 }),
            i in e && "enabled" in n
              ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                "object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                M(t, s))
              : M(t, s))
          : M(t, s);
      };
    }
    const ie = {
        eventsEmitter: B,
        update: D,
        translate: G,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode || s.$wrapperEl.transition(e),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const s = this,
              { params: i } = s;
            i.cssMode ||
              (i.autoHeight && s.updateAutoHeight(),
              N({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const s = this,
              { params: i } = s;
            (s.animating = !1),
              i.cssMode ||
                (s.setTransition(0),
                N({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: q,
        loop: j,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (s.style.cursor = "move"),
              (s.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: K,
        breakpoints: Z,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: i } = s;
            if (i) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: ee,
        images: {
          loadImage: function (e, t, s, i, n, a) {
            const r = f();
            let l;
            function o() {
              a && a();
            }
            x(e).parent("picture")[0] || (e.complete && n)
              ? o()
              : t
              ? ((l = new r.Image()),
                (l.onload = o),
                (l.onerror = o),
                i && (l.sizes = i),
                s && (l.srcset = s),
                t && (l.src = t))
              : o();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
              const i = e.imagesToLoad[s];
              e.loadImage(
                i,
                i.currentSrc || i.getAttribute("src"),
                i.srcset || i.getAttribute("srcset"),
                i.sizes || i.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      ne = {};
    class ae {
      constructor(...e) {
        let t, s;
        if (
          (1 === e.length &&
          e[0].constructor &&
          "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
            ? (s = e[0])
            : ([t, s] = e),
          s || (s = {}),
          (s = M({}, s)),
          t && !s.el && (s.el = t),
          s.el && x(s.el).length > 1)
        ) {
          const e = [];
          return (
            x(s.el).each((t) => {
              const i = M({}, s, { el: t });
              e.push(new ae(i));
            }),
            e
          );
        }
        const i = this;
        (i.__swiper__ = !0),
          (i.support = I()),
          (i.device = O({ userAgent: s.userAgent })),
          (i.browser = z()),
          (i.eventsListeners = {}),
          (i.eventsAnyListeners = []),
          (i.modules = [...i.__modules__]),
          s.modules && Array.isArray(s.modules) && i.modules.push(...s.modules);
        const n = {};
        i.modules.forEach((e) => {
          e({
            swiper: i,
            extendParams: se(s, n),
            on: i.on.bind(i),
            once: i.once.bind(i),
            off: i.off.bind(i),
            emit: i.emit.bind(i),
          });
        });
        const a = M({}, te, n);
        return (
          (i.params = M({}, a, ne, s)),
          (i.originalParams = M({}, i.params)),
          (i.passedParams = M({}, s)),
          i.params &&
            i.params.on &&
            Object.keys(i.params.on).forEach((e) => {
              i.on(e, i.params.on[e]);
            }),
          i.params && i.params.onAny && i.onAny(i.params.onAny),
          (i.$ = x),
          Object.assign(i, {
            enabled: i.params.enabled,
            el: t,
            classNames: [],
            slides: x(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === i.params.direction,
            isVertical: () => "vertical" === i.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: i.params.allowSlideNext,
            allowSlidePrev: i.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (i.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (i.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                i.support.touch || !i.params.simulateTouch
                  ? i.touchEventsTouch
                  : i.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: i.params.focusableElements,
              lastClickTime: E(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: i.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          i.emit("_swiper"),
          i.params.init && i.init(),
          i
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = s.minTranslate(),
          n = (s.maxTranslate() - i) * e + i;
        s.translateTo(n, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((s) => {
          const i = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: s,
          slides: i,
          slidesGrid: n,
          slidesSizesGrid: a,
          size: r,
          activeIndex: l,
        } = this;
        let o = 1;
        if (s.centeredSlides) {
          let e,
            t = i[l].swiperSlideSize;
          for (let s = l + 1; s < i.length; s += 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (o += 1), t > r && (e = !0));
          for (let s = l - 1; s >= 0; s -= 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (o += 1), t > r && (e = !0));
        } else if ("current" === e)
          for (let e = l + 1; e < i.length; e += 1) {
            (t ? n[e] + a[e] - n[l] < r : n[e] - n[l] < r) && (o += 1);
          }
        else
          for (let e = l - 1; e >= 0; e -= 1) {
            n[l] - n[e] < r && (o += 1);
          }
        return o;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let n;
        s.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (i(), e.params.autoHeight && e.updateAutoHeight())
            : ((n =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              n || i()),
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const s = this,
          i = s.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.$el
              .removeClass(`${s.params.containerModifierClass}${i}`)
              .addClass(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const s = x(e || t.params.el);
        if (!(e = s[0])) return !1;
        e.swiper = t;
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let n = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = x(e.shadowRoot.querySelector(i()));
            return (t.children = (e) => s.children(e)), t;
          }
          return s.children ? s.children(i()) : x(s).children(i());
        })();
        if (0 === n.length && t.params.createElements) {
          const e = u().createElement("div");
          (n = x(e)),
            (e.className = t.params.wrapperClass),
            s.append(e),
            s.children(`.${t.params.slideClass}`).each((e) => {
              n.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: s,
            el: e,
            $wrapperEl: n,
            wrapperEl: n[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
            wrongRTL: "-webkit-box" === n.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e = !0, t = !0) {
        const s = this,
          { params: i, $el: n, $wrapperEl: a, slides: r } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            i.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              n.removeAttr("style"),
              a.removeAttr("style"),
              r &&
                r.length &&
                r
                  .removeClass(
                    [
                      i.slideVisibleClass,
                      i.slideActiveClass,
                      i.slideNextClass,
                      i.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        M(ne, e);
      }
      static get extendedDefaults() {
        return ne;
      }
      static get defaults() {
        return te;
      }
      static installModule(e) {
        ae.prototype.__modules__ || (ae.prototype.__modules__ = []);
        const t = ae.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => ae.installModule(e)), ae)
          : (ae.installModule(e), ae);
      }
    }
    Object.keys(ie).forEach((e) => {
      Object.keys(ie[e]).forEach((t) => {
        ae.prototype[t] = ie[e][t];
      });
    }),
      ae.use([
        function ({ swiper: e, on: t, emit: s }) {
          const i = f();
          let n = null,
            a = null;
          const r = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (s("beforeResize"), s("resize"));
            },
            l = () => {
              e && !e.destroyed && e.initialized && s("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== i.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((n = new ResizeObserver((t) => {
                  a = i.requestAnimationFrame(() => {
                    const { width: s, height: i } = e;
                    let n = s,
                      a = i;
                    t.forEach(
                      ({ contentBoxSize: t, contentRect: s, target: i }) => {
                        (i && i !== e.el) ||
                          ((n = s ? s.width : (t[0] || t).inlineSize),
                          (a = s ? s.height : (t[0] || t).blockSize));
                      }
                    ),
                      (n === s && a === i) || r();
                  });
                })),
                n.observe(e.el))
              : (i.addEventListener("resize", r),
                i.addEventListener("orientationchange", l));
          }),
            t("destroy", () => {
              a && i.cancelAnimationFrame(a),
                n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)),
                i.removeEventListener("resize", r),
                i.removeEventListener("orientationchange", l);
            });
        },
        function ({ swiper: e, extendParams: t, on: s, emit: i }) {
          const n = [],
            a = f(),
            r = (e, t = {}) => {
              const s = new (a.MutationObserver || a.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void i("observerUpdate", e[0]);
                  const t = function () {
                    i("observerUpdate", e[0]);
                  };
                  a.requestAnimationFrame
                    ? a.requestAnimationFrame(t)
                    : a.setTimeout(t, 0);
                }
              );
              s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                n.push(s);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = e.$el.parents();
                  for (let e = 0; e < t.length; e += 1) r(t[e]);
                }
                r(e.$el[0], { childList: e.params.observeSlideChildren }),
                  r(e.$wrapperEl[0], { attributes: !1 });
              }
            }),
            s("destroy", () => {
              n.forEach((e) => {
                e.disconnect();
              }),
                n.splice(0, n.length);
            });
        },
      ]);
    const re = ae;
    function le(e, t, s, i) {
      const n = u();
      return (
        e.params.createElements &&
          Object.keys(i).forEach((a) => {
            if (!s[a] && !0 === s.auto) {
              let r = e.$el.children(`.${i[a]}`)[0];
              r ||
                ((r = n.createElement("div")),
                (r.className = i[a]),
                e.$el.append(r)),
                (s[a] = r),
                (t[a] = r);
            }
          }),
        s
      );
    }
    function oe({ swiper: e, extendParams: t, on: s, emit: i }) {
      function n(t) {
        let s;
        return (
          t &&
            ((s = x(t)),
            e.params.uniqueNavElements &&
              "string" == typeof t &&
              s.length > 1 &&
              1 === e.$el.find(t).length &&
              (s = e.$el.find(t))),
          s
        );
      }
      function a(t, s) {
        const i = e.params.navigation;
        t &&
          t.length > 0 &&
          (t[s ? "addClass" : "removeClass"](i.disabledClass),
          t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s),
          e.params.watchOverflow &&
            e.enabled &&
            t[e.isLocked ? "addClass" : "removeClass"](i.lockClass));
      }
      function r() {
        if (e.params.loop) return;
        const { $nextEl: t, $prevEl: s } = e.navigation;
        a(s, e.isBeginning && !e.params.rewind),
          a(t, e.isEnd && !e.params.rewind);
      }
      function l(t) {
        t.preventDefault(),
          (!e.isBeginning || e.params.loop || e.params.rewind) &&
            (e.slidePrev(), i("navigationPrev"));
      }
      function o(t) {
        t.preventDefault(),
          (!e.isEnd || e.params.loop || e.params.rewind) &&
            (e.slideNext(), i("navigationNext"));
      }
      function d() {
        const t = e.params.navigation;
        if (
          ((e.params.navigation = le(
            e,
            e.originalParams.navigation,
            e.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !t.nextEl && !t.prevEl)
        )
          return;
        const s = n(t.nextEl),
          i = n(t.prevEl);
        s && s.length > 0 && s.on("click", o),
          i && i.length > 0 && i.on("click", l),
          Object.assign(e.navigation, {
            $nextEl: s,
            nextEl: s && s[0],
            $prevEl: i,
            prevEl: i && i[0],
          }),
          e.enabled ||
            (s && s.addClass(t.lockClass), i && i.addClass(t.lockClass));
      }
      function c() {
        const { $nextEl: t, $prevEl: s } = e.navigation;
        t &&
          t.length &&
          (t.off("click", o), t.removeClass(e.params.navigation.disabledClass)),
          s &&
            s.length &&
            (s.off("click", l),
            s.removeClass(e.params.navigation.disabledClass));
      }
      t({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (e.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        s("init", () => {
          !1 === e.params.navigation.enabled ? p() : (d(), r());
        }),
        s("toEdge fromEdge lock unlock", () => {
          r();
        }),
        s("destroy", () => {
          c();
        }),
        s("enable disable", () => {
          const { $nextEl: t, $prevEl: s } = e.navigation;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.navigation.lockClass
            ),
            s &&
              s[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              );
        }),
        s("click", (t, s) => {
          const { $nextEl: n, $prevEl: a } = e.navigation,
            r = s.target;
          if (e.params.navigation.hideOnClick && !x(r).is(a) && !x(r).is(n)) {
            if (
              e.pagination &&
              e.params.pagination &&
              e.params.pagination.clickable &&
              (e.pagination.el === r || e.pagination.el.contains(r))
            )
              return;
            let t;
            n
              ? (t = n.hasClass(e.params.navigation.hiddenClass))
              : a && (t = a.hasClass(e.params.navigation.hiddenClass)),
              i(!0 === t ? "navigationShow" : "navigationHide"),
              n && n.toggleClass(e.params.navigation.hiddenClass),
              a && a.toggleClass(e.params.navigation.hiddenClass);
          }
        });
      const p = () => {
        e.$el.addClass(e.params.navigation.navigationDisabledClass), c();
      };
      Object.assign(e.navigation, {
        enable: () => {
          e.$el.removeClass(e.params.navigation.navigationDisabledClass),
            d(),
            r();
        },
        disable: p,
        update: r,
        init: d,
        destroy: c,
      });
    }
    function de(e = "") {
      return `.${e
        .trim()
        .replace(/([\.:!\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    function ce({ swiper: e, extendParams: t, on: s, emit: i }) {
      const n = "swiper-pagination";
      let a;
      t({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${n}-bullet`,
          bulletActiveClass: `${n}-bullet-active`,
          modifierClass: `${n}-`,
          currentClass: `${n}-current`,
          totalClass: `${n}-total`,
          hiddenClass: `${n}-hidden`,
          progressbarFillClass: `${n}-progressbar-fill`,
          progressbarOppositeClass: `${n}-progressbar-opposite`,
          clickableClass: `${n}-clickable`,
          lockClass: `${n}-lock`,
          horizontalClass: `${n}-horizontal`,
          verticalClass: `${n}-vertical`,
          paginationDisabledClass: `${n}-disabled`,
        },
      }),
        (e.pagination = { el: null, $el: null, bullets: [] });
      let r = 0;
      function l() {
        return (
          !e.params.pagination.el ||
          !e.pagination.el ||
          !e.pagination.$el ||
          0 === e.pagination.$el.length
        );
      }
      function o(t, s) {
        const { bulletActiveClass: i } = e.params.pagination;
        t[s]().addClass(`${i}-${s}`)[s]().addClass(`${i}-${s}-${s}`);
      }
      function d() {
        const t = e.rtl,
          s = e.params.pagination;
        if (l()) return;
        const n =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          d = e.pagination.$el;
        let c;
        const p = e.params.loop
          ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup)
          : e.snapGrid.length;
        if (
          (e.params.loop
            ? ((c = Math.ceil(
                (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
              )),
              c > n - 1 - 2 * e.loopedSlides && (c -= n - 2 * e.loopedSlides),
              c > p - 1 && (c -= p),
              c < 0 && "bullets" !== e.params.paginationType && (c = p + c))
            : (c = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
          "bullets" === s.type &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0)
        ) {
          const i = e.pagination.bullets;
          let n, l, p;
          if (
            (s.dynamicBullets &&
              ((a = i
                .eq(0)
                [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              d.css(
                e.isHorizontal() ? "width" : "height",
                a * (s.dynamicMainBullets + 4) + "px"
              ),
              s.dynamicMainBullets > 1 &&
                void 0 !== e.previousIndex &&
                ((r += c - (e.previousIndex - e.loopedSlides || 0)),
                r > s.dynamicMainBullets - 1
                  ? (r = s.dynamicMainBullets - 1)
                  : r < 0 && (r = 0)),
              (n = Math.max(c - r, 0)),
              (l = n + (Math.min(i.length, s.dynamicMainBullets) - 1)),
              (p = (l + n) / 2)),
            i.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${s.bulletActiveClass}${e}`)
                .join(" ")
            ),
            d.length > 1)
          )
            i.each((e) => {
              const t = x(e),
                i = t.index();
              i === c && t.addClass(s.bulletActiveClass),
                s.dynamicBullets &&
                  (i >= n &&
                    i <= l &&
                    t.addClass(`${s.bulletActiveClass}-main`),
                  i === n && o(t, "prev"),
                  i === l && o(t, "next"));
            });
          else {
            const t = i.eq(c),
              a = t.index();
            if ((t.addClass(s.bulletActiveClass), s.dynamicBullets)) {
              const t = i.eq(n),
                r = i.eq(l);
              for (let e = n; e <= l; e += 1)
                i.eq(e).addClass(`${s.bulletActiveClass}-main`);
              if (e.params.loop)
                if (a >= i.length) {
                  for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                    i.eq(i.length - e).addClass(`${s.bulletActiveClass}-main`);
                  i.eq(i.length - s.dynamicMainBullets - 1).addClass(
                    `${s.bulletActiveClass}-prev`
                  );
                } else o(t, "prev"), o(r, "next");
              else o(t, "prev"), o(r, "next");
            }
          }
          if (s.dynamicBullets) {
            const n = Math.min(i.length, s.dynamicMainBullets + 4),
              r = (a * n - a) / 2 - p * a,
              l = t ? "right" : "left";
            i.css(e.isHorizontal() ? l : "top", `${r}px`);
          }
        }
        if (
          ("fraction" === s.type &&
            (d.find(de(s.currentClass)).text(s.formatFractionCurrent(c + 1)),
            d.find(de(s.totalClass)).text(s.formatFractionTotal(p))),
          "progressbar" === s.type)
        ) {
          let t;
          t = s.progressbarOpposite
            ? e.isHorizontal()
              ? "vertical"
              : "horizontal"
            : e.isHorizontal()
            ? "horizontal"
            : "vertical";
          const i = (c + 1) / p;
          let n = 1,
            a = 1;
          "horizontal" === t ? (n = i) : (a = i),
            d
              .find(de(s.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${a})`)
              .transition(e.params.speed);
        }
        "custom" === s.type && s.renderCustom
          ? (d.html(s.renderCustom(e, c + 1, p)), i("paginationRender", d[0]))
          : i("paginationUpdate", d[0]),
          e.params.watchOverflow &&
            e.enabled &&
            d[e.isLocked ? "addClass" : "removeClass"](s.lockClass);
      }
      function c() {
        const t = e.params.pagination;
        if (l()) return;
        const s =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          n = e.pagination.$el;
        let a = "";
        if ("bullets" === t.type) {
          let i = e.params.loop
            ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          e.params.freeMode &&
            e.params.freeMode.enabled &&
            !e.params.loop &&
            i > s &&
            (i = s);
          for (let s = 0; s < i; s += 1)
            t.renderBullet
              ? (a += t.renderBullet.call(e, s, t.bulletClass))
              : (a += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
          n.html(a), (e.pagination.bullets = n.find(de(t.bulletClass)));
        }
        "fraction" === t.type &&
          ((a = t.renderFraction
            ? t.renderFraction.call(e, t.currentClass, t.totalClass)
            : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
          n.html(a)),
          "progressbar" === t.type &&
            ((a = t.renderProgressbar
              ? t.renderProgressbar.call(e, t.progressbarFillClass)
              : `<span class="${t.progressbarFillClass}"></span>`),
            n.html(a)),
          "custom" !== t.type && i("paginationRender", e.pagination.$el[0]);
      }
      function p() {
        e.params.pagination = le(
          e,
          e.originalParams.pagination,
          e.params.pagination,
          { el: "swiper-pagination" }
        );
        const t = e.params.pagination;
        if (!t.el) return;
        let s = x(t.el);
        0 !== s.length &&
          (e.params.uniqueNavElements &&
            "string" == typeof t.el &&
            s.length > 1 &&
            ((s = e.$el.find(t.el)),
            s.length > 1 &&
              (s = s.filter((t) => x(t).parents(".swiper")[0] === e.el))),
          "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
          s.addClass(t.modifierClass + t.type),
          s.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
          "bullets" === t.type &&
            t.dynamicBullets &&
            (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
            (r = 0),
            t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
          "progressbar" === t.type &&
            t.progressbarOpposite &&
            s.addClass(t.progressbarOppositeClass),
          t.clickable &&
            s.on("click", de(t.bulletClass), function (t) {
              t.preventDefault();
              let s = x(this).index() * e.params.slidesPerGroup;
              e.params.loop && (s += e.loopedSlides), e.slideTo(s);
            }),
          Object.assign(e.pagination, { $el: s, el: s[0] }),
          e.enabled || s.addClass(t.lockClass));
      }
      function u() {
        const t = e.params.pagination;
        if (l()) return;
        const s = e.pagination.$el;
        s.removeClass(t.hiddenClass),
          s.removeClass(t.modifierClass + t.type),
          s.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
          e.pagination.bullets &&
            e.pagination.bullets.removeClass &&
            e.pagination.bullets.removeClass(t.bulletActiveClass),
          t.clickable && s.off("click", de(t.bulletClass));
      }
      s("init", () => {
        !1 === e.params.pagination.enabled ? h() : (p(), c(), d());
      }),
        s("activeIndexChange", () => {
          (e.params.loop || void 0 === e.snapIndex) && d();
        }),
        s("snapIndexChange", () => {
          e.params.loop || d();
        }),
        s("slidesLengthChange", () => {
          e.params.loop && (c(), d());
        }),
        s("snapGridLengthChange", () => {
          e.params.loop || (c(), d());
        }),
        s("destroy", () => {
          u();
        }),
        s("enable disable", () => {
          const { $el: t } = e.pagination;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.pagination.lockClass
            );
        }),
        s("lock unlock", () => {
          d();
        }),
        s("click", (t, s) => {
          const n = s.target,
            { $el: a } = e.pagination;
          if (
            e.params.pagination.el &&
            e.params.pagination.hideOnClick &&
            a &&
            a.length > 0 &&
            !x(n).hasClass(e.params.pagination.bulletClass)
          ) {
            if (
              e.navigation &&
              ((e.navigation.nextEl && n === e.navigation.nextEl) ||
                (e.navigation.prevEl && n === e.navigation.prevEl))
            )
              return;
            const t = a.hasClass(e.params.pagination.hiddenClass);
            i(!0 === t ? "paginationShow" : "paginationHide"),
              a.toggleClass(e.params.pagination.hiddenClass);
          }
        });
      const h = () => {
        e.$el.addClass(e.params.pagination.paginationDisabledClass),
          e.pagination.$el &&
            e.pagination.$el.addClass(
              e.params.pagination.paginationDisabledClass
            ),
          u();
      };
      Object.assign(e.pagination, {
        enable: () => {
          e.$el.removeClass(e.params.pagination.paginationDisabledClass),
            e.pagination.$el &&
              e.pagination.$el.removeClass(
                e.params.pagination.paginationDisabledClass
              ),
            p(),
            c(),
            d();
        },
        disable: h,
        render: c,
        update: d,
        init: p,
        destroy: u,
      });
    }
    function pe({ swiper: e, extendParams: t, on: s }) {
      t({
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          slideLabelMessage: "{{index}} / {{slidesLength}}",
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: "group",
          id: null,
        },
      }),
        (e.a11y = { clicked: !1 });
      let i = null;
      function n(e) {
        const t = i;
        0 !== t.length && (t.html(""), t.html(e));
      }
      function a(e) {
        e.attr("tabIndex", "0");
      }
      function r(e) {
        e.attr("tabIndex", "-1");
      }
      function l(e, t) {
        e.attr("role", t);
      }
      function o(e, t) {
        e.attr("aria-roledescription", t);
      }
      function d(e, t) {
        e.attr("aria-label", t);
      }
      function c(e) {
        e.attr("aria-disabled", !0);
      }
      function p(e) {
        e.attr("aria-disabled", !1);
      }
      function u(t) {
        if (13 !== t.keyCode && 32 !== t.keyCode) return;
        const s = e.params.a11y,
          i = x(t.target);
        e.navigation &&
          e.navigation.$nextEl &&
          i.is(e.navigation.$nextEl) &&
          ((e.isEnd && !e.params.loop) || e.slideNext(),
          e.isEnd ? n(s.lastSlideMessage) : n(s.nextSlideMessage)),
          e.navigation &&
            e.navigation.$prevEl &&
            i.is(e.navigation.$prevEl) &&
            ((e.isBeginning && !e.params.loop) || e.slidePrev(),
            e.isBeginning ? n(s.firstSlideMessage) : n(s.prevSlideMessage)),
          e.pagination &&
            i.is(de(e.params.pagination.bulletClass)) &&
            i[0].click();
      }
      function h() {
        return (
          e.pagination && e.pagination.bullets && e.pagination.bullets.length
        );
      }
      function f() {
        return h() && e.params.pagination.clickable;
      }
      const m = (e, t, s) => {
          a(e),
            "BUTTON" !== e[0].tagName && (l(e, "button"), e.on("keydown", u)),
            d(e, s),
            (function (e, t) {
              e.attr("aria-controls", t);
            })(e, t);
        },
        g = () => {
          e.a11y.clicked = !0;
        },
        v = () => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              e.destroyed || (e.a11y.clicked = !1);
            });
          });
        },
        b = (t) => {
          if (e.a11y.clicked) return;
          const s = t.target.closest(`.${e.params.slideClass}`);
          if (!s || !e.slides.includes(s)) return;
          const i = e.slides.indexOf(s) === e.activeIndex,
            n =
              e.params.watchSlidesProgress &&
              e.visibleSlides &&
              e.visibleSlides.includes(s);
          i ||
            n ||
            (t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents) ||
            (e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0),
            e.slideTo(e.slides.indexOf(s), 0));
        },
        w = () => {
          const t = e.params.a11y;
          t.itemRoleDescriptionMessage &&
            o(x(e.slides), t.itemRoleDescriptionMessage),
            t.slideRole && l(x(e.slides), t.slideRole);
          const s = e.params.loop
            ? e.slides.filter(
                (t) => !t.classList.contains(e.params.slideDuplicateClass)
              ).length
            : e.slides.length;
          t.slideLabelMessage &&
            e.slides.each((i, n) => {
              const a = x(i),
                r = e.params.loop
                  ? parseInt(a.attr("data-swiper-slide-index"), 10)
                  : n;
              d(
                a,
                t.slideLabelMessage
                  .replace(/\{\{index\}\}/, r + 1)
                  .replace(/\{\{slidesLength\}\}/, s)
              );
            });
        },
        y = () => {
          const t = e.params.a11y;
          e.$el.append(i);
          const s = e.$el;
          t.containerRoleDescriptionMessage &&
            o(s, t.containerRoleDescriptionMessage),
            t.containerMessage && d(s, t.containerMessage);
          const n = e.$wrapperEl,
            a =
              t.id ||
              n.attr("id") ||
              `swiper-wrapper-${(function (e = 16) {
                return "x"
                  .repeat(e)
                  .replace(/x/g, () =>
                    Math.round(16 * Math.random()).toString(16)
                  );
              })(16)}`,
            r =
              e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
          var l;
          let c, p;
          (l = a),
            n.attr("id", l),
            (function (e, t) {
              e.attr("aria-live", t);
            })(n, r),
            w(),
            e.navigation && e.navigation.$nextEl && (c = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (p = e.navigation.$prevEl),
            c && c.length && m(c, a, t.nextSlideMessage),
            p && p.length && m(p, a, t.prevSlideMessage),
            f() &&
              e.pagination.$el.on(
                "keydown",
                de(e.params.pagination.bulletClass),
                u
              ),
            e.$el.on("focus", b, !0),
            e.$el.on("pointerdown", g, !0),
            e.$el.on("pointerup", v, !0);
        };
      s("beforeInit", () => {
        i = x(
          `<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
        );
      }),
        s("afterInit", () => {
          e.params.a11y.enabled && y();
        }),
        s(
          "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
          () => {
            e.params.a11y.enabled && w();
          }
        ),
        s("fromEdge toEdge afterInit lock unlock", () => {
          e.params.a11y.enabled &&
            (function () {
              if (e.params.loop || e.params.rewind || !e.navigation) return;
              const { $nextEl: t, $prevEl: s } = e.navigation;
              s &&
                s.length > 0 &&
                (e.isBeginning ? (c(s), r(s)) : (p(s), a(s))),
                t && t.length > 0 && (e.isEnd ? (c(t), r(t)) : (p(t), a(t)));
            })();
        }),
        s("paginationUpdate", () => {
          e.params.a11y.enabled &&
            (function () {
              const t = e.params.a11y;
              h() &&
                e.pagination.bullets.each((s) => {
                  const i = x(s);
                  e.params.pagination.clickable &&
                    (a(i),
                    e.params.pagination.renderBullet ||
                      (l(i, "button"),
                      d(
                        i,
                        t.paginationBulletMessage.replace(
                          /\{\{index\}\}/,
                          i.index() + 1
                        )
                      ))),
                    i.is(`.${e.params.pagination.bulletActiveClass}`)
                      ? i.attr("aria-current", "true")
                      : i.removeAttr("aria-current");
                });
            })();
        }),
        s("destroy", () => {
          e.params.a11y.enabled &&
            (function () {
              let t, s;
              i && i.length > 0 && i.remove(),
                e.navigation &&
                  e.navigation.$nextEl &&
                  (t = e.navigation.$nextEl),
                e.navigation &&
                  e.navigation.$prevEl &&
                  (s = e.navigation.$prevEl),
                t && t.off("keydown", u),
                s && s.off("keydown", u),
                f() &&
                  e.pagination.$el.off(
                    "keydown",
                    de(e.params.pagination.bulletClass),
                    u
                  ),
                e.$el.off("focus", b, !0),
                e.$el.off("pointerdown", g, !0),
                e.$el.off("pointerup", v, !0);
            })();
        });
    }
    function ue({ swiper: e, extendParams: t, on: s }) {
      t({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-thumbs",
        },
      });
      let i = !1,
        n = !1;
      function a() {
        const t = e.thumbs.swiper;
        if (!t || t.destroyed) return;
        const s = t.clickedIndex,
          i = t.clickedSlide;
        if (i && x(i).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
        if (null == s) return;
        let n;
        if (
          ((n = t.params.loop
            ? parseInt(x(t.clickedSlide).attr("data-swiper-slide-index"), 10)
            : s),
          e.params.loop)
        ) {
          let t = e.activeIndex;
          e.slides.eq(t).hasClass(e.params.slideDuplicateClass) &&
            (e.loopFix(),
            (e._clientLeft = e.$wrapperEl[0].clientLeft),
            (t = e.activeIndex));
          const s = e.slides
              .eq(t)
              .prevAll(`[data-swiper-slide-index="${n}"]`)
              .eq(0)
              .index(),
            i = e.slides
              .eq(t)
              .nextAll(`[data-swiper-slide-index="${n}"]`)
              .eq(0)
              .index();
          n = void 0 === s ? i : void 0 === i ? s : i - t < t - s ? i : s;
        }
        e.slideTo(n);
      }
      function r() {
        const { thumbs: t } = e.params;
        if (i) return !1;
        i = !0;
        const s = e.constructor;
        if (t.swiper instanceof s)
          (e.thumbs.swiper = t.swiper),
            Object.assign(e.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            Object.assign(e.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            });
        else if (k(t.swiper)) {
          const i = Object.assign({}, t.swiper);
          Object.assign(i, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
            (e.thumbs.swiper = new s(i)),
            (n = !0);
        }
        return (
          e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
          e.thumbs.swiper.on("tap", a),
          !0
        );
      }
      function l(t) {
        const s = e.thumbs.swiper;
        if (!s || s.destroyed) return;
        const i =
          "auto" === s.params.slidesPerView
            ? s.slidesPerViewDynamic()
            : s.params.slidesPerView;
        let n = 1;
        const a = e.params.thumbs.slideThumbActiveClass;
        if (
          (e.params.slidesPerView > 1 &&
            !e.params.centeredSlides &&
            (n = e.params.slidesPerView),
          e.params.thumbs.multipleActiveThumbs || (n = 1),
          (n = Math.floor(n)),
          s.slides.removeClass(a),
          s.params.loop || (s.params.virtual && s.params.virtual.enabled))
        )
          for (let t = 0; t < n; t += 1)
            s.$wrapperEl
              .children(`[data-swiper-slide-index="${e.realIndex + t}"]`)
              .addClass(a);
        else
          for (let t = 0; t < n; t += 1)
            s.slides.eq(e.realIndex + t).addClass(a);
        const r = e.params.thumbs.autoScrollOffset,
          l = r && !s.params.loop;
        if (e.realIndex !== s.realIndex || l) {
          let n,
            a,
            o = s.activeIndex;
          if (s.params.loop) {
            s.slides.eq(o).hasClass(s.params.slideDuplicateClass) &&
              (s.loopFix(),
              (s._clientLeft = s.$wrapperEl[0].clientLeft),
              (o = s.activeIndex));
            const t = s.slides
                .eq(o)
                .prevAll(`[data-swiper-slide-index="${e.realIndex}"]`)
                .eq(0)
                .index(),
              i = s.slides
                .eq(o)
                .nextAll(`[data-swiper-slide-index="${e.realIndex}"]`)
                .eq(0)
                .index();
            (n =
              void 0 === t
                ? i
                : void 0 === i
                ? t
                : i - o == o - t
                ? s.params.slidesPerGroup > 1
                  ? i
                  : o
                : i - o < o - t
                ? i
                : t),
              (a = e.activeIndex > e.previousIndex ? "next" : "prev");
          } else (n = e.realIndex), (a = n > e.previousIndex ? "next" : "prev");
          l && (n += "next" === a ? r : -1 * r),
            s.visibleSlidesIndexes &&
              s.visibleSlidesIndexes.indexOf(n) < 0 &&
              (s.params.centeredSlides
                ? (n =
                    n > o
                      ? n - Math.floor(i / 2) + 1
                      : n + Math.floor(i / 2) - 1)
                : n > o && s.params.slidesPerGroup,
              s.slideTo(n, t ? 0 : void 0));
        }
      }
      (e.thumbs = { swiper: null }),
        s("beforeInit", () => {
          const { thumbs: t } = e.params;
          t && t.swiper && (r(), l(!0));
        }),
        s("slideChange update resize observerUpdate", () => {
          l();
        }),
        s("setTransition", (t, s) => {
          const i = e.thumbs.swiper;
          i && !i.destroyed && i.setTransition(s);
        }),
        s("beforeDestroy", () => {
          const t = e.thumbs.swiper;
          t && !t.destroyed && n && t.destroy();
        }),
        Object.assign(e.thumbs, { init: r, update: l });
    }
    function he() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    function fe() {
      if ((he(), document.querySelector(".swiper"))) {
        new re(".js-preview-thumbs", {
          modules: [oe, ce, ue, pe],
          observer: !0,
          observeParents: !0,
          spaceBetween: 32,
          speed: 800,
          navigation: {
            nextEl: ".thumbs-preview__arrow-next",
            prevEl: ".thumbs-preview__arrow-prev",
          },
          breakpoints: {
            320: { slidesPerView: 4, spaceBetween: 20, autoHeight: !0 },
            768: { slidesPerView: 4, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 20 },
            1268: { slidesPerView: 3, spaceBetween: 32 },
          },
          on: {},
        }),
          new re(".js-preview-slider", {
            modules: [oe, ce, ue, pe],
            effect: "fade",
            observer: !0,
            observeParents: !0,
            slidesPerView: 1,
            spaceBetween: 20,
            speed: 800,
            thumbs: {
              swiper: {
                el: ".js-preview-thumbs",
                spaceBetween: 32,
                breakpoints: {
                  320: { slidesPerView: 4, spaceBetween: 20, autoHeight: !0 },
                  768: { slidesPerView: 4, spaceBetween: 20 },
                  992: { slidesPerView: 3, spaceBetween: 20 },
                  1268: { slidesPerView: 3, spaceBetween: 32 },
                },
              },
            },
            on: {},
          }),
          new re(".js-texture-slider", {
            modules: [oe, ce, pe],
            observer: !0,
            observeParents: !0,
            slidesPerView: "auto",
            spaceBetween: 40,
            speed: 800,
            loop: !0,
            pagination: {
              el: ".texture-product__progressbar",
              type: "progressbar",
            },
            navigation: {
              nextEl: ".texture-product__arrow-next",
              prevEl: ".texture-product__arrow-prev",
            },
            breakpoints: {
              320: { slidesPerView: "auto", spaceBetween: 18, autoHeight: !0 },
              480: { spaceBetween: 18 },
              768: { spaceBetween: 30 },
              992: { spaceBetween: 40 },
              1268: { spaceBetween: 40 },
            },
            on: {},
          });
      }
    }
    window.addEventListener("load", function (e) {
      fe();
    }),
      (window.initSliders = fe());
    new (s(732))({
      elements_selector: "[data-src],[data-srcset]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    e.watcher = new (class {
      constructor(e) {
        (this.config = Object.assign({ logging: !0 }, e)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(e) {
        if (e.length) {
          this.scrollWatcherLogging(
            `Проснулся, слежу за объектами (${e.length})...`
          ),
            l(
              Array.from(e).map(function (e) {
                return `${
                  e.dataset.watchRoot ? e.dataset.watchRoot : null
                }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
              })
            ).forEach((t) => {
              let s = t.split("|"),
                i = { root: s[0], margin: s[1], threshold: s[2] },
                n = Array.from(e).filter(function (e) {
                  let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                    s = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                    n = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                  if (
                    String(t) === i.root &&
                    String(s) === i.margin &&
                    String(n) === i.threshold
                  )
                    return e;
                }),
                a = this.getScrollWatcherConfig(i);
              this.scrollWatcherInit(n, a);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
      }
      getScrollWatcherConfig(e) {
        let t = {};
        if (
          (document.querySelector(e.root)
            ? (t.root = document.querySelector(e.root))
            : "null" !== e.root &&
              this.scrollWatcherLogging(
                `Эмм... родительского объекта ${e.root} нет на странице`
              ),
          (t.rootMargin = e.margin),
          !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
        ) {
          if ("prx" === e.threshold) {
            e.threshold = [];
            for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
          } else e.threshold = e.threshold.split(",");
          return (t.threshold = e.threshold), t;
        }
        this.scrollWatcherLogging(
          "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
        );
      }
      scrollWatcherCreate(e) {
        this.observer = new IntersectionObserver((e, t) => {
          e.forEach((e) => {
            this.scrollWatcherCallback(e, t);
          });
        }, e);
      }
      scrollWatcherInit(e, t) {
        this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
      }
      scrollWatcherIntersecting(e, t) {
        e.isIntersecting
          ? (!t.classList.contains("_watcher-view") &&
              t.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `Я вижу ${t.classList}, добавил класс _watcher-view`
            ))
          : (t.classList.contains("_watcher-view") &&
              t.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `Я не вижу ${t.classList}, убрал класс _watcher-view`
            ));
      }
      scrollWatcherOff(e, t) {
        t.unobserve(e),
          this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
      }
      scrollWatcherLogging(e) {
        this.config.logging &&
          (function (e) {
            setTimeout(() => {
              window.FLS && console.log(e);
            }, 0);
          })(`[Наблюдатель]: ${e}`);
      }
      scrollWatcherCallback(e, t) {
        const s = e.target;
        this.scrollWatcherIntersecting(e, s),
          s.hasAttribute("data-watch-once") &&
            e.isIntersecting &&
            this.scrollWatcherOff(s, t),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: e } })
          );
      }
    })({});
    let me = !1;
    function ge(e) {
      this.type = e;
    }
    setTimeout(() => {
      if (me) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0),
      (ge.prototype.init = function () {
        const e = this;
        (this.оbjects = []),
          (this.daClassname = "_dynamic_adapt_"),
          (this.nodes = document.querySelectorAll("[data-da]"));
        for (let e = 0; e < this.nodes.length; e++) {
          const t = this.nodes[e],
            s = t.dataset.da.trim().split(","),
            i = {};
          (i.element = t),
            (i.parent = t.parentNode),
            (i.destination = document.querySelector(s[0].trim())),
            (i.breakpoint = s[1] ? s[1].trim() : "767"),
            (i.place = s[2] ? s[2].trim() : "last"),
            (i.index = this.indexInParent(i.parent, i.element)),
            this.оbjects.push(i);
        }
        this.arraySort(this.оbjects),
          (this.mediaQueries = Array.prototype.map.call(
            this.оbjects,
            function (e) {
              return (
                "(" +
                this.type +
                "-width: " +
                e.breakpoint +
                "px)," +
                e.breakpoint
              );
            },
            this
          )),
          (this.mediaQueries = Array.prototype.filter.call(
            this.mediaQueries,
            function (e, t, s) {
              return Array.prototype.indexOf.call(s, e) === t;
            }
          ));
        for (let t = 0; t < this.mediaQueries.length; t++) {
          const s = this.mediaQueries[t],
            i = String.prototype.split.call(s, ","),
            n = window.matchMedia(i[0]),
            a = i[1],
            r = Array.prototype.filter.call(this.оbjects, function (e) {
              return e.breakpoint === a;
            });
          n.addListener(function () {
            e.mediaHandler(n, r);
          }),
            this.mediaHandler(n, r);
        }
      }),
      (ge.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const s = t[e];
            (s.index = this.indexInParent(s.parent, s.element)),
              this.moveTo(s.place, s.element, s.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const s = t[e];
            s.element.classList.contains(this.daClassname) &&
              this.moveBack(s.parent, s.element, s.index);
          }
      }),
      (ge.prototype.moveTo = function (e, t, s) {
        t.classList.add(this.daClassname),
          "last" === e || e >= s.children.length
            ? s.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? s.children[e].insertAdjacentElement("beforebegin", t)
            : s.insertAdjacentElement("afterbegin", t);
      }),
      (ge.prototype.moveBack = function (e, t, s) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[s]
            ? e.children[s].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (ge.prototype.indexInParent = function (e, t) {
        const s = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(s, t);
      }),
      (ge.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    new ge("max").init(),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            n &&
              (((e = 500) => {
                document.documentElement.classList.contains("lock")
                  ? a(e)
                  : r(e);
              })(),
              document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        const e = document.querySelectorAll("[data-tabs]");
        let s = [];
        if (e.length > 0) {
          const t = (function () {
            if (location.hash) return location.hash.replace("#", "");
          })();
          t && t.startsWith("tab-") && (s = t.replace("tab-", "").split("-")),
            e.forEach((e, t) => {
              e.classList.add("_tab-init"),
                e.setAttribute("data-tabs-index", t),
                e.addEventListener("click", r),
                (function (e) {
                  let t = e.querySelectorAll("[data-tabs-titles]>*"),
                    i = e.querySelectorAll("[data-tabs-body]>*");
                  const n = e.dataset.tabsIndex,
                    a = s[0] == n;
                  if (a) {
                    const t = e.querySelector(
                      "[data-tabs-titles]>._tab-active"
                    );
                    t && t.classList.remove("_tab-active");
                  }
                  i.length &&
                    ((i = Array.from(i).filter(
                      (t) => t.closest("[data-tabs]") === e
                    )),
                    (t = Array.from(t).filter(
                      (t) => t.closest("[data-tabs]") === e
                    )),
                    i.forEach((e, i) => {
                      t[i].setAttribute("data-tabs-title", ""),
                        e.setAttribute("data-tabs-item", ""),
                        a && i == s[1] && t[i].classList.add("_tab-active"),
                        (e.hidden = !t[i].classList.contains("_tab-active"));
                    }));
                })(e);
            });
          let i = o(e, "tabs");
          i &&
            i.length &&
            i.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                n(e.itemsArray, e.matchMedia);
              }),
                n(e.itemsArray, e.matchMedia);
            });
        }
        function n(e, t) {
          e.forEach((e) => {
            let s = (e = e.item).querySelector("[data-tabs-titles]"),
              i = e.querySelectorAll("[data-tabs-title]"),
              n = e.querySelector("[data-tabs-body]"),
              a = e.querySelectorAll("[data-tabs-item]");
            (i = Array.from(i).filter((t) => t.closest("[data-tabs]") === e)),
              (a = Array.from(a).filter((t) => t.closest("[data-tabs]") === e)),
              a.forEach((a, r) => {
                t.matches
                  ? (n.append(i[r]),
                    n.append(a),
                    e.classList.add("_tab-spoller"))
                  : (s.append(i[r]), e.classList.remove("_tab-spoller"));
              });
          });
        }
        function a(e) {
          let s = e.querySelectorAll("[data-tabs-title]"),
            n = e.querySelectorAll("[data-tabs-item]");
          const a = e.dataset.tabsIndex;
          const r = (function (e) {
            if (e.hasAttribute("data-tabs-animate"))
              return e.dataset.tabsAnimate > 0
                ? Number(e.dataset.tabsAnimate)
                : 500;
          })(e);
          if (n.length > 0) {
            const l = e.hasAttribute("data-tabs-hash");
            (n = Array.from(n).filter((t) => t.closest("[data-tabs]") === e)),
              (s = Array.from(s).filter((t) => t.closest("[data-tabs]") === e)),
              n.forEach((e, n) => {
                var o;
                s[n].classList.contains("_tab-active")
                  ? (r ? i(e, r) : (e.hidden = !1),
                    l &&
                      !e.closest(".popup") &&
                      ((o = (o = `tab-${a}-${n}`)
                        ? `#${o}`
                        : window.location.href.split("#")[0]),
                      history.pushState("", "", o)))
                  : r
                  ? t(e, r)
                  : (e.hidden = !0);
              });
          }
        }
        function r(e) {
          const t = e.target;
          if (t.closest("[data-tabs-title]")) {
            const s = t.closest("[data-tabs-title]"),
              i = s.closest("[data-tabs]");
            if (
              !s.classList.contains("_tab-active") &&
              !i.querySelector("._slide")
            ) {
              let e = i.querySelectorAll("[data-tabs-title]._tab-active");
              e.length &&
                (e = Array.from(e).filter(
                  (e) => e.closest("[data-tabs]") === i
                )),
                e.length && e[0].classList.remove("_tab-active"),
                s.classList.add("_tab-active"),
                a(i);
            }
            e.preventDefault();
          }
        }
      })(),
      document.addEventListener("click", function (e) {
        let t = e.target;
        if (t.closest(".quantity__button")) {
          let e = parseInt(t.closest(".quantity").querySelector("input").value);
          t.classList.contains("quantity__button_plus")
            ? e++
            : (--e, e < 1 && (e = 1)),
            (t.closest(".quantity").querySelector("input").value = e);
        }
      });
  })();
})();
