<script setup>
import { RouterLink } from 'vue-router'
import session from '../../../utils/session.js'
import { routes } from '../router'


session.check()

const logout = ()=>{
    session.destroy()
}

const sidebarCollapse = ()=> {
  const $sidebar = document.getElementById('sidebar')
  const $body = document.body
  $sidebar.classList.toggle('hide')
  $body.classList.toggle('expand')
}

</script>
<template>
    <main class="d-flex bg-body-secondary" id="dashboard">
        <aside class="bg-dark text-light sidebar pt-2" id="sidebar">
            <div class="list-group mt-5 rounded-0" data-bs-theme="dark">
              <RouterLink 
                class="list-group-item list-group-item-action text-decoration-none text-light"
                :to="route.path" 
                v-for="route in routes">
                {{ route.label }}
              </RouterLink>
            </div>
        </aside>
        <section class="container-fluid p-0">
            <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
                <div class="container-fluid">
                  <button @click="sidebarCollapse" class="burger-menu" id="sidebarCollapseBtn">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <inside-link  class="navbar-brand ms-3" href="/pages/dashboard.html">HealthUp</inside-link >
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nave-item my-2" v-for="route in routes">
                        <RouterLink 
                          class="list-group-item list-group-item-action text-decoration-none text-light"
                          :to="route.path" 
                          >
                          {{ route.label }}
                        </RouterLink>
                      </li>
                    </ul>
                    <div class="text-light">
                      <button @click="logout" class="btn btn-danger">Cerrar Sesión</button>
                    </div>
                  </div>
                </div>
              </nav>
            <div class="container bg-white mt-4">
              
                <!-- Comienzo Contenido editable -->
                
                <slot></slot>

                <!-- Fin contenido editable -->

            </div>
        </section>
        
    </main>
</template>

<style>
body{
  height: 100vh;
  margin-left: 250px;
  transition: margin-left 0.3s ease-in-out;

    #app {
      height: 100%;
      
      #dashboard{
        min-height: 100%;
      }
    }

    &.expand{
        margin-left: 0px;
    }
}

.sidebar{
    position: fixed;
    height: 100vh;
    left: 0;
    width: 250px;
    transition: left 0.3s ease-in-out;

    &.hide{
        left: -250px;
    }
}

.burger-menu{
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: .25rem;
    color: rgba(255, 255, 255, .55);
    border-color: rgba(255, 255, 255, .1);
    transition: all .2s ease;

    &:hover, &:focus, &:active{
        outline: 4px solid;
    }
}

.nave-item {
  display: none;
}

@media (max-width: 992px) {
  body{
    margin-left: 0px;
  }

  .nave-item {
    display: block;
  }

  #sidebarCollapseBtn, 
  #sidebar {
    display: none;
  }
}
</style>