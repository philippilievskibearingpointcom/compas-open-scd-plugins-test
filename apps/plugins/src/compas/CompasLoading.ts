import {customElement, html, LitElement, TemplateResult} from "lit-element";
import {get} from "lit-translate";

import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item';

@customElement('compas-loading')
export class CompasLoadingElement extends LitElement {
  render(): TemplateResult {
    return html`
      <mwc-list>
        <mwc-list-item><i>${get("compas.loading")}</i></mwc-list-item>
      </mwc-list>
    `
  }
}
