import { basePath } from "../constants/basePath.js"
import { API_URL } from "../constants/apiURL.js"

function handleSubmit(e, $form){
    e.preventDefault()

    const valid = e.target.checkValidity()
    const captcha = e.target.captcha.checked
    // No implemento el captcha real
    if( !valid || !captcha) {
        alert("Formulario invalido! no queremos robots en nuestro sistema... ¡Hasta la vista, baby!")
    } else {
        if (!confirm("Formulario válido, confirma su envío?")) return

        const $inputs = $form.querySelectorAll('input, select, textarea');
        const formData = {};
        const arrayData = []
        let queryString = '?'
        
        $inputs.forEach(input => {
            formData[input.name] = input.checked || input.value;
            arrayData.push(`${input.name}=${input.checked || input.value}`)
        });
        
        console.table(formData);
        queryString += arrayData.join('&')
        
        const actionTarget = e.target.getAttribute('action');
        // let newActionTarget = (basePath()) + actionTarget // Esta es para cuando esté el back
        let newActionTarget = basePath + '/pages/show_data.html'
        
        
        var windowOptions = "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=600, height=400";
        window.open(newActionTarget+queryString, '_blank', windowOptions);
        
        // e.target.submit()
        e.target.reset()
        
    }
    
}

export function sendToShowData(){
    const $forms = document.forms
    if($forms)
    for (let i = 0; i< $forms.length; i++){
        $forms[i].addEventListener('submit', (e)=> handleSubmit(e, $forms[i]))
    }
}

export async function submitJsonData(url, jsonData){
    fetch(url, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(jsonData)
    })
        .then(resp => resp.json())
        .then(data => {
        console.log(data)
        console.log("Información enviada correctamente")
        return data
    }).catch(e => {
        console.error("Hubo un error al enviar el mensaje: ", e)
        alert("Ocurrió un error al enviar la data")
        return null
    })
}

export async function submitFormData(event) {
    // Funcion obtenida de este articulo: https://www.freecodecamp.org/news/upload-files-with-javascript/
    const $form = event.currentTarget;
    const url = new URL($form.action);
    const formData = new FormData($form);
    const searchParams = new URLSearchParams(formData);
  
    /** @type {Parameters<fetch>[1]} */

    const fetchOptions = {
      method: $form.method
    };

    if ($form.method.toLowerCase() === 'post') {
        if ($form.enctype === 'multipart/form-data') {
          fetchOptions.body = formData;
        } else {
          fetchOptions.body = searchParams;
        }
    } else {
        url.search = searchParams;
    }
  
    fetch(url, fetchOptions)
        .then(resp => {
            console.log(resp)
            alert("Información enviada correctamente")
        })
        .catch(err => {
            console.log("Hubo un error al enviar la información: ", err)
            alert("Ocurrió un error al enviar la información")
        })
  
    event.preventDefault();
}

export async function submitFormData2(event) {
    // Funcion obtenida de este articulo: https://www.freecodecamp.org/news/upload-files-with-javascript/
    const $form = event.currentTarget;
    const url = new URL(API_URL + '/contact-messages');
    const formData = new FormData($form);
    const searchParams = new URLSearchParams(formData);
  
    /** @type {Parameters<fetch>[1]} */

    const fetchOptions = {
      method: $form.method
    };

    if ($form.method.toLowerCase() === 'post') {
        if ($form.enctype === 'multipart/form-data') {
          fetchOptions.body = formData;
        } else {
          fetchOptions.body = searchParams;
        }
    } else {
        url.search = searchParams;
    }
  
    fetch(url, fetchOptions)
        .then(resp => {
            console.log(resp)
            alert("Información enviada correctamente")
        })
        .catch(err => {
            console.log("Hubo un error al enviar la información: ", err)
            alert("Ocurrió un error al enviar la información")
        })
  
    event.preventDefault();
}
