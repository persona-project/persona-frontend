import http from 'http'
import https from 'https'
import { Message } from 'element-ui'

export default {
    // 自定义的请求头
    headers: {
        post: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        'X-Requested-With': 'XMLHttpRequest'
    },
    // 超时设置
    timeout: 1000,
    // 跨域是否带Token
   // withCredentials: true,
    // 响应的数据格式 json / blob /document /arraybuffer / text / stream
    responseType: 'json',
    // 用于node.js
    httpAgent: new http.Agent({
        keepAlive: true
    }),
    httpsAgent: new https.Agent({
        keepAlive: true
    }),
    validateStatus(status) {
        switch (status) {
            case 400:
                Message.error("request error")
                break
            case 401:
                Message.warning({ message: "Authourization error.Please login again" })
                StorageEvent.commit('LOGIN_OUT')
                setTimeout(() => {
                    window.location.reload()
                })
                break
            case 403:
                Message.warning({
                    message:"Access Denied"
                })
                break
            case 404:
                Message.warning({
                    message:'Request not found'
                })
                break
            case 500:
                Message.warning({
                    message:"Server error"
                })
                break
        }
        return status>=200 && status<=300
    }
}