import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
const Home = () => {
  const navigaet = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigaet("/LoginApi");
    }
  }, []);
  const userlogout = () => {
    localStorage.removeItem("token");
    navigaet("/LoginApi");
  };
  // speech recognition
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { transcript, browserSupportsSpeechRecognition} = useSpeechRecognition();
  
  if (!browserSupportsSpeechRecognition) {
    return null
}
//sepeech recognition End
  return (
    <>
      <button onClick={userlogout}>logout</button>
      <div className="container">
        <h2>Speech to Text Converter</h2>
        <br />
        <p>
          A React hook that converts speech from the microphone to text and
          makes it available to your React components.
        </p>
        <div className="main-content">
          {transcript}
        </div>
        <div className="btn-style">
          <button className="btns" >
          Copy
          </button>
          <button className="btns"onClick={startListening} >Start Listening</button>
          <button className="btns" onClick={SpeechRecognition.stopListening} >
          Stop Listening
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
