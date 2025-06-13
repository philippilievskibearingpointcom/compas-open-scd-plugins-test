import {
  css,
  html,
  LitElement,
  property,
  query,
  TemplateResult,
} from 'lit-element';
import { get } from 'lit-translate';

import '@material/mwc-button';
import '@material/mwc-dialog';
import { Dialog } from '@material/mwc-dialog';

import { newPendingStateEvent } from '@openscd/core/foundation/deprecated/waiter.js';

import CompasSaveElement from '../compas/CompasSave.js';

import '../compas/CompasSave.js';

import '@openscd/compas-open-scd/src/translations/i18n-config';

export default class CompasSaveMenuPlugin extends LitElement {
  @property()
  doc!: XMLDocument;
  @property()
  docName!: string;
  @property()
  docId?: string;
  @property({ type: Number })
  editCount = -1;

  @query('mwc-dialog#compas-save-dlg')
  dialog!: Dialog;

  @query('compas-save')
  compasSaveElement!: CompasSaveElement;

  async run(): Promise<void> {
    await this.compasSaveElement.requestUpdate();
    this.dialog.show();
  }

  render(): TemplateResult {
    return html`<mwc-dialog
      id="compas-save-dlg"
      heading="${get('compas.save.saveTitle')}"
    >
      ${!this.doc || !this.docName
        ? html`<compas-loading></compas-loading>`
        : html`
            <compas-save
              .doc="${this.doc}"
              .docName="${this.docName}"
              .docId="${this.docId}"
              .editCount=${this.editCount}
              @doc-saved=${() => {
                this.dialog.close();
              }}
            >
            </compas-save>
            <mwc-button
              slot="primaryAction"
              icon="save"
              trailingIcon
              label="${get('save')}"
              @click=${() => {
                if (this.compasSaveElement.valid()) {
                  this.dispatchEvent(
                    newPendingStateEvent(this.compasSaveElement.saveToCompas())
                  );
                }
              }}
            ></mwc-button>
            <mwc-button
              slot="secondaryAction"
              icon=""
              label="${get('close')}"
              dialogAction="close"
              style="--mdc-theme-primary: var(--mdc-theme-error)"
            >
            </mwc-button>
          `}
    </mwc-dialog>`;
  }

  static styles = css`
    mwc-dialog {
      --mdc-dialog-min-width: 23vw;
      --mdc-dialog-max-width: 92vw;
    }
  `;
}
