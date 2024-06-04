import Api from "./api";


export const getAllComments = async (postId, token) =>{
    return await Api.get(`/api/comment/${postId}`,{
        headers :{
            "Authorization" : `Bearer ${token}`
        } 
    })
}

export const addComment = async (data, token) =>{
    return await Api.post(`/api/comment`, data,{
        headers :{
            "Authorization" : `Bearer ${token}`
        } 
    })
}



