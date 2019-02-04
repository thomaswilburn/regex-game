import "./regex-highlight.js";

var $ = (s, d = document) => Array.from(d.querySelectorAll(s));
$.one = (s, d = document) => d.querySelector(s);

var rh = $.one("regex-highlight");
var input = $.one("input");

input.addEventListener("keyup", function() {
  rh.pattern = input.value;
});