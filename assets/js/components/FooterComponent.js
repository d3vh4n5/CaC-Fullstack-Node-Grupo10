import { ROUTES } from "../constants/routes.js";
import { basePath } from "../config/basePath.js";

const footerTempalte = (basePath = '') => `
<footer class="footer">
    <section class="footer__container">
        <div class="footer__logo">
            <img src="${basePath === '' ? '../..' : basePath}/assets/img/favicon.ico" alt="Logo" class="footer__logo-img">
        </div>
        <article class="footer__top-content">

            <nav class="footer__nav">
                <h5>Mapa de sitio</h5>
                <ul class="footer__nav-list">
                  ${ROUTES.map(R => (
                    `
                    <li class="footer__nav-item">
                        <a class="footer__nav-link" href="${basePath + R.href}">${R.label}</a>
                    </li>
                    `
                  )).join('')}
                </ul>
                </nav>
                <div class="footer__contacts">
                    <h5>Información de contacto</h5>
                    <ul class="footer__contact-list">
                        <li class="footer__contact-item"><i class="fas fa-phone"></i> 011 4321 98765</li>
                        <li class="footer__contact-item"><i class="fas fa-map-marker-alt"></i> Av Siempreviva 742</li>
                        <li class="footer__contact-item"><i class="fas fa-envelope"></i> estemailesfalso@mail.com</li>
                        <li class="footer__contact-item">
                            <i class="fas fa-envelope"></i>
                            <a class="" href="${basePath}/pages/contact.html">Dejanos un mensaje!</a>
                        </li class="footer__contact-item">
                    </ul>
                    <div>
                    </div>
                </div>
                
                <div class="footer__info">
                    <h5>Nosotros</h5>
                    <p>
                        HealthUp es un proyecto creado con motivos didácticos, no es un proyecto real y debe tener cuidado con su uso.
                    </p>
                    <p>
                        Para más información <a href="${basePath}/pages/about.html#project">haga click aquí</a>
                    </p>
                </div>
    
            </article>
            
            <hr>
    
            <div class="footer__social-container">
                <ul class="footer__social-list">
                    <li class="footer__social-item"><a class="footer__social-link" href="https://github.com/d3vh4n5/CaC-Fullstack-Node-Grupo10" target="_blank" title="GitHub" rel="noopener noreferrer"><i class="fa-brands fa-square-github"></i></a></li>
                    <li class="footer__social-item"><a class="footer__social-link" href="https://github.com/d3vh4n5/CaC-Fullstack-Node-Grupo10" target="_blank" title="Instagram" rel="noopener noreferrer"><i class="fa-brands fa-square-instagram"></i></a></li>
                    <li class="footer__social-item"><a class="footer__social-link" href="https://github.com/d3vh4n5/CaC-Fullstack-Node-Grupo10" target="_blank" title="Facebook" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a></li>
                    <li class="footer__social-item"><a class="footer__social-link" href="https://github.com/d3vh4n5/CaC-Fullstack-Node-Grupo10" target="_blank" title="Twitter" rel="noopener noreferrer"><i class="fa-brands fa-square-x-twitter"></i></a></li>
                </ul>
            </div>
    
            <small class="footer__copyright">
                <div>
                    ©️ 2024
                    <code translate="no" class="footer__brand">
                        HealthUp Project.
                    </code>
                    Todos los derechos reservados
                </div>
                <div>
                    Desarrollado por
                    <code translate="no" class="footer__brand">
                        <a href="${basePath}/pages/about.html#devs">
                            Grupo 10 - Codo a Codo Comisión 24126.
                        </a>
                    </code>
                </div>
            </small>
            
        </section>
    </footer>
`

class FooterComponent extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = footerTempalte(basePath)
    }
  }
  customElements.define('footer-component', FooterComponent);
  