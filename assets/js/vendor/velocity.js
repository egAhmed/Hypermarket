/*! VelocityJS.org (1.4.1). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
! function(a) {
    "use strict";

    function b(a) {
        var b = a.length,
            d = c.type(a);
        return "function" !== d && !c.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a))
    }
    if (!a.jQuery) {
        var c = function(a, b) {
            return new c.fn.init(a, b)
        };
        c.isWindow = function(a) {
            return a && a === a.window
        }, c.type = function(a) {
            return a ? "object" == typeof a || "function" == typeof a ? e[g.call(a)] || "object" : typeof a : a + ""
        }, c.isArray = Array.isArray || function(a) {
            return "array" === c.type(a)
        }, c.isPlainObject = function(a) {
            var b;
            if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1;
            try {
                if (a.constructor && !f.call(a, "constructor") && !f.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (d) {
                return !1
            }
            for (b in a);
            return void 0 === b || f.call(a, b)
        }, c.each = function(a, c, d) {
            var e, f = 0,
                g = a.length,
                h = b(a);
            if (d) {
                if (h)
                    for (; f < g && (e = c.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (a.hasOwnProperty(f) && (e = c.apply(a[f], d), e === !1)) break
            } else if (h)
                for (; f < g && (e = c.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (a.hasOwnProperty(f) && (e = c.call(a[f], f, a[f]), e === !1)) break; return a
        }, c.data = function(a, b, e) {
            if (void 0 === e) {
                var f = a[c.expando],
                    g = f && d[f];
                if (void 0 === b) return g;
                if (g && b in g) return g[b]
            } else if (void 0 !== b) {
                var h = a[c.expando] || (a[c.expando] = ++c.uuid);
                return d[h] = d[h] || {}, d[h][b] = e, e
            }
        }, c.removeData = function(a, b) {
            var e = a[c.expando],
                f = e && d[e];
            f && (b ? c.each(b, function(a, b) {
                delete f[b]
            }) : delete d[e])
        }, c.extend = function() {
            var a, b, d, e, f, g, h = arguments[0] || {},
                i = 1,
                j = arguments.length,
                k = !1;
            for ("boolean" == typeof h && (k = h, h = arguments[i] || {}, i++), "object" != typeof h && "function" !== c.type(h) && (h = {}), i === j && (h = this, i--); i < j; i++)
                if (f = arguments[i])
                    for (e in f) f.hasOwnProperty(e) && (a = h[e], d = f[e], h !== d && (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, g = a && c.isArray(a) ? a : []) : g = a && c.isPlainObject(a) ? a : {}, h[e] = c.extend(k, g, d)) : void 0 !== d && (h[e] = d)));
            return h
        }, c.queue = function(a, d, e) {
            function f(a, c) {
                var d = c || [];
                return a && (b(Object(a)) ? ! function(a, b) {
                    for (var c = +b.length, d = 0, e = a.length; d < c;) a[e++] = b[d++];
                    if (c !== c)
                        for (; void 0 !== b[d];) a[e++] = b[d++];
                    return a.length = e, a
                }(d, "string" == typeof a ? [a] : a) : [].push.call(d, a)), d
            }
            if (a) {
                d = (d || "fx") + "queue";
                var g = c.data(a, d);
                return e ? (!g || c.isArray(e) ? g = c.data(a, d, f(e)) : g.push(e), g) : g || []
            }
        }, c.dequeue = function(a, b) {
            c.each(a.nodeType ? [a] : a, function(a, d) {
                b = b || "fx";
                var e = c.queue(d, b),
                    f = e.shift();
                "inprogress" === f && (f = e.shift()), f && ("fx" === b && e.unshift("inprogress"), f.call(d, function() {
                    c.dequeue(d, b)
                }))
            })
        }, c.fn = c.prototype = {
            init: function(a) {
                if (a.nodeType) return this[0] = a, this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var b = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: b.top + (a.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: b.left + (a.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function a(a) {
                    for (var b = a.offsetParent; b && "html" !== b.nodeName.toLowerCase() && b.style && "static" === b.style.position;) b = b.offsetParent;
                    return b || document
                }
                var b = this[0],
                    d = a(b),
                    e = this.offset(),
                    f = /^(?:body|html)$/i.test(d.nodeName) ? {
                        top: 0,
                        left: 0
                    } : c(d).offset();
                return e.top -= parseFloat(b.style.marginTop) || 0, e.left -= parseFloat(b.style.marginLeft) || 0, d.style && (f.top += parseFloat(d.style.borderTopWidth) || 0, f.left += parseFloat(d.style.borderLeftWidth) || 0), {
                    top: e.top - f.top,
                    left: e.left - f.left
                }
            }
        };
        var d = {};
        c.expando = "velocity" + (new Date).getTime(), c.uuid = 0;
        for (var e = {}, f = e.hasOwnProperty, g = e.toString, h = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < h.length; i++) e["[object " + h[i] + "]"] = h[i].toLowerCase();
        c.fn.init.prototype = c.fn, a.Velocity = {
            Utilities: c
        }
    }
}(window),
function(a) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : a()
}(function() {
    "use strict";
    return function(a, b, c, d) {
        function e(a) {
            for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
                var e = a[b];
                e && d.push(e)
            }
            return d
        }

        function f(a) {
            return s.isWrapped(a) ? a = [].slice.call(a) : s.isNode(a) && (a = [a]), a
        }

        function g(a) {
            var b = o.data(a, "velocity");
            return null === b ? d : b
        }

        function h(a, b) {
            var c = g(a);
            c && c.delayTimer && !c.delayPaused && (c.delayRemaining = c.delay - b + c.delayBegin, c.delayPaused = !0, clearTimeout(c.delayTimer.setTimeout))
        }

        function i(a, b) {
            var c = g(a);
            c && c.delayTimer && c.delayPaused && (c.delayPaused = !1, c.delayTimer.setTimeout = setTimeout(c.delayTimer.next, c.delayRemaining))
        }

        function j(a) {
            return function(b) {
                return Math.round(b * a) * (1 / a)
            }
        }

        function k(a, c, d, e) {
            function f(a, b) {
                return 1 - 3 * b + 3 * a
            }

            function g(a, b) {
                return 3 * b - 6 * a
            }

            function h(a) {
                return 3 * a
            }

            function i(a, b, c) {
                return ((f(b, c) * a + g(b, c)) * a + h(b)) * a
            }

            function j(a, b, c) {
                return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b)
            }

            function k(b, c) {
                for (var e = 0; e < p; ++e) {
                    var f = j(c, a, d);
                    if (0 === f) return c;
                    var g = i(c, a, d) - b;
                    c -= g / f
                }
                return c
            }

            function l() {
                for (var b = 0; b < t; ++b) x[b] = i(b * u, a, d)
            }

            function m(b, c, e) {
                var f, g, h = 0;
                do g = c + (e - c) / 2, f = i(g, a, d) - b, f > 0 ? e = g : c = g; while (Math.abs(f) > r && ++h < s);
                return g
            }

            function n(b) {
                for (var c = 0, e = 1, f = t - 1; e !== f && x[e] <= b; ++e) c += u;
                --e;
                var g = (b - x[e]) / (x[e + 1] - x[e]),
                    h = c + g * u,
                    i = j(h, a, d);
                return i >= q ? k(b, h) : 0 === i ? h : m(b, c, c + u)
            }

            function o() {
                y = !0, a === c && d === e || l()
            }
            var p = 4,
                q = .001,
                r = 1e-7,
                s = 10,
                t = 11,
                u = 1 / (t - 1),
                v = "Float32Array" in b;
            if (4 !== arguments.length) return !1;
            for (var w = 0; w < 4; ++w)
                if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
            a = Math.min(a, 1), d = Math.min(d, 1), a = Math.max(a, 0), d = Math.max(d, 0);
            var x = v ? new Float32Array(t) : new Array(t),
                y = !1,
                z = function(b) {
                    return y || o(), a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e)
                };
            z.getControlPoints = function() {
                return [{
                    x: a,
                    y: c
                }, {
                    x: d,
                    y: e
                }]
            };
            var A = "generateBezier(" + [a, c, d, e] + ")";
            return z.toString = function() {
                return A
            }, z
        }

        function l(a, b) {
            var c = a;
            return s.isString(a) ? w.Easings[a] || (c = !1) : c = s.isArray(a) && 1 === a.length ? j.apply(null, a) : s.isArray(a) && 2 === a.length ? x.apply(null, a.concat([b])) : !(!s.isArray(a) || 4 !== a.length) && k.apply(null, a), c === !1 && (c = w.Easings[w.defaults.easing] ? w.defaults.easing : v), c
        }

        function m(a) {
            if (a) {
                var b = w.timestamp && a !== !0 ? a : r.now(),
                    c = w.State.calls.length;
                c > 1e4 && (w.State.calls = e(w.State.calls), c = w.State.calls.length);
                for (var f = 0; f < c; f++)
                    if (w.State.calls[f]) {
                        var h = w.State.calls[f],
                            i = h[0],
                            j = h[2],
                            k = h[3],
                            l = !!k,
                            q = null,
                            t = h[5],
                            u = h[6];
                        if (k || (k = w.State.calls[f][3] = b - 16), t) {
                            if (t.resume !== !0) continue;
                            k = h[3] = Math.round(b - u - 16), h[5] = null
                        }
                        u = h[6] = b - k;
                        for (var v = Math.min(u / j.duration, 1), x = 0, z = i.length; x < z; x++) {
                            var B = i[x],
                                C = B.element;
                            if (g(C)) {
                                var D = !1;
                                if (j.display !== d && null !== j.display && "none" !== j.display) {
                                    if ("flex" === j.display) {
                                        var E = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        o.each(E, function(a, b) {
                                            y.setPropertyValue(C, "display", b)
                                        })
                                    }
                                    y.setPropertyValue(C, "display", j.display)
                                }
                                j.visibility !== d && "hidden" !== j.visibility && y.setPropertyValue(C, "visibility", j.visibility);
                                for (var F in B)
                                    if (B.hasOwnProperty(F) && "element" !== F) {
                                        var G, H = B[F],
                                            I = s.isString(H.easing) ? w.Easings[H.easing] : H.easing;
                                        if (s.isString(H.pattern)) {
                                            var J = 1 === v ? function(a, b, c) {
                                                var d = H.endValue[b];
                                                return c ? Math.round(d) : d
                                            } : function(a, b, c) {
                                                var d = H.startValue[b],
                                                    e = H.endValue[b] - d,
                                                    f = d + e * I(v, j, e);
                                                return c ? Math.round(f) : f
                                            };
                                            G = H.pattern.replace(/{(\d+)(!)?}/g, J)
                                        } else if (1 === v) G = H.endValue;
                                        else {
                                            var K = H.endValue - H.startValue;
                                            G = H.startValue + K * I(v, j, K)
                                        }
                                        if (!l && G === H.currentValue) continue;
                                        if (H.currentValue = G, "tween" === F) q = G;
                                        else {
                                            var L;
                                            if (y.Hooks.registered[F]) {
                                                L = y.Hooks.getRoot(F);
                                                var M = g(C).rootPropertyValueCache[L];
                                                M && (H.rootPropertyValue = M)
                                            }
                                            var N = y.setPropertyValue(C, F, H.currentValue + (p < 9 && 0 === parseFloat(G) ? "" : H.unitType), H.rootPropertyValue, H.scrollData);
                                            y.Hooks.registered[F] && (y.Normalizations.registered[L] ? g(C).rootPropertyValueCache[L] = y.Normalizations.registered[L]("extract", null, N[1]) : g(C).rootPropertyValueCache[L] = N[1]), "transform" === N[0] && (D = !0)
                                        }
                                    }
                                j.mobileHA && g(C).transformCache.translate3d === d && (g(C).transformCache.translate3d = "(0px, 0px, 0px)", D = !0), D && y.flushTransformCache(C)
                            }
                        }
                        j.display !== d && "none" !== j.display && (w.State.calls[f][2].display = !1), j.visibility !== d && "hidden" !== j.visibility && (w.State.calls[f][2].visibility = !1), j.progress && j.progress.call(h[1], h[1], v, Math.max(0, k + j.duration - b), k, q), 1 === v && n(f)
                    }
            }
            w.State.isTicking && A(m)
        }

        function n(a, b) {
            if (!w.State.calls[a]) return !1;
            for (var c = w.State.calls[a][0], e = w.State.calls[a][1], f = w.State.calls[a][2], h = w.State.calls[a][4], i = !1, j = 0, k = c.length; j < k; j++) {
                var l = c[j].element;
                b || f.loop || ("none" === f.display && y.setPropertyValue(l, "display", f.display), "hidden" === f.visibility && y.setPropertyValue(l, "visibility", f.visibility));
                var m = g(l);
                if (f.loop !== !0 && (o.queue(l)[1] === d || !/\.velocityQueueEntryFlag/i.test(o.queue(l)[1])) && m) {
                    m.isAnimating = !1, m.rootPropertyValueCache = {};
                    var n = !1;
                    o.each(y.Lists.transforms3D, function(a, b) {
                        var c = /^scale/.test(b) ? 1 : 0,
                            e = m.transformCache[b];
                        m.transformCache[b] !== d && new RegExp("^\\(" + c + "[^.]").test(e) && (n = !0, delete m.transformCache[b])
                    }), f.mobileHA && (n = !0, delete m.transformCache.translate3d), n && y.flushTransformCache(l), y.Values.removeClass(l, "velocity-animating")
                }
                if (!b && f.complete && !f.loop && j === k - 1) try {
                    f.complete.call(e, e)
                } catch (p) {
                    setTimeout(function() {
                        throw p
                    }, 1)
                }
                h && f.loop !== !0 && h(e), m && f.loop === !0 && !b && (o.each(m.tweensContainer, function(a, b) {
                    if (/^rotate/.test(a) && (parseFloat(b.startValue) - parseFloat(b.endValue)) % 360 === 0) {
                        var c = b.startValue;
                        b.startValue = b.endValue, b.endValue = c
                    }
                    /^backgroundPosition/.test(a) && 100 === parseFloat(b.endValue) && "%" === b.unitType && (b.endValue = 0, b.startValue = 100)
                }), w(l, "reverse", {
                    loop: !0,
                    delay: f.delay
                })), f.queue !== !1 && o.dequeue(l, f.queue)
            }
            w.State.calls[a] = !1;
            for (var q = 0, r = w.State.calls.length; q < r; q++)
                if (w.State.calls[q] !== !1) {
                    i = !0;
                    break
                }
            i === !1 && (w.State.isTicking = !1, delete w.State.calls, w.State.calls = [])
        }
        var o, p = function() {
                if (c.documentMode) return c.documentMode;
                for (var a = 7; a > 4; a--) {
                    var b = c.createElement("div");
                    if (b.innerHTML = "<!--[if IE " + a + "]><span></span><![endif]-->", b.getElementsByTagName("span").length) return b = null, a
                }
                return d
            }(),
            q = function() {
                var a = 0;
                return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function(b) {
                    var c, d = (new Date).getTime();
                    return c = Math.max(0, 16 - (d - a)), a = d + c, setTimeout(function() {
                        b(d + c)
                    }, c)
                }
            }(),
            r = function() {
                var a = b.performance || {};
                if (!a.hasOwnProperty("now")) {
                    var c = a.timing && a.timing.domComplete ? a.timing.domComplete : (new Date).getTime();
                    a.now = function() {
                        return (new Date).getTime() - c
                    }
                }
                return a
            }(),
            s = {
                isNumber: function(a) {
                    return "number" == typeof a
                },
                isString: function(a) {
                    return "string" == typeof a
                },
                isArray: Array.isArray || function(a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                },
                isFunction: function(a) {
                    return "[object Function]" === Object.prototype.toString.call(a)
                },
                isNode: function(a) {
                    return a && a.nodeType
                },
                isWrapped: function(a) {
                    return a && s.isNumber(a.length) && !s.isString(a) && !s.isFunction(a) && !s.isNode(a) && (0 === a.length || s.isNode(a[0]))
                },
                isSVG: function(a) {
                    return b.SVGElement && a instanceof b.SVGElement
                },
                isEmptyObject: function(a) {
                    for (var b in a)
                        if (a.hasOwnProperty(b)) return !1;
                    return !0
                }
            },
            t = !1;
        if (a.fn && a.fn.jquery ? (o = a, t = !0) : o = b.Velocity.Utilities, p <= 8 && !t) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (p <= 7) return void(jQuery.fn.velocity = jQuery.fn.animate);
        var u = 400,
            v = "swing",
            w = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: b.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: c.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: [],
                    delayedElements: {
                        count: 0
                    }
                },
                CSS: {},
                Utilities: o,
                Redirects: {},
                Easings: {},
                Promise: b.Promise,
                defaults: {
                    queue: "",
                    duration: u,
                    easing: v,
                    begin: d,
                    complete: d,
                    progress: d,
                    display: d,
                    visibility: d,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0,
                    promiseRejectEmpty: !0
                },
                init: function(a) {
                    o.data(a, "velocity", {
                        isSVG: s.isSVG(a),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 4,
                    patch: 1
                },
                debug: !1,
                timestamp: !0,
                pauseAll: function(a) {
                    var b = (new Date).getTime();
                    o.each(w.State.calls, function(b, c) {
                        if (c) {
                            if (a !== d && (c[2].queue !== a || c[2].queue === !1)) return !0;
                            c[5] = {
                                resume: !1
                            }
                        }
                    }), o.each(w.State.delayedElements, function(a, c) {
                        c && h(c, b)
                    })
                },
                resumeAll: function(a) {
                    var b = (new Date).getTime();
                    o.each(w.State.calls, function(b, c) {
                        if (c) {
                            if (a !== d && (c[2].queue !== a || c[2].queue === !1)) return !0;
                            c[5] && (c[5].resume = !0)
                        }
                    }), o.each(w.State.delayedElements, function(a, c) {
                        c && i(c, b)
                    })
                }
            };
        b.pageYOffset !== d ? (w.State.scrollAnchor = b, w.State.scrollPropertyLeft = "pageXOffset", w.State.scrollPropertyTop = "pageYOffset") : (w.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body, w.State.scrollPropertyLeft = "scrollLeft", w.State.scrollPropertyTop = "scrollTop");
        var x = function() {
            function a(a) {
                return -a.tension * a.x - a.friction * a.v
            }

            function b(b, c, d) {
                var e = {
                    x: b.x + d.dx * c,
                    v: b.v + d.dv * c,
                    tension: b.tension,
                    friction: b.friction
                };
                return {
                    dx: e.v,
                    dv: a(e)
                }
            }

            function c(c, d) {
                var e = {
                        dx: c.v,
                        dv: a(c)
                    },
                    f = b(c, .5 * d, e),
                    g = b(c, .5 * d, f),
                    h = b(c, d, g),
                    i = 1 / 6 * (e.dx + 2 * (f.dx + g.dx) + h.dx),
                    j = 1 / 6 * (e.dv + 2 * (f.dv + g.dv) + h.dv);
                return c.x = c.x + i * d, c.v = c.v + j * d, c
            }
            return function d(a, b, e) {
                var f, g, h, i = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    },
                    j = [0],
                    k = 0,
                    l = 1e-4,
                    m = .016;
                for (a = parseFloat(a) || 500, b = parseFloat(b) || 20, e = e || null, i.tension = a, i.friction = b, f = null !== e, f ? (k = d(a, b), g = k / e * m) : g = m;;)
                    if (h = c(h || i, g), j.push(1 + h.x), k += 16, !(Math.abs(h.x) > l && Math.abs(h.v) > l)) break;
                return f ? function(a) {
                    return j[a * (j.length - 1) | 0]
                } : k
            }
        }();
        w.Easings = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            },
            spring: function(a) {
                return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a)
            }
        }, o.each([
            ["ease", [.25, .1, .25, 1]],
            ["ease-in", [.42, 0, 1, 1]],
            ["ease-out", [0, 0, .58, 1]],
            ["ease-in-out", [.42, 0, .58, 1]],
            ["easeInSine", [.47, 0, .745, .715]],
            ["easeOutSine", [.39, .575, .565, 1]],
            ["easeInOutSine", [.445, .05, .55, .95]],
            ["easeInQuad", [.55, .085, .68, .53]],
            ["easeOutQuad", [.25, .46, .45, .94]],
            ["easeInOutQuad", [.455, .03, .515, .955]],
            ["easeInCubic", [.55, .055, .675, .19]],
            ["easeOutCubic", [.215, .61, .355, 1]],
            ["easeInOutCubic", [.645, .045, .355, 1]],
            ["easeInQuart", [.895, .03, .685, .22]],
            ["easeOutQuart", [.165, .84, .44, 1]],
            ["easeInOutQuart", [.77, 0, .175, 1]],
            ["easeInQuint", [.755, .05, .855, .06]],
            ["easeOutQuint", [.23, 1, .32, 1]],
            ["easeInOutQuint", [.86, 0, .07, 1]],
            ["easeInExpo", [.95, .05, .795, .035]],
            ["easeOutExpo", [.19, 1, .22, 1]],
            ["easeInOutExpo", [1, 0, 0, 1]],
            ["easeInCirc", [.6, .04, .98, .335]],
            ["easeOutCirc", [.075, .82, .165, 1]],
            ["easeInOutCirc", [.785, .135, .15, .86]]
        ], function(a, b) {
            w.Easings[b[0]] = k.apply(null, b[1])
        });
        var y = w.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
                colorNames: {
                    aliceblue: "240,248,255",
                    antiquewhite: "250,235,215",
                    aquamarine: "127,255,212",
                    aqua: "0,255,255",
                    azure: "240,255,255",
                    beige: "245,245,220",
                    bisque: "255,228,196",
                    black: "0,0,0",
                    blanchedalmond: "255,235,205",
                    blueviolet: "138,43,226",
                    blue: "0,0,255",
                    brown: "165,42,42",
                    burlywood: "222,184,135",
                    cadetblue: "95,158,160",
                    chartreuse: "127,255,0",
                    chocolate: "210,105,30",
                    coral: "255,127,80",
                    cornflowerblue: "100,149,237",
                    cornsilk: "255,248,220",
                    crimson: "220,20,60",
                    cyan: "0,255,255",
                    darkblue: "0,0,139",
                    darkcyan: "0,139,139",
                    darkgoldenrod: "184,134,11",
                    darkgray: "169,169,169",
                    darkgrey: "169,169,169",
                    darkgreen: "0,100,0",
                    darkkhaki: "189,183,107",
                    darkmagenta: "139,0,139",
                    darkolivegreen: "85,107,47",
                    darkorange: "255,140,0",
                    darkorchid: "153,50,204",
                    darkred: "139,0,0",
                    darksalmon: "233,150,122",
                    darkseagreen: "143,188,143",
                    darkslateblue: "72,61,139",
                    darkslategray: "47,79,79",
                    darkturquoise: "0,206,209",
                    darkviolet: "148,0,211",
                    deeppink: "255,20,147",
                    deepskyblue: "0,191,255",
                    dimgray: "105,105,105",
                    dimgrey: "105,105,105",
                    dodgerblue: "30,144,255",
                    firebrick: "178,34,34",
                    floralwhite: "255,250,240",
                    forestgreen: "34,139,34",
                    fuchsia: "255,0,255",
                    gainsboro: "220,220,220",
                    ghostwhite: "248,248,255",
                    gold: "255,215,0",
                    goldenrod: "218,165,32",
                    gray: "128,128,128",
                    grey: "128,128,128",
                    greenyellow: "173,255,47",
                    green: "0,128,0",
                    honeydew: "240,255,240",
                    hotpink: "255,105,180",
                    indianred: "205,92,92",
                    indigo: "75,0,130",
                    ivory: "255,255,240",
                    khaki: "240,230,140",
                    lavenderblush: "255,240,245",
                    lavender: "230,230,250",
                    lawngreen: "124,252,0",
                    lemonchiffon: "255,250,205",
                    lightblue: "173,216,230",
                    lightcoral: "240,128,128",
                    lightcyan: "224,255,255",
                    lightgoldenrodyellow: "250,250,210",
                    lightgray: "211,211,211",
                    lightgrey: "211,211,211",
                    lightgreen: "144,238,144",
                    lightpink: "255,182,193",
                    lightsalmon: "255,160,122",
                    lightseagreen: "32,178,170",
                    lightskyblue: "135,206,250",
                    lightslategray: "119,136,153",
                    lightsteelblue: "176,196,222",
                    lightyellow: "255,255,224",
                    limegreen: "50,205,50",
                    lime: "0,255,0",
                    linen: "250,240,230",
                    magenta: "255,0,255",
                    maroon: "128,0,0",
                    mediumaquamarine: "102,205,170",
                    mediumblue: "0,0,205",
                    mediumorchid: "186,85,211",
                    mediumpurple: "147,112,219",
                    mediumseagreen: "60,179,113",
                    mediumslateblue: "123,104,238",
                    mediumspringgreen: "0,250,154",
                    mediumturquoise: "72,209,204",
                    mediumvioletred: "199,21,133",
                    midnightblue: "25,25,112",
                    mintcream: "245,255,250",
                    mistyrose: "255,228,225",
                    moccasin: "255,228,181",
                    navajowhite: "255,222,173",
                    navy: "0,0,128",
                    oldlace: "253,245,230",
                    olivedrab: "107,142,35",
                    olive: "128,128,0",
                    orangered: "255,69,0",
                    orange: "255,165,0",
                    orchid: "218,112,214",
                    palegoldenrod: "238,232,170",
                    palegreen: "152,251,152",
                    paleturquoise: "175,238,238",
                    palevioletred: "219,112,147",
                    papayawhip: "255,239,213",
                    peachpuff: "255,218,185",
                    peru: "205,133,63",
                    pink: "255,192,203",
                    plum: "221,160,221",
                    powderblue: "176,224,230",
                    purple: "128,0,128",
                    red: "255,0,0",
                    rosybrown: "188,143,143",
                    royalblue: "65,105,225",
                    saddlebrown: "139,69,19",
                    salmon: "250,128,114",
                    sandybrown: "244,164,96",
                    seagreen: "46,139,87",
                    seashell: "255,245,238",
                    sienna: "160,82,45",
                    silver: "192,192,192",
                    skyblue: "135,206,235",
                    slateblue: "106,90,205",
                    slategray: "112,128,144",
                    snow: "255,250,250",
                    springgreen: "0,255,127",
                    steelblue: "70,130,180",
                    tan: "210,180,140",
                    teal: "0,128,128",
                    thistle: "216,191,216",
                    tomato: "255,99,71",
                    turquoise: "64,224,208",
                    violet: "238,130,238",
                    wheat: "245,222,179",
                    whitesmoke: "245,245,245",
                    white: "255,255,255",
                    yellowgreen: "154,205,50",
                    yellow: "255,255,0"
                }
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function() {
                    for (var a = 0; a < y.Lists.colors.length; a++) {
                        var b = "color" === y.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";
                        y.Hooks.templates[y.Lists.colors[a]] = ["Red Green Blue Alpha", b]
                    }
                    var c, d, e;
                    if (p)
                        for (c in y.Hooks.templates)
                            if (y.Hooks.templates.hasOwnProperty(c)) {
                                d = y.Hooks.templates[c], e = d[0].split(" ");
                                var f = d[1].match(y.RegEx.valueSplit);
                                "Color" === e[0] && (e.push(e.shift()), f.push(f.shift()), y.Hooks.templates[c] = [e.join(" "), f.join(" ")])
                            }
                    for (c in y.Hooks.templates)
                        if (y.Hooks.templates.hasOwnProperty(c)) {
                            d = y.Hooks.templates[c], e = d[0].split(" ");
                            for (var g in e)
                                if (e.hasOwnProperty(g)) {
                                    var h = c + e[g],
                                        i = g;
                                    y.Hooks.registered[h] = [c, i]
                                }
                        }
                },
                getRoot: function(a) {
                    var b = y.Hooks.registered[a];
                    return b ? b[0] : a
                },
                getUnit: function(a, b) {
                    var c = (a.substr(b || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                    return c && y.Lists.units.indexOf(c) >= 0 ? c : ""
                },
                fixColors: function(a) {
                    return a.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function(a, b, c) {
                        return y.Lists.colorNames.hasOwnProperty(c) ? (b ? b : "rgba(") + y.Lists.colorNames[c] + (b ? "" : ",1)") : b + c
                    })
                },
                cleanRootPropertyValue: function(a, b) {
                    return y.RegEx.valueUnwrap.test(b) && (b = b.match(y.RegEx.valueUnwrap)[1]), y.Values.isCSSNullValue(b) && (b = y.Hooks.templates[a][1]), b
                },
                extractValue: function(a, b) {
                    var c = y.Hooks.registered[a];
                    if (c) {
                        var d = c[0],
                            e = c[1];
                        return b = y.Hooks.cleanRootPropertyValue(d, b), b.toString().match(y.RegEx.valueSplit)[e]
                    }
                    return b
                },
                injectValue: function(a, b, c) {
                    var d = y.Hooks.registered[a];
                    if (d) {
                        var e, f, g = d[0],
                            h = d[1];
                        return c = y.Hooks.cleanRootPropertyValue(g, c), e = c.toString().match(y.RegEx.valueSplit), e[h] = b, f = e.join(" ")
                    }
                    return c
                }
            },
            Normalizations: {
                registered: {
                    clip: function(a, b, c) {
                        switch (a) {
                            case "name":
                                return "clip";
                            case "extract":
                                var d;
                                return y.RegEx.wrappedValueAlreadyExtracted.test(c) ? d = c : (d = c.toString().match(y.RegEx.valueUnwrap), d = d ? d[1].replace(/,(\s+)?/g, " ") : c), d;
                            case "inject":
                                return "rect(" + c + ")"
                        }
                    },
                    blur: function(a, b, c) {
                        switch (a) {
                            case "name":
                                return w.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var d = parseFloat(c);
                                if (!d && 0 !== d) {
                                    var e = c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    d = e ? e[1] : 0
                                }
                                return d;
                            case "inject":
                                return parseFloat(c) ? "blur(" + c + ")" : "none"
                        }
                    },
                    opacity: function(a, b, c) {
                        if (p <= 8) switch (a) {
                            case "name":
                                return "filter";
                            case "extract":
                                var d = c.toString().match(/alpha\(opacity=(.*)\)/i);
                                return c = d ? d[1] / 100 : 1;
                            case "inject":
                                return b.style.zoom = 1, parseFloat(c) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(c), 10) + ")"
                        } else switch (a) {
                            case "name":
                                return "opacity";
                            case "extract":
                                return c;
                            case "inject":
                                return c
                        }
                    }
                },
                register: function() {
                    function a(a, b, c) {
                        var d = "border-box" === y.getPropertyValue(b, "boxSizing").toString().toLowerCase();
                        if (d === (c || !1)) {
                            var e, f, g = 0,
                                h = "width" === a ? ["Left", "Right"] : ["Top", "Bottom"],
                                i = ["padding" + h[0], "padding" + h[1], "border" + h[0] + "Width", "border" + h[1] + "Width"];
                            for (e = 0; e < i.length; e++) f = parseFloat(y.getPropertyValue(b, i[e])), isNaN(f) || (g += f);
                            return c ? -g : g
                        }
                        return 0
                    }

                    function b(b, c) {
                        return function(d, e, f) {
                            switch (d) {
                                case "name":
                                    return b;
                                case "extract":
                                    return parseFloat(f) + a(b, e, c);
                                case "inject":
                                    return parseFloat(f) - a(b, e, c) + "px"
                            }
                        }
                    }
                    p && !(p > 9) || w.State.isGingerbread || (y.Lists.transformsBase = y.Lists.transformsBase.concat(y.Lists.transforms3D));
                    for (var c = 0; c < y.Lists.transformsBase.length; c++) ! function() {
                        var a = y.Lists.transformsBase[c];
                        y.Normalizations.registered[a] = function(b, c, e) {
                            switch (b) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return g(c) === d || g(c).transformCache[a] === d ? /^scale/i.test(a) ? 1 : 0 : g(c).transformCache[a].replace(/[()]/g, "");
                                case "inject":
                                    var f = !1;
                                    switch (a.substr(0, a.length - 1)) {
                                        case "translate":
                                            f = !/(%|px|em|rem|vw|vh|\d)$/i.test(e);
                                            break;
                                        case "scal":
                                        case "scale":
                                            w.State.isAndroid && g(c).transformCache[a] === d && e < 1 && (e = 1), f = !/(\d)$/i.test(e);
                                            break;
                                        case "skew":
                                            f = !/(deg|\d)$/i.test(e);
                                            break;
                                        case "rotate":
                                            f = !/(deg|\d)$/i.test(e)
                                    }
                                    return f || (g(c).transformCache[a] = "(" + e + ")"), g(c).transformCache[a]
                            }
                        }
                    }();
                    for (var e = 0; e < y.Lists.colors.length; e++) ! function() {
                        var a = y.Lists.colors[e];
                        y.Normalizations.registered[a] = function(b, c, e) {
                            switch (b) {
                                case "name":
                                    return a;
                                case "extract":
                                    var f;
                                    if (y.RegEx.wrappedValueAlreadyExtracted.test(e)) f = e;
                                    else {
                                        var g, h = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(e) ? g = h[e] !== d ? h[e] : h.black : y.RegEx.isHex.test(e) ? g = "rgb(" + y.Values.hexToRgb(e).join(" ") + ")" : /^rgba?\(/i.test(e) || (g = h.black), f = (g || e).toString().match(y.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return (!p || p > 8) && 3 === f.split(" ").length && (f += " 1"), f;
                                case "inject":
                                    return /^rgb/.test(e) ? e : (p <= 8 ? 4 === e.split(" ").length && (e = e.split(/\s+/).slice(0, 3).join(" ")) : 3 === e.split(" ").length && (e += " 1"), (p <= 8 ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
                            }
                        }
                    }();
                    y.Normalizations.registered.innerWidth = b("width", !0), y.Normalizations.registered.innerHeight = b("height", !0), y.Normalizations.registered.outerWidth = b("width"), y.Normalizations.registered.outerHeight = b("height")
                }
            },
            Names: {
                camelCase: function(a) {
                    return a.replace(/-(\w)/g, function(a, b) {
                        return b.toUpperCase()
                    })
                },
                SVGAttribute: function(a) {
                    var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (p || w.State.isAndroid && !w.State.isChrome) && (b += "|transform"), new RegExp("^(" + b + ")$", "i").test(a)
                },
                prefixCheck: function(a) {
                    if (w.State.prefixMatches[a]) return [w.State.prefixMatches[a], !0];
                    for (var b = ["", "Webkit", "Moz", "ms", "O"], c = 0, d = b.length; c < d; c++) {
                        var e;
                        if (e = 0 === c ? a : b[c] + a.replace(/^\w/, function(a) {
                                return a.toUpperCase()
                            }), s.isString(w.State.prefixElement.style[e])) return w.State.prefixMatches[a] = e, [e, !0]
                    }
                    return [a, !1]
                }
            },
            Values: {
                hexToRgb: function(a) {
                    var b, c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return a = a.replace(c, function(a, b, c, d) {
                        return b + b + c + c + d + d
                    }), b = d.exec(a), b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function(a) {
                    return !a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)
                },
                getUnitType: function(a) {
                    return /^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px"
                },
                getDisplayType: function(a) {
                    var b = a && a.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b) ? "inline" : /^(li)$/i.test(b) ? "list-item" : /^(tr)$/i.test(b) ? "table-row" : /^(table)$/i.test(b) ? "table" : /^(tbody)$/i.test(b) ? "table-row-group" : "block"
                },
                addClass: function(a, b) {
                    if (a)
                        if (a.classList) a.classList.add(b);
                        else if (s.isString(a.className)) a.className += (a.className.length ? " " : "") + b;
                    else {
                        var c = a.getAttribute(p <= 7 ? "className" : "class") || "";
                        a.setAttribute("class", c + (c ? " " : "") + b)
                    }
                },
                removeClass: function(a, b) {
                    if (a)
                        if (a.classList) a.classList.remove(b);
                        else if (s.isString(a.className)) a.className = a.className.toString().replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                    else {
                        var c = a.getAttribute(p <= 7 ? "className" : "class") || "";
                        a.setAttribute("class", c.replace(new RegExp("(^|s)" + b.split(" ").join("|") + "(s|$)", "gi"), " "))
                    }
                }
            },
            getPropertyValue: function(a, c, e, f) {
                function h(a, c) {
                    var e = 0;
                    if (p <= 8) e = o.css(a, c);
                    else {
                        var i = !1;
                        /^(width|height)$/.test(c) && 0 === y.getPropertyValue(a, "display") && (i = !0, y.setPropertyValue(a, "display", y.Values.getDisplayType(a)));
                        var j = function() {
                            i && y.setPropertyValue(a, "display", "none")
                        };
                        if (!f) {
                            if ("height" === c && "border-box" !== y.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                var k = a.offsetHeight - (parseFloat(y.getPropertyValue(a, "borderTopWidth")) || 0) - (parseFloat(y.getPropertyValue(a, "borderBottomWidth")) || 0) - (parseFloat(y.getPropertyValue(a, "paddingTop")) || 0) - (parseFloat(y.getPropertyValue(a, "paddingBottom")) || 0);
                                return j(), k
                            }
                            if ("width" === c && "border-box" !== y.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                var l = a.offsetWidth - (parseFloat(y.getPropertyValue(a, "borderLeftWidth")) || 0) - (parseFloat(y.getPropertyValue(a, "borderRightWidth")) || 0) - (parseFloat(y.getPropertyValue(a, "paddingLeft")) || 0) - (parseFloat(y.getPropertyValue(a, "paddingRight")) || 0);
                                return j(), l
                            }
                        }
                        var m;
                        m = g(a) === d ? b.getComputedStyle(a, null) : g(a).computedStyle ? g(a).computedStyle : g(a).computedStyle = b.getComputedStyle(a, null), "borderColor" === c && (c = "borderTopColor"), e = 9 === p && "filter" === c ? m.getPropertyValue(c) : m[c], "" !== e && null !== e || (e = a.style[c]), j()
                    }
                    if ("auto" === e && /^(top|right|bottom|left)$/i.test(c)) {
                        var n = h(a, "position");
                        ("fixed" === n || "absolute" === n && /top|left/i.test(c)) && (e = o(a).position()[c] + "px")
                    }
                    return e
                }
                var i;
                if (y.Hooks.registered[c]) {
                    var j = c,
                        k = y.Hooks.getRoot(j);
                    e === d && (e = y.getPropertyValue(a, y.Names.prefixCheck(k)[0])), y.Normalizations.registered[k] && (e = y.Normalizations.registered[k]("extract", a, e)), i = y.Hooks.extractValue(j, e)
                } else if (y.Normalizations.registered[c]) {
                    var l, m;
                    l = y.Normalizations.registered[c]("name", a), "transform" !== l && (m = h(a, y.Names.prefixCheck(l)[0]), y.Values.isCSSNullValue(m) && y.Hooks.templates[c] && (m = y.Hooks.templates[c][1])), i = y.Normalizations.registered[c]("extract", a, m)
                }
                if (!/^[\d-]/.test(i)) {
                    var n = g(a);
                    if (n && n.isSVG && y.Names.SVGAttribute(c))
                        if (/^(height|width)$/i.test(c)) try {
                            i = a.getBBox()[c]
                        } catch (q) {
                            i = 0
                        } else i = a.getAttribute(c);
                        else i = h(a, y.Names.prefixCheck(c)[0])
                }
                return y.Values.isCSSNullValue(i) && (i = 0), w.debug >= 2 && console.log("Get " + c + ": " + i), i
            },
            setPropertyValue: function(a, c, d, e, f) {
                var h = c;
                if ("scroll" === c) f.container ? f.container["scroll" + f.direction] = d : "Left" === f.direction ? b.scrollTo(d, f.alternateValue) : b.scrollTo(f.alternateValue, d);
                else if (y.Normalizations.registered[c] && "transform" === y.Normalizations.registered[c]("name", a)) y.Normalizations.registered[c]("inject", a, d), h = "transform", d = g(a).transformCache[c];
                else {
                    if (y.Hooks.registered[c]) {
                        var i = c,
                            j = y.Hooks.getRoot(c);
                        e = e || y.getPropertyValue(a, j), d = y.Hooks.injectValue(i, d, e), c = j
                    }
                    if (y.Normalizations.registered[c] && (d = y.Normalizations.registered[c]("inject", a, d), c = y.Normalizations.registered[c]("name", a)), h = y.Names.prefixCheck(c)[0], p <= 8) try {
                        a.style[h] = d
                    } catch (k) {
                        w.debug && console.log("Browser does not support [" + d + "] for [" + h + "]")
                    } else {
                        var l = g(a);
                        l && l.isSVG && y.Names.SVGAttribute(c) ? a.setAttribute(c, d) : a.style[h] = d
                    }
                    w.debug >= 2 && console.log("Set " + c + " (" + h + "): " + d)
                }
                return [h, d]
            },
            flushTransformCache: function(a) {
                var b = "",
                    c = g(a);
                if ((p || w.State.isAndroid && !w.State.isChrome) && c && c.isSVG) {
                    var d = function(b) {
                            return parseFloat(y.getPropertyValue(a, b))
                        },
                        e = {
                            translate: [d("translateX"), d("translateY")],
                            skewX: [d("skewX")],
                            skewY: [d("skewY")],
                            scale: 1 !== d("scale") ? [d("scale"), d("scale")] : [d("scaleX"), d("scaleY")],
                            rotate: [d("rotateZ"), 0, 0]
                        };
                    o.each(g(a).transformCache, function(a) {
                        /^translate/i.test(a) ? a = "translate" : /^scale/i.test(a) ? a = "scale" : /^rotate/i.test(a) && (a = "rotate"), e[a] && (b += a + "(" + e[a].join(" ") + ") ", delete e[a])
                    })
                } else {
                    var f, h;
                    o.each(g(a).transformCache, function(c) {
                        return f = g(a).transformCache[c], "transformPerspective" === c ? (h = f, !0) : (9 === p && "rotateZ" === c && (c = "rotate"), void(b += c + f + " "))
                    }), h && (b = "perspective" + h + " " + b)
                }
                y.setPropertyValue(a, "transform", b)
            }
        };
        y.Hooks.register(), y.Normalizations.register(), w.hook = function(a, b, c) {
            var e;
            return a = f(a), o.each(a, function(a, f) {
                if (g(f) === d && w.init(f), c === d) e === d && (e = y.getPropertyValue(f, b));
                else {
                    var h = y.setPropertyValue(f, b, c);
                    "transform" === h[0] && w.CSS.flushTransformCache(f), e = h
                }
            }), e
        };
        var z = function() {
            function a() {
                return k ? A.promise || null : p
            }

            function e(a, e) {
                function f(f) {
                    var k, n;
                    if (i.begin && 0 === C) try {
                        i.begin.call(r, r)
                    } catch (p) {
                        setTimeout(function() {
                            throw p
                        }, 1)
                    }
                    if ("scroll" === F) {
                        var q, u, x, z = /^x$/i.test(i.axis) ? "Left" : "Top",
                            D = parseFloat(i.offset) || 0;
                        i.container ? s.isWrapped(i.container) || s.isNode(i.container) ? (i.container = i.container[0] || i.container, q = i.container["scroll" + z], x = q + o(a).position()[z.toLowerCase()] + D) : i.container = null : (q = w.State.scrollAnchor[w.State["scrollProperty" + z]], u = w.State.scrollAnchor[w.State["scrollProperty" + ("Left" === z ? "Top" : "Left")]], x = o(a).offset()[z.toLowerCase()] + D), j = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: q,
                                currentValue: q,
                                endValue: x,
                                unitType: "",
                                easing: i.easing,
                                scrollData: {
                                    container: i.container,
                                    direction: z,
                                    alternateValue: u
                                }
                            },
                            element: a
                        }, w.debug && console.log("tweensContainer (scroll): ", j.scroll, a)
                    } else if ("reverse" === F) {
                        if (k = g(a), !k) return;
                        if (!k.tweensContainer) return void o.dequeue(a, i.queue);
                        "none" === k.opts.display && (k.opts.display = "auto"), "hidden" === k.opts.visibility && (k.opts.visibility = "visible"), k.opts.loop = !1, k.opts.begin = null, k.opts.complete = null, v.easing || delete i.easing, v.duration || delete i.duration, i = o.extend({}, k.opts, i), n = o.extend(!0, {}, k ? k.tweensContainer : null);
                        for (var E in n)
                            if (n.hasOwnProperty(E) && "element" !== E) {
                                var G = n[E].startValue;
                                n[E].startValue = n[E].currentValue = n[E].endValue, n[E].endValue = G, s.isEmptyObject(v) || (n[E].easing = i.easing), w.debug && console.log("reverse tweensContainer (" + E + "): " + JSON.stringify(n[E]), a)
                            }
                        j = n
                    } else if ("start" === F) {
                        k = g(a), k && k.tweensContainer && k.isAnimating === !0 && (n = k.tweensContainer);
                        var H = function(b, c) {
                                var d, f, g;
                                return s.isFunction(b) && (b = b.call(a, e, B)), s.isArray(b) ? (d = b[0], !s.isArray(b[1]) && /^[\d-]/.test(b[1]) || s.isFunction(b[1]) || y.RegEx.isHex.test(b[1]) ? g = b[1] : s.isString(b[1]) && !y.RegEx.isHex.test(b[1]) && w.Easings[b[1]] || s.isArray(b[1]) ? (f = c ? b[1] : l(b[1], i.duration), g = b[2]) : g = b[1] || b[2]) : d = b, c || (f = f || i.easing), s.isFunction(d) && (d = d.call(a, e, B)), s.isFunction(g) && (g = g.call(a, e, B)), [d || 0, f, g]
                            },
                            I = function(e, f) {
                                var g, l = y.Hooks.getRoot(e),
                                    m = !1,
                                    p = f[0],
                                    q = f[1],
                                    r = f[2];
                                if (!(k && k.isSVG || "tween" === l || y.Names.prefixCheck(l)[1] !== !1 || y.Normalizations.registered[l] !== d)) return void(w.debug && console.log("Skipping [" + l + "] due to a lack of browser support."));
                                (i.display !== d && null !== i.display && "none" !== i.display || i.visibility !== d && "hidden" !== i.visibility) && /opacity|filter/.test(e) && !r && 0 !== p && (r = 0), i._cacheValues && n && n[e] ? (r === d && (r = n[e].endValue + n[e].unitType), m = k.rootPropertyValueCache[l]) : y.Hooks.registered[e] ? r === d ? (m = y.getPropertyValue(a, l), r = y.getPropertyValue(a, e, m)) : m = y.Hooks.templates[l][1] : r === d && (r = y.getPropertyValue(a, e));
                                var t, u, v, x = !1,
                                    z = function(a, b) {
                                        var c, d;
                                        return d = (b || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(a) {
                                            return c = a, ""
                                        }), c || (c = y.Values.getUnitType(a)), [d, c]
                                    };
                                if (r !== p && s.isString(r) && s.isString(p)) {
                                    g = "";
                                    var A = 0,
                                        B = 0,
                                        C = [],
                                        D = [],
                                        E = 0,
                                        F = 0,
                                        G = 0;
                                    for (r = y.Hooks.fixColors(r), p = y.Hooks.fixColors(p); A < r.length && B < p.length;) {
                                        var H = r[A],
                                            I = p[B];
                                        if (/[\d\.]/.test(H) && /[\d\.]/.test(I)) {
                                            for (var J = H, K = I, M = ".", N = "."; ++A < r.length;) {
                                                if (H = r[A], H === M) M = "..";
                                                else if (!/\d/.test(H)) break;
                                                J += H
                                            }
                                            for (; ++B < p.length;) {
                                                if (I = p[B], I === N) N = "..";
                                                else if (!/\d/.test(I)) break;
                                                K += I
                                            }
                                            var O = y.Hooks.getUnit(r, A),
                                                P = y.Hooks.getUnit(p, B);
                                            if (A += O.length, B += P.length, O === P) J === K ? g += J + O : (g += "{" + C.length + (F ? "!" : "") + "}" + O, C.push(parseFloat(J)), D.push(parseFloat(K)));
                                            else {
                                                var Q = parseFloat(J),
                                                    R = parseFloat(K);
                                                g += (E < 5 ? "calc" : "") + "(" + (Q ? "{" + C.length + (F ? "!" : "") + "}" : "0") + O + " + " + (R ? "{" + (C.length + (Q ? 1 : 0)) + (F ? "!" : "") + "}" : "0") + P + ")", Q && (C.push(Q), D.push(0)), R && (C.push(0), D.push(R))
                                            }
                                        } else {
                                            if (H !== I) {
                                                E = 0;
                                                break
                                            }
                                            g += H, A++, B++, 0 === E && "c" === H || 1 === E && "a" === H || 2 === E && "l" === H || 3 === E && "c" === H || E >= 4 && "(" === H ? E++ : (E && E < 5 || E >= 4 && ")" === H && --E < 5) && (E = 0), 0 === F && "r" === H || 1 === F && "g" === H || 2 === F && "b" === H || 3 === F && "a" === H || F >= 3 && "(" === H ? (3 === F && "a" === H && (G = 1), F++) : G && "," === H ? ++G > 3 && (F = G = 0) : (G && F < (G ? 5 : 4) || F >= (G ? 4 : 3) && ")" === H && --F < (G ? 5 : 4)) && (F = G = 0)
                                        }
                                    }
                                    A === r.length && B === p.length || (w.debug && console.error('Trying to pattern match mis-matched strings ["' + p + '", "' + r + '"]'), g = d), g && (C.length ? (w.debug && console.log('Pattern found "' + g + '" -> ', C, D, "[" + r + "," + p + "]"), r = C, p = D, u = v = "") : g = d)
                                }
                                g || (t = z(e, r), r = t[0], v = t[1], t = z(e, p), p = t[0].replace(/^([+-\/*])=/, function(a, b) {
                                    return x = b, ""
                                }), u = t[1], r = parseFloat(r) || 0, p = parseFloat(p) || 0, "%" === u && (/^(fontSize|lineHeight)$/.test(e) ? (p /= 100, u = "em") : /^scale/.test(e) ? (p /= 100, u = "") : /(Red|Green|Blue)$/i.test(e) && (p = p / 100 * 255, u = "")));
                                var S = function() {
                                    var d = {
                                            myParent: a.parentNode || c.body,
                                            position: y.getPropertyValue(a, "position"),
                                            fontSize: y.getPropertyValue(a, "fontSize")
                                        },
                                        e = d.position === L.lastPosition && d.myParent === L.lastParent,
                                        f = d.fontSize === L.lastFontSize;
                                    L.lastParent = d.myParent, L.lastPosition = d.position, L.lastFontSize = d.fontSize;
                                    var g = 100,
                                        h = {};
                                    if (f && e) h.emToPx = L.lastEmToPx, h.percentToPxWidth = L.lastPercentToPxWidth, h.percentToPxHeight = L.lastPercentToPxHeight;
                                    else {
                                        var i = k && k.isSVG ? c.createElementNS("http://www.w3.org/2000/svg", "rect") : c.createElement("div");
                                        w.init(i), d.myParent.appendChild(i), o.each(["overflow", "overflowX", "overflowY"], function(a, b) {
                                            w.CSS.setPropertyValue(i, b, "hidden")
                                        }), w.CSS.setPropertyValue(i, "position", d.position), w.CSS.setPropertyValue(i, "fontSize", d.fontSize), w.CSS.setPropertyValue(i, "boxSizing", "content-box"), o.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(a, b) {
                                            w.CSS.setPropertyValue(i, b, g + "%")
                                        }), w.CSS.setPropertyValue(i, "paddingLeft", g + "em"), h.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(y.getPropertyValue(i, "width", null, !0)) || 1) / g, h.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(y.getPropertyValue(i, "height", null, !0)) || 1) / g, h.emToPx = L.lastEmToPx = (parseFloat(y.getPropertyValue(i, "paddingLeft")) || 1) / g, d.myParent.removeChild(i)
                                    }
                                    return null === L.remToPx && (L.remToPx = parseFloat(y.getPropertyValue(c.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(b.innerWidth) / 100, L.vhToPx = parseFloat(b.innerHeight) / 100), h.remToPx = L.remToPx, h.vwToPx = L.vwToPx, h.vhToPx = L.vhToPx, w.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(h), a), h
                                };
                                if (/[\/*]/.test(x)) u = v;
                                else if (v !== u && 0 !== r)
                                    if (0 === p) u = v;
                                    else {
                                        h = h || S();
                                        var T = /margin|padding|left|right|width|text|word|letter/i.test(e) || /X$/.test(e) || "x" === e ? "x" : "y";
                                        switch (v) {
                                            case "%":
                                                r *= "x" === T ? h.percentToPxWidth : h.percentToPxHeight;
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                r *= h[v + "ToPx"]
                                        }
                                        switch (u) {
                                            case "%":
                                                r *= 1 / ("x" === T ? h.percentToPxWidth : h.percentToPxHeight);
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                r *= 1 / h[u + "ToPx"]
                                        }
                                    }
                                switch (x) {
                                    case "+":
                                        p = r + p;
                                        break;
                                    case "-":
                                        p = r - p;
                                        break;
                                    case "*":
                                        p = r * p;
                                        break;
                                    case "/":
                                        p = r / p
                                }
                                j[e] = {
                                    rootPropertyValue: m,
                                    startValue: r,
                                    currentValue: r,
                                    endValue: p,
                                    unitType: u,
                                    easing: q
                                }, g && (j[e].pattern = g), w.debug && console.log("tweensContainer (" + e + "): " + JSON.stringify(j[e]), a)
                            };
                        for (var J in t)
                            if (t.hasOwnProperty(J)) {
                                var K = y.Names.camelCase(J),
                                    N = H(t[J]);
                                if (y.Lists.colors.indexOf(K) >= 0) {
                                    var O = N[0],
                                        P = N[1],
                                        Q = N[2];
                                    if (y.RegEx.isHex.test(O)) {
                                        for (var R = ["Red", "Green", "Blue"], S = y.Values.hexToRgb(O), T = Q ? y.Values.hexToRgb(Q) : d, U = 0; U < R.length; U++) {
                                            var V = [S[U]];
                                            P && V.push(P), T !== d && V.push(T[U]), I(K + R[U], V)
                                        }
                                        continue
                                    }
                                }
                                I(K, N)
                            }
                        j.element = a
                    }
                    j.element && (y.Values.addClass(a, "velocity-animating"), M.push(j), k = g(a), k && ("" === i.queue && (k.tweensContainer = j, k.opts = i), k.isAnimating = !0), C === B - 1 ? (w.State.calls.push([M, r, i, null, A.resolver, null, 0]), w.State.isTicking === !1 && (w.State.isTicking = !0, m())) : C++)
                }
                var h, i = o.extend({}, w.defaults, v),
                    j = {};
                switch (g(a) === d && w.init(a), parseFloat(i.delay) && i.queue !== !1 && o.queue(a, i.queue, function(b) {
                    w.velocityQueueEntryFlag = !0;
                    var c = w.State.delayedElements.count++;
                    w.State.delayedElements[c] = a;
                    var d = function(a) {
                        return function() {
                            w.State.delayedElements[a] = !1, b()
                        }
                    }(c);
                    g(a).delayBegin = (new Date).getTime(), g(a).delay = parseFloat(i.delay), g(a).delayTimer = {
                        setTimeout: setTimeout(b, parseFloat(i.delay)),
                        next: d
                    }
                }), i.duration.toString().toLowerCase()) {
                    case "fast":
                        i.duration = 200;
                        break;
                    case "normal":
                        i.duration = u;
                        break;
                    case "slow":
                        i.duration = 600;
                        break;
                    default:
                        i.duration = parseFloat(i.duration) || 1
                }
                if (w.mock !== !1 && (w.mock === !0 ? i.duration = i.delay = 1 : (i.duration *= parseFloat(w.mock) || 1, i.delay *= parseFloat(w.mock) || 1)), i.easing = l(i.easing, i.duration), i.begin && !s.isFunction(i.begin) && (i.begin = null), i.progress && !s.isFunction(i.progress) && (i.progress = null), i.complete && !s.isFunction(i.complete) && (i.complete = null), i.display !== d && null !== i.display && (i.display = i.display.toString().toLowerCase(), "auto" === i.display && (i.display = w.CSS.Values.getDisplayType(a))), i.visibility !== d && null !== i.visibility && (i.visibility = i.visibility.toString().toLowerCase()), i.mobileHA = i.mobileHA && w.State.isMobile && !w.State.isGingerbread, i.queue === !1)
                    if (i.delay) {
                        var k = w.State.delayedElements.count++;
                        w.State.delayedElements[k] = a;
                        var n = function(a) {
                            return function() {
                                w.State.delayedElements[a] = !1, f()
                            }
                        }(k);
                        g(a).delayBegin = (new Date).getTime(), g(a).delay = parseFloat(i.delay), g(a).delayTimer = {
                            setTimeout: setTimeout(f, parseFloat(i.delay)),
                            next: n
                        }
                    } else f();
                else o.queue(a, i.queue, function(a, b) {
                    return b === !0 ? (A.promise && A.resolver(r), !0) : (w.velocityQueueEntryFlag = !0, void f(a))
                });
                "" !== i.queue && "fx" !== i.queue || "inprogress" === o.queue(a)[0] || o.dequeue(a)
            }
            var j, k, p, q, r, t, v, x = arguments[0] && (arguments[0].p || o.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || s.isString(arguments[0].properties));
            s.isWrapped(this) ? (k = !1, q = 0, r = this, p = this) : (k = !0, q = 1, r = x ? arguments[0].elements || arguments[0].e : arguments[0]);
            var A = {
                promise: null,
                resolver: null,
                rejecter: null
            };
            if (k && w.Promise && (A.promise = new w.Promise(function(a, b) {
                    A.resolver = a, A.rejecter = b
                })), x ? (t = arguments[0].properties || arguments[0].p, v = arguments[0].options || arguments[0].o) : (t = arguments[q], v = arguments[q + 1]), r = f(r), !r) return void(A.promise && (t && v && v.promiseRejectEmpty === !1 ? A.resolver() : A.rejecter()));
            var B = r.length,
                C = 0;
            if (!/^(stop|finish|finishAll|pause|resume)$/i.test(t) && !o.isPlainObject(v)) {
                var D = q + 1;
                v = {};
                for (var E = D; E < arguments.length; E++) s.isArray(arguments[E]) || !/^(fast|normal|slow)$/i.test(arguments[E]) && !/^\d/.test(arguments[E]) ? s.isString(arguments[E]) || s.isArray(arguments[E]) ? v.easing = arguments[E] : s.isFunction(arguments[E]) && (v.complete = arguments[E]) : v.duration = arguments[E]
            }
            var F;
            switch (t) {
                case "scroll":
                    F = "scroll";
                    break;
                case "reverse":
                    F = "reverse";
                    break;
                case "pause":
                    var G = (new Date).getTime();
                    return o.each(r, function(a, b) {
                        h(b, G)
                    }), o.each(w.State.calls, function(a, b) {
                        var c = !1;
                        b && o.each(b[1], function(a, e) {
                            var f = v === d ? "" : v;
                            return f !== !0 && b[2].queue !== f && (v !== d || b[2].queue !== !1) || (o.each(r, function(a, d) {
                                if (d === e) return b[5] = {
                                    resume: !1
                                }, c = !0, !1
                            }), !c && void 0)
                        })
                    }), a();
                case "resume":
                    return o.each(r, function(a, b) {
                        i(b, G)
                    }), o.each(w.State.calls, function(a, b) {
                        var c = !1;
                        b && o.each(b[1], function(a, e) {
                            var f = v === d ? "" : v;
                            return f !== !0 && b[2].queue !== f && (v !== d || b[2].queue !== !1) || (!b[5] || (o.each(r, function(a, d) {
                                if (d === e) return b[5].resume = !0, c = !0, !1
                            }), !c && void 0))
                        })
                    }), a();
                case "finish":
                case "finishAll":
                case "stop":
                    o.each(r, function(a, b) {
                        g(b) && g(b).delayTimer && (clearTimeout(g(b).delayTimer.setTimeout), g(b).delayTimer.next && g(b).delayTimer.next(), delete g(b).delayTimer), "finishAll" !== t || v !== !0 && !s.isString(v) || (o.each(o.queue(b, s.isString(v) ? v : ""), function(a, b) {
                            s.isFunction(b) && b()
                        }), o.queue(b, s.isString(v) ? v : "", []))
                    });
                    var H = [];
                    return o.each(w.State.calls, function(a, b) {
                        b && o.each(b[1], function(c, e) {
                            var f = v === d ? "" : v;
                            return f !== !0 && b[2].queue !== f && (v !== d || b[2].queue !== !1) || void o.each(r, function(c, d) {
                                if (d === e)
                                    if ((v === !0 || s.isString(v)) && (o.each(o.queue(d, s.isString(v) ? v : ""), function(a, b) {
                                            s.isFunction(b) && b(null, !0)
                                        }), o.queue(d, s.isString(v) ? v : "", [])), "stop" === t) {
                                        var h = g(d);
                                        h && h.tweensContainer && f !== !1 && o.each(h.tweensContainer, function(a, b) {
                                            b.endValue = b.currentValue
                                        }), H.push(a)
                                    } else "finish" !== t && "finishAll" !== t || (b[2].duration = 1)
                            })
                        })
                    }), "stop" === t && (o.each(H, function(a, b) {
                        n(b, !0)
                    }), A.promise && A.resolver(r)), a();
                default:
                    if (!o.isPlainObject(t) || s.isEmptyObject(t)) {
                        if (s.isString(t) && w.Redirects[t]) {
                            j = o.extend({}, v);
                            var I = j.duration,
                                J = j.delay || 0;
                            return j.backwards === !0 && (r = o.extend(!0, [], r).reverse()), o.each(r, function(a, b) {
                                parseFloat(j.stagger) ? j.delay = J + parseFloat(j.stagger) * a : s.isFunction(j.stagger) && (j.delay = J + j.stagger.call(b, a, B)), j.drag && (j.duration = parseFloat(I) || (/^(callout|transition)/.test(t) ? 1e3 : u), j.duration = Math.max(j.duration * (j.backwards ? 1 - a / B : (a + 1) / B), .75 * j.duration, 200)), w.Redirects[t].call(b, b, j || {}, a, B, r, A.promise ? A : d)
                            }), a()
                        }
                        var K = "Velocity: First argument (" + t + ") was not a property map, a known action, or a registered redirect. Aborting.";
                        return A.promise ? A.rejecter(new Error(K)) : console.log(K), a()
                    }
                    F = "start"
            }
            var L = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null
                },
                M = [];
            o.each(r, function(a, b) {
                s.isNode(b) && e(b, a)
            }), j = o.extend({}, w.defaults, v), j.loop = parseInt(j.loop, 10);
            var N = 2 * j.loop - 1;
            if (j.loop)
                for (var O = 0; O < N; O++) {
                    var P = {
                        delay: j.delay,
                        progress: j.progress
                    };
                    O === N - 1 && (P.display = j.display, P.visibility = j.visibility, P.complete = j.complete), z(r, "reverse", P)
                }
            return a()
        };
        w = o.extend(z, w), w.animate = z;
        var A = b.requestAnimationFrame || q;
        if (!w.State.isMobile && c.hidden !== d) {
            var B = function() {
                c.hidden ? (A = function(a) {
                    return setTimeout(function() {
                        a(!0)
                    }, 16)
                }, m()) : A = b.requestAnimationFrame || q
            };
            B(), c.addEventListener("visibilitychange", B)
        }
        return a.Velocity = w, a !== b && (a.fn.velocity = z, a.fn.velocity.defaults = w.defaults), o.each(["Down", "Up"], function(a, b) {
            w.Redirects["slide" + b] = function(a, c, e, f, g, h) {
                var i = o.extend({}, c),
                    j = i.begin,
                    k = i.complete,
                    l = {},
                    m = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    };
                i.display === d && (i.display = "Down" === b ? "inline" === w.CSS.Values.getDisplayType(a) ? "inline-block" : "block" : "none"), i.begin = function() {
                    0 === e && j && j.call(g, g);
                    for (var c in m)
                        if (m.hasOwnProperty(c)) {
                            l[c] = a.style[c];
                            var d = y.getPropertyValue(a, c);
                            m[c] = "Down" === b ? [d, 0] : [0, d]
                        }
                    l.overflow = a.style.overflow, a.style.overflow = "hidden"
                }, i.complete = function() {
                    for (var b in l) l.hasOwnProperty(b) && (a.style[b] = l[b]);
                    e === f - 1 && (k && k.call(g, g), h && h.resolver(g))
                }, w(a, m, i)
            }
        }), o.each(["In", "Out"], function(a, b) {
            w.Redirects["fade" + b] = function(a, c, e, f, g, h) {
                var i = o.extend({}, c),
                    j = i.complete,
                    k = {
                        opacity: "In" === b ? 1 : 0
                    };
                0 !== e && (i.begin = null), e !== f - 1 ? i.complete = null : i.complete = function() {
                    j && j.call(g, g), h && h.resolver(g)
                }, i.display === d && (i.display = "In" === b ? "auto" : "none"), w(this, k, i)
            }
        }), w
    }(window.jQuery || window.Zepto || window, window, window ? window.document : void 0)
});