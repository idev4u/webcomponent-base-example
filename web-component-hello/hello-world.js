// create the template as deafult return
const template = document.createElement('template')

template.innerHTML = `
    <div class="view">
        <div view-body></div>
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
    // render the responed view
    connectedCallback(){
        this.$view = this.querySelector('.view-body');
        let $message = document.createElement('p');
        let name = this.nameOfPersonAddressed;
        $message.innerHTML = `Message: hello ${name}`;
        this._shadowRoot.appendChild($message);
    }
    
    // add attributes reader
    get nameOfPersonAddressed(){
        console.log(JSON.stringify(this.getAttribute('name')));
        return this.getAttribute('name');
    }
}
window.customElements.define('hello-card', HelloCard);