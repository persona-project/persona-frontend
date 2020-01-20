import axios from "./index"

export const testGetApi = (data) => {
    return axios.get("/api/testGet", data)
}

export const testPostApi = (data) => {
    return axios.post("/api/testPost", data)
}

export const testDeleteApi = (data) => {
    return axios.delete("/testDelete", data)
}