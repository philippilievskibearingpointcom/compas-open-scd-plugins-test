import "@material/mwc-button";
import "@material/mwc-dialog";
import { TextField as nr } from "@material/mwc-textfield";
import { Select as sr } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import "@material/mwc-formfield";
import { List as ar } from "@material/mwc-list";
import "@material/mwc-icon";
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
const ai = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, or = (i, e, t = null, r = null) => {
  for (; e !== t; ) {
    const n = e.nextSibling;
    i.insertBefore(e, r), e = n;
  }
}, rt = (i, e, t = null) => {
  for (; e !== t; ) {
    const r = e.nextSibling;
    i.removeChild(e), e = r;
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
const re = `{{lit-${String(Math.random()).slice(2)}}}`, Ti = `<!--${re}-->`, oi = new RegExp(`${re}|${Ti}`), Ie = "$lit$";
class Ni {
  constructor(e, t) {
    this.parts = [], this.element = t;
    const r = [], n = [], s = document.createTreeWalker(t.content, 133, null, !1);
    let a = 0, o = -1, l = 0;
    const { strings: m, values: { length: h } } = e;
    for (; l < h; ) {
      const u = s.nextNode();
      if (u === null) {
        s.currentNode = n.pop();
        continue;
      }
      if (o++, u.nodeType === 1) {
        if (u.hasAttributes()) {
          const x = u.attributes, { length: g } = x;
          let _ = 0;
          for (let y = 0; y < g; y++)
            ci(x[y].name, Ie) && _++;
          for (; _-- > 0; ) {
            const y = m[l], E = ft.exec(y)[2], C = E.toLowerCase() + Ie, q = u.getAttribute(C);
            u.removeAttribute(C);
            const U = q.split(oi);
            this.parts.push({ type: "attribute", index: o, name: E, strings: U }), l += U.length - 1;
          }
        }
        u.tagName === "TEMPLATE" && (n.push(u), s.currentNode = u.content);
      } else if (u.nodeType === 3) {
        const x = u.data;
        if (x.indexOf(re) >= 0) {
          const g = u.parentNode, _ = x.split(oi), y = _.length - 1;
          for (let E = 0; E < y; E++) {
            let C, q = _[E];
            if (q === "")
              C = W();
            else {
              const U = ft.exec(q);
              U !== null && ci(U[2], Ie) && (q = q.slice(0, U.index) + U[1] + U[2].slice(0, -Ie.length) + U[3]), C = document.createTextNode(q);
            }
            g.insertBefore(C, u), this.parts.push({ type: "node", index: ++o });
          }
          _[y] === "" ? (g.insertBefore(W(), u), r.push(u)) : u.data = _[y], l += y;
        }
      } else if (u.nodeType === 8)
        if (u.data === re) {
          const x = u.parentNode;
          (u.previousSibling === null || o === a) && (o++, x.insertBefore(W(), u)), a = o, this.parts.push({ type: "node", index: o }), u.nextSibling === null ? u.data = "" : (r.push(u), o--), l++;
        } else {
          let x = -1;
          for (; (x = u.data.indexOf(re, x + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), l++;
        }
    }
    for (const u of r)
      u.parentNode.removeChild(u);
  }
}
const ci = (i, e) => {
  const t = i.length - e.length;
  return t >= 0 && i.slice(t) === e;
}, Li = (i) => i.index !== -1, W = () => document.createComment(""), ft = (
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
const Vt = 133;
function Ri(i, e) {
  const { element: { content: t }, parts: r } = i, n = document.createTreeWalker(t, Vt, null, !1);
  let s = Ne(r), a = r[s], o = -1, l = 0;
  const m = [];
  let h = null;
  for (; n.nextNode(); ) {
    o++;
    const u = n.currentNode;
    for (u.previousSibling === h && (h = null), e.has(u) && (m.push(u), h === null && (h = u)), h !== null && l++; a !== void 0 && a.index === o; )
      a.index = h !== null ? -1 : a.index - l, s = Ne(r, s), a = r[s];
  }
  m.forEach((u) => u.parentNode.removeChild(u));
}
const cr = (i) => {
  let e = i.nodeType === 11 ? 0 : 1;
  const t = document.createTreeWalker(i, Vt, null, !1);
  for (; t.nextNode(); )
    e++;
  return e;
}, Ne = (i, e = -1) => {
  for (let t = e + 1; t < i.length; t++) {
    const r = i[t];
    if (Li(r))
      return t;
  }
  return -1;
};
function dr(i, e, t = null) {
  const { element: { content: r }, parts: n } = i;
  if (t == null) {
    r.appendChild(e);
    return;
  }
  const s = document.createTreeWalker(r, Vt, null, !1);
  let a = Ne(n), o = 0, l = -1;
  for (; s.nextNode(); )
    for (l++, s.currentNode === t && (o = cr(e), t.parentNode.insertBefore(e, t)); a !== -1 && n[a].index === l; ) {
      if (o > 0) {
        for (; a !== -1; )
          n[a].index += o, a = Ne(n, a);
        return;
      }
      a = Ne(n, a);
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
const Pi = /* @__PURE__ */ new WeakMap(), He = (i) => (...e) => {
  const t = i(...e);
  return Pi.set(t, !0), t;
}, Pe = (i) => typeof i == "function" && Pi.has(i);
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
const j = {}, Qe = {};
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
class bt {
  constructor(e, t, r) {
    this.__parts = [], this.template = e, this.processor = t, this.options = r;
  }
  update(e) {
    let t = 0;
    for (const r of this.__parts)
      r !== void 0 && r.setValue(e[t]), t++;
    for (const r of this.__parts)
      r !== void 0 && r.commit();
  }
  _clone() {
    const e = ai ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), t = [], r = this.template.parts, n = document.createTreeWalker(e, 133, null, !1);
    let s = 0, a = 0, o, l = n.nextNode();
    for (; s < r.length; ) {
      if (o = r[s], !Li(o)) {
        this.__parts.push(void 0), s++;
        continue;
      }
      for (; a < o.index; )
        a++, l.nodeName === "TEMPLATE" && (t.push(l), n.currentNode = l.content), (l = n.nextNode()) === null && (n.currentNode = t.pop(), l = n.nextNode());
      if (o.type === "node") {
        const m = this.processor.handleTextExpression(this.options);
        m.insertAfterNode(l.previousSibling), this.__parts.push(m);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(l, o.name, o.strings, this.options));
      s++;
    }
    return ai && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const di = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (i) => i }), lr = ` ${re} `;
class zi {
  constructor(e, t, r, n) {
    this.strings = e, this.values = t, this.type = r, this.processor = n;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */
  getHTML() {
    const e = this.strings.length - 1;
    let t = "", r = !1;
    for (let n = 0; n < e; n++) {
      const s = this.strings[n], a = s.lastIndexOf("<!--");
      r = (a > -1 || r) && s.indexOf("-->", a + 1) === -1;
      const o = ft.exec(s);
      o === null ? t += s + (r ? lr : Ti) : t += s.substr(0, o.index) + o[1] + o[2] + Ie + o[3] + re;
    }
    return t += this.strings[e], t;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let t = this.getHTML();
    return di !== void 0 && (t = di.createHTML(t)), e.innerHTML = t, e;
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
const Ht = (i) => i === null || !(typeof i == "object" || typeof i == "function"), gt = (i) => Array.isArray(i) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(i && i[Symbol.iterator]);
class Fi {
  constructor(e, t, r) {
    this.dirty = !0, this.element = e, this.name = t, this.strings = r, this.parts = [];
    for (let n = 0; n < r.length - 1; n++)
      this.parts[n] = this._createPart();
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */
  _createPart() {
    return new Ee(this);
  }
  _getValue() {
    const e = this.strings, t = e.length - 1, r = this.parts;
    if (t === 1 && e[0] === "" && e[1] === "") {
      const s = r[0].value;
      if (typeof s == "symbol")
        return String(s);
      if (typeof s == "string" || !gt(s))
        return s;
    }
    let n = "";
    for (let s = 0; s < t; s++) {
      n += e[s];
      const a = r[s];
      if (a !== void 0) {
        const o = a.value;
        if (Ht(o) || !gt(o))
          n += typeof o == "string" ? o : String(o);
        else
          for (const l of o)
            n += typeof l == "string" ? l : String(l);
      }
    }
    return n += e[t], n;
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
  }
}
class Ee {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== j && (!Ht(e) || e !== this.value) && (this.value = e, Pe(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; Pe(this.value); ) {
      const e = this.value;
      this.value = j, e(this);
    }
    this.value !== j && this.committer.commit();
  }
}
class ve {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(W()), this.endNode = e.appendChild(W());
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
    e.__insert(this.startNode = W()), e.__insert(this.endNode = W());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = W()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; Pe(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = j, t(this);
    }
    const e = this.__pendingValue;
    e !== j && (Ht(e) ? e !== this.value && this.__commitText(e) : e instanceof zi ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : gt(e) ? this.__commitIterable(e) : e === Qe ? (this.value = Qe, this.clear()) : this.__commitText(e));
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
    const r = typeof e == "string" ? e : String(e);
    t === this.endNode.previousSibling && t.nodeType === 3 ? t.data = r : this.__commitNode(document.createTextNode(r)), this.value = e;
  }
  __commitTemplateResult(e) {
    const t = this.options.templateFactory(e);
    if (this.value instanceof bt && this.value.template === t)
      this.value.update(e.values);
    else {
      const r = new bt(t, e.processor, this.options), n = r._clone();
      r.update(e.values), this.__commitNode(n), this.value = r;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const t = this.value;
    let r = 0, n;
    for (const s of e)
      n = t[r], n === void 0 && (n = new ve(this.options), t.push(n), r === 0 ? n.appendIntoPart(this) : n.insertAfterPart(t[r - 1])), n.setValue(s), n.commit(), r++;
    r < t.length && (t.length = r, this.clear(n && n.endNode));
  }
  clear(e = this.startNode) {
    rt(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class pr {
  constructor(e, t, r) {
    if (this.value = void 0, this.__pendingValue = void 0, r.length !== 2 || r[0] !== "" || r[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = t, this.strings = r;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; Pe(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = j, t(this);
    }
    if (this.__pendingValue === j)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = j;
  }
}
class mr extends Fi {
  constructor(e, t, r) {
    super(e, t, r), this.single = r.length === 2 && r[0] === "" && r[1] === "";
  }
  _createPart() {
    return new Ut(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
  }
}
class Ut extends Ee {
}
let Oi = !1;
(() => {
  try {
    const i = {
      get capture() {
        return Oi = !0, !1;
      }
    };
    window.addEventListener("test", i, i), window.removeEventListener("test", i, i);
  } catch {
  }
})();
class ur {
  constructor(e, t, r) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = t, this.eventContext = r, this.__boundHandleEvent = (n) => this.handleEvent(n);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; Pe(this.__pendingValue); ) {
      const s = this.__pendingValue;
      this.__pendingValue = j, s(this);
    }
    if (this.__pendingValue === j)
      return;
    const e = this.__pendingValue, t = this.value, r = e == null || t != null && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive), n = e != null && (t == null || r);
    r && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), n && (this.__options = hr(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = j;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
}
const hr = (i) => i && (Oi ? { capture: i.capture, passive: i.passive, once: i.once } : i.capture);
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
function fr(i) {
  let e = ze.get(i.type);
  e === void 0 && (e = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, ze.set(i.type, e));
  let t = e.stringsArray.get(i.strings);
  if (t !== void 0)
    return t;
  const r = i.strings.join(re);
  return t = e.keyString.get(r), t === void 0 && (t = new Ni(i, i.getTemplateElement()), e.keyString.set(r, t)), e.stringsArray.set(i.strings, t), t;
}
const ze = /* @__PURE__ */ new Map();
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
const we = /* @__PURE__ */ new WeakMap(), br = (i, e, t) => {
  let r = we.get(e);
  r === void 0 && (rt(e, e.firstChild), we.set(e, r = new ve(Object.assign({ templateFactory: fr }, t))), r.appendInto(e)), r.setValue(i), r.commit();
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
class gr {
  /**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */
  handleAttributeExpressions(e, t, r, n) {
    const s = t[0];
    return s === "." ? new mr(e, t.slice(1), r).parts : s === "@" ? [new ur(e, t.slice(1), n.eventContext)] : s === "?" ? [new pr(e, t.slice(1), r)] : new Fi(e, t, r).parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(e) {
    return new ve(e);
  }
}
const vr = new gr();
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
const p = (i, ...e) => new zi(i, e, "html", vr);
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
const Mi = (i, e) => `${i}--${e}`;
let Ye = !0;
typeof window.ShadyCSS > "u" ? Ye = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), Ye = !1);
const yr = (i) => (e) => {
  const t = Mi(e.type, i);
  let r = ze.get(t);
  r === void 0 && (r = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, ze.set(t, r));
  let n = r.stringsArray.get(e.strings);
  if (n !== void 0)
    return n;
  const s = e.strings.join(re);
  if (n = r.keyString.get(s), n === void 0) {
    const a = e.getTemplateElement();
    Ye && window.ShadyCSS.prepareTemplateDom(a, i), n = new Ni(e, a), r.keyString.set(s, n);
  }
  return r.stringsArray.set(e.strings, n), n;
}, _r = ["html", "svg"], Sr = (i) => {
  _r.forEach((e) => {
    const t = ze.get(Mi(e, i));
    t !== void 0 && t.keyString.forEach((r) => {
      const { element: { content: n } } = r, s = /* @__PURE__ */ new Set();
      Array.from(n.querySelectorAll("style")).forEach((a) => {
        s.add(a);
      }), Ri(r, s);
    });
  });
}, $i = /* @__PURE__ */ new Set(), wr = (i, e, t) => {
  $i.add(i);
  const r = t ? t.element : document.createElement("template"), n = e.querySelectorAll("style"), { length: s } = n;
  if (s === 0) {
    window.ShadyCSS.prepareTemplateStyles(r, i);
    return;
  }
  const a = document.createElement("style");
  for (let m = 0; m < s; m++) {
    const h = n[m];
    h.parentNode.removeChild(h), a.textContent += h.textContent;
  }
  Sr(i);
  const o = r.content;
  t ? dr(t, a, o.firstChild) : o.insertBefore(a, o.firstChild), window.ShadyCSS.prepareTemplateStyles(r, i);
  const l = o.querySelector("style");
  if (window.ShadyCSS.nativeShadow && l !== null)
    e.insertBefore(l.cloneNode(!0), e.firstChild);
  else if (t) {
    o.insertBefore(a, o.firstChild);
    const m = /* @__PURE__ */ new Set();
    m.add(a), Ri(t, m);
  }
}, xr = (i, e, t) => {
  if (!t || typeof t != "object" || !t.scopeName)
    throw new Error("The `scopeName` option is required.");
  const r = t.scopeName, n = we.has(e), s = Ye && e.nodeType === 11 && !!e.host, a = s && !$i.has(r), o = a ? document.createDocumentFragment() : e;
  if (br(i, o, Object.assign({ templateFactory: yr(r) }, t)), a) {
    const l = we.get(o);
    we.delete(o);
    const m = l.value instanceof bt ? l.value.template : void 0;
    wr(r, o, m), rt(e, e.firstChild), e.appendChild(o), we.set(e, l);
  }
  !n && s && window.ShadyCSS.styleElement(e.host);
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
var Vi;
window.JSCompiler_renameProperty = (i, e) => i;
const vt = {
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
}, Hi = (i, e) => e !== i && (e === e || i === i), st = {
  attribute: !0,
  type: String,
  converter: vt,
  reflect: !1,
  hasChanged: Hi
}, at = 1, ot = 4, ct = 8, dt = 16, yt = "finalized";
class Ui extends HTMLElement {
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
    return this._classProperties.forEach((t, r) => {
      const n = this._attributeNameForProperty(r, t);
      n !== void 0 && (this._attributeToPropertyMap.set(n, r), e.push(n));
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
      e !== void 0 && e.forEach((t, r) => this._classProperties.set(r, t));
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
  static createProperty(e, t = st) {
    if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e))
      return;
    const r = typeof e == "symbol" ? Symbol() : `__${e}`, n = this.getPropertyDescriptor(e, r, t);
    n !== void 0 && Object.defineProperty(this.prototype, e, n);
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
  static getPropertyDescriptor(e, t, r) {
    return {
      // tslint:disable-next-line:no-any no symbol in index
      get() {
        return this[t];
      },
      set(n) {
        const s = this[e];
        this[t] = n, this.requestUpdateInternal(e, s, r);
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
    return this._classProperties && this._classProperties.get(e) || st;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const e = Object.getPrototypeOf(this);
    if (e.hasOwnProperty(yt) || e.finalize(), this[yt] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const t = this.properties, r = [
        ...Object.getOwnPropertyNames(t),
        ...typeof Object.getOwnPropertySymbols == "function" ? Object.getOwnPropertySymbols(t) : []
      ];
      for (const n of r)
        this.createProperty(n, t[n]);
    }
  }
  /**
   * Returns the property name for the given attribute `name`.
   * @nocollapse
   */
  static _attributeNameForProperty(e, t) {
    const r = t.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  /**
   * Returns true if a property should request an update.
   * Called when a property value is set and uses the `hasChanged`
   * option for the property if present or a strict identity check.
   * @nocollapse
   */
  static _valueHasChanged(e, t, r = Hi) {
    return r(e, t);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(e, t) {
    const r = t.type, n = t.converter || vt, s = typeof n == "function" ? n : n.fromAttribute;
    return s ? s(e, r) : e;
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
    const r = t.type, n = t.converter;
    return (n && n.toAttribute || vt.toAttribute)(e, r);
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
        const r = this[t];
        delete this[t], this._instanceProperties || (this._instanceProperties = /* @__PURE__ */ new Map()), this._instanceProperties.set(t, r);
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
  attributeChangedCallback(e, t, r) {
    t !== r && this._attributeToProperty(e, r);
  }
  _propertyToAttribute(e, t, r = st) {
    const n = this.constructor, s = n._attributeNameForProperty(e, r);
    if (s !== void 0) {
      const a = n._propertyValueToAttribute(t, r);
      if (a === void 0)
        return;
      this._updateState = this._updateState | ct, a == null ? this.removeAttribute(s) : this.setAttribute(s, a), this._updateState = this._updateState & ~ct;
    }
  }
  _attributeToProperty(e, t) {
    if (this._updateState & ct)
      return;
    const r = this.constructor, n = r._attributeToPropertyMap.get(e);
    if (n !== void 0) {
      const s = r.getPropertyOptions(n);
      this._updateState = this._updateState | dt, this[n] = // tslint:disable-next-line:no-any
      r._propertyValueFromAttribute(t, s), this._updateState = this._updateState & ~dt;
    }
  }
  /**
   * This protected version of `requestUpdate` does not access or return the
   * `updateComplete` promise. This promise can be overridden and is therefore
   * not free to access.
   */
  requestUpdateInternal(e, t, r) {
    let n = !0;
    if (e !== void 0) {
      const s = this.constructor;
      r = r || s.getPropertyOptions(e), s._valueHasChanged(this[e], t, r.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), r.reflect === !0 && !(this._updateState & dt) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(e, r))) : n = !1;
    }
    !this._hasRequestedUpdate && n && (this._updatePromise = this._enqueueUpdate());
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
    this._updateState = this._updateState | ot;
    try {
      await this._updatePromise;
    } catch {
    }
    const e = this.performUpdate();
    return e != null && await e, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & ot;
  }
  get hasUpdated() {
    return this._updateState & at;
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
    } catch (r) {
      throw e = !1, this._markUpdated(), r;
    }
    e && (this._updateState & at || (this._updateState = this._updateState | at, this.firstUpdated(t)), this.updated(t));
  }
  _markUpdated() {
    this._changedProperties = /* @__PURE__ */ new Map(), this._updateState = this._updateState & ~ot;
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
    this._reflectingProperties !== void 0 && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach((t, r) => this._propertyToAttribute(r, this[r], t)), this._reflectingProperties = void 0), this._markUpdated();
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
Vi = yt;
Ui[Vi] = !0;
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
const kr = (i, e) => (window.customElements.define(i, e), e), Er = (i, e) => {
  const { kind: t, elements: r } = e;
  return {
    kind: t,
    elements: r,
    // This callback is called once the class is otherwise fully defined
    finisher(n) {
      window.customElements.define(i, n);
    }
  };
}, k = (i) => (e) => typeof e == "function" ? kr(i, e) : Er(i, e), Cr = (i, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), { finisher(t) {
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
}, Ar = (i, e, t) => {
  e.constructor.createProperty(t, i);
};
function d(i) {
  return (e, t) => t !== void 0 ? Ar(i, e, t) : Cr(i, e);
}
function Dr(i) {
  return d({ attribute: !1, hasChanged: void 0 });
}
const f = (i) => Dr();
function S(i, e) {
  return (t, r) => {
    const n = {
      get() {
        return this.renderRoot.querySelector(i);
      },
      enumerable: !0,
      configurable: !0
    };
    return r !== void 0 ? Gt(n, t, r) : qt(n, t);
  };
}
function Bt(i) {
  return (e, t) => {
    const r = {
      async get() {
        return await this.updateComplete, this.renderRoot.querySelector(i);
      },
      enumerable: !0,
      configurable: !0
    };
    return t !== void 0 ? Gt(r, e, t) : qt(r, e);
  };
}
const Gt = (i, e, t) => {
  Object.defineProperty(e, t, i);
}, qt = (i, e) => ({
  kind: "method",
  placement: "prototype",
  key: e.key,
  descriptor: i
}), Ir = (i, e) => Object.assign(Object.assign({}, e), { finisher(t) {
  Object.assign(t.prototype[e.key], i);
} }), Tr = (
  // tslint:disable-next-line:no-any legacy decorator
  (i, e, t) => {
    Object.assign(e[t], i);
  }
);
function Bi(i) {
  return (e, t) => t !== void 0 ? Tr(i, e, t) : Ir(i, e);
}
const li = Element.prototype, Nr = li.msMatchesSelector || li.webkitMatchesSelector;
function Gi(i = "", e = !1, t = "") {
  return (r, n) => {
    const s = {
      get() {
        const a = `slot${i ? `[name=${i}]` : ":not([name])"}`, o = this.renderRoot.querySelector(a);
        let l = o && o.assignedNodes({ flatten: e });
        return l && t && (l = l.filter((m) => m.nodeType === Node.ELEMENT_NODE && // tslint:disable-next-line:no-any testing existence on older browsers
        (m.matches ? m.matches(t) : Nr.call(m, t)))), l;
      },
      enumerable: !0,
      configurable: !0
    };
    return n !== void 0 ? Gt(s, r, n) : qt(s, r);
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
const _t = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, jt = Symbol();
class Wt {
  constructor(e, t) {
    if (t !== jt)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (_t ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const Kt = (i) => new Wt(String(i), jt), Lr = (i) => {
  if (i instanceof Wt)
    return i.cssText;
  if (typeof i == "number")
    return i;
  throw new Error(`Value passed to 'css' function must be a 'css' function result: ${i}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
}, R = (i, ...e) => {
  const t = e.reduce((r, n, s) => r + Lr(n) + i[s + 1], i[0]);
  return new Wt(t, jt);
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
const pi = {};
class D extends Ui {
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
      const t = (s, a) => s.reduceRight((o, l) => (
        // Note: On IE set.add() does not return the set
        Array.isArray(l) ? t(l, o) : (o.add(l), o)
      ), a), r = t(e, /* @__PURE__ */ new Set()), n = [];
      r.forEach((s) => n.unshift(s)), this._styles = n;
    } else
      this._styles = e === void 0 ? [] : [e];
    this._styles = this._styles.map((t) => {
      if (t instanceof CSSStyleSheet && !_t) {
        const r = Array.prototype.slice.call(t.cssRules).reduce((n, s) => n + s.cssText, "");
        return Kt(r);
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
    e.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((t) => t.cssText), this.localName) : _t ? this.renderRoot.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
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
    super.update(e), t !== pi && this.constructor.render(t, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((r) => {
      const n = document.createElement("style");
      n.textContent = r.cssText, this.renderRoot.appendChild(n);
    }));
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `NodePart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   */
  render() {
    return pi;
  }
}
D.finalized = !0;
D.render = xr;
D.shadowRootOptions = { mode: "open" };
const Rr = 1e3 * 60, St = "langChanged";
function Pr(i, e, t) {
  return Object.entries(wt(e || {})).reduce((r, [n, s]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(wt(s))), i);
}
function zr(i, e) {
  const t = i.split(".");
  let r = e.strings;
  for (; r != null && t.length > 0; )
    r = r[t.shift()];
  return r != null ? r.toString() : null;
}
function wt(i) {
  return typeof i == "function" ? i() : i;
}
const Fr = () => ({
  loader: () => Promise.resolve({}),
  empty: (i) => `[${i}]`,
  lookup: zr,
  interpolate: Pr,
  translationCache: {}
});
let Fe = Fr();
function Or(i) {
  return Fe = Object.assign(Object.assign({}, Fe), i);
}
function Mr(i) {
  window.dispatchEvent(new CustomEvent(St, { detail: i }));
}
function $r(i, e, t = Fe) {
  Mr({
    previousStrings: t.strings,
    previousLang: t.lang,
    lang: t.lang = i,
    strings: t.strings = e
  });
}
function Vr(i, e) {
  const t = (r) => i(r.detail);
  return window.addEventListener(St, t, e), () => window.removeEventListener(St, t);
}
async function Hr(i, e = Fe) {
  const t = await e.loader(i, e);
  e.translationCache = {}, $r(i, t, e);
}
function X(i, e, t = Fe) {
  let r = t.translationCache[i] || (t.translationCache[i] = t.lookup(i, t) || t.empty(i, t));
  return e = e != null ? wt(e) : null, e != null ? t.interpolate(r, e, t) : r;
}
function qi(i) {
  return i instanceof ve ? i.startNode.isConnected : i instanceof Ee ? i.committer.element.isConnected : i.element.isConnected;
}
function Ur(i) {
  for (const [e] of i)
    qi(e) || i.delete(e);
}
function Br(i) {
  "requestIdleCallback" in window ? window.requestIdleCallback(i) : setTimeout(i);
}
function Gr(i, e) {
  setInterval(() => Br(() => Ur(i)), e);
}
const Xt = /* @__PURE__ */ new Map();
function qr() {
  Vr((i) => {
    for (const [e, t] of Xt)
      qi(e) && ji(e, t, i);
  });
}
qr();
Gr(Xt, Rr);
function ji(i, e, t) {
  const r = e(t);
  i.value !== r && (i.setValue(r), i.commit());
}
const jr = He((i) => (e) => {
  Xt.set(e, i), ji(e, i);
}), v = (i, e, t) => jr(() => X(i, e, t));
function et(i, e) {
  return new CustomEvent("pending-state", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { promise: i, ...e?.detail }
  });
}
function Te(i, e) {
  let t = "", r = "";
  return e || (e = "	"), i.split(/>\s*</).forEach(function(n) {
    n.match(/^\/\w/) && (r = r.substring(e.length)), t += r + "<" + n + `>\r
`, n.match(/^<?\w[^>]*[^/]$/) && (r += e);
  }), t.substring(1, t.length - 3);
}
function Wr(i, e) {
  if (i) {
    const t = new Blob(
      [Te(new XMLSerializer().serializeToString(i))],
      {
        type: "application/xml"
      }
    ), r = document.createElement("a");
    r.download = e, r.href = URL.createObjectURL(t), r.dataset.downloadurl = ["application/xml", r.download, r.href].join(":"), r.style.display = "none", document.body.appendChild(r), r.click(), document.body.removeChild(r), setTimeout(function() {
      URL.revokeObjectURL(r.href);
    }, 5e3);
  }
}
var xt = function(i, e) {
  return xt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, xt(i, e);
};
function Wi(i, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  xt(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var fe = function() {
  return fe = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
  }, fe.apply(this, arguments);
};
function c(i, e, t, r) {
  var n = arguments.length, s = n < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, t) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(i, e, t, r);
  else for (var o = i.length - 1; o >= 0; o--) (a = i[o]) && (s = (n < 3 ? a(s) : n > 3 ? a(e, t, s) : a(e, t)) || s);
  return n > 3 && s && Object.defineProperty(e, t, s), s;
}
function je(i) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && i[e], r = 0;
  if (t) return t.call(i);
  if (i && typeof i.length == "number") return {
    next: function() {
      return i && r >= i.length && (i = void 0), { value: i && i[r++], done: !i };
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
function Kr(i, e) {
  var t = i.matches || i.webkitMatchesSelector || i.msMatchesSelector;
  return t.call(i, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Xr = (i) => i.nodeType === Node.ELEMENT_NODE;
function Zr(i) {
  return {
    addClass: (e) => {
      i.classList.add(e);
    },
    removeClass: (e) => {
      i.classList.remove(e);
    },
    hasClass: (e) => i.classList.contains(e)
  };
}
const Ki = () => {
}, Jr = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", Ki, Jr);
document.removeEventListener("x", Ki);
const Xi = (i = window.document) => {
  let e = i.activeElement;
  const t = [];
  if (!e)
    return t;
  for (; e && (t.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return t;
}, Qr = (i) => {
  const e = Xi();
  if (!e.length)
    return !1;
  const t = e[e.length - 1], r = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let n = [];
  const s = (a) => {
    n = a.composedPath();
  };
  return document.body.addEventListener("check-if-focused", s), t.dispatchEvent(r), document.body.removeEventListener("check-if-focused", s), n.indexOf(i) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Zt extends D {
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
var Jt = (
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
var Yr = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, en = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, mi = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function tn(i, e, t) {
  if (!i)
    return { x: 0, y: 0 };
  var r = e.x, n = e.y, s = r + t.left, a = n + t.top, o, l;
  if (i.type === "touchstart") {
    var m = i;
    o = m.changedTouches[0].pageX - s, l = m.changedTouches[0].pageY - a;
  } else {
    var h = i;
    o = h.pageX - s, l = h.pageY - a;
  }
  return { x: o, y: l };
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
], hi = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], We = [], rn = (
  /** @class */
  function(i) {
    Wi(e, i);
    function e(t) {
      var r = i.call(this, fe(fe({}, e.defaultAdapter), t)) || this;
      return r.activationAnimationHasEnded = !1, r.activationTimer = 0, r.fgDeactivationRemovalTimer = 0, r.fgScale = "0", r.frame = { width: 0, height: 0 }, r.initialSize = 0, r.layoutFrame = 0, r.maxRadius = 0, r.unboundedCoords = { left: 0, top: 0 }, r.activationState = r.defaultActivationState(), r.activationTimerCallback = function() {
        r.activationAnimationHasEnded = !0, r.runDeactivationUXLogicIfReady();
      }, r.activateHandler = function(n) {
        r.activateImpl(n);
      }, r.deactivateHandler = function() {
        r.deactivateImpl();
      }, r.focusHandler = function() {
        r.handleFocus();
      }, r.blurHandler = function() {
        r.handleBlur();
      }, r.resizeHandler = function() {
        r.layout();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Yr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return en;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return mi;
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
      var t = this, r = this.supportsPressRipple();
      if (this.registerRootHandlers(r), r) {
        var n = e.cssClasses, s = n.ROOT, a = n.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(s), t.adapter.isUnbounded() && (t.adapter.addClass(a), t.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var t = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var r = e.cssClasses, n = r.ROOT, s = r.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.removeClass(n), t.adapter.removeClass(s), t.removeCssVars();
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
      var r = e.cssClasses.UNBOUNDED;
      t ? this.adapter.addClass(r) : this.adapter.removeClass(r);
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
      var r, n;
      if (t) {
        try {
          for (var s = je(ui), a = s.next(); !a.done; a = s.next()) {
            var o = a.value;
            this.adapter.registerInteractionHandler(o, this.activateHandler);
          }
        } catch (l) {
          r = { error: l };
        } finally {
          try {
            a && !a.done && (n = s.return) && n.call(s);
          } finally {
            if (r) throw r.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(t) {
      var r, n;
      if (t.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var s = je(hi), a = s.next(); !a.done; a = s.next()) {
            var o = a.value;
            this.adapter.registerDocumentInteractionHandler(o, this.deactivateHandler);
          }
        } catch (l) {
          r = { error: l };
        } finally {
          try {
            a && !a.done && (n = s.return) && n.call(s);
          } finally {
            if (r) throw r.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, r;
      try {
        for (var n = je(ui), s = n.next(); !s.done; s = n.next()) {
          var a = s.value;
          this.adapter.deregisterInteractionHandler(a, this.activateHandler);
        }
      } catch (o) {
        t = { error: o };
      } finally {
        try {
          s && !s.done && (r = n.return) && r.call(n);
        } finally {
          if (t) throw t.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var t, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var n = je(hi), s = n.next(); !s.done; s = n.next()) {
          var a = s.value;
          this.adapter.deregisterDocumentInteractionHandler(a, this.deactivateHandler);
        }
      } catch (o) {
        t = { error: o };
      } finally {
        try {
          s && !s.done && (r = n.return) && r.call(n);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var t = this, r = e.strings, n = Object.keys(r);
      n.forEach(function(s) {
        s.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(r[s], null);
      });
    }, e.prototype.activateImpl = function(t) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var n = this.activationState;
        if (!n.isActivated) {
          var s = this.previousActivationEvent, a = s && t !== void 0 && s.type !== t.type;
          if (!a) {
            n.isActivated = !0, n.isProgrammatic = t === void 0, n.activationEvent = t, n.wasActivatedByPointer = n.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var o = t !== void 0 && We.length > 0 && We.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (o) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (We.push(t.target), this.registerDeactivationHandlers(t)), n.wasElementMadeActive = this.checkElementMadeActive(t), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              We = [], !n.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(t), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, r = e.strings, n = r.VAR_FG_TRANSLATE_START, s = r.VAR_FG_TRANSLATE_END, a = e.cssClasses, o = a.FG_DEACTIVATION, l = a.FG_ACTIVATION, m = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var h = "", u = "";
      if (!this.adapter.isUnbounded()) {
        var x = this.getFgTranslationCoordinates(), g = x.startPoint, _ = x.endPoint;
        h = g.x + "px, " + g.y + "px", u = _.x + "px, " + _.y + "px";
      }
      this.adapter.updateCssVariable(n, h), this.adapter.updateCssVariable(s, u), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(o), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, m);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, r = t.activationEvent, n = t.wasActivatedByPointer, s;
      n ? s = tn(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : s = {
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
      var t = this, r = e.cssClasses.FG_DEACTIVATION, n = this.activationState, s = n.hasDeactivationUXRun, a = n.isActivated, o = s || !a;
      o && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(r);
      }, mi.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var t = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(t), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var t = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return t.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var t = this, r = this.activationState;
      if (r.isActivated) {
        var n = fe({}, r);
        r.isProgrammatic ? (requestAnimationFrame(function() {
          t.animateDeactivation(n);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          t.activationState.hasDeactivationUXRun = !0, t.animateDeactivation(n), t.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(t) {
      var r = t.wasActivatedByPointer, n = t.wasElementMadeActive;
      (r || n) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var t = this;
      this.frame = this.adapter.computeBoundingRect();
      var r = Math.max(this.frame.height, this.frame.width), n = function() {
        var a = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return a + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : n();
      var s = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && s % 2 !== 0 ? this.initialSize = s - 1 : this.initialSize = s, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, r = t.VAR_FG_SIZE, n = t.VAR_LEFT, s = t.VAR_TOP, a = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(a, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(n, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(s, this.unboundedCoords.top + "px"));
    }, e;
  }(Jt)
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
class nn {
  constructor(e) {
    this.classes = /* @__PURE__ */ new Set(), this.changed = !1, this.element = e;
    const t = (e.getAttribute("class") || "").split(/\s+/);
    for (const r of t)
      this.classes.add(r);
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
const fi = /* @__PURE__ */ new WeakMap(), Ce = He((i) => (e) => {
  if (!(e instanceof Ee) || e instanceof Ut || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: t } = e, { element: r } = t;
  let n = fi.get(e);
  n === void 0 && (r.setAttribute("class", t.strings.join(" ")), fi.set(e, n = /* @__PURE__ */ new Set()));
  const s = r.classList || new nn(r);
  n.forEach((a) => {
    a in i || (s.remove(a), n.delete(a));
  });
  for (const a in i) {
    const o = i[a];
    o != n.has(a) && (o ? (s.add(a), n.add(a)) : (s.remove(a), n.delete(a)));
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
const bi = /* @__PURE__ */ new WeakMap(), sn = He((i) => (e) => {
  if (!(e instanceof Ee) || e instanceof Ut || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: t } = e, { style: r } = t.element;
  let n = bi.get(e);
  n === void 0 && (r.cssText = t.strings.join(" "), bi.set(e, n = /* @__PURE__ */ new Set())), n.forEach((s) => {
    s in i || (n.delete(s), s.indexOf("-") === -1 ? r[s] = null : r.removeProperty(s));
  });
  for (const s in i)
    n.add(s), s.indexOf("-") === -1 ? r[s] = i[s] : r.setProperty(s, i[s]);
});
class A extends Zt {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = rn;
  }
  get isActive() {
    return Kr(this.parentElement || this, ":active");
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
    const e = this.activated && (this.primary || !this.accent), t = this.selected && (this.primary || !this.accent), r = {
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
    return p`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Ce(r)}"
          style="${sn({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
c([
  S(".mdc-ripple-surface")
], A.prototype, "mdcRoot", void 0);
c([
  d({ type: Boolean })
], A.prototype, "primary", void 0);
c([
  d({ type: Boolean })
], A.prototype, "accent", void 0);
c([
  d({ type: Boolean })
], A.prototype, "unbounded", void 0);
c([
  d({ type: Boolean })
], A.prototype, "disabled", void 0);
c([
  d({ type: Boolean })
], A.prototype, "activated", void 0);
c([
  d({ type: Boolean })
], A.prototype, "selected", void 0);
c([
  d({ type: Boolean })
], A.prototype, "internalUseStateLayerCustomProperties", void 0);
c([
  f()
], A.prototype, "hovering", void 0);
c([
  f()
], A.prototype, "bgFocused", void 0);
c([
  f()
], A.prototype, "fgActivation", void 0);
c([
  f()
], A.prototype, "fgDeactivation", void 0);
c([
  f()
], A.prototype, "fgScale", void 0);
c([
  f()
], A.prototype, "fgSize", void 0);
c([
  f()
], A.prototype, "translateStart", void 0);
c([
  f()
], A.prototype, "translateEnd", void 0);
c([
  f()
], A.prototype, "leftPos", void 0);
c([
  f()
], A.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const an = R`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let kt = class extends A {
};
kt.styles = [an];
kt = c([
  k("mwc-ripple")
], kt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const J = (i) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e, t) => {
    if (e.constructor._observers) {
      if (!e.constructor.hasOwnProperty("_observers")) {
        const r = e.constructor._observers;
        e.constructor._observers = /* @__PURE__ */ new Map(), r.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (n, s) => e.constructor._observers.set(s, n)
        );
      }
    } else {
      e.constructor._observers = /* @__PURE__ */ new Map();
      const r = e.updated;
      e.updated = function(n) {
        r.call(this, n), n.forEach((s, a) => {
          const l = this.constructor._observers.get(a);
          l !== void 0 && l.call(this, this[a], s);
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
class Qt {
  constructor(e) {
    this.startPress = (t) => {
      e().then((r) => {
        r && r.startPress(t);
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
class I extends D {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new Qt(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), t = this.graphic ? this.renderGraphic() : p``, r = this.hasMeta ? this.renderMeta() : p``;
    return p`
      ${this.renderRipple()}
      ${t}
      ${e}
      ${r}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? p`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? p`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return p`
      <span class="mdc-deprecated-list-item__graphic material-icons ${Ce(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return p`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return p`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return p`<slot></slot>`;
  }
  renderTwoline() {
    return p`
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
    const r = () => {
      window.removeEventListener(e, r), this.rippleHandlers.endPress();
    };
    window.addEventListener(e, r), this.rippleHandlers.startPress(t);
  }
  fireRequestSelected(e, t) {
    if (this.noninteractive)
      return;
    const r = new CustomEvent("request-selected", { bubbles: !0, composed: !0, detail: { source: t, selected: e } });
    this.dispatchEvent(r);
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
c([
  S("slot")
], I.prototype, "slotElement", void 0);
c([
  Bt("mwc-ripple")
], I.prototype, "ripple", void 0);
c([
  d({ type: String })
], I.prototype, "value", void 0);
c([
  d({ type: String, reflect: !0 })
], I.prototype, "group", void 0);
c([
  d({ type: Number, reflect: !0 })
], I.prototype, "tabindex", void 0);
c([
  d({ type: Boolean, reflect: !0 }),
  J(function(i) {
    i ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], I.prototype, "disabled", void 0);
c([
  d({ type: Boolean, reflect: !0 })
], I.prototype, "twoline", void 0);
c([
  d({ type: Boolean, reflect: !0 })
], I.prototype, "activated", void 0);
c([
  d({ type: String, reflect: !0 })
], I.prototype, "graphic", void 0);
c([
  d({ type: Boolean })
], I.prototype, "multipleGraphics", void 0);
c([
  d({ type: Boolean })
], I.prototype, "hasMeta", void 0);
c([
  d({ type: Boolean, reflect: !0 }),
  J(function(i) {
    i ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], I.prototype, "noninteractive", void 0);
c([
  d({ type: Boolean, reflect: !0 }),
  J(function(i) {
    const e = this.getAttribute("role"), t = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (t && i ? this.setAttribute("aria-selected", "true") : t && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(i, "property");
  })
], I.prototype, "selected", void 0);
c([
  f()
], I.prototype, "shouldRenderRipple", void 0);
c([
  f()
], I.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Yt = R`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Et = class extends I {
};
Et.styles = [Yt];
Et = c([
  k("mwc-list-item")
], Et);
var on = Object.defineProperty, cn = Object.getOwnPropertyDescriptor, G = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? cn(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && on(e, t, n), n;
};
let $ = class extends nr {
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
    return this.reservedValues && this.reservedValues.some((i) => i === this.value) ? (this.setCustomValidity(X("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? p`<div style="position:relative;">
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
      </div>` : p``;
  }
  renderMulplierList() {
    return p`${this.multipliers.map(
      (i) => p`<mwc-list-item ?selected=${i === this.multiplier}
          >${i === null ? X("textfield.noMultiplier") : i}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? p`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : p``;
  }
  render() {
    return p`
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
G([
  d({ type: Boolean })
], $.prototype, "nullable", 2);
G([
  d({ type: Array })
], $.prototype, "multipliers", 2);
G([
  d({ type: String })
], $.prototype, "multiplier", 1);
G([
  d({ type: String })
], $.prototype, "unit", 2);
G([
  f()
], $.prototype, "null", 1);
G([
  d({ type: String })
], $.prototype, "maybeValue", 1);
G([
  d({ type: String })
], $.prototype, "defaultValue", 2);
G([
  d({ type: Array })
], $.prototype, "reservedValues", 2);
G([
  S("mwc-switch")
], $.prototype, "nullSwitch", 2);
G([
  S("mwc-menu")
], $.prototype, "multiplierMenu", 2);
G([
  S("mwc-icon-button")
], $.prototype, "multiplierButton", 2);
$ = G([
  k("wizard-textfield")
], $);
var dn = Object.defineProperty, ln = Object.getOwnPropertyDescriptor, ye = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? ln(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && dn(e, t, n), n;
};
let de = class extends sr {
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
    return this.nullable ? p`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : p``;
  }
  render() {
    return p`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
ye([
  d({ type: Boolean })
], de.prototype, "nullable", 2);
ye([
  f()
], de.prototype, "null", 1);
ye([
  d({ type: String })
], de.prototype, "maybeValue", 1);
ye([
  d({ type: String })
], de.prototype, "defaultValue", 2);
ye([
  d({ type: Array })
], de.prototype, "reservedValues", 2);
ye([
  S("mwc-switch")
], de.prototype, "nullSwitch", 2);
de = ye([
  k("wizard-select")
], de);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function pn(i, e, t) {
  const r = i.constructor;
  if (!t) {
    const o = `__${e}`;
    if (t = r.getPropertyDescriptor(e, o), !t)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const n = t;
  let s = "";
  if (!n.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const a = {
    configurable: !0,
    enumerable: !0,
    set(o) {
      s === "" && (s = r.getPropertyOptions(e).attribute), this.hasAttribute(s) && this.removeAttribute(s), n.set.call(this, o);
    }
  };
  return n.get && (a.get = function() {
    return n.get.call(this);
  }), a;
}
function Ue(i, e, t) {
  if (e !== void 0)
    return pn(i, e, t);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ei extends Zt {
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
ei.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const lt = /* @__PURE__ */ new WeakMap(), K = He((i) => (e) => {
  const t = lt.get(e);
  if (i === void 0 && e instanceof Ee) {
    if (t !== void 0 || !lt.has(e)) {
      const r = e.committer.name;
      e.committer.element.removeAttribute(r);
    }
  } else i !== t && e.setValue(i);
  lt.set(e, i);
});
class T extends ei {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new Qt(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const t = e.get("indeterminate"), r = e.get("checked"), n = e.get("disabled");
    if (t !== void 0 || r !== void 0 || n !== void 0) {
      const s = this.calculateAnimationStateName(!!r, !!t, !!n), a = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${s}-${a}`;
    }
    super.update(e);
  }
  calculateAnimationStateName(e, t, r) {
    return r ? "disabled" : t ? "indeterminate" : e ? "checked" : "unchecked";
  }
  // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? p`<mwc-ripple
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
    }, r = this.indeterminate ? "mixed" : void 0;
    return p`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Ce(t)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${K(this.name)}"
              aria-checked="${K(r)}"
              aria-label="${K(this.ariaLabel)}"
              aria-labelledby="${K(this.ariaLabelledBy)}"
              aria-describedby="${K(this.ariaDescribedBy)}"
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
c([
  S(".mdc-checkbox")
], T.prototype, "mdcRoot", void 0);
c([
  S("input")
], T.prototype, "formElement", void 0);
c([
  d({ type: Boolean, reflect: !0 })
], T.prototype, "checked", void 0);
c([
  d({ type: Boolean })
], T.prototype, "indeterminate", void 0);
c([
  d({ type: Boolean, reflect: !0 })
], T.prototype, "disabled", void 0);
c([
  d({ type: String, reflect: !0 })
], T.prototype, "name", void 0);
c([
  d({ type: String })
], T.prototype, "value", void 0);
c([
  Ue,
  d({ type: String, attribute: "aria-label" })
], T.prototype, "ariaLabel", void 0);
c([
  Ue,
  d({ type: String, attribute: "aria-labelledby" })
], T.prototype, "ariaLabelledBy", void 0);
c([
  Ue,
  d({ type: String, attribute: "aria-describedby" })
], T.prototype, "ariaDescribedBy", void 0);
c([
  d({ type: Boolean })
], T.prototype, "reducedTouchTarget", void 0);
c([
  f()
], T.prototype, "animationClass", void 0);
c([
  f()
], T.prototype, "shouldRenderRipple", void 0);
c([
  f()
], T.prototype, "focused", void 0);
c([
  f()
], T.prototype, "useStateLayerCustomProperties", void 0);
c([
  Bt("mwc-ripple")
], T.prototype, "ripple", void 0);
c([
  Bi({ passive: !0 })
], T.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const mn = R`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let Ct = class extends T {
};
Ct.styles = [mn];
Ct = c([
  k("mwc-checkbox")
], Ct);
var un = Object.defineProperty, hn = Object.getOwnPropertyDescriptor, V = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? hn(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && un(e, t, n), n;
};
let O = class extends D {
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
    return this.nullable ? p`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : p``;
  }
  render() {
    return p`
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
V([
  d({ type: String })
], O.prototype, "label", 2);
V([
  d({ type: String })
], O.prototype, "helper", 2);
V([
  d({ type: Boolean })
], O.prototype, "nullable", 2);
V([
  d({ type: Boolean })
], O.prototype, "defaultChecked", 2);
V([
  d({ type: String })
], O.prototype, "maybeValue", 1);
V([
  d({ type: Boolean })
], O.prototype, "disabled", 2);
V([
  f()
], O.prototype, "null", 1);
V([
  f()
], O.prototype, "checked", 1);
V([
  f()
], O.prototype, "deactivateCheckbox", 2);
V([
  f()
], O.prototype, "formfieldLabel", 1);
V([
  S("mwc-switch")
], O.prototype, "nullSwitch", 2);
V([
  S("mwc-checkbox")
], O.prototype, "checkbox", 2);
O = V([
  k("wizard-checkbox")
], O);
function fn(i, e) {
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: null, ...e?.detail }
  });
}
const bn = [
  "TransformerWinding",
  "ConductingEquipment"
], gn = [
  "GeneralEquipment",
  "PowerTransformer",
  ...bn
], vn = ["Substation", "VoltageLevel", "Bay"], yn = ["Process", "Line"], _n = ["EqSubFunction", "EqFunction"], Sn = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...gn,
  ...vn,
  ...yn,
  ..._n
], wn = ["ConnectivityNode", ...Sn], xn = ["GOOSESecurity", "SMVSecurity"], kn = ["SubNetwork", ...xn, ...wn], En = ["BDA", "DA"], Cn = ["SampledValueControl", "GSEControl"], An = ["LogControl", "ReportControl"], Dn = [...Cn, ...An], In = ["GSE", "SMV"], Tn = [
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
  ...Dn,
  ...In,
  ...En
], Nn = ["LN0", "LN"], Ln = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Rn = ["Subject", "IssuerName"], Pn = ["MinTime", "MaxTime"], zn = ["LNodeType", "DOType", "DAType", "EnumType"], Fn = [
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
], On = ["DynDataSet", "ConfDataSet"], Mn = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...On
], $n = ["ConfLogControl", "ConfSigRef"], Vn = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], Hn = ["SCL", ...kn, ...Tn, ...zn], Un = [
  ...Hn,
  ...Ln,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Rn,
  ...Pn,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...Nn,
  ...Fn,
  "DynAssociation",
  "SettingGroups",
  ...Mn,
  ...$n,
  ...Vn,
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
];
new Set(Un);
const Bn = 99;
Array(Bn).fill(1).map((i, e) => `${e + 1}`);
var Gn = Object.defineProperty, qn = Object.getOwnPropertyDescriptor, Zi = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? qn(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && Gn(e, t, n), n;
};
function te() {
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
let tt = class extends D {
  get compasSettings() {
    return te().compasSettings;
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
    return this.valid() ? (te().setCompasSetting(
      "sclDataServiceUrl",
      this.getSclDataServiceUrlField().value
    ), te().setCompasSetting(
      "sclValidatorServiceUrl",
      this.getSclValidatorServiceUrlField().value
    ), te().setCompasSetting(
      "cimMappingServiceUrl",
      this.getCimMappingServiceUrlField().value
    ), te().setCompasSetting(
      "sclAutoAlignmentServiceUrl",
      this.getSclAutoAlignmentServiceUrlField().value
    ), te().setCompasSetting(
      "sitipeServiceUrl",
      this.getSitipeServiceUrlField().value
    ), te().setCompasSetting(
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
    this.dispatchEvent(fn());
  }
  render() {
    return p` <mwc-textfield
        dialogInitialFocus
        id="sclDataServiceUrl"
        label="${v("compas.settings.sclDataServiceUrl")}"
        value="${this.compasSettings.sclDataServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        dialogInitialFocus
        id="sclValidatorServiceUrl"
        label="${v("compas.settings.sclValidatorServiceUrl")}"
        value="${this.compasSettings.sclValidatorServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="cimMappingServiceUrl"
        label="${v("compas.settings.cimMappingServiceUrl")}"
        value="${this.compasSettings.cimMappingServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="sclAutoAlignmentServiceUrl"
        label="${v("compas.settings.sclAutoAlignmentServiceUrl")}"
        value="${this.compasSettings.sclAutoAlignmentServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="sitipeServiceUrl"
        label="${v("compas.settings.sitipeServiceUrl")}"
        value="${this.compasSettings.sitipeServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-formfield label="${v("compas.settings.useWebsockets")}">
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
        ${v("reset")}
      </mwc-button>`;
  }
};
tt.styles = R`
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
Zi([
  d()
], tt.prototype, "compasSettings", 1);
tt = Zi([
  k("compas-settings")
], tt);
function ti(i, e) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { ...i, ...e?.detail }
  });
}
const Ji = "NotFoundError", Qi = "ApplicationError", ii = "ServerError", gi = "https://www.lfenergy.org/compas/commons/v1";
async function Q(i) {
  if (!i.ok) {
    let e = Qi;
    return i.status === 404 ? e = Ji : i.status >= 500 && (e = ii), Promise.reject({
      type: e,
      status: i.status,
      message: await jn(i)
    });
  }
  return Promise.resolve(i.text());
}
async function jn(i) {
  const e = await i.text(), t = await ie(e);
  return Yi(t) ?? i.statusText;
}
function Yi(i) {
  const e = Array.from(
    i.querySelectorAll("ErrorResponse > ErrorMessage") ?? []
  );
  if (e.length > 0) {
    let t = "";
    return e.forEach((r, n) => {
      const s = r.getElementsByTagNameNS(gi, "Code").item(0).textContent, a = r.getElementsByTagNameNS(gi, "Message").item(0).textContent;
      n > 0 && (t += ", "), t += a, s && (t += " (" + s + ")");
    }), t;
  }
}
function ie(i) {
  return Promise.resolve(
    new DOMParser().parseFromString(i, "application/xml")
  );
}
function ae(i) {
  const e = i.querySelectorAll("SclData").item(0).textContent ?? "", t = new DOMParser().parseFromString(
    e,
    "application/xml"
  );
  return Promise.resolve(t);
}
function Y(i) {
  return Promise.reject({ type: ii, message: i.message });
}
function At(i, e) {
  let t = e.message;
  e.status && (t += " (" + e.status + ")"), i && i.dispatchEvent(
    ti({
      kind: "error",
      title: X("compas.error.server"),
      message: X("compas.error.serverDetails", {
        type: e.type,
        message: t
      })
    })
  );
}
function Ke(i) {
  return i.startsWith("http://") || i.startsWith("https://") ? i.replace("http://", "ws://").replace("https://", "wss://") : (document.location.protocol == "http:" ? "ws://" : "wss://") + document.location.hostname + ":" + Wn() + i;
}
function Wn() {
  return document.location.port === "" ? document.location.protocol == "http:" ? "80" : "443" : document.location.port;
}
function Xe(i, e, t, r) {
  let n;
  function s(o) {
    return new Promise((l) => setTimeout(l, o));
  }
  async function a() {
    for (; n !== void 0; )
      await s(250);
  }
  return new Promise((o, l) => {
    n = new WebSocket(t), n.onopen = () => {
      n?.send(r);
    }, n.onmessage = (m) => {
      ie(m.data).then((h) => {
        if (h.documentElement.localName === "ErrorResponse") {
          const u = Yi(h);
          l({ type: Qi, message: u });
        } else
          o(h);
        n?.close();
      }).catch((h) => {
        l(h), n?.close();
      });
    }, n.onerror = () => {
      l({
        type: ii,
        message: `Websocket Error in service "${e}"`
      }), n?.close();
    }, n.onclose = () => {
      n = void 0;
    }, i.dispatchEvent(et(a()));
  });
}
const L = "https://www.lfenergy.org/compas/SclDataService/v1";
var Le = /* @__PURE__ */ ((i) => (i.MAJOR = "MAJOR", i.MINOR = "MINOR", i.PATCH = "PATCH", i))(Le || {});
function be() {
  function i() {
    return te().compasSettings.sclDataServiceUrl;
  }
  function e() {
    return te().useWebsockets();
  }
  function t() {
    const r = i() + "/common/v1/type/list";
    return fetch(r).catch(Y).then(Q).then(ie);
  }
  return {
    listOrderedSclTypes() {
      return t().then((r) => Array.from(r.querySelectorAll("*|Type") ?? []).sort(
        (n, s) => {
          const a = n.getElementsByTagNameNS(L, "Description").item(0).textContent ?? "", o = s.getElementsByTagNameNS(L, "Description").item(0).textContent ?? "";
          return a.localeCompare(o);
        }
      ));
    },
    listScls(r) {
      const n = i() + "/scl/v1/" + r + "/list";
      return fetch(n).catch(Y).then(Q).then(ie);
    },
    listSclVersions(r, n) {
      const s = i() + "/scl/v1/" + r + "/" + n + "/versions";
      return fetch(s).catch(Y).then(Q).then(ie);
    },
    getSclDocument(r, n, s) {
      if (e()) {
        const o = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:GetWsRequest xmlns:sds="${L}">
           <sds:Id>${s}</sds:Id>
         </sds:GetWsRequest>`, l = i() + "/scl-ws/v1/" + n + "/get";
        return Xe(
          r,
          "CompasSclDataService",
          Ke(l),
          o
        ).then(ae);
      }
      const a = i() + "/scl/v1/" + n + "/" + s;
      return fetch(a).catch(Y).then(Q).then(ie).then(ae);
    },
    getSclDocumentVersion(r, n, s, a) {
      if (e()) {
        const l = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:GetVersionWsRequest xmlns:sds="${L}">
           <sds:Id>${s}</sds:Id>
           <sds:Version>${a}</sds:Version>
         </sds:GetVersionWsRequest>`, m = i() + "/scl-ws/v1/" + n + "/get-version";
        return Xe(
          r,
          "CompasSclDataService",
          Ke(m),
          l
        ).then(ae);
      }
      const o = i() + "/scl/v1/" + n + "/" + s + "/" + a;
      return fetch(o).catch(Y).then(Q).then(ie).then(ae);
    },
    deleteSclDocumentVersion(r, n, s) {
      const a = i() + "/scl/v1/" + r + "/" + n + "/" + s;
      return fetch(a, { method: "DELETE" }).catch(Y).then(Q);
    },
    deleteSclDocument(r, n) {
      const s = i() + "/scl/v1/" + r + "/" + n;
      return fetch(s, { method: "DELETE" }).catch(Y).then(Q);
    },
    addSclDocument(r, n, s) {
      if (e()) {
        const l = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:CreateWsRequest xmlns:sds="${L}">
           <sds:Name>${s.sclName}</sds:Name>
           <sds:Comment>${s.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${Te(
          new XMLSerializer().serializeToString(s.doc.documentElement)
        )}]]></sds:SclData>
         </sds:CreateWsRequest>`, m = i() + "/scl-ws/v1/" + n + "/create";
        return Xe(
          r,
          "CompasSclDataService",
          Ke(m),
          l
        ).then(ae);
      }
      const a = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:CreateRequest xmlns:sds="${L}">
            <sds:Name>${s.sclName}</sds:Name>
            <sds:Comment>${s.comment ?? ""}</sds:Comment>
            <sds:SclData><![CDATA[${Te(
        new XMLSerializer().serializeToString(s.doc.documentElement)
      )}]]></sds:SclData>
         </sds:CreateRequest>`, o = i() + "/scl/v1/" + n;
      return fetch(o, {
        method: "POST",
        headers: {
          "Content-Type": "application/xml"
        },
        body: a
      }).catch(Y).then(Q).then(ie).then(ae);
    },
    updateSclDocument(r, n, s, a) {
      if (e()) {
        const m = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:UpdateWsRequest xmlns:sds="${L}">
           <sds:Id>${s}</sds:Id>
           <sds:ChangeSet>${a.changeSet}</sds:ChangeSet>
           <sds:Comment>${a.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${Te(
          new XMLSerializer().serializeToString(a.doc.documentElement)
        )}]]></sds:SclData>
         </sds:UpdateWsRequest>`, h = i() + "/scl-ws/v1/" + n + "/update";
        return Xe(
          r,
          "CompasSclDataService",
          Ke(h),
          m
        ).then(ae);
      }
      const o = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:UpdateRequest xmlns:sds="${L}">
           <sds:ChangeSet>${a.changeSet}</sds:ChangeSet>
           <sds:Comment>${a.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${Te(
        new XMLSerializer().serializeToString(a.doc.documentElement)
      )}]]></sds:SclData>
         </sds:UpdateRequest>`, l = i() + "/scl/v1/" + n + "/" + s;
      return fetch(l, {
        method: "PUT",
        headers: {
          "Content-Type": "application/xml"
        },
        body: o
      }).catch(Y).then(Q).then(ie).then(ae);
    }
  };
}
var Kn = Object.defineProperty, Xn = Object.getOwnPropertyDescriptor, er = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Xn(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && Kn(e, t, n), n;
};
let it = class extends D {
  render() {
    return p` ${this.renderHeader()} ${this.renderSeparator()}`;
  }
  renderHeader() {
    return this.header ? p`<h4 class="header">${this.header}</h4>` : p``;
  }
  renderSeparator() {
    return p`<div role="separator"></div>`;
  }
};
it.styles = R`
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
er([
  d({
    type: String
  })
], it.prototype, "header", 2);
it = er([
  k("wizard-divider")
], it);
var Zn = Object.defineProperty, Jn = Object.getOwnPropertyDescriptor, tr = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Jn(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && Zn(e, t, n), n;
};
function Qn(i) {
  return new CustomEvent("typeSelected", {
    bubbles: !0,
    composed: !0,
    detail: { type: i }
  });
}
let Dt = class extends D {
  firstUpdated() {
    this.fetchData();
  }
  fetchData() {
    be().listOrderedSclTypes().then((i) => this.sclTypes = i);
  }
  render() {
    return this.sclTypes ? this.sclTypes.length <= 0 ? p` <mwc-list>
        <mwc-list-item><i>${v("compas.noSclTypes")}</i></mwc-list-item>
      </mwc-list>` : p` <mwc-list>
      ${this.sclTypes.map((i) => {
      const e = i.getElementsByTagNameNS(L, "Code").item(0).textContent ?? "", t = i.getElementsByTagNameNS(L, "Description").item(0).textContent ?? "";
      return p`<mwc-list-item
          tabindex="0"
          @click=${() => this.dispatchEvent(Qn(e))}
        >
          <span>${t} (${e})</span>
        </mwc-list-item>`;
    })}
    </mwc-list>` : p` <compas-loading></compas-loading> `;
  }
};
tr([
  d()
], Dt.prototype, "sclTypes", 2);
Dt = tr([
  k("compas-scltype-list")
], Dt);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Be extends I {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, t = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : p``, n = this.hasMeta && this.left ? this.renderMeta() : p``, s = this.renderRipple();
    return p`
      ${s}
      ${r}
      ${this.left ? "" : t}
      <span class=${Ce(e)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left ? t : ""}
      ${n}`;
  }
  async onChange(e) {
    const t = e.target;
    this.selected === t.checked || (this._skipPropRequest = !0, this.selected = t.checked, await this.updateComplete, this._skipPropRequest = !1);
  }
}
c([
  S("slot")
], Be.prototype, "slotElement", void 0);
c([
  S("mwc-checkbox")
], Be.prototype, "checkboxElement", void 0);
c([
  d({ type: Boolean })
], Be.prototype, "left", void 0);
c([
  d({ type: String, reflect: !0 })
], Be.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ir = R`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let xe = class extends Be {
};
xe.styles = [Yt, ir];
xe = c([
  k("mwc-check-list-item")
], xe);
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
var b = {
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
}, P = /* @__PURE__ */ new Set();
P.add(b.BACKSPACE);
P.add(b.ENTER);
P.add(b.SPACEBAR);
P.add(b.PAGE_UP);
P.add(b.PAGE_DOWN);
P.add(b.END);
P.add(b.HOME);
P.add(b.ARROW_LEFT);
P.add(b.ARROW_UP);
P.add(b.ARROW_RIGHT);
P.add(b.ARROW_DOWN);
P.add(b.DELETE);
P.add(b.ESCAPE);
P.add(b.TAB);
var M = {
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
}, z = /* @__PURE__ */ new Map();
z.set(M.BACKSPACE, b.BACKSPACE);
z.set(M.ENTER, b.ENTER);
z.set(M.SPACEBAR, b.SPACEBAR);
z.set(M.PAGE_UP, b.PAGE_UP);
z.set(M.PAGE_DOWN, b.PAGE_DOWN);
z.set(M.END, b.END);
z.set(M.HOME, b.HOME);
z.set(M.ARROW_LEFT, b.ARROW_LEFT);
z.set(M.ARROW_UP, b.ARROW_UP);
z.set(M.ARROW_RIGHT, b.ARROW_RIGHT);
z.set(M.ARROW_DOWN, b.ARROW_DOWN);
z.set(M.DELETE, b.DELETE);
z.set(M.ESCAPE, b.ESCAPE);
z.set(M.TAB, b.TAB);
var me = /* @__PURE__ */ new Set();
me.add(b.PAGE_UP);
me.add(b.PAGE_DOWN);
me.add(b.END);
me.add(b.HOME);
me.add(b.ARROW_LEFT);
me.add(b.ARROW_UP);
me.add(b.ARROW_RIGHT);
me.add(b.ARROW_DOWN);
function oe(i) {
  var e = i.key;
  if (P.has(e))
    return e;
  var t = z.get(i.keyCode);
  return t || b.UNKNOWN;
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
var ce, ee, w = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
ce = {}, ce["" + w.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", ce["" + w.LIST_ITEM_CLASS] = "mdc-list-item", ce["" + w.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", ce["" + w.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", ce["" + w.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", ce["" + w.ROOT] = "mdc-list";
var Se = (ee = {}, ee["" + w.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", ee["" + w.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", ee["" + w.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", ee["" + w.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", ee["" + w.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", ee["" + w.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", ee["" + w.ROOT] = "mdc-deprecated-list", ee), Ze = {
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
    .` + w.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + w.LIST_ITEM_CLASS + ` a,
    .` + Se[w.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Se[w.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + w.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + w.LIST_ITEM_CLASS + ` a,
    .` + w.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + w.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Se[w.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Se[w.LIST_ITEM_CLASS] + ` a,
    .` + Se[w.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Se[w.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, F = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const It = (i, e) => i - e, Yn = (i, e) => {
  const t = Array.from(i), r = Array.from(e), n = { added: [], removed: [] }, s = t.sort(It), a = r.sort(It);
  let o = 0, l = 0;
  for (; o < s.length || l < a.length; ) {
    const m = s[o], h = a[l];
    if (m === h) {
      o++, l++;
      continue;
    }
    if (m !== void 0 && (h === void 0 || m < h)) {
      n.removed.push(m), o++;
      continue;
    }
    if (h !== void 0 && (m === void 0 || h < m)) {
      n.added.push(h), l++;
      continue;
    }
  }
  return n;
}, es = ["input", "button", "textarea", "select"];
function Re(i) {
  return i instanceof Set;
}
const pt = (i) => {
  const e = i === F.UNSET_INDEX ? /* @__PURE__ */ new Set() : i;
  return Re(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class ri extends Jt {
  constructor(e) {
    super(Object.assign(Object.assign({}, ri.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = F.UNSET_INDEX, this.focusedItemIndex_ = F.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return Ze;
  }
  static get numbers() {
    return F;
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
      if (!Re(t)) {
        const r = t === F.UNSET_INDEX;
        this.selectedIndex_ = r ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([t]);
      }
    } else if (Re(t))
      if (t.size) {
        const r = Array.from(t).sort(It);
        this.selectedIndex_ = r[0];
      } else
        this.selectedIndex_ = F.UNSET_INDEX;
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(pt(e)) : this.setSingleSelectionAtIndex_(e));
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
  handleKeydown(e, t, r) {
    const n = oe(e) === "ArrowLeft", s = oe(e) === "ArrowUp", a = oe(e) === "ArrowRight", o = oe(e) === "ArrowDown", l = oe(e) === "Home", m = oe(e) === "End", h = oe(e) === "Enter", u = oe(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      s || m ? (e.preventDefault(), this.focusLastElement()) : (o || l) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let x = this.adapter.getFocusedElementIndex();
    if (x === -1 && (x = r, x < 0))
      return;
    let g;
    if (this.isVertical_ && o || !this.isVertical_ && a)
      this.preventDefaultEvent(e), g = this.focusNextElement(x);
    else if (this.isVertical_ && s || !this.isVertical_ && n)
      this.preventDefaultEvent(e), g = this.focusPrevElement(x);
    else if (l)
      this.preventDefaultEvent(e), g = this.focusFirstElement();
    else if (m)
      this.preventDefaultEvent(e), g = this.focusLastElement();
    else if ((h || u) && t) {
      const _ = e.target;
      if (_ && _.tagName === "A" && h)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(x, !0);
    }
    this.focusedItemIndex_ = x, g !== void 0 && (this.setTabindexAtIndex_(g), this.focusedItemIndex_ = g);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, t, r) {
    e !== F.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, t, r), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
  }
  /**
   * Focuses the next element on the list.
   */
  focusNextElement(e) {
    const t = this.adapter.getListItemCount();
    let r = e + 1;
    if (r >= t)
      if (this.wrapFocus_)
        r = 0;
      else
        return e;
    return this.adapter.focusItemAtIndex(r), r;
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
    const r = `${e.target.tagName}`.toLowerCase();
    es.indexOf(r) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, t = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== F.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), t && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, t = !0) {
    const r = pt(this.selectedIndex_), n = Yn(r, e);
    if (!(!n.removed.length && !n.added.length)) {
      for (const s of n.removed)
        t && this.adapter.setSelectedStateForElementIndex(s, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(s, !1);
      for (const s of n.added)
        t && this.adapter.setSelectedStateForElementIndex(s, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(s, !0);
      this.selectedIndex_ = e, this.adapter.notifySelected(e, n);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(e) {
    this.selectedIndex_ === F.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, Ze.ARIA_CURRENT));
    const t = this.ariaCurrentAttrValue_ !== null, r = t ? Ze.ARIA_CURRENT : Ze.ARIA_SELECTED;
    this.selectedIndex_ !== F.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, r, "false");
    const n = t ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, r, n);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === F.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== F.UNSET_INDEX ? e = this.selectedIndex_ : Re(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
  }
  isIndexValid_(e) {
    if (e instanceof Set) {
      if (!this.isMulti_)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      if (e.size === 0)
        return !0;
      {
        let t = !1;
        for (const r of e)
          if (t = this.isIndexInRange_(r), t)
            break;
        return t;
      }
    } else if (typeof e == "number") {
      if (this.isMulti_)
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + e);
      return e === F.UNSET_INDEX || this.isIndexInRange_(e);
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
  setSelectedIndexOnAction_(e, t, r) {
    if (this.adapter.getDisabledStateForElementIndex(e))
      return;
    let n = e;
    this.isMulti_ && (n = /* @__PURE__ */ new Set([e])), this.isIndexValid_(n) && (this.isMulti_ ? this.toggleMultiAtIndex(e, r, t) : t || r ? this.setSingleSelectionAtIndex_(e, t) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(F.UNSET_INDEX), t && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, t, r = !0) {
    let n = !1;
    t === void 0 ? n = !this.adapter.getSelectedStateForElementIndex(e) : n = t;
    const s = pt(this.selectedIndex_);
    n ? s.add(e) : s.delete(e), this.setMultiSelectionAtIndex_(s, r);
  }
}
function ts(i, e = 50) {
  let t;
  return function(r = !0) {
    clearTimeout(t), t = setTimeout(() => {
      i(r);
    }, e);
  };
}
const Je = (i) => i.hasAttribute("mwc-list-item");
function is() {
  const i = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), i();
}
class H extends Zt {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = ri, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = ts(this.layout.bind(this));
    this.debouncedLayout = (t = !0) => {
      is.call(this), e(t);
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
    const t = (e = this.assignedElements) !== null && e !== void 0 ? e : [], r = [];
    for (const a of t)
      Je(a) && (r.push(a), a._managingList = this), a.hasAttribute("divider") && !a.hasAttribute("role") && a.setAttribute("role", "separator");
    this.items_ = r;
    const n = /* @__PURE__ */ new Set();
    if (this.items_.forEach((a, o) => {
      this.itemRoles ? a.setAttribute("role", this.itemRoles) : a.removeAttribute("role"), a.selected && n.add(o);
    }), this.multi)
      this.select(n);
    else {
      const a = n.size ? n.entries().next().value[1] : -1;
      this.select(a);
    }
    const s = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(s);
  }
  get selected() {
    const e = this.index;
    if (!Re(e))
      return e === -1 ? null : this.items[e];
    const t = [];
    for (const r of e)
      t.push(this.items[r]);
    return t;
  }
  get index() {
    return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
  }
  render() {
    const e = this.innerRole === null ? void 0 : this.innerRole, t = this.innerAriaLabel === null ? void 0 : this.innerAriaLabel, r = this.rootTabbable ? "0" : "-1";
    return p`
      <!-- @ts-ignore -->
      <ul
          tabindex=${r}
          role="${K(e)}"
          aria-label="${K(t)}"
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
    return this.emptyMessage !== void 0 && t.length === 0 ? p`
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
      const t = this.getIndexOfTarget(e), r = e.target, n = Je(r);
      this.mdcFoundation.handleKeydown(e, n, t);
    }
  }
  onRequestSelected(e) {
    if (this.mdcFoundation) {
      let t = this.getIndexOfTarget(e);
      if (t === -1 && (this.layout(), t = this.getIndexOfTarget(e), t === -1) || this.items[t].disabled)
        return;
      const n = e.detail.selected, s = e.detail.source;
      this.mdcFoundation.handleSingleSelection(t, s === "interaction", n), e.stopPropagation();
    }
  }
  getIndexOfTarget(e) {
    const t = this.items, r = e.composedPath();
    for (const n of r) {
      let s = -1;
      if (Xr(n) && Je(n) && (s = t.indexOf(n)), s !== -1)
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
        const n = this.items[e];
        return n ? n.getAttribute(t) : "";
      },
      setAttributeForElementIndex: (e, t, r) => {
        if (!this.mdcRoot)
          return;
        const n = this.items[e];
        n && n.setAttribute(t, r);
      },
      focusItemAtIndex: (e) => {
        const t = this.items[e];
        t && t.focus();
      },
      setTabIndexForElementIndex: (e, t) => {
        const r = this.items[e];
        r && (r.tabindex = t);
      },
      notifyAction: (e) => {
        const t = { bubbles: !0, composed: !0 };
        t.detail = { index: e };
        const r = new CustomEvent("action", t);
        this.dispatchEvent(r);
      },
      notifySelected: (e, t) => {
        const r = { bubbles: !0, composed: !0 };
        r.detail = { index: e, diff: t };
        const n = new CustomEvent("selected", r);
        this.dispatchEvent(n);
      },
      isFocusInsideList: () => Qr(this),
      isRootFocused: () => {
        const e = this.mdcRoot;
        return e.getRootNode().activeElement === e;
      },
      setDisabledStateForElementIndex: (e, t) => {
        const r = this.items[e];
        r && (r.disabled = t);
      },
      getDisabledStateForElementIndex: (e) => {
        const t = this.items[e];
        return t ? t.disabled : !1;
      },
      setSelectedStateForElementIndex: (e, t) => {
        const r = this.items[e];
        r && (r.selected = t);
      },
      getSelectedStateForElementIndex: (e) => {
        const t = this.items[e];
        return t ? t.selected : !1;
      },
      setActivatedStateForElementIndex: (e, t) => {
        const r = this.items[e];
        r && (r.activated = t);
      }
    }, this.mdcAdapter;
  }
  selectUi(e, t = !1) {
    const r = this.items[e];
    r && (r.selected = !0, r.activated = t);
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
    for (const r of this.items)
      r.tabindex = -1;
    t && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = t) : t.tabindex = 0), this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot || !this.items.length)
      return -1;
    const e = Xi();
    if (!e.length)
      return -1;
    for (let t = e.length - 1; t >= 0; t--) {
      const r = e[t];
      if (Je(r))
        return this.items.indexOf(r);
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
c([
  d({ type: String })
], H.prototype, "emptyMessage", void 0);
c([
  S(".mdc-deprecated-list")
], H.prototype, "mdcRoot", void 0);
c([
  Gi("", !0, "*")
], H.prototype, "assignedElements", void 0);
c([
  Gi("", !0, '[tabindex="0"]')
], H.prototype, "tabbableElements", void 0);
c([
  d({ type: Boolean }),
  J(function(i) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(i);
  })
], H.prototype, "activatable", void 0);
c([
  d({ type: Boolean }),
  J(function(i, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(i), e !== void 0 && this.layout();
  })
], H.prototype, "multi", void 0);
c([
  d({ type: Boolean }),
  J(function(i) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(i);
  })
], H.prototype, "wrapFocus", void 0);
c([
  d({ type: String }),
  J(function(i, e) {
    e !== void 0 && this.updateItems();
  })
], H.prototype, "itemRoles", void 0);
c([
  d({ type: String })
], H.prototype, "innerRole", void 0);
c([
  d({ type: String })
], H.prototype, "innerAriaLabel", void 0);
c([
  d({ type: Boolean })
], H.prototype, "rootTabbable", void 0);
c([
  d({ type: Boolean, reflect: !0 }),
  J(function(i) {
    var e, t;
    if (i) {
      const r = (t = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && t !== void 0 ? t : null;
      this.previousTabindex = r, r && r.setAttribute("tabindex", "-1");
    } else !i && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], H.prototype, "noninteractive", void 0);
var rs = Object.defineProperty, ns = Object.getOwnPropertyDescriptor, _e = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? ns(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && rs(e, t, n), n;
};
function Tt(i) {
  return !i.closest("filtered-list") || !i.parentElement || i.parentElement instanceof B ? i : Tt(i.parentElement);
}
function ss(i, e) {
  const t = i.innerText + `
`, r = Array.from(i.children).map((o) => o.innerText).join(`
`), n = i.value, s = (t + r + n).toUpperCase(), a = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  a.length === 1 && a[0] === "" || a.every((o) => new RegExp(
    `*${o}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(s)) ? Tt(i).classList.remove("hidden") : Tt(i).classList.add("hidden");
}
let B = class extends H {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((i) => i instanceof xe);
  }
  get isAllSelected() {
    return this.items.filter((i) => !i.disabled).filter((i) => i instanceof xe).every((i) => i.selected);
  }
  get isSomeSelected() {
    return this.items.filter((i) => !i.disabled).filter((i) => i instanceof xe).some((i) => i.selected);
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
      (i) => ss(i, this.searchField.value)
    );
  }
  onListItemConnected(i) {
    super.onListItemConnected(i), this.requestUpdate();
  }
  update(i) {
    super.update(i), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? p`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : p``;
  }
  render() {
    return p`<div id="tfcontainer">
        <abbr title="${this.searchFieldLabel ?? X("filter")}"
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
B.styles = R`
    ${Kt(ar.styles)}

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
_e([
  d({ type: String })
], B.prototype, "searchFieldLabel", 2);
_e([
  d({ type: Boolean })
], B.prototype, "disableCheckAll", 2);
_e([
  f()
], B.prototype, "existCheckListItem", 1);
_e([
  f()
], B.prototype, "isAllSelected", 1);
_e([
  f()
], B.prototype, "isSomeSelected", 1);
_e([
  S("mwc-textfield")
], B.prototype, "searchField", 2);
B = _e([
  k("filtered-list")
], B);
var as = Object.defineProperty, os = Object.getOwnPropertyDescriptor, Ge = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? os(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && as(e, t, n), n;
};
let ge = class extends B {
  constructor() {
    super(...arguments), this.disabled = !1;
  }
  toggleList() {
    this.filterDialog.show();
  }
  onClosing() {
    const i = [];
    this.selected && (this.selected instanceof Array ? this.selected.forEach((e) => i.push(e.value)) : i.push(this.selected.value), this.dispatchEvent(cs(i)));
  }
  render() {
    return p`
      <mwc-icon-button
        icon="${this.icon}"
        @click="${this.toggleList}"
        ?disabled="${this.disabled}"
      >
        <slot name="icon"></slot>
      </mwc-icon-button>
      <mwc-dialog
        id="filterDialog"
        heading="${this.header ? this.header : X("filter")}"
        scrimClickAction=""
        @closing="${() => this.onClosing()}"
      >
        ${super.render()}
        <mwc-button slot="primaryAction" dialogAction="close">
          ${X("close")}
        </mwc-button>
      </mwc-dialog>
    `;
  }
};
ge.styles = R`
    ${Kt(B.styles)}

    mwc-icon-button {
      color: var(--mdc-theme-on-surface);
    }

    mwc-dialog {
      --mdc-dialog-max-height: calc(100vh - 150px);
    }
  `;
Ge([
  d()
], ge.prototype, "header", 2);
Ge([
  d()
], ge.prototype, "icon", 2);
Ge([
  d({ type: Boolean })
], ge.prototype, "disabled", 2);
Ge([
  S("#filterDialog")
], ge.prototype, "filterDialog", 2);
ge = Ge([
  k("oscd-filter-button")
], ge);
function cs(i, e) {
  return new CustomEvent("selected-items-changed", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { selectedItems: i, ...e?.detail }
  });
}
var ds = Object.defineProperty, ls = Object.getOwnPropertyDescriptor, Ae = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? ls(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && ds(e, t, n), n;
};
function ps(i) {
  return new CustomEvent("scl-selected", {
    bubbles: !0,
    composed: !0,
    detail: { docId: i }
  });
}
let le = class extends D {
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
    this.type && be().listScls(this.type).then((i) => {
      this.items = Array.from(i.querySelectorAll("Item") ?? []), this.labels = Array.from(
        new Set(
          Array.from(i.querySelectorAll("Label") ?? []).map((e) => e.textContent).filter((e) => !!e).sort((e, t) => e.localeCompare(t))
        )
      ), this.selectedLabels = this.labels;
    });
  }
  render() {
    if (!this.items)
      return p` <compas-loading></compas-loading> `;
    if (this.items?.length <= 0)
      return p` <mwc-list>
        <mwc-list-item><i>${v("compas.noScls")}</i></mwc-list-item>
      </mwc-list>`;
    const i = this.filteredItems;
    return p`
      <div class="filters">
        <span>${v("compas.sclFilter")}</span>
        <oscd-filter-button
          id="labelsFilter"
          multi="true"
          ?disabled="${this.labels.length <= 0}"
          .header=${v("compas.label.selectLabels")}
          @selected-items-changed="${(e) => {
      this.selectedLabels = e.detail.selectedItems, this.requestUpdate("items"), this.requestUpdate("filteredItems"), this.requestUpdate("selectedLabels");
    }}"
        >
          <span slot="icon">
            <mwc-icon>
              ${this.labels.length != this.selectedLabels.length ? "label" : "label_off"}
            </mwc-icon>
          </span>
          ${this.labels.map((e) => p` <mwc-check-list-item
              value="${e}"
              ?selected="${this.selectedLabels.includes(e)}"
            >
              ${e}
            </mwc-check-list-item>`)}
        </oscd-filter-button>
      </div>
      ${i && i.length > 0 ? p` <filtered-list>
            ${i.map((e) => {
      const t = e.getElementsByTagNameNS(L, "Id").item(0).textContent ?? "";
      let r = e.getElementsByTagNameNS(L, "Name").item(0).textContent ?? "";
      r === "" && (r = t);
      const n = e.getElementsByTagNameNS(L, "Version").item(0).textContent ?? "";
      return p` <mwc-list-item
                tabindex="0"
                @click=${() => this.dispatchEvent(ps(t))}
              >
                ${r} (${n})
              </mwc-list-item>`;
    })}
          </filtered-list>` : p` <mwc-list>
            <mwc-list-item>
              <i>${v("compas.noFilteredScls")}</i>
            </mwc-list-item>
          </mwc-list>`}
    `;
  }
};
le.styles = R`
    .filters {
      padding-left: var(--mdc-list-side-padding, 16px);
      display: flex;
    }

    .filters > span {
      line-height: 48px;
    }
  `;
Ae([
  d()
], le.prototype, "type", 2);
Ae([
  f()
], le.prototype, "items", 2);
Ae([
  f()
], le.prototype, "labels", 2);
Ae([
  f()
], le.prototype, "selectedLabels", 2);
Ae([
  f()
], le.prototype, "filteredItems", 1);
le = Ae([
  k("compas-scl-list")
], le);
function ms(i, e, t) {
  return new CustomEvent("open-doc", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { doc: i, docName: e, ...t?.detail }
  });
}
const us = "http://www.iec.ch/61850/2003/SCL", Oe = "https://www.lfenergy.org/compas/extension/v1", Nt = "compas", ke = "compas_scl", vi = 20;
function Me(i, e) {
  return i.querySelector(`:scope > Private[type="${e}"]`);
}
function hs(i, e) {
  const t = i.ownerDocument.createElementNS(
    us,
    "Private"
  );
  return t.setAttribute("type", e), t;
}
function Lt(i) {
  return i?.querySelector(":scope > SclName") ?? null;
}
function fs(i, e) {
  if (i && e) {
    const t = Lt(i), r = Lt(e);
    r && t ? r.textContent = t.textContent : r && (r.textContent = "");
  }
}
function Rt(i) {
  return i?.querySelector(":scope > SclFileType") ?? null;
}
function bs(i, e) {
  if (i && e) {
    const t = Rt(i), r = Rt(e);
    r && t ? r.textContent = t.textContent : r && (r.textContent = "");
  }
}
function Pt(i) {
  return Array.from(i.querySelectorAll(":scope > Labels")).find(
    (e) => e.namespaceURI === Oe
  ) ?? null;
}
function gs(i) {
  return _s(
    i,
    Oe,
    Nt
  ), i.ownerDocument.createElementNS(
    Oe,
    Nt + ":Labels"
  );
}
function vs(i, e) {
  const t = i.ownerDocument.createElementNS(
    Oe,
    Nt + ":Label"
  );
  return t.textContent = e, i.append(t), t;
}
function ys(i, e) {
  if (i && e) {
    const t = Pt(i), r = Pt(e);
    r && e.removeChild(r), t && e.appendChild(
      e.ownerDocument.adoptNode(t.cloneNode(!0))
    );
  }
}
function _s(i, e, t) {
  const r = i.ownerDocument.firstElementChild;
  r.hasAttribute("xmlns:" + t) || r.setAttributeNS(
    "http://www.w3.org/2000/xmlns/",
    "xmlns:" + t,
    e
  );
}
const zt = 3;
function Ft(i) {
  if (i.lastIndexOf(".") == i.length - (zt + 1))
    return i.substring(i.lastIndexOf(".") + 1).toUpperCase();
  throw new Error(X("compas.error.type"));
}
function yi(i) {
  let e = i;
  return e.length > zt && e.lastIndexOf(".") == e.length - (zt + 1) && (e = e.substring(0, e.lastIndexOf("."))), e;
}
function rr(i) {
  const e = i.querySelector(":scope > Header"), t = Me(i, ke), r = e?.getAttribute("version") ?? "", n = Lt(t)?.textContent ?? "", s = Rt(t)?.textContent ?? "SCD";
  let a = n;
  return a === "" && (a = e?.getAttribute("id") ?? ""), a += "-" + r + "." + s?.toLowerCase(), a;
}
function Ss(i, e, t) {
  const n = e.querySelector(":root > Header")?.getAttribute("id") ?? "";
  i.dispatchEvent(ti({ kind: "reset" })), i.dispatchEvent(
    ms(
      e,
      rr(e.documentElement),
      { detail: { docId: n } }
    )
  );
}
var ws = Object.defineProperty, xs = Object.getOwnPropertyDescriptor, nt = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? xs(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && ws(e, t, n), n;
};
function _i(i, e, t, r) {
  return new CustomEvent("doc-retrieved", {
    bubbles: !0,
    composed: !0,
    detail: { localFile: i, doc: e, docName: t, docId: r }
  });
}
let $e = class extends D {
  constructor() {
    super(...arguments), this.allowLocalFile = !0;
  }
  async getSclDocument(i) {
    const e = await be().getSclDocument(this, this.selectedType ?? "", i ?? "").catch((t) => At(this, t));
    if (e instanceof Document) {
      const t = rr(e.documentElement);
      this.dispatchEvent(_i(!1, e, t, i));
    }
  }
  async getSclFile(i) {
    const e = i.target?.files?.item(0) ?? !1;
    if (!e) return;
    const t = await e.text(), r = e.name, n = new DOMParser().parseFromString(t, "application/xml");
    this.dispatchEvent(_i(!0, n, r));
  }
  renderFileSelect() {
    return p`
      <input
        id="scl-file"
        accept=".sed,.scd,.ssd,.isd,.iid,.cid,.icd"
        type="file"
        hidden
        required
        @change=${(i) => this.dispatchEvent(et(this.getSclFile(i)))}
      />

      <mwc-button
        label="${v("compas.open.selectFileButton")}"
        @click=${() => {
      this.sclFileUI.value = "", this.sclFileUI.click();
    }}
      >
      </mwc-button>
    `;
  }
  renderSclTypeList() {
    return p`
      <p>${v("compas.open.listSclTypes")}</p>
      <compas-scltype-list
        @typeSelected=${(i) => this.selectedType = i.detail.type}
      />
    `;
  }
  renderSclList() {
    return p`
      <p>${v("compas.open.listScls", {
      type: this.selectedType ?? ""
    })}</p>
      <compas-scl-list .type=${this.selectedType}
                       @scl-selected=${(i) => this.dispatchEvent(
      et(
        this.getSclDocument(i.detail.docId)
      )
    )}/>
      </compas-scl-list>
      <mwc-button id="reselect-type"
                  label="${v("compas.open.otherTypeButton")}"
                  icon="arrow_back"
                  @click=${() => {
      this.selectedType = void 0;
    }}>
      </mwc-button>
    `;
  }
  render() {
    return p`
      ${this.allowLocalFile ? p`<wizard-divider></wizard-divider>
            <section>
              <h3>${v("compas.open.localTitle")}</h3>
              ${this.renderFileSelect()}
            </section>` : Qe}
      <wizard-divider></wizard-divider>
      <section>
        <h3>${v("compas.open.compasTitle")}</h3>
        ${this.selectedType ? this.renderSclList() : this.renderSclTypeList()}
      </section>
    `;
  }
};
nt([
  d()
], $e.prototype, "selectedType", 2);
nt([
  d()
], $e.prototype, "allowLocalFile", 2);
nt([
  S("#scl-file")
], $e.prototype, "sclFileUI", 2);
$e = nt([
  k("compas-open")
], $e);
var ks = Object.defineProperty, mt = (i, e, t, r) => {
  for (var n = void 0, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (n = a(e, t, n) || n);
  return n && ks(e, t, n), n;
};
function Es(i) {
  class e extends i {
    firstUpdated() {
      this.checkExistInCompas();
    }
    updated(r) {
      super.updated(r), r.has("docId") && (this.existInCompas = void 0, this.checkExistInCompas());
    }
    callService(r, n) {
      return be().listSclVersions(r, n);
    }
    checkExistInCompas() {
      if (this.docId) {
        const r = Ft(this.docName);
        this.callService(r, this.docId).then(() => this.existInCompas = !0).catch((n) => {
          n.type === Ji && (this.existInCompas = !1);
        });
      } else
        this.existInCompas = !1;
    }
  }
  return mt([
    d()
  ], e.prototype, "docName"), mt([
    d()
  ], e.prototype, "docId"), mt([
    f()
  ], e.prototype, "existInCompas"), e;
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Si = Symbol("selection controller");
class Cs {
  constructor() {
    this.selected = null, this.ordered = null, this.set = /* @__PURE__ */ new Set();
  }
}
class ni {
  constructor(e) {
    this.sets = {}, this.focusedSet = null, this.mouseIsDown = !1, this.updating = !1, e.addEventListener("keydown", (t) => {
      this.keyDownHandler(t);
    }), e.addEventListener("mousedown", () => {
      this.mousedownHandler();
    }), e.addEventListener("mouseup", () => {
      this.mouseupHandler();
    });
  }
  /**
   * Get a controller for the given element. If no controller exists, one will
   * be created. Defaults to getting the controller scoped to the element's root
   * node shadow root unless `element.global` is true. Then, it will get a
   * `window.document`-scoped controller.
   *
   * @param element Element from which to get / create a SelectionController. If
   *     `element.global` is true, it gets a selection controller scoped to
   *     `window.document`.
   */
  static getController(e) {
    const r = !("global" in e) || "global" in e && e.global ? document : e.getRootNode();
    let n = r[Si];
    return n === void 0 && (n = new ni(r), r[Si] = n), n;
  }
  keyDownHandler(e) {
    const t = e.target;
    "checked" in t && this.has(t) && (e.key == "ArrowRight" || e.key == "ArrowDown" ? this.selectNext(t) : (e.key == "ArrowLeft" || e.key == "ArrowUp") && this.selectPrevious(t));
  }
  mousedownHandler() {
    this.mouseIsDown = !0;
  }
  mouseupHandler() {
    this.mouseIsDown = !1;
  }
  /**
   * Whether or not the controller controls  the given element.
   *
   * @param element element to check
   */
  has(e) {
    return this.getSet(e.name).set.has(e);
  }
  /**
   * Selects and returns the controlled element previous to the given element in
   * document position order. See
   * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
   *
   * @param element element relative from which preceding element is fetched
   */
  selectPrevious(e) {
    const t = this.getOrdered(e), r = t.indexOf(e), n = t[r - 1] || t[t.length - 1];
    return this.select(n), n;
  }
  /**
   * Selects and returns the controlled element next to the given element in
   * document position order. See
   * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
   *
   * @param element element relative from which following element is fetched
   */
  selectNext(e) {
    const t = this.getOrdered(e), r = t.indexOf(e), n = t[r + 1] || t[0];
    return this.select(n), n;
  }
  select(e) {
    e.click();
  }
  /**
   * Focuses the selected element in the given element's selection set. User's
   * mouse selection will override this focus.
   *
   * @param element Element from which selection set is derived and subsequently
   *     focused.
   * @deprecated update() method now handles focus management by setting
   *     appropriate tabindex to form element.
   */
  focus(e) {
    if (this.mouseIsDown)
      return;
    const t = this.getSet(e.name), r = this.focusedSet;
    this.focusedSet = t, r != t && t.selected && t.selected != e && t.selected.focus();
  }
  /**
   * @return Returns true if atleast one radio is selected in the radio group.
   */
  isAnySelected(e) {
    const t = this.getSet(e.name);
    for (const r of t.set)
      if (r.checked)
        return !0;
    return !1;
  }
  /**
   * Returns the elements in the given element's selection set in document
   * position order.
   * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
   *
   * @param element Element from which selection set is derived and subsequently
   *     ordered.
   */
  getOrdered(e) {
    const t = this.getSet(e.name);
    return t.ordered || (t.ordered = Array.from(t.set), t.ordered.sort((r, n) => r.compareDocumentPosition(n) == Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0)), t.ordered;
  }
  /**
   * Gets the selection set of the given name and creates one if it does not yet
   * exist.
   *
   * @param name Name of set
   */
  getSet(e) {
    return this.sets[e] || (this.sets[e] = new Cs()), this.sets[e];
  }
  /**
   * Register the element in the selection controller.
   *
   * @param element Element to register. Registers in set of `element.name`.
   */
  register(e) {
    const t = e.name || e.getAttribute("name") || "", r = this.getSet(t);
    r.set.add(e), r.ordered = null;
  }
  /**
   * Unregister the element from selection controller.
   *
   * @param element Element to register. Registers in set of `element.name`.
   */
  unregister(e) {
    const t = this.getSet(e.name);
    t.set.delete(e), t.ordered = null, t.selected == e && (t.selected = null);
  }
  /**
   * Unselects other elements in element's set if element is checked. Noop
   * otherwise.
   *
   * @param element Element from which to calculate selection controller update.
   */
  update(e) {
    if (this.updating)
      return;
    this.updating = !0;
    const t = this.getSet(e.name);
    if (e.checked) {
      for (const r of t.set)
        r != e && (r.checked = !1);
      t.selected = e;
    }
    if (this.isAnySelected(e))
      for (const r of t.set) {
        if (r.formElementTabIndex === void 0)
          break;
        r.formElementTabIndex = r.checked ? 0 : -1;
      }
    this.updating = !1;
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
var As = {
  NATIVE_CONTROL_SELECTOR: ".mdc-radio__native-control"
}, Ds = {
  DISABLED: "mdc-radio--disabled",
  ROOT: "mdc-radio"
};
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
var Is = (
  /** @class */
  function(i) {
    Wi(e, i);
    function e(t) {
      return i.call(this, fe(fe({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ds;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return As;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          setNativeControlDisabled: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.setDisabled = function(t) {
      var r = e.cssClasses.DISABLED;
      this.adapter.setNativeControlDisabled(t), t ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e;
  }(Jt)
);
class N extends ei {
  constructor() {
    super(...arguments), this._checked = !1, this.useStateLayerCustomProperties = !1, this.global = !1, this.disabled = !1, this.value = "", this.name = "", this.reducedTouchTarget = !1, this.mdcFoundationClass = Is, this.formElementTabIndex = 0, this.focused = !1, this.shouldRenderRipple = !1, this.rippleElement = null, this.rippleHandlers = new Qt(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => {
      this.rippleElement = e;
    }), this.ripple));
  }
  get checked() {
    return this._checked;
  }
  /**
   * We define our own getter/setter for `checked` because we need to track
   * changes to it synchronously.
   *
   * The order in which the `checked` property is set across radio buttons
   * within the same group is very important. However, we can't rely on
   * UpdatingElement's `updated` callback to observe these changes (which is
   * also what the `@observer` decorator uses), because it batches changes to
   * all properties.
   *
   * Consider:
   *
   *   radio1.disabled = true;
   *   radio2.checked = true;
   *   radio1.checked = true;
   *
   * In this case we'd first see all changes for radio1, and then for radio2,
   * and we couldn't tell that radio1 was the most recently checked.
   */
  set checked(e) {
    var t, r;
    const n = this._checked;
    e !== n && (this._checked = e, this.formElement && (this.formElement.checked = e), (t = this._selectionController) === null || t === void 0 || t.update(this), e === !1 && ((r = this.formElement) === null || r === void 0 || r.blur()), this.requestUpdate("checked", n), this.dispatchEvent(new Event("checked", { bubbles: !0, composed: !0 })));
  }
  _handleUpdatedValue(e) {
    this.formElement.value = e;
  }
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? p`<mwc-ripple unbounded accent
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
        .disabled="${this.disabled}"></mwc-ripple>` : "";
  }
  get isRippleActive() {
    var e;
    return ((e = this.rippleElement) === null || e === void 0 ? void 0 : e.isActive) || !1;
  }
  connectedCallback() {
    super.connectedCallback(), this._selectionController = ni.getController(this), this._selectionController.register(this), this._selectionController.update(this);
  }
  disconnectedCallback() {
    this._selectionController.unregister(this), this._selectionController = void 0;
  }
  focus() {
    this.formElement.focus();
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Zr(this.mdcRoot)), { setNativeControlDisabled: (e) => {
      this.formElement.disabled = e;
    } });
  }
  handleFocus() {
    this.focused = !0, this.handleRippleFocus();
  }
  handleClick() {
    this.formElement.focus();
  }
  handleBlur() {
    this.focused = !1, this.formElement.blur(), this.rippleHandlers.endFocus();
  }
  /**
   * @soyTemplate
   * @soyAttributes radioAttributes: input
   * @soyClasses radioClasses: .mdc-radio
   */
  render() {
    const e = {
      "mdc-radio--touch": !this.reducedTouchTarget,
      "mdc-ripple-upgraded--background-focused": this.focused,
      "mdc-radio--disabled": this.disabled
    };
    return p`
      <div class="mdc-radio ${Ce(e)}">
        <input
          tabindex="${this.formElementTabIndex}"
          class="mdc-radio__native-control"
          type="radio"
          name="${this.name}"
          aria-label="${K(this.ariaLabel)}"
          aria-labelledby="${K(this.ariaLabelledBy)}"
          .checked="${this.checked}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          @change="${this.changeHandler}"
          @focus="${this.handleFocus}"
          @click="${this.handleClick}"
          @blur="${this.handleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-radio__background">
          <div class="mdc-radio__outer-circle"></div>
          <div class="mdc-radio__inner-circle"></div>
        </div>
        ${this.renderRipple()}
      </div>`;
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
  changeHandler() {
    this.checked = this.formElement.checked;
  }
}
c([
  S(".mdc-radio")
], N.prototype, "mdcRoot", void 0);
c([
  S("input")
], N.prototype, "formElement", void 0);
c([
  f()
], N.prototype, "useStateLayerCustomProperties", void 0);
c([
  d({ type: Boolean })
], N.prototype, "global", void 0);
c([
  d({ type: Boolean, reflect: !0 })
], N.prototype, "checked", null);
c([
  d({ type: Boolean }),
  J(function(i) {
    this.mdcFoundation.setDisabled(i);
  })
], N.prototype, "disabled", void 0);
c([
  d({ type: String }),
  J(function(i) {
    this._handleUpdatedValue(i);
  })
], N.prototype, "value", void 0);
c([
  d({ type: String })
], N.prototype, "name", void 0);
c([
  d({ type: Boolean })
], N.prototype, "reducedTouchTarget", void 0);
c([
  d({ type: Number })
], N.prototype, "formElementTabIndex", void 0);
c([
  f()
], N.prototype, "focused", void 0);
c([
  f()
], N.prototype, "shouldRenderRipple", void 0);
c([
  Bt("mwc-ripple")
], N.prototype, "ripple", void 0);
c([
  Ue,
  d({ attribute: "aria-label" })
], N.prototype, "ariaLabel", void 0);
c([
  Ue,
  d({ attribute: "aria-labelledby" })
], N.prototype, "ariaLabelledBy", void 0);
c([
  Bi({ passive: !0 })
], N.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ts = R`.mdc-touch-target-wrapper{display:inline}.mdc-radio{padding:calc((40px - 20px) / 2)}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio .mdc-radio__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{top:calc(-1 * (40px - 20px) / 2);left:calc(-1 * (40px - 20px) / 2);width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:calc((40px - 40px) / 2);right:calc((40px - 40px) / 2);left:calc((40px - 40px) / 2);width:40px;height:40px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:GrayText}}.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-block;outline:none}.mdc-radio{vertical-align:bottom}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}`;
let Ot = class extends N {
};
Ot.styles = [Ts];
Ot = c([
  k("mwc-radio")
], Ot);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class qe extends I {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control", this._changeFromClick = !1;
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, t = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : p``, n = this.hasMeta && this.left ? this.renderMeta() : p``, s = this.renderRipple();
    return p`
      ${s}
      ${r}
      ${this.left ? "" : t}
      <mwc-radio
          global
          class=${Ce(e)}
          tabindex=${this.tabindex}
          name=${K(this.group === null ? void 0 : this.group)}
          .checked=${this.selected}
          ?disabled=${this.disabled}
          @checked=${this.onChange}>
      </mwc-radio>
      ${this.left ? t : ""}
      ${n}`;
  }
  onClick() {
    this._changeFromClick = !0, super.onClick();
  }
  async onChange(e) {
    const t = e.target;
    this.selected === t.checked || (this._skipPropRequest = !0, this.selected = t.checked, await this.updateComplete, this._skipPropRequest = !1, this._changeFromClick || this.fireRequestSelected(this.selected, "interaction")), this._changeFromClick = !1;
  }
}
c([
  S("slot")
], qe.prototype, "slotElement", void 0);
c([
  S("mwc-radio")
], qe.prototype, "radioElement", void 0);
c([
  d({ type: Boolean })
], qe.prototype, "left", void 0);
c([
  d({ type: String, reflect: !0 })
], qe.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Mt = class extends qe {
};
Mt.styles = [Yt, ir];
Mt = c([
  k("mwc-radio-list-item")
], Mt);
var Ns = Object.getOwnPropertyDescriptor, Ls = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Ns(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (n = a(n) || n);
  return n;
};
const Rs = /* @__PURE__ */ new Map([
  [Le.MAJOR, { translationKey: "compas.changeset.major" }],
  [Le.MINOR, { translationKey: "compas.changeset.minor" }],
  [Le.PATCH, { translationKey: "compas.changeset.patch" }]
]);
let wi = class extends D {
  getSelectedListItem() {
    return this.shadowRoot.querySelector("mwc-list").selected;
  }
  getSelectedValue() {
    const i = this.getSelectedListItem();
    return i ? i.value : null;
  }
  valid() {
    return this.getSelectedListItem() !== null;
  }
  render() {
    return p`
      <mwc-list activatable>
        ${Object.values(Le).map(
      (i) => p`<mwc-radio-list-item value="${i}" left>
                          ${v(Rs.get(i).translationKey)}
                        </mwc-radio-list-item>`
    )}
      </mwc-list>
    `;
  }
};
wi = Ls([
  k("compas-changeset-radiogroup")
], wi);
var Ps = Object.getOwnPropertyDescriptor, zs = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Ps(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (n = a(n) || n);
  return n;
};
let $t = class extends D {
  getCommentField() {
    return this.shadowRoot.querySelector('wizard-textfield[id="comment"]');
  }
  set value(i) {
    const e = this.getCommentField();
    e.maybeValue = i;
  }
  get value() {
    return this.getCommentField().maybeValue;
  }
  valid() {
    return this.getCommentField().checkValidity();
  }
  render() {
    return p`
      <wizard-textfield
        id="comment"
        label="${v("compas.comment")}"
        .maybeValue=${null}
        nullable
      >
      </wizard-textfield>
    `;
  }
};
$t.styles = R`
    wizard-textfield {
      width: 100%;
    }
  `;
$t = zs([
  k("compas-comment")
], $t);
var Fs = Object.defineProperty, Os = Object.getOwnPropertyDescriptor, De = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Os(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && Fs(e, t, n), n;
};
let pe = class extends D {
  constructor() {
    super(...arguments), this.originalLabelsElement = null;
  }
  set privateElement(i) {
    this.originalLabelsElement = Pt(i), this.originalLabelsElement ? this.newLabelsElement = this.originalLabelsElement.cloneNode(!0) : this.newLabelsElement = gs(i);
  }
  get labels() {
    return Array.from(
      this.newLabelsElement?.querySelectorAll(":scope > Label") ?? []
    ).filter((i) => i.namespaceURI === Oe).sort(
      (i, e) => (i.textContent ?? "").localeCompare(e.textContent ?? "")
    );
  }
  addLabel() {
    if (this.newLabelField.checkValidity()) {
      const i = this.newLabelField.value;
      vs(this.newLabelsElement, i), this.newLabelField.value = "", this.requestUpdate("labels");
    }
  }
  removeLabel(i) {
    this.newLabelsElement.removeChild(i), this.requestUpdate("labels");
  }
  updateLabelsInPrivateElement(i) {
    this.originalLabelsElement && i?.removeChild(this.originalLabelsElement), i?.append(this.newLabelsElement), this.originalLabelsElement = this.newLabelsElement;
  }
  render() {
    const i = this.labels;
    return p`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">
          <wizard-textfield
            id="newLabel"
            label="${v("compas.newLabel")}"
            ?disabled="${i.length >= vi}"
            .maybeValue=${null}
            pattern="[A-Za-z][0-9A-Za-z_-]*"
            required
          >
          </wizard-textfield>
        </div>
        <div style="display: flex; align-items: center; height: 56px;">
          <mwc-icon-button
            icon="new_label"
            ?disabled="${i.length >= vi}"
            @click=${() => {
      this.addLabel();
    }}
          ></mwc-icon-button>
        </div>
      </div>
      <mwc-list>
        ${i.map((e) => {
      const t = e.textContent;
      return p` <mwc-list-item hasMeta graphic="icon">
            <span>${t}</span>
            <mwc-icon slot="graphic">label</mwc-icon>
            <mwc-icon-button
              icon="delete"
              slot="meta"
              @click=${() => {
        this.removeLabel(e);
      }}
            ></mwc-icon-button>
          </mwc-list-item>`;
    })}
      </mwc-list>
    `;
  }
};
pe.styles = R`
    wizard-textfield {
      width: 100%;
    }

    mwc-list-item {
      --mdc-list-item-meta-size: 48px;
    }

    mwc-icon-button {
      color: var(--mdc-theme-on-surface);
    }
  `;
De([
  d()
], pe.prototype, "privateElement", 1);
De([
  d()
], pe.prototype, "originalLabelsElement", 2);
De([
  d()
], pe.prototype, "newLabelsElement", 2);
De([
  f()
], pe.prototype, "labels", 1);
De([
  S("wizard-textfield#newLabel")
], pe.prototype, "newLabelField", 2);
pe = De([
  k("compas-labels-field")
], pe);
var Ms = Object.getOwnPropertyDescriptor, $s = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Ms(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (n = a(n) || n);
  return n;
};
let xi = class extends D {
  render() {
    return p`
      <mwc-list>
        <mwc-list-item><i>${v("compas.loading")}</i></mwc-list-item>
      </mwc-list>
    `;
  }
};
xi = $s([
  k("compas-loading")
], xi);
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
const ki = (i, e) => {
  const t = i.startNode.parentNode, r = e === void 0 ? i.endNode : e.startNode, n = t.insertBefore(W(), r);
  t.insertBefore(W(), r);
  const s = new ve(i.options);
  return s.insertAfterNode(n), s;
}, he = (i, e) => (i.setValue(e), i.commit(), i), ut = (i, e, t) => {
  const r = i.startNode.parentNode, n = t ? t.startNode : i.endNode, s = e.endNode.nextSibling;
  s !== n && or(r, e.startNode, s, n);
}, ht = (i) => {
  rt(i.startNode.parentNode, i.startNode, i.endNode.nextSibling);
}, Ei = (i, e, t) => {
  const r = /* @__PURE__ */ new Map();
  for (let n = e; n <= t; n++)
    r.set(i[n], n);
  return r;
}, Ci = /* @__PURE__ */ new WeakMap(), Ai = /* @__PURE__ */ new WeakMap(), Vs = He((i, e, t) => {
  let r;
  return t === void 0 ? t = e : e !== void 0 && (r = e), (n) => {
    if (!(n instanceof ve))
      throw new Error("repeat can only be used in text bindings");
    const s = Ci.get(n) || [], a = Ai.get(n) || [], o = [], l = [], m = [];
    let h = 0;
    for (const C of i)
      m[h] = r ? r(C, h) : h, l[h] = t(C, h), h++;
    let u, x, g = 0, _ = s.length - 1, y = 0, E = l.length - 1;
    for (; g <= _ && y <= E; )
      if (s[g] === null)
        g++;
      else if (s[_] === null)
        _--;
      else if (a[g] === m[y])
        o[y] = he(s[g], l[y]), g++, y++;
      else if (a[_] === m[E])
        o[E] = he(s[_], l[E]), _--, E--;
      else if (a[g] === m[E])
        o[E] = he(s[g], l[E]), ut(n, s[g], o[E + 1]), g++, E--;
      else if (a[_] === m[y])
        o[y] = he(s[_], l[y]), ut(n, s[_], s[g]), _--, y++;
      else if (u === void 0 && (u = Ei(m, y, E), x = Ei(a, g, _)), !u.has(a[g]))
        ht(s[g]), g++;
      else if (!u.has(a[_]))
        ht(s[_]), _--;
      else {
        const C = x.get(m[y]), q = C !== void 0 ? s[C] : null;
        if (q === null) {
          const U = ki(n, s[g]);
          he(U, l[y]), o[y] = U;
        } else
          o[y] = he(q, l[y]), ut(n, q, s[g]), s[C] = null;
        y++;
      }
    for (; y <= E; ) {
      const C = ki(n, o[E + 1]);
      he(C, l[y]), o[y++] = C;
    }
    for (; g <= _; ) {
      const C = s[g++];
      C !== null && ht(C);
    }
    Ci.set(n, o), Ai.set(n, m);
  };
});
var Hs = Object.defineProperty, Us = Object.getOwnPropertyDescriptor, si = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Us(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && Hs(e, t, n), n;
};
let Ve = class extends D {
  constructor() {
    super(...arguments), this.value = "";
  }
  firstUpdated() {
    this.fetchData();
  }
  fetchData() {
    be().listOrderedSclTypes().then((i) => this.sclTypes = i);
  }
  getSelectedValue() {
    return this.shadowRoot.querySelector("mwc-select")?.selected?.value ?? null;
  }
  valid() {
    return !!this.getSelectedValue();
  }
  render() {
    return this.sclTypes ? this.sclTypes.length <= 0 ? p` <mwc-list>
        <mwc-list-item><i>${v("compas.noSclTypes")}</i></mwc-list-item>
      </mwc-list>` : p` <mwc-select
      fixedMenuPosition
      naturalMenuWidth="true"
      label="${v("compas.sclType")}"
    >
      ${Vs(
      this.sclTypes,
      (i) => i.getElementsByTagNameNS(L, "Code").item(0).textContent ?? "",
      (i) => {
        const e = i.getElementsByTagNameNS(L, "Code").item(0).textContent ?? "", t = i.getElementsByTagNameNS(L, "Description").item(0).textContent ?? "";
        return p`<mwc-list-item
            value="${e}"
            ?selected="${e === this.value}"
          >
            <span>${t} (${e})</span>
          </mwc-list-item>`;
      }
    )}
    </mwc-select>` : p` <compas-loading></compas-loading> `;
  }
};
Ve.styles = R`
    mwc-select {
      width: 100%;
    }
  `;
si([
  d()
], Ve.prototype, "value", 2);
si([
  d()
], Ve.prototype, "sclTypes", 2);
Ve = si([
  k("compas-scltype-select")
], Ve);
var Bs = Object.defineProperty, Gs = Object.getOwnPropertyDescriptor, ue = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Gs(e, t) : e, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (n = (r ? a(e, t, n) : a(n)) || n);
  return r && n && Bs(e, t, n), n;
};
function Di() {
  return new CustomEvent("doc-saved", {
    bubbles: !0,
    composed: !0
  });
}
let Z = class extends Es(D) {
  constructor() {
    super(...arguments), this.allowLocalFile = !0;
  }
  updated(i) {
    super.updated(i), i.has("doc") && this.commentField && (this.commentField.value = null);
  }
  valid() {
    return this.existInCompas ? this.changeSetRadiogroup.valid() : this.nameField.checkValidity() && this.sclTypeRadioGroup.valid();
  }
  getCleanFileName() {
    return yi(this.docName);
  }
  updateLabels() {
    const i = this.doc.documentElement, e = Me(i, ke);
    this.labelsField.updateLabelsInPrivateElement(e);
  }
  processUpdatedDocument(i, e) {
    Ss(this, i), this.dispatchEvent(
      ti({
        kind: "info",
        title: X(e)
      })
    ), this.dispatchEvent(Di());
  }
  async addSclToCompas(i) {
    const e = yi(this.nameField.value), t = this.commentField.value, r = this.sclTypeRadioGroup.getSelectedValue() ?? "";
    await be().addSclDocument(this, r, {
      sclName: e,
      comment: t,
      doc: i
    }).then((n) => {
      this.processUpdatedDocument(n, "compas.save.addSuccess");
    }).catch((n) => At(this, n));
  }
  async updateSclInCompas(i, e, t) {
    const r = this.changeSetRadiogroup.getSelectedValue(), n = this.commentField.value, s = Ft(e);
    await be().updateSclDocument(this, s, i, {
      changeSet: r,
      comment: n,
      doc: t
    }).then((a) => {
      this.processUpdatedDocument(a, "compas.save.updateSuccess");
    }).catch((a) => At(this, a));
  }
  async saveToCompas() {
    this.updateLabels(), !this.docId || !this.existInCompas ? await this.addSclToCompas(this.doc) : await this.updateSclInCompas(this.docId, this.docName, this.doc);
  }
  renderSaveFilePart() {
    return p`
      <mwc-button
        label="${v("compas.save.saveFileButton")}"
        @click=${() => {
      this.updateLabels(), Wr(this.doc, this.docName), this.dispatchEvent(Di());
    }}
      >
      </mwc-button>
    `;
  }
  renderSaveCompasPart() {
    return this.existInCompas === void 0 ? p` <compas-loading></compas-loading> ` : this.existInCompas ? p`
      <div id="content">
        <compas-changeset-radiogroup></compas-changeset-radiogroup>
        <compas-comment></compas-comment>
      </div>
    ` : p`
        <div id="content">
          <mwc-textfield
            dialogInitialFocus
            id="name"
            label="${v("scl.name")}"
            value="${this.getCleanFileName()}"
            required
          >
          </mwc-textfield>

          <compas-scltype-select
            .value="${Ft(this.docName)}"
          ></compas-scltype-select>
          <compas-comment></compas-comment>
        </div>
      `;
  }
  renderLabelsPart() {
    const i = this.doc.documentElement;
    let e = Me(i, ke);
    return e || (e = hs(i, ke), i.prepend(e)), p`<compas-labels-field
      .privateElement="${e}"
    ></compas-labels-field>`;
  }
  render() {
    return p`
      ${this.allowLocalFile ? p` <wizard-divider></wizard-divider>
            <section>
              <h3>${v("compas.save.localTitle")}</h3>
              ${this.renderSaveFilePart()}
            </section>` : Qe}
      <wizard-divider></wizard-divider>
      <section>
        <h3>${v("compas.save.compasTitle")}</h3>
        ${this.renderSaveCompasPart()}
      </section>
      <wizard-divider></wizard-divider>
      <section>
        <h3>${v("compas.save.labelsTitle")}</h3>
        ${this.renderLabelsPart()}
      </section>
    `;
  }
};
Z.styles = R`
    #content > * {
      display: block;
      margin-top: 16px;
    }

    h3 {
      color: var(--mdc-theme-on-surface);
    }
  `;
ue([
  d()
], Z.prototype, "doc", 2);
ue([
  d()
], Z.prototype, "allowLocalFile", 2);
ue([
  S("mwc-textfield#name")
], Z.prototype, "nameField", 2);
ue([
  S("compas-scltype-select")
], Z.prototype, "sclTypeRadioGroup", 2);
ue([
  S("compas-changeset-radiogroup")
], Z.prototype, "changeSetRadiogroup", 2);
ue([
  S("compas-comment")
], Z.prototype, "commentField", 2);
ue([
  S("compas-labels-field")
], Z.prototype, "labelsField", 2);
Z = ue([
  k("compas-save")
], Z);
const qs = {
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
}, js = {
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
}, Ii = { en: js, de: qs };
async function Ws(i) {
  return Object.keys(Ii).includes(i) ? Ii[i] : {};
}
Or({ loader: Ws, empty: (i) => i });
const Ks = localStorage.getItem("language") || "en";
Hr(Ks);
var Xs = Object.defineProperty, ne = (i, e, t, r) => {
  for (var n = void 0, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (n = a(e, t, n) || n);
  return n && Xs(e, t, n), n;
};
class se extends D {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  async run() {
    this.saveToDoc = void 0, this.saveToDocName = void 0, this.saveToDocId = void 0, this.compasSaveElement && await this.compasSaveElement.requestUpdate(), this.compasOpenElement && await this.compasOpenElement.requestUpdate(), this.dialog.show();
  }
  /**
   * To prevent problem with double SCL Filenames, we will retrieve the CoMPAS Private for SCL Element from the
   * selected document, to which the current document will be added as new version, and copy the CoMPAS SCL Private
   * Elements to the current document.
   */
  copyCompasPrivates() {
    if (this.saveToDoc) {
      const e = Me(
        this.doc.documentElement,
        ke
      ), t = Me(
        this.saveToDoc.documentElement,
        ke
      );
      fs(t, e), bs(t, e), ys(t, e);
    }
  }
  render() {
    return p` <mwc-dialog
      id="compas-save-as-version-dlg"
      heading="${v("compas.save.saveAsVersionTitle")}"
    >
      ${!this.doc || !this.docName ? p` <compas-loading></compas-loading>` : !this.saveToDoc || !this.saveToDocId ? p`
            <compas-open
              .allowLocalFile="${!1}"
              @doc-retrieved=${(e) => {
      this.saveToDoc = e.detail.doc, this.saveToDocName = e.detail.docName, this.saveToDocId = e.detail.docId, this.copyCompasPrivates();
    }}
            ></compas-open>
          ` : p` <compas-save
              .doc="${this.doc}"
              .docName="${this.saveToDocName}"
              .docId="${this.saveToDocId}"
              .allowLocalFile="${!1}"
              .editCount=${this.editCount}
              @doc-saved=${() => {
      this.dialog.close();
    }}
            ></compas-save>
            <mwc-button
              slot="primaryAction"
              icon="save"
              trailingIcon
              label="${v("save")}"
              @click=${() => {
      this.compasSaveElement && this.compasSaveElement.valid() && this.dispatchEvent(
        et(this.compasSaveElement.saveToCompas())
      );
    }}
            ></mwc-button>`}
      <mwc-button
        slot="secondaryAction"
        icon=""
        label="${v("close")}"
        dialogAction="close"
        style="--mdc-theme-primary: var(--mdc-theme-error)"
      >
      </mwc-button>
    </mwc-dialog>`;
  }
  static {
    this.styles = R`
    mwc-dialog {
      --mdc-dialog-min-width: 23vw;
      --mdc-dialog-max-width: 92vw;
    }
  `;
  }
}
ne([
  d()
], se.prototype, "doc");
ne([
  d()
], se.prototype, "docName");
ne([
  d({ type: Number })
], se.prototype, "editCount");
ne([
  f()
], se.prototype, "saveToDoc");
ne([
  f()
], se.prototype, "saveToDocName");
ne([
  f()
], se.prototype, "saveToDocId");
ne([
  S("mwc-dialog#compas-save-as-version-dlg")
], se.prototype, "dialog");
ne([
  S("compas-save")
], se.prototype, "compasSaveElement");
ne([
  S("compas-open")
], se.prototype, "compasOpenElement");
export {
  se as default
};
