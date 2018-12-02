(function(d, c) {
    var a = "e210f6dea6e07de052d5801028468e21";
    c.reviveAsync = c.reviveAsync || {};
    (function(e) {
        if (typeof e.CustomEvent === "function") {
            return false
        }
        function g(i, j) {
            j = j || {
                bubbles: false,
                cancelable: false,
                detail: undefined
            };
            var h = document.createEvent("CustomEvent");
            h.initCustomEvent(i, j.bubbles, j.cancelable, j.detail);
            return h
        }
        g.prototype = e.Event.prototype;
        e.CustomEvent = g
    }
    )(c);
    try {
        if (!c.reviveAsync.hasOwnProperty(a)) {
            var f = c.reviveAsync[a] = {
                id: Object.keys(c.reviveAsync).length,
                name: "revive",
                seq: 0,
                main: function() {
                    var e = function() {
                        var g = false;
                        try {
                            if (!g) {
                                g = true;
                                d.removeEventListener("DOMContentLoaded", e, false);
                                c.removeEventListener("load", e, false);
                                f.addEventListener("start", f.start);
                                f.addEventListener("refresh", f.refresh);
                                f.dispatchEvent("start", {
                                    start: true
                                })
                            }
                        } catch (h) {
                            console.log(h)
                        }
                    };
                    f.dispatchEvent("init");
                    if (d.readyState === "complete") {
                        setTimeout(e)
                    } else {
                        d.addEventListener("DOMContentLoaded", e, false);
                        c.addEventListener("load", e, false)
                    }
                },
                start: function(g) {
                    if (g.detail && g.detail.hasOwnProperty("start") && !g.detail.start) {
                        return
                    }
                    f.removeEventListener("start", f.start);
                    f.dispatchEvent("refresh")
                },
                refresh: function(g) {
                    f.apply(f.detect())
                },
                ajax: function(e, g) {
                    var h = new XMLHttpRequest();
                    h.onreadystatechange = function() {
                        if (4 === this.readyState) {
                            if (200 === this.status) {
                                f.spc(JSON.parse(this.responseText))
                            }
                        }
                    }
                    ;
                    this.dispatchEvent("send", g);
                    h.open("GET", e + "?" + f.encode(g).join("&"), true);
                    h.withCredentials = true;
                    h.send()
                },
                encode: function(m, n) {
                    var e = [], h, i;
                    for (h in m) {
                        if (m.hasOwnProperty(h)) {
                            var l = n ? n + "[" + h + "]" : h;
                            if ((/^(string|number|boolean)$/).test(typeof m[h])) {
                                e.push(encodeURIComponent(l) + "=" + encodeURIComponent(m[h]))
                            } else {
                                var g = f.encode(m[h], l);
                                for (i in g) {
                                    e.push(g[i])
                                }
                            }
                        }
                    }
                    return e
                },
                apply: function(g) {
                    if (g.zones.length) {
                        var e = "http:" === d.location.protocol ? "http://diru.uybor.uz/www/delivery/asyncspc.php" : "https://diru.uybor.uz/www/delivery/asyncspc.php";
                        g.zones = g.zones.join("|");
                        g.loc = d.location.href;
                        if (d.referrer) {
                            g.referer = d.referrer
                        }
                        f.ajax(e, g)
                    }
                },
                detect: function() {
                    var e = d.querySelectorAll("ins[" + f.getDataAttr("id") + "='" + a + "']");
                    var l = {
                        zones: [],
                        prefix: f.name + "-" + f.id + "-"
                    };
                    for (var r = 0; r < e.length; r++) {
                        var p = f.getDataAttr("zoneid"), k = f.getDataAttr("seq"), n = e[r], s;
                        if (n.hasAttribute(k)) {
                            s = n.getAttribute(k)
                        } else {
                            s = f.seq++;
                            n.setAttribute(k, s);
                            n.id = l.prefix + s
                        }
                        if (n.hasAttribute(p)) {
                            var o = f.getDataAttr("loaded"), q = new RegExp("^" + f.getDataAttr("(.*)") + "$"), g;
                            if (n.hasAttribute(o) && n.getAttribute(o)) {
                                continue
                            }
                            n.setAttribute(f.getDataAttr("loaded"), "1");
                            for (var h = 0; h < n.attributes.length; h++) {
                                if (g = n.attributes[h].name.match(q)) {
                                    if ("zoneid" === g[1]) {
                                        l.zones[s] = n.attributes[h].value
                                    } else {
                                        if (!(/^(id|seq|loaded)$/).test(g[1])) {
                                            l[g[1]] = n.attributes[h].value
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return l
                },
                createFrame: function(h) {
                    var e = d.createElement("IFRAME")
                      , g = e.style;
                    e.scrolling = "no";
                    e.frameBorder = 0;
                    e.width = h.width > 0 ? h.width : 0;
                    e.height = h.height > 0 ? h.height : 0;
                    g.border = 0;
                    g.overflow = "hidden";
                    return e
                },
                loadFrame: function(g, e) {
                    var h = g.contentDocument || g.contentWindow.document;
                    h.open();
                    h.writeln("<!DOCTYPE html>");
                    h.writeln("<html>");
                    h.writeln('<head><base target="_top"><meta charset="UTF-8"></head>');
                    h.writeln('<body border="0" margin="0" style="margin: 0; padding: 0">');
                    h.writeln(e);
                    h.writeln("</body>");
                    h.writeln("</html>");
                    h.close()
                },
                spc: function(l) {
                    this.dispatchEvent("receive", l);
                    for (var e in l) {
                        if (l.hasOwnProperty(e)) {
                            var p = l[e];
                            var o = d.getElementById(e);
                            if (o) {
                                var n = o.cloneNode(false);
                                if (p.iframeFriendly) {
                                    var k = f.createFrame(p);
                                    n.appendChild(k);
                                    o.parentNode.replaceChild(n, o);
                                    f.loadFrame(k, p.html)
                                } else {
                                    n.style.textDecoration = "none";
                                    n.innerHTML = p.html;
                                    var g = n.getElementsByTagName("SCRIPT");
                                    for (var m = 0; m < g.length; m++) {
                                        var r = document.createElement("SCRIPT");
                                        var q = g[m].attributes;
                                        for (var h = 0; h < q.length; h++) {
                                            r[q[h].nodeName] = q[h].value
                                        }
                                        if (g[m].innerHTML) {
                                            r.text = g[m].innerHTML
                                        }
                                        g[m].parentNode.replaceChild(r, g[m])
                                    }
                                    o.parentNode.replaceChild(n, o)
                                }
                            }
                        }
                    }
                },
                getDataAttr: function(e) {
                    return "data-" + f.name + "-" + e
                },
                getEventName: function(e) {
                    return this.name + "-" + a + "-" + e
                },
                addEventListener: function(e, g) {
                    d.addEventListener(this.getEventName(e), g)
                },
                removeEventListener: function(e, g) {
                    d.removeEventListener(this.getEventName(e), g, true)
                },
                dispatchEvent: function(e, g) {
                    d.dispatchEvent(new CustomEvent(this.getEventName(e),{
                        detail: g || {}
                    }))
                }
            };
            f.main()
        }
    } catch (b) {
        if (console.log) {
            console.log(b)
        }
    }
}
)(document, window);
if (typeof org == "undefined") {
    var org = {}
}
if (typeof org.openx == "undefined") {
    org.openx = {}
}
if (typeof org.openx.util == "undefined") {
    org.openx.util = {}
}
if (typeof org.openx.SWFObjectUtil == "undefined") {
    org.openx.SWFObjectUtil = {}
}
org.openx.SWFObject = function(f, d, m, g, j, l, n, i, a, e) {
    if (!document.getElementById) {
        return
    }
    this.DETECT_KEY = e ? e : "detectflash";
    this.skipDetect = org.openx.util.getRequestParameter(this.DETECT_KEY);
    this.params = new Object();
    this.variables = new Object();
    this.attributes = new Array();
    if (f) {
        this.setAttribute("swf", f)
    }
    if (d) {
        this.setAttribute("id", d)
    }
    if (m) {
        this.setAttribute("width", m)
    }
    if (g) {
        this.setAttribute("height", g)
    }
    if (j) {
        this.setAttribute("version", new org.openx.PlayerVersion(j.toString().split(".")))
    }
    this.installedVer = org.openx.SWFObjectUtil.getPlayerVersion();
    if (!window.opera && document.all && this.installedVer.major > 7) {
        org.openx.SWFObject.doPrepUnload = true
    }
    if (l) {
        this.addParam("bgcolor", l)
    }
    var b = n ? n : "high";
    this.addParam("quality", b);
    var k = (i) ? i : window.location;
    this.setAttribute("xiRedirectUrl", k);
    this.setAttribute("redirectUrl", "");
    if (a) {
        this.setAttribute("redirectUrl", a)
    }
}
;
org.openx.SWFObject.prototype = {
    setAttribute: function(a, b) {
        this.attributes[a] = b
    },
    getAttribute: function(a) {
        return this.attributes[a]
    },
    addParam: function(a, b) {
        this.params[a] = b
    },
    getParams: function() {
        return this.params
    },
    addVariable: function(a, b) {
        this.variables[a] = b
    },
    getVariable: function(a) {
        return this.variables[a]
    },
    getVariables: function() {
        return this.variables
    },
    getVariablePairs: function() {
        var a = new Array();
        var b;
        var c = this.getVariables();
        for (b in c) {
            a[a.length] = b + "=" + c[b]
        }
        return a
    },
    getSWFHTML: function() {
        var d = "";
        if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length) {
            d = '<embed type="application/x-shockwave-flash" src="' + this.getAttribute("swf") + '" width="' + this.getAttribute("width") + '" height="' + this.getAttribute("height") + '" style="' + this.getAttribute("style") + '"';
            d += ' id="' + this.getAttribute("id") + '" name="' + this.getAttribute("id") + '" ';
            var c = this.getParams();
            for (var a in c) {
                d += [a] + '="' + c[a] + '" '
            }
            var b = this.getVariablePairs().join("&");
            if (b.length > 0) {
                d += 'flashvars="' + b + '"'
            }
            d += "/>"
        } else {
            d = '<object id="' + this.getAttribute("id") + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + this.getAttribute("width") + '" height="' + this.getAttribute("height") + '" style="' + this.getAttribute("style") + '">';
            d += '<param name="movie" value="' + this.getAttribute("swf") + '" />';
            var c = this.getParams();
            for (var a in c) {
                d += '<param name="' + a + '" value="' + c[a] + '" />'
            }
            var b = this.getVariablePairs().join("&");
            if (b.length > 0) {
                d += '<param name="flashvars" value="' + b + '" />'
            }
            d += "</object>"
        }
        return d
    },
    write: function(a, b, d) {
        if (this.skipDetect || this.installedVer.versionIsValid(this.getAttribute("version"))) {
            var c = (typeof a == "string") ? document.getElementById(a) : a;
            c.innerHTML = this.getSWFHTML();
            this.logImpression(c, b);
            return true
        } else {
            if (this.getAttribute("redirectUrl") != "") {
                document.location.replace(this.getAttribute("redirectUrl"))
            }
        }
        this.logImpression(c, d);
        return false
    },
    logImpression: function(c, a) {
        if (a) {
            var b = document.createElement("IMG");
            b.style.position = "absolute";
            b.style.width = 0;
            b.src = a;
            c.appendChild(b)
        }
    }
};
org.openx.SWFObjectUtil.getPlayerVersion = function() {
    var c = new org.openx.PlayerVersion([0, 0, 0]);
    if (navigator.plugins && navigator.mimeTypes.length) {
        var a = navigator.plugins["Shockwave Flash"];
        if (a && a.description) {
            c = new org.openx.PlayerVersion(a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split("."))
        }
    } else {
        if (navigator.userAgent && navigator.userAgent.indexOf("Windows CE") >= 0) {
            var d = 1;
            var b = 3;
            while (d) {
                try {
                    b++;
                    d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + b);
                    c = new org.openx.PlayerVersion([b, 0, 0])
                } catch (f) {
                    d = null
                }
            }
        } else {
            try {
                var d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
            } catch (f) {
                try {
                    var d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                    c = new org.openx.PlayerVersion([6, 0, 21]);
                    d.AllowScriptAccess = "always"
                } catch (f) {
                    if (c.major == 6) {
                        return c
                    }
                }
                try {
                    d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                } catch (f) {}
            }
            if (d != null) {
                c = new org.openx.PlayerVersion(d.GetVariable("$version").split(" ")[1].split(","))
            }
        }
    }
    return c
}
;
org.openx.PlayerVersion = function(a) {
    this.major = a[0] != null ? parseInt(a[0]) : 0;
    this.minor = a[1] != null ? parseInt(a[1]) : 0;
    this.rev = a[2] != null ? parseInt(a[2]) : 0
}
;
org.openx.PlayerVersion.prototype.versionIsValid = function(a) {
    if (this.major < a.major) {
        return false
    }
    if (this.major > a.major) {
        return true
    }
    if (this.minor < a.minor) {
        return false
    }
    if (this.minor > a.minor) {
        return true
    }
    if (this.rev < a.rev) {
        return false
    }
    return true
}
;
org.openx.util = {
    getRequestParameter: function(d) {
        var c = document.location.search || document.location.hash;
        if (d == null) {
            return c
        }
        if (c) {
            var b = c.substring(1).split("&");
            for (var a = 0; a < b.length; a++) {
                if (b[a].substring(0, b[a].indexOf("=")) == d) {
                    return b[a].substring((b[a].indexOf("=") + 1))
                }
            }
        }
        return ""
    }
};
org.openx.SWFObjectUtil.cleanupSWFs = function() {
    var c = document.getElementsByTagName("OBJECT");
    for (var b = c.length - 1; b >= 0; b--) {
        c[b].style.display = "none";
        for (var a in c[b]) {
            if (typeof c[b][a] == "function") {
                c[b][a] = function() {}
            }
        }
    }
}
;
if (org.openx.SWFObject.doPrepUnload) {
    if (!org.openx.unloadSet) {
        org.openx.SWFObjectUtil.prepUnload = function() {
            __flash_unloadHandler = function() {}
            ;
            __flash_savedUnloadHandler = function() {}
            ;
            window.attachEvent("onunload", org.openx.SWFObjectUtil.cleanupSWFs)
        }
        ;
        window.attachEvent("onbeforeunload", org.openx.SWFObjectUtil.prepUnload);
        org.openx.unloadSet = true
    }
}
if (!document.getElementById && document.all) {
    document.getElementById = function(a) {
        return document.all[a]
    }
}
var getQueryParamValue = org.openx.util.getRequestParameter;
var FlashObject = org.openx.SWFObject;
var SWFObject = org.openx.SWFObject;
document.mmm_fo = 1;
