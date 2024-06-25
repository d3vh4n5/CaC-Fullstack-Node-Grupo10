const template = document.createElement('template')
template.innerHTML = `
<style>
div{
    background-color: lightgreen;
}
</style>
    <div class="bg-danger">
        <hr>
            <slot></slot>
        <hr>
    </div>
`

class DashboardLayout extends HTMLElement {
    constructor(){
        super()
        const shadow = this.attachShadow({ mode: "open" })
        shadow.appendChild(template.content.cloneNode(true))
    }
}

window.customElements.define("dashboard-layout", DashboardLayout)