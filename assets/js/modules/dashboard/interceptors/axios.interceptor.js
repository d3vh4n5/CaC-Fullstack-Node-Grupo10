import axios from "axios";
import session from '../../../utils/session'

/**
 * @fuente https://www.youtube.com/watch?v=5h-j4ssSPP4
 */

export const AxiosInterceptor = ()=>{
    const updateHeader = (request)=>{
        const token = session.accessToken;
        const newHeaders = {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
        }
        request.headers = newHeaders
        return request
    }



    axios.interceptors.request.use((request)=>{
        if (request.url?.includes('assets')) return request

        return updateHeader(updateHeader(request));
    })
}