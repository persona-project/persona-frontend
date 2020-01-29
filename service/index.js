import axios from 'axios'
import qs from 'qs'
import config from './config'
import { Message } from 'element-ui'

//配置baseURL
// if (process.server) {
//     config.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 8080}/api`
//     console.log(`api is true ${config.baseURL}`)
// }
config.baseURL="http://localhost:8080/api"

const service = axios.create(config)

// POST 将json格式参数转化为formdata参数
//TODO 添加token
service.interceptors.request.use(
    config => {
        if (config.method === 'post') {
            config.data = qs.stringify(config.data)
        }
        if (config.method === 'get') {
            config.data = qs.stringify(config.data)
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
//TODO 对返回的结果统一处理
// 返回结果处理
service.interceptors.response.use(
    res => {
        return res.data
    },
    error => {
        return Promise.reject(error)
    }
)

export default {
    // post 方法
    post(url, data) {
        console.log('post request url', url)
        return new Promise((resolve,reject)=>{
            service({
                method: 'post',
                url,
                params: data
            }).then(response=>{
                if(response.success){
                    resolve(response.payload)
                }else{
                    Message.warning({message:response.message})
                    reject(response.message)
                }
            })
        })
        // return service({
        //     method: 'post',
        //     url,
        //     params: data
        // })
    },
    // get 方法
    get(url, data) {
        console.log('get request url', config.baseURL+url)
        return new Promise((resolve, reject) => {
            service({
                method: 'get',
                url,
                params: data
            }).then(response => {
                if (response.success) {
                    resolve(response.payload)
                } else {
                    Message.warning({ message: response.message })
                    reject(response.message)
                }
            })
        })
        // return service({
        //     method: 'get',
        //     url,
        //     params: data
        // })
    },

    //TODO
    // delete 方法
    delete(url, data) {
        console.log('delete request url', url)
        return service({
            methods: 'delete',
            url,
            params: data
        })
    }
}

