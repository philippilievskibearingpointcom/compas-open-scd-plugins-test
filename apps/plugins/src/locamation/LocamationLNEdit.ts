import {css, customElement, html, LitElement, property, TemplateResult} from 'lit-element';
import {get} from "lit-translate";

import { patterns } from "@openscd/open-scd/src/foundation.js";
import { ComplexAction } from "@openscd/core/foundation/deprecated/editor.js";
import {
  checkValidity,
  Wizard,
  WizardAction,
  WizardInputElement,
  wizardInputSelector
} from '@openscd/open-scd/src/foundation.js';
import {Nsdoc} from "@openscd/open-scd/src/foundation/nsdoc.js";

import '@openscd/open-scd/src/wizard-textfield.js';

import {
  createEditorAction,
  getInputFieldValue,
  getPrivate,
  getPrivateTextValue,
  hasPrivateElement,
  iedHeader,
  inputFieldChanged,
  lDeviceHeader,
  lnHeader,
} from "./foundation.js";

@customElement('locamation-ln-edit')
export class LocamationVMUEditElement extends LitElement {
  @property({type: Element})
  logicalNode!: Element;
  @property()
  nsdoc!: Nsdoc;

  get inputs(): WizardInputElement[] {
    return Array.from(this.shadowRoot!.querySelectorAll(wizardInputSelector));
  }

  save(): WizardAction[] {
    const locamationPrivate = getPrivate(this.logicalNode);

    if (!this.fieldsChanged(locamationPrivate, this.inputs) || !this.checkValidityInputs(this.inputs)) {
      return [];
    }

    const complexAction: ComplexAction = {
      actions: [],
      title: get('locamation.vmu.updateAction', {lnName: lnHeader(this.logicalNode, this.nsdoc)}),
    };

    complexAction.actions.push(...createEditorAction(locamationPrivate, 'IDENTIFIER', getInputFieldValue(this.inputs, 'identifier')));
    if (hasPrivateElement(this.logicalNode, 'SUM')) {
      complexAction.actions.push(...createEditorAction(locamationPrivate, 'SUM', getInputFieldValue(this.inputs, 'sum')));
    } else {
      complexAction.actions.push(...createEditorAction(locamationPrivate, 'CHANNEL', getInputFieldValue(this.inputs, 'channel')));
    }
    complexAction.actions.push(...createEditorAction(locamationPrivate, 'TRANSFORM-PRIMARY', getInputFieldValue(this.inputs, 'transformPrimary')));
    complexAction.actions.push(...createEditorAction(locamationPrivate, 'TRANSFORM-SECONDARY', getInputFieldValue(this.inputs, 'transformSecondary')));

    return complexAction.actions.length ? [complexAction] : [];
  }

  private fieldsChanged(locamationPrivate: Element | null, inputs: WizardInputElement[]): boolean {
    const oldIdentifier= getPrivateTextValue(locamationPrivate, 'IDENTIFIER');
    const oldChannel = getPrivateTextValue(locamationPrivate, 'CHANNEL');
    const oldSum = getPrivateTextValue(locamationPrivate, 'SUM');
    const oldTransformPrimary = getPrivateTextValue(locamationPrivate, 'TRANSFORM-PRIMARY');
    const oldTransformSecondary = getPrivateTextValue(locamationPrivate, 'TRANSFORM-SECONDARY');

    return inputFieldChanged(inputs, 'identifier', oldIdentifier)
      || (hasPrivateElement(locamationPrivate, 'SUM') ? inputFieldChanged(inputs, 'sum', oldSum) : false)
      || (hasPrivateElement(locamationPrivate, 'CHANNEL') ? inputFieldChanged(inputs, 'channel', oldChannel) : false)
      || inputFieldChanged(inputs, 'transformPrimary', oldTransformPrimary)
      || inputFieldChanged(inputs, 'transformSecondary', oldTransformSecondary);
  }

  private checkValidityInputs(inputs: WizardInputElement[]): boolean {
    return Array.from(inputs).every(checkValidity);
  }

  render(): TemplateResult {
    const lDevice = this.logicalNode.closest('LDevice')!;
    const ied = lDevice.closest('IED')!;
    const locamationPrivate = getPrivate(this.logicalNode);

    // Depending on the value of the class the pattern for the CIM or VIM for SUM/CHANNEL will change.
    let channelPattern = '[0-5]';
    let sumPattern = '[0-5],[0-5],[0-5]';
    if (this.logicalNode.getAttribute('lnClass') === 'TVTR') {
      channelPattern = '[0-2]';
      sumPattern = '[0-2],[0-2],[0-2]';
    }

    return html `
      <wizard-textfield label="${get('locamation.vmu.ied.name')}"
                        .maybeValue=${iedHeader(ied)}
                        disabled>
      </wizard-textfield>
      <wizard-textfield label="${get('locamation.vmu.ldevice.name')}"
                        .maybeValue=${lDeviceHeader(lDevice)}
                        disabled>
      </wizard-textfield>
      <wizard-textfield label="${get('locamation.vmu.ln.name')}"
                        .maybeValue=${lnHeader(this.logicalNode, this.nsdoc)}
                        disabled>
      </wizard-textfield>

      <wizard-textfield label="${get('locamation.vmu.version')}"
                        .maybeValue=${getPrivateTextValue(locamationPrivate, 'VERSION')}
                        disabled>
      </wizard-textfield>

      <wizard-textfield id="identifier"
                        label="${get('locamation.vmu.identifier')}"
                        .maybeValue=${getPrivateTextValue(locamationPrivate, 'IDENTIFIER')}
                        helper="${get('locamation.vmu.identifierHelper')}"
                        placeholder="134.12.213"
                        pattern="^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\\.(?!$)|$)){3}$"
                        required
                        dialogInitialFocus>
      </wizard-textfield>

      ${hasPrivateElement(locamationPrivate, 'SUM') ?
        html `<wizard-textfield id="sum"
                                label="${get('locamation.vmu.sum')}"
                                .maybeValue=${getPrivateTextValue(locamationPrivate, 'SUM')}
                                helper="${get('locamation.vmu.sumHelper')}"
                                placeholder="0,1,2"
                                pattern="${sumPattern}"
                                required>
              </wizard-textfield>` : html ``
      }
      ${hasPrivateElement(locamationPrivate, 'CHANNEL') ?
        html `<wizard-textfield id="channel"
                                label="${get('locamation.vmu.channel')}"
                                .maybeValue=${getPrivateTextValue(locamationPrivate, 'CHANNEL')}
                                helper="${get('locamation.vmu.channelHelper')}"
                                pattern="${channelPattern}"
                                required>
        </wizard-textfield>` : html ``
      }

      <wizard-textfield id="transformPrimary"
                        label="${get('locamation.vmu.transformPrimary')}"
                        .maybeValue=${getPrivateTextValue(locamationPrivate, 'TRANSFORM-PRIMARY')}
                        helper="${get('locamation.vmu.transformPrimaryHelper')}"
                        pattern="${patterns.unsigned}"
                        required>
      </wizard-textfield>
      <wizard-textfield id="transformSecondary"
                        label="${get('locamation.vmu.transformSecondary')}"
                        .maybeValue=${getPrivateTextValue(locamationPrivate, 'TRANSFORM-SECONDARY')}
                        helper="${get('locamation.vmu.transformSecondaryHelper')}"
                        pattern="${patterns.unsigned}"
                        required>
      </wizard-textfield>
    `;
  }

  static styles = css`
    :host {
      width: 20vw;
    }

    * {
      display: block;
      margin-top: 16px;
    }
  `
}

export function locamationLNEditWizard(logicalNode: Element, nsdoc: Nsdoc): Wizard {
  function save() {
    return function (inputs: WizardInputElement[], wizard: Element): WizardAction[] {
      const locamationVMUEditElement = <LocamationVMUEditElement>wizard.shadowRoot!.querySelector('locamation-ln-edit')
      return locamationVMUEditElement.save();
    };
  }

  return [
    {
      title: get('locamation.vmu.ln.editTitle'),
      primary: {
        icon: 'save',
        label: get('save'),
        action: save(),
      },
      content: [
        html`<locamation-ln-edit .logicalNode="${logicalNode}" .nsdoc="${nsdoc}"></locamation-ln-edit>`,
      ],
    },
  ];
}

