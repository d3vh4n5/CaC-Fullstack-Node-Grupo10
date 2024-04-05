import { basePath } from "../../../config/basePath.js"

const contactForm = document.querySelector('#contactForm')

if(contactForm)
contactForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    const formData = {};
    const arrayData = []
    let queryString = '?'
    inputs.forEach(input => {
        formData[input.name] = input.checked || input.value;
        arrayData.push(`${input.name}=${input.checked || input.value}`)
    });
    console.table(formData);
    queryString = queryString + arrayData.join('&')

    const actionTarget = e.target.getAttribute('action');
    let newActionTarget = (basePath()) + actionTarget

    
    var windowOptions = "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=600, height=400";
    window.open(newActionTarget+queryString, '_blank', windowOptions);
    
    e.target.submit()
    e.target.reset()
} )