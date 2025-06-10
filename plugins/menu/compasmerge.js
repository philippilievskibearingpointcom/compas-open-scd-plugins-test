import { Select as Rn } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import { TextField as Pn } from "@material/mwc-textfield";
import "@material/mwc-formfield";
import "@material/mwc-icon";
import { List as $n } from "@material/mwc-list";
import "@material/mwc-button";
import "@material/mwc-dialog";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const si = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, zn = (i, e, t = null, n = null) => {
  for (; e !== t; ) {
    const r = e.nextSibling;
    i.insertBefore(e, n), e = r;
  }
}, ot = (i, e, t = null) => {
  for (; e !== t; ) {
    const n = e.nextSibling;
    i.removeChild(e), e = n;
  }
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const de = `{{lit-${String(Math.random()).slice(2)}}}`, Fi = `<!--${de}-->`, ai = new RegExp(`${de}|${Fi}`), ze = "$lit$";
class Oi {
  constructor(e, t) {
    this.parts = [], this.element = t;
    const n = [], r = [], s = document.createTreeWalker(t.content, 133, null, !1);
    let a = 0, o = -1, c = 0;
    const { strings: p, values: { length: d } } = e;
    for (; c < d; ) {
      const l = s.nextNode();
      if (l === null) {
        s.currentNode = r.pop();
        continue;
      }
      if (o++, l.nodeType === 1) {
        if (l.hasAttributes()) {
          const b = l.attributes, { length: v } = b;
          let h = 0;
          for (let S = 0; S < v; S++)
            oi(b[S].name, ze) && h++;
          for (; h-- > 0; ) {
            const S = p[c], x = Et.exec(S)[2], w = x.toLowerCase() + ze, I = l.getAttribute(w);
            l.removeAttribute(w);
            const R = I.split(ai);
            this.parts.push({ type: "attribute", index: o, name: x, strings: R }), c += R.length - 1;
          }
        }
        l.tagName === "TEMPLATE" && (r.push(l), s.currentNode = l.content);
      } else if (l.nodeType === 3) {
        const b = l.data;
        if (b.indexOf(de) >= 0) {
          const v = l.parentNode, h = b.split(ai), S = h.length - 1;
          for (let x = 0; x < S; x++) {
            let w, I = h[x];
            if (I === "")
              w = ne();
            else {
              const R = Et.exec(I);
              R !== null && oi(R[2], ze) && (I = I.slice(0, R.index) + R[1] + R[2].slice(0, -ze.length) + R[3]), w = document.createTextNode(I);
            }
            v.insertBefore(w, l), this.parts.push({ type: "node", index: ++o });
          }
          h[S] === "" ? (v.insertBefore(ne(), l), n.push(l)) : l.data = h[S], c += S;
        }
      } else if (l.nodeType === 8)
        if (l.data === de) {
          const b = l.parentNode;
          (l.previousSibling === null || o === a) && (o++, b.insertBefore(ne(), l)), a = o, this.parts.push({ type: "node", index: o }), l.nextSibling === null ? l.data = "" : (n.push(l), o--), c++;
        } else {
          let b = -1;
          for (; (b = l.data.indexOf(de, b + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), c++;
        }
    }
    for (const l of n)
      l.parentNode.removeChild(l);
  }
}
const oi = (i, e) => {
  const t = i.length - e.length;
  return t >= 0 && i.slice(t) === e;
}, Mi = (i) => i.index !== -1, ne = () => document.createComment(""), Et = (
  // eslint-disable-next-line no-control-regex
  /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/
);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const qt = 133;
function Vi(i, e) {
  const { element: { content: t }, parts: n } = i, r = document.createTreeWalker(t, qt, null, !1);
  let s = Fe(n), a = n[s], o = -1, c = 0;
  const p = [];
  let d = null;
  for (; r.nextNode(); ) {
    o++;
    const l = r.currentNode;
    for (l.previousSibling === d && (d = null), e.has(l) && (p.push(l), d === null && (d = l)), d !== null && c++; a !== void 0 && a.index === o; )
      a.index = d !== null ? -1 : a.index - c, s = Fe(n, s), a = n[s];
  }
  p.forEach((l) => l.parentNode.removeChild(l));
}
const Fn = (i) => {
  let e = i.nodeType === 11 ? 0 : 1;
  const t = document.createTreeWalker(i, qt, null, !1);
  for (; t.nextNode(); )
    e++;
  return e;
}, Fe = (i, e = -1) => {
  for (let t = e + 1; t < i.length; t++) {
    const n = i[t];
    if (Mi(n))
      return t;
  }
  return -1;
};
function On(i, e, t = null) {
  const { element: { content: n }, parts: r } = i;
  if (t == null) {
    n.appendChild(e);
    return;
  }
  const s = document.createTreeWalker(n, qt, null, !1);
  let a = Fe(r), o = 0, c = -1;
  for (; s.nextNode(); )
    for (c++, s.currentNode === t && (o = Fn(e), t.parentNode.insertBefore(e, t)); a !== -1 && r[a].index === c; ) {
      if (o > 0) {
        for (; a !== -1; )
          r[a].index += o, a = Fe(r, a);
        return;
      }
      a = Fe(r, a);
    }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Hi = /* @__PURE__ */ new WeakMap(), Ge = (i) => (...e) => {
  const t = i(...e);
  return Hi.set(t, !0), t;
}, Ve = (i) => typeof i == "function" && Hi.has(i);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const ie = {}, Ct = {};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class At {
  constructor(e, t, n) {
    this.__parts = [], this.template = e, this.processor = t, this.options = n;
  }
  update(e) {
    let t = 0;
    for (const n of this.__parts)
      n !== void 0 && n.setValue(e[t]), t++;
    for (const n of this.__parts)
      n !== void 0 && n.commit();
  }
  _clone() {
    const e = si ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), t = [], n = this.template.parts, r = document.createTreeWalker(e, 133, null, !1);
    let s = 0, a = 0, o, c = r.nextNode();
    for (; s < n.length; ) {
      if (o = n[s], !Mi(o)) {
        this.__parts.push(void 0), s++;
        continue;
      }
      for (; a < o.index; )
        a++, c.nodeName === "TEMPLATE" && (t.push(c), r.currentNode = c.content), (c = r.nextNode()) === null && (r.currentNode = t.pop(), c = r.nextNode());
      if (o.type === "node") {
        const p = this.processor.handleTextExpression(this.options);
        p.insertAfterNode(c.previousSibling), this.__parts.push(p);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(c, o.name, o.strings, this.options));
      s++;
    }
    return si && (document.adoptNode(e), customElements.upgrade(e)), e;
  }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const ci = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (i) => i }), Mn = ` ${de} `;
class Ui {
  constructor(e, t, n, r) {
    this.strings = e, this.values = t, this.type = n, this.processor = r;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */
  getHTML() {
    const e = this.strings.length - 1;
    let t = "", n = !1;
    for (let r = 0; r < e; r++) {
      const s = this.strings[r], a = s.lastIndexOf("<!--");
      n = (a > -1 || n) && s.indexOf("-->", a + 1) === -1;
      const o = Et.exec(s);
      o === null ? t += s + (n ? Mn : Fi) : t += s.substr(0, o.index) + o[1] + o[2] + ze + o[3] + de;
    }
    return t += this.strings[e], t;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let t = this.getHTML();
    return ci !== void 0 && (t = ci.createHTML(t)), e.innerHTML = t, e;
  }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const jt = (i) => i === null || !(typeof i == "object" || typeof i == "function"), It = (i) => Array.isArray(i) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(i && i[Symbol.iterator]);
class Bi {
  constructor(e, t, n) {
    this.dirty = !0, this.element = e, this.name = t, this.strings = n, this.parts = [];
    for (let r = 0; r < n.length - 1; r++)
      this.parts[r] = this._createPart();
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */
  _createPart() {
    return new Le(this);
  }
  _getValue() {
    const e = this.strings, t = e.length - 1, n = this.parts;
    if (t === 1 && e[0] === "" && e[1] === "") {
      const s = n[0].value;
      if (typeof s == "symbol")
        return String(s);
      if (typeof s == "string" || !It(s))
        return s;
    }
    let r = "";
    for (let s = 0; s < t; s++) {
      r += e[s];
      const a = n[s];
      if (a !== void 0) {
        const o = a.value;
        if (jt(o) || !It(o))
          r += typeof o == "string" ? o : String(o);
        else
          for (const c of o)
            r += typeof c == "string" ? c : String(c);
      }
    }
    return r += e[t], r;
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
  }
}
class Le {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== ie && (!jt(e) || e !== this.value) && (this.value = e, Ve(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; Ve(this.value); ) {
      const e = this.value;
      this.value = ie, e(this);
    }
    this.value !== ie && this.committer.commit();
  }
}
class Ee {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(ne()), this.endNode = e.appendChild(ne());
  }
  /**
   * Inserts this part after the `ref` node (between `ref` and `ref`'s next
   * sibling). Both `ref` and its next sibling must be static, unchanging nodes
   * such as those that appear in a literal section of a template.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterNode(e) {
    this.startNode = e, this.endNode = e.nextSibling;
  }
  /**
   * Appends this part into a parent part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendIntoPart(e) {
    e.__insert(this.startNode = ne()), e.__insert(this.endNode = ne());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = ne()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; Ve(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = ie, t(this);
    }
    const e = this.__pendingValue;
    e !== ie && (jt(e) ? e !== this.value && this.__commitText(e) : e instanceof Ui ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : It(e) ? this.__commitIterable(e) : e === Ct ? (this.value = Ct, this.clear()) : this.__commitText(e));
  }
  __insert(e) {
    this.endNode.parentNode.insertBefore(e, this.endNode);
  }
  __commitNode(e) {
    this.value !== e && (this.clear(), this.__insert(e), this.value = e);
  }
  __commitText(e) {
    const t = this.startNode.nextSibling;
    e = e ?? "";
    const n = typeof e == "string" ? e : String(e);
    t === this.endNode.previousSibling && t.nodeType === 3 ? t.data = n : this.__commitNode(document.createTextNode(n)), this.value = e;
  }
  __commitTemplateResult(e) {
    const t = this.options.templateFactory(e);
    if (this.value instanceof At && this.value.template === t)
      this.value.update(e.values);
    else {
      const n = new At(t, e.processor, this.options), r = n._clone();
      n.update(e.values), this.__commitNode(r), this.value = n;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const t = this.value;
    let n = 0, r;
    for (const s of e)
      r = t[n], r === void 0 && (r = new Ee(this.options), t.push(r), n === 0 ? r.appendIntoPart(this) : r.insertAfterPart(t[n - 1])), r.setValue(s), r.commit(), n++;
    n < t.length && (t.length = n, this.clear(r && r.endNode));
  }
  clear(e = this.startNode) {
    ot(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class Vn {
  constructor(e, t, n) {
    if (this.value = void 0, this.__pendingValue = void 0, n.length !== 2 || n[0] !== "" || n[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = t, this.strings = n;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; Ve(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = ie, t(this);
    }
    if (this.__pendingValue === ie)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = ie;
  }
}
class Hn extends Bi {
  constructor(e, t, n) {
    super(e, t, n), this.single = n.length === 2 && n[0] === "" && n[1] === "";
  }
  _createPart() {
    return new Wt(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}
class Wt extends Le {
}
let Gi = !1;
(() => {
  try {
    const i = {
      get capture() {
        return Gi = !0, !1;
      }
    };
    window.addEventListener("test", i, i), window.removeEventListener("test", i, i);
  } catch {
  }
})();
class Un {
  constructor(e, t, n) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = t, this.eventContext = n, this.__boundHandleEvent = (r) => this.handleEvent(r);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; Ve(this.__pendingValue); ) {
      const s = this.__pendingValue;
      this.__pendingValue = ie, s(this);
    }
    if (this.__pendingValue === ie)
      return;
    const e = this.__pendingValue, t = this.value, n = e == null || t != null && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive), r = e != null && (t == null || n);
    n && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), r && (this.__options = Bn(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = ie;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
}
const Bn = (i) => i && (Gi ? { capture: i.capture, passive: i.passive, once: i.once } : i.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
function Gn(i) {
  let e = He.get(i.type);
  e === void 0 && (e = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, He.set(i.type, e));
  let t = e.stringsArray.get(i.strings);
  if (t !== void 0)
    return t;
  const n = i.strings.join(de);
  return t = e.keyString.get(n), t === void 0 && (t = new Oi(i, i.getTemplateElement()), e.keyString.set(n, t)), e.stringsArray.set(i.strings, t), t;
}
const He = /* @__PURE__ */ new Map();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Ne = /* @__PURE__ */ new WeakMap(), qn = (i, e, t) => {
  let n = Ne.get(e);
  n === void 0 && (ot(e, e.firstChild), Ne.set(e, n = new Ee(Object.assign({ templateFactory: Gn }, t))), n.appendInto(e)), n.setValue(i), n.commit();
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class jn {
  /**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */
  handleAttributeExpressions(e, t, n, r) {
    const s = t[0];
    return s === "." ? new Hn(e, t.slice(1), n).parts : s === "@" ? [new Un(e, t.slice(1), r.eventContext)] : s === "?" ? [new Vn(e, t.slice(1), n)] : new Bi(e, t, n).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(e) {
    return new Ee(e);
  }
}
const Wn = new jn();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
typeof window < "u" && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
const y = (i, ...e) => new Ui(i, e, "html", Wn);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const qi = (i, e) => `${i}--${e}`;
let nt = !0;
typeof window.ShadyCSS > "u" ? nt = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), nt = !1);
const Kn = (i) => (e) => {
  const t = qi(e.type, i);
  let n = He.get(t);
  n === void 0 && (n = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, He.set(t, n));
  let r = n.stringsArray.get(e.strings);
  if (r !== void 0)
    return r;
  const s = e.strings.join(de);
  if (r = n.keyString.get(s), r === void 0) {
    const a = e.getTemplateElement();
    nt && window.ShadyCSS.prepareTemplateDom(a, i), r = new Oi(e, a), n.keyString.set(s, r);
  }
  return n.stringsArray.set(e.strings, r), r;
}, Xn = ["html", "svg"], Zn = (i) => {
  Xn.forEach((e) => {
    const t = He.get(qi(e, i));
    t !== void 0 && t.keyString.forEach((n) => {
      const { element: { content: r } } = n, s = /* @__PURE__ */ new Set();
      Array.from(r.querySelectorAll("style")).forEach((a) => {
        s.add(a);
      }), Vi(n, s);
    });
  });
}, ji = /* @__PURE__ */ new Set(), Qn = (i, e, t) => {
  ji.add(i);
  const n = t ? t.element : document.createElement("template"), r = e.querySelectorAll("style"), { length: s } = r;
  if (s === 0) {
    window.ShadyCSS.prepareTemplateStyles(n, i);
    return;
  }
  const a = document.createElement("style");
  for (let p = 0; p < s; p++) {
    const d = r[p];
    d.parentNode.removeChild(d), a.textContent += d.textContent;
  }
  Zn(i);
  const o = n.content;
  t ? On(t, a, o.firstChild) : o.insertBefore(a, o.firstChild), window.ShadyCSS.prepareTemplateStyles(n, i);
  const c = o.querySelector("style");
  if (window.ShadyCSS.nativeShadow && c !== null)
    e.insertBefore(c.cloneNode(!0), e.firstChild);
  else if (t) {
    o.insertBefore(a, o.firstChild);
    const p = /* @__PURE__ */ new Set();
    p.add(a), Vi(t, p);
  }
}, Jn = (i, e, t) => {
  if (!t || typeof t != "object" || !t.scopeName)
    throw new Error("The `scopeName` option is required.");
  const n = t.scopeName, r = Ne.has(e), s = nt && e.nodeType === 11 && !!e.host, a = s && !ji.has(n), o = a ? document.createDocumentFragment() : e;
  if (qn(i, o, Object.assign({ templateFactory: Kn(n) }, t)), a) {
    const c = Ne.get(o);
    Ne.delete(o);
    const p = c.value instanceof At ? c.value.template : void 0;
    Qn(n, o, p), ot(e, e.firstChild), e.appendChild(o), Ne.set(e, c);
  }
  !r && s && window.ShadyCSS.styleElement(e.host);
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var Wi;
window.JSCompiler_renameProperty = (i, e) => i;
const Nt = {
  toAttribute(i, e) {
    switch (e) {
      case Boolean:
        return i ? "" : null;
      case Object:
      case Array:
        return i == null ? i : JSON.stringify(i);
    }
    return i;
  },
  fromAttribute(i, e) {
    switch (e) {
      case Boolean:
        return i !== null;
      case Number:
        return i === null ? null : Number(i);
      case Object:
      case Array:
        return JSON.parse(i);
    }
    return i;
  }
}, Ki = (i, e) => e !== i && (e === e || i === i), ft = {
  attribute: !0,
  type: String,
  converter: Nt,
  reflect: !1,
  hasChanged: Ki
}, gt = 1, bt = 4, yt = 8, vt = 16, Dt = "finalized";
class Xi extends HTMLElement {
  constructor() {
    super(), this.initialize();
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   */
  static get observedAttributes() {
    this.finalize();
    const e = [];
    return this._classProperties.forEach((t, n) => {
      const r = this._attributeNameForProperty(n, t);
      r !== void 0 && (this._attributeToPropertyMap.set(r, n), e.push(r));
    }), e;
  }
  /**
   * Ensures the private `_classProperties` property metadata is created.
   * In addition to `finalize` this is also called in `createProperty` to
   * ensure the `@property` decorator can add property metadata.
   */
  /** @nocollapse */
  static _ensureClassProperties() {
    if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
      this._classProperties = /* @__PURE__ */ new Map();
      const e = Object.getPrototypeOf(this)._classProperties;
      e !== void 0 && e.forEach((t, n) => this._classProperties.set(n, t));
    }
  }
  /**
   * Creates a property accessor on the element prototype if one does not exist
   * and stores a PropertyDeclaration for the property with the given options.
   * The property setter calls the property's `hasChanged` property option
   * or uses a strict identity check to determine whether or not to request
   * an update.
   *
   * This method may be overridden to customize properties; however,
   * when doing so, it's important to call `super.createProperty` to ensure
   * the property is setup correctly. This method calls
   * `getPropertyDescriptor` internally to get a descriptor to install.
   * To customize what properties do when they are get or set, override
   * `getPropertyDescriptor`. To customize the options for a property,
   * implement `createProperty` like this:
   *
   * static createProperty(name, options) {
   *   options = Object.assign(options, {myOption: true});
   *   super.createProperty(name, options);
   * }
   *
   * @nocollapse
   */
  static createProperty(e, t = ft) {
    if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e))
      return;
    const n = typeof e == "symbol" ? Symbol() : `__${e}`, r = this.getPropertyDescriptor(e, n, t);
    r !== void 0 && Object.defineProperty(this.prototype, e, r);
  }
  /**
   * Returns a property descriptor to be defined on the given named property.
   * If no descriptor is returned, the property will not become an accessor.
   * For example,
   *
   *   class MyElement extends LitElement {
   *     static getPropertyDescriptor(name, key, options) {
   *       const defaultDescriptor =
   *           super.getPropertyDescriptor(name, key, options);
   *       const setter = defaultDescriptor.set;
   *       return {
   *         get: defaultDescriptor.get,
   *         set(value) {
   *           setter.call(this, value);
   *           // custom action.
   *         },
   *         configurable: true,
   *         enumerable: true
   *       }
   *     }
   *   }
   *
   * @nocollapse
   */
  static getPropertyDescriptor(e, t, n) {
    return {
      // tslint:disable-next-line:no-any no symbol in index
      get() {
        return this[t];
      },
      set(r) {
        const s = this[e];
        this[t] = r, this.requestUpdateInternal(e, s, n);
      },
      configurable: !0,
      enumerable: !0
    };
  }
  /**
   * Returns the property options associated with the given property.
   * These options are defined with a PropertyDeclaration via the `properties`
   * object or the `@property` decorator and are registered in
   * `createProperty(...)`.
   *
   * Note, this method should be considered "final" and not overridden. To
   * customize the options for a given property, override `createProperty`.
   *
   * @nocollapse
   * @final
   */
  static getPropertyOptions(e) {
    return this._classProperties && this._classProperties.get(e) || ft;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const e = Object.getPrototypeOf(this);
    if (e.hasOwnProperty(Dt) || e.finalize(), this[Dt] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const t = this.properties, n = [
        ...Object.getOwnPropertyNames(t),
        ...typeof Object.getOwnPropertySymbols == "function" ? Object.getOwnPropertySymbols(t) : []
      ];
      for (const r of n)
        this.createProperty(r, t[r]);
    }
  }
  /**
   * Returns the property name for the given attribute `name`.
   * @nocollapse
   */
  static _attributeNameForProperty(e, t) {
    const n = t.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  /**
   * Returns true if a property should request an update.
   * Called when a property value is set and uses the `hasChanged`
   * option for the property if present or a strict identity check.
   * @nocollapse
   */
  static _valueHasChanged(e, t, n = Ki) {
    return n(e, t);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(e, t) {
    const n = t.type, r = t.converter || Nt, s = typeof r == "function" ? r : r.fromAttribute;
    return s ? s(e, n) : e;
  }
  /**
   * Returns the attribute value for the given property value. If this
   * returns undefined, the property will *not* be reflected to an attribute.
   * If this returns null, the attribute will be removed, otherwise the
   * attribute will be set to the value.
   * This uses the property's `reflect` and `type.toAttribute` property options.
   * @nocollapse
   */
  static _propertyValueToAttribute(e, t) {
    if (t.reflect === void 0)
      return;
    const n = t.type, r = t.converter;
    return (r && r.toAttribute || Nt.toAttribute)(e, n);
  }
  /**
   * Performs element initialization. By default captures any pre-set values for
   * registered properties.
   */
  initialize() {
    this._updateState = 0, this._updatePromise = new Promise((e) => this._enableUpdatingResolver = e), this._changedProperties = /* @__PURE__ */ new Map(), this._saveInstanceProperties(), this.requestUpdateInternal();
  }
  /**
   * Fixes any properties set on the instance before upgrade time.
   * Otherwise these would shadow the accessor and break these properties.
   * The properties are stored in a Map which is played back after the
   * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
   * (<=41), properties created for native platform properties like (`id` or
   * `name`) may not have default values set in the element constructor. On
   * these browsers native properties appear on instances and therefore their
   * default value will overwrite any element default (e.g. if the element sets
   * this.id = 'id' in the constructor, the 'id' will become '' since this is
   * the native platform default).
   */
  _saveInstanceProperties() {
    this.constructor._classProperties.forEach((e, t) => {
      if (this.hasOwnProperty(t)) {
        const n = this[t];
        delete this[t], this._instanceProperties || (this._instanceProperties = /* @__PURE__ */ new Map()), this._instanceProperties.set(t, n);
      }
    });
  }
  /**
   * Applies previously saved instance properties.
   */
  _applyInstanceProperties() {
    this._instanceProperties.forEach((e, t) => this[t] = e), this._instanceProperties = void 0;
  }
  connectedCallback() {
    this.enableUpdating();
  }
  enableUpdating() {
    this._enableUpdatingResolver !== void 0 && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0);
  }
  /**
   * Allows for `super.disconnectedCallback()` in extensions while
   * reserving the possibility of making non-breaking feature additions
   * when disconnecting at some point in the future.
   */
  disconnectedCallback() {
  }
  /**
   * Synchronizes property values when attributes change.
   */
  attributeChangedCallback(e, t, n) {
    t !== n && this._attributeToProperty(e, n);
  }
  _propertyToAttribute(e, t, n = ft) {
    const r = this.constructor, s = r._attributeNameForProperty(e, n);
    if (s !== void 0) {
      const a = r._propertyValueToAttribute(t, n);
      if (a === void 0)
        return;
      this._updateState = this._updateState | yt, a == null ? this.removeAttribute(s) : this.setAttribute(s, a), this._updateState = this._updateState & ~yt;
    }
  }
  _attributeToProperty(e, t) {
    if (this._updateState & yt)
      return;
    const n = this.constructor, r = n._attributeToPropertyMap.get(e);
    if (r !== void 0) {
      const s = n.getPropertyOptions(r);
      this._updateState = this._updateState | vt, this[r] = // tslint:disable-next-line:no-any
      n._propertyValueFromAttribute(t, s), this._updateState = this._updateState & ~vt;
    }
  }
  /**
   * This protected version of `requestUpdate` does not access or return the
   * `updateComplete` promise. This promise can be overridden and is therefore
   * not free to access.
   */
  requestUpdateInternal(e, t, n) {
    let r = !0;
    if (e !== void 0) {
      const s = this.constructor;
      n = n || s.getPropertyOptions(e), s._valueHasChanged(this[e], t, n.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), n.reflect === !0 && !(this._updateState & vt) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(e, n))) : r = !1;
    }
    !this._hasRequestedUpdate && r && (this._updatePromise = this._enqueueUpdate());
  }
  /**
   * Requests an update which is processed asynchronously. This should
   * be called when an element should update based on some state not triggered
   * by setting a property. In this case, pass no arguments. It should also be
   * called when manually implementing a property setter. In this case, pass the
   * property `name` and `oldValue` to ensure that any configured property
   * options are honored. Returns the `updateComplete` Promise which is resolved
   * when the update completes.
   *
   * @param name {PropertyKey} (optional) name of requesting property
   * @param oldValue {any} (optional) old value of requesting property
   * @returns {Promise} A Promise that is resolved when the update completes.
   */
  requestUpdate(e, t) {
    return this.requestUpdateInternal(e, t), this.updateComplete;
  }
  /**
   * Sets up the element to asynchronously update.
   */
  async _enqueueUpdate() {
    this._updateState = this._updateState | bt;
    try {
      await this._updatePromise;
    } catch {
    }
    const e = this.performUpdate();
    return e != null && await e, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & bt;
  }
  get hasUpdated() {
    return this._updateState & gt;
  }
  /**
   * Performs an element update. Note, if an exception is thrown during the
   * update, `firstUpdated` and `updated` will not be called.
   *
   * You can override this method to change the timing of updates. If this
   * method is overridden, `super.performUpdate()` must be called.
   *
   * For instance, to schedule updates to occur just before the next frame:
   *
   * ```
   * protected async performUpdate(): Promise<unknown> {
   *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
   *   super.performUpdate();
   * }
   * ```
   */
  performUpdate() {
    if (!this._hasRequestedUpdate)
      return;
    this._instanceProperties && this._applyInstanceProperties();
    let e = !1;
    const t = this._changedProperties;
    try {
      e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated();
    } catch (n) {
      throw e = !1, this._markUpdated(), n;
    }
    e && (this._updateState & gt || (this._updateState = this._updateState | gt, this.firstUpdated(t)), this.updated(t));
  }
  _markUpdated() {
    this._changedProperties = /* @__PURE__ */ new Map(), this._updateState = this._updateState & ~bt;
  }
  /**
   * Returns a Promise that resolves when the element has completed updating.
   * The Promise value is a boolean that is `true` if the element completed the
   * update without triggering another update. The Promise result is `false` if
   * a property was set inside `updated()`. If the Promise is rejected, an
   * exception was thrown during the update.
   *
   * To await additional asynchronous work, override the `_getUpdateComplete`
   * method. For example, it is sometimes useful to await a rendered element
   * before fulfilling this Promise. To do this, first await
   * `super._getUpdateComplete()`, then any subsequent state.
   *
   * @returns {Promise} The Promise returns a boolean that indicates if the
   * update resolved without triggering another update.
   */
  get updateComplete() {
    return this._getUpdateComplete();
  }
  /**
   * Override point for the `updateComplete` promise.
   *
   * It is not safe to override the `updateComplete` getter directly due to a
   * limitation in TypeScript which means it is not possible to call a
   * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
   * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
   * This method should be overridden instead. For example:
   *
   *   class MyElement extends LitElement {
   *     async _getUpdateComplete() {
   *       await super._getUpdateComplete();
   *       await this._myChild.updateComplete;
   *     }
   *   }
   * @deprecated Override `getUpdateComplete()` instead for forward
   *     compatibility with `lit-element` 3.0 / `@lit/reactive-element`.
   */
  _getUpdateComplete() {
    return this.getUpdateComplete();
  }
  /**
   * Override point for the `updateComplete` promise.
   *
   * It is not safe to override the `updateComplete` getter directly due to a
   * limitation in TypeScript which means it is not possible to call a
   * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
   * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
   * This method should be overridden instead. For example:
   *
   *   class MyElement extends LitElement {
   *     async getUpdateComplete() {
   *       await super.getUpdateComplete();
   *       await this._myChild.updateComplete;
   *     }
   *   }
   */
  getUpdateComplete() {
    return this._updatePromise;
  }
  /**
   * Controls whether or not `update` should be called when the element requests
   * an update. By default, this method always returns `true`, but this can be
   * customized to control when to update.
   *
   * @param _changedProperties Map of changed properties with old values
   */
  shouldUpdate(e) {
    return !0;
  }
  /**
   * Updates the element. This method reflects property values to attributes.
   * It can be overridden to render and keep updated element DOM.
   * Setting properties inside this method will *not* trigger
   * another update.
   *
   * @param _changedProperties Map of changed properties with old values
   */
  update(e) {
    this._reflectingProperties !== void 0 && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach((t, n) => this._propertyToAttribute(n, this[n], t)), this._reflectingProperties = void 0), this._markUpdated();
  }
  /**
   * Invoked whenever the element is updated. Implement to perform
   * post-updating tasks via DOM APIs, for example, focusing an element.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   */
  updated(e) {
  }
  /**
   * Invoked when the element is first updated. Implement to perform one time
   * work on the element after update.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   */
  firstUpdated(e) {
  }
}
Wi = Dt;
Xi[Wi] = !0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Yn = (i, e) => (window.customElements.define(i, e), e), er = (i, e) => {
  const { kind: t, elements: n } = e;
  return {
    kind: t,
    elements: n,
    // This callback is called once the class is otherwise fully defined
    finisher(r) {
      window.customElements.define(i, r);
    }
  };
}, W = (i) => (e) => typeof e == "function" ? Yn(i, e) : er(i, e), tr = (i, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), { finisher(t) {
  t.createProperty(e.key, i);
} }) : {
  kind: "field",
  key: Symbol(),
  placement: "own",
  descriptor: {},
  // When @babel/plugin-proposal-decorators implements initializers,
  // do this instead of the initializer below. See:
  // https://github.com/babel/babel/issues/9260 extras: [
  //   {
  //     kind: 'initializer',
  //     placement: 'own',
  //     initializer: descriptor.initializer,
  //   }
  // ],
  initializer() {
    typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
  },
  finisher(t) {
    t.createProperty(e.key, i);
  }
}, ir = (i, e, t) => {
  e.constructor.createProperty(t, i);
};
function m(i) {
  return (e, t) => t !== void 0 ? ir(i, e, t) : tr(i, e);
}
function nr(i) {
  return m({ attribute: !1, hasChanged: void 0 });
}
const C = (i) => nr();
function V(i, e) {
  return (t, n) => {
    const r = {
      get() {
        return this.renderRoot.querySelector(i);
      },
      enumerable: !0,
      configurable: !0
    };
    return n !== void 0 ? Kt(r, t, n) : Xt(r, t);
  };
}
function Zi(i) {
  return (e, t) => {
    const n = {
      async get() {
        return await this.updateComplete, this.renderRoot.querySelector(i);
      },
      enumerable: !0,
      configurable: !0
    };
    return t !== void 0 ? Kt(n, e, t) : Xt(n, e);
  };
}
const Kt = (i, e, t) => {
  Object.defineProperty(e, t, i);
}, Xt = (i, e) => ({
  kind: "method",
  placement: "prototype",
  key: e.key,
  descriptor: i
}), rr = (i, e) => Object.assign(Object.assign({}, e), { finisher(t) {
  Object.assign(t.prototype[e.key], i);
} }), sr = (
  // tslint:disable-next-line:no-any legacy decorator
  (i, e, t) => {
    Object.assign(e[t], i);
  }
);
function ar(i) {
  return (e, t) => t !== void 0 ? sr(i, e, t) : rr(i, e);
}
const di = Element.prototype, or = di.msMatchesSelector || di.webkitMatchesSelector;
function Qi(i = "", e = !1, t = "") {
  return (n, r) => {
    const s = {
      get() {
        const a = `slot${i ? `[name=${i}]` : ":not([name])"}`, o = this.renderRoot.querySelector(a);
        let c = o && o.assignedNodes({ flatten: e });
        return c && t && (c = c.filter((p) => p.nodeType === Node.ELEMENT_NODE && // tslint:disable-next-line:no-any testing existence on older browsers
        (p.matches ? p.matches(t) : or.call(p, t)))), c;
      },
      enumerable: !0,
      configurable: !0
    };
    return r !== void 0 ? Kt(s, n, r) : Xt(s, n);
  };
}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Tt = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Zt = Symbol();
class Qt {
  constructor(e, t) {
    if (t !== Zt)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (Tt ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const Jt = (i) => new Qt(String(i), Zt), cr = (i) => {
  if (i instanceof Qt)
    return i.cssText;
  if (typeof i == "number")
    return i;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${i}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
}, le = (i, ...e) => {
  const t = e.reduce((n, r, s) => n + cr(r) + i[s + 1], i[0]);
  return new Qt(t, Zt);
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions || (window.litElementVersions = [])).push("2.5.1");
const li = {};
class ee extends Xi {
  /**
   * Return the array of styles to apply to the element.
   * Override this method to integrate into a style management system.
   *
   * @nocollapse
   */
  static getStyles() {
    return this.styles;
  }
  /** @nocollapse */
  static _getUniqueStyles() {
    if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this)))
      return;
    const e = this.getStyles();
    if (Array.isArray(e)) {
      const t = (s, a) => s.reduceRight((o, c) => (
        // Note: On IE set.add() does not return the set
        Array.isArray(c) ? t(c, o) : (o.add(c), o)
      ), a), n = t(e, /* @__PURE__ */ new Set()), r = [];
      n.forEach((s) => r.unshift(s)), this._styles = r;
    } else
      this._styles = e === void 0 ? [] : [e];
    this._styles = this._styles.map((t) => {
      if (t instanceof CSSStyleSheet && !Tt) {
        const n = Array.prototype.slice.call(t.cssRules).reduce((r, s) => r + s.cssText, "");
        return Jt(n);
      }
      return t;
    });
  }
  /**
   * Performs element initialization. By default this calls
   * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
   * captures any pre-set values for registered properties.
   */
  initialize() {
    super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles();
  }
  /**
   * Returns the node into which the element should render and by default
   * creates and returns an open shadowRoot. Implement to customize where the
   * element's DOM is rendered. For example, to render into the element's
   * childNodes, return `this`.
   * @returns {Element|DocumentFragment} Returns a node into which to render.
   */
  createRenderRoot() {
    return this.attachShadow(this.constructor.shadowRootOptions);
  }
  /**
   * Applies styling to the element shadowRoot using the [[`styles`]]
   * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
   * available and will fallback otherwise. When Shadow DOM is polyfilled,
   * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
   * is available but `adoptedStyleSheets` is not, styles are appended to the
   * end of the `shadowRoot` to [mimic spec
   * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
   */
  adoptStyles() {
    const e = this.constructor._styles;
    e.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((t) => t.cssText), this.localName) : Tt ? this.renderRoot.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
  }
  connectedCallback() {
    super.connectedCallback(), this.hasUpdated && window.ShadyCSS !== void 0 && window.ShadyCSS.styleElement(this);
  }
  /**
   * Updates the element. This method reflects property values to attributes
   * and calls `render` to render DOM via lit-html. Setting properties inside
   * this method will *not* trigger another update.
   * @param _changedProperties Map of changed properties with old values
   */
  update(e) {
    const t = this.render();
    super.update(e), t !== li && this.constructor.render(t, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((n) => {
      const r = document.createElement("style");
      r.textContent = n.cssText, this.renderRoot.appendChild(r);
    }));
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `NodePart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   */
  render() {
    return li;
  }
}
ee.finalized = !0;
ee.render = Jn;
ee.shadowRootOptions = { mode: "open" };
const dr = 1e3 * 60, Lt = "langChanged";
function lr(i, e, t) {
  return Object.entries(Rt(e || {})).reduce((n, [r, s]) => n.replace(new RegExp(`{{[  ]*${r}[  ]*}}`, "gm"), String(Rt(s))), i);
}
function pr(i, e) {
  const t = i.split(".");
  let n = e.strings;
  for (; n != null && t.length > 0; )
    n = n[t.shift()];
  return n != null ? n.toString() : null;
}
function Rt(i) {
  return typeof i == "function" ? i() : i;
}
const ur = () => ({
  loader: () => Promise.resolve({}),
  empty: (i) => `[${i}]`,
  lookup: pr,
  interpolate: lr,
  translationCache: {}
});
let Ue = ur();
function mr(i) {
  return Ue = Object.assign(Object.assign({}, Ue), i);
}
function hr(i) {
  window.dispatchEvent(new CustomEvent(Lt, { detail: i }));
}
function fr(i, e, t = Ue) {
  hr({
    previousStrings: t.strings,
    previousLang: t.lang,
    lang: t.lang = i,
    strings: t.strings = e
  });
}
function gr(i, e) {
  const t = (n) => i(n.detail);
  return window.addEventListener(Lt, t, e), () => window.removeEventListener(Lt, t);
}
async function br(i, e = Ue) {
  const t = await e.loader(i, e);
  e.translationCache = {}, fr(i, t, e);
}
function q(i, e, t = Ue) {
  let n = t.translationCache[i] || (t.translationCache[i] = t.lookup(i, t) || t.empty(i, t));
  return e = e != null ? Rt(e) : null, e != null ? t.interpolate(n, e, t) : n;
}
function Ji(i) {
  return i instanceof Ee ? i.startNode.isConnected : i instanceof Le ? i.committer.element.isConnected : i.element.isConnected;
}
function yr(i) {
  for (const [e] of i)
    Ji(e) || i.delete(e);
}
function vr(i) {
  "requestIdleCallback" in window ? window.requestIdleCallback(i) : setTimeout(i);
}
function Sr(i, e) {
  setInterval(() => vr(() => yr(i)), e);
}
const Yt = /* @__PURE__ */ new Map();
function xr() {
  gr((i) => {
    for (const [e, t] of Yt)
      Ji(e) && Yi(e, t, i);
  });
}
xr();
Sr(Yt, dr);
function Yi(i, e, t) {
  const n = e(t);
  i.value !== n && (i.setValue(n), i.commit());
}
const kr = Ge((i) => (e) => {
  Yt.set(e, i), Yi(e, i);
}), P = (i, e, t) => kr(() => q(i, e, t));
var Pt = function(i, e) {
  return Pt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }, Pt(i, e);
};
function wr(i, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Pt(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Oe = function() {
  return Oe = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
  }, Oe.apply(this, arguments);
};
function u(i, e, t, n) {
  var r = arguments.length, s = r < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, t) : n, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(i, e, t, n);
  else for (var o = i.length - 1; o >= 0; o--) (a = i[o]) && (s = (r < 3 ? a(s) : r > 3 ? a(e, t, s) : a(e, t)) || s);
  return r > 3 && s && Object.defineProperty(e, t, s), s;
}
function We(i) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && i[e], n = 0;
  if (t) return t.call(i);
  if (i && typeof i.length == "number") return {
    next: function() {
      return i && n >= i.length && (i = void 0), { value: i && i[n++], done: !i };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function _r(i, e) {
  var t = i.matches || i.webkitMatchesSelector || i.msMatchesSelector;
  return t.call(i, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Er = (i) => i.nodeType === Node.ELEMENT_NODE, en = () => {
}, Cr = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", en, Cr);
document.removeEventListener("x", en);
const tn = (i = window.document) => {
  let e = i.activeElement;
  const t = [];
  if (!e)
    return t;
  for (; e && (t.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return t;
}, Ar = (i) => {
  const e = tn();
  if (!e.length)
    return !1;
  const t = e[e.length - 1], n = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let r = [];
  const s = (a) => {
    r = a.composedPath();
  };
  return document.body.addEventListener("check-if-focused", s), t.dispatchEvent(n), document.body.removeEventListener("check-if-focused", s), r.indexOf(i) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ei extends ee {
  click() {
    if (this.mdcRoot) {
      this.mdcRoot.focus(), this.mdcRoot.click();
      return;
    }
    super.click();
  }
  /**
   * Create and attach the MDC Foundation to the instance
   */
  createFoundation() {
    this.mdcFoundation !== void 0 && this.mdcFoundation.destroy(), this.mdcFoundationClass && (this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter()), this.mdcFoundation.init());
  }
  firstUpdated() {
    this.createFoundation();
  }
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var nn = (
  /** @class */
  function() {
    function i(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(i, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.init = function() {
    }, i.prototype.destroy = function() {
    }, i;
  }()
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ir = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Nr = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, pi = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function Dr(i, e, t) {
  if (!i)
    return { x: 0, y: 0 };
  var n = e.x, r = e.y, s = n + t.left, a = r + t.top, o, c;
  if (i.type === "touchstart") {
    var p = i;
    o = p.changedTouches[0].pageX - s, c = p.changedTouches[0].pageY - a;
  } else {
    var d = i;
    o = d.pageX - s, c = d.pageY - a;
  }
  return { x: o, y: c };
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ui = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], mi = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Ke = [], Tr = (
  /** @class */
  function(i) {
    wr(e, i);
    function e(t) {
      var n = i.call(this, Oe(Oe({}, e.defaultAdapter), t)) || this;
      return n.activationAnimationHasEnded = !1, n.activationTimer = 0, n.fgDeactivationRemovalTimer = 0, n.fgScale = "0", n.frame = { width: 0, height: 0 }, n.initialSize = 0, n.layoutFrame = 0, n.maxRadius = 0, n.unboundedCoords = { left: 0, top: 0 }, n.activationState = n.defaultActivationState(), n.activationTimerCallback = function() {
        n.activationAnimationHasEnded = !0, n.runDeactivationUXLogicIfReady();
      }, n.activateHandler = function(r) {
        n.activateImpl(r);
      }, n.deactivateHandler = function() {
        n.deactivateImpl();
      }, n.focusHandler = function() {
        n.handleFocus();
      }, n.blurHandler = function() {
        n.handleBlur();
      }, n.resizeHandler = function() {
        n.layout();
      }, n;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ir;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Nr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return pi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          browserSupportsCssVars: function() {
            return !0;
          },
          computeBoundingRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          containsEventTarget: function() {
            return !0;
          },
          deregisterDocumentInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          },
          deregisterResizeHandler: function() {
          },
          getWindowPageOffset: function() {
            return { x: 0, y: 0 };
          },
          isSurfaceActive: function() {
            return !0;
          },
          isSurfaceDisabled: function() {
            return !0;
          },
          isUnbounded: function() {
            return !0;
          },
          registerDocumentInteractionHandler: function() {
          },
          registerInteractionHandler: function() {
          },
          registerResizeHandler: function() {
          },
          removeClass: function() {
          },
          updateCssVariable: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var t = this, n = this.supportsPressRipple();
      if (this.registerRootHandlers(n), n) {
        var r = e.cssClasses, s = r.ROOT, a = r.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(s), t.adapter.isUnbounded() && (t.adapter.addClass(a), t.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var t = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var n = e.cssClasses, r = n.ROOT, s = n.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.removeClass(r), t.adapter.removeClass(s), t.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, e.prototype.activate = function(t) {
      this.activateImpl(t);
    }, e.prototype.deactivate = function() {
      this.deactivateImpl();
    }, e.prototype.layout = function() {
      var t = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        t.layoutInternal(), t.layoutFrame = 0;
      });
    }, e.prototype.setUnbounded = function(t) {
      var n = e.cssClasses.UNBOUNDED;
      t ? this.adapter.addClass(n) : this.adapter.removeClass(n);
    }, e.prototype.handleFocus = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.removeClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.supportsPressRipple = function() {
      return this.adapter.browserSupportsCssVars();
    }, e.prototype.defaultActivationState = function() {
      return {
        activationEvent: void 0,
        hasDeactivationUXRun: !1,
        isActivated: !1,
        isProgrammatic: !1,
        wasActivatedByPointer: !1,
        wasElementMadeActive: !1
      };
    }, e.prototype.registerRootHandlers = function(t) {
      var n, r;
      if (t) {
        try {
          for (var s = We(ui), a = s.next(); !a.done; a = s.next()) {
            var o = a.value;
            this.adapter.registerInteractionHandler(o, this.activateHandler);
          }
        } catch (c) {
          n = { error: c };
        } finally {
          try {
            a && !a.done && (r = s.return) && r.call(s);
          } finally {
            if (n) throw n.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(t) {
      var n, r;
      if (t.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var s = We(mi), a = s.next(); !a.done; a = s.next()) {
            var o = a.value;
            this.adapter.registerDocumentInteractionHandler(o, this.deactivateHandler);
          }
        } catch (c) {
          n = { error: c };
        } finally {
          try {
            a && !a.done && (r = s.return) && r.call(s);
          } finally {
            if (n) throw n.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, n;
      try {
        for (var r = We(ui), s = r.next(); !s.done; s = r.next()) {
          var a = s.value;
          this.adapter.deregisterInteractionHandler(a, this.activateHandler);
        }
      } catch (o) {
        t = { error: o };
      } finally {
        try {
          s && !s.done && (n = r.return) && n.call(r);
        } finally {
          if (t) throw t.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var t, n;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var r = We(mi), s = r.next(); !s.done; s = r.next()) {
          var a = s.value;
          this.adapter.deregisterDocumentInteractionHandler(a, this.deactivateHandler);
        }
      } catch (o) {
        t = { error: o };
      } finally {
        try {
          s && !s.done && (n = r.return) && n.call(r);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var t = this, n = e.strings, r = Object.keys(n);
      r.forEach(function(s) {
        s.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(n[s], null);
      });
    }, e.prototype.activateImpl = function(t) {
      var n = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var r = this.activationState;
        if (!r.isActivated) {
          var s = this.previousActivationEvent, a = s && t !== void 0 && s.type !== t.type;
          if (!a) {
            r.isActivated = !0, r.isProgrammatic = t === void 0, r.activationEvent = t, r.wasActivatedByPointer = r.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var o = t !== void 0 && Ke.length > 0 && Ke.some(function(c) {
              return n.adapter.containsEventTarget(c);
            });
            if (o) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (Ke.push(t.target), this.registerDeactivationHandlers(t)), r.wasElementMadeActive = this.checkElementMadeActive(t), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ke = [], !r.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (r.wasElementMadeActive = n.checkElementMadeActive(t), r.wasElementMadeActive && n.animateActivation()), r.wasElementMadeActive || (n.activationState = n.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, n = e.strings, r = n.VAR_FG_TRANSLATE_START, s = n.VAR_FG_TRANSLATE_END, a = e.cssClasses, o = a.FG_DEACTIVATION, c = a.FG_ACTIVATION, p = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var d = "", l = "";
      if (!this.adapter.isUnbounded()) {
        var b = this.getFgTranslationCoordinates(), v = b.startPoint, h = b.endPoint;
        d = v.x + "px, " + v.y + "px", l = h.x + "px, " + h.y + "px";
      }
      this.adapter.updateCssVariable(r, d), this.adapter.updateCssVariable(s, l), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(o), this.adapter.computeBoundingRect(), this.adapter.addClass(c), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, p);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, n = t.activationEvent, r = t.wasActivatedByPointer, s;
      r ? s = Dr(n, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : s = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, s = {
        x: s.x - this.initialSize / 2,
        y: s.y - this.initialSize / 2
      };
      var a = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: s, endPoint: a };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var t = this, n = e.cssClasses.FG_DEACTIVATION, r = this.activationState, s = r.hasDeactivationUXRun, a = r.isActivated, o = s || !a;
      o && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(n), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(n);
      }, pi.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var t = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(t), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var t = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return t.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var t = this, n = this.activationState;
      if (n.isActivated) {
        var r = Oe({}, n);
        n.isProgrammatic ? (requestAnimationFrame(function() {
          t.animateDeactivation(r);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          t.activationState.hasDeactivationUXRun = !0, t.animateDeactivation(r), t.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(t) {
      var n = t.wasActivatedByPointer, r = t.wasElementMadeActive;
      (n || r) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var t = this;
      this.frame = this.adapter.computeBoundingRect();
      var n = Math.max(this.frame.height, this.frame.width), r = function() {
        var a = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return a + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? n : r();
      var s = Math.floor(n * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && s % 2 !== 0 ? this.initialSize = s - 1 : this.initialSize = s, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, n = t.VAR_FG_SIZE, r = t.VAR_LEFT, s = t.VAR_TOP, a = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(n, this.initialSize + "px"), this.adapter.updateCssVariable(a, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(s, this.unboundedCoords.top + "px"));
    }, e;
  }(nn)
);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Lr {
  constructor(e) {
    this.classes = /* @__PURE__ */ new Set(), this.changed = !1, this.element = e;
    const t = (e.getAttribute("class") || "").split(/\s+/);
    for (const n of t)
      this.classes.add(n);
  }
  add(e) {
    this.classes.add(e), this.changed = !0;
  }
  remove(e) {
    this.classes.delete(e), this.changed = !0;
  }
  commit() {
    if (this.changed) {
      let e = "";
      this.classes.forEach((t) => e += t + " "), this.element.setAttribute("class", e);
    }
  }
}
const hi = /* @__PURE__ */ new WeakMap(), ct = Ge((i) => (e) => {
  if (!(e instanceof Le) || e instanceof Wt || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: t } = e, { element: n } = t;
  let r = hi.get(e);
  r === void 0 && (n.setAttribute("class", t.strings.join(" ")), hi.set(e, r = /* @__PURE__ */ new Set()));
  const s = n.classList || new Lr(n);
  r.forEach((a) => {
    a in i || (s.remove(a), r.delete(a));
  });
  for (const a in i) {
    const o = i[a];
    o != r.has(a) && (o ? (s.add(a), r.add(a)) : (s.remove(a), r.delete(a)));
  }
  typeof s.commit == "function" && s.commit();
});
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const fi = /* @__PURE__ */ new WeakMap(), Rr = Ge((i) => (e) => {
  if (!(e instanceof Le) || e instanceof Wt || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: t } = e, { style: n } = t.element;
  let r = fi.get(e);
  r === void 0 && (n.cssText = t.strings.join(" "), fi.set(e, r = /* @__PURE__ */ new Set())), r.forEach((s) => {
    s in i || (r.delete(s), s.indexOf("-") === -1 ? n[s] = null : n.removeProperty(s));
  });
  for (const s in i)
    r.add(s), s.indexOf("-") === -1 ? n[s] = i[s] : n.setProperty(s, i[s]);
});
class L extends ei {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Tr;
  }
  get isActive() {
    return _r(this.parentElement || this, ":active");
  }
  createAdapter() {
    return {
      browserSupportsCssVars: () => !0,
      isUnbounded: () => this.unbounded,
      isSurfaceActive: () => this.isActive,
      isSurfaceDisabled: () => this.disabled,
      addClass: (e) => {
        switch (e) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = !0;
            break;
          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = !0;
            break;
          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = !0;
            break;
        }
      },
      removeClass: (e) => {
        switch (e) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = !1;
            break;
          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = !1;
            break;
          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = !1;
            break;
        }
      },
      containsEventTarget: () => !0,
      registerInteractionHandler: () => {
      },
      deregisterInteractionHandler: () => {
      },
      registerDocumentInteractionHandler: () => {
      },
      deregisterDocumentInteractionHandler: () => {
      },
      registerResizeHandler: () => {
      },
      deregisterResizeHandler: () => {
      },
      updateCssVariable: (e, t) => {
        switch (e) {
          case "--mdc-ripple-fg-scale":
            this.fgScale = t;
            break;
          case "--mdc-ripple-fg-size":
            this.fgSize = t;
            break;
          case "--mdc-ripple-fg-translate-end":
            this.translateEnd = t;
            break;
          case "--mdc-ripple-fg-translate-start":
            this.translateStart = t;
            break;
          case "--mdc-ripple-left":
            this.leftPos = t;
            break;
          case "--mdc-ripple-top":
            this.topPos = t;
            break;
        }
      },
      computeBoundingRect: () => (this.parentElement || this).getBoundingClientRect(),
      getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset })
    };
  }
  startPress(e) {
    this.waitForFoundation(() => {
      this.mdcFoundation.activate(e);
    });
  }
  endPress() {
    this.waitForFoundation(() => {
      this.mdcFoundation.deactivate();
    });
  }
  startFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleFocus();
    });
  }
  endFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleBlur();
    });
  }
  startHover() {
    this.hovering = !0;
  }
  endHover() {
    this.hovering = !1;
  }
  /**
   * Wait for the MDCFoundation to be created by `firstUpdated`
   */
  waitForFoundation(e) {
    this.mdcFoundation ? e() : this.updateComplete.then(e);
  }
  update(e) {
    e.has("disabled") && this.disabled && this.endHover(), super.update(e);
  }
  /** @soyTemplate */
  render() {
    const e = this.activated && (this.primary || !this.accent), t = this.selected && (this.primary || !this.accent), n = {
      "mdc-ripple-surface--accent": this.accent,
      "mdc-ripple-surface--primary--activated": e,
      "mdc-ripple-surface--accent--activated": this.accent && this.activated,
      "mdc-ripple-surface--primary--selected": t,
      "mdc-ripple-surface--accent--selected": this.accent && this.selected,
      "mdc-ripple-surface--disabled": this.disabled,
      "mdc-ripple-surface--hover": this.hovering,
      "mdc-ripple-surface--primary": this.primary,
      "mdc-ripple-surface--selected": this.selected,
      "mdc-ripple-upgraded--background-focused": this.bgFocused,
      "mdc-ripple-upgraded--foreground-activation": this.fgActivation,
      "mdc-ripple-upgraded--foreground-deactivation": this.fgDeactivation,
      "mdc-ripple-upgraded--unbounded": this.unbounded,
      "mdc-ripple-surface--internal-use-state-layer-custom-properties": this.internalUseStateLayerCustomProperties
    };
    return y`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${ct(n)}"
          style="${Rr({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
u([
  V(".mdc-ripple-surface")
], L.prototype, "mdcRoot", void 0);
u([
  m({ type: Boolean })
], L.prototype, "primary", void 0);
u([
  m({ type: Boolean })
], L.prototype, "accent", void 0);
u([
  m({ type: Boolean })
], L.prototype, "unbounded", void 0);
u([
  m({ type: Boolean })
], L.prototype, "disabled", void 0);
u([
  m({ type: Boolean })
], L.prototype, "activated", void 0);
u([
  m({ type: Boolean })
], L.prototype, "selected", void 0);
u([
  m({ type: Boolean })
], L.prototype, "internalUseStateLayerCustomProperties", void 0);
u([
  C()
], L.prototype, "hovering", void 0);
u([
  C()
], L.prototype, "bgFocused", void 0);
u([
  C()
], L.prototype, "fgActivation", void 0);
u([
  C()
], L.prototype, "fgDeactivation", void 0);
u([
  C()
], L.prototype, "fgScale", void 0);
u([
  C()
], L.prototype, "fgSize", void 0);
u([
  C()
], L.prototype, "translateStart", void 0);
u([
  C()
], L.prototype, "translateEnd", void 0);
u([
  C()
], L.prototype, "leftPos", void 0);
u([
  C()
], L.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Pr = le`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let $t = class extends L {
};
$t.styles = [Pr];
$t = u([
  W("mwc-ripple")
], $t);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ve = (i) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e, t) => {
    if (e.constructor._observers) {
      if (!e.constructor.hasOwnProperty("_observers")) {
        const n = e.constructor._observers;
        e.constructor._observers = /* @__PURE__ */ new Map(), n.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (r, s) => e.constructor._observers.set(s, r)
        );
      }
    } else {
      e.constructor._observers = /* @__PURE__ */ new Map();
      const n = e.updated;
      e.updated = function(r) {
        n.call(this, r), r.forEach((s, a) => {
          const c = this.constructor._observers.get(a);
          c !== void 0 && c.call(this, this[a], s);
        });
      };
    }
    e.constructor._observers.set(t, i);
  }
);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class rn {
  constructor(e) {
    this.startPress = (t) => {
      e().then((n) => {
        n && n.startPress(t);
      });
    }, this.endPress = () => {
      e().then((t) => {
        t && t.endPress();
      });
    }, this.startFocus = () => {
      e().then((t) => {
        t && t.startFocus();
      });
    }, this.endFocus = () => {
      e().then((t) => {
        t && t.endFocus();
      });
    }, this.startHover = () => {
      e().then((t) => {
        t && t.startHover();
      });
    }, this.endHover = () => {
      e().then((t) => {
        t && t.endHover();
      });
    };
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class F extends ee {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new rn(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
      {
        target: this,
        eventNames: ["click"],
        cb: () => {
          this.onClick();
        }
      },
      {
        target: this,
        eventNames: ["mouseenter"],
        cb: this.rippleHandlers.startHover
      },
      {
        target: this,
        eventNames: ["mouseleave"],
        cb: this.rippleHandlers.endHover
      },
      {
        target: this,
        eventNames: ["focus"],
        cb: this.rippleHandlers.startFocus
      },
      {
        target: this,
        eventNames: ["blur"],
        cb: this.rippleHandlers.endFocus
      },
      {
        target: this,
        eventNames: ["mousedown", "touchstart"],
        cb: (e) => {
          const t = e.type;
          this.onDown(t === "mousedown" ? "mouseup" : "touchend", e);
        }
      }
    ];
  }
  get text() {
    const e = this.textContent;
    return e ? e.trim() : "";
  }
  render() {
    const e = this.renderText(), t = this.graphic ? this.renderGraphic() : y``, n = this.hasMeta ? this.renderMeta() : y``;
    return y`
      ${this.renderRipple()}
      ${t}
      ${e}
      ${n}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? y`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? y`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return y`
      <span class="mdc-deprecated-list-item__graphic material-icons ${ct(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return y`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return y`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return y`<slot></slot>`;
  }
  renderTwoline() {
    return y`
      <span class="mdc-deprecated-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-deprecated-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `;
  }
  onClick() {
    this.fireRequestSelected(!this.selected, "interaction");
  }
  onDown(e, t) {
    const n = () => {
      window.removeEventListener(e, n), this.rippleHandlers.endPress();
    };
    window.addEventListener(e, n), this.rippleHandlers.startPress(t);
  }
  fireRequestSelected(e, t) {
    if (this.noninteractive)
      return;
    const n = new CustomEvent("request-selected", { bubbles: !0, composed: !0, detail: { source: t, selected: e } });
    this.dispatchEvent(n);
  }
  connectedCallback() {
    super.connectedCallback(), this.noninteractive || this.setAttribute("mwc-list-item", "");
    for (const e of this.listeners)
      for (const t of e.eventNames)
        e.target.addEventListener(t, e.cb, { passive: !0 });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const e of this.listeners)
      for (const t of e.eventNames)
        e.target.removeEventListener(t, e.cb);
    this._managingList && (this._managingList.debouncedLayout ? this._managingList.debouncedLayout(!0) : this._managingList.layout(!0));
  }
  // composed flag, event fire through shadow root and up through composed tree
  firstUpdated() {
    const e = new Event("list-item-rendered", { bubbles: !0, composed: !0 });
    this.dispatchEvent(e);
  }
}
u([
  V("slot")
], F.prototype, "slotElement", void 0);
u([
  Zi("mwc-ripple")
], F.prototype, "ripple", void 0);
u([
  m({ type: String })
], F.prototype, "value", void 0);
u([
  m({ type: String, reflect: !0 })
], F.prototype, "group", void 0);
u([
  m({ type: Number, reflect: !0 })
], F.prototype, "tabindex", void 0);
u([
  m({ type: Boolean, reflect: !0 }),
  ve(function(i) {
    i ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], F.prototype, "disabled", void 0);
u([
  m({ type: Boolean, reflect: !0 })
], F.prototype, "twoline", void 0);
u([
  m({ type: Boolean, reflect: !0 })
], F.prototype, "activated", void 0);
u([
  m({ type: String, reflect: !0 })
], F.prototype, "graphic", void 0);
u([
  m({ type: Boolean })
], F.prototype, "multipleGraphics", void 0);
u([
  m({ type: Boolean })
], F.prototype, "hasMeta", void 0);
u([
  m({ type: Boolean, reflect: !0 }),
  ve(function(i) {
    i ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], F.prototype, "noninteractive", void 0);
u([
  m({ type: Boolean, reflect: !0 }),
  ve(function(i) {
    const e = this.getAttribute("role"), t = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (t && i ? this.setAttribute("aria-selected", "true") : t && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(i, "property");
  })
], F.prototype, "selected", void 0);
u([
  C()
], F.prototype, "shouldRenderRipple", void 0);
u([
  C()
], F.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const sn = le`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let zt = class extends F {
};
zt.styles = [sn];
zt = u([
  W("mwc-list-item")
], zt);
var $r = Object.defineProperty, zr = Object.getOwnPropertyDescriptor, te = (i, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? zr(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (r = (n ? a(e, t, r) : a(r)) || r);
  return n && r && $r(e, t, r), r;
};
let Z = class extends Pn {
  constructor() {
    super(), this.nullable = !1, this.multipliers = [null, ""], this.multiplierIndex = 0, this.unit = "", this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get multiplier() {
    return this.unit == "" ? null : this.multipliers[this.multiplierIndex] ?? this.multipliers[0] ?? null;
  }
  set multiplier(i) {
    const e = this.multipliers.indexOf(i);
    e >= 0 && (this.multiplierIndex = e), this.suffix = (this.multiplier ?? "") + this.unit;
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(i) {
    !this.nullable || i === this.isNull || (this.isNull = i, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(i) {
    i === null ? this.null = !0 : (this.null = !1, this.value = i);
  }
  selectMultiplier(i) {
    this.multiplier = this.multipliers[i.detail.index];
  }
  enable() {
    this.nulled !== null && (this.value = this.nulled, this.nulled = null, this.helperPersistent = !1, this.disabled = !1);
  }
  disable() {
    this.nulled === null && (this.nulled = this.value, this.value = this.defaultValue, this.helperPersistent = !0, this.disabled = !0);
  }
  async firstUpdated() {
    await super.firstUpdated(), this.multiplierMenu && (this.multiplierMenu.anchor = this.multiplierButton ?? null);
  }
  checkValidity() {
    return this.reservedValues && this.reservedValues.some((i) => i === this.value) ? (this.setCustomValidity(q("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? y`<div style="position:relative;">
        <mwc-icon-button
          style="margin:5px;"
          icon="more"
          ?disabled=${this.null || this.disabledSwitch}
          @click=${() => this.multiplierMenu?.show()}
        ></mwc-icon-button>
        <mwc-menu
          @selected=${this.selectMultiplier}
          fixed
          .anchor=${this.multiplierButton ?? null}
          >${this.renderMulplierList()}</mwc-menu
        >
      </div>` : y``;
  }
  renderMulplierList() {
    return y`${this.multipliers.map(
      (i) => y`<mwc-list-item ?selected=${i === this.multiplier}
          >${i === null ? q("textfield.noMultiplier") : i}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? y`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : y``;
  }
  render() {
    return y`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        ${this.renderUnitSelector()}
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
te([
  m({ type: Boolean })
], Z.prototype, "nullable", 2);
te([
  m({ type: Array })
], Z.prototype, "multipliers", 2);
te([
  m({ type: String })
], Z.prototype, "multiplier", 1);
te([
  m({ type: String })
], Z.prototype, "unit", 2);
te([
  C()
], Z.prototype, "null", 1);
te([
  m({ type: String })
], Z.prototype, "maybeValue", 1);
te([
  m({ type: String })
], Z.prototype, "defaultValue", 2);
te([
  m({ type: Array })
], Z.prototype, "reservedValues", 2);
te([
  V("mwc-switch")
], Z.prototype, "nullSwitch", 2);
te([
  V("mwc-menu")
], Z.prototype, "multiplierMenu", 2);
te([
  V("mwc-icon-button")
], Z.prototype, "multiplierButton", 2);
Z = te([
  W("wizard-textfield")
], Z);
var Fr = Object.defineProperty, Or = Object.getOwnPropertyDescriptor, Ce = (i, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? Or(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (r = (n ? a(e, t, r) : a(r)) || r);
  return n && r && Fr(e, t, r), r;
};
let be = class extends Rn {
  constructor() {
    super(), this.nullable = !1, this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(i) {
    !this.nullable || i === this.isNull || (this.isNull = i, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(i) {
    i === null ? this.null = !0 : (this.null = !1, this.value = i);
  }
  enable() {
    this.nulled !== null && (this.value = this.nulled, this.nulled = null, this.disabled = !1);
  }
  disable() {
    this.nulled === null && (this.nulled = this.value, this.value = this.defaultValue, this.disabled = !0);
  }
  async firstUpdated() {
    await super.firstUpdated();
  }
  checkValidity() {
    return this.nullable && !this.nullSwitch?.checked ? !0 : super.checkValidity();
  }
  renderSwitch() {
    return this.nullable ? y`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : y``;
  }
  render() {
    return y`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
Ce([
  m({ type: Boolean })
], be.prototype, "nullable", 2);
Ce([
  C()
], be.prototype, "null", 1);
Ce([
  m({ type: String })
], be.prototype, "maybeValue", 1);
Ce([
  m({ type: String })
], be.prototype, "defaultValue", 2);
Ce([
  m({ type: Array })
], be.prototype, "reservedValues", 2);
Ce([
  V("mwc-switch")
], be.prototype, "nullSwitch", 2);
be = Ce([
  W("wizard-select")
], be);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Mr(i, e, t) {
  const n = i.constructor;
  if (!t) {
    const o = `__${e}`;
    if (t = n.getPropertyDescriptor(e, o), !t)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const r = t;
  let s = "";
  if (!r.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const a = {
    configurable: !0,
    enumerable: !0,
    set(o) {
      s === "" && (s = n.getPropertyOptions(e).attribute), this.hasAttribute(s) && this.removeAttribute(s), r.set.call(this, o);
    }
  };
  return r.get && (a.get = function() {
    return r.get.call(this);
  }), a;
}
function ti(i, e, t) {
  if (e !== void 0)
    return Mr(i, e, t);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class an extends ei {
  click() {
    this.formElement && (this.formElement.focus(), this.formElement.click());
  }
  setAriaLabel(e) {
    this.formElement && this.formElement.setAttribute("aria-label", e);
  }
  firstUpdated() {
    super.firstUpdated(), this.shadowRoot && this.mdcRoot.addEventListener("change", (e) => {
      this.dispatchEvent(new Event("change", e));
    });
  }
}
an.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const St = /* @__PURE__ */ new WeakMap(), we = Ge((i) => (e) => {
  const t = St.get(e);
  if (i === void 0 && e instanceof Le) {
    if (t !== void 0 || !St.has(e)) {
      const n = e.committer.name;
      e.committer.element.removeAttribute(n);
    }
  } else i !== t && e.setValue(i);
  St.set(e, i);
});
class z extends an {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new rn(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const t = e.get("indeterminate"), n = e.get("checked"), r = e.get("disabled");
    if (t !== void 0 || n !== void 0 || r !== void 0) {
      const s = this.calculateAnimationStateName(!!n, !!t, !!r), a = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${s}-${a}`;
    }
    super.update(e);
  }
  calculateAnimationStateName(e, t, n) {
    return n ? "disabled" : t ? "indeterminate" : e ? "checked" : "unchecked";
  }
  // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? y`<mwc-ripple
        .disabled="${this.disabled}"
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
        unbounded></mwc-ripple>` : "";
  }
  /**
   * @soyTemplate
   * @soyAttributes checkboxAttributes: input
   * @soyClasses checkboxClasses: .mdc-checkbox
   */
  render() {
    const e = this.indeterminate || this.checked, t = {
      "mdc-checkbox--disabled": this.disabled,
      "mdc-checkbox--selected": e,
      "mdc-checkbox--touch": !this.reducedTouchTarget,
      "mdc-ripple-upgraded--background-focused": this.focused,
      // transition animiation classes
      "mdc-checkbox--anim-checked-indeterminate": this.animationClass == "checked-indeterminate",
      "mdc-checkbox--anim-checked-unchecked": this.animationClass == "checked-unchecked",
      "mdc-checkbox--anim-indeterminate-checked": this.animationClass == "indeterminate-checked",
      "mdc-checkbox--anim-indeterminate-unchecked": this.animationClass == "indeterminate-unchecked",
      "mdc-checkbox--anim-unchecked-checked": this.animationClass == "unchecked-checked",
      "mdc-checkbox--anim-unchecked-indeterminate": this.animationClass == "unchecked-indeterminate"
    }, n = this.indeterminate ? "mixed" : void 0;
    return y`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${ct(t)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${we(this.name)}"
              aria-checked="${we(n)}"
              aria-label="${we(this.ariaLabel)}"
              aria-labelledby="${we(this.ariaLabelledBy)}"
              aria-describedby="${we(this.ariaDescribedBy)}"
              data-indeterminate="${this.indeterminate ? "true" : "false"}"
              ?disabled="${this.disabled}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}"
              @change="${this.handleChange}"
              @focus="${this.handleFocus}"
              @blur="${this.handleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-checkbox__background"
          @animationend="${this.resetAnimationClass}">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
        ${this.renderRipple()}
      </div>`;
  }
  handleFocus() {
    this.focused = !0, this.handleRippleFocus();
  }
  handleBlur() {
    this.focused = !1, this.handleRippleBlur();
  }
  handleRippleMouseDown(e) {
    const t = () => {
      window.removeEventListener("mouseup", t), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", t), this.rippleHandlers.startPress(e);
  }
  handleRippleTouchStart(e) {
    this.rippleHandlers.startPress(e);
  }
  handleRippleDeactivate() {
    this.rippleHandlers.endPress();
  }
  handleRippleMouseEnter() {
    this.rippleHandlers.startHover();
  }
  handleRippleMouseLeave() {
    this.rippleHandlers.endHover();
  }
  handleRippleFocus() {
    this.rippleHandlers.startFocus();
  }
  handleRippleBlur() {
    this.rippleHandlers.endFocus();
  }
  handleChange() {
    this.checked = this.formElement.checked, this.indeterminate = this.formElement.indeterminate;
  }
  resetAnimationClass() {
    this.animationClass = "";
  }
  get isRippleActive() {
    var e;
    return ((e = this.rippleElement) === null || e === void 0 ? void 0 : e.isActive) || !1;
  }
}
u([
  V(".mdc-checkbox")
], z.prototype, "mdcRoot", void 0);
u([
  V("input")
], z.prototype, "formElement", void 0);
u([
  m({ type: Boolean, reflect: !0 })
], z.prototype, "checked", void 0);
u([
  m({ type: Boolean })
], z.prototype, "indeterminate", void 0);
u([
  m({ type: Boolean, reflect: !0 })
], z.prototype, "disabled", void 0);
u([
  m({ type: String, reflect: !0 })
], z.prototype, "name", void 0);
u([
  m({ type: String })
], z.prototype, "value", void 0);
u([
  ti,
  m({ type: String, attribute: "aria-label" })
], z.prototype, "ariaLabel", void 0);
u([
  ti,
  m({ type: String, attribute: "aria-labelledby" })
], z.prototype, "ariaLabelledBy", void 0);
u([
  ti,
  m({ type: String, attribute: "aria-describedby" })
], z.prototype, "ariaDescribedBy", void 0);
u([
  m({ type: Boolean })
], z.prototype, "reducedTouchTarget", void 0);
u([
  C()
], z.prototype, "animationClass", void 0);
u([
  C()
], z.prototype, "shouldRenderRipple", void 0);
u([
  C()
], z.prototype, "focused", void 0);
u([
  C()
], z.prototype, "useStateLayerCustomProperties", void 0);
u([
  Zi("mwc-ripple")
], z.prototype, "ripple", void 0);
u([
  ar({ passive: !0 })
], z.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Vr = le`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let Ft = class extends z {
};
Ft.styles = [Vr];
Ft = u([
  W("mwc-checkbox")
], Ft);
var Hr = Object.defineProperty, Ur = Object.getOwnPropertyDescriptor, Q = (i, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? Ur(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (r = (n ? a(e, t, r) : a(r)) || r);
  return n && r && Hr(e, t, r), r;
};
let j = class extends ee {
  constructor() {
    super(...arguments), this.label = "", this.helper = "", this.nullable = !1, this.defaultChecked = !1, this.disabled = !1, this.isNull = !1, this.initChecked = !1, this.deactivateCheckbox = !1, this.nulled = null;
  }
  get maybeValue() {
    return this.null ? null : this.checked ? "true" : "false";
  }
  set maybeValue(i) {
    i === null ? this.null = !0 : (this.null = !1, this.checked = i === "true");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(i) {
    !this.nullable || i === this.isNull || (this.isNull = i, this.null ? this.disable() : this.enable());
  }
  get checked() {
    return this.checkbox?.checked ?? this.initChecked;
  }
  set checked(i) {
    this.checkbox ? this.checkbox.checked = i : this.initChecked = i;
  }
  get formfieldLabel() {
    return this.helper ? `${this.helper} (${this.label})` : this.label;
  }
  enable() {
    this.nulled !== null && (this.checked = this.nulled, this.nulled = null, this.deactivateCheckbox = !1);
  }
  disable() {
    this.nulled === null && (this.nulled = this.checked, this.checked = this.defaultChecked, this.deactivateCheckbox = !0);
  }
  firstUpdated() {
    this.requestUpdate();
  }
  renderSwitch() {
    return this.nullable ? y`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : y``;
  }
  render() {
    return y`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">
          <mwc-formfield
            label="${this.formfieldLabel}"
            style="${this.deactivateCheckbox || this.disabled ? "--mdc-theme-text-primary-on-background:rgba(0, 0, 0, 0.38)" : ""}"
            ><mwc-checkbox
              ?checked=${this.initChecked}
              ?disabled=${this.deactivateCheckbox || this.disabled}
            ></mwc-checkbox
          ></mwc-formfield>
        </div>
        <div style="display: flex; align-items: center;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
Q([
  m({ type: String })
], j.prototype, "label", 2);
Q([
  m({ type: String })
], j.prototype, "helper", 2);
Q([
  m({ type: Boolean })
], j.prototype, "nullable", 2);
Q([
  m({ type: Boolean })
], j.prototype, "defaultChecked", 2);
Q([
  m({ type: String })
], j.prototype, "maybeValue", 1);
Q([
  m({ type: Boolean })
], j.prototype, "disabled", 2);
Q([
  C()
], j.prototype, "null", 1);
Q([
  C()
], j.prototype, "checked", 1);
Q([
  C()
], j.prototype, "deactivateCheckbox", 2);
Q([
  C()
], j.prototype, "formfieldLabel", 1);
Q([
  V("mwc-switch")
], j.prototype, "nullSwitch", 2);
Q([
  V("mwc-checkbox")
], j.prototype, "checkbox", 2);
j = Q([
  W("wizard-checkbox")
], j);
function Br(i) {
  return typeof i == "function";
}
function De(i, e) {
  if (!i)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const t = Br(i) ? i : () => i;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: t, ...e?.detail }
  });
}
function H(i) {
  const e = i.split(">"), t = e.pop() ?? "";
  return [e.join(">"), t];
}
const T = ":not(*)";
function Gr(i) {
  return `${i.getAttribute("version")}	${i.getAttribute("revision")}`;
}
function qr(i, e) {
  const [t, n] = e.split("	");
  return !t || !n ? T : `${i}[version="${t}"][revision="${n}"]`;
}
function gi(i) {
  return N(i.parentElement) + ">" + i.getAttribute("connectivityNode");
}
function bi(i, e) {
  const [t, n] = H(e), r = $[i].parents.flatMap(
    (s) => O(s, t).split(",")
  );
  return M(
    r,
    [">"],
    [`${i}[connectivityNode="${n}"]`]
  ).map((s) => s.join("")).join(",");
}
function jr(i) {
  const [e, t, n, r, s, a] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((o) => i.getAttribute(o));
  return e === "None" ? `${N(i.parentElement)}>(${r} ${a} ${s})` : `${e} ${t || "(Client)"}/${n ?? ""} ${r} ${s ?? ""}`;
}
function Wr(i, e) {
  if (e.endsWith(")")) {
    const [b, v] = H(e), [h, S, x] = v.substring(1, v.length - 1).split(" ");
    if (!h || !S) return T;
    const w = $[i].parents.flatMap(
      (I) => O(I, b).split(",")
    );
    return M(
      w,
      [">"],
      [`${i}[iedName="None"][lnClass="${h}"][lnType="${S}"][lnInst="${x}"]`]
    ).map((I) => I.join("")).join(",");
  }
  const [t, n, r, s, a] = e.split(/[ /]/);
  if (!t || !n || !s) return T;
  const [
    o,
    c,
    p,
    d,
    l
  ] = [
    [`[iedName="${t}"]`],
    n === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${n}"]`],
    r ? [`[prefix="${r}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    a ? [`[lnInst="${a}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return M(
    [i],
    o,
    c,
    p,
    d,
    l
  ).map((b) => b.join("")).join(",");
}
function Kr(i) {
  return `${N(i.parentElement)}>${i.getAttribute(
    "iedName"
  )} ${i.getAttribute("apName")}`;
}
function Xr(i, e) {
  const [t, n] = H(e), [r, s] = n.split(" ");
  return `${O(
    "IED",
    t
  )}>${i}[iedName="${r}"][apName="${s}"]`;
}
function Zr(i) {
  return `${N(i.parentElement)}>${i.getAttribute("associationID") ?? ""}`;
}
function Qr(i, e) {
  const [t, n] = H(e);
  return n ? `${O(
    "Server",
    t
  )}>${i}[associationID="${n}"]` : T;
}
function Jr(i) {
  return `${N(i.closest("IED"))}>>${i.getAttribute("inst")}`;
}
function Yr(i, e) {
  const [t, n] = e.split(">>");
  return n ? `IED[name="${t}"] ${i}[inst="${n}"]` : T;
}
function es(i) {
  const e = i.textContent, [t, n, r, s, a] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => i.getAttribute(o));
  return `${N(i.parentElement)}>${e} ${t || ""} ${n || ""}/${r ?? ""} ${s ?? ""} ${a ?? ""}`;
}
function ts(i, e) {
  const [t, n] = H(e), [r, s, a, o, c, p] = n.split(/[ /]/), [
    d,
    l,
    b,
    v,
    h,
    S
  ] = [
    $[i].parents.flatMap(
      (x) => O(x, t).split(",")
    ),
    [`${r}`],
    s ? [`[apRef="${s}"]`] : [":not([apRef])", '[apRef=""]'],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    p ? [`[lnInst="${p}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return M(
    d,
    [">"],
    [i],
    l,
    b,
    v,
    h,
    S
  ).map((x) => x.join("")).join(",");
}
function is(i) {
  const [e, t, n, r, s, a, o, c] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((d) => i.getAttribute(d)), p = `${e}/${t ?? ""} ${n} ${r ?? ""}.${s} ${a || ""}`;
  return `${N(i.parentElement)}>${p} (${o}${c ? " [" + c + "]" : ""})`;
}
function ns(i, e) {
  const [t, n] = H(e), [r, s, a, o] = n.split(/[ /.]/), c = n.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), p = c && c[1] ? c[1] : "", d = c && c[2] ? c[2] : "", l = n.match(/\(([A-Z]{2})/), b = n.match(/ \[([0-9]{1,2})\]/), v = l && l[1] ? l[1] : "", h = b && b[1] ? b[1] : "", [
    S,
    x,
    w,
    I,
    R,
    pt,
    ut,
    mt,
    ht
  ] = [
    $[i].parents.flatMap(
      (Pe) => O(Pe, t).split(",")
    ),
    [`[ldInst="${r}"]`],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${p}"]`],
    d ? [`[daName="${d}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${v}"]`],
    h ? [`[ix="${h}"]`] : [":not([ix])", '[ix=""]']
  ];
  return M(
    S,
    [">"],
    [i],
    x,
    w,
    I,
    R,
    pt,
    ut,
    mt,
    ht
  ).map((Pe) => Pe.join("")).join(",");
}
function rs(i) {
  if (!i.parentElement) return NaN;
  const e = N(i.parentElement), t = i.getAttribute("iedName"), n = i.getAttribute("intAddr"), r = Array.from(
    i.parentElement.querySelectorAll(`ExtRef[intAddr="${n}"]`)
  ).indexOf(i);
  if (n) return `${e}>${n}[${r}]`;
  const [
    s,
    a,
    o,
    c,
    p,
    d,
    l,
    b,
    v,
    h,
    S,
    x
  ] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "serviceType",
    "srcLDInst",
    "srcPrefix",
    "srcLNClass",
    "srcLNInst",
    "srcCBName"
  ].map((R) => i.getAttribute(R)), w = x ? `${l}:${x} ${b ?? ""}/${v ?? ""} ${h ?? ""} ${S ?? ""}` : "", I = `${t} ${s}/${a ?? ""} ${o} ${c ?? ""} ${p} ${d || ""}`;
  return `${e}>${w ? w + " " : ""}${I}${n ? `@${n}` : ""}`;
}
function ss(i, e) {
  const [t, n] = H(e), r = $[i].parents.flatMap(
    ($e) => O($e, t).split(",")
  );
  if (n.endsWith("]")) {
    const [$e] = n.split("["), Tn = [`[intAddr="${$e}"]`];
    return M(r, [">"], [i], Tn).map((Ln) => Ln.join("")).join(",");
  }
  let s, a, o, c, p, d, l, b, v, h, S, x, w, I;
  !n.includes(":") && !n.includes("@") ? [s, a, o, c, p, d, l] = n.split(/[ /]/) : n.includes(":") && !n.includes("@") ? [
    b,
    v,
    h,
    S,
    x,
    w,
    s,
    a,
    o,
    c,
    p,
    d,
    l
  ] = n.split(/[ /:]/) : !n.includes(":") && n.includes("@") ? [s, a, o, c, p, d, l, I] = n.split(/[ /@]/) : [
    b,
    v,
    h,
    S,
    x,
    w,
    s,
    a,
    o,
    c,
    p,
    d,
    l,
    I
  ] = n.split(/[ /:@]/);
  const [
    R,
    pt,
    ut,
    mt,
    ht,
    Pe,
    wn,
    _n,
    En,
    Cn,
    An,
    In,
    Nn,
    Dn
  ] = [
    s ? [`[iedName="${s}"]`] : [":not([iedName])"],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    c ? [`[lnClass="${c}"]`] : [":not([lnClass])"],
    p ? [`[lnInst="${p}"]`] : [":not([lnInst])", '[lnInst=""]'],
    d ? [`[doName="${d}"]`] : [":not([doName])"],
    l ? [`[daName="${l}"]`] : [":not([daName])", '[daName=""]'],
    b ? [`[serviceType="${b}"]`] : [":not([serviceType])", '[serviceType=""]'],
    v ? [`[srcCBName="${v}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    h ? [`[srcLDInst="${h}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    S ? [`[srcPrefix="${S}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    x ? [`[srcLNClass="${x}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    w ? [`[srcLNInst="${w}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    I ? [`[intAddr="${I}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return M(
    r,
    [">"],
    [i],
    R,
    pt,
    ut,
    mt,
    ht,
    Pe,
    wn,
    _n,
    En,
    Cn,
    An,
    In,
    Nn,
    Dn
  ).map(($e) => $e.join("")).join(",");
}
function as(i) {
  const [e, t, n] = ["prefix", "lnClass", "inst"].map(
    (r) => i.getAttribute(r)
  );
  return `${N(i.parentElement)}>${e ?? ""} ${t} ${n}`;
}
function os(i, e) {
  const [t, n] = H(e), r = $[i].parents.flatMap(
    (l) => O(l, t).split(",")
  ), [s, a, o] = n.split(" ");
  if (!a) return T;
  const [c, p, d] = [
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    [`[inst="${o}"]`]
  ];
  return M(
    r,
    [">"],
    [i],
    c,
    p,
    d
  ).map((l) => l.join("")).join(",");
}
function cs(i) {
  const [e, t, n, r, s, a] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((o) => i.getAttribute(o));
  return `${N(i.parentElement)}>${t} ${e || ""} ${n}/${r ?? ""} ${s} ${a}`;
}
function ds(i, e) {
  const [t, n] = H(e), r = $[i].parents.flatMap(
    (w) => O(w, t).split(",")
  ), [s, a, o, c, p, d] = n.split(/[ /]/), [
    l,
    b,
    v,
    h,
    S,
    x
  ] = [
    s ? [`[iedName="${s}"]`] : [":not([iedName])", '[iedName=""]'],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${p}"]`],
    d ? [`[lnInst="${d}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return M(
    r,
    [">"],
    [i],
    l,
    b,
    v,
    h,
    S,
    x
  ).map((w) => w.join("")).join(",");
}
function yi(i) {
  const [e, t] = ["name", "ix"].map((n) => i.getAttribute(n));
  return `${N(i.parentElement)}>${e}${t ? "[" + t + "]" : ""}`;
}
function Ot(i, e, t = -1) {
  t === -1 && (t = e.split(">").length);
  const [n, r] = H(e), [s, a, o, c] = r.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!a) return T;
  if (t === 0) return `${i}[name="${a}"]`;
  const p = $[i].parents.flatMap(
    (b) => b === "SDI" ? Ot(b, n, t - 1).split(",") : O(b, n).split(",")
  ).filter((b) => !b.startsWith(T));
  if (p.length === 0) return T;
  const [d, l] = [
    [`[name="${a}"]`],
    c ? [`[ix="${c}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return M(
    p,
    [">"],
    [i],
    d,
    l
  ).map((b) => b.join("")).join(",");
}
function ls(i) {
  if (!i.parentElement) return NaN;
  const e = i.getAttribute("sGroup"), t = Array.from(i.parentElement.children).filter((n) => n.getAttribute("sGroup") === e).findIndex((n) => n.isSameNode(i));
  return `${N(i.parentElement)}>${e ? e + "." : ""} ${t}`;
}
function ps(i, e) {
  const [t, n] = H(e), [r, s] = n.split(" "), a = parseFloat(s), o = $[i].parents.flatMap(
    (d) => O(d, t).split(",")
  ), [c, p] = [
    r ? [`[sGroup="${r}"]`] : [""],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return M(
    o,
    [">"],
    [i],
    c,
    p
  ).map((d) => d.join("")).join(",");
}
function us(i) {
  const [e, t] = ["iedName", "apName"].map(
    (n) => i.getAttribute(n)
  );
  return `${e} ${t}`;
}
function ms(i, e) {
  const [t, n] = e.split(" ");
  return !t || !n ? T : `${i}[iedName="${t}"][apName="${n}"]`;
}
function vi(i) {
  const [e, t] = ["ldInst", "cbName"].map(
    (n) => i.getAttribute(n)
  );
  return `${e} ${t}`;
}
function Si(i, e) {
  const [t, n] = e.split(" ");
  return !t || !n ? T : `${i}[ldInst="${t}"][cbName="${n}"]`;
}
function hs(i) {
  if (!i.parentElement) return NaN;
  if (!i.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = i.getAttribute("type");
  return i.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${N(i.parentElement)}>${e}`;
}
function fs(i, e) {
  const [t, n] = H(e), [r, s] = [
    $[i].parents.flatMap(
      (a) => O(a, t).split(",")
    ),
    n ? [`[type="${n}"]`] : [""]
  ];
  return M(r, [">"], [i], s).map((a) => a.join("")).join(",");
}
function gs(i) {
  if (!i.parentElement) return NaN;
  const e = i.parentElement, t = i.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${N(i.parentElement)}>${t}`;
  const n = Array.from(i.parentElement.children).filter((r) => r.getAttribute("type") === t).findIndex((r) => r.isSameNode(i));
  return `${N(i.parentElement)}>${t} [${n}]`;
}
function bs(i, e) {
  const [t, n] = H(e), [r] = n.split(" "), s = n && n.match(/\[([0-9]+)\]/) && n.match(/\[([0-9]+)\]/)[1] ? parseFloat(n.match(/\[([0-9]+)\]/)[1]) : NaN, [a, o, c] = [
    $[i].parents.flatMap(
      (p) => O(p, t).split(",")
    ),
    [`[type="${r}"]`],
    s ? [`:nth-child(${s + 1})`] : [""]
  ];
  return M(
    a,
    [">"],
    [i],
    o,
    c
  ).map((p) => p.join("")).join(",");
}
function ys(i) {
  return `${N(i.parentElement)}>${i.getAttribute("ord")}`;
}
function vs(i, e) {
  const [t, n] = H(e);
  return `${O("EnumType", t)}>${i}[ord="${n}"]`;
}
function Ss(i) {
  return `${N(i.parentElement)}>${i.getAttribute("type") || "8-MMS"}	${i.textContent}`;
}
function xs(i, e) {
  const [t, n] = H(e), [r, s] = n.split("	"), [a] = [
    $[i].parents.flatMap(
      (o) => O(o, t).split(",")
    )
  ];
  return M(
    a,
    [">"],
    [i],
    [`[type="${r}"]`],
    [">"],
    [s]
  ).map((o) => o.join("")).join(",");
}
function ks() {
  return "";
}
function ws() {
  return ":root";
}
function E(i) {
  return i.parentElement.tagName === "SCL" ? i.getAttribute("name") : `${N(i.parentElement)}>${i.getAttribute("name")}`;
}
function _(i, e, t = -1) {
  t === -1 && (t = e.split(">").length);
  const [n, r] = H(e);
  if (!r) return T;
  if (t === 0) return `${i}[name="${r}"]`;
  const s = $[i].parents;
  if (!s) return T;
  const a = s.flatMap(
    (o) => $[o].selector === $.Substation.selector ? _(o, n, t - 1).split(",") : O(o, n).split(",")
  ).filter((o) => !o.startsWith(T));
  return a.length === 0 ? T : M(a, [">"], [i], [`[name="${r}"]`]).map((o) => o.join("")).join(",");
}
function f(i) {
  return N(i.parentElement).toString();
}
function g(i, e) {
  const t = $[i].parents;
  if (!t) return T;
  const n = t.flatMap((r) => O(r, e).split(",")).filter((r) => !r.startsWith(T));
  return n.length === 0 ? T : M(n, [">"], [i]).map((r) => r.join("")).join(",");
}
function Xe(i) {
  return `#${i.id}`;
}
function Ze(i, e) {
  const t = e.replace(/^#/, "");
  return t ? `${i}[id="${t}"]` : T;
}
const on = [
  "TransformerWinding",
  "ConductingEquipment"
], cn = [
  "GeneralEquipment",
  "PowerTransformer",
  ...on
], Mt = ["Substation", "VoltageLevel", "Bay"], dn = ["Process", "Line"], ln = ["EqSubFunction", "EqFunction"], _s = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...cn,
  ...Mt,
  ...dn,
  ...ln
], pn = ["ConnectivityNode", ..._s], Es = ["GOOSESecurity", "SMVSecurity"], Cs = ["SubNetwork", ...Es, ...pn], As = ["BDA", "DA"], Is = ["SampledValueControl", "GSEControl"], Ns = ["LogControl", "ReportControl"], Ds = [...Is, ...Ns], Ts = ["GSE", "SMV"], Ls = [
  "ConnectedAP",
  "PhysConn",
  "SDO",
  "DO",
  "DAI",
  "SDI",
  "DOI",
  "Inputs",
  "RptEnabled",
  "Server",
  "ServerAt",
  "SettingControl",
  "Communication",
  "Log",
  "LDevice",
  "DataSet",
  "AccessPoint",
  "IED",
  "NeutralPoint",
  ...Ds,
  ...Ts,
  ...As
], ke = ["LN0", "LN"], Rs = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Ps = ["Subject", "IssuerName"], $s = ["MinTime", "MaxTime"], zs = ["LNodeType", "DOType", "DAType", "EnumType"], Fs = [
  "FileHandling",
  "TimeSyncProt",
  "CommProt",
  "SGEdit",
  "ConfSG",
  "GetDirectory",
  "GetDataObjectDefinition",
  "DataObjectDirectory",
  "GetDataSetValue",
  "SetDataSetValue",
  "DataSetDirectory",
  "ReadWrite",
  "TimerActivatedControl",
  "GetCBValues",
  "GSEDir",
  "ConfLdName"
], Os = ["DynDataSet", "ConfDataSet"], Ms = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Os
], Vs = ["ConfLogControl", "ConfSigRef"], Hs = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], Us = ["SCL", ...Cs, ...Ls, ...zs], un = [
  ...Us,
  ...Rs,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Ps,
  ...$s,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...ke,
  ...Fs,
  "DynAssociation",
  "SettingGroups",
  ...Ms,
  ...Vs,
  ...Hs,
  "ConfLNs",
  "ClientServices",
  "SupSubscription",
  "ValueHandling",
  "RedProt",
  "McSecurity",
  "KDC",
  "Address",
  "P",
  "ProtNs",
  "EnumVal",
  "Terminal",
  "BitRate",
  "Authentication",
  "DataTypeTemplates",
  "History",
  "OptFields",
  "SmvOpts",
  "TrgOps",
  "SamplesPerSec",
  "SmpRate",
  "SecPerSamples"
], Bs = new Set(un);
function mn(i) {
  return Bs.has(i);
}
const dt = ["Text", "Private"], he = [...dt], D = [...dt], Qe = [...dt], xi = [...D, "Val"], hn = [...he, "LNode"], ge = [...hn], Vt = [...ge], xt = [
  ...ge,
  "PowerTransformer",
  "GeneralEquipment"
], ki = [
  ...Vt,
  "Terminal"
], wi = [...D, "Address"], fn = [...he], _i = [...fn, "IEDName"], Ei = [
  ...D,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], Ci = [
  ...ge,
  "GeneralEquipment",
  "Function"
], Ai = [...fn, "TrgOps"], Ii = [
  ...ge,
  "GeneralEquipment",
  "EqSubFunction"
], $ = {
  AccessControl: {
    identity: f,
    selector: g,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: E,
    selector: _,
    parents: ["IED"],
    children: [
      ...he,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: f,
    selector: g,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: Zr,
    selector: Qr,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: f,
    selector: g,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: E,
    selector: _,
    parents: ["DAType"],
    children: [...xi]
  },
  BitRate: {
    identity: f,
    selector: g,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: E,
    selector: _,
    parents: ["VoltageLevel"],
    children: [
      ...xt,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: cs,
    selector: ds,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: f,
    selector: g,
    parents: ["SCL"],
    children: [...D, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: E,
    selector: _,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...ki,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: f,
    selector: g,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: us,
    selector: ms,
    parents: ["SubNetwork"],
    children: [...D, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: E,
    selector: _,
    parents: ["Bay", "Line"],
    children: [...hn]
  },
  DA: {
    identity: E,
    selector: _,
    parents: ["DOType"],
    children: [...xi]
  },
  DAI: {
    identity: yi,
    selector: Ot,
    parents: ["DOI", "SDI"],
    children: [...D, "Val"]
  },
  DAType: {
    identity: Xe,
    selector: Ze,
    parents: ["DataTypeTemplates"],
    children: [...Qe, "BDA", "ProtNs"]
  },
  DO: {
    identity: E,
    selector: _,
    parents: ["LNodeType"],
    children: [...D]
  },
  DOI: {
    identity: E,
    selector: _,
    parents: [...ke],
    children: [...D, "SDI", "DAI"]
  },
  DOType: {
    identity: Xe,
    selector: Ze,
    parents: ["DataTypeTemplates"],
    children: [...Qe, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: E,
    selector: _,
    parents: [...ke],
    children: [...he, "FCDA"]
  },
  DataSetDirectory: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: f,
    selector: g,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: Xe,
    selector: Ze,
    parents: ["DataTypeTemplates"],
    children: [...Qe, "EnumVal"]
  },
  EnumVal: {
    identity: ys,
    selector: vs,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: E,
    selector: _,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...Ii]
  },
  EqSubFunction: {
    identity: E,
    selector: _,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...Ii]
  },
  ExtRef: {
    identity: rs,
    selector: ss,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: is,
    selector: ns,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: E,
    selector: _,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...ge,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: E,
    selector: _,
    parents: [
      "SubFunction",
      "Function",
      ...dn,
      ...ln,
      ...Mt
    ],
    children: [...Vt, "EqFunction"]
  },
  GetCBValues: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: E,
    selector: _,
    parents: ["AccessPoint"],
    children: [...he, "Subject", "IssuerName"]
  },
  GSE: {
    identity: vi,
    selector: Si,
    parents: ["ConnectedAP"],
    children: [...wi, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: E,
    selector: _,
    parents: ["LN0"],
    children: [..._i, "Protocol"]
  },
  GSESettings: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: f,
    selector: g,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: f,
    selector: g,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: Gr,
    selector: qr,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: E,
    selector: _,
    parents: ["SCL"],
    children: [...D, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: es,
    selector: ts,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: f,
    selector: g,
    parents: [...ke],
    children: [...D, "ExtRef"]
  },
  IssuerName: {
    identity: f,
    selector: g,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: Kr,
    selector: Xr,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Jr,
    selector: Yr,
    parents: ["Server"],
    children: [...D, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: as,
    selector: os,
    parents: ["AccessPoint", "LDevice"],
    children: [...Ei]
  },
  LN0: {
    identity: f,
    selector: g,
    parents: ["LDevice"],
    children: [
      ...Ei,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: jr,
    selector: Wr,
    parents: [...pn],
    children: [...D]
  },
  LNodeType: {
    identity: Xe,
    selector: Ze,
    parents: ["DataTypeTemplates"],
    children: [...Qe, "DO"]
  },
  Line: {
    identity: E,
    selector: _,
    parents: ["Process", "SCL"],
    children: [
      ...Ci,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: E,
    selector: _,
    parents: [...ke],
    children: [...D]
  },
  LogControl: {
    identity: E,
    selector: _,
    parents: [...ke],
    children: [...Ai]
  },
  LogSettings: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: f,
    selector: g,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: f,
    selector: g,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: f,
    selector: g,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: gi,
    selector: bi,
    parents: ["TransformerWinding"],
    children: [...D]
  },
  OptFields: {
    identity: f,
    selector: g,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: gs,
    selector: bs,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: hs,
    selector: fs,
    parents: ["ConnectedAP"],
    children: [...D, "P"]
  },
  PowerTransformer: {
    identity: E,
    selector: _,
    parents: [...Mt],
    children: [
      ...Vt,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => T,
    parents: [],
    children: []
  },
  Process: {
    identity: E,
    selector: _,
    parents: ["Process", "SCL"],
    children: [
      ...Ci,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: Ss,
    selector: xs,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: f,
    selector: g,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: E,
    selector: _,
    parents: [...ke],
    children: [...Ai, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: f,
    selector: g,
    parents: ["ReportControl"],
    children: [...D, "ClientLN"]
  },
  SamplesPerSec: {
    identity: f,
    selector: g,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: E,
    selector: _,
    parents: ["LN0"],
    children: [..._i, "SmvOpts"]
  },
  SecPerSamples: {
    identity: f,
    selector: g,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: ks,
    selector: ws,
    parents: [],
    children: [
      ...dt,
      "Header",
      "Substation",
      "Communication",
      "IED",
      "DataTypeTemplates",
      "Line",
      "Process"
    ]
  },
  SDI: {
    identity: yi,
    selector: Ot,
    parents: ["DOI", "SDI"],
    children: [...D, "SDI", "DAI"]
  },
  SDO: {
    identity: E,
    selector: _,
    parents: ["DOType"],
    children: [...he]
  },
  Server: {
    identity: f,
    selector: g,
    parents: ["AccessPoint"],
    children: [
      ...D,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: f,
    selector: g,
    parents: ["AccessPoint"],
    children: [...D]
  },
  Services: {
    identity: f,
    selector: g,
    parents: ["IED", "AccessPoint"],
    children: [
      "DynAssociation",
      "SettingGroups",
      "GetDirectory",
      "GetDataObjectDefinition",
      "DataObjectDirectory",
      "GetDataSetValue",
      "SetDataSetValue",
      "DataSetDirectory",
      "ConfDataSet",
      "DynDataSet",
      "ReadWrite",
      "TimerActivatedControl",
      "ConfReportControl",
      "GetCBValues",
      "ConfLogControl",
      "ReportSettings",
      "LogSettings",
      "GSESettings",
      "SMVSettings",
      "GSEDir",
      "GOOSE",
      "GSSE",
      "SMVsc",
      "FileHandling",
      "ConfLNs",
      "ClientServices",
      "ConfLdName",
      "SupSubscription",
      "ConfSigRef",
      "ValueHandling",
      "RedProt",
      "TimeSyncProt",
      "CommProt"
    ]
  },
  SetDataSetValue: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: f,
    selector: g,
    parents: ["LN0"],
    children: [...D]
  },
  SettingGroups: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: f,
    selector: g,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: f,
    selector: g,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: vi,
    selector: Si,
    parents: ["ConnectedAP"],
    children: [...wi]
  },
  SmvOpts: {
    identity: f,
    selector: g,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: E,
    selector: _,
    parents: ["AccessPoint"],
    children: [...he, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: E,
    selector: _,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...on
    ],
    children: [...ge, "EqFunction"]
  },
  SubFunction: {
    identity: E,
    selector: _,
    parents: ["SubFunction", "Function"],
    children: [
      ...ge,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: E,
    selector: _,
    parents: ["Communication"],
    children: [...he, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: f,
    selector: g,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: E,
    selector: _,
    parents: ["SCL"],
    children: [...xt, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: E,
    selector: _,
    parents: ["TransformerWinding"],
    children: [...ge, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: gi,
    selector: bi,
    parents: [...cn],
    children: [...D]
  },
  Text: {
    identity: f,
    selector: g,
    parents: un.filter((i) => i !== "Text" && i !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: f,
    selector: g,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: E,
    selector: _,
    parents: ["PowerTransformer"],
    children: [
      ...ki,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: f,
    selector: g,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: ls,
    selector: ps,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: f,
    selector: g,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: E,
    selector: _,
    parents: ["Substation"],
    children: [...xt, "Voltage", "Bay", "Function"]
  }
};
function O(i, e) {
  return typeof e != "string" ? T : mn(i) ? $[i].selector(i, e) : i;
}
function N(i) {
  if (i === null) return NaN;
  if (i.closest("Private")) return NaN;
  const e = i.tagName;
  return mn(e) ? $[e].identity(i) : NaN;
}
function gn(i, e) {
  return i.tagName === "Private" ? gn(i.parentElement, e.parentElement) && i.isEqualNode(e) : i.tagName === e.tagName && N(i) === N(e);
}
function rt(i, e) {
  if (i.closest("Private") || e.closest("Private")) return i.isEqualNode(e);
  const t = new Set(
    i.getAttributeNames().concat(e.getAttributeNames())
  );
  for (const s of t)
    if (i.getAttribute(s) !== e.getAttribute(s)) return !1;
  if (i.childElementCount === 0)
    return e.childElementCount === 0 && i.textContent?.trim() === e.textContent?.trim();
  const n = Array.from(i.children), r = Array.from(e.children);
  for (const s of n) {
    const a = r.findIndex((o) => rt(s, o));
    if (a === -1) return !1;
    r.splice(a, 1);
  }
  for (const s of r)
    if (!n.find((a) => rt(s, a))) return !1;
  return !0;
}
function M(...i) {
  return i.reduce(
    (e, t) => e.flatMap((n) => t.map((r) => [n, r].flat())),
    [[]]
  );
}
const Gs = 99;
Array(Gs).fill(1).map((i, e) => `${e + 1}`);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Ni = (i, e) => {
  const t = i.startNode.parentNode, n = e === void 0 ? i.endNode : e.startNode, r = t.insertBefore(ne(), n);
  t.insertBefore(ne(), n);
  const s = new Ee(i.options);
  return s.insertAfterNode(r), s;
}, xe = (i, e) => (i.setValue(e), i.commit(), i), kt = (i, e, t) => {
  const n = i.startNode.parentNode, r = t ? t.startNode : i.endNode, s = e.endNode.nextSibling;
  s !== r && zn(n, e.startNode, s, r);
}, wt = (i) => {
  ot(i.startNode.parentNode, i.startNode, i.endNode.nextSibling);
}, Di = (i, e, t) => {
  const n = /* @__PURE__ */ new Map();
  for (let r = e; r <= t; r++)
    n.set(i[r], r);
  return n;
}, Ti = /* @__PURE__ */ new WeakMap(), Li = /* @__PURE__ */ new WeakMap(), Ri = Ge((i, e, t) => {
  let n;
  return t === void 0 ? t = e : e !== void 0 && (n = e), (r) => {
    if (!(r instanceof Ee))
      throw new Error("repeat can only be used in text bindings");
    const s = Ti.get(r) || [], a = Li.get(r) || [], o = [], c = [], p = [];
    let d = 0;
    for (const w of i)
      p[d] = n ? n(w, d) : d, c[d] = t(w, d), d++;
    let l, b, v = 0, h = s.length - 1, S = 0, x = c.length - 1;
    for (; v <= h && S <= x; )
      if (s[v] === null)
        v++;
      else if (s[h] === null)
        h--;
      else if (a[v] === p[S])
        o[S] = xe(s[v], c[S]), v++, S++;
      else if (a[h] === p[x])
        o[x] = xe(s[h], c[x]), h--, x--;
      else if (a[v] === p[x])
        o[x] = xe(s[v], c[x]), kt(r, s[v], o[x + 1]), v++, x--;
      else if (a[h] === p[S])
        o[S] = xe(s[h], c[S]), kt(r, s[h], s[v]), h--, S++;
      else if (l === void 0 && (l = Di(p, S, x), b = Di(a, v, h)), !l.has(a[v]))
        wt(s[v]), v++;
      else if (!l.has(a[h]))
        wt(s[h]), h--;
      else {
        const w = b.get(p[S]), I = w !== void 0 ? s[w] : null;
        if (I === null) {
          const R = Ni(r, s[v]);
          xe(R, c[S]), o[S] = R;
        } else
          o[S] = xe(I, c[S]), kt(r, I, s[v]), s[w] = null;
        S++;
      }
    for (; S <= x; ) {
      const w = Ni(r, o[x + 1]);
      xe(w, c[S]), o[S++] = w;
    }
    for (; v <= h; ) {
      const w = s[v++];
      w !== null && wt(w);
    }
    Ti.set(r, o), Li.set(r, p);
  };
});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class qe extends F {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, t = this.renderText(), n = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : y``, r = this.hasMeta && this.left ? this.renderMeta() : y``, s = this.renderRipple();
    return y`
      ${s}
      ${n}
      ${this.left ? "" : t}
      <span class=${ct(e)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left ? t : ""}
      ${r}`;
  }
  async onChange(e) {
    const t = e.target;
    this.selected === t.checked || (this._skipPropRequest = !0, this.selected = t.checked, await this.updateComplete, this._skipPropRequest = !1);
  }
}
u([
  V("slot")
], qe.prototype, "slotElement", void 0);
u([
  V("mwc-checkbox")
], qe.prototype, "checkboxElement", void 0);
u([
  m({ type: Boolean })
], qe.prototype, "left", void 0);
u([
  m({ type: String, reflect: !0 })
], qe.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const qs = le`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Te = class extends qe {
};
Te.styles = [sn, qs];
Te = u([
  W("mwc-check-list-item")
], Te);
function fe(i) {
  const e = N(i);
  return typeof e == "string" ? e.replace(/^>/, "") : q("unidentifiable");
}
function js(i, e, t, n, r) {
  return (s, a) => {
    const o = [], c = a.shadowRoot.querySelector("mwc-list"), p = c.selected.filter((h) => h.classList.contains("attr")).map((h) => i[h.value]), d = t.cloneNode(!1), l = p.length ? d : t;
    if (p.length) {
      t.childElementCount === 0 && (d.textContent = t.textContent);
      for (const [h, S] of p)
        h === "value" ? d.textContent = S.theirs : S.theirs === null ? d.removeAttribute(h) : d.setAttribute(h, S.theirs);
      o.push({ old: { element: t }, new: { element: d } });
    }
    let b = !1;
    const v = c.selected.filter((h) => h.classList.contains("child")).map((h) => e[h.value]);
    if (v.length)
      for (const h of v)
        h.ours ? h.theirs ? (b = !0, a.dispatchEvent(
          De(
            bn(h.ours, h.theirs, {
              ...r,
              title: void 0
            })
          )
        )) : o.push({
          old: {
            parent: l,
            element: h.ours,
            reference: h.ours.nextSibling
          }
        }) : o.push({
          new: { parent: l, element: h.theirs }
        });
    return o.length === 0 && !b && a.dispatchEvent(De()), [
      {
        actions: o,
        title: q("merge.log", {
          sink: fe(t),
          source: fe(n),
          tag: t.tagName
        })
      }
    ];
  };
}
function bn(i, e, t) {
  const n = [], r = i.textContent ?? "", s = e.textContent ?? "";
  i.childElementCount === 0 && e.childElementCount === 0 && s !== r && n.push(["value", { ours: r, theirs: s }]);
  const a = new Set(
    e.getAttributeNames().concat(i.getAttributeNames())
  );
  for (const d of a)
    e.getAttribute(d) !== i.getAttribute(d) && n.push([
      d,
      {
        theirs: e.getAttribute(d),
        ours: i.getAttribute(d)
      }
    ]);
  const o = [], c = Array.from(i.children);
  return Array.from(e.children).forEach((d) => {
    const l = c.findIndex(
      (v) => gn(d, v)
    ), b = l > -1 ? c[l] : null;
    b && c.splice(l, 1), !(b && rt(d, b)) && (!b || !rt(d, b)) && o.push({ theirs: d, ours: b });
  }), c.forEach((d) => o.push({ theirs: null, ours: d })), [
    {
      title: t?.title ?? q("merge.defaultTitle", {
        sink: fe(i),
        source: fe(e),
        tag: i.tagName
      }),
      primary: {
        label: q("merge.title"),
        icon: "merge_type",
        action: js(n, o, i, e, t),
        auto: t?.auto?.(i, e) ?? !1
      },
      content: [
        y`
          <mwc-list multi>
            ${Ri(
          n,
          (d) => d,
          ([d, l], b) => y`<mwc-check-list-item
                  value=${b}
                  class="attr"
                  twoline
                  left
                  hasMeta
                  .selected=${t?.selected?.(l) ?? !1}
                  .disabled=${t?.disabled?.(l) ?? !1}
                  style="--mdc-checkbox-checked-color: var(--mdc-theme-${l.ours ? l.theirs ? "secondary" : "error" : "primary"});"
                >
                  <span>${d}</span>
                  <span slot="secondary"
                    >${l.ours ?? ""}
                    ${l.ours && l.theirs ? y`&cularr;` : " "}
                    ${l.theirs ?? ""}</span
                  >
                  <mwc-icon slot="meta"
                    >${l.ours ? l.theirs ? "edit" : "delete" : "add"}</mwc-icon
                  >
                </mwc-check-list-item>`
        )}
            ${o.length ? y`<mwc-list-item noninteractive
                    >${q("merge.children")}</mwc-list-item
                  >
                  <li padded divider role="separator"></li>` : ""}
            ${Ri(
          o,
          (d) => d,
          (d, l) => y`<mwc-check-list-item
                  value=${l}
                  class="child"
                  twoline
                  left
                  hasMeta
                  .selected=${t?.selected?.(d) ?? !1}
                  .disabled=${t?.disabled?.(d) ?? !1}
                  style="--mdc-checkbox-checked-color: var(--mdc-theme-${d.ours ? d.theirs ? "secondary" : "error" : "primary"});"
                >
                  <span>${d.ours?.tagName ?? d.theirs?.tagName}</span>
                  <span slot="secondary"
                    >${d.ours ? fe(d.ours) : ""}
                    ${d.ours && d.theirs && fe(d.ours) + fe(d.theirs) ? y`&cularr;` : " "}
                    ${d.theirs ? fe(d.theirs) : ""}</span
                  >
                  <mwc-icon slot="meta"
                    >${d.ours ? d.theirs ? "merge_type" : "delete" : "add"}</mwc-icon
                  >
                </mwc-check-list-item>`
        )}
          </mwc-list>
        `
      ]
    }
  ];
}
function Ht(i, e) {
  return new CustomEvent("pending-state", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { promise: i, ...e?.detail }
  });
}
function Je(i, e) {
  let t = "", n = "";
  return e || (e = "	"), i.split(/>\s*</).forEach(function(r) {
    r.match(/^\/\w/) && (n = n.substring(e.length)), t += n + "<" + r + `>\r
`, r.match(/^<?\w[^>]*[^/]$/) && (n += e);
  }), t.substring(1, t.length - 3);
}
var Ws = Object.defineProperty, Ks = Object.getOwnPropertyDescriptor, yn = (i, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? Ks(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (r = (n ? a(e, t, r) : a(r)) || r);
  return n && r && Ws(e, t, r), r;
};
function oe() {
  return {
    /** Current [[`CompasSettings`]] in `localStorage`, default to [[`defaults`]]. */
    get compasSettings() {
      return {
        sclDataServiceUrl: this.getCompasSetting("sclDataServiceUrl"),
        sclValidatorServiceUrl: this.getCompasSetting("sclValidatorServiceUrl"),
        cimMappingServiceUrl: this.getCompasSetting("cimMappingServiceUrl"),
        sclAutoAlignmentServiceUrl: this.getCompasSetting(
          "sclAutoAlignmentServiceUrl"
        ),
        sitipeServiceUrl: this.getCompasSetting("sitipeServiceUrl"),
        useWebsockets: this.getCompasSetting("useWebsockets")
      };
    },
    get defaultSettings() {
      return {
        sclDataServiceUrl: "/compas-scl-data-service",
        sclValidatorServiceUrl: "/compas-scl-validator",
        cimMappingServiceUrl: "/compas-cim-mapping",
        sclAutoAlignmentServiceUrl: "/compas-scl-auto-alignment",
        sitipeServiceUrl: "/compas-sitipe-service",
        useWebsockets: "on"
      };
    },
    useWebsockets() {
      return this.compasSettings.useWebsockets === "on";
    },
    /** Update the `value` of `setting`, storing to `localStorage`. */
    setCompasSetting(i, e) {
      localStorage.setItem(i, e);
    },
    getCompasSetting(i) {
      return localStorage.getItem(i) ?? this.defaultSettings[i];
    }
  };
}
let st = class extends ee {
  get compasSettings() {
    return oe().compasSettings;
  }
  getSclDataServiceUrlField() {
    return this.shadowRoot.querySelector('mwc-textfield[id="sclDataServiceUrl"]');
  }
  getSclValidatorServiceUrlField() {
    return this.shadowRoot.querySelector(
      'mwc-textfield[id="sclValidatorServiceUrl"]'
    );
  }
  getCimMappingServiceUrlField() {
    return this.shadowRoot.querySelector('mwc-textfield[id="cimMappingServiceUrl"]');
  }
  getSclAutoAlignmentServiceUrlField() {
    return this.shadowRoot.querySelector(
      'mwc-textfield[id="sclAutoAlignmentServiceUrl"]'
    );
  }
  getSitipeServiceUrlField() {
    return this.shadowRoot.querySelector('mwc-textfield[id="sitipeServiceUrl"]');
  }
  getUseWebsockets() {
    return this.shadowRoot.querySelector('mwc-switch[id="useWebsockets"]');
  }
  valid() {
    return this.getSclDataServiceUrlField().checkValidity() && this.getSclValidatorServiceUrlField().checkValidity() && this.getCimMappingServiceUrlField().checkValidity() && this.getSclAutoAlignmentServiceUrlField().checkValidity() && this.getSitipeServiceUrlField().checkValidity();
  }
  save() {
    return this.valid() ? (oe().setCompasSetting(
      "sclDataServiceUrl",
      this.getSclDataServiceUrlField().value
    ), oe().setCompasSetting(
      "sclValidatorServiceUrl",
      this.getSclValidatorServiceUrlField().value
    ), oe().setCompasSetting(
      "cimMappingServiceUrl",
      this.getCimMappingServiceUrlField().value
    ), oe().setCompasSetting(
      "sclAutoAlignmentServiceUrl",
      this.getSclAutoAlignmentServiceUrlField().value
    ), oe().setCompasSetting(
      "sitipeServiceUrl",
      this.getSitipeServiceUrlField().value
    ), oe().setCompasSetting(
      "useWebsockets",
      this.getUseWebsockets().checked ? "on" : "off"
    ), !0) : !1;
  }
  reset() {
    return Object.keys(this.compasSettings).forEach(
      (i) => localStorage.removeItem(i)
    ), !0;
  }
  close() {
    this.dispatchEvent(De());
  }
  render() {
    return y` <mwc-textfield
        dialogInitialFocus
        id="sclDataServiceUrl"
        label="${P("compas.settings.sclDataServiceUrl")}"
        value="${this.compasSettings.sclDataServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        dialogInitialFocus
        id="sclValidatorServiceUrl"
        label="${P("compas.settings.sclValidatorServiceUrl")}"
        value="${this.compasSettings.sclValidatorServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="cimMappingServiceUrl"
        label="${P("compas.settings.cimMappingServiceUrl")}"
        value="${this.compasSettings.cimMappingServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="sclAutoAlignmentServiceUrl"
        label="${P("compas.settings.sclAutoAlignmentServiceUrl")}"
        value="${this.compasSettings.sclAutoAlignmentServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="sitipeServiceUrl"
        label="${P("compas.settings.sitipeServiceUrl")}"
        value="${this.compasSettings.sitipeServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-formfield label="${P("compas.settings.useWebsockets")}">
        <mwc-switch
          id="useWebsockets"
          ?checked=${this.compasSettings.useWebsockets === "on"}
        >
        </mwc-switch>
      </mwc-formfield>

      <mwc-button
        @click=${() => {
      this.reset() && this.close();
    }}
      >
        ${P("reset")}
      </mwc-button>`;
  }
};
st.styles = le`
    :host {
      width: 20vw;
    }

    mwc-textfield,
    mwc-formfield {
      margin: 10px;
      width: 100%;
    }

    mwc-button {
      --mdc-theme-primary: var(--mdc-theme-error);
    }
  `;
yn([
  m()
], st.prototype, "compasSettings", 1);
st = yn([
  W("compas-settings")
], st);
function Xs(i, e) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { ...i, ...e?.detail }
  });
}
const Zs = "NotFoundError", vn = "ApplicationError", ii = "ServerError", Pi = "https://www.lfenergy.org/compas/commons/v1";
async function re(i) {
  if (!i.ok) {
    let e = vn;
    return i.status === 404 ? e = Zs : i.status >= 500 && (e = ii), Promise.reject({
      type: e,
      status: i.status,
      message: await Qs(i)
    });
  }
  return Promise.resolve(i.text());
}
async function Qs(i) {
  const e = await i.text(), t = await ce(e);
  return Sn(t) ?? i.statusText;
}
function Sn(i) {
  const e = Array.from(
    i.querySelectorAll("ErrorResponse > ErrorMessage") ?? []
  );
  if (e.length > 0) {
    let t = "";
    return e.forEach((n, r) => {
      const s = n.getElementsByTagNameNS(Pi, "Code").item(0).textContent, a = n.getElementsByTagNameNS(Pi, "Message").item(0).textContent;
      r > 0 && (t += ", "), t += a, s && (t += " (" + s + ")");
    }), t;
  }
}
function ce(i) {
  return Promise.resolve(
    new DOMParser().parseFromString(i, "application/xml")
  );
}
function pe(i) {
  const e = i.querySelectorAll("SclData").item(0).textContent ?? "", t = new DOMParser().parseFromString(
    e,
    "application/xml"
  );
  return Promise.resolve(t);
}
function se(i) {
  return Promise.reject({ type: ii, message: i.message });
}
function Js(i, e) {
  let t = e.message;
  e.status && (t += " (" + e.status + ")"), i && i.dispatchEvent(
    Xs({
      kind: "error",
      title: q("compas.error.server"),
      message: q("compas.error.serverDetails", {
        type: e.type,
        message: t
      })
    })
  );
}
function Ye(i) {
  return i.startsWith("http://") || i.startsWith("https://") ? i.replace("http://", "ws://").replace("https://", "wss://") : (document.location.protocol == "http:" ? "ws://" : "wss://") + document.location.hostname + ":" + Ys() + i;
}
function Ys() {
  return document.location.port === "" ? document.location.protocol == "http:" ? "80" : "443" : document.location.port;
}
function et(i, e, t, n) {
  let r;
  function s(o) {
    return new Promise((c) => setTimeout(c, o));
  }
  async function a() {
    for (; r !== void 0; )
      await s(250);
  }
  return new Promise((o, c) => {
    r = new WebSocket(t), r.onopen = () => {
      r?.send(n);
    }, r.onmessage = (p) => {
      ce(p.data).then((d) => {
        if (d.documentElement.localName === "ErrorResponse") {
          const l = Sn(d);
          c({ type: vn, message: l });
        } else
          o(d);
        r?.close();
      }).catch((d) => {
        c(d), r?.close();
      });
    }, r.onerror = () => {
      c({
        type: ii,
        message: `Websocket Error in service "${e}"`
      }), r?.close();
    }, r.onclose = () => {
      r = void 0;
    }, i.dispatchEvent(Ht(a()));
  });
}
const X = "https://www.lfenergy.org/compas/SclDataService/v1";
function ni() {
  function i() {
    return oe().compasSettings.sclDataServiceUrl;
  }
  function e() {
    return oe().useWebsockets();
  }
  function t() {
    const n = i() + "/common/v1/type/list";
    return fetch(n).catch(se).then(re).then(ce);
  }
  return {
    listOrderedSclTypes() {
      return t().then((n) => Array.from(n.querySelectorAll("*|Type") ?? []).sort(
        (r, s) => {
          const a = r.getElementsByTagNameNS(X, "Description").item(0).textContent ?? "", o = s.getElementsByTagNameNS(X, "Description").item(0).textContent ?? "";
          return a.localeCompare(o);
        }
      ));
    },
    listScls(n) {
      const r = i() + "/scl/v1/" + n + "/list";
      return fetch(r).catch(se).then(re).then(ce);
    },
    listSclVersions(n, r) {
      const s = i() + "/scl/v1/" + n + "/" + r + "/versions";
      return fetch(s).catch(se).then(re).then(ce);
    },
    getSclDocument(n, r, s) {
      if (e()) {
        const o = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:GetWsRequest xmlns:sds="${X}">
           <sds:Id>${s}</sds:Id>
         </sds:GetWsRequest>`, c = i() + "/scl-ws/v1/" + r + "/get";
        return et(
          n,
          "CompasSclDataService",
          Ye(c),
          o
        ).then(pe);
      }
      const a = i() + "/scl/v1/" + r + "/" + s;
      return fetch(a).catch(se).then(re).then(ce).then(pe);
    },
    getSclDocumentVersion(n, r, s, a) {
      if (e()) {
        const c = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:GetVersionWsRequest xmlns:sds="${X}">
           <sds:Id>${s}</sds:Id>
           <sds:Version>${a}</sds:Version>
         </sds:GetVersionWsRequest>`, p = i() + "/scl-ws/v1/" + r + "/get-version";
        return et(
          n,
          "CompasSclDataService",
          Ye(p),
          c
        ).then(pe);
      }
      const o = i() + "/scl/v1/" + r + "/" + s + "/" + a;
      return fetch(o).catch(se).then(re).then(ce).then(pe);
    },
    deleteSclDocumentVersion(n, r, s) {
      const a = i() + "/scl/v1/" + n + "/" + r + "/" + s;
      return fetch(a, { method: "DELETE" }).catch(se).then(re);
    },
    deleteSclDocument(n, r) {
      const s = i() + "/scl/v1/" + n + "/" + r;
      return fetch(s, { method: "DELETE" }).catch(se).then(re);
    },
    addSclDocument(n, r, s) {
      if (e()) {
        const c = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:CreateWsRequest xmlns:sds="${X}">
           <sds:Name>${s.sclName}</sds:Name>
           <sds:Comment>${s.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${Je(
          new XMLSerializer().serializeToString(s.doc.documentElement)
        )}]]></sds:SclData>
         </sds:CreateWsRequest>`, p = i() + "/scl-ws/v1/" + r + "/create";
        return et(
          n,
          "CompasSclDataService",
          Ye(p),
          c
        ).then(pe);
      }
      const a = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:CreateRequest xmlns:sds="${X}">
            <sds:Name>${s.sclName}</sds:Name>
            <sds:Comment>${s.comment ?? ""}</sds:Comment>
            <sds:SclData><![CDATA[${Je(
        new XMLSerializer().serializeToString(s.doc.documentElement)
      )}]]></sds:SclData>
         </sds:CreateRequest>`, o = i() + "/scl/v1/" + r;
      return fetch(o, {
        method: "POST",
        headers: {
          "Content-Type": "application/xml"
        },
        body: a
      }).catch(se).then(re).then(ce).then(pe);
    },
    updateSclDocument(n, r, s, a) {
      if (e()) {
        const p = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:UpdateWsRequest xmlns:sds="${X}">
           <sds:Id>${s}</sds:Id>
           <sds:ChangeSet>${a.changeSet}</sds:ChangeSet>
           <sds:Comment>${a.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${Je(
          new XMLSerializer().serializeToString(a.doc.documentElement)
        )}]]></sds:SclData>
         </sds:UpdateWsRequest>`, d = i() + "/scl-ws/v1/" + r + "/update";
        return et(
          n,
          "CompasSclDataService",
          Ye(d),
          p
        ).then(pe);
      }
      const o = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:UpdateRequest xmlns:sds="${X}">
           <sds:ChangeSet>${a.changeSet}</sds:ChangeSet>
           <sds:Comment>${a.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${Je(
        new XMLSerializer().serializeToString(a.doc.documentElement)
      )}]]></sds:SclData>
         </sds:UpdateRequest>`, c = i() + "/scl/v1/" + r + "/" + s;
      return fetch(c, {
        method: "PUT",
        headers: {
          "Content-Type": "application/xml"
        },
        body: o
      }).catch(se).then(re).then(ce).then(pe);
    }
  };
}
var ea = Object.defineProperty, ta = Object.getOwnPropertyDescriptor, xn = (i, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? ta(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (r = (n ? a(e, t, r) : a(r)) || r);
  return n && r && ea(e, t, r), r;
};
let at = class extends ee {
  render() {
    return y` ${this.renderHeader()} ${this.renderSeparator()}`;
  }
  renderHeader() {
    return this.header ? y`<h4 class="header">${this.header}</h4>` : y``;
  }
  renderSeparator() {
    return y`<div role="separator"></div>`;
  }
};
at.styles = le`
    div {
      height: 0px;
      margin: 10px 0px 10px 0px;
      border-top: none;
      border-right: none;
      border-left: none;
      border-image: initial;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    }
  `;
xn([
  m({
    type: String
  })
], at.prototype, "header", 2);
at = xn([
  W("wizard-divider")
], at);
var ia = Object.defineProperty, na = Object.getOwnPropertyDescriptor, kn = (i, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? na(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (r = (n ? a(e, t, r) : a(r)) || r);
  return n && r && ia(e, t, r), r;
};
function ra(i) {
  return new CustomEvent("typeSelected", {
    bubbles: !0,
    composed: !0,
    detail: { type: i }
  });
}
let Ut = class extends ee {
  firstUpdated() {
    this.fetchData();
  }
  fetchData() {
    ni().listOrderedSclTypes().then((i) => this.sclTypes = i);
  }
  render() {
    return this.sclTypes ? this.sclTypes.length <= 0 ? y` <mwc-list>
        <mwc-list-item><i>${P("compas.noSclTypes")}</i></mwc-list-item>
      </mwc-list>` : y` <mwc-list>
      ${this.sclTypes.map((i) => {
      const e = i.getElementsByTagNameNS(X, "Code").item(0).textContent ?? "", t = i.getElementsByTagNameNS(X, "Description").item(0).textContent ?? "";
      return y`<mwc-list-item
          tabindex="0"
          @click=${() => this.dispatchEvent(ra(e))}
        >
          <span>${t} (${e})</span>
        </mwc-list-item>`;
    })}
    </mwc-list>` : y` <compas-loading></compas-loading> `;
  }
};
kn([
  m()
], Ut.prototype, "sclTypes", 2);
Ut = kn([
  W("compas-scltype-list")
], Ut);
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var k = {
  UNKNOWN: "Unknown",
  BACKSPACE: "Backspace",
  ENTER: "Enter",
  SPACEBAR: "Spacebar",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  END: "End",
  HOME: "Home",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_RIGHT: "ArrowRight",
  ARROW_DOWN: "ArrowDown",
  DELETE: "Delete",
  ESCAPE: "Escape",
  TAB: "Tab"
}, U = /* @__PURE__ */ new Set();
U.add(k.BACKSPACE);
U.add(k.ENTER);
U.add(k.SPACEBAR);
U.add(k.PAGE_UP);
U.add(k.PAGE_DOWN);
U.add(k.END);
U.add(k.HOME);
U.add(k.ARROW_LEFT);
U.add(k.ARROW_UP);
U.add(k.ARROW_RIGHT);
U.add(k.ARROW_DOWN);
U.add(k.DELETE);
U.add(k.ESCAPE);
U.add(k.TAB);
var K = {
  BACKSPACE: 8,
  ENTER: 13,
  SPACEBAR: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
  ESCAPE: 27,
  TAB: 9
}, B = /* @__PURE__ */ new Map();
B.set(K.BACKSPACE, k.BACKSPACE);
B.set(K.ENTER, k.ENTER);
B.set(K.SPACEBAR, k.SPACEBAR);
B.set(K.PAGE_UP, k.PAGE_UP);
B.set(K.PAGE_DOWN, k.PAGE_DOWN);
B.set(K.END, k.END);
B.set(K.HOME, k.HOME);
B.set(K.ARROW_LEFT, k.ARROW_LEFT);
B.set(K.ARROW_UP, k.ARROW_UP);
B.set(K.ARROW_RIGHT, k.ARROW_RIGHT);
B.set(K.ARROW_DOWN, k.ARROW_DOWN);
B.set(K.DELETE, k.DELETE);
B.set(K.ESCAPE, k.ESCAPE);
B.set(K.TAB, k.TAB);
var Se = /* @__PURE__ */ new Set();
Se.add(k.PAGE_UP);
Se.add(k.PAGE_DOWN);
Se.add(k.END);
Se.add(k.HOME);
Se.add(k.ARROW_LEFT);
Se.add(k.ARROW_UP);
Se.add(k.ARROW_RIGHT);
Se.add(k.ARROW_DOWN);
function ue(i) {
  var e = i.key;
  if (U.has(e))
    return e;
  var t = B.get(i.keyCode);
  return t || k.UNKNOWN;
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var me, ae, A = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
me = {}, me["" + A.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", me["" + A.LIST_ITEM_CLASS] = "mdc-list-item", me["" + A.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", me["" + A.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", me["" + A.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", me["" + A.ROOT] = "mdc-list";
var Ie = (ae = {}, ae["" + A.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", ae["" + A.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", ae["" + A.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", ae["" + A.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", ae["" + A.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", ae["" + A.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", ae["" + A.ROOT] = "mdc-deprecated-list", ae), tt = {
  ACTION_EVENT: "MDCList:action",
  ARIA_CHECKED: "aria-checked",
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: "aria-current",
  ARIA_DISABLED: "aria-disabled",
  ARIA_ORIENTATION: "aria-orientation",
  ARIA_ORIENTATION_HORIZONTAL: "horizontal",
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: "aria-selected",
  ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
  ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: `
    .` + A.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + A.LIST_ITEM_CLASS + ` a,
    .` + Ie[A.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ie[A.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + A.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + A.LIST_ITEM_CLASS + ` a,
    .` + A.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + A.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Ie[A.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ie[A.LIST_ITEM_CLASS] + ` a,
    .` + Ie[A.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Ie[A.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, G = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Bt = (i, e) => i - e, sa = (i, e) => {
  const t = Array.from(i), n = Array.from(e), r = { added: [], removed: [] }, s = t.sort(Bt), a = n.sort(Bt);
  let o = 0, c = 0;
  for (; o < s.length || c < a.length; ) {
    const p = s[o], d = a[c];
    if (p === d) {
      o++, c++;
      continue;
    }
    if (p !== void 0 && (d === void 0 || p < d)) {
      r.removed.push(p), o++;
      continue;
    }
    if (d !== void 0 && (p === void 0 || d < p)) {
      r.added.push(d), c++;
      continue;
    }
  }
  return r;
}, aa = ["input", "button", "textarea", "select"];
function Me(i) {
  return i instanceof Set;
}
const _t = (i) => {
  const e = i === G.UNSET_INDEX ? /* @__PURE__ */ new Set() : i;
  return Me(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class ri extends nn {
  constructor(e) {
    super(Object.assign(Object.assign({}, ri.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = G.UNSET_INDEX, this.focusedItemIndex_ = G.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return tt;
  }
  static get numbers() {
    return G;
  }
  static get defaultAdapter() {
    return {
      focusItemAtIndex: () => {
      },
      getFocusedElementIndex: () => 0,
      getListItemCount: () => 0,
      isFocusInsideList: () => !1,
      isRootFocused: () => !1,
      notifyAction: () => {
      },
      notifySelected: () => {
      },
      getSelectedStateForElementIndex: () => !1,
      setDisabledStateForElementIndex: () => {
      },
      getDisabledStateForElementIndex: () => !1,
      setSelectedStateForElementIndex: () => {
      },
      setActivatedStateForElementIndex: () => {
      },
      setTabIndexForElementIndex: () => {
      },
      setAttributeForElementIndex: () => {
      },
      getAttributeForElementIndex: () => null
    };
  }
  /**
   * Sets the private wrapFocus_ variable.
   */
  setWrapFocus(e) {
    this.wrapFocus_ = e;
  }
  /**
   * Sets the private wrapFocus_ variable.
   */
  setMulti(e) {
    this.isMulti_ = e;
    const t = this.selectedIndex_;
    if (e) {
      if (!Me(t)) {
        const n = t === G.UNSET_INDEX;
        this.selectedIndex_ = n ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([t]);
      }
    } else if (Me(t))
      if (t.size) {
        const n = Array.from(t).sort(Bt);
        this.selectedIndex_ = n[0];
      } else
        this.selectedIndex_ = G.UNSET_INDEX;
  }
  /**
   * Sets the isVertical_ private variable.
   */
  setVerticalOrientation(e) {
    this.isVertical_ = e;
  }
  /**
   * Sets the useActivatedClass_ private variable.
   */
  setUseActivatedClass(e) {
    this.useActivatedClass_ = e;
  }
  getSelectedIndex() {
    return this.selectedIndex_;
  }
  setSelectedIndex(e) {
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(_t(e)) : this.setSingleSelectionAtIndex_(e));
  }
  /**
   * Focus in handler for the list items.
   */
  handleFocusIn(e, t) {
    t >= 0 && this.adapter.setTabIndexForElementIndex(t, 0);
  }
  /**
   * Focus out handler for the list items.
   */
  handleFocusOut(e, t) {
    t >= 0 && this.adapter.setTabIndexForElementIndex(t, -1), setTimeout(() => {
      this.adapter.isFocusInsideList() || this.setTabindexToFirstSelectedItem_();
    }, 0);
  }
  /**
   * Key handler for the list.
   */
  handleKeydown(e, t, n) {
    const r = ue(e) === "ArrowLeft", s = ue(e) === "ArrowUp", a = ue(e) === "ArrowRight", o = ue(e) === "ArrowDown", c = ue(e) === "Home", p = ue(e) === "End", d = ue(e) === "Enter", l = ue(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      s || p ? (e.preventDefault(), this.focusLastElement()) : (o || c) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let b = this.adapter.getFocusedElementIndex();
    if (b === -1 && (b = n, b < 0))
      return;
    let v;
    if (this.isVertical_ && o || !this.isVertical_ && a)
      this.preventDefaultEvent(e), v = this.focusNextElement(b);
    else if (this.isVertical_ && s || !this.isVertical_ && r)
      this.preventDefaultEvent(e), v = this.focusPrevElement(b);
    else if (c)
      this.preventDefaultEvent(e), v = this.focusFirstElement();
    else if (p)
      this.preventDefaultEvent(e), v = this.focusLastElement();
    else if ((d || l) && t) {
      const h = e.target;
      if (h && h.tagName === "A" && d)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(b, !0);
    }
    this.focusedItemIndex_ = b, v !== void 0 && (this.setTabindexAtIndex_(v), this.focusedItemIndex_ = v);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, t, n) {
    e !== G.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, t, n), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
  }
  /**
   * Focuses the next element on the list.
   */
  focusNextElement(e) {
    const t = this.adapter.getListItemCount();
    let n = e + 1;
    if (n >= t)
      if (this.wrapFocus_)
        n = 0;
      else
        return e;
    return this.adapter.focusItemAtIndex(n), n;
  }
  /**
   * Focuses the previous element on the list.
   */
  focusPrevElement(e) {
    let t = e - 1;
    if (t < 0)
      if (this.wrapFocus_)
        t = this.adapter.getListItemCount() - 1;
      else
        return e;
    return this.adapter.focusItemAtIndex(t), t;
  }
  focusFirstElement() {
    return this.adapter.focusItemAtIndex(0), 0;
  }
  focusLastElement() {
    const e = this.adapter.getListItemCount() - 1;
    return this.adapter.focusItemAtIndex(e), e;
  }
  /**
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */
  setEnabled(e, t) {
    this.isIndexValid_(e) && this.adapter.setDisabledStateForElementIndex(e, !t);
  }
  /**
   * Ensures that preventDefault is only called if the containing element
   * doesn't consume the event, and it will cause an unintended scroll.
   */
  preventDefaultEvent(e) {
    const n = `${e.target.tagName}`.toLowerCase();
    aa.indexOf(n) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, t = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== G.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), t && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, t = !0) {
    const n = _t(this.selectedIndex_), r = sa(n, e);
    if (!(!r.removed.length && !r.added.length)) {
      for (const s of r.removed)
        t && this.adapter.setSelectedStateForElementIndex(s, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(s, !1);
      for (const s of r.added)
        t && this.adapter.setSelectedStateForElementIndex(s, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(s, !0);
      this.selectedIndex_ = e, this.adapter.notifySelected(e, r);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(e) {
    this.selectedIndex_ === G.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, tt.ARIA_CURRENT));
    const t = this.ariaCurrentAttrValue_ !== null, n = t ? tt.ARIA_CURRENT : tt.ARIA_SELECTED;
    this.selectedIndex_ !== G.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, n, "false");
    const r = t ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, n, r);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === G.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== G.UNSET_INDEX ? e = this.selectedIndex_ : Me(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
  }
  isIndexValid_(e) {
    if (e instanceof Set) {
      if (!this.isMulti_)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      if (e.size === 0)
        return !0;
      {
        let t = !1;
        for (const n of e)
          if (t = this.isIndexInRange_(n), t)
            break;
        return t;
      }
    } else if (typeof e == "number") {
      if (this.isMulti_)
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + e);
      return e === G.UNSET_INDEX || this.isIndexInRange_(e);
    } else
      return !1;
  }
  isIndexInRange_(e) {
    const t = this.adapter.getListItemCount();
    return e >= 0 && e < t;
  }
  /**
   * Sets selected index on user action, toggles checkbox / radio based on
   * toggleCheckbox value. User interaction should not toggle list item(s) when
   * disabled.
   */
  setSelectedIndexOnAction_(e, t, n) {
    if (this.adapter.getDisabledStateForElementIndex(e))
      return;
    let r = e;
    this.isMulti_ && (r = /* @__PURE__ */ new Set([e])), this.isIndexValid_(r) && (this.isMulti_ ? this.toggleMultiAtIndex(e, n, t) : t || n ? this.setSingleSelectionAtIndex_(e, t) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(G.UNSET_INDEX), t && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, t, n = !0) {
    let r = !1;
    t === void 0 ? r = !this.adapter.getSelectedStateForElementIndex(e) : r = t;
    const s = _t(this.selectedIndex_);
    r ? s.add(e) : s.delete(e), this.setMultiSelectionAtIndex_(s, n);
  }
}
function oa(i, e = 50) {
  let t;
  return function(n = !0) {
    clearTimeout(t), t = setTimeout(() => {
      i(n);
    }, e);
  };
}
const it = (i) => i.hasAttribute("mwc-list-item");
function ca() {
  const i = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), i();
}
class J extends ei {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = ri, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = oa(this.layout.bind(this));
    this.debouncedLayout = (t = !0) => {
      ca.call(this), e(t);
    };
  }
  // tslint:disable:ban-ts-ignore
  async getUpdateComplete() {
    const e = await super.getUpdateComplete();
    return await this.itemsReady, e;
  }
  get items() {
    return this.items_;
  }
  updateItems() {
    var e;
    const t = (e = this.assignedElements) !== null && e !== void 0 ? e : [], n = [];
    for (const a of t)
      it(a) && (n.push(a), a._managingList = this), a.hasAttribute("divider") && !a.hasAttribute("role") && a.setAttribute("role", "separator");
    this.items_ = n;
    const r = /* @__PURE__ */ new Set();
    if (this.items_.forEach((a, o) => {
      this.itemRoles ? a.setAttribute("role", this.itemRoles) : a.removeAttribute("role"), a.selected && r.add(o);
    }), this.multi)
      this.select(r);
    else {
      const a = r.size ? r.entries().next().value[1] : -1;
      this.select(a);
    }
    const s = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(s);
  }
  get selected() {
    const e = this.index;
    if (!Me(e))
      return e === -1 ? null : this.items[e];
    const t = [];
    for (const n of e)
      t.push(this.items[n]);
    return t;
  }
  get index() {
    return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
  }
  render() {
    const e = this.innerRole === null ? void 0 : this.innerRole, t = this.innerAriaLabel === null ? void 0 : this.innerAriaLabel, n = this.rootTabbable ? "0" : "-1";
    return y`
      <!-- @ts-ignore -->
      <ul
          tabindex=${n}
          role="${we(e)}"
          aria-label="${we(t)}"
          class="mdc-deprecated-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `;
  }
  renderPlaceholder() {
    var e;
    const t = (e = this.assignedElements) !== null && e !== void 0 ? e : [];
    return this.emptyMessage !== void 0 && t.length === 0 ? y`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      ` : null;
  }
  firstUpdated() {
    super.firstUpdated(), this.items.length || (this.mdcFoundation.setMulti(this.multi), this.layout());
  }
  onFocusIn(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const t = this.getIndexOfTarget(e);
      this.mdcFoundation.handleFocusIn(e, t);
    }
  }
  onFocusOut(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const t = this.getIndexOfTarget(e);
      this.mdcFoundation.handleFocusOut(e, t);
    }
  }
  onKeydown(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const t = this.getIndexOfTarget(e), n = e.target, r = it(n);
      this.mdcFoundation.handleKeydown(e, r, t);
    }
  }
  onRequestSelected(e) {
    if (this.mdcFoundation) {
      let t = this.getIndexOfTarget(e);
      if (t === -1 && (this.layout(), t = this.getIndexOfTarget(e), t === -1) || this.items[t].disabled)
        return;
      const r = e.detail.selected, s = e.detail.source;
      this.mdcFoundation.handleSingleSelection(t, s === "interaction", r), e.stopPropagation();
    }
  }
  getIndexOfTarget(e) {
    const t = this.items, n = e.composedPath();
    for (const r of n) {
      let s = -1;
      if (Er(r) && it(r) && (s = t.indexOf(r)), s !== -1)
        return s;
    }
    return -1;
  }
  createAdapter() {
    return this.mdcAdapter = {
      getListItemCount: () => this.mdcRoot ? this.items.length : 0,
      getFocusedElementIndex: this.getFocusedItemIndex,
      getAttributeForElementIndex: (e, t) => {
        if (!this.mdcRoot)
          return "";
        const r = this.items[e];
        return r ? r.getAttribute(t) : "";
      },
      setAttributeForElementIndex: (e, t, n) => {
        if (!this.mdcRoot)
          return;
        const r = this.items[e];
        r && r.setAttribute(t, n);
      },
      focusItemAtIndex: (e) => {
        const t = this.items[e];
        t && t.focus();
      },
      setTabIndexForElementIndex: (e, t) => {
        const n = this.items[e];
        n && (n.tabindex = t);
      },
      notifyAction: (e) => {
        const t = { bubbles: !0, composed: !0 };
        t.detail = { index: e };
        const n = new CustomEvent("action", t);
        this.dispatchEvent(n);
      },
      notifySelected: (e, t) => {
        const n = { bubbles: !0, composed: !0 };
        n.detail = { index: e, diff: t };
        const r = new CustomEvent("selected", n);
        this.dispatchEvent(r);
      },
      isFocusInsideList: () => Ar(this),
      isRootFocused: () => {
        const e = this.mdcRoot;
        return e.getRootNode().activeElement === e;
      },
      setDisabledStateForElementIndex: (e, t) => {
        const n = this.items[e];
        n && (n.disabled = t);
      },
      getDisabledStateForElementIndex: (e) => {
        const t = this.items[e];
        return t ? t.disabled : !1;
      },
      setSelectedStateForElementIndex: (e, t) => {
        const n = this.items[e];
        n && (n.selected = t);
      },
      getSelectedStateForElementIndex: (e) => {
        const t = this.items[e];
        return t ? t.selected : !1;
      },
      setActivatedStateForElementIndex: (e, t) => {
        const n = this.items[e];
        n && (n.activated = t);
      }
    }, this.mdcAdapter;
  }
  selectUi(e, t = !1) {
    const n = this.items[e];
    n && (n.selected = !0, n.activated = t);
  }
  deselectUi(e) {
    const t = this.items[e];
    t && (t.selected = !1, t.activated = !1);
  }
  select(e) {
    this.mdcFoundation && this.mdcFoundation.setSelectedIndex(e);
  }
  toggle(e, t) {
    this.multi && this.mdcFoundation.toggleMultiAtIndex(e, t);
  }
  onListItemConnected(e) {
    const t = e.target;
    this.layout(this.items.indexOf(t) === -1);
  }
  layout(e = !0) {
    e && this.updateItems();
    const t = this.items[0];
    for (const n of this.items)
      n.tabindex = -1;
    t && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = t) : t.tabindex = 0), this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot || !this.items.length)
      return -1;
    const e = tn();
    if (!e.length)
      return -1;
    for (let t = e.length - 1; t >= 0; t--) {
      const n = e[t];
      if (it(n))
        return this.items.indexOf(n);
    }
    return -1;
  }
  focusItemAtIndex(e) {
    for (const t of this.items)
      if (t.tabindex === 0) {
        t.tabindex = -1;
        break;
      }
    this.items[e].tabindex = 0, this.items[e].focus();
  }
  focus() {
    const e = this.mdcRoot;
    e && e.focus();
  }
  blur() {
    const e = this.mdcRoot;
    e && e.blur();
  }
}
u([
  m({ type: String })
], J.prototype, "emptyMessage", void 0);
u([
  V(".mdc-deprecated-list")
], J.prototype, "mdcRoot", void 0);
u([
  Qi("", !0, "*")
], J.prototype, "assignedElements", void 0);
u([
  Qi("", !0, '[tabindex="0"]')
], J.prototype, "tabbableElements", void 0);
u([
  m({ type: Boolean }),
  ve(function(i) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(i);
  })
], J.prototype, "activatable", void 0);
u([
  m({ type: Boolean }),
  ve(function(i, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(i), e !== void 0 && this.layout();
  })
], J.prototype, "multi", void 0);
u([
  m({ type: Boolean }),
  ve(function(i) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(i);
  })
], J.prototype, "wrapFocus", void 0);
u([
  m({ type: String }),
  ve(function(i, e) {
    e !== void 0 && this.updateItems();
  })
], J.prototype, "itemRoles", void 0);
u([
  m({ type: String })
], J.prototype, "innerRole", void 0);
u([
  m({ type: String })
], J.prototype, "innerAriaLabel", void 0);
u([
  m({ type: Boolean })
], J.prototype, "rootTabbable", void 0);
u([
  m({ type: Boolean, reflect: !0 }),
  ve(function(i) {
    var e, t;
    if (i) {
      const n = (t = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && t !== void 0 ? t : null;
      this.previousTabindex = n, n && n.setAttribute("tabindex", "-1");
    } else !i && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], J.prototype, "noninteractive", void 0);
var da = Object.defineProperty, la = Object.getOwnPropertyDescriptor, Ae = (i, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? la(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (r = (n ? a(e, t, r) : a(r)) || r);
  return n && r && da(e, t, r), r;
};
function Gt(i) {
  return !i.closest("filtered-list") || !i.parentElement || i.parentElement instanceof Y ? i : Gt(i.parentElement);
}
function pa(i, e) {
  const t = i.innerText + `
`, n = Array.from(i.children).map((o) => o.innerText).join(`
`), r = i.value, s = (t + n + r).toUpperCase(), a = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  a.length === 1 && a[0] === "" || a.every((o) => new RegExp(
    `*${o}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(s)) ? Gt(i).classList.remove("hidden") : Gt(i).classList.add("hidden");
}
let Y = class extends J {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((i) => i instanceof Te);
  }
  get isAllSelected() {
    return this.items.filter((i) => !i.disabled).filter((i) => i instanceof Te).every((i) => i.selected);
  }
  get isSomeSelected() {
    return this.items.filter((i) => !i.disabled).filter((i) => i instanceof Te).some((i) => i.selected);
  }
  onCheckAll() {
    const i = !this.isAllSelected;
    this.items.filter((e) => !e.disabled && !e.classList.contains("hidden")).forEach((e) => e.selected = i);
  }
  onFilterInput() {
    Array.from(
      this.querySelectorAll(
        "mwc-list-item, mwc-check-list-item, mwc-radio-list-item"
      )
    ).forEach(
      (i) => pa(i, this.searchField.value)
    );
  }
  onListItemConnected(i) {
    super.onListItemConnected(i), this.requestUpdate();
  }
  update(i) {
    super.update(i), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? y`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : y``;
  }
  render() {
    return y`<div id="tfcontainer">
        <abbr title="${this.searchFieldLabel ?? q("filter")}"
          ><mwc-textfield
            label="${this.searchFieldLabel ?? ""}"
            iconTrailing="search"
            outlined
            @input=${() => this.onFilterInput()}
          ></mwc-textfield
        ></abbr>
        ${this.renderCheckAll()}
      </div>
      ${super.render()}`;
  }
};
Y.styles = le`
    ${Jt($n.styles)}

    #tfcontainer {
      display: flex;
      flex: auto;
    }

    ::slotted(.hidden) {
      display: none;
    }

    abbr {
      display: flex;
      flex: auto;
      margin: 8px;
      text-decoration: none;
      border-bottom: none;
    }

    mwc-textfield {
      width: 100%;
      --mdc-shape-small: 28px;
    }

    mwc-formfield.checkall {
      padding-right: 8px;
    }

    .mdc-list {
      padding-inline-start: 0px;
    }
  `;
Ae([
  m({ type: String })
], Y.prototype, "searchFieldLabel", 2);
Ae([
  m({ type: Boolean })
], Y.prototype, "disableCheckAll", 2);
Ae([
  C()
], Y.prototype, "existCheckListItem", 1);
Ae([
  C()
], Y.prototype, "isAllSelected", 1);
Ae([
  C()
], Y.prototype, "isSomeSelected", 1);
Ae([
  V("mwc-textfield")
], Y.prototype, "searchField", 2);
Y = Ae([
  W("filtered-list")
], Y);
var ua = Object.defineProperty, ma = Object.getOwnPropertyDescriptor, je = (i, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? ma(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (r = (n ? a(e, t, r) : a(r)) || r);
  return n && r && ua(e, t, r), r;
};
let _e = class extends Y {
  constructor() {
    super(...arguments), this.disabled = !1;
  }
  toggleList() {
    this.filterDialog.show();
  }
  onClosing() {
    const i = [];
    this.selected && (this.selected instanceof Array ? this.selected.forEach((e) => i.push(e.value)) : i.push(this.selected.value), this.dispatchEvent(ha(i)));
  }
  render() {
    return y`
      <mwc-icon-button
        icon="${this.icon}"
        @click="${this.toggleList}"
        ?disabled="${this.disabled}"
      >
        <slot name="icon"></slot>
      </mwc-icon-button>
      <mwc-dialog
        id="filterDialog"
        heading="${this.header ? this.header : q("filter")}"
        scrimClickAction=""
        @closing="${() => this.onClosing()}"
      >
        ${super.render()}
        <mwc-button slot="primaryAction" dialogAction="close">
          ${q("close")}
        </mwc-button>
      </mwc-dialog>
    `;
  }
};
_e.styles = le`
    ${Jt(Y.styles)}

    mwc-icon-button {
      color: var(--mdc-theme-on-surface);
    }

    mwc-dialog {
      --mdc-dialog-max-height: calc(100vh - 150px);
    }
  `;
je([
  m()
], _e.prototype, "header", 2);
je([
  m()
], _e.prototype, "icon", 2);
je([
  m({ type: Boolean })
], _e.prototype, "disabled", 2);
je([
  V("#filterDialog")
], _e.prototype, "filterDialog", 2);
_e = je([
  W("oscd-filter-button")
], _e);
function ha(i, e) {
  return new CustomEvent("selected-items-changed", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { selectedItems: i, ...e?.detail }
  });
}
var fa = Object.defineProperty, ga = Object.getOwnPropertyDescriptor, Re = (i, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? ga(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (r = (n ? a(e, t, r) : a(r)) || r);
  return n && r && fa(e, t, r), r;
};
function ba(i) {
  return new CustomEvent("scl-selected", {
    bubbles: !0,
    composed: !0,
    detail: { docId: i }
  });
}
let ye = class extends ee {
  constructor() {
    super(...arguments), this.labels = [], this.selectedLabels = [];
  }
  get filteredItems() {
    if (this.items)
      return this.labels.length === this.selectedLabels.length ? this.items : this.items.filter((i) => Array.from(i.querySelectorAll("Label") ?? []).map((t) => t.textContent).filter((t) => !!t).filter((t) => this.selectedLabels.includes(t)).length > 0);
  }
  firstUpdated() {
    this.fetchData();
  }
  updated(i) {
    super.updated(i), i.has("type") && (this.items = void 0, this.labels = [], this.selectedLabels = [], this.fetchData());
  }
  fetchData() {
    this.type && ni().listScls(this.type).then((i) => {
      this.items = Array.from(i.querySelectorAll("Item") ?? []), this.labels = Array.from(
        new Set(
          Array.from(i.querySelectorAll("Label") ?? []).map((e) => e.textContent).filter((e) => !!e).sort((e, t) => e.localeCompare(t))
        )
      ), this.selectedLabels = this.labels;
    });
  }
  render() {
    if (!this.items)
      return y` <compas-loading></compas-loading> `;
    if (this.items?.length <= 0)
      return y` <mwc-list>
        <mwc-list-item><i>${P("compas.noScls")}</i></mwc-list-item>
      </mwc-list>`;
    const i = this.filteredItems;
    return y`
      <div class="filters">
        <span>${P("compas.sclFilter")}</span>
        <oscd-filter-button
          id="labelsFilter"
          multi="true"
          ?disabled="${this.labels.length <= 0}"
          .header=${P("compas.label.selectLabels")}
          @selected-items-changed="${(e) => {
      this.selectedLabels = e.detail.selectedItems, this.requestUpdate("items"), this.requestUpdate("filteredItems"), this.requestUpdate("selectedLabels");
    }}"
        >
          <span slot="icon">
            <mwc-icon>
              ${this.labels.length != this.selectedLabels.length ? "label" : "label_off"}
            </mwc-icon>
          </span>
          ${this.labels.map((e) => y` <mwc-check-list-item
              value="${e}"
              ?selected="${this.selectedLabels.includes(e)}"
            >
              ${e}
            </mwc-check-list-item>`)}
        </oscd-filter-button>
      </div>
      ${i && i.length > 0 ? y` <filtered-list>
            ${i.map((e) => {
      const t = e.getElementsByTagNameNS(X, "Id").item(0).textContent ?? "";
      let n = e.getElementsByTagNameNS(X, "Name").item(0).textContent ?? "";
      n === "" && (n = t);
      const r = e.getElementsByTagNameNS(X, "Version").item(0).textContent ?? "";
      return y` <mwc-list-item
                tabindex="0"
                @click=${() => this.dispatchEvent(ba(t))}
              >
                ${n} (${r})
              </mwc-list-item>`;
    })}
          </filtered-list>` : y` <mwc-list>
            <mwc-list-item>
              <i>${P("compas.noFilteredScls")}</i>
            </mwc-list-item>
          </mwc-list>`}
    `;
  }
};
ye.styles = le`
    .filters {
      padding-left: var(--mdc-list-side-padding, 16px);
      display: flex;
    }

    .filters > span {
      line-height: 48px;
    }
  `;
Re([
  m()
], ye.prototype, "type", 2);
Re([
  C()
], ye.prototype, "items", 2);
Re([
  C()
], ye.prototype, "labels", 2);
Re([
  C()
], ye.prototype, "selectedLabels", 2);
Re([
  C()
], ye.prototype, "filteredItems", 1);
ye = Re([
  W("compas-scl-list")
], ye);
const ya = "compas_scl";
function va(i, e) {
  return i.querySelector(`:scope > Private[type="${e}"]`);
}
function Sa(i) {
  return i?.querySelector(":scope > SclName") ?? null;
}
function xa(i) {
  return i?.querySelector(":scope > SclFileType") ?? null;
}
function ka(i) {
  const e = i.querySelector(":scope > Header"), t = va(i, ya), n = e?.getAttribute("version") ?? "", r = Sa(t)?.textContent ?? "", s = xa(t)?.textContent ?? "SCD";
  let a = r;
  return a === "" && (a = e?.getAttribute("id") ?? ""), a += "-" + n + "." + s?.toLowerCase(), a;
}
var wa = Object.defineProperty, _a = Object.getOwnPropertyDescriptor, lt = (i, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? _a(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (r = (n ? a(e, t, r) : a(r)) || r);
  return n && r && wa(e, t, r), r;
};
function $i(i, e, t, n) {
  return new CustomEvent("doc-retrieved", {
    bubbles: !0,
    composed: !0,
    detail: { localFile: i, doc: e, docName: t, docId: n }
  });
}
let Be = class extends ee {
  constructor() {
    super(...arguments), this.allowLocalFile = !0;
  }
  async getSclDocument(i) {
    const e = await ni().getSclDocument(this, this.selectedType ?? "", i ?? "").catch((t) => Js(this, t));
    if (e instanceof Document) {
      const t = ka(e.documentElement);
      this.dispatchEvent($i(!1, e, t, i));
    }
  }
  async getSclFile(i) {
    const e = i.target?.files?.item(0) ?? !1;
    if (!e) return;
    const t = await e.text(), n = e.name, r = new DOMParser().parseFromString(t, "application/xml");
    this.dispatchEvent($i(!0, r, n));
  }
  renderFileSelect() {
    return y`
      <input
        id="scl-file"
        accept=".sed,.scd,.ssd,.isd,.iid,.cid,.icd"
        type="file"
        hidden
        required
        @change=${(i) => this.dispatchEvent(Ht(this.getSclFile(i)))}
      />

      <mwc-button
        label="${P("compas.open.selectFileButton")}"
        @click=${() => {
      this.sclFileUI.value = "", this.sclFileUI.click();
    }}
      >
      </mwc-button>
    `;
  }
  renderSclTypeList() {
    return y`
      <p>${P("compas.open.listSclTypes")}</p>
      <compas-scltype-list
        @typeSelected=${(i) => this.selectedType = i.detail.type}
      />
    `;
  }
  renderSclList() {
    return y`
      <p>${P("compas.open.listScls", {
      type: this.selectedType ?? ""
    })}</p>
      <compas-scl-list .type=${this.selectedType}
                       @scl-selected=${(i) => this.dispatchEvent(
      Ht(
        this.getSclDocument(i.detail.docId)
      )
    )}/>
      </compas-scl-list>
      <mwc-button id="reselect-type"
                  label="${P("compas.open.otherTypeButton")}"
                  icon="arrow_back"
                  @click=${() => {
      this.selectedType = void 0;
    }}>
      </mwc-button>
    `;
  }
  render() {
    return y`
      ${this.allowLocalFile ? y`<wizard-divider></wizard-divider>
            <section>
              <h3>${P("compas.open.localTitle")}</h3>
              ${this.renderFileSelect()}
            </section>` : Ct}
      <wizard-divider></wizard-divider>
      <section>
        <h3>${P("compas.open.compasTitle")}</h3>
        ${this.selectedType ? this.renderSclList() : this.renderSclTypeList()}
      </section>
    `;
  }
};
lt([
  m()
], Be.prototype, "selectedType", 2);
lt([
  m()
], Be.prototype, "allowLocalFile", 2);
lt([
  V("#scl-file")
], Be.prototype, "sclFileUI", 2);
Be = lt([
  W("compas-open")
], Be);
const Ea = {
  scl: {
    id: "ID",
    name: "Name",
    desc: "Beschreibung",
    ord: "Rang",
    value: "Wert",
    EnumVal: "Enum Wert",
    EnumType: "Enum Typ",
    DA: "Datenattribut",
    DO: "Datenobjekt",
    DAType: "Datenattribut Typ",
    DOType: "Datenobjekt Typ",
    CDC: " Datenklasse nach 7-3",
    Report: "Report",
    LN: "Logischer Knoten",
    bType: "Basic type",
    type: "Type",
    sAddr: "Short address",
    valKind: "Value kind",
    valImport: "Import value",
    fc: "Funktionale Einschränkung",
    LNodeType: "Logischer Knoten Type",
    lnClass: "Klasse logischer Knoten",
    accessControl: "Zugriffskontrolle",
    transient: "Datenpunkt transient",
    Val: "Standardwert",
    dchg: "Detenänderung ist Auslöser",
    qchg: "Qualitätsanderung ist Auslöser",
    dupd: "Datenupdate ist Auslöser",
    period: "Periodisch übertragen",
    gi: "Manuelle Abfrage",
    fixedOffs: "Fester Offset",
    securityEnable: "Aktive Sicherungsmaßnahmen",
    DataSet: "Datensatz",
    Communication: "Kommunikation",
    TrgOps: "Triggerbedingungen",
    OptFields: "Optionale felder",
    multicast: "SMV nach IEC 61850 9-2",
    smpMod: "Abtast-Art",
    smpRate: "Abtastrate",
    nofASDU: "Abtastpunkte pro Datenpacket",
    seqNum: "Sequenznummer mitschicken",
    timeStamp: "Zeitstempel mitschicken",
    dataSet: "Datensatz-Reference mitschicken",
    reasonCode: "Was hat den Report getriggert?",
    dataRef: "Beschreibung der Datensatzes",
    entryID: "Entry ID mitschicken",
    configRef: "Konfigurations-Revision mitschicken",
    bufOvfl: "Überlauf des internen Speichers signalisieren",
    indexed: "Mehrere Instanzen möglich",
    buffered: "Gepufferter Report",
    maxReport: "Anzahl Instanzen",
    bufTime: "Min. Intervall zwischen zwei Reports",
    intgPd: "Intervall zwischen zwei periodischen Reports",
    SmvOpts: "Optionale Informationen",
    refreshTime: "Zeitstempel des Abtastwertes zu Telegram hinzufügen",
    sampleRate: "Abtastrate zu Telegram hinzufügen",
    security: "Potentiel in Zukunft für z.B. digitale Signature",
    synchSourceId: "Identität der Zeitquelle zu Telegram hinzufügen",
    SampledValueControl: "Sampled Value Kontrollblock",
    iedName: "Referenziertes IED",
    ldInst: "Referenziertes logisches Gerät",
    prefix: "Präfix des logischen Knotens",
    lnInst: "Instanz des logischen Knotens",
    virtual: "Virtuell",
    phase: "Phase"
  },
  settings: {
    title: "Einstellungen",
    language: "Sprache",
    languages: { de: "Deutsch", en: "Englisch (English)" },
    dark: "Dunkles Design",
    mode: "Profimodus",
    showieds: "Zeige IEDs im Substation-Editor",
    selectFileButton: "Datei auswählen",
    loadNsdTranslations: "NSDoc-Dateien hochladen",
    invalidFileNoIdFound: "Ungültiges NSDoc ({{ filename }}); kein 'id'-Attribut in der Datei gefunden",
    invalidNsdocVersion: "Die Version {{ id }} NSD ({{ nsdVersion }}) passt nicht zu der geladenen NSDoc ({{ filename }}, {{ nsdocVersion }})"
  },
  menu: {
    new: "Neues projekt",
    title: "Menü",
    viewLog: "Protokoll anzeigen",
    viewDiag: "Daignose anzeigen"
  },
  wizard: {
    title: {
      select: "{{tagName}} auswählen",
      edit: "{{tagName}} bearbeiten",
      add: "{{tagName}} hinzufügen"
    }
  },
  openSCD: {
    loading: "Lade Projekt {{ name }}",
    loaded: "{{ name }} geladen",
    readError: "{{ name }} Lesefehler",
    readAbort: "{{ name }} Leseabbruch"
  },
  zeroline: {
    iedsloading: "IEDs werden geladen...",
    showieds: "IEDs im Substation-Editor anzeigen/ausblenden",
    showfunctions: "Funktionselemente in der Ansicht filtern",
    commmap: "Kommunikationszuordnung",
    reportcontrol: "Reports anzeigen",
    gsecontrol: "GOOSEs anzeigen",
    smvcontrol: "Sampled Values anzeigen"
  },
  editing: {
    node: "Benutzerdefiniertes Objekt",
    created: "{{ name }} hinzugefügt",
    deleted: "{{ name }} entfernt",
    moved: "{{ name }} verschoben",
    updated: "{{ name }} bearbeitet",
    import: "{{name}} importiert",
    complex: "Mehrere Elemente bearbeitet",
    error: {
      create: "Konnte {{ name }} nicht hinzufügen",
      update: "Konnte {{ name }} nicht bearbeiten",
      move: "Konnte {{ name }} nicht verschieben",
      duplicate: "Konnte {{name}} nicht kopieren",
      nameClash: '{{ parent }} enthält bereits ein {{ child }} Kind namens "{{ name }}"',
      idClash: 'Das Projekt enthält bereits die ID "{{ id }}"'
    }
  },
  validator: {
    schema: {
      title: "Projekt validieren",
      valid: "{{ name }} erfolgreich validiert gegen XML-Schema",
      invalid: "{{ name }} Schema-Validierung fehlgeschlagen",
      fatal: "Fataler Validierungsfehler",
      loadError: "Konnte XML-Schema {{ name }} nicht laden"
    },
    templates: {
      title: "Templates validieren",
      mandatoryChild: "{{ tag }} {{ id }} fehlt ein obligatorisches {{ childTag }}-Kind {{ childId }}",
      missingAttribute: "Das Attribut {{attr}} ist verpflichted und fehlt in {{element}}",
      incorrectAttribute: "Das Attribut {{attr}} in Element {{element}} folgt nicht der Definition.",
      missingReference: '{{tag}} "{{name}}" hat eine ungültige Referenz - es fehlt der definierte Typ'
    }
  },
  textfield: {
    required: "Pflichtfeld",
    nonempty: "Darf nicht leer sein",
    noMultiplier: "keiner",
    unique: "Darf sich nicht wiederholen"
  },
  compare: {
    compareButton: "Starte Vergleich",
    attributes: "Attribute von {{ elementName }}",
    children: "Kindelemente von {{ elementName }}",
    filterMutables: "Projektspzifische Unterschiede ausblenden"
  },
  log: {
    name: "Protokoll",
    placeholder: "Hier werden Änderungen, Fehler und andere Meldungen angezeigt.",
    snackbar: {
      show: "Anzeigen",
      placeholder: "Keine Fehler"
    }
  },
  history: {
    name: "SCL History",
    placeholder: "Keine History",
    noEntries: "Keine Einträge in der SCL History"
  },
  diag: {
    name: "Daignoseübersicht",
    zeroissues: "Es konnten keine Fehler in dem Projekt gefunden werden.",
    placeholder: "Hier werden Validierungsfehler angezeigt.",
    missingnsd: "DataTypeTemplates können nicht validiert werden. Das Projekt muss die Version 2007B3 oder höher haben."
  },
  plugins: {
    heading: "Plug-ins",
    editor: "Editor",
    menu: "Menüeintrag",
    requireDoc: "Benötigt Dokument",
    top: "oben",
    middle: "mittig",
    bottom: "unten",
    validator: "Validator",
    add: {
      heading: "Benutzerdefinierte plug-in",
      warning: `Hier können Sie benutzerdefinierte plug-ins hinzufügen.
                OpenSCD übernimmt hierfür keine Gewähr.`,
      name: "Name",
      nameHelper: "Lokaler Name der plug-in (frei wählbar)",
      src: "URL",
      srcHelper: "Die plug-in-URL des Herstellers"
    }
  },
  substation: {
    name: "Schaltanlage",
    missing: "Keine Schaltanlage",
    wizard: {
      nameHelper: "Name der Schaltanlage",
      descHelper: "Beschreibung der Schaltanlage",
      title: {
        add: "Schaltanlage hinzufügen",
        edit: "Schaltanlage bearbeiten"
      }
    },
    action: {
      addvoltagelevel: "Spannungsebene hinzufügen",
      updatesubstation: 'Schaltanlage "{{name}}" bearbeitet'
    },
    clone: {
      redirect: "LNode mitnehmen",
      cloneclose: "Einmal klonen",
      cloneproc: "Mehrfach klonen",
      newname: "Klonname"
    }
  },
  iededitor: {
    iedSelector: "IED auswählen",
    lnFilter: "Filter für logische Knoten",
    missing: "Kein IED vorhanden",
    toggleChildElements: "Kindelemente umschalten",
    settings: "Services für IED or AccessPoint",
    wizard: {
      daTitle: "DA Informationen anzeigen",
      doTitle: "DO Informationen anzeigen",
      nsdocDescription: "NSDoc Beschreibung",
      doiDescription: "Beschreibung des DOI",
      daiDescription: "Beschreibung des DAI",
      ied: "IED",
      accessPoint: "Zugangspunkt",
      lDevice: "Logisches Gerät",
      lnPrefix: "LN Präfix",
      lnDescription: "LN Beschreibung",
      lnInst: "LN Instanz",
      doName: "DO Name",
      doCdc: "DO Common Data Class",
      daName: "DA Name",
      daFc: "DA Functional Constraint",
      daBType: "DA Typ",
      daValue: "DA Wert"
    }
  },
  ied: {
    wizard: {
      nameHelper: "Name des IED",
      descHelper: "Beschreibung des IED",
      title: {
        edit: "IED bearbeiten",
        delete: "IED mit Abhängigkeiten entfernen",
        references: "Gelöschte Abhängikeiten"
      }
    },
    action: {
      updateied: 'IED "{{name}}" bearbeitet',
      deleteied: 'IED "{{name}}" entfernt'
    }
  },
  ldevice: {
    wizard: {
      nameHelper: "Name des Logisches Gerät",
      noNameSupportHelper: "IED unterstützt keine funktionale Benennung",
      descHelper: "Beschreibung des Logisches Gerät",
      title: {
        edit: "Logisches Gerät bearbeiten"
      }
    }
  },
  ln: {
    wizard: {
      title: {
        edit: "LN bearbeiten"
      },
      descHelper: "Logical Node Beschreibung",
      lnTypeHelper: "Logical Node Typ",
      prefixHelper: "Prefix des Logical Nodes",
      lnClassHelper: "Logical Node Klasse",
      instHelper: "Instanz"
    }
  },
  ln0: {
    wizard: {
      title: {
        edit: "LN0 bearbeiten"
      },
      descHelper: "Logical Node Beschreibung",
      lnTypeHelper: "Logical Node Typ",
      lnClassHelper: "Logical Node Klasse",
      instHelper: "Instanz"
    }
  },
  powertransformer: {
    wizard: {
      nameHelper: "`Name des Leistungstransformators",
      descHelper: "Beschreibung des Leistungstransformators",
      typeHelper: "Type des Leistungstransformators",
      title: {
        add: "Leistungstransformator hinzufügen",
        edit: "Leistungstransformator bearbeiten"
      }
    }
  },
  voltagelevel: {
    name: "Spannungsebene",
    wizard: {
      nameHelper: "Name der Spannungsebene",
      descHelper: "Beschreibung der Spannungsebene",
      nomFreqHelper: "Nennfrequenz",
      numPhaseHelper: "Phasenanzahl",
      voltageHelper: "Nennspannung",
      title: {
        add: "Spannungsebene hinzufügen",
        edit: "Spannungsebene bearbeiten"
      }
    },
    action: {
      updateVoltagelevel: 'Spannungsebene "{{name}}" bearbeitet'
    }
  },
  line: {
    name: "Linie",
    wizard: {
      nameHelper: "Liniename",
      descHelper: "Beschreibung des Linies",
      typeHelper: "Type des Linies",
      title: {
        add: "Linie hinzufügen",
        edit: "Linie bearbeiten"
      }
    },
    action: {
      updateLine: 'Edited line "{{name}}"'
    }
  },
  process: {
    name: "Process",
    wizard: {
      nameHelper: "Processname",
      descHelper: "Beschreibung des Processes",
      typeHelper: "Type des Processes",
      title: {
        add: "Process hinzufügen",
        edit: "Process bearbeiten"
      }
    },
    action: {
      updateProcess: 'Edited Process "{{name}}"'
    }
  },
  bay: {
    name: "Feld",
    wizard: {
      nameHelper: "Feldname",
      descHelper: "Beschreibung des Feldes",
      title: {
        add: "Feld hinzufügen",
        edit: "Feld bearbeiten"
      }
    },
    action: {
      updateBay: 'Feld "{{name}}" bearbeitet'
    }
  },
  conductingequipment: {
    name: "Primärelement",
    wizard: {
      nameHelper: "Name des Primärelements",
      descHelper: "Beschreibung des Primärelements",
      typeHelper: "Type des Primärelements",
      title: {
        add: "Primärelement hinzufügen",
        edit: "Primärelement bearbeiten"
      }
    },
    unknownType: "Unbekannter Typ"
  },
  connectivitynode: {
    name: "Verbindungsknoten",
    wizard: {
      nameHelper: "Verbindungsknoten Name",
      pathNameHelper: "Verbindungsknoten Beschreibung",
      title: {
        add: "Verbindungsknoten hinzufügen",
        edit: "Verbindungsknoten bearbeiten"
      }
    }
  },
  terminal: {
    name: "Anschluss",
    wizard: {
      nameHelper: "Anschluss Name",
      connectivityNodeHelper: "Anschluss Verbindungsknoten",
      cNodeNameHelper: "Anschluss Verbindungsknoten Name",
      title: {
        add: "Anschlussknoten hinzufügen",
        edit: "Anschlussknoten bearbeiten"
      }
    }
  },
  templates: {
    name: "Data Type Templates",
    missing: "DataTypeTemplates fehlen",
    add: "DataTypeTemplates hinzufügen"
  },
  subscription: {
    none: "Keine Verbindung vorhanden",
    connect: "Daten-Attribut verbunden",
    disconnect: "Daten-Attribute Verbindung gelöst",
    subscriber: {
      subscribed: "Verbunden",
      notSubscribed: "Nicht Verbunden",
      availableToSubscribe: "Kann verbunden werden",
      partiallySubscribed: "Teilweise verbunden",
      noControlBlockSelected: "Keine Kontrollblock ausgewählt",
      noIedSelected: "Keine IED ausgewählt"
    },
    goose: {
      publisher: {
        title: "GOOSE-Publizierer",
        subscriberTitle: "Verbunden mit {{ selected }}"
      },
      subscriber: {
        iedListTitle: "Verbunden mit GOOSE Meldungen",
        publisherTitle: "GOOSE Nachricht verbunden mit {{ selected }}"
      },
      view: {
        publisherView: "Publisher | Subscriber",
        subscriberView: "Subscriber | Publisher"
      }
    },
    smv: {
      publisher: {
        title: "SampledValue-Publizierer",
        subscriberTitle: "Verbunden mit {{ selected }}"
      },
      subscriber: {
        iedListTitle: "Verbunden mit Sampled Values",
        publisherTitle: "Sampled Value  verbunden mit {{ selected }}"
      },
      view: {
        publisherView: "Publisher | Subscriber",
        subscriberView: "Subscriber | Publisher"
      }
    },
    binding: {
      extRefList: {
        title: "Logische Knoten für ausgewählten Daten-Attribute",
        noSelection: "Kein Daten-Attribute ausgewählt",
        noSubscribedLNs: "Kein Verbinding zu dem ausgewählten Daten-Attribute",
        noAvailableLNs: "Keine Verbindung zu dem ausgewählten Daten-Attribute möglich"
      }
    },
    laterBinding: {
      extRefList: {
        title: "Für Ausgewählte Daten-Attribut Verfügbare Verbindung",
        noSelection: "Kein Daten-Attribut ausgewählt",
        noSubscribedExtRefs: "Keine bestehenden Verbindungen",
        noAvailableExtRefs: "Keine verfügbaren Eingänge vorhanden"
      }
    },
    SampledValueControl: {
      controlBlockList: {
        title: "Sample Value Meldungen",
        noControlBlockFound: "Keine Sampled Values gefunden"
      }
    },
    GSEControl: {
      controlBlockList: {
        title: "GOOSE-Meldungen",
        noControlBlockFound: "Keine GOOSEs gefunden"
      }
    }
  },
  protocol104: {
    toggleChildElements: "Kindelemente umschalten",
    view: {
      valuesView: "Werte",
      networkView: "Netzwerk"
    },
    mappedCmv: 'Gemäß dem IEC 61850-80-1 Standard ist eine "{{ cdc }}" zuordnung über CMV erforderlich',
    values: {
      missing: "Kein IED mit 104 Adressen",
      removeAddresses: "Alle Adressen entfernen",
      removedAddresses: '{{ nrOfAddresses }} Addressen von DOI "{{ name }}" entfernt',
      addedAddress: '104-Addressen zu DO "{{ name }}" in LN(0) "{{ lnName }}" hinzugefügt',
      signalNames: {
        tiNumber1: "Einzelwertinformation",
        tiNumber3: "Zweipunktinformation",
        tiNumber5: "Stufenpositionsinformation",
        tiNumber7: "Bit string von 32 Bit",
        tiNumber9: "Gemessener Wert, normalisierter Wert",
        tiNumber11: "Gemessener Wert, skalierte Wert",
        tiNumber13: "Gemessener Wert, Kurz-Gleitkommazahl",
        tiNumber15: "Integrierte Summen",
        tiNumber20: "Verpackte Einzelwertinformation mit Statusänderungserkennung",
        tiNumber21: "Gemessener Wert, normalisierter Wert ohne Qualitätsbeschreibung",
        tiNumber30: "Einzelwertinformation mit Zeitstempel CP56Time2a",
        tiNumber31: "Zweipunktinformation mit Zeitstempel CP56Time2a",
        tiNumber32: "Stufenpositionsinformation mit Zeitstempel CP56Time2a",
        tiNumber33: "Bit string von 32 Bit mit Zeitstempel CP56Time2a",
        tiNumber34: "Gemessener Wert, normalisierter Wert mit Zeitstempel CP56Time2a",
        tiNumber35: "Gemessener Wert, skalierte Wert mit Zeitstempel CP56Time2a",
        tiNumber36: "Gemessener Wert, Kurz-Gleitkommazahl mit Zeitstempel CP56Time2a",
        tiNumber37: "Integrierte Summen mit Zeitstempel CP56Time2a",
        tiNumber38: "Ereignis von Schutzeinrichtung mit Zeitstempel CP56Time2a",
        tiNumber39: "Verpackte Startereignisse von Schutzeinrichtung mit Zeitstempel CP56Time2a",
        tiNumber40: "Verpackte Ausgangsschaltkreisinformationen von Schutzeinrichtung mit Zeitstempel CP56Time2a",
        tiNumber45: "Einzelbefehl",
        tiNumber46: "Doppelbefehl",
        tiNumber47: "Regelungsschritt-Befehl",
        tiNumber48: "Sollwertbefehl, normalisierter Wert",
        tiNumber49: "Sollwertbefehl, skalierte Wert",
        tiNumber50: "Sollwertbefehl, Kurz-Gleitkommazahl",
        tiNumber51: "Bit string von 32 Bit Befehl",
        tiNumber58: "Einzelbefehl mit Zeitstempel CP56Time2a",
        tiNumber59: "Doppelbefehl mit Zeitstempel CP56Time2a",
        tiNumber60: "Regelungsschritt-Befehl mit Zeitstempel CP56Time2a",
        tiNumber61: "Gemessener Wert, normalisierter Wert Befehl mit Zeitstempel CP56Time2a",
        tiNumber62: "Gemessener Wert, skalierte Wert Befehl mit Zeitstempel CP56Time2a",
        tiNumber63: "Gemessener Wert, Kurz-Gleitkommazahl Befehl mit Zeitstempel CP56Time2a",
        tiNumber64: "Bit string von 32 Bit Befehl mit Zeitstempel CP56Time2a",
        default: "Keine Beschreibung verfügbar"
      }
    },
    network: {
      connectedAp: {
        wizard: {
          title: {
            edit: "ConnectedAP bearbeiten"
          },
          redundancySwitchLabel: "Redundanz",
          redundancyGroupTitle: "Redundanzgruppen",
          noRedundancyGroupsAvailable: "Keine Redundanzgruppen verfügbar",
          addRedundancyGroup: "Redundanzruppe hinzufügen",
          stationTypeHelper: "Anlagentyp",
          ipHelper: "IP Adresse",
          ipSubnetHelper: "Subnetzmaske",
          wFactorHelper: "???",
          kFactorHelper: "???",
          timeout0Helper: "Time-out Verbindungsaufbau in Sekunden",
          timeout1Helper: "???",
          timeout2Helper: "???",
          timeout3Helper: "???"
        }
      },
      redundancyGroup: {
        wizard: {
          title: {
            edit: "Redundanzgruppe bearbeiten",
            add: "Redundanzgruppe hinzufügen"
          },
          redundancyGroupNumberLabel: "Redundanzgruppennummer",
          addedLRedundancyGroup: '??? {{ rGNumber }} ? SubNetwork[name="{{ subNetworkName }}"] > ConnectedAP[apName="{{ apName }}"][iedName="{{ iedName }}"]',
          editedRedundancyGroup: '??? {{ rGNumber }} ? SubNetwork[name="{{ subNetworkName }}"] > ConnectedAP[apName="{{ apName }}"][iedName="{{ iedName }}"]',
          removedRedundancyGroup: '??? {{ rGNumber }} ? SubNetwork[name="{{ subNetworkName }}"] > ConnectedAP[apName="{{ apName }}"][iedName="{{ iedName }}"]',
          logicLinkGroupTitle: "???",
          noLogicLinksAvailable: "???",
          addLogicLink: "???"
        }
      },
      logicLink: {
        wizard: {
          title: {
            edit: "???",
            add: "???"
          },
          logicLinkNumberLabel: "???",
          addedLogicLink: '??? SubNetwork[name="{{ subNetworkName }}"] > ConnectedAP[apName="{{ apName }}"][iedName="{{ iedName }}"]',
          editedLogicLink: '??? SubNetwork[name="{{ subNetworkName }}"] > ConnectedAP[apName="{{ apName }}"][iedName="{{ iedName }}"]',
          removedLogicLink: '??? SubNetwork[name="{{ subNetworkName }}"] > ConnectedAP[apName="{{ apName }}"][iedName="{{ iedName }}"]'
        }
      }
    },
    wizard: {
      title: {
        doiInfo: "DOI Information",
        addressEdit: "104-Adresse bearbeiten",
        addAddress: "104-Adresse hinzufügen"
      },
      error: {
        ioaConflict: "IOA-Konflikt innerhalb der CASDU-Nummer gefunden",
        addAddressError: 'Invalide Template Struktur, DAI kann nicht hinzugefügt werden (DO: "{{ doType }}", CDC: "{{ cdc }}", Structure: "{{ structure }}")'
      },
      casduHelper: "CASDU Wert",
      ioaHelper: "IOA Wert",
      monitorTiHelper: "TI Wert überwachen",
      monitorInverted: "???",
      monitorCheck: "???",
      controlTiHelper: "???",
      controlInverted: "???",
      controlCheck: "???",
      expectedValueHelper: "???",
      unitMultiplierHelper: "???",
      scaleMultiplierHelper: "???",
      scaleOffsetHelper: "???"
    }
  },
  "compare-ied": {
    selectProjectTitle: "Lade IEDs aus Vorlage",
    selectIedTitle: "IEDs zum Vergleich auswählen",
    resultTitle: "Vergleiche IED mit Vorlage",
    projectIedTitle: "IEDs im Projekt",
    templateIedTitle: "IEDs aus Vorlage",
    selectIedButton: "IED auswählen",
    selectTemplateButton: "Vorlage auswählen",
    noDiff: 'Keine Unterschiede zwischen IED Projekt "{{ projectIedName }}" und IED aus Vorlage "{{ templateIedName }}" gefunden'
  },
  "enum-val": {
    wizard: {
      title: {
        add: "EnumVal hinzufügen",
        edit: "EnumVal bearbeiten"
      }
    }
  },
  enum: {
    wizard: {
      title: {
        add: "EnumType hinzufügen",
        edit: "EnumType bearbeiten"
      }
    },
    action: {
      edit: 'DAType ID "{{oldId}}" und deren DA-Referenzen geändert zu {{newId}} '
    }
  },
  datype: {
    wizard: {
      title: {
        add: "DAType hinzufügen",
        edit: "DAType bearbeiten"
      }
    },
    action: {
      edit: 'EnumType ID "{{oldId}}" und deren DA-Referenzen geändert zu {{newId}} '
    }
  },
  bda: {
    wizard: {
      title: {
        add: "BDA hinzufügen",
        edit: "BDA bearbeiten"
      }
    }
  },
  da: {
    wizard: {
      title: {
        add: "Add DA",
        edit: "Edit DA"
      }
    }
  },
  dai: {
    wizard: {
      valueHelper: "Der Wert sollte vom Typ sein {{type}}",
      title: {
        create: 'DAI "{{daiName}}" hinzufügen',
        edit: 'DAI "{{daiName}}" bearbeiten'
      }
    },
    action: {
      createdai: 'DAI "{{daiName}}" hinzugefügt',
      updatedai: 'DAI "{{daiName}}" bearbeitet'
    }
  },
  sdo: {
    wizard: {
      title: {
        add: "SDO hinzufügen",
        edit: "SDO bearbeiten"
      }
    }
  },
  do: {
    wizard: {
      title: {
        add: "DO hinzufügen",
        edit: "DO bearbeiten"
      }
    }
  },
  dotype: {
    wizard: {
      title: {
        add: "DOType hinzufügen",
        edit: "DOType bearbeiten"
      },
      enums: "Standard Enumerations"
    },
    action: {
      edit: 'DOType ID "{{oldId}}" und deren DO-Referenzen geändert zu {{newId}} '
    }
  },
  lnodetype: {
    wizard: {
      title: {
        add: "LNodeType hinzufügen",
        edit: "LNodeType bearbeiten",
        select: "Data Objects auswählen"
      }
    },
    action: {
      edit: 'LNodeType ID "{{oldId}}" und deren LN-Referenzen geändert zu {{newId}} '
    },
    autoimport: "Vordefinierte OpenSCD LN Klasse verwenden",
    missinglnclass: "Vordefinierte LN Klasse fehlt"
  },
  lnode: {
    wizard: {
      title: {
        selectIEDs: "Auswahl IEDs",
        selectLDs: "Auswahl logische Geräte",
        selectLNs: "Auswahl logische Knoten",
        selectLNodeTypes: "Auswahl logische Knoten Type"
      },
      placeholder: "Bitte laden Sie eine SCL-Datei, die IED-Elemente enthält.",
      uniquewarning: "Logische Knoten Klasse existiert bereits",
      reference: "Referenz auf bestehenden logischen Knoten erstellen",
      instance: "Referenz auf logischen Knoten Typ erstellen"
    },
    log: {
      title: "LNode vom Type {{lnClass}} kann nicht hinzugefügt werden",
      nonuniquelninst: "Keine eindeutige Instanz (lnInst)",
      uniqueln0: "Nur eine Instanz von {{lnClass}} zulässig"
    },
    tooltip: "Referenz zu logischen Knoten erstellen"
  },
  guess: {
    wizard: {
      primary: "Inhalt erraten",
      title: "Auswahl Steuerungsmodel(ctlModel)",
      description: `Schaltgeräten im Feld können oftmals bestimmten Steuerungsmodellen zugeordnet werden. 
 Damit wird die Abschätzung oftmals genauer.`
    }
  },
  merge: {
    title: "Vereinigen",
    defaultTitle: "{{ tag }} {{ source }} mit {{ sink }} vereinigen",
    log: "{{ tag }} {{ source }} mit {{ sink }} vereinigt",
    children: "Kindelemente"
  },
  import: {
    title: "IEDs importieren",
    log: {
      successful: "IED {{name}} geladen",
      parsererror: "Parser Fehler",
      loaderror: "Datei kann nicht geladen werden",
      importerror: "IED Element kann nicht importiert werden",
      missingied: "Kein IED Element in der Datei",
      nouniqueied: "IED Element {{ name }} bereits geladen"
    }
  },
  communication: {
    name: "Netzwerkkonfiguration",
    missing: "Kein Subnetzwerk"
  },
  subnetwork: {
    name: "Subnetzwerk",
    wizard: {
      nameHelper: "Name des Subnetzwerkes",
      descHelper: "Beschreibung des Subnetzwerkes",
      typeHelper: "Netzwerktyp (Bsp. 8-MMS)",
      bitrateHelper: "Übertragungsrate",
      title: {
        add: "Subnetzwerk hinzufügen",
        edit: "Subnetzwerk bearbeiten"
      }
    }
  },
  connectedap: {
    name: "Schnittstelle",
    wizard: {
      addschemainsttype: "XMLSchema-instance type hinzufügen"
    },
    action: {
      addaddress: "Adressfeld bearbeitet ({{iedName}} - {{apName}})"
    }
  },
  gse: {
    action: {
      addaddress: "GSE bearbeitet ({{identity}})"
    },
    missingaccp: "AccessPoint is nicht verbunden. GSE kann nicht hinzugefügt werden."
  },
  smv: {
    action: {
      addaddress: "SMV bearbeitet ({{identity}})"
    },
    missingaccp: "AccessPoint is nicht verbunden. SMV kann nicht hinzugefügt werden."
  },
  subscriber: {
    title: "Subscriber Update",
    description: "GOOSE Ziele aktualisieren: ",
    nonewitems: "keine neuen IEDName Elemente notwendig",
    message: "{{updatenumber}} IEDName Element(e) hinzugefügt"
  },
  commmap: {
    title: "Kommunikationszuordnung",
    connectCB: "{{cbType}} verbinden",
    connectToIED: "Verbinden mit {{iedName}}",
    sourceIED: "Quellgerät",
    sinkIED: "Zielgerät"
  },
  updatesubstation: {
    title: "Schaltanlage aktualisieren"
  },
  code: {
    log: "Element im XML Editor angepasst:  {{id}}"
  },
  updatedesc: {
    abb: "Signalbeschreibungen zu ABB IEDs hinzugefügt",
    sel: "Signalbeschreibungen zu SEL IEDs hinzugefügt"
  },
  sld: {
    substationSelector: "Schaltanlage auswählen",
    wizard: {
      xCoordinateHelper: "X-Koordinate im Einphasenersatzschaltbild",
      yCoordinateHelper: "Y-Koordinate im Einphasenersatzschaltbild"
    }
  },
  dataset: {
    fcda: { add: "Daten-Attribute hinzufügen" },
    fcd: { add: "Daten-Objekte hinzufügen" }
  },
  report: {
    wizard: { location: "Ablageort der Reports wählen" },
    rptID: "Report-Kontrolblock Kennung"
  },
  cleanup: {
    unreferencedDataSets: {
      title: "Nicht referenzierte Datensätze",
      deleteButton: "Ausgewählten Datensatz entfernen",
      tooltip: "DatenSätze ohne Verweis auf einen zugehörigen GOOSE-, Log-, Report- oder Sampled Value Control Block"
    },
    unreferencedControls: {
      title: "Steuerblöcke mit einem fehlenden oder ungültigen Kontrollblock",
      deleteButton: "Ausgewählte Kontrollblöcke entfernen",
      tooltip: "Steuerblöcke ohne Verweis auf ein vorhandenes Datensatz. Das ist kein Fehler und eher üblich for allem für Reports",
      addressDefinitionTooltip: "Für diesen Kontrollblock existiert eine Adressdefinition im Abschnitt Kommunikation",
      alsoRemoveFromCommunication: "Kommunikation SMV/GSE mit entfernen"
    },
    unreferencedDataTypes: {
      title: "Nicht referenzierte Datentypen",
      deleteButton: "Ausgewählte Datentypen entfernen",
      tooltip: "Datentypen, die nicht in einem logischen Knoten oder einem anderen verwendeten Datentyp referenziert werden",
      alsoRemoveSubTypes: "Entfernen Sie auch Untertypen",
      stackExceeded: "Maximale Aufrufe überschritten. Maximal zulässig sind {{maxStackDepth}}. Nicht alle überflüßigen Datentypen sind entfernt und das Project is potentiel beschädigt."
    }
  },
  controlblock: {
    action: {
      edit: '{{type}} "{{name}}" in IED {{iedName}} bearbeitet',
      add: '{{type}} "{{name}}" zu IED {{iedName}} hinzugefügt',
      remove: '{{type}} "{{name}}" and referenzierte Element von IED {{iedName}} entfernt'
    },
    hints: {
      source: "Quell-IED",
      missingServer: "Kein Server vorhanden",
      exist: "{{type}} mit dem Namen {{name}} existiert",
      noMatchingData: "Keine Datenübereinstimmung",
      valid: "Kann kopiert werden"
    },
    label: {
      copy: "Kopie in anderen IEDs ertellen"
    }
  },
  gsecontrol: {
    wizard: { location: "Ablageort der GOOSE wählen" }
  },
  samvpledvaluecontrol: {
    wizard: {
      location: "Ablageort des Select Sampled Value Control Block wählen"
    }
  },
  publisher: {
    selectbutton: "{{type}} auswählen",
    nodataset: "Kein verbundener Datensatz",
    smv: {
      commsetting: "Kommunikationsparameter (SMV)",
      noconnectedap: "Fehlende Verbindung zu einem Netzwerk",
      smvopts: "Optionale Felder"
    }
  },
  exportCommunication: {
    noCommunicationSection: "Die Communication-Sektion ist leer."
  },
  add: "Hinzufügen",
  new: "Neu",
  remove: "Entfernen",
  edit: "Bearbeiten",
  move: "Verschieben",
  create: "Erstellen",
  save: "Speichern",
  saveAs: "Speichern unter",
  open: "Öffnen",
  reset: "Zurücksetzen",
  cancel: "Abbrechen",
  close: "Schließen",
  filter: "Filter",
  filters: "Filters",
  undo: "Rückgängig",
  redo: "Wiederholen",
  duplicate: "Klonen",
  connect: "Verbinden",
  disconnect: "Trennen",
  next: "Weiter"
}, Ca = {
  scl: {
    id: "ID",
    name: "Name",
    desc: "Description",
    ord: "Ordinal",
    value: "Value",
    EnumVal: "Enum Value",
    EnumType: "Enum Type",
    DA: "Data attribute",
    DO: "Data object",
    DAType: "Data Attribute Type",
    DOType: "Data Object Type",
    CDC: "Common data class",
    Report: "Report",
    LN: "Logical Node",
    bType: "Basic type",
    type: "Type",
    sAddr: "Short address",
    valKind: "Value kind",
    valImport: "Import value",
    fc: "Function constraint",
    LNodeType: "Logical Node Type",
    lnClass: "Logical Node Class",
    accessControl: "Access control",
    transient: "Transient data",
    Val: "Default value",
    dchg: "Trigger on data change",
    qchg: "Trigger on quality change",
    dupd: "Trigger on data update",
    period: "Periodical Publishing",
    gi: "General Interrogation",
    fixedOffs: "Fixed offset",
    securityEnable: "Security enabled",
    DataSet: "Dataset",
    Communication: "Communication",
    TrgOps: "Trigger options",
    OptFields: "Optional fields",
    multicast: "SMV acc. to IEC 61850 9-2",
    smpMod: "Sample mode",
    smpRate: "Sample rate",
    nofASDU: "Samples per packet",
    seqNum: "Add Sequence Number",
    timeStamp: "Add Timestamp",
    dataSet: "Add DataSet Reference",
    reasonCode: "Add Trigger Reason",
    dataRef: "Add description of the payload",
    entryID: "Add Entry ID",
    configRef: "Add Configuration Revision",
    bufOvfl: "Add Buffered Overflow information",
    indexed: "Multiple instances possible",
    buffered: "Buffered Report",
    maxReport: "Number of Instances",
    bufTime: "Min. time between two Reports",
    intgPd: "Time between two periodic Reports",
    SmvOpts: "Optional Information",
    refreshTime: "Add timestamp to SMV packet",
    sampleRate: "Add sample rate to SMV packet",
    security: "Potential future use. e.g. digital signature",
    synchSourceId: "Add sync source id to SMV packet",
    SampledValueControl: "Sampled Value Control Block",
    iedName: "Referenced IED",
    ldInst: "Referenced Logical Device",
    prefix: "Prefix of the Logical Node",
    lnInst: "Instance of the Logical Node",
    virtual: "Virtual",
    phase: "Phase"
  },
  settings: {
    title: "Settings",
    language: "Language",
    languages: { de: "German (Deutsch)", en: "English" },
    dark: "Dark theme",
    mode: "Pro mode",
    showieds: "Show IEDs in substation editor",
    selectFileButton: "Select file",
    loadNsdTranslations: "Uploaded NSDoc files",
    invalidFileNoIdFound: "Invalid NSDoc ({{ filename }}); no 'id' attribute found in file",
    invalidNsdocVersion: "The version of {{ id }} NSD ({{ nsdVersion }}) does not correlate with the version of the corresponding NSDoc ({{ filename }}, {{ nsdocVersion }})"
  },
  menu: {
    new: "New project",
    title: "Menu",
    viewLog: "View log",
    viewDiag: "View diagnostics"
  },
  wizard: {
    title: {
      select: "Select {{tagName}}",
      edit: "Edit {{tagName}}",
      add: "Add {{tagName}}"
    }
  },
  openSCD: {
    loading: "Loading project {{ name }}",
    loaded: "{{ name }} loaded",
    readError: "Error reading {{ name }}",
    readAbort: "Aborted reading {{ name }}"
  },
  zeroline: {
    iedsloading: "Loading IEDs...",
    showieds: "Show/hide IEDs in substation editor",
    showfunctions: "Filter function type elements",
    commmap: "Communication mapping",
    reportcontrol: "Show all Reports",
    gsecontrol: "Show all GOOSEs",
    smvcontrol: "Show all Sampled Values"
  },
  editing: {
    node: "User defined object",
    created: "Added {{ name }}",
    deleted: "Removed {{ name }}",
    moved: "Moved {{ name }}",
    updated: "Edited {{ name }}",
    import: "Imported {{name}}",
    complex: "Multiple elements edited",
    error: {
      create: "Could not add {{ name }}",
      update: "Could not edit {{ name }}",
      move: "Could not move {{ name }}",
      duplicate: "Could not copy {{ name }}",
      nameClash: 'Parent {{ parent }} already contains a {{ child }} named "{{ name }}"',
      idClash: 'The project has already an ID "{{ id }}"'
    }
  },
  textfield: {
    required: "Required",
    nonempty: "Must not be empty",
    noMultiplier: "none",
    unique: "Must be unique"
  },
  compare: {
    compareButton: "Compare",
    attributes: "Attributes from {{ elementName }}",
    children: "Child elements from {{ elementName }}",
    filterMutables: "Filter project specific differences"
  },
  log: {
    name: "Log",
    placeholder: "Errors, warnings and other notifications will show up here.",
    snackbar: {
      show: "Show",
      placeholder: "No errors"
    }
  },
  history: {
    name: "SCL History",
    placeholder: "Edits will show up here",
    noEntries: "No SCL history entries"
  },
  diag: {
    name: "Diagnostics",
    zeroissues: "No errors found in the project",
    placeholder: "Issues found during validation will show up here",
    missingnsd: "Cannot validate DataTypeTemplates. The version of the project must be higher than or equal to 2007B3"
  },
  plugins: {
    heading: "Plug-ins",
    editor: "Editor tab",
    menu: "Menu entry",
    requireDoc: "Requires loaded document",
    top: "top",
    middle: "middle",
    bottom: "bottom",
    validator: "Validator",
    add: {
      heading: "Add custom plug-in",
      warning: `Here you may add remote plug-ins directly from a custom URL.
                You do this at your own risk.`,
      name: "Name",
      nameHelper: "Your preferred plug-in name",
      src: "URL",
      srcHelper: "The vendor supplied plug-in URL"
    }
  },
  validator: {
    schema: {
      title: "Validate project",
      valid: "{{ name }} XML schema validation successful",
      invalid: "{{ name }} XML schema validation failed",
      fatal: "Fatal validation error",
      loadError: "Could not load XML schema {{ name }}"
    },
    templates: {
      title: "Validate templates",
      mandatoryChild: "{{ tag }} {{ id }} is missing mandatory child {{ childTag }} {{ childId }}",
      missingAttribute: "The attribute {{attr}} is required but missing in {{element}}",
      incorrectAttribute: "The attribute {{attr}} is incorrect in the element {{element}}.",
      missingReference: "{{tag}}:{{name}} has a invalid reference - type attribute cannot be connected to a template"
    }
  },
  substation: {
    name: "Substation",
    missing: "No substation",
    wizard: {
      nameHelper: "Substation name",
      descHelper: "Substation description",
      title: {
        add: "Add substation",
        edit: "Edit substation"
      }
    },
    action: {
      addvoltagelevel: "Add voltage level",
      updatesubstation: 'Edited substation "{{name}}"'
    },
    clone: {
      redirect: "Redirect LNode's",
      cloneclose: "Clone once",
      cloneproc: "Clone multiple",
      newname: "Clone Name"
    }
  },
  iededitor: {
    iedSelector: "Select IED",
    lnFilter: "Logical Node Filter",
    missing: "No IED",
    toggleChildElements: "Toggle child elements",
    settings: "Show Services the IED/AccessPoint provides",
    wizard: {
      daTitle: "Show DA Info",
      doTitle: "Show DO Info",
      nsdocDescription: "NSDoc description",
      doiDescription: "Data object description",
      daiDescription: "Data attribute description",
      ied: "IED",
      accessPoint: "Access point",
      lDevice: "Logical device",
      lnPrefix: "Logical node prefix",
      lnDescription: "Logical node description",
      lnInst: "Logical node inst",
      doName: "Data object name",
      doCdc: "Data object common data class",
      daName: "Data attribute name",
      daFc: "Data attribute functional constraint",
      daBType: "Data attribute type",
      daValue: "Data attribute value"
    }
  },
  ied: {
    wizard: {
      nameHelper: "IED name",
      descHelper: "IED description",
      title: {
        edit: "Edit IED",
        delete: "Remove IED with references",
        references: "References to be removed"
      }
    },
    action: {
      updateied: 'Edited IED "{{name}}"',
      deleteied: 'Removed IED "{{name}}"'
    }
  },
  ldevice: {
    wizard: {
      nameHelper: "Logical device name",
      noNameSupportHelper: "IED doesn't support Functional Naming",
      descHelper: "Logical device description",
      title: {
        edit: "Edit logical device"
      }
    }
  },
  ln: {
    wizard: {
      title: {
        edit: "Edit LN"
      },
      descHelper: "Logical node description",
      lnTypeHelper: "Logical node type",
      prefixHelper: "Prefix of the logical node",
      lnClassHelper: "Logical node class",
      instHelper: "Instance"
    }
  },
  ln0: {
    wizard: {
      title: {
        edit: "Edit LN0"
      },
      descHelper: "Logical node description",
      lnTypeHelper: "Logical node type",
      lnClassHelper: "Logical node class",
      instHelper: "Instance"
    }
  },
  powertransformer: {
    wizard: {
      nameHelper: "Power transformer name",
      descHelper: "Power transformer description",
      typeHelper: "Power transformer type",
      title: {
        add: "Add power transformer",
        edit: "Edit power transformer"
      }
    }
  },
  voltagelevel: {
    name: "Voltage level",
    wizard: {
      nameHelper: "Voltage level name",
      descHelper: "Voltage level description",
      nomFreqHelper: "Nominal frequency",
      numPhaseHelper: "Number of phases",
      voltageHelper: "Nominal voltage",
      title: {
        add: "Add voltage level",
        edit: "Edit voltage level"
      }
    },
    action: {
      updateVoltagelevel: 'Edited voltagelevel "{{name}}"'
    }
  },
  line: {
    name: "Line",
    wizard: {
      nameHelper: "Line name",
      descHelper: "Line description",
      typeHelper: "Line type",
      title: {
        add: "Add line",
        edit: "Edit line"
      }
    },
    action: {
      updateLine: 'Edited line "{{name}}"'
    }
  },
  process: {
    name: "Process",
    wizard: {
      nameHelper: "Process name",
      descHelper: "Process description",
      typeHelper: "Process type",
      title: {
        add: "Add Process",
        edit: "Edit Process"
      }
    },
    action: {
      updateProcess: 'Edited Process "{{name}}"'
    }
  },
  bay: {
    name: "Bay",
    wizard: {
      nameHelper: "Bay name",
      descHelper: "Bay description",
      title: {
        add: "Add bay",
        edit: "Edit bay"
      }
    },
    action: {
      updateBay: 'Edited bay "{{name}}"'
    }
  },
  conductingequipment: {
    name: "Conducting Equipment",
    wizard: {
      nameHelper: "Conducting equipment name",
      descHelper: "Conducting equipment description",
      typeHelper: "Conducting equipment type",
      title: {
        add: "Add conducting equipment",
        edit: "Edit conducting equipment"
      }
    },
    unknownType: "Unknown type"
  },
  connectivitynode: {
    name: "Connectivity Node",
    wizard: {
      nameHelper: "Connectivity node name",
      pathNameHelper: "Connectivity node pathname",
      title: {
        add: "Add Connectivity node",
        edit: "Edit Connectivity node"
      }
    }
  },
  terminal: {
    name: "Terminal",
    wizard: {
      nameHelper: "Terminal name",
      connectivityNodeHelper: "Terminal connectivity node",
      cNodeNameHelper: "Terminal connectivity node name",
      title: {
        add: "Add Terminal",
        edit: "Edit Terminal"
      }
    }
  },
  templates: {
    name: "Data Type Templates",
    missing: "DataTypeTemplates missing",
    add: "Add DataTypeTemplates"
  },
  subscription: {
    none: "None",
    connect: "Connect data attribute",
    disconnect: "Disconnect data attribute",
    subscriber: {
      subscribed: "Subscribed",
      notSubscribed: "Not Subscribed",
      availableToSubscribe: "Available to subscribe",
      partiallySubscribed: "Partially subscribed",
      noControlBlockSelected: "No control block selected",
      noIedSelected: "No IED selected"
    },
    goose: {
      publisher: {
        title: "GOOSE Publishers",
        subscriberTitle: "IEDs subscribed to {{ selected }}"
      },
      subscriber: {
        iedListTitle: "GOOSE Subscribers",
        publisherTitle: "GOOSE Messages subscribed to {{selected}}"
      },
      view: {
        publisherView: "Publisher | Subscriber",
        subscriberView: "Subscriber | Publisher"
      }
    },
    smv: {
      publisher: {
        title: "Sampled Value Messages",
        subscriberTitle: "IEDs subscribed to {{ selected }}"
      },
      subscriber: {
        iedListTitle: "Sampled Value Subscribers",
        publisherTitle: "Sampled Value Messages subscribed to {{ selected }}"
      },
      view: {
        publisherView: "Publisher | Subscriber",
        subscriberView: "Subscriber | Publisher"
      }
    },
    binding: {
      extRefList: {
        title: "Logical nodes available for selected data attribute",
        noSelection: "No data attribute selected",
        noSubscribedLNs: "No subscribed logical nodes",
        noAvailableLNs: "No available logical nodes to subscribe"
      }
    },
    laterBinding: {
      extRefList: {
        title: "Inputs available for selected data attribute",
        noSelection: "No data attribute selected",
        noSubscribedExtRefs: "No subscribed inputs",
        noAvailableExtRefs: "No available inputs to subscribe"
      }
    },
    SampledValueControl: {
      controlBlockList: {
        title: "Sampled Value Messages",
        noControlBlockFound: "No Sampled Value Messages found"
      }
    },
    GSEControl: {
      controlBlockList: {
        title: "GOOSE Messages",
        noControlBlockFound: "No GOOSE Messages found"
      }
    }
  },
  protocol104: {
    toggleChildElements: "Toggle child elements",
    view: {
      valuesView: "Values",
      networkView: "Network"
    },
    mappedCmv: 'According to the IEC 61850-80-1 standard, "{{ cdc }}" mapping is required via CMV',
    values: {
      missing: "No IED with 104 Addresses",
      removeAddresses: "Remove all Addresses",
      removedAddresses: 'Removed Addresses from DOI "{{ name }}" ({{ nrOfAddresses }})',
      addedAddress: 'Added 104 Address(es) to DO "{{ name }}" on LN(0) "{{ lnName }}"',
      signalNames: {
        tiNumber1: "Single-point information",
        tiNumber3: "Double-point information",
        tiNumber5: "Step position information",
        tiNumber7: "Bit string of 32 bit",
        tiNumber9: "Measured value, normalized value",
        tiNumber11: "Measured value, scaled value",
        tiNumber13: "Measured value, short floating point number",
        tiNumber15: "Integrated totals",
        tiNumber20: "Packed single point information with status change detection",
        tiNumber21: "Measured value, normalized value without quality descriptor",
        tiNumber30: "Single-point information with time tag CP56Time2a",
        tiNumber31: "Double-point information with time tag CP56Time2a",
        tiNumber32: "Step position information with time tag CP56Time2a",
        tiNumber33: "Bit string of 32 bit with time tag CP56Time2a",
        tiNumber34: "Measured value, normalized value with time tag CP56Time2a",
        tiNumber35: "Measured value, scaled value with time tag CP56Time2a",
        tiNumber36: "Measured value, short floating point number with time tag CP56Time2a",
        tiNumber37: "Integrated totals with time tag CP56Time2a",
        tiNumber38: "Event of protection equipment with time tag CP56Time2a",
        tiNumber39: "Packed start events of protection equipment with time tag CP56Time2a",
        tiNumber40: "Packed output circuit information of protection equipment with time tag CP56Time2a",
        tiNumber45: "Single command",
        tiNumber46: "Double command",
        tiNumber47: "Regulating step command",
        tiNumber48: "Set-point Command, normalized value",
        tiNumber49: "Set-point Command, scaled value",
        tiNumber50: "Set-point Command, short floating point number",
        tiNumber51: "Bit string 32 bit command",
        tiNumber58: "Single command with time tag CP56Time2a",
        tiNumber59: "Double command with time tag CP56Time2a",
        tiNumber60: "Regulating step command with time tag CP56Time2a",
        tiNumber61: "Measured value, normalized value command with time tag CP56Time2a",
        tiNumber62: "Measured value, scaled value command with time tag CP56Time2a",
        tiNumber63: "Measured value, short floating point number command with time tag CP56Time2a",
        tiNumber64: "Bit string of 32 bit command with time tag CP56Time2a",
        default: "No description available"
      }
    },
    network: {
      connectedAp: {
        wizard: {
          title: {
            edit: "Edit ConnectedAP"
          },
          redundancySwitchLabel: "Redundancy",
          redundancyGroupTitle: "Redundancy Groups",
          noRedundancyGroupsAvailable: "No redundancy groups available",
          addRedundancyGroup: "Redundancy Group",
          stationTypeHelper: "Type of station",
          ipHelper: "IP address of the logical link",
          ipSubnetHelper: "Subnetwork mask of the IP address of the logical link",
          wFactorHelper: "W factor of the logical link",
          kFactorHelper: "K factor of the logical link",
          timeout0Helper: "Time-out in seconds of connection establishment",
          timeout1Helper: "Time-out in seconds of sent or test APDUs",
          timeout2Helper: "Time-out in seconds for acknowledges in case of no data messages",
          timeout3Helper: "Time-out in seconds for sending test frames in case of a long idle state"
        }
      },
      redundancyGroup: {
        wizard: {
          title: {
            edit: "Edit Redundancy Group",
            add: "Add Redundancy Group"
          },
          redundancyGroupNumberLabel: "Redundancy Group number",
          addedLRedundancyGroup: 'Added Redundancy Group {{ rGNumber }} from SubNetwork (name="{{ subNetworkName }}") and ConnectedAP (AccessPoint Name="{{ apName }}", IED Name="{{ iedName }}")',
          editedRedundancyGroup: 'Edited Redundancy Group {{ rGNumber }} from SubNetwork (name="{{ subNetworkName }}") and ConnectedAP (AccessPoint Name="{{ apName }}", IED Name="{{ iedName }}")',
          removedRedundancyGroup: 'Removed Redundancy Group {{ rGNumber }} from SubNetwork (name="{{ subNetworkName }}") and ConnectedAP (AccessPoint Name="{{ apName }}", IED Name="{{ iedName }}")',
          logicLinkGroupTitle: "Logic Links",
          noLogicLinksAvailable: "No Logic Links available",
          addLogicLink: "Logic Link"
        }
      },
      logicLink: {
        wizard: {
          title: {
            edit: "Edit Logic Link",
            add: "Add Logic Link"
          },
          logicLinkNumberLabel: "Logic Link number",
          addedLogicLink: 'Added Logic Link group to SubNetwork (name="{{ subNetworkName }}") and ConnectedAP (AccessPoint Name="{{ apName }}", IED Name="{{ iedName }}")',
          editedLogicLink: 'Edited Logic Link group from SubNetwork (name="{{ subNetworkName }}") and ConnectedAP (AccessPoint Name="{{ apName }}", IED Name="{{ iedName }}")',
          removedLogicLink: 'Removed Logic Link group from SubNetwork (name="{{ subNetworkName }}") and ConnectedAP (AccessPoint Name="{{ apName }}", IED Name="{{ iedName }}")'
        }
      }
    },
    wizard: {
      title: {
        doiInfo: "DOI Info",
        addressEdit: "Edit 104 Address",
        addAddress: "Add 104 Address"
      },
      error: {
        ioaConflict: "IOA conflict found within CASDU number",
        addAddressError: 'Invalid Template Structure, unable to create DAI Element. (DO: "{{ doType }}", CDC: "{{ cdc }}", DAI: "{{ structure }}")'
      },
      casduHelper: "CASDU Value",
      ioaHelper: "IOA Value",
      monitorTiHelper: "Monitor TI Value",
      monitorInverted: "Created Inverted Addresses (Monitor)",
      monitorCheck: "Create Check Addresses (Monitor)",
      controlTiHelper: "Control TI Value",
      controlInverted: "Created Inverted Addresses (Control)",
      controlCheck: "Create Check Addresses (Control)",
      expectedValueHelper: "Expected Value",
      unitMultiplierHelper: "Unit Multiplier",
      scaleMultiplierHelper: "Scale Multiplier",
      scaleOffsetHelper: "Scale Offset"
    }
  },
  "compare-ied": {
    selectProjectTitle: "Select template project to Compare IED with",
    selectIedTitle: "Select IED for comparison",
    resultTitle: "Compared IED with IED from template project",
    projectIedTitle: "IEDs in project",
    templateIedTitle: "IEDs in template project",
    selectIedButton: "Select IED",
    selectTemplateButton: "Select template project",
    noDiff: 'No differences between the project IED "{{ projectIedName }}" and template IED "{{ templateIedName }}"'
  },
  "enum-val": {
    wizard: {
      title: {
        add: "Add EnumVal",
        edit: "Edit EnumVal"
      }
    }
  },
  enum: {
    wizard: {
      title: {
        add: "Add EnumType",
        edit: "Edit EnumType"
      }
    },
    action: {
      edit: 'Change EnumType ID "{{oldId}}" and its DA references to {{newId}} '
    }
  },
  datype: {
    wizard: {
      title: {
        add: "Add DAType",
        edit: "Edit DAType"
      }
    },
    action: {
      edit: 'Change DAType ID "{{oldId}}" and its DA references to {{newId}} '
    }
  },
  bda: {
    wizard: {
      title: {
        add: "Add BDA",
        edit: "Edit BDA"
      }
    }
  },
  da: {
    wizard: {
      title: {
        add: "Add DA",
        edit: "Edit DA"
      }
    }
  },
  dai: {
    wizard: {
      valueHelper: "Value should be of type {{type}}",
      title: {
        create: 'Create DAI "{{daiName}}"',
        edit: 'Edit DAI "{{daiName}}"'
      }
    },
    action: {
      createdai: 'Created DAI "{{daiName}}"',
      updatedai: 'Edited DAI "{{daiName}}"'
    }
  },
  sdo: {
    wizard: {
      title: {
        add: "Add SDO",
        edit: "Edit SDO"
      }
    }
  },
  do: {
    wizard: {
      title: {
        add: "Add DO",
        edit: "Edit DO"
      }
    }
  },
  dotype: {
    wizard: {
      title: {
        add: "Add DOType",
        edit: "Edit DOType"
      },
      enums: "Default enumerations"
    },
    action: {
      edit: 'Change DOType ID "{{oldId}}" and its DO references to {{newId}} '
    }
  },
  lnodetype: {
    wizard: {
      title: {
        add: "Add LNodeType",
        edit: "Edit LNodeType",
        select: "Select Data Objects"
      }
    },
    action: {
      edit: 'Change LNodeType ID "{{oldId}}" and its LN references to {{newId}} '
    },
    autoimport: "Use LN class from OpenSCD template",
    missinglnclass: "Missing pre-defined LN class"
  },
  lnode: {
    wizard: {
      title: {
        selectIEDs: "Select IEDs",
        selectLDs: "Select logical devices",
        selectLNs: "Select logical nodes",
        selectLNodeTypes: "Select logical node types"
      },
      placeholder: "Please load an SCL file that contains IED elements.",
      uniquewarning: "Logical node class already exists",
      reference: "Add reference to existing logical node",
      instance: "Add reference to logical node type"
    },
    log: {
      title: "Cannot add LNode of class {{lnClass}}",
      nonuniquelninst: "Cannot find unique lnInst",
      uniqueln0: "Only one instance of {{lnClass}} allowed"
    },
    tooltip: "Create logical nodes reference"
  },
  guess: {
    wizard: {
      primary: "Guess content",
      title: "Select control model (ctlModel)",
      description: `IEDs often contain more controllable logical nodes than switchgear in the field. 
 You can select the control model(s) used specific for switchgear.`
    }
  },
  merge: {
    title: "Merge",
    defaultTitle: "Merge {{ source }} into {{ sink }} ({{ tag }})",
    log: "Merged {{ tag }} {{ source }} into {{ sink }}",
    children: "Child elements"
  },
  import: {
    title: "Import IEDs",
    log: {
      successful: "IED {{ name }} loaded",
      parsererror: "Parser error",
      loaderror: "Could not load file",
      importerror: "Could not import IED",
      missingied: "No IED element in the file",
      nouniqueied: "IED element {{ name }} already in the file"
    }
  },
  communication: {
    name: "Network Configuration",
    missing: "No subnetwork"
  },
  subnetwork: {
    name: "Subnetwork",
    wizard: {
      nameHelper: "Subnetwork name",
      descHelper: "Subnetwork description",
      typeHelper: "Network type (e.g. 8-MMS)",
      bitrateHelper: "Bit rate",
      title: {
        add: "Add subnetwork",
        edit: "Edit subnetwork"
      }
    }
  },
  connectedap: {
    name: "Connected access point",
    wizard: {
      addschemainsttype: "Add XMLSchema-instance type"
    },
    action: {
      addaddress: "Edit Address ({{iedName}} - {{apName}})"
    }
  },
  gse: {
    action: {
      addaddress: "Edit GSE ({{identity}})"
    },
    missingaccp: "AccessPoint is not connected. GSE cannot be created."
  },
  smv: {
    action: {
      addaddress: "Edit SMV ({{identity}})"
    },
    missingaccp: "AccessPoint is not connected. SMV cannot be created."
  },
  subscriber: {
    title: "Subscriber update",
    description: "Subscriber update: ",
    nonewitems: "no new IEDName elements to add",
    message: "{{updatenumber}} IEDName elements added to the project"
  },
  commmap: {
    title: "Communication mapping",
    connectCB: "Connect {{cbType}}",
    connectToIED: "Connect to {{iedName}}",
    sourceIED: "Source IED",
    sinkIED: "Sink IED"
  },
  updatesubstation: {
    title: "Update substation"
  },
  code: {
    log: "Changed element in XML editor: {{id}}"
  },
  updatedesc: {
    abb: "Added signal descriptions to ABB IEDs",
    sel: "Added signal descriptions to SEL IEDs"
  },
  sld: {
    substationSelector: "Select a substation",
    wizard: {
      xCoordinateHelper: "X-Coordinate for Single Line Diagram",
      yCoordinateHelper: "Y-Coordinate for Single Line Diagram"
    }
  },
  dataset: {
    fcda: { add: "Add Data Attributes" },
    fcd: { add: "Add Data Objects" }
  },
  report: {
    wizard: { location: "Select Report Control Location" },
    rptID: "Report control block identifier"
  },
  cleanup: {
    unreferencedDataSets: {
      title: "Unreferenced Datasets",
      deleteButton: "Remove Selected Datasets",
      tooltip: "Datasets without a reference to an associated GOOSE, Log, Report or Sampled Value Control Block"
    },
    unreferencedControls: {
      title: "Control Blocks with a Missing or Invalid Dataset",
      deleteButton: "Remove Selected Control Blocks",
      tooltip: "Control Blocks without a reference to an existing DataSet. Note that this is normal in an ICD file or for an MMS ReportControl with a dynamically allocated DataSet",
      addressDefinitionTooltip: "An address definition exists for this control block in the Communication section",
      alsoRemoveFromCommunication: "Also remove SMV/GSE Address"
    },
    unreferencedDataTypes: {
      title: "Unreferenced Data Types",
      deleteButton: "Remove Selected Data Types",
      tooltip: "Data Types which are not referenced in a Logical Node or other used Data Type",
      alsoRemoveSubTypes: "Also remove subtypes",
      stackExceeded: "Max Stack Length Exceeded. Maximum allowed is {{maxStackDepth}}. Datatype cleaning incomplete and file damage may have occurred."
    }
  },
  controlblock: {
    action: {
      edit: 'Edited {{type}} "{{name}}" in IED {{iedName}}',
      add: 'Added {{type}} "{{name}}" to IED {{iedName}}',
      remove: 'Removed {{type}} "{{name}}" and its referenced elements from IED {{iedName}}'
    },
    hints: {
      source: "Source IED",
      missingServer: "Not A Server",
      exist: "{{type}} with name {{name}} already exist",
      noMatchingData: "No matching data",
      valid: "Can be copied"
    },
    label: { copy: "Copy to other IEDs" }
  },
  gsecontrol: {
    wizard: { location: "Select GOOSE Control Block Location" }
  },
  samvpledvaluecontrol: {
    wizard: { location: "Select Sampled Value Control Block Location" }
  },
  publisher: {
    selectbutton: "Select other {{type}}",
    nodataset: "No DataSet referenced",
    smv: {
      commsetting: "Communication Settings (SMV)",
      noconnectedap: "No connection to SubNetwork",
      smvopts: "Optional Fields"
    }
  },
  exportCommunication: {
    noCommunicationSection: "No export as Communication section empty"
  },
  add: "Add",
  new: "New",
  remove: "Remove",
  edit: "Edit",
  move: "Move",
  create: "Create",
  save: "Save",
  saveAs: "Save as",
  open: "Open",
  reset: "Reset",
  cancel: "Cancel",
  close: "Close",
  filter: "Filter",
  filters: "Filters",
  undo: "Undo",
  redo: "Redo",
  duplicate: "Clone",
  connect: "Connect",
  disconnect: "Disconnect",
  next: "Next"
}, zi = { en: Ca, de: Ea };
async function Aa(i) {
  return Object.keys(zi).includes(i) ? zi[i] : {};
}
mr({ loader: Aa, empty: (i) => i });
const Ia = localStorage.getItem("language") || "en";
br(Ia);
class Ba extends ee {
  mergeCompasWizard() {
    return [
      {
        title: q("compas.merge.title"),
        content: [
          y`<compas-open
            @doc-retrieved=${(e) => {
            this.parent.dispatchEvent(
              De(
                bn(
                  this.doc.documentElement,
                  e.detail.doc.documentElement
                )
              )
            ), this.parent.dispatchEvent(De());
          }}
          >
          </compas-open> `
        ]
      }
    ];
  }
  firstUpdated() {
    this.parent = this.parentElement;
  }
  async run() {
    this.dispatchEvent(De(this.mergeCompasWizard()));
  }
}
export {
  Ba as default
};
