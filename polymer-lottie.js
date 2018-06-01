import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `polymer-lottie`
 * lottie implementation in polymer
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PolymerLottie extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'polymer-lottie',
      },
    };
  }
}

window.customElements.define('polymer-lottie', PolymerLottie);
