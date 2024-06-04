import React from 'react'
import axios from 'axios'
    const Api = axios.create({
        baseURL : "http://localhost:4000"
    })


export default Api
