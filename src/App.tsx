import { useState } from "react";

function App() {

  const [displayName, setDisplayName] = useState('');
  const [messageText, setMessageText] = useState('');

  const sendMessage = () => {
    const newMessage = {
      userName: displayName,
      text: messageText,
    };
    console.log(newMessage);
  }

  return (
    <>
      <div>Baby Google Mama Serverless Backend</div>
      <input value={displayName} onChange={(event) => setDisplayName(event.target.value)} />
      <input value={messageText} onChange={(event) => setMessageText(event.target.value)} />
      <button onClick={sendMessage}>Send Message</button>
    </>
  )
}

export default App
