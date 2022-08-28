import React,{useState,useEffect} from 'react';

import {
  TiLocationArrowOutline
} from "react-icons/ti";


const PublicMessages = ({}) => {
  
  const [messages, setmessages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [content, setContent] = useState(null);
  let room_id =sessionStorage.getItem('room_id')

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`http://127.0.0.1:8000/room/api/message_list/${room_id}/`);
      const jsonResult = await result.json();
      setmessages(jsonResult);
      setIsLoaded(true);
    }
    
    fetchData();
  }, [messages])

  const handleSetContent = (content) => {
    setContent(content)
  }
  

  const addmessage = async(event) => {

    event.preventDefault();
    event.target.reset();
    const result = await fetch('http://127.0.0.1:8000/room/api/send_message/', {
    method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "user": 1,
        "room": 2,
        "content": content
        })
      })

    // const newMessage = await result.json();
    // setmessages(oldContent => [... oldContent, newMessage]);
}

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {

    return (
        <div class="messagesPanel">
              <h3 class="messagesHeader">public messages</h3>
              <div class="messages">
              <ul>
                  {messages.map(message => (
                    <li key={message.created_at} >
                      <p>{message.content}</p>
                      <span>{message.user}</span>
                    </li>
                  ))}
                </ul>
                {/* <ul>
                  <li>
                    <p>hello everybody</p>
                    <span>john</span>
                  </li>
                  <li>
                    <p>hello</p>
                    <span>lisa</span>
                  </li>
                  <li className='chat-messages-me'>
                    <p>i wanna ask a question from master ... </p>
                    <span>mike smith</span>
                  </li>
                </ul> */}
              </div>
              <form class="typeBox" action="" onSubmit={addmessage}>
                <input type="text" placeholder="Enter Message" onChange={e => handleSetContent(e.target.value)} name="question" required/>
                <button className="sumbit-btn" type="submit" ><TiLocationArrowOutline className="submit-icon" /></button>
              </form>
            </div>
    )
  }
}

export default PublicMessages;