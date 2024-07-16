/*set up procces socket io 


1.Make  dir inside a file 
2. One is Server site and another is Client site 
3.Client site should be ur react or fronted file 
4.First just download socket.io-client in react file (command:: npm i socket.io-client)
5.First initialize the Server site (command:: npm init) and then install the socket.io (command:: npm i socket.io)
6.install nodemon in Server (command:npm i nodemon)
7.write "type":"module" in Sever packge.json 

## To send the indivisual message we must use "to" instead "broadcast" and give the socket .id of the corresponding user
"
*/

import { Server } from "socket.io";
  import {createServer} from "http"
//Method -1
// const io=new Server(3001,{
//     cors:{
//         origin:"*"
//     }
// });
// Method-2
const httpServer=createServer();
const io=new Server(httpServer,{
    cors:{
        origin:"*"
    }
});

io.on('connection',(socket)=>{
    // socket.emit('welcome','Thanks for let us connecting the Client Server')
    socket.on('msg',(data)=>{
        console.log('msg from client -',data)
        socket.broadcast.emit('user-joined',`new User ${data}`)
     })
})
httpServer.listen(2007,()=>{
    console.log('Listening on the port 2007')
});