 import { useEffect } from 'react';
import {io} from 'socket.io-client'
const socket=io("http://localhost:2007");
function App() {
    function append(msg)
    {
        const msg_data=document.getElementById('dat')
        msg_data.innerText=msg
        console.log('append done !')
    }
    useEffect(() => {
      socket.on('connect',()=>{
        console.log('id--',socket.id)
      })
      const name = prompt('Enter your name here');
      socket.emit('msg', `${name} joined the chat !!`);
      socket.on('user-joined', (name) => {
        console.log(socket.id)
        append(name);
        console.log(name);
      });
    }, []);
  return (
    <>
      <div>Heyy there Now</div>
      <div id='dat'></div>
    </>
  )
}

export default App