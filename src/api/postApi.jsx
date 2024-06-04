import Api from "./api";
 

export const Post = async (data , user) =>{
    console.log(user)
    return await Api.post("/api/post", data, {
        headers :{
            "Content-Type" : 'multipart/form-data',
            "Authorization" : `Bearer ${user.token}`
        } 
    }  )
}

export const getTimeLine = async (userId, token) =>{
    return await Api.get(`/api/post/${userId}`,{
        headers :{
            "Authorization" : `Bearer ${token}`
        } 
    } )
}



export const reactPost = async (userId, token) =>{
    return await Api.post(`/api/post/${userId}`,{},{
        headers :{
            "Authorization" : `Bearer ${token}`
        } 
    } )
}



// export const reactPost  = async (id, token) =>{
//     console.log(token)
//     return await Api.put(`/api/post/react/${id}`,{
//         headers :{
//             "Authorization" : `Bearer ${token}`
//         } 
//     } )
// }