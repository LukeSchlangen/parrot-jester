import { useState } from "react";

type userName = {
  text: string;
  userName: string;
}

function App() {

  const [displayName, setDisplayName] = useState('');
  const [messageText, setMessageText] = useState('');

  const [messageFeed, setMessageFeed] = useState<userName[]>([]);



  const sendMessage = () => {
    const newMessage = {
      userName: displayName,
      text: messageText,
    };
    setMessageFeed([...messageFeed, newMessage]);
  }

  return (
    <>
      <div>Baby Google Mama Serverless Backend</div>
      <input value={displayName} onChange={(event) => setDisplayName(event.target.value)} />
      <input value={messageText} onChange={(event) => setMessageText(event.target.value)} />
      <button onClick={sendMessage}>Send Message</button>
      {messageFeed.map((message) => (
        <div>
          {message.userName}: {message.text}
        </div>
      ))}
    </>
  )
}

export default App
