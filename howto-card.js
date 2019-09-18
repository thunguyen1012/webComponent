(function() {
  const template = document.createElement('template');
  template.innerHTML = `
    <style>
      .card {
        position: relative;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: .25rem;
        font-family: "Roboto";
      }

      .card-header:first-child {
        border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
      }

      .card-header {
        padding: .75rem 1.25rem;
        margin-bottom: 0;
        background-color: rgba(0,0,0,.03);
        border-bottom: 1px solid rgba(0,0,0,.125);
        font-size: 1.25rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.2;
        color: inherit;
      }

      .card-body {
        flex: 1 1 auto;
        padding: 1.25rem;
      }

      .card-title {
        font-size: 1rem;
        margin: .75rem 0;
      }
    </style>
    <div class="card">
      <div class="card-header">Card in shadow DOM</div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  `;

  class HowToCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  customElements.define('howto-card', HowToCard);
})();
