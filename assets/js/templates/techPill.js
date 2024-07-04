import  TECHS  from "../data/technologies.data.json" with { type: "json" }
import  LIBS  from "../data/libs.data.json" with { type: "json" }

const $template = document.getElementById('techPill')
const $frontTechsContainer = document.querySelector('#techList')
const $techListLibContainer = document.querySelector('#techListLib')

for (let i=0; i<2; i++){
    TECHS.forEach( tech => {
        const $fragment = $template.content.cloneNode(true)
        const $li = $fragment.querySelector('li')
        $li.innerText = tech
        
        if(i == 1){
            $li.setAttribute('aria-hidden', true);
        }
    
        $frontTechsContainer.appendChild($li)
    })
    LIBS.forEach( tech => {
        const $fragment = $template.content.cloneNode(true)
        const $li = $fragment.querySelector('li')
        $li.innerText = tech
        
        if(i == 1){
            $li.setAttribute('aria-hidden', true);
        }
    
        $techListLibContainer.appendChild($li)
    })
}
