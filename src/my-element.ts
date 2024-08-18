import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
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

  static styles = css`
.btn-mq {
  width: 240px;
  height: 40px;
  background: rgb(0, 0, 0);
  border-radius: 28px;


  font-weight: 800;
  font-size: 14px;
  line-height: 29px;
  text-align: center;
  color: #ffffff;
  outline: none;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    background: #606469;
    box-shadow: 0px 4px 10px rgba(12, 16, 60, 0.25);
    border-radius: 28px;
  }

  &:disabled {
    background: #e9ecf2;
    border-radius: 28px;
    box-shadow: none;
    color: #b3b8bf;
    cursor: no-drop;
  }
}
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
