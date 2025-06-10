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
const ge = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, fe = (r, e, t = null) => {
  for (; e !== t; ) {
    const n = e.nextSibling;
    r.removeChild(e), e = n;
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
const C = `{{lit-${String(Math.random()).slice(2)}}}`, Re = `<!--${C}-->`, we = new RegExp(`${C}|${Re}`), D = "$lit$";
class Fe {
  constructor(e, t) {
    this.parts = [], this.element = t;
    const n = [], i = [], o = document.createTreeWalker(t.content, 133, null, !1);
    let s = 0, a = -1, c = 0;
    const { strings: f, values: { length: h } } = e;
    for (; c < h; ) {
      const u = o.nextNode();
      if (u === null) {
        o.currentNode = i.pop();
        continue;
      }
      if (a++, u.nodeType === 1) {
        if (u.hasAttributes()) {
          const p = u.attributes, { length: m } = p;
          let d = 0;
          for (let y = 0; y < m; y++)
            _e(p[y].name, D) && d++;
          for (; d-- > 0; ) {
            const y = f[c], P = ne.exec(y)[2], S = P.toLowerCase() + D, E = u.getAttribute(S);
            u.removeAttribute(S);
            const w = E.split(we);
            this.parts.push({ type: "attribute", index: a, name: P, strings: w }), c += w.length - 1;
          }
        }
        u.tagName === "TEMPLATE" && (i.push(u), o.currentNode = u.content);
      } else if (u.nodeType === 3) {
        const p = u.data;
        if (p.indexOf(C) >= 0) {
          const m = u.parentNode, d = p.split(we), y = d.length - 1;
          for (let P = 0; P < y; P++) {
            let S, E = d[P];
            if (E === "")
              S = R();
            else {
              const w = ne.exec(E);
              w !== null && _e(w[2], D) && (E = E.slice(0, w.index) + w[1] + w[2].slice(0, -D.length) + w[3]), S = document.createTextNode(E);
            }
            m.insertBefore(S, u), this.parts.push({ type: "node", index: ++a });
          }
          d[y] === "" ? (m.insertBefore(R(), u), n.push(u)) : u.data = d[y], c += y;
        }
      } else if (u.nodeType === 8)
        if (u.data === C) {
          const p = u.parentNode;
          (u.previousSibling === null || a === s) && (a++, p.insertBefore(R(), u)), s = a, this.parts.push({ type: "node", index: a }), u.nextSibling === null ? u.data = "" : (n.push(u), a--), c++;
        } else {
          let p = -1;
          for (; (p = u.data.indexOf(C, p + 1)) !== -1; )
            this.parts.push({ type: "node", index: -1 }), c++;
        }
    }
    for (const u of n)
      u.parentNode.removeChild(u);
  }
}
const _e = (r, e) => {
  const t = r.length - e.length;
  return t >= 0 && r.slice(t) === e;
}, Ne = (r) => r.index !== -1, R = () => document.createComment(""), ne = (
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
const he = 133;
function Ue(r, e) {
  const { element: { content: t }, parts: n } = r, i = document.createTreeWalker(t, he, null, !1);
  let o = M(n), s = n[o], a = -1, c = 0;
  const f = [];
  let h = null;
  for (; i.nextNode(); ) {
    a++;
    const u = i.currentNode;
    for (u.previousSibling === h && (h = null), e.has(u) && (f.push(u), h === null && (h = u)), h !== null && c++; s !== void 0 && s.index === a; )
      s.index = h !== null ? -1 : s.index - c, o = M(n, o), s = n[o];
  }
  f.forEach((u) => u.parentNode.removeChild(u));
}
const ht = (r) => {
  let e = r.nodeType === 11 ? 0 : 1;
  const t = document.createTreeWalker(r, he, null, !1);
  for (; t.nextNode(); )
    e++;
  return e;
}, M = (r, e = -1) => {
  for (let t = e + 1; t < r.length; t++) {
    const n = r[t];
    if (Ne(n))
      return t;
  }
  return -1;
};
function pt(r, e, t = null) {
  const { element: { content: n }, parts: i } = r;
  if (t == null) {
    n.appendChild(e);
    return;
  }
  const o = document.createTreeWalker(n, he, null, !1);
  let s = M(i), a = 0, c = -1;
  for (; o.nextNode(); )
    for (c++, o.currentNode === t && (a = ht(e), t.parentNode.insertBefore(e, t)); s !== -1 && i[s].index === c; ) {
      if (a > 0) {
        for (; s !== -1; )
          i[s].index += a, s = M(i, s);
        return;
      }
      s = M(i, s);
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
const dt = /* @__PURE__ */ new WeakMap(), ie = (r) => typeof r == "function" && dt.has(r);
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
const q = {}, xe = {};
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
class oe {
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
    const e = ge ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), t = [], n = this.template.parts, i = document.createTreeWalker(e, 133, null, !1);
    let o = 0, s = 0, a, c = i.nextNode();
    for (; o < n.length; ) {
      if (a = n[o], !Ne(a)) {
        this.__parts.push(void 0), o++;
        continue;
      }
      for (; s < a.index; )
        s++, c.nodeName === "TEMPLATE" && (t.push(c), i.currentNode = c.content), (c = i.nextNode()) === null && (i.currentNode = t.pop(), c = i.nextNode());
      if (a.type === "node") {
        const f = this.processor.handleTextExpression(this.options);
        f.insertAfterNode(c.previousSibling), this.__parts.push(f);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(c, a.name, a.strings, this.options));
      o++;
    }
    return ge && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const Se = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (r) => r }), mt = ` ${C} `;
class yt {
  constructor(e, t, n, i) {
    this.strings = e, this.values = t, this.type = n, this.processor = i;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */
  getHTML() {
    const e = this.strings.length - 1;
    let t = "", n = !1;
    for (let i = 0; i < e; i++) {
      const o = this.strings[i], s = o.lastIndexOf("<!--");
      n = (s > -1 || n) && o.indexOf("-->", s + 1) === -1;
      const a = ne.exec(o);
      a === null ? t += o + (n ? mt : Re) : t += o.substr(0, a.index) + a[1] + a[2] + D + a[3] + C;
    }
    return t += this.strings[e], t;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let t = this.getHTML();
    return Se !== void 0 && (t = Se.createHTML(t)), e.innerHTML = t, e;
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
const ve = (r) => r === null || !(typeof r == "object" || typeof r == "function"), gt = (r) => Array.isArray(r) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(r && r[Symbol.iterator]);
class wt {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== q && (!ve(e) || e !== this.value) && (this.value = e, ie(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; ie(this.value); ) {
      const e = this.value;
      this.value = q, e(this);
    }
    this.value !== q && this.committer.commit();
  }
}
class J {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(R()), this.endNode = e.appendChild(R());
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
    e.__insert(this.startNode = R()), e.__insert(this.endNode = R());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = R()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; ie(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = q, t(this);
    }
    const e = this.__pendingValue;
    e !== q && (ve(e) ? e !== this.value && this.__commitText(e) : e instanceof yt ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : gt(e) ? this.__commitIterable(e) : e === xe ? (this.value = xe, this.clear()) : this.__commitText(e));
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
    if (this.value instanceof oe && this.value.template === t)
      this.value.update(e.values);
    else {
      const n = new oe(t, e.processor, this.options), i = n._clone();
      n.update(e.values), this.__commitNode(i), this.value = n;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const t = this.value;
    let n = 0, i;
    for (const o of e)
      i = t[n], i === void 0 && (i = new J(this.options), t.push(i), n === 0 ? i.appendIntoPart(this) : i.insertAfterPart(t[n - 1])), i.setValue(o), i.commit(), n++;
    n < t.length && (t.length = n, this.clear(i && i.endNode));
  }
  clear(e = this.startNode) {
    fe(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
let _t = !1;
(() => {
  try {
    const r = {
      get capture() {
        return _t = !0, !1;
      }
    };
    window.addEventListener("test", r, r), window.removeEventListener("test", r, r);
  } catch {
  }
})();
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
function xt(r) {
  let e = L.get(r.type);
  e === void 0 && (e = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, L.set(r.type, e));
  let t = e.stringsArray.get(r.strings);
  if (t !== void 0)
    return t;
  const n = r.strings.join(C);
  return t = e.keyString.get(n), t === void 0 && (t = new Fe(r, r.getTemplateElement()), e.keyString.set(n, t)), e.stringsArray.set(r.strings, t), t;
}
const L = /* @__PURE__ */ new Map();
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
const v = /* @__PURE__ */ new WeakMap(), St = (r, e, t) => {
  let n = v.get(e);
  n === void 0 && (fe(e, e.firstChild), v.set(e, n = new J(Object.assign({ templateFactory: xt }, t))), n.appendInto(e)), n.setValue(r), n.commit();
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
typeof window < "u" && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
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
const Be = (r, e) => `${r}--${e}`;
let V = !0;
typeof window.ShadyCSS > "u" ? V = !1 : typeof window.ShadyCSS.prepareTemplateDom > "u" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), V = !1);
const Et = (r) => (e) => {
  const t = Be(e.type, r);
  let n = L.get(t);
  n === void 0 && (n = {
    stringsArray: /* @__PURE__ */ new WeakMap(),
    keyString: /* @__PURE__ */ new Map()
  }, L.set(t, n));
  let i = n.stringsArray.get(e.strings);
  if (i !== void 0)
    return i;
  const o = e.strings.join(C);
  if (i = n.keyString.get(o), i === void 0) {
    const s = e.getTemplateElement();
    V && window.ShadyCSS.prepareTemplateDom(s, r), i = new Fe(e, s), n.keyString.set(o, i);
  }
  return n.stringsArray.set(e.strings, i), i;
}, At = ["html", "svg"], Tt = (r) => {
  At.forEach((e) => {
    const t = L.get(Be(e, r));
    t !== void 0 && t.keyString.forEach((n) => {
      const { element: { content: i } } = n, o = /* @__PURE__ */ new Set();
      Array.from(i.querySelectorAll("style")).forEach((s) => {
        o.add(s);
      }), Ue(n, o);
    });
  });
}, ke = /* @__PURE__ */ new Set(), Pt = (r, e, t) => {
  ke.add(r);
  const n = t ? t.element : document.createElement("template"), i = e.querySelectorAll("style"), { length: o } = i;
  if (o === 0) {
    window.ShadyCSS.prepareTemplateStyles(n, r);
    return;
  }
  const s = document.createElement("style");
  for (let f = 0; f < o; f++) {
    const h = i[f];
    h.parentNode.removeChild(h), s.textContent += h.textContent;
  }
  Tt(r);
  const a = n.content;
  t ? pt(t, s, a.firstChild) : a.insertBefore(s, a.firstChild), window.ShadyCSS.prepareTemplateStyles(n, r);
  const c = a.querySelector("style");
  if (window.ShadyCSS.nativeShadow && c !== null)
    e.insertBefore(c.cloneNode(!0), e.firstChild);
  else if (t) {
    a.insertBefore(s, a.firstChild);
    const f = /* @__PURE__ */ new Set();
    f.add(s), Ue(t, f);
  }
}, bt = (r, e, t) => {
  if (!t || typeof t != "object" || !t.scopeName)
    throw new Error("The `scopeName` option is required.");
  const n = t.scopeName, i = v.has(e), o = V && e.nodeType === 11 && !!e.host, s = o && !ke.has(n), a = s ? document.createDocumentFragment() : e;
  if (St(r, a, Object.assign({ templateFactory: Et(n) }, t)), s) {
    const c = v.get(a);
    v.delete(a);
    const f = c.value instanceof oe ? c.value.template : void 0;
    Pt(n, a, f), fe(e, e.firstChild), e.appendChild(a), v.set(e, c);
  }
  !i && o && window.ShadyCSS.styleElement(e.host);
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
var Oe;
window.JSCompiler_renameProperty = (r, e) => r;
const se = {
  toAttribute(r, e) {
    switch (e) {
      case Boolean:
        return r ? "" : null;
      case Object:
      case Array:
        return r == null ? r : JSON.stringify(r);
    }
    return r;
  },
  fromAttribute(r, e) {
    switch (e) {
      case Boolean:
        return r !== null;
      case Number:
        return r === null ? null : Number(r);
      case Object:
      case Array:
        return JSON.parse(r);
    }
    return r;
  }
}, De = (r, e) => e !== r && (e === e || r === r), X = {
  attribute: !0,
  type: String,
  converter: se,
  reflect: !1,
  hasChanged: De
}, Z = 1, ee = 4, te = 8, re = 16, ae = "finalized";
class Me extends HTMLElement {
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
      const i = this._attributeNameForProperty(n, t);
      i !== void 0 && (this._attributeToPropertyMap.set(i, n), e.push(i));
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
  static createProperty(e, t = X) {
    if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e))
      return;
    const n = typeof e == "symbol" ? Symbol() : `__${e}`, i = this.getPropertyDescriptor(e, n, t);
    i !== void 0 && Object.defineProperty(this.prototype, e, i);
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
      set(i) {
        const o = this[e];
        this[t] = i, this.requestUpdateInternal(e, o, n);
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
    return this._classProperties && this._classProperties.get(e) || X;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
    const e = Object.getPrototypeOf(this);
    if (e.hasOwnProperty(ae) || e.finalize(), this[ae] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = /* @__PURE__ */ new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const t = this.properties, n = [
        ...Object.getOwnPropertyNames(t),
        ...typeof Object.getOwnPropertySymbols == "function" ? Object.getOwnPropertySymbols(t) : []
      ];
      for (const i of n)
        this.createProperty(i, t[i]);
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
  static _valueHasChanged(e, t, n = De) {
    return n(e, t);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(e, t) {
    const n = t.type, i = t.converter || se, o = typeof i == "function" ? i : i.fromAttribute;
    return o ? o(e, n) : e;
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
    const n = t.type, i = t.converter;
    return (i && i.toAttribute || se.toAttribute)(e, n);
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
  _propertyToAttribute(e, t, n = X) {
    const i = this.constructor, o = i._attributeNameForProperty(e, n);
    if (o !== void 0) {
      const s = i._propertyValueToAttribute(t, n);
      if (s === void 0)
        return;
      this._updateState = this._updateState | te, s == null ? this.removeAttribute(o) : this.setAttribute(o, s), this._updateState = this._updateState & ~te;
    }
  }
  _attributeToProperty(e, t) {
    if (this._updateState & te)
      return;
    const n = this.constructor, i = n._attributeToPropertyMap.get(e);
    if (i !== void 0) {
      const o = n.getPropertyOptions(i);
      this._updateState = this._updateState | re, this[i] = // tslint:disable-next-line:no-any
      n._propertyValueFromAttribute(t, o), this._updateState = this._updateState & ~re;
    }
  }
  /**
   * This protected version of `requestUpdate` does not access or return the
   * `updateComplete` promise. This promise can be overridden and is therefore
   * not free to access.
   */
  requestUpdateInternal(e, t, n) {
    let i = !0;
    if (e !== void 0) {
      const o = this.constructor;
      n = n || o.getPropertyOptions(e), o._valueHasChanged(this[e], t, n.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), n.reflect === !0 && !(this._updateState & re) && (this._reflectingProperties === void 0 && (this._reflectingProperties = /* @__PURE__ */ new Map()), this._reflectingProperties.set(e, n))) : i = !1;
    }
    !this._hasRequestedUpdate && i && (this._updatePromise = this._enqueueUpdate());
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
    this._updateState = this._updateState | ee;
    try {
      await this._updatePromise;
    } catch {
    }
    const e = this.performUpdate();
    return e != null && await e, !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & ee;
  }
  get hasUpdated() {
    return this._updateState & Z;
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
    e && (this._updateState & Z || (this._updateState = this._updateState | Z, this.firstUpdated(t)), this.updated(t));
  }
  _markUpdated() {
    this._changedProperties = /* @__PURE__ */ new Map(), this._updateState = this._updateState & ~ee;
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
Oe = ae;
Me[Oe] = !0;
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
const Ct = (r, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), { finisher(t) {
  t.createProperty(e.key, r);
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
    t.createProperty(e.key, r);
  }
}, It = (r, e, t) => {
  e.constructor.createProperty(t, r);
};
function qe(r) {
  return (e, t) => t !== void 0 ? It(r, e, t) : Ct(r, e);
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
const ue = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Le = Symbol();
class Rt {
  constructor(e, t) {
    if (t !== Le)
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
    return this._styleSheet === void 0 && (ue ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const Ft = (r) => new Rt(String(r), Le);
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
const Ee = {};
class W extends Me {
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
      const t = (o, s) => o.reduceRight((a, c) => (
        // Note: On IE set.add() does not return the set
        Array.isArray(c) ? t(c, a) : (a.add(c), a)
      ), s), n = t(e, /* @__PURE__ */ new Set()), i = [];
      n.forEach((o) => i.unshift(o)), this._styles = i;
    } else
      this._styles = e === void 0 ? [] : [e];
    this._styles = this._styles.map((t) => {
      if (t instanceof CSSStyleSheet && !ue) {
        const n = Array.prototype.slice.call(t.cssRules).reduce((i, o) => i + o.cssText, "");
        return Ft(n);
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
    e.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((t) => t.cssText), this.localName) : ue ? this.renderRoot.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
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
    super.update(e), t !== Ee && this.constructor.render(t, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((n) => {
      const i = document.createElement("style");
      i.textContent = n.cssText, this.renderRoot.appendChild(i);
    }));
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `NodePart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   */
  render() {
    return Ee;
  }
}
W.finalized = !0;
W.render = bt;
W.shadowRootOptions = { mode: "open" };
var Ae = typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {}, A = [], x = [], Nt = typeof Uint8Array < "u" ? Uint8Array : Array, pe = !1;
function Ye() {
  pe = !0;
  for (var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e = 0, t = r.length; e < t; ++e)
    A[e] = r[e], x[r.charCodeAt(e)] = e;
  x[45] = 62, x[95] = 63;
}
function Ut(r) {
  pe || Ye();
  var e, t, n, i, o, s, a = r.length;
  if (a % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  o = r[a - 2] === "=" ? 2 : r[a - 1] === "=" ? 1 : 0, s = new Nt(a * 3 / 4 - o), n = o > 0 ? a - 4 : a;
  var c = 0;
  for (e = 0, t = 0; e < n; e += 4, t += 3)
    i = x[r.charCodeAt(e)] << 18 | x[r.charCodeAt(e + 1)] << 12 | x[r.charCodeAt(e + 2)] << 6 | x[r.charCodeAt(e + 3)], s[c++] = i >> 16 & 255, s[c++] = i >> 8 & 255, s[c++] = i & 255;
  return o === 2 ? (i = x[r.charCodeAt(e)] << 2 | x[r.charCodeAt(e + 1)] >> 4, s[c++] = i & 255) : o === 1 && (i = x[r.charCodeAt(e)] << 10 | x[r.charCodeAt(e + 1)] << 4 | x[r.charCodeAt(e + 2)] >> 2, s[c++] = i >> 8 & 255, s[c++] = i & 255), s;
}
function vt(r) {
  return A[r >> 18 & 63] + A[r >> 12 & 63] + A[r >> 6 & 63] + A[r & 63];
}
function Bt(r, e, t) {
  for (var n, i = [], o = e; o < t; o += 3)
    n = (r[o] << 16) + (r[o + 1] << 8) + r[o + 2], i.push(vt(n));
  return i.join("");
}
function Te(r) {
  pe || Ye();
  for (var e, t = r.length, n = t % 3, i = "", o = [], s = 16383, a = 0, c = t - n; a < c; a += s)
    o.push(Bt(r, a, a + s > c ? c : a + s));
  return n === 1 ? (e = r[t - 1], i += A[e >> 2], i += A[e << 4 & 63], i += "==") : n === 2 && (e = (r[t - 2] << 8) + r[t - 1], i += A[e >> 10], i += A[e >> 4 & 63], i += A[e << 2 & 63], i += "="), o.push(i), o.join("");
}
function z(r, e, t, n, i) {
  var o, s, a = i * 8 - n - 1, c = (1 << a) - 1, f = c >> 1, h = -7, u = t ? i - 1 : 0, p = t ? -1 : 1, m = r[e + u];
  for (u += p, o = m & (1 << -h) - 1, m >>= -h, h += a; h > 0; o = o * 256 + r[e + u], u += p, h -= 8)
    ;
  for (s = o & (1 << -h) - 1, o >>= -h, h += n; h > 0; s = s * 256 + r[e + u], u += p, h -= 8)
    ;
  if (o === 0)
    o = 1 - f;
  else {
    if (o === c)
      return s ? NaN : (m ? -1 : 1) * (1 / 0);
    s = s + Math.pow(2, n), o = o - f;
  }
  return (m ? -1 : 1) * s * Math.pow(2, o - n);
}
function Ve(r, e, t, n, i, o) {
  var s, a, c, f = o * 8 - i - 1, h = (1 << f) - 1, u = h >> 1, p = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, m = n ? 0 : o - 1, d = n ? 1 : -1, y = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = h) : (s = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), s + u >= 1 ? e += p / c : e += p * Math.pow(2, 1 - u), e * c >= 2 && (s++, c /= 2), s + u >= h ? (a = 0, s = h) : s + u >= 1 ? (a = (e * c - 1) * Math.pow(2, i), s = s + u) : (a = e * Math.pow(2, u - 1) * Math.pow(2, i), s = 0)); i >= 8; r[t + m] = a & 255, m += d, a /= 256, i -= 8)
    ;
  for (s = s << i | a, f += i; f > 0; r[t + m] = s & 255, m += d, s /= 256, f -= 8)
    ;
  r[t + m - d] |= y * 128;
}
var kt = {}.toString, $e = Array.isArray || function(r) {
  return kt.call(r) == "[object Array]";
}, Ot = 50;
l.TYPED_ARRAY_SUPPORT = Ae.TYPED_ARRAY_SUPPORT !== void 0 ? Ae.TYPED_ARRAY_SUPPORT : !0;
$();
function $() {
  return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function b(r, e) {
  if ($() < e)
    throw new RangeError("Invalid typed array length");
  return l.TYPED_ARRAY_SUPPORT ? (r = new Uint8Array(e), r.__proto__ = l.prototype) : (r === null && (r = new l(e)), r.length = e), r;
}
function l(r, e, t) {
  if (!l.TYPED_ARRAY_SUPPORT && !(this instanceof l))
    return new l(r, e, t);
  if (typeof r == "number") {
    if (typeof e == "string")
      throw new Error(
        "If encoding is specified then the first argument must be a string"
      );
    return de(this, r);
  }
  return je(this, r, e, t);
}
l.poolSize = 8192;
l._augment = function(r) {
  return r.__proto__ = l.prototype, r;
};
function je(r, e, t, n) {
  if (typeof e == "number")
    throw new TypeError('"value" argument must not be a number');
  return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer ? qt(r, e, t, n) : typeof e == "string" ? Mt(r, e, t) : Lt(r, e);
}
l.from = function(r, e, t) {
  return je(null, r, e, t);
};
l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype, l.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && l[Symbol.species]);
function Je(r) {
  if (typeof r != "number")
    throw new TypeError('"size" argument must be a number');
  if (r < 0)
    throw new RangeError('"size" argument must not be negative');
}
function Dt(r, e, t, n) {
  return Je(e), e <= 0 ? b(r, e) : t !== void 0 ? typeof n == "string" ? b(r, e).fill(t, n) : b(r, e).fill(t) : b(r, e);
}
l.alloc = function(r, e, t) {
  return Dt(null, r, e, t);
};
function de(r, e) {
  if (Je(e), r = b(r, e < 0 ? 0 : me(e) | 0), !l.TYPED_ARRAY_SUPPORT)
    for (var t = 0; t < e; ++t)
      r[t] = 0;
  return r;
}
l.allocUnsafe = function(r) {
  return de(null, r);
};
l.allocUnsafeSlow = function(r) {
  return de(null, r);
};
function Mt(r, e, t) {
  if ((typeof t != "string" || t === "") && (t = "utf8"), !l.isEncoding(t))
    throw new TypeError('"encoding" must be a valid string encoding');
  var n = We(e, t) | 0;
  r = b(r, n);
  var i = r.write(e, t);
  return i !== n && (r = r.slice(0, i)), r;
}
function ce(r, e) {
  var t = e.length < 0 ? 0 : me(e.length) | 0;
  r = b(r, t);
  for (var n = 0; n < t; n += 1)
    r[n] = e[n] & 255;
  return r;
}
function qt(r, e, t, n) {
  if (e.byteLength, t < 0 || e.byteLength < t)
    throw new RangeError("'offset' is out of bounds");
  if (e.byteLength < t + (n || 0))
    throw new RangeError("'length' is out of bounds");
  return t === void 0 && n === void 0 ? e = new Uint8Array(e) : n === void 0 ? e = new Uint8Array(e, t) : e = new Uint8Array(e, t, n), l.TYPED_ARRAY_SUPPORT ? (r = e, r.__proto__ = l.prototype) : r = ce(r, e), r;
}
function Lt(r, e) {
  if (T(e)) {
    var t = me(e.length) | 0;
    return r = b(r, t), r.length === 0 || e.copy(r, 0, 0, t), r;
  }
  if (e) {
    if (typeof ArrayBuffer < "u" && e.buffer instanceof ArrayBuffer || "length" in e)
      return typeof e.length != "number" || or(e.length) ? b(r, 0) : ce(r, e);
    if (e.type === "Buffer" && $e(e.data))
      return ce(r, e.data);
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function me(r) {
  if (r >= $())
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + $().toString(16) + " bytes");
  return r | 0;
}
l.isBuffer = B;
function T(r) {
  return !!(r != null && r._isBuffer);
}
l.compare = function(e, t) {
  if (!T(e) || !T(t))
    throw new TypeError("Arguments must be Buffers");
  if (e === t) return 0;
  for (var n = e.length, i = t.length, o = 0, s = Math.min(n, i); o < s; ++o)
    if (e[o] !== t[o]) {
      n = e[o], i = t[o];
      break;
    }
  return n < i ? -1 : i < n ? 1 : 0;
};
l.isEncoding = function(e) {
  switch (String(e).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return !0;
    default:
      return !1;
  }
};
l.concat = function(e, t) {
  if (!$e(e))
    throw new TypeError('"list" argument must be an Array of Buffers');
  if (e.length === 0)
    return l.alloc(0);
  var n;
  if (t === void 0)
    for (t = 0, n = 0; n < e.length; ++n)
      t += e[n].length;
  var i = l.allocUnsafe(t), o = 0;
  for (n = 0; n < e.length; ++n) {
    var s = e[n];
    if (!T(s))
      throw new TypeError('"list" argument must be an Array of Buffers');
    s.copy(i, o), o += s.length;
  }
  return i;
};
function We(r, e) {
  if (T(r))
    return r.length;
  if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(r) || r instanceof ArrayBuffer))
    return r.byteLength;
  typeof r != "string" && (r = "" + r);
  var t = r.length;
  if (t === 0) return 0;
  for (var n = !1; ; )
    switch (e) {
      case "ascii":
      case "latin1":
      case "binary":
        return t;
      case "utf8":
      case "utf-8":
      case void 0:
        return j(r).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return t * 2;
      case "hex":
        return t >>> 1;
      case "base64":
        return Ze(r).length;
      default:
        if (n) return j(r).length;
        e = ("" + e).toLowerCase(), n = !0;
    }
}
l.byteLength = We;
function Yt(r, e, t) {
  var n = !1;
  if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, e >>>= 0, t <= e))
    return "";
  for (r || (r = "utf8"); ; )
    switch (r) {
      case "hex":
        return Kt(this, e, t);
      case "utf8":
      case "utf-8":
        return Ge(this, e, t);
      case "ascii":
        return Gt(this, e, t);
      case "latin1":
      case "binary":
        return Qt(this, e, t);
      case "base64":
        return zt(this, e, t);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return Xt(this, e, t);
      default:
        if (n) throw new TypeError("Unknown encoding: " + r);
        r = (r + "").toLowerCase(), n = !0;
    }
}
l.prototype._isBuffer = !0;
function N(r, e, t) {
  var n = r[e];
  r[e] = r[t], r[t] = n;
}
l.prototype.swap16 = function() {
  var e = this.length;
  if (e % 2 !== 0)
    throw new RangeError("Buffer size must be a multiple of 16-bits");
  for (var t = 0; t < e; t += 2)
    N(this, t, t + 1);
  return this;
};
l.prototype.swap32 = function() {
  var e = this.length;
  if (e % 4 !== 0)
    throw new RangeError("Buffer size must be a multiple of 32-bits");
  for (var t = 0; t < e; t += 4)
    N(this, t, t + 3), N(this, t + 1, t + 2);
  return this;
};
l.prototype.swap64 = function() {
  var e = this.length;
  if (e % 8 !== 0)
    throw new RangeError("Buffer size must be a multiple of 64-bits");
  for (var t = 0; t < e; t += 8)
    N(this, t, t + 7), N(this, t + 1, t + 6), N(this, t + 2, t + 5), N(this, t + 3, t + 4);
  return this;
};
l.prototype.toString = function() {
  var e = this.length | 0;
  return e === 0 ? "" : arguments.length === 0 ? Ge(this, 0, e) : Yt.apply(this, arguments);
};
l.prototype.equals = function(e) {
  if (!T(e)) throw new TypeError("Argument must be a Buffer");
  return this === e ? !0 : l.compare(this, e) === 0;
};
l.prototype.inspect = function() {
  var e = "", t = Ot;
  return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">";
};
l.prototype.compare = function(e, t, n, i, o) {
  if (!T(e))
    throw new TypeError("Argument must be a Buffer");
  if (t === void 0 && (t = 0), n === void 0 && (n = e ? e.length : 0), i === void 0 && (i = 0), o === void 0 && (o = this.length), t < 0 || n > e.length || i < 0 || o > this.length)
    throw new RangeError("out of range index");
  if (i >= o && t >= n)
    return 0;
  if (i >= o)
    return -1;
  if (t >= n)
    return 1;
  if (t >>>= 0, n >>>= 0, i >>>= 0, o >>>= 0, this === e) return 0;
  for (var s = o - i, a = n - t, c = Math.min(s, a), f = this.slice(i, o), h = e.slice(t, n), u = 0; u < c; ++u)
    if (f[u] !== h[u]) {
      s = f[u], a = h[u];
      break;
    }
  return s < a ? -1 : a < s ? 1 : 0;
};
function ze(r, e, t, n, i) {
  if (r.length === 0) return -1;
  if (typeof t == "string" ? (n = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, isNaN(t) && (t = i ? 0 : r.length - 1), t < 0 && (t = r.length + t), t >= r.length) {
    if (i) return -1;
    t = r.length - 1;
  } else if (t < 0)
    if (i) t = 0;
    else return -1;
  if (typeof e == "string" && (e = l.from(e, n)), T(e))
    return e.length === 0 ? -1 : Pe(r, e, t, n, i);
  if (typeof e == "number")
    return e = e & 255, l.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(r, e, t) : Uint8Array.prototype.lastIndexOf.call(r, e, t) : Pe(r, [e], t, n, i);
  throw new TypeError("val must be string, number or Buffer");
}
function Pe(r, e, t, n, i) {
  var o = 1, s = r.length, a = e.length;
  if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
    if (r.length < 2 || e.length < 2)
      return -1;
    o = 2, s /= 2, a /= 2, t /= 2;
  }
  function c(m, d) {
    return o === 1 ? m[d] : m.readUInt16BE(d * o);
  }
  var f;
  if (i) {
    var h = -1;
    for (f = t; f < s; f++)
      if (c(r, f) === c(e, h === -1 ? 0 : f - h)) {
        if (h === -1 && (h = f), f - h + 1 === a) return h * o;
      } else
        h !== -1 && (f -= f - h), h = -1;
  } else
    for (t + a > s && (t = s - a), f = t; f >= 0; f--) {
      for (var u = !0, p = 0; p < a; p++)
        if (c(r, f + p) !== c(e, p)) {
          u = !1;
          break;
        }
      if (u) return f;
    }
  return -1;
}
l.prototype.includes = function(e, t, n) {
  return this.indexOf(e, t, n) !== -1;
};
l.prototype.indexOf = function(e, t, n) {
  return ze(this, e, t, n, !0);
};
l.prototype.lastIndexOf = function(e, t, n) {
  return ze(this, e, t, n, !1);
};
function Vt(r, e, t, n) {
  t = Number(t) || 0;
  var i = r.length - t;
  n ? (n = Number(n), n > i && (n = i)) : n = i;
  var o = e.length;
  if (o % 2 !== 0) throw new TypeError("Invalid hex string");
  n > o / 2 && (n = o / 2);
  for (var s = 0; s < n; ++s) {
    var a = parseInt(e.substr(s * 2, 2), 16);
    if (isNaN(a)) return s;
    r[t + s] = a;
  }
  return s;
}
function $t(r, e, t, n) {
  return Q(j(e, r.length - t), r, t, n);
}
function He(r, e, t, n) {
  return Q(nr(e), r, t, n);
}
function jt(r, e, t, n) {
  return He(r, e, t, n);
}
function Jt(r, e, t, n) {
  return Q(Ze(e), r, t, n);
}
function Wt(r, e, t, n) {
  return Q(ir(e, r.length - t), r, t, n);
}
l.prototype.write = function(e, t, n, i) {
  if (t === void 0)
    i = "utf8", n = this.length, t = 0;
  else if (n === void 0 && typeof t == "string")
    i = t, n = this.length, t = 0;
  else if (isFinite(t))
    t = t | 0, isFinite(n) ? (n = n | 0, i === void 0 && (i = "utf8")) : (i = n, n = void 0);
  else
    throw new Error(
      "Buffer.write(string, encoding, offset[, length]) is no longer supported"
    );
  var o = this.length - t;
  if ((n === void 0 || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length)
    throw new RangeError("Attempt to write outside buffer bounds");
  i || (i = "utf8");
  for (var s = !1; ; )
    switch (i) {
      case "hex":
        return Vt(this, e, t, n);
      case "utf8":
      case "utf-8":
        return $t(this, e, t, n);
      case "ascii":
        return He(this, e, t, n);
      case "latin1":
      case "binary":
        return jt(this, e, t, n);
      case "base64":
        return Jt(this, e, t, n);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return Wt(this, e, t, n);
      default:
        if (s) throw new TypeError("Unknown encoding: " + i);
        i = ("" + i).toLowerCase(), s = !0;
    }
};
l.prototype.toJSON = function() {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
function zt(r, e, t) {
  return e === 0 && t === r.length ? Te(r) : Te(r.slice(e, t));
}
function Ge(r, e, t) {
  t = Math.min(r.length, t);
  for (var n = [], i = e; i < t; ) {
    var o = r[i], s = null, a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
    if (i + a <= t) {
      var c, f, h, u;
      switch (a) {
        case 1:
          o < 128 && (s = o);
          break;
        case 2:
          c = r[i + 1], (c & 192) === 128 && (u = (o & 31) << 6 | c & 63, u > 127 && (s = u));
          break;
        case 3:
          c = r[i + 1], f = r[i + 2], (c & 192) === 128 && (f & 192) === 128 && (u = (o & 15) << 12 | (c & 63) << 6 | f & 63, u > 2047 && (u < 55296 || u > 57343) && (s = u));
          break;
        case 4:
          c = r[i + 1], f = r[i + 2], h = r[i + 3], (c & 192) === 128 && (f & 192) === 128 && (h & 192) === 128 && (u = (o & 15) << 18 | (c & 63) << 12 | (f & 63) << 6 | h & 63, u > 65535 && u < 1114112 && (s = u));
      }
    }
    s === null ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023), n.push(s), i += a;
  }
  return Ht(n);
}
var be = 4096;
function Ht(r) {
  var e = r.length;
  if (e <= be)
    return String.fromCharCode.apply(String, r);
  for (var t = "", n = 0; n < e; )
    t += String.fromCharCode.apply(
      String,
      r.slice(n, n += be)
    );
  return t;
}
function Gt(r, e, t) {
  var n = "";
  t = Math.min(r.length, t);
  for (var i = e; i < t; ++i)
    n += String.fromCharCode(r[i] & 127);
  return n;
}
function Qt(r, e, t) {
  var n = "";
  t = Math.min(r.length, t);
  for (var i = e; i < t; ++i)
    n += String.fromCharCode(r[i]);
  return n;
}
function Kt(r, e, t) {
  var n = r.length;
  (!e || e < 0) && (e = 0), (!t || t < 0 || t > n) && (t = n);
  for (var i = "", o = e; o < t; ++o)
    i += rr(r[o]);
  return i;
}
function Xt(r, e, t) {
  for (var n = r.slice(e, t), i = "", o = 0; o < n.length; o += 2)
    i += String.fromCharCode(n[o] + n[o + 1] * 256);
  return i;
}
l.prototype.slice = function(e, t) {
  var n = this.length;
  e = ~~e, t = t === void 0 ? n : ~~t, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < e && (t = e);
  var i;
  if (l.TYPED_ARRAY_SUPPORT)
    i = this.subarray(e, t), i.__proto__ = l.prototype;
  else {
    var o = t - e;
    i = new l(o, void 0);
    for (var s = 0; s < o; ++s)
      i[s] = this[s + e];
  }
  return i;
};
function g(r, e, t) {
  if (r % 1 !== 0 || r < 0) throw new RangeError("offset is not uint");
  if (r + e > t) throw new RangeError("Trying to access beyond buffer length");
}
l.prototype.readUIntLE = function(e, t, n) {
  e = e | 0, t = t | 0, n || g(e, t, this.length);
  for (var i = this[e], o = 1, s = 0; ++s < t && (o *= 256); )
    i += this[e + s] * o;
  return i;
};
l.prototype.readUIntBE = function(e, t, n) {
  e = e | 0, t = t | 0, n || g(e, t, this.length);
  for (var i = this[e + --t], o = 1; t > 0 && (o *= 256); )
    i += this[e + --t] * o;
  return i;
};
l.prototype.readUInt8 = function(e, t) {
  return t || g(e, 1, this.length), this[e];
};
l.prototype.readUInt16LE = function(e, t) {
  return t || g(e, 2, this.length), this[e] | this[e + 1] << 8;
};
l.prototype.readUInt16BE = function(e, t) {
  return t || g(e, 2, this.length), this[e] << 8 | this[e + 1];
};
l.prototype.readUInt32LE = function(e, t) {
  return t || g(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
};
l.prototype.readUInt32BE = function(e, t) {
  return t || g(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
};
l.prototype.readIntLE = function(e, t, n) {
  e = e | 0, t = t | 0, n || g(e, t, this.length);
  for (var i = this[e], o = 1, s = 0; ++s < t && (o *= 256); )
    i += this[e + s] * o;
  return o *= 128, i >= o && (i -= Math.pow(2, 8 * t)), i;
};
l.prototype.readIntBE = function(e, t, n) {
  e = e | 0, t = t | 0, n || g(e, t, this.length);
  for (var i = t, o = 1, s = this[e + --i]; i > 0 && (o *= 256); )
    s += this[e + --i] * o;
  return o *= 128, s >= o && (s -= Math.pow(2, 8 * t)), s;
};
l.prototype.readInt8 = function(e, t) {
  return t || g(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
};
l.prototype.readInt16LE = function(e, t) {
  t || g(e, 2, this.length);
  var n = this[e] | this[e + 1] << 8;
  return n & 32768 ? n | 4294901760 : n;
};
l.prototype.readInt16BE = function(e, t) {
  t || g(e, 2, this.length);
  var n = this[e + 1] | this[e] << 8;
  return n & 32768 ? n | 4294901760 : n;
};
l.prototype.readInt32LE = function(e, t) {
  return t || g(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
};
l.prototype.readInt32BE = function(e, t) {
  return t || g(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
};
l.prototype.readFloatLE = function(e, t) {
  return t || g(e, 4, this.length), z(this, e, !0, 23, 4);
};
l.prototype.readFloatBE = function(e, t) {
  return t || g(e, 4, this.length), z(this, e, !1, 23, 4);
};
l.prototype.readDoubleLE = function(e, t) {
  return t || g(e, 8, this.length), z(this, e, !0, 52, 8);
};
l.prototype.readDoubleBE = function(e, t) {
  return t || g(e, 8, this.length), z(this, e, !1, 52, 8);
};
function _(r, e, t, n, i, o) {
  if (!T(r)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
  if (t + n > r.length) throw new RangeError("Index out of range");
}
l.prototype.writeUIntLE = function(e, t, n, i) {
  if (e = +e, t = t | 0, n = n | 0, !i) {
    var o = Math.pow(2, 8 * n) - 1;
    _(this, e, t, n, o, 0);
  }
  var s = 1, a = 0;
  for (this[t] = e & 255; ++a < n && (s *= 256); )
    this[t + a] = e / s & 255;
  return t + n;
};
l.prototype.writeUIntBE = function(e, t, n, i) {
  if (e = +e, t = t | 0, n = n | 0, !i) {
    var o = Math.pow(2, 8 * n) - 1;
    _(this, e, t, n, o, 0);
  }
  var s = n - 1, a = 1;
  for (this[t + s] = e & 255; --s >= 0 && (a *= 256); )
    this[t + s] = e / a & 255;
  return t + n;
};
l.prototype.writeUInt8 = function(e, t, n) {
  return e = +e, t = t | 0, n || _(this, e, t, 1, 255, 0), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = e & 255, t + 1;
};
function H(r, e, t, n) {
  e < 0 && (e = 65535 + e + 1);
  for (var i = 0, o = Math.min(r.length - t, 2); i < o; ++i)
    r[t + i] = (e & 255 << 8 * (n ? i : 1 - i)) >>> (n ? i : 1 - i) * 8;
}
l.prototype.writeUInt16LE = function(e, t, n) {
  return e = +e, t = t | 0, n || _(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e & 255, this[t + 1] = e >>> 8) : H(this, e, t, !0), t + 2;
};
l.prototype.writeUInt16BE = function(e, t, n) {
  return e = +e, t = t | 0, n || _(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = e & 255) : H(this, e, t, !1), t + 2;
};
function G(r, e, t, n) {
  e < 0 && (e = 4294967295 + e + 1);
  for (var i = 0, o = Math.min(r.length - t, 4); i < o; ++i)
    r[t + i] = e >>> (n ? i : 3 - i) * 8 & 255;
}
l.prototype.writeUInt32LE = function(e, t, n) {
  return e = +e, t = t | 0, n || _(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255) : G(this, e, t, !0), t + 4;
};
l.prototype.writeUInt32BE = function(e, t, n) {
  return e = +e, t = t | 0, n || _(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255) : G(this, e, t, !1), t + 4;
};
l.prototype.writeIntLE = function(e, t, n, i) {
  if (e = +e, t = t | 0, !i) {
    var o = Math.pow(2, 8 * n - 1);
    _(this, e, t, n, o - 1, -o);
  }
  var s = 0, a = 1, c = 0;
  for (this[t] = e & 255; ++s < n && (a *= 256); )
    e < 0 && c === 0 && this[t + s - 1] !== 0 && (c = 1), this[t + s] = (e / a >> 0) - c & 255;
  return t + n;
};
l.prototype.writeIntBE = function(e, t, n, i) {
  if (e = +e, t = t | 0, !i) {
    var o = Math.pow(2, 8 * n - 1);
    _(this, e, t, n, o - 1, -o);
  }
  var s = n - 1, a = 1, c = 0;
  for (this[t + s] = e & 255; --s >= 0 && (a *= 256); )
    e < 0 && c === 0 && this[t + s + 1] !== 0 && (c = 1), this[t + s] = (e / a >> 0) - c & 255;
  return t + n;
};
l.prototype.writeInt8 = function(e, t, n) {
  return e = +e, t = t | 0, n || _(this, e, t, 1, 127, -128), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
};
l.prototype.writeInt16LE = function(e, t, n) {
  return e = +e, t = t | 0, n || _(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = e & 255, this[t + 1] = e >>> 8) : H(this, e, t, !0), t + 2;
};
l.prototype.writeInt16BE = function(e, t, n) {
  return e = +e, t = t | 0, n || _(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = e & 255) : H(this, e, t, !1), t + 2;
};
l.prototype.writeInt32LE = function(e, t, n) {
  return e = +e, t = t | 0, n || _(this, e, t, 4, 2147483647, -2147483648), l.TYPED_ARRAY_SUPPORT ? (this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : G(this, e, t, !0), t + 4;
};
l.prototype.writeInt32BE = function(e, t, n) {
  return e = +e, t = t | 0, n || _(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255) : G(this, e, t, !1), t + 4;
};
function Qe(r, e, t, n, i, o) {
  if (t + n > r.length) throw new RangeError("Index out of range");
  if (t < 0) throw new RangeError("Index out of range");
}
function Ke(r, e, t, n, i) {
  return i || Qe(r, e, t, 4), Ve(r, e, t, n, 23, 4), t + 4;
}
l.prototype.writeFloatLE = function(e, t, n) {
  return Ke(this, e, t, !0, n);
};
l.prototype.writeFloatBE = function(e, t, n) {
  return Ke(this, e, t, !1, n);
};
function Xe(r, e, t, n, i) {
  return i || Qe(r, e, t, 8), Ve(r, e, t, n, 52, 8), t + 8;
}
l.prototype.writeDoubleLE = function(e, t, n) {
  return Xe(this, e, t, !0, n);
};
l.prototype.writeDoubleBE = function(e, t, n) {
  return Xe(this, e, t, !1, n);
};
l.prototype.copy = function(e, t, n, i) {
  if (n || (n = 0), !i && i !== 0 && (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < n && (i = n), i === n || e.length === 0 || this.length === 0) return 0;
  if (t < 0)
    throw new RangeError("targetStart out of bounds");
  if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
  if (i < 0) throw new RangeError("sourceEnd out of bounds");
  i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
  var o = i - n, s;
  if (this === e && n < t && t < i)
    for (s = o - 1; s >= 0; --s)
      e[s + t] = this[s + n];
  else if (o < 1e3 || !l.TYPED_ARRAY_SUPPORT)
    for (s = 0; s < o; ++s)
      e[s + t] = this[s + n];
  else
    Uint8Array.prototype.set.call(
      e,
      this.subarray(n, n + o),
      t
    );
  return o;
};
l.prototype.fill = function(e, t, n, i) {
  if (typeof e == "string") {
    if (typeof t == "string" ? (i = t, t = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), e.length === 1) {
      var o = e.charCodeAt(0);
      o < 256 && (e = o);
    }
    if (i !== void 0 && typeof i != "string")
      throw new TypeError("encoding must be a string");
    if (typeof i == "string" && !l.isEncoding(i))
      throw new TypeError("Unknown encoding: " + i);
  } else typeof e == "number" && (e = e & 255);
  if (t < 0 || this.length < t || this.length < n)
    throw new RangeError("Out of range index");
  if (n <= t)
    return this;
  t = t >>> 0, n = n === void 0 ? this.length : n >>> 0, e || (e = 0);
  var s;
  if (typeof e == "number")
    for (s = t; s < n; ++s)
      this[s] = e;
  else {
    var a = T(e) ? e : j(new l(e, i).toString()), c = a.length;
    for (s = 0; s < n - t; ++s)
      this[s + t] = a[s % c];
  }
  return this;
};
var Zt = /[^+\/0-9A-Za-z-_]/g;
function er(r) {
  if (r = tr(r).replace(Zt, ""), r.length < 2) return "";
  for (; r.length % 4 !== 0; )
    r = r + "=";
  return r;
}
function tr(r) {
  return r.trim ? r.trim() : r.replace(/^\s+|\s+$/g, "");
}
function rr(r) {
  return r < 16 ? "0" + r.toString(16) : r.toString(16);
}
function j(r, e) {
  e = e || 1 / 0;
  for (var t, n = r.length, i = null, o = [], s = 0; s < n; ++s) {
    if (t = r.charCodeAt(s), t > 55295 && t < 57344) {
      if (!i) {
        if (t > 56319) {
          (e -= 3) > -1 && o.push(239, 191, 189);
          continue;
        } else if (s + 1 === n) {
          (e -= 3) > -1 && o.push(239, 191, 189);
          continue;
        }
        i = t;
        continue;
      }
      if (t < 56320) {
        (e -= 3) > -1 && o.push(239, 191, 189), i = t;
        continue;
      }
      t = (i - 55296 << 10 | t - 56320) + 65536;
    } else i && (e -= 3) > -1 && o.push(239, 191, 189);
    if (i = null, t < 128) {
      if ((e -= 1) < 0) break;
      o.push(t);
    } else if (t < 2048) {
      if ((e -= 2) < 0) break;
      o.push(
        t >> 6 | 192,
        t & 63 | 128
      );
    } else if (t < 65536) {
      if ((e -= 3) < 0) break;
      o.push(
        t >> 12 | 224,
        t >> 6 & 63 | 128,
        t & 63 | 128
      );
    } else if (t < 1114112) {
      if ((e -= 4) < 0) break;
      o.push(
        t >> 18 | 240,
        t >> 12 & 63 | 128,
        t >> 6 & 63 | 128,
        t & 63 | 128
      );
    } else
      throw new Error("Invalid code point");
  }
  return o;
}
function nr(r) {
  for (var e = [], t = 0; t < r.length; ++t)
    e.push(r.charCodeAt(t) & 255);
  return e;
}
function ir(r, e) {
  for (var t, n, i, o = [], s = 0; s < r.length && !((e -= 2) < 0); ++s)
    t = r.charCodeAt(s), n = t >> 8, i = t % 256, o.push(i), o.push(n);
  return o;
}
function Ze(r) {
  return Ut(er(r));
}
function Q(r, e, t, n) {
  for (var i = 0; i < n && !(i + t >= e.length || i >= r.length); ++i)
    e[i + t] = r[i];
  return i;
}
function or(r) {
  return r !== r;
}
function B(r) {
  return r != null && (!!r._isBuffer || et(r) || sr(r));
}
function et(r) {
  return !!r.constructor && typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r);
}
function sr(r) {
  return typeof r.readFloatLE == "function" && typeof r.slice == "function" && et(r.slice(0, 0));
}
const ar = 46, ur = /\\(\\)?/g, cr = RegExp(
  // Match anything that isn't a dot or bracket.
  `[^.[\\]]+|\\[(?:([^"'][^[]*)|(["'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))`,
  "g"
), lr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, fr = /^\w*$/, hr = function(r) {
  return Object.prototype.toString.call(r);
}, tt = function(r) {
  const e = typeof r;
  return e === "symbol" || e === "object" && r && hr(r) === "[object Symbol]";
}, pr = function(r, e) {
  if (Array.isArray(r))
    return !1;
  const t = typeof r;
  return t === "number" || t === "symbol" || t === "boolean" || !r || tt(r) ? !0 : fr.test(r) || !lr.test(r) || e != null && r in Object(e);
}, dr = function(r) {
  const e = [];
  return r.charCodeAt(0) === ar && e.push(""), r.replace(cr, function(t, n, i, o) {
    let s = t;
    i ? s = o.replace(ur, "$1") : n && (s = n.trim()), e.push(s);
  }), e;
}, mr = function(r, e) {
  return Array.isArray(r) ? r : pr(r, e) ? [r] : dr(r);
}, yr = function(r) {
  if (typeof r == "string" || tt(r)) return r;
  const e = `${r}`;
  return e == "0" && 1 / r == -INFINITY ? "-0" : e;
}, gr = function(r, e) {
  e = mr(e, r);
  let t = 0;
  const n = e.length;
  for (; r != null && t < n; )
    r = r[yr(e[t++])];
  return t && t === n ? r : void 0;
}, wr = function(r) {
  return typeof r == "object" && r !== null && !Array.isArray(r);
}, rt = function(r) {
  if (r == null)
    return [void 0, void 0];
  if (typeof r != "object")
    return [Error('Invalid option "columns": expect an array or an object')];
  if (Array.isArray(r)) {
    const e = [];
    for (const t of r)
      if (typeof t == "string")
        e.push({
          key: t,
          header: t
        });
      else if (typeof t == "object" && t !== null && !Array.isArray(t)) {
        if (!t.key)
          return [
            Error('Invalid column definition: property "key" is required')
          ];
        t.header === void 0 && (t.header = t.key), e.push(t);
      } else
        return [
          Error("Invalid column definition: expect a string or an object")
        ];
    r = e;
  } else {
    const e = [];
    for (const t in r)
      e.push({
        key: t,
        header: r[t]
      });
    r = e;
  }
  return [void 0, r];
};
class k extends Error {
  constructor(e, t, ...n) {
    Array.isArray(t) && (t = t.join(" ")), super(t), Error.captureStackTrace !== void 0 && Error.captureStackTrace(this, k), this.code = e;
    for (const i of n)
      for (const o in i) {
        const s = i[o];
        this[o] = B(s) ? s.toString() : s == null ? s : JSON.parse(JSON.stringify(s));
      }
  }
}
const _r = function(r) {
  return r.replace(/([A-Z])/g, function(e, t) {
    return "_" + t.toLowerCase();
  });
}, nt = function(r) {
  const e = {};
  for (const i in r)
    e[_r(i)] = r[i];
  if (e.bom === void 0 || e.bom === null || e.bom === !1)
    e.bom = !1;
  else if (e.bom !== !0)
    return [
      new k("CSV_OPTION_BOOLEAN_INVALID_TYPE", [
        "option `bom` is optional and must be a boolean value,",
        `got ${JSON.stringify(e.bom)}`
      ])
    ];
  if (e.delimiter === void 0 || e.delimiter === null)
    e.delimiter = ",";
  else if (B(e.delimiter))
    e.delimiter = e.delimiter.toString();
  else if (typeof e.delimiter != "string")
    return [
      new k("CSV_OPTION_DELIMITER_INVALID_TYPE", [
        "option `delimiter` must be a buffer or a string,",
        `got ${JSON.stringify(e.delimiter)}`
      ])
    ];
  if (e.quote === void 0 || e.quote === null)
    e.quote = '"';
  else if (e.quote === !0)
    e.quote = '"';
  else if (e.quote === !1)
    e.quote = "";
  else if (B(e.quote))
    e.quote = e.quote.toString();
  else if (typeof e.quote != "string")
    return [
      new k("CSV_OPTION_QUOTE_INVALID_TYPE", [
        "option `quote` must be a boolean, a buffer or a string,",
        `got ${JSON.stringify(e.quote)}`
      ])
    ];
  if ((e.quoted === void 0 || e.quoted === null) && (e.quoted = !1), e.escape_formulas === void 0 || e.escape_formulas === null)
    e.escape_formulas = !1;
  else if (typeof e.escape_formulas != "boolean")
    return [
      new k("CSV_OPTION_ESCAPE_FORMULAS_INVALID_TYPE", [
        "option `escape_formulas` must be a boolean,",
        `got ${JSON.stringify(e.escape_formulas)}`
      ])
    ];
  if ((e.quoted_empty === void 0 || e.quoted_empty === null) && (e.quoted_empty = void 0), e.quoted_match === void 0 || e.quoted_match === null || e.quoted_match === !1 ? e.quoted_match = null : Array.isArray(e.quoted_match) || (e.quoted_match = [e.quoted_match]), e.quoted_match)
    for (const i of e.quoted_match) {
      const o = typeof i == "string", s = i instanceof RegExp;
      if (!o && !s)
        return [
          Error(
            `Invalid Option: quoted_match must be a string or a regex, got ${JSON.stringify(i)}`
          )
        ];
    }
  if ((e.quoted_string === void 0 || e.quoted_string === null) && (e.quoted_string = !1), (e.eof === void 0 || e.eof === null) && (e.eof = !0), e.escape === void 0 || e.escape === null)
    e.escape = '"';
  else if (B(e.escape))
    e.escape = e.escape.toString();
  else if (typeof e.escape != "string")
    return [
      Error(
        `Invalid Option: escape must be a buffer or a string, got ${JSON.stringify(e.escape)}`
      )
    ];
  if (e.escape.length > 1)
    return [
      Error(
        `Invalid Option: escape must be one character, got ${e.escape.length} characters`
      )
    ];
  (e.header === void 0 || e.header === null) && (e.header = !1);
  const [t, n] = rt(e.columns);
  if (t !== void 0) return [t];
  if (e.columns = n, (e.quoted === void 0 || e.quoted === null) && (e.quoted = !1), (e.cast === void 0 || e.cast === null) && (e.cast = {}), (e.cast.bigint === void 0 || e.cast.bigint === null) && (e.cast.bigint = (i) => "" + i), (e.cast.boolean === void 0 || e.cast.boolean === null) && (e.cast.boolean = (i) => i ? "1" : ""), (e.cast.date === void 0 || e.cast.date === null) && (e.cast.date = (i) => "" + i.getTime()), (e.cast.number === void 0 || e.cast.number === null) && (e.cast.number = (i) => "" + i), (e.cast.object === void 0 || e.cast.object === null) && (e.cast.object = (i) => JSON.stringify(i)), (e.cast.string === void 0 || e.cast.string === null) && (e.cast.string = function(i) {
    return i;
  }), e.on_record !== void 0 && typeof e.on_record != "function")
    return [Error('Invalid Option: "on_record" must be a function.')];
  if (e.record_delimiter === void 0 || e.record_delimiter === null)
    e.record_delimiter = `
`;
  else if (B(e.record_delimiter))
    e.record_delimiter = e.record_delimiter.toString();
  else if (typeof e.record_delimiter != "string")
    return [
      Error(
        `Invalid Option: record_delimiter must be a buffer or a string, got ${JSON.stringify(e.record_delimiter)}`
      )
    ];
  switch (e.record_delimiter) {
    case "unix":
      e.record_delimiter = `
`;
      break;
    case "mac":
      e.record_delimiter = "\r";
      break;
    case "windows":
      e.record_delimiter = `\r
`;
      break;
    case "ascii":
      e.record_delimiter = "";
      break;
    case "unicode":
      e.record_delimiter = "\u2028";
      break;
  }
  return [void 0, e];
}, xr = l.from([239, 187, 191]), Sr = function(r, e, t) {
  return {
    options: r,
    state: e,
    info: t,
    __transform: function(n, i) {
      if (!Array.isArray(n) && typeof n != "object")
        return Error(
          `Invalid Record: expect an array or an object, got ${JSON.stringify(n)}`
        );
      if (this.info.records === 0) {
        if (Array.isArray(n)) {
          if (this.options.header === !0 && this.options.columns === void 0)
            return Error(
              "Undiscoverable Columns: header option requires column option or object records"
            );
        } else if (this.options.columns === void 0) {
          const [a, c] = rt(Object.keys(n));
          if (a) return;
          this.options.columns = c;
        }
      }
      if (this.info.records === 0) {
        this.bom(i);
        const a = this.headers(i);
        if (a) return a;
      }
      try {
        this.options.on_record && this.options.on_record(n, this.info.records);
      } catch (a) {
        return a;
      }
      let o, s;
      if (this.options.eof) {
        if ([o, s] = this.stringify(n), o) return o;
        if (s === void 0)
          return;
        s = s + this.options.record_delimiter;
      } else {
        if ([o, s] = this.stringify(n), o) return o;
        if (s === void 0)
          return;
        (this.options.header || this.info.records) && (s = this.options.record_delimiter + s);
      }
      this.info.records++, i(s);
    },
    stringify: function(n, i = !1) {
      if (typeof n != "object")
        return [void 0, n];
      const { columns: o } = this.options, s = [];
      if (Array.isArray(n)) {
        o && n.splice(o.length);
        for (let c = 0; c < n.length; c++) {
          const f = n[c], [h, u] = this.__cast(f, {
            index: c,
            column: c,
            records: this.info.records,
            header: i
          });
          if (h) return [h];
          s[c] = [u, f];
        }
      } else
        for (let c = 0; c < o.length; c++) {
          const f = gr(n, o[c].key), [h, u] = this.__cast(f, {
            index: c,
            column: o[c].key,
            records: this.info.records,
            header: i
          });
          if (h) return [h];
          s[c] = [u, f];
        }
      let a = "";
      for (let c = 0; c < s.length; c++) {
        let f, h, [u, p] = s[c];
        if (typeof u == "string")
          f = this.options;
        else if (wr(u)) {
          if (f = u, u = f.value, delete f.value, typeof u != "string" && u !== void 0 && u !== null && h)
            return [
              Error(
                `Invalid Casting Value: returned value must return a string, null or undefined, got ${JSON.stringify(u)}`
              )
            ];
          if (f = { ...this.options, ...f }, [h, f] = nt(f), h !== void 0)
            return [h];
        } else if (u == null)
          f = this.options;
        else
          return [
            Error(
              `Invalid Casting Value: returned value must return a string, an object, null or undefined, got ${JSON.stringify(u)}`
            )
          ];
        const {
          delimiter: m,
          escape: d,
          quote: y,
          quoted: P,
          quoted_empty: S,
          quoted_string: E,
          quoted_match: w,
          record_delimiter: ut,
          escape_formulas: ct
        } = f;
        if (u === "" && p === "") {
          let U = w && w.filter((O) => typeof O == "string" ? u.indexOf(O) !== -1 : O.test(u));
          U = U && U.length > 0, (U || S === !0 || E === !0 && S !== !1) === !0 && (u = y + u + y), a += u;
        } else if (u) {
          if (typeof u != "string")
            return [
              Error(
                `Formatter must return a string, null or undefined, got ${JSON.stringify(u)}`
              )
            ];
          const U = m.length && u.indexOf(m) >= 0, K = y !== "" && u.indexOf(y) >= 0, O = u.indexOf(d) >= 0 && d !== y, lt = u.indexOf(ut) >= 0, ft = E && typeof p == "string";
          let Y = w && w.filter((F) => typeof F == "string" ? u.indexOf(F) !== -1 : F.test(u));
          if (Y = Y && Y.length > 0, ct)
            switch (u[0]) {
              case "=":
              case "+":
              case "-":
              case "@":
              case "	":
              case "\r":
              case "＝":
              // Unicode '='
              case "＋":
              // Unicode '+'
              case "－":
              // Unicode '-'
              case "＠":
                u = `'${u}`;
                break;
            }
          const ye = K === !0 || U || lt || P || ft || Y;
          if (ye === !0 && O === !0) {
            const F = d === "\\" ? new RegExp(d + d, "g") : new RegExp(d, "g");
            u = u.replace(F, d + d);
          }
          if (K === !0) {
            const F = new RegExp(y, "g");
            u = u.replace(F, d + y);
          }
          ye === !0 && (u = y + u + y), a += u;
        } else (S === !0 || p === "" && E === !0 && S !== !1) && (a += y + y);
        c !== s.length - 1 && (a += m);
      }
      return [void 0, a];
    },
    bom: function(n) {
      this.options.bom === !0 && n(xr);
    },
    headers: function(n) {
      if (this.options.header === !1 || this.options.columns === void 0)
        return;
      let i, o = this.options.columns.map((s) => s.header);
      if (this.options.eof ? ([i, o] = this.stringify(o, !0), o += this.options.record_delimiter) : [i, o] = this.stringify(o), i) return i;
      n(o);
    },
    __cast: function(n, i) {
      const o = typeof n;
      try {
        return o === "string" ? [void 0, this.options.cast.string(n, i)] : o === "bigint" ? [void 0, this.options.cast.bigint(n, i)] : o === "number" ? [void 0, this.options.cast.number(n, i)] : o === "boolean" ? [void 0, this.options.cast.boolean(n, i)] : n instanceof Date ? [void 0, this.options.cast.date(n, i)] : o === "object" && n !== null ? [void 0, this.options.cast.object(n, i)] : [void 0, n, n];
      } catch (s) {
        return [s];
      }
    }
  };
}, Er = function(r, e = {}) {
  const t = [], [n, i] = nt(e);
  if (n !== void 0) throw n;
  const a = Sr(i, {
    stop: !1
  }, {
    records: 0
  });
  for (const c of r) {
    const f = a.__transform(c, function(h) {
      t.push(h);
    });
    if (f !== void 0) throw f;
  }
  if (t.length === 0) {
    a.bom((f) => {
      t.push(f);
    });
    const c = a.headers((f) => {
      t.push(f);
    });
    if (c !== void 0) throw c;
  }
  return t.join("");
};
function Ce(r, e) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { ...r, ...e?.detail }
  });
}
const Ar = 1e3 * 60, Ie = "langChanged";
function Tr(r, e, t) {
  return Object.entries(le(e || {})).reduce((n, [i, o]) => n.replace(new RegExp(`{{[  ]*${i}[  ]*}}`, "gm"), String(le(o))), r);
}
function Pr(r, e) {
  const t = r.split(".");
  let n = e.strings;
  for (; n != null && t.length > 0; )
    n = n[t.shift()];
  return n != null ? n.toString() : null;
}
function le(r) {
  return typeof r == "function" ? r() : r;
}
const br = () => ({
  loader: () => Promise.resolve({}),
  empty: (r) => `[${r}]`,
  lookup: Pr,
  interpolate: Tr,
  translationCache: {}
});
let Cr = br();
function Ir(r, e) {
  const t = (n) => r(n.detail);
  return window.addEventListener(Ie, t, e), () => window.removeEventListener(Ie, t);
}
function I(r, e, t = Cr) {
  let n = t.translationCache[r] || (t.translationCache[r] = t.lookup(r, t) || t.empty(r, t));
  return e = e != null ? le(e) : null, e != null ? t.interpolate(n, e, t) : n;
}
function it(r) {
  return r instanceof J ? r.startNode.isConnected : r instanceof wt ? r.committer.element.isConnected : r.element.isConnected;
}
function Rr(r) {
  for (const [e] of r)
    it(e) || r.delete(e);
}
function Fr(r) {
  "requestIdleCallback" in window ? window.requestIdleCallback(r) : setTimeout(r);
}
function Nr(r, e) {
  setInterval(() => Fr(() => Rr(r)), e);
}
const ot = /* @__PURE__ */ new Map();
function Ur() {
  Ir((r) => {
    for (const [e, t] of ot)
      it(e) && vr(e, t, r);
  });
}
Ur();
Nr(ot, Ar);
function vr(r, e, t) {
  const n = e(t);
  r.value !== n && (r.setValue(n), r.commit());
}
const Br = "IEC_60870_5_104", kr = `Private[type="${Br}"]`;
function Or(r) {
  const e = [], t = [];
  return r.querySelectorAll(`${kr} > Address`).forEach((i) => {
    const o = Dr(i, r);
    o.error ? t.push(o.error) : e.push(o.signal);
  }), { signals: e, errors: t };
}
function Dr(r, e) {
  const t = r.getAttribute("ti"), n = r.getAttribute("ioa");
  if (t === null || n === null || n.length < 4)
    return { signal: null, error: I("protocol104.export.errors.tiOrIoaInvalid", { ti: t ?? "", ioa: n ?? "" }) };
  const { signalNumber: i, bayName: o } = qr(n), s = Mr(t);
  if (s === 2)
    return { signal: null, error: I("protocol104.export.errors.unknownSignalType", { ti: t ?? "", ioa: n ?? "" }) };
  const a = s === 0;
  r.parentElement;
  const c = r.closest("DOI");
  if (!c)
    return { signal: null, error: I("protocol104.export.errors.noDoi", { ioa: n ?? "" }) };
  const f = c.getAttribute("desc"), h = `:root > Substation > VoltageLevel > Bay[name="${o}"]`, u = e.querySelector(h);
  if (!u)
    return { signal: null, error: I("protocol104.export.errors.noBay", { bayName: o, ioa: n ?? "" }) };
  const p = u.closest("VoltageLevel");
  if (!p)
    return { signal: null, error: I("protocol104.export.errors.noVoltageLevel", { bayName: o, ioa: n ?? "" }) };
  const m = p.getAttribute("name"), d = p.closest("Substation");
  return d ? {
    signal: {
      name: `${d.getAttribute("name")}${m}${o}${f}`,
      signalNumber: i,
      isMonitorSignal: a,
      ti: t,
      ioa: n
    }
  } : { signal: null, error: I("protocol104.export.errors.noSubstation", { voltageLevelName: m ?? "", ioa: n ?? "" }) };
}
function Mr(r) {
  const e = parseInt(r);
  return isNaN(e) ? 2 : e >= 1 && e <= 21 || e >= 30 && e <= 40 ? 0 : e >= 45 && e <= 51 || e >= 58 && e <= 64 ? 1 : 2;
}
function qr(r) {
  const e = r.slice(-4), t = `V${r.slice(0, -4)}`;
  return { signalNumber: e, bayName: t };
}
var Lr = Object.defineProperty, st = (r, e, t, n) => {
  for (var i = void 0, o = r.length - 1, s; o >= 0; o--)
    (s = r[o]) && (i = s(e, t, i) || i);
  return i && Lr(e, t, i), i;
};
class at extends W {
  constructor() {
    super(...arguments), this.csvHeaders = [
      "Id",
      "Name",
      "Signal Number",
      "mIOA",
      "cIOA"
    ];
  }
  async run() {
    const { signals: e, errors: t } = Or(this.doc);
    if (t.forEach((s) => this.logWarning(s)), e.length === 0) {
      this.dispatchEvent(Ce({
        kind: "info",
        title: I("protocol104.export.noSignalsFound")
      }));
      return;
    }
    const n = this.generateCsvLines(e), i = Er(n, {
      header: !0,
      columns: this.csvHeaders
    }), o = new Blob([i], {
      type: "text/csv"
    });
    this.downloadCsv(o);
  }
  logWarning(e) {
    this.dispatchEvent(Ce({
      kind: "warning",
      title: I("protocol104.export.invalidSignalWarning"),
      message: e
    }));
  }
  generateCsvLines(e) {
    const t = [];
    for (const n of e) {
      const i = [
        "",
        n.name ?? "",
        n.signalNumber ?? ""
      ];
      n.isMonitorSignal ? i.push(n.ioa ?? "", "") : i.push("", n.ioa ?? ""), t.push(i);
    }
    return t;
  }
  downloadCsv(e) {
    const t = document.createElement("a");
    t.download = this.docName + "-104-signals.csv", t.href = URL.createObjectURL(e), t.dataset.downloadurl = ["text/csv", t.download, t.href].join(":"), t.style.display = "none", document.body.appendChild(t), t.click(), document.body.removeChild(t), URL.revokeObjectURL(t.href);
  }
}
st([
  qe({ attribute: !1 })
], at.prototype, "doc");
st([
  qe()
], at.prototype, "docName");
export {
  at as default
};
