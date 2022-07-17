import { React, Component } from 'react';

import { FaMicrophone, FaVideo, FaHandPointUp, FaPhoneSlash } from 'react-icons/fa';
import { TbScreenShare, TbMessageDots } from 'react-icons/tb';
import {BsChatRightTextFill} from 'react-icons/bs'

class App extends Component{

    state = {isActive: false};

    handleToggle = () => {
        this.setState({isActive: !this.state.isActive, isHover: !this.state.isHover});
    }
    
    render() {

        const isActive = this.state.isActive;
        const isHover = this.state.isHover;

        return(
            <div>
            <div className="room">
                <div className="middleContent">
                    <div class={isActive ? "sharedScreen active" : "sharedScreen"}>Shared Screen</div>
                    <div class={isActive ? "messagesPanel active" : "messagesPanel"}>
                        <h3 class="messagesHeader">messages</h3>
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
                                <li>
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
                                    <p>Choose a job where someone has made a lot of money at this ...</p>
                                    <span>master</span>
                                </li>
                                <li>
                                    <p>and so so try to be a master in this</p>
                                    <span>master</span>
                                </li>
                            </ul>
                        </div>
                        <div class="typeBox">
                            <p>Type here</p>
                            <span>icon</span>
                        </div>
                    </div>
                </div>
                <div className="users">
                    <div className="boxes">
                        <ul>
                            <li>
                                <div class="circle">
                                    <img alt="img" src="/img/girl.jpg" />
                                </div>
                                <p>lisa</p>
                            </li>
                            <li>
                                <div class="circle">
                                    <img alt="img" src="img/img1.jpg" />
                                </div>
                                <p>john</p>
                            </li>
                            <li>
                                <div class="circle">
                                    <img alt="img" src="img/img2.jpg" />
                                </div>
                                <p>john</p>
                            </li>
                            <li>
                                <div class="circle"><img alt="img" src="img/img3.jpg" /></div><p>john</p>
                            </li>
                            <li>
                                <div class="circle"><img alt="img" src="img/img5.jpg" /></div><p>john</p>
                            </li>
                            <li>
                                <div class="circle"><img alt="img" src="img/img6.jpg" /></div><p>john</p>
                            </li>
                            <li>
                                <div class="circle"><img alt="img" src="img/img7.jpg" /></div><p>john</p>
                            </li>
                            <li>
                                <div class="circle"><img alt="img" src="img/img8.jpg" /></div><p>john</p>
                            </li>
                            <li>
                                <div class="circle"><img alt="img" src="img/img9.jpg" /></div><p>john</p>
                            </li>
                            <li>
                                <div class="circle"><img alt="img" src="img/img1.jpg" /></div><p>john</p>
                            </li>
                            <li>
                                <div class="circle"><img alt="img" src="img/girl.jpg" /></div><p>john</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <span className="underline"></span>
                <footer>
                    <p className='projectName'>Cyber meeting</p>
                    <div className='middleIcons'>
                        <ul>
                            <li title='microphone' className='mic'> <FaMicrophone /> </li>
                            <li title='camera' className='video'> <FaVideo /> </li>
                            <li title='share screen' className='SShare'> <TbScreenShare /></li>
                            <li title='raise hand' className='RHand'> <FaHandPointUp /> </li>
                            <li title='call out' className='COut'> <FaPhoneSlash /> </li>
                        </ul>
                    </div>
                    <div className='rightIcons'>
                        <ul>
                            <li title='messages' className={isActive ? "toggle active" : "toggle"} onClick={this.handleToggle}> <BsChatRightTextFill /> </li>
                        </ul>
                    </div>
                </footer>
            </div>
          </div>
          )
    }
}

export default App;