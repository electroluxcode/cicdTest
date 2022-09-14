import axios from 'axios';




//知识点0：这里用路由是因为我们要进行路由的跳转



// var that=this
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';  //此处是增加的代码，设置请求头的类型
//知识点1：一开始创造baseUrl，可以设置timeout
//withCredentials  headers
let request = axios.create({
    baseURL: "/api",
    timeout: 5000,
    withCredentials: false,// 跨域请求时是否需要访问凭证
    
})
axios.defaults.baseURL = 'http://localhost:3000'
// 请求拦截器
request.interceptors.request.use(config => {
    // 知识点2：发送请求之前,可以对请求附加token和header之类的东西
    //这里可以进行请求加密等操作。如添加token,cookie，修改数据传输格式等
    config.token ='hihhiihihi' 
    config.headers = {'Content-Type1':'application/js22on','charset':'UTF-81'}
    console.log(config)
    /*这里取token之前，你肯定需要先拿到token,存一下
    const token = getCookie('名称');
    if(token){
        config.params = {'token':token} //如果要求携带在参数中
        config.headers.token= token; //如果要求携带在请求头中
    }*/

    if(config.method  === 'post'){
        // config.data = qs.stringify(config.data);
    }
    return config;
},
    error => {
        // 请求错误
        return Promise.reject(error);
    });

// 响应拦截器
request.interceptors.response.use(response => {
    // 知识点3：请求成功的响应数据
    //截取截取掉bearer，从第7个往后面看
    //token=token.substring(7,token.length);
    if(response.status==200){
        //跳转
       
      
    }
    console.log(response.status)
    return response;
},
    error => {
        // 响应错误
        return Promise.reject(error);
    });

export default request