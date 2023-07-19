// create the template as deafult return
const template = document.createElement('template')

template.innerHTML = `
    <div class="card">
        <div card-body></div>
    </div>
`

// define the webcomponent
class HelloCard extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({'mode':'open'}) // https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
        this._shadowRoot.appendChild(
            template.content.cloneNode(true)
        );
    }
    connectedCallback(){
        this.$card = this.querySelector('.card-body');
        let $message = document.createElement('p');
        $message.innerHTML = `Message: hello party people`;
        this._shadowRoot.appendChild($message);
    }
}

window.customElements.define('hello-card', HelloCard);