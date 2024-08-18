import { css, html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

import styles from './mq-button.styles.css?inline';

@customElement('mq-button')
export class ButtonElement extends LitElement {
  static styles = css`${unsafeCSS(styles)}`;
  @property()
  width = '';

  @property()
  fontFamily = '';

  @property()
  height = '';

  @property()
  class = 'btn-raised-mq';

  @property()
  title = ''; 

  @property()
  fontSize = '';

  render() {
    return html`
      <button class="${this.class}" 
        style="
          --widthSize:${this.width};
          --heightSize:${this.height};
          --fontSizes:${this.fontSize};
          --fontFamilies:${this.fontFamily}">
        ${this.title}
      </button>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'mq-button': ButtonElement
  }
}