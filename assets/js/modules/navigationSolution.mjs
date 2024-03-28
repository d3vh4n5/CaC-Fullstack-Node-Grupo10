document.addEventListener('DOMContentLoaded', ()=> {
    setTimeout(()=>{
    
        if (document.location.hostname === 'd3vh4n5.github.io'){
            console.warn('Creando redirección')
    
            const basePath = 'https://d3vh4n5.github.io/CaC-Fullstack-Node-Grupo10'
            const links = document.querySelectorAll('.INSIDE-NAV')
        
            links.forEach( link => {
                const navHref = link.attributes.href.value
    
                link.addEventListener('click', (e)=> {
                    e.preventDefault()
                    const newPath = basePath + navHref
                    document.location.href = newPath
                })
            })
        }
    
    }, 200)
})