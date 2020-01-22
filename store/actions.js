import request from '../service'
const api='api'

//TODO  添加相应的api
export const banner=async(store,params)=>{
    return await request.get(`${api}/`,params)
}