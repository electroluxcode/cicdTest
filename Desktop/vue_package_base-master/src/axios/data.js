import axios from "./request";
import qs from 'qs';// qs为第三方库

export const testpost=(params)=>{
    console.log("param")
    console.log(params)
    return axios.post(
        'http/api/createOrder?'+qs.stringify(params),
        
    )
}
export const testget=()=>{
  
    return axios.get(
        '/vue-element-admin/user/info'
    )
}
export const getMenu = ()=>{
    return axios.request(
        '/vue-element-admin/user/aside'
        
    )
}

export const kuayu = ()=>{
    return axios.request(
        '/test'
        
    )
}

export const upload_qiniu = ()=>{
    return axios.request(
        '/token'
        
    )
}