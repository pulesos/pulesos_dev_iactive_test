import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "./api/api";
import MessageItem from "./components/MessageItem/MessageItem";
import './App.css'
import { MessagesType } from "./types/types";

function App() {
  const [messages, setMessages] = useState<MessagesType[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const data = new FormData()
    data.append('actionName', 'MessagesLoad')
    axios.post(baseUrl, data)
    .then((res) => {
      setMessages(res.data.Messages)
      setLoading(false)
    })
  }, [])
  
  console.log(messages)

  let messagesElements = 
    messages.map(message => 
      <MessageItem key={message.id} {...message} loading={loading}/>)

  return (
    <div className="App">
      {messagesElements}
    </div>
  );
}

export default App;
