// var isBrowser= new Function("try {return this===window;}catch(e){ return false;}");
// var isNode=new Function("try {return this===global;}catch(e){return false;}");

// export function envDetector(){
//     // tests if global scope is bound to "global"
//     if(isNode()) console.log("running under node.js");
//     // tests if global scope is bound to window
//     if(isBrowser()) console.log("running under browser");
// }

export const isBeingCompiled = (()=>{
    try {
       return process.env.PARCEL_BUILD
    } catch (e){
        return false
    }
})()

// var isNode = false;    
// if (typeof process === 'object') {
//   if (typeof process.versions === 'object') {
//     if (typeof process.versions.node !== 'undefined') {
//       isNode = true;
//     }
//   }
// }

// if (typeof module === "object" && typeof module.exports === "object") {
//     // node
// }

// if (typeof window !== "undefined" && typeof window.document !== "undefined") {
//     // browser
// }