import React from 'react';

import {
  TiLocationArrowOutline
} from "react-icons/ti";

const PublicMessages = ({isActive}) => {
    
    return (
        <div class="messagesPanel">
              <h3 class="messagesHeader">public messages</h3>
              <div class="messages">
                <ul>
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
                  <li>
                    <p>yes mike ask!</p>
                    <span>master</span>
                  </li>
                  <li>
                    <p>how can i have a lot money ?</p>
                    <span>mike smith</span>
                  </li>
                  <li>
                    <p>this is easy mike!!</p>
                    <span>master</span>
                  </li>
                  <li>
                    <p>
                      Choose a job where someone has made a lot of money at this
                      ...
                    </p>
                    <span>master</span>
                  </li>
                  <li>
                    <p>and so so try to be a master in this</p>
                    <span>master</span>
                  </li>
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
                  <li>
                    <p>yes mike ask!</p>
                    <span>master</span>
                  </li>
                  <li>
                    <p>how can i have a lot money ?</p>
                    <span>mike smith</span>
                  </li>
                  <li>
                    <p>this is easy mike!!</p>
                    <span>master</span>
                  </li>
                  <li>
                    <p>
                      Choose a job where someone has made a lot of money at this
                      ...
                    </p>
                    <span>master</span>
                  </li>
                  <li>
                    <p>and so so try to be a master in this</p>
                    <span>master</span>
                  </li>
                </ul>
              </div>
              <form class="typeBox" action="">
                <input type="text" placeholder="Enter Message" name="question" required/>
                <button className="sumbit-btn" type="submit"><TiLocationArrowOutline  /></button>
              </form>
            </div>
    )
}

export default PublicMessages;
