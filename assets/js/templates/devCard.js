// import  DEVS  from "../../data/devs.data.json" assert { type: "json" }
import  DEVS  from "../../data/devs.data.json" with { type: "json" }

const $template = document.getElementById('$devCard')
const $container = document.querySelector('.about__devs-container')

DEVS.forEach((person, index) => {
    const $fragment = $template.content.cloneNode(true)

    const $card = $fragment.querySelector('.dev-card')
    if (index % 2 == 0){
        $card.classList.add('animate__fadeInBottomLeft')
    } else {
        $card.classList.add('animate__fadeInBottomRight')
    }

    const $img_img = $fragment.querySelector('.dev-card__person-img')
    const $title_h = $fragment.querySelector('.dev-card__title')
    const $linkedin_a = $fragment.querySelector('.linkedin')
    const $location_s = $fragment.querySelector('.location')
    const $github_a = $fragment.querySelector('.github')
    const $portfolio_a = $fragment.querySelector('.portfolio')
    const $description_p = $fragment.querySelector('.dev-card__description')


    $img_img.src = person.img

    $linkedin_a.href = person.linkedin
    $github_a.href = person.github
    
    $location_s.innerText = person.location
    $title_h.innerText = person.title
    $description_p.innerText = person.description
    
    if (person.linkedin !== ''){
        const $linkedinItem = $fragment.querySelector('.linkedin-item')
        $linkedinItem.hidden = false
        $linkedinItem.href = person.linkedin
    }
    if (person.portfolio !== ''){
        const $portfolioItem = $fragment.querySelector('.portfolio-item')
        $portfolioItem.hidden = false
        $portfolio_a.href = person.portfolio
    }
    
    
    $container.appendChild($fragment)
})



