import React,{useState,useEffect} from 'react';

import {
  TiLocationArrowOutline
} from "react-icons/ti";


const PublicMessages = ({}) => {
  
  const [messages, setmessages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [content, setcontent] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/room/api/message_list/2/")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setmessages(result)
          setIsLoaded(true);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

const addmessage  = (content) => {
  fetch('http://127.0.0.1:8000/room/api/send_message/', {
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
  });
}


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
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
              <form class="typeBox" action="" onSubmit={addmessage(content)}>
                <input type="text" placeholder="Enter Message" name="question" required/>
                <button className="sumbit-btn" type="submit" onClick={e => setcontent(e.target.value)}><TiLocationArrowOutline className="submit-icon" /></button>
              </form>
            </div>
    )
  }
}

export default PublicMessages;
