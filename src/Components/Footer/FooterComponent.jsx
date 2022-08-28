import React,{useState} from 'react';

import {
  FaMicrophone,
  FaVideo,
  FaHandPointUp,
  FaPhoneSlash
} from "react-icons/fa";
import { TbScreenShare } from "react-icons/tb";
import { BsChatRightTextFill } from "react-icons/bs";
import { SiGooglechat } from "react-icons/si";
import { RiSurveyFill, RiSurveyLine } from "react-icons/ri";




const FooterComponent = ({
  setStateChat, 
  setIsActive, 
  setMicActive,
  setWebcamActive,
  setRaiseHandActive,
  setScreenShareActive,
  setCreateSurveyActive,
  setShowSurveyActive,
  setPvFooterActive,
  setPvCardActive,
  isActive,
  pvCardActive,
  pvFooterActive,
  setReload,
  
  }) => {

    const [CreateSurvey, setCreateSurvey] = useState(true);
    const [ShowSurvey, setShowSurvey] = useState(true);
    const [mic, setMic] = useState(true);
    const [webcam, setWebcam] = useState(true);
    const [raiseHand, setRaiseHand] = useState(true);
    const [shareScreen, setShareScreen] = useState(true);
    const [pubMess, setPubMess] = useState(true);
    const [pvBox, setPvBox] = useState(true);


    /* Conditions for active and unactive pvbox */
    if (pvFooterActive===false && pvCardActive===false && pvBox===false) {setPvBox(pvBox => true);}
    if (pvFooterActive===false && pvCardActive===true && pvBox===true) {setPvBox(pvBox => false);}
    if (isActive===false && pubMess===false) {setPubMess(pubMess => true);}


    function HandleCreateSurvey() {
      if(ShowSurvey===false) {setShowSurvey(true);setShowSurveyActive(ShowSurvey)}
      setCreateSurvey(CreateSurvey => !CreateSurvey);
      setCreateSurveyActive(CreateSurvey);
      setReload(oldRelaod => oldRelaod + 1);
    }

    function HandleShowSurvey() {
      if(CreateSurvey===false) {setCreateSurvey(true);setCreateSurveyActive(CreateSurvey)}
      setShowSurvey(ShowSurvey => !ShowSurvey);
      setShowSurveyActive(ShowSurvey);
      setReload(oldRelaod => oldRelaod + 1);
    }

    function HandleStartMicroPhone() {
      setMic(mic => !mic)
      fetch("http://127.0.0.1:8000/room/api/user/microphone/2/", {
      method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "microphone": mic,
          })
      })
      setReload(oldRelaod => oldRelaod + 1);
    }

    function HandleStartWebcam() {
      setWebcam(webcam => !webcam);
      fetch("http://127.0.0.1:8000/room/api/user/webcam/1/", {
      method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "webcam": webcam,
          })
      })
      setReload(oldRelaod => oldRelaod + 1);
    }

    function HandleStartShareScreen() {
      setShareScreen(shareScreen => !shareScreen);
      fetch("http://127.0.0.1:8000/room/api/user/screen/1/", {
      method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "screen": shareScreen,
          })
      })
      setReload(oldRelaod => oldRelaod + 1);
    }

    function HandleStartRaiseHand() {
      setRaiseHand(raiseHand => !raiseHand);
      setRaiseHandActive(raiseHand);
    }

    function handleToggle() {
      /* Conditions for active and unactive public messages */
      if(pvFooterActive===true || pvCardActive===true) {setPvFooterActive(false); setPvCardActive(false); setPvBox(pvBox => true); setPubMess(pubMess => true);}
      if(isActive===true && pvCardActive===true) {setPubMess(pubMess => true);}
      if(isActive===false) {setIsActive(true); setPubMess(pubMess => false);}
      if(isActive!==false) {setIsActive(false); setPubMess(pubMess => true);}

    }

    function HandlePrivateIsActive(Chat)
    {
      /* Conditions for unactive pubm */
      if (isActive===true) {setIsActive(false); setPubMess(pubMess => true);}

      /* Conditions for active and unactive pvm */
      if(pvBox===true && pvCardActive===true) {setPvCardActive(false);}
      if(pvBox===false && pvCardActive===true) {setPvCardActive(false); setPvFooterActive(true);}
      if(pvBox===true && pvCardActive===false) {setPvFooterActive(true); setPvBox(pvBox => false)}
      if(pvBox===false && pvCardActive===false) {setPvFooterActive(false); setPvBox(pvBox => true)}

      // adjust state of pvBox
      setStateChat(Chat);
    }

    function HandleCallOut() {
      /* kill call */
    }

    return (
      <footer>
            <p className="projectName">Cyber meeting</p>
            <div className="middleIcons">
              <ul>
                <li title="ShowSurvey" onClick={HandleShowSurvey}>
                  {" "}
                  <RiSurveyLine />{" "}
                </li>
                <li title="CreateSurvey" onClick={HandleCreateSurvey}>
                  {" "}
                  <RiSurveyFill />{" "}
                </li>
                <li title="microphone" onClick={HandleStartMicroPhone}>
                  {" "}
                  <FaMicrophone />{" "}
                </li>
                <li title="camera" onClick={HandleStartWebcam}>
                  {" "}
                  <FaVideo />{" "}
                </li>
                <li title="share screen" onClick={HandleStartShareScreen}>
                  {" "}
                  <TbScreenShare />
                </li>
                <li title="raise hand" onClick={HandleStartRaiseHand}>
                  {" "}
                  <FaHandPointUp />{" "}
                </li>
                <li title="call out" className="COut" onClick={HandleCallOut}>
                  {" "}
                  <FaPhoneSlash />{" "}
                </li>
              </ul>
            </div>
            <div className="rightIcons">
              <ul>
                <li
                  title="Public messages"
                  className={pubMess ? "toggle" : "toggle active"}
                  onClick={() => handleToggle()}
                >
                  {" "}
                  <BsChatRightTextFill />{" "}
                </li>

                <li
                  title="Private messages"
                  className={pvBox ? "privateToggle" : "privateToggle active"}
                  onClick={() => HandlePrivateIsActive(true, "", "")}
                >
                  {" "}
                  <SiGooglechat />{" "}
                </li>
              </ul>
            </div>
          </footer>
    )
}

export default FooterComponent;