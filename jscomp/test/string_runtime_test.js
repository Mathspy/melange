'use strict';

var Mt = require("./mt.js");
var List = require("../../lib/js/list.js");
var Bytes = require("../../lib/js/bytes.js");
var Caml_char = require("../../lib/js/caml_char.js");
var Caml_bytes = require("../../lib/js/caml_bytes.js");

var suites_0 = [
  "caml_is_printable",
  (function (param) {
      return {
              TAG: /* Eq */0,
              _0: Caml_char.caml_is_printable(/* "a" */97),
              _1: true
            };
    })
];

var suites_1 = {
  hd: [
    "caml_string_of_bytes",
    (function (param) {
        var match = List.split(List.map((function (x) {
                    var b = Caml_bytes.caml_create_bytes(1000);
                    Caml_bytes.caml_fill_bytes(b, 0, x, /* "c" */99);
                    return [
                            Caml_bytes.bytes_to_string(b),
                            Caml_bytes.bytes_to_string(Bytes.init(x, (function (param) {
                                        return /* "c" */99;
                                      })))
                          ];
                  }), {
                  hd: 1000,
                  tl: {
                    hd: 1024,
                    tl: {
                      hd: 1025,
                      tl: {
                        hd: 4095,
                        tl: {
                          hd: 4096,
                          tl: {
                            hd: 5000,
                            tl: {
                              hd: 10000,
                              tl: /* [] */0
                            }
                          }
                        }
                      }
                    }
                  }
                }));
        return {
                TAG: /* Eq */0,
                _0: match[0],
                _1: match[1]
              };
      })
  ],
  tl: /* [] */0
};

var suites = {
  hd: suites_0,
  tl: suites_1
};

Mt.from_pair_suites("String_runtime_test", suites);

var S;

var B;

exports.S = S;
exports.B = B;
exports.suites = suites;
/*  Not a pure module */
