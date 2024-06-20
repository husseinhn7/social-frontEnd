import Api from "./api";


const addMessageApi = async (token, data) => {
  return await Api.post(`/api/message`,data,{
    headers :{
        "Authorization" : `Bearer ${token}`,
        "bypass-tunnel-reminder": true
    } 
} )
}


export const getMessagesApi = async (userId, token) =>{
  return await Api.get(`/api/message/${userId}`,{
      headers :{
          "Authorization" : `Bearer ${token}`,
          "bypass-tunnel-reminder": true
      } 
  })
}









export default addMessageApi
