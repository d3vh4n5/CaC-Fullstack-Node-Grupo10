import session from "../utils/session.js";
session.show()
session.check()

const $logoutBtn = document.getElementById('$logoutBtn')

$logoutBtn.addEventListener('click', ()=> {
    session.destroy()
})
