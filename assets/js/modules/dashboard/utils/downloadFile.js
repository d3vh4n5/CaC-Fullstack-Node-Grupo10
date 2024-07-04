import session from '../../../utils/session.js'
import { Toast } from '../utils/Toast.js'
import { BASE_API_URL } from '../../../constants/apiURL.js'

export const downloadFile = async (fileName)=> {
    try {
        console.log(fileName)
        const response = await fetch(BASE_API_URL+ '/' + fileName, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${session.accessToken}`
            }
        })

        if (!response.ok) {
            throw new Error('Error al descargar el archivo');
        }

        console.log(response)

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "healthup_file";
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error(error)
        Toast.fire({
            icon: "error",
            title: "Hubo un error al obtener el archivo"
        });
    }
}