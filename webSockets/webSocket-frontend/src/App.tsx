import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef();

  const sendMessage = () => {
    if (!socket) return;
    //@ts-ignore
    const message = inputRef.current.value;
    //@ts-ignore
    socket.send(message);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (ev) => {
      alert(ev.data);
    }
    // ws.onerror = () => {
    //
    // }
    //
    // ws.onclose = () => {
    //
    // }
    //
    // ws.onopen = () => {
    //
    // }
  }, [])

  return (
    <>
      <input ref={inputRef} type='text' placeholder='Message...'></input>
      <button onClick={sendMessage}>Send</button>
    </>
  )
}

export default App
