import io from "socket.io-client"

export const socket = io("ws://192.168.1.4:5000", {autoConnect:false})


// export const listen = () => {
//     socket.on("p", (a)=>{
//     console.log(a)
// })
// }

// export const connect = (userId)=>{
//     socket.connect()
//     socket.emit("setSocketId",userId )
// }


// export const send = (id, m) =>{
//      socket.emit("message" ,{id,m})
// }


