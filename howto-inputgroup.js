(function() {
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

      this.innerHTML = `
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">@</span>
          </div>
          <input type="text" class="form-control">
        </div>
        `;
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
  }
  customElements.define('howto-inputgroup', HowToInputGroup);
})();
