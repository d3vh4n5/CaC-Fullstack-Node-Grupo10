import session from "../utils/session.js";
session.show()
session.check()

const $logoutBtn = document.getElementById('$logoutBtn')
const $userName = document.getElementById('$userName')
const $sidebarCollapseBtn = document.getElementById('sidebarCollapseBtn')

$userName.innerText = "Hola, " + session.userName

$logoutBtn.addEventListener('click', ()=> {
    session.destroy()
})

$sidebarCollapseBtn.addEventListener('click', ()=>{
    const $sidebar = document.getElementById('sidebar')
    const $body = document.body
    $sidebar.classList.toggle('hide')
    $body.classList.toggle('expand')
})
