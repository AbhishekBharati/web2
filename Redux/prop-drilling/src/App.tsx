import { useState } from 'react';
import Parent from './components/Parent.js';

function App() {
  const [message, setMessage] = useState("Hello From App");

  const updateMessage = (newMessage: string) => {
    setMessage(newMessage);
  }
  return (
    <div>
      <h1>Prop Drilling Message...</h1>
      <Parent message={message} updateMessage={updateMessage} />
    </div>
  )
}

export default App
