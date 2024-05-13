import { basePath } from "../constants/basePath.js"


function navWatcher(){
    if (basePath === '') return
    const links = document.querySelectorAll('.INSIDE-NAV')

    links.forEach( link => {
        const navHref = link.attributes.href.value
        const arrNav = navHref.split('/')
        let parsedHref = ''

        if (arrNav[0].includes('.')) {
            arrNav.shift()
            parsedHref = '/' + arrNav.join('/')
        } else {
            parsedHref = navHref
        }

        link.addEventListener('click', (e)=> {
            e.preventDefault()
            const newPath = basePath + parsedHref
            document.location.href = newPath
        })
    }) 
}


document.addEventListener('DOMContentLoaded', ()=> {
    navWatcher()
})
