import axios from 'axios'
import qs from 'qs'
import config from './config'

//配置baseURL
if (process.server) {
    config.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
    // console.log(`api is true ${config.baseURL}`)
}

const service = axios.create(config)

// POST 将json格式参数转化为formdata参数
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
        return service({
            method: 'post',
            url,
            params: data
        })
    },
    // get 方法
    get(url, data) {
        console.log('get request url', url)
        return service({
            method: 'get',
            url,
            params: data
        })
    },
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

