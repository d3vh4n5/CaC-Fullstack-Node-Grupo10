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

const specialChars = [ '<', '>', ';', '/', '\\', '(', ')', '"', "'"]
const pink = 'rgba(255, 192, 203, 0.3)'
const green = 'rgba(144, 238, 144, 0.3)'

export const inputValidate = ($input, options = {}) => {

    const config = {
        invalidBG: options.invalidColor || pink,
        validBG: options.validColor || green,
        debug: options.debug || false
    }

    function handleInvalid(){
        if (config.customValidity) createCustomValidity()
            $input.style.background = config.invalidBG
    }

    function validity(e){
        $input.setCustomValidity('')
        specialChars.forEach(ch => {
            if ($input.value.includes(ch)){
                console.log('Se detecto: ', ch)
                $input.setCustomValidity('¡Este campo es inválido!')
                $input.reportValidity();
            }
        })
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
    invalidColor = pink,
    validColor= green,
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

    // $form.addEventListener('submit', (event)=> {
    //     event.preventDefault()
    //     const valid = event.target.checkValidity()
    //     if (valid) {
    //         event.target.submit()
    //         event.target.reset()
    //     } else {
    //         alert("Algo en el form no es valido")
    //         console.warn(valid)
    //         console.warn(event)
    //     }
    // })
}