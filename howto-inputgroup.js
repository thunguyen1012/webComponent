(function() {
  const inputGroupTemplate = document.createElement('template');
  inputGroupTemplate.innerHTML = `
  <style>
    .input-group {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
      width: 100%;
      margin-bottom: 1rem !important;
    }

    .input-group-prepend {
      margin-right: -1px;
      display: flex;
    }

    .input-group-text {
      display: flex;
      align-items: center;
      padding: 0.375rem 0.75rem;
      margin-bottom: 0;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      text-align: center;
      white-space: nowrap;
      background-color: #e9ecef;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
    }

    .input-group > .input-group-prepend > .input-group-text {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    .form-control {
      display: block;
      width: 100%;
      height: calc(1.5em + 0.75rem + 2px);
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    .input-group > .form-control {
      position: relative;
      flex: 1 1 auto;
      width: 1%;
      margin-bottom: 0;
    }

    .input-group > .form-control:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    :host([disabled]) {
      pointer-events: none;
    }

    .input-group-end::slotted(*) {
      padding: 0.375rem 0.75rem;
      line-height: 1.5;
      color: red;
    }

    :host-context(.double), :host-context(.double) .form-control {
      font-size: 2rem;
    }
   }
  </style>
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text">@</span>
    </div>
    <input type="text" class="form-control">
    <slot name="addition" class="input-group-end"></slot>
  </div>
  `;

  class HowToInputGroup extends HTMLElement {
    static observedAttributes = ['disabled'];

    // A getter/setter for a disabled property.
    get disabled() {
      return this.hasAttribute('disabled');
    }

    set disabled(val) {
      // Reflect the value of the disabled property as an HTML attribute.
      !!val
        ? this.setAttribute('disabled', '')
        : this.removeAttribute('disabled');
    }

    constructor() {
      super();

      console.log('Constructor');

      const shadowRoot = this.attachShadow({
        mode: 'open',
        delegatesFocus: true
      });
      shadowRoot.appendChild(inputGroupTemplate.content.cloneNode(true));

      console.log(this.shadowRoot, shadowRoot.host);
    }

    connectedCallback() {
      console.log('connectedCallback');
    }

    disconnectedCallback() {
      console.log('disconnectedCallback');
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
      console.log('attributeChangedCallback', attrName, oldVal, newVal);
    }

    customFocus() {
      const input = this.shadowRoot.querySelector('input');
      input.focus();
      input.dispatchEvent(
        new Event('inputgroup-focus', { bubbles: true, composed: true })
      );
    }
  }

  customElements.define('howto-inputgroup', HowToInputGroup);
})();
