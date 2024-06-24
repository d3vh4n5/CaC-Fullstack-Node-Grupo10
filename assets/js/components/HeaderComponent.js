import { ROUTES, PROTECTED_ROUTES } from "../constants/routes.js";
import { basePath } from "../constants/basePath.js";
import { logoPath } from "../constants/logoPath.js";
import session from "../utils/session.js";

const headerTempalte = (basePath = '') => { return`
<header class="header">
    <div class="header__container">
        <div class="header__logo-container">
            <img src="${logoPath}" alt="Logo" class="header__logo-img">
            <!-- <h2 class="header__logo-name">LOGO</h2> -->
        </div>
        <label class="header__burger-button" for="drawer">
            <i class="fa-solid fa-bars"></i>
        </label>
        <input class="header__responsive-checkbox" type="checkbox" name="drawer" id="drawer">
        <nav class="header__nav">
            <label class="header__close-button" for="drawer">
                <!-- <i class="fa-solid fa-xmark"></i> -->
                <i class="fa-solid fa-x"></i>
            </label>
            <ul class="header__nav-list">
                ${ROUTES.map(R => (
                  `
                  <li class="header__nav-item">
                      <a class="header__nav-link" href="${basePath + R.href}">${R.label}</a>
                  </li>
                  `
                )).join('')}
                ${
                    session.isSignedIn  
                        ? PROTECTED_ROUTES.map(R => (
                            `
                            <li class="header__nav-item">
                                <a class="header__nav-link" href="${basePath + R.href}">${R.label}</a>
                            </li>
                            `
                            )).join('')
                        : ''
                }
            </ul>
            <div class="header__login-container">
                ${session.isSignedIn 
                    ? `
                        <a href="/pages/logout.html" class="INSIDE-NAV header__logout-btn" id="logoutBtn">
                            Cerrar Sesión
                        </a>
                    ` 
                    : `
                        <a href="/pages/login.html" class="INSIDE-NAV header__login-btn">
                            Ingreso
                        </a>
                    `}
            </div>
        </nav>
        <label class="header__darkscreen" for="drawer"></label>
    </div>
</header>
`}

class HeaderComponent extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = headerTempalte(basePath)
    }
  }
  customElements.define('header-component', HeaderComponent);
  