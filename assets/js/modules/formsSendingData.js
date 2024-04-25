import { basePath } from "../config/basePath.js"

const $forms = document.forms


function handleSubmit(e, $form){
    e.preventDefault()
    
    const $inputs = $form.querySelectorAll('input, select, textarea');
    const formData = {};
    const arrayData = []
    let queryString = '?'
    
    $inputs.forEach(input => {
        formData[input.name] = input.checked || input.value;
        arrayData.push(`${input.name}=${input.checked || input.value}`)
    });
    
    console.table(formData);
    queryString = queryString + arrayData.join('&')
    
    const actionTarget = e.target.getAttribute('action');
    // let newActionTarget = (basePath()) + actionTarget
    let newActionTarget = (basePath()) + '/pages/show_data.html'
    
    
    var windowOptions = "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=600, height=400";
    window.open(newActionTarget+queryString, '_blank', windowOptions);
    
    // e.target.submit()
    e.target.reset()
}

if($forms)
for (let i = 0; i< $forms.length; i++){
    $forms[i].addEventListener('submit', (e)=> handleSubmit(e, $forms[i]))
}

