import Api from './api'
export const  loginApi = async (data) => {
  return await Api.post("/api/auth/login", data)
}


export const register = async (data) =>{
  return await Api.post("/api/auth/register", data)
}