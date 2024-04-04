const devCardTemplate = ({name, sex, linkedin, location, github, portfolio, description}) => `
<div class="dev-card">
<header class="dev-card__header">
  <img src="../assets/img/${sex==='male' ? 'man' : 'woman'}.svg" class="dev-card__person-img" alt="">
  <div class="dev-card__contacts">
    <h5 class="dev-card__title">${name || '$dev name'}</h5>
    <ul class="dev-card__contacts-list">
      <li class="dev-card__contact-item">
        <i class="fa-brands fa-linkedin"></i>
        <a href="${linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>    
       </li>
      <li class="dev-card__contact-item"><i class="fas fa-map-marker-alt"></i>${location}</li>
      <li class="dev-card__contact-item">
        <i class="fa-brands fa-square-github"></i> 
        <a href="${github}" target="_blank" rel="noopener noreferrer">GitHub</a>    
      </li>
      ${ portfolio && `
          <li class="dev-card__contact-item">
          <i class="fa-duotone fa-id-card"></i>
            <a href="${portfolio}" target="_blank" rel="noopener noreferrer">Portfolio</a>    
          </li>
      `}
    </ul>
  </div>
</header>
<main class="dev-card__body">
  <p class="dev-card__description">
    ${description}
  </p>
</main>
</div>
`

class DevCard extends HTMLElement {
    constructor(){
        super()
        const dev = {
            name: this.getAttribute('name'),
            sex: this.getAttribute('sex'),
            linkedin: this.getAttribute('linkedin'),
            location: this.getAttribute('location'),
            github: this.getAttribute('github'),
            portfolio: this.getAttribute('portfolio'),
            description: this.getAttribute('description'),
        }
        this.innerHTML = devCardTemplate(dev)
    }
}

customElements.define('dev-card', DevCard)