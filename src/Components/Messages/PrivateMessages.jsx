import React from 'react';
import { useState } from 'react';


import { 
  TiArrowRightThick,
  TiLocationArrowOutline
} from 'react-icons/ti'

const PrivateMessages = ({stateChat, name, messages}) => {
  

  const [handleChat, setChat] = useState(stateChat)
  // const [Name, setName] = useState(name)
  // const [Messages, setMessages] = useState(messages) /* messages are array */


  if(handleChat)
    {
      return(
        <div className="privateMessagesPanel">
          <h3 class="private-messagesHeader">private messages</h3>
            <div className='show-persons'>
              <ul>
                  <li onClick={() => setChat(handleChat => !handleChat)}>
                      <img alt='person' src='/img/girl.jpg' />
                      <h4>john</h4>
                      <span>2</span>
                  </li>
                  <li>
                      <img alt='person' src='/img/img1.jpg' />
                      <h4>lisa</h4>
                      <span>5</span>
                  </li>
                  <li>
                      <img alt='person' src='/img/img2.jpg' />
                      <h4>sara</h4>
                      <span>8</span>
                  </li>
                  <li>
                      <img alt='person' src='/img/img3.jpg' />
                      <h4>muller</h4>
                      <span>1</span>
                  </li>
                  <li>
                      <img alt='person' src='/img/img4.jpg' />
                      <h4>jack</h4>
                      <span>7</span>
                  </li>
                  <li>
                      <img alt='person' src='/img/img1.jpg' />
                      <h4>leo</h4>
                      <span>2</span>
                  </li>
                  <li>
                      <img alt='person' src='/img/img3.jpg' />
                      <h4>will</h4>
                      <span>5</span>
                  </li>
              </ul>
            </div>
        </div>
      )  
    }
    
    return (
      <div className="privateMessagesPanel">
          <h3 class="private-messagesHeader">private messages</h3>
          <div className='chat-page'>
                  <div className='title-chat-page'>
                    <img alt='john' src='/img/girl.jpg' style={{width:"40px", height:"40px", borderRadius:"50%"}}/>
                    <h4>{name}</h4>
                    <i className="return-arrow" onClick={() => setChat(handleChat => !handleChat)} style={{cursor:"pointer"}}><TiArrowRightThick /></i>
                  </div>
                  <hr />
                  <div className="chat-messages">
                      <p className='chat-messages-other'>hello</p>
                      <p className='chat-messages-other'>what are u doing?</p>
                      <p className='chat-messages-other'>are u in home?</p>
                      <p className='chat-messages-me'>hi john</p>
                      <p className='chat-messages-me'>i am just liesning</p>
                      <p className='chat-messages-me'>and ya i am in home</p>
                      <p className='chat-messages-me'>what are u doing ?</p>
                      <p className='chat-messages-other'>i am writing something about my dreams!</p>
                      <p className='chat-messages-me'>oh it's sweat</p>
                      <p className='chat-messages-other'>ya i will call u later</p>
                      <p className='chat-messages-other'>by</p>
                      <p className='chat-messages-me'>by</p>
                  </div>
          </div>
          <form class="typeBox" action="">
              <input type="text" placeholder="Enter Message" name="question" required/>
              <button className="sumbit-btn" type="submit"><TiLocationArrowOutline className='submit-icon' /></button>
            </form>
      </div>
    )
}

export default PrivateMessages;