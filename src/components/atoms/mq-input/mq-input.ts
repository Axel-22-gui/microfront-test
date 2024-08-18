import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('mq-input')
export class MqInputElement extends LitElement {
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
    <div class="form-floating" [class.is-invalid]="formControl.errors && formControl.touched">
        @if(type==='tel'){
            <input autocomplete="off" appTelefone [type]="type"  class="form-control" [id]="id" [placeholder]="placeholder" [formControl]="formControl" [maxlength]="maxlength"/>
        }@else {
            <input autocomplete="off" [type]="type" class="form-control" [id]="id" [placeholder]="placeholder" [formControl]="formControl" [maxlength]="maxlength"/>
        }
        <label [for]="id">{{label}}</label>
        <div style="display: none;" [class.icon-input-right]="isButtonIconRight" [class.icon-input-left]="isButtonIconLeft">
            <i (click)="eventClick.emit()" [class]="iconRight?iconRight:iconRight"></i>
        </div>
        @if (formControl.errors && formControl.touched) {
            @if (formControl.hasError('required')) {
            <em class="">{{label}} es requerido</em>
            }
            @if (formControl.hasError('email')) {
            <em class="">Inserte un email válido</em>
            }
            @if (formControl.hasError('invalid')) {
            <em class="">{{formControl.errors['message']}}</em>
            }
            @if(formControl.hasError('minlength')){
            <em class="">Se requieren al menos {{formControl.errors.minlength?.requiredLength}} carácteres.</em>
            }
            @if(formControl.hasError('maxlength')){
            <em class="">El máximo es de {{formControl.errors.maxlength?.requiredLength}} carácteres.</em>
            }
        }
    </div>
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
    'mq-input': MqInputElement
  }
}