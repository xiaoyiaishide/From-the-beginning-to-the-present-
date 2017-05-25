var s;
(function (s) {
    s[s["a"] = 0] = "a";
    s[s["b"] = 1] = "b";
    s[s["c"] = 2] = "c";
})(s || (s = {}));
;
var s1 = s.a;
