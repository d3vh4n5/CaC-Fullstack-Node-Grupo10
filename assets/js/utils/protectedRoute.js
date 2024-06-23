import { basePath } from "../constants/basePath.js";

const isSignedIn = localStorage.getItem('accessToken')
console.log(isSignedIn)
if (isSignedIn === null) {
    document.location.href = basePath + '/'
}
    