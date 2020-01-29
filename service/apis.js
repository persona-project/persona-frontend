import axios from "./index"

export const login=(params)=>{
    return axios.post(params)
}

//user controller
export const getAgeCnt = (params) => {
    return axios.get("/user/age", params);
}

export const getAreaCnt = (params) => {
    return axios.get("/user/area", params);
}

export const getSexCnt = (params) => {
    return axios.get("/user/sex", params);
}

//post controller
export const getActiveFlagCnt = (params) => {
    return axios.get("/post/activeFlag", params);
}

export const getAnonymousCnt = (params) => {
    return axios.get("/post/anonymous", params);
}

export const getBrowseCnt = (params) => {
    return axios.get("/post/countBrowse", params)
}

export const getReplyCnt=(params)=>{
    return axios.get("/post/countReply",params)
}

export const getVoteCnt=(params)=>{
    return axios.get("/post/countVote",params)
}

export const getDeletedCnt=(params)=>{
    return axios.get("/post/deleted",params)
}

export const getLastReplyTime=(params)=>{
    return axios.get("/post/lastReplayTime",params)
}

export const getPostTime=(params)=>{
    return axios.get("/post/postTime",params)
}

export const getTagAgree=(params)=>{
    return axios.get("/post/tagAgree",params)
}

export const getTagLector=(params)=>{
    return axios.get("/post/tagLector",params)
}

export const getTagTop=(params)=>{
    return axios.get("/post/tagTop",params)
}
