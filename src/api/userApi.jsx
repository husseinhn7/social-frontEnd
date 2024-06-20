import Api from './api'


export const  loginApi = async (data) => {
  return await Api.post("/api/auth/login", data , {
    headers : {
      "bypass-tunnel-reminder": true
    }
  })
}


export const register = async (data) =>{
  return await Api.post("/api/auth/register", data)
}



export const editCurrentUser = async (token, data) =>{
  return await Api.patch(`/api/user/updateMe/`,data,{
      headers :{
        "Content-Type" : 'multipart/form-data',
          "Authorization" : `Bearer ${token}`,
          "bypass-tunnel-reminder": true


      } 
  })
}

