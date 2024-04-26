/**
 * Mi librería "EZ Validate.js"
 * 
 * 
 * @version 1.0
 * @author Juan Angel Basgall https://www.linkedin.com/in/juanangelbasgall/ 
 * https://github.com/d3vh4n5
 * @since 26-04-2024
 * 
 * inputValidate()
 * @param { HTMLInputElement } $input - El elemento input del HTML.
 * @param { object } options - Objeto con opciones de configuración.
 * 
 * validate()
 * @param { HTMLFormElement } $form - Formulario del documento
 */


export const inputValidate = ($input, options = {}) => {

    const config = {
        customValidity: options.customValidity || false,
        customValidityMsg: options.customValidityMsg || '',
        invalidBG: options.invalidColor || 'pink',
        validBG: options.validColor || 'lightgreen',
        debug: options.debug || false
    }

    function createCustomValidity() {
        $input.setCustomValidity(config.customValidityMsg)
    }

    function handleInvalid(){
        if (config.customValidity) createCustomValidity()
            $input.style.background = config.invalidBG
    }

    function validity(e){
        if(config.debug)console.log($input.name,': ', $input.value)
        if ($input.value.trim() === '') {
            handleInvalid()
        } else {
            // const valid = $input.checkValidity()
            const valid = e.target.validity.valid
            if (valid) {
                $input.style.background = config.validBG
            } else {
                handleInvalid()
            }
        }
    }


    $input.addEventListener('input', (e)=> {
        validity(e)
    })
    // $input.addEventListener('change', ()=> {
    //     validity()
    // })
    validity()
}


export const validate = ($form = document.forms[0], {
    debug = false,
    invalidColor = ' ',
    validColor= 'lightgreen',
    typeExclude = []
} = {}) => {

    if (debug) console.warn("ezValidator debug mode is Active, remember to deactivate it for production")
    // const elementsArray = Array.from($form.elements);
    const elementsArray = [...$form.elements];
    
    elementsArray.forEach(element => {
        const elType= element.type
        const avoid = ['submit', 'reset', ...typeExclude]
        if (!avoid.includes(elType)){
            // if (debug)console.log(elType)

            inputValidate(element, { 
                invalidColor, 
                validColor,
                debug 
            })
        }
    });
    console.log('-------------------- ')

    $form.addEventListener('submit', (event)=> {
        event.preventDefault()
        const valid = event.target.checkValidity()
        if (valid) {
            event.target.submit()
            event.target.reset()
        } else {
            alert("Algo en el form no es valido")
        }
    })
}