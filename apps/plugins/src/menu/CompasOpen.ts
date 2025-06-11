import { css, html, LitElement, query, TemplateResult } from 'lit-element';
import { get } from 'lit-translate';

import '@material/mwc-button';
import '@material/mwc-dialog';
import { Dialog } from '@material/mwc-dialog';

import {
  newLogEvent,
} from '@openscd/core/foundation/deprecated/history.js';
import { newOpenDocEvent } from "@openscd/core/foundation/deprecated/open-event.js";
import { newPendingStateEvent } from '@openscd/core/foundation/deprecated/waiter.js';

import CompasOpenElement, { DocRetrievedEvent } from '../compas/CompasOpen.js';
import { updateDocumentInOpenSCD } from '../compas/foundation.js';

import '../compas/CompasOpen.js';
import { compasOpenMenuEvent } from '../addons/CompasLayout.js';

import '@openscd/compas-open-scd/src/translations/i18n-config';

export default class CompasOpenMenuPlugin extends LitElement {
  @query('mwc-dialog#compas-open-dlg')
  dialog!: Dialog;

  @query('compas-open')
  compasOpenElement!: CompasOpenElement;

  async run(): Promise<void> {
    this.compasOpenElement.selectedType = undefined;
    await this.compasOpenElement.requestUpdate();

    // TODO: Fix for dialog, the menu has to be open to see the dialog
    this.dispatchEvent(compasOpenMenuEvent());

    this.dialog.show();
  }

  private async openDoc(event: DocRetrievedEvent): Promise<void> {
    if (event.detail.localFile) {
      this.dispatchEvent(newLogEvent({ kind: 'reset' }));
      this.dispatchEvent(
        newOpenDocEvent(event.detail.doc, event.detail.docName!, {
          detail: { docId: undefined },
        })
      );
    } else {
      updateDocumentInOpenSCD(this, event.detail.doc, event.detail.docName);
    }
    this.dialog.close();
  }

  render(): TemplateResult {
    return html`<mwc-dialog
      id="compas-open-dlg"
      heading="${get('compas.open.title')}"
    >
      <compas-open
        @doc-retrieved=${(event: DocRetrievedEvent) => {
          this.dispatchEvent(newPendingStateEvent(this.openDoc(event)));
        }}
      >
      </compas-open>
      <mwc-button
        slot="secondaryAction"
        icon=""
        label="${get('close')}"
        dialogAction="close"
        style="--mdc-theme-primary: var(--mdc-theme-error)"
      >
      </mwc-button>
    </mwc-dialog>`;
  }

  static styles = css`
    mwc-dialog {
      --mdc-dialog-min-width: 23vw;
      --mdc-dialog-max-width: 92vw;
    }
  `;
}
