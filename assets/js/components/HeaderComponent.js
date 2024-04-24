// import  ROUTES  from "../routes.json" assert { type: "json" }
import  ROUTES  from "../routes.json" with { type: "json" }
import { basePath } from "../../../config/basePath.js";

const headerTempalte = (basePath = '') => { return`
<header class="header">
    <div class="header__container">
        <div class="header__logo-container">
            <img src="${basePath === '' ? '../..' : basePath}/assets/img/node.png" alt="Logo" class="header__logo-img">
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
            </ul>
            <div class="header__login-container">
                <a href="/pages/login.html" class="INSIDE-NAV header__login-btn">
                    <i class="fa-solid fa-user"></i>
                    Login
                </a>
            </div>
        </nav>
        <label class="header__darkscreen" for="drawer"></label>
    </div>
</header>
`}

class HeaderComponent extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = headerTempalte(basePath())
    }
  }
  customElements.define('header-component', HeaderComponent);
  