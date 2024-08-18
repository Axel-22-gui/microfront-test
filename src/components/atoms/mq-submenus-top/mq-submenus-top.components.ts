import { css, html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

import styles from './mq-submenus-top.styles.css?inline';

@customElement('mq-submenustop')
export class SubMenusTopElement extends LitElement {
  static styles = css`${unsafeCSS(styles)}`;
  @property()
  width = '';

  @property()
  height = '';

  @property()
  class = 'btn-mq';

  @property({ type: Number })
  count = 0;

  @property()
  title = '';

  @property()
  fontSize = '';

  render() {
    return html`
      <button class="${this.class}">${this.title}</button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mq-submenustop': SubMenusTopElement
  }
}