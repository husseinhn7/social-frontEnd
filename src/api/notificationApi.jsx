import Api from './api'


const getNotificationsApi = async ( token ) => {
    return await Api.get(`/api/notification` ,{
      headers :{
          "Authorization" : `Bearer ${token}`,
          "bypass-tunnel-reminder": true
      } 
  } )
}

export default getNotificationsApi
