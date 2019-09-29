(function() {
  class HowToInputGroup extends HTMLElement {
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
