import value from "./value";

export default function(a, b) {
  var i = {},
      c = {},
      k;

  a = typeof a === "object" ? a : {};
  b = typeof b === "object" ? b : {};

  for (k in a) {
    if (k in b) {
      i[k] = value(a[k], b[k]);
    } else {
      c[k] = a[k];
    }
  }

  for (k in b) {
    if (!(k in a)) {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
};
