import { isBeingCompiled } from "./isBeingCompiled.js";
import { basePath } from "./basePath.js";

export const logoPath = (()=>{
    if (isBeingCompiled) {
        return require('../../img/hu.svg');
    } else {
        return basePath + "/assets/img/hu.svg";
    }
})()