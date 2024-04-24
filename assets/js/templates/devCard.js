const INFO = [
    {
        title: "Camila Valderrama",
        img: '../assets/img/woman.svg',
        linkedin: 'xxx',
        location: 'xxx',
        github: 'xxx',
        portfolio: 'xxx',
        description: 'xxx'
    },
    {
        title: "Marina",
        img: '../assets/img/woman.svg',
        linkedin: 'xxx',
        location: 'xxx',
        github: 'xxx',
        portfolio: 'xxx',
        description: 'xxx'
    },
    {
        title: "Hugo Terrile",
        img: '../assets/img/man.svg',
        linkedin: 'xxx',
        location: 'xxx',
        github: 'xxx',
        portfolio: 'xxx',
        description: 'FullStack Node | JavaScript | Python '
    },
    {
        title: "Juan Angel Basgal",
        img: 'https://media.licdn.com/dms/image/D4D35AQHwNe9PaBuY9Q/profile-framedphoto-shrink_400_400/0/1684111608385?e=1714593600&v=beta&t=l9Rw4-G2IV3lqNKVcT1btWmhqWmJyrmC9VWxw3rw5kM',
        linkedin: 'https://www.linkedin.com/in/juanangelbasgall/"',
        location: 'Campana, Bs As, Argentina',
        github: 'https://github.com/d3vh4n5',
        portfolio: 'https://d3vh4n5.com.ar/',
        description: 'FullStack Node | Js - Ts | PHP | Python || React | Vue'
    },
]

const $template = document.getElementById('$devCard')
const $container = document.querySelector('.about__devs-container')

INFO.forEach((person, index) => {
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
    $portfolio_a.href = person.portfolio

    $location_s.innerText = person.location
    $title_h.innerText = person.title
    $description_p.innerText = person.description

    $container.appendChild($fragment)
})



