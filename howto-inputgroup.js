(function() {
  class HowToInputGroup extends HTMLElement {
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

      this.innerHTML = `
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">@</span>
          </div>
          <input type="text" class="form-control">
        </div>
        `;
    }
  }
  customElements.define('howto-inputgroup', HowToInputGroup);
})();
