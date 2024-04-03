// configurar el basepath y el if que lo determina

const productionPath = 'https://d3vh4n5.github.io/CaC-Fullstack-Node-Grupo10'

export const basePath = () => {
    if (document.location.hostname === 'd3vh4n5.github.io'){
        console.warn('Creando redirección')
        return productionPath
    } else {
        console.log('Navigation: normal')
        return '';
    }
}
