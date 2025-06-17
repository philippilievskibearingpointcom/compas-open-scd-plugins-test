import { html, query, TemplateResult } from 'lit-element';
import { get } from 'lit-translate';

import { DocRetrievedEvent } from '../compas/CompasOpen.js';
import ImportingIedPlugin from '@openscd/plugins/src/menu/ImportIEDs.js';

import '../compas/CompasOpen.js';
import { Dialog } from '@material/mwc-dialog';

import '@openscd/compas-open-scd/src/translations/i18n-config';

export default class CompasImportIEDSMenuPlugin extends ImportingIedPlugin {
  doc!: XMLDocument;
  parent!: HTMLElement;

  @query('mwc-dialog#compas-import-ieds-dlg')
  compasOpen!: Dialog;

  renderInput(): TemplateResult {
    return html`<mwc-dialog
      id="compas-import-ieds-dlg"
      heading="${get('compas.open.title')}"
    >
      <compas-open
        @doc-retrieved=${(event: DocRetrievedEvent) => {
          this.onLoadCompasFiles(event);
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

  protected onLoadCompasFiles(event: DocRetrievedEvent): void {
    this.prepareImport(event.detail.doc, event.detail.docName!);
    this.compasOpen.close();
  }

  async run(): Promise<void> {
    this.compasOpen.show();
  }
}
