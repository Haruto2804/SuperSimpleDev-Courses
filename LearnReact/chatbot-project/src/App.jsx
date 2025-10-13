import { useState,useEffect } from 'react'
import {ChatInput} from './assets/components/ChatInput'
import ChatHistory from './assets/components/ChatHistory'
import { Chatbot } from 'supersimpledev'
import './App.css'






      

  function App () {
    useEffect(() => {
    Chatbot.addResponses({
      'goodbye': 'Goodbye. Have a great day!',
      'give me a unique id': function() {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      }
    });

  // [] tells useEffect to only run once. We only want to run
  // this setup code once because we only want to add these
  // extra responses once.
  }, []);


        const [chatMessages, setChatMessages] = useState ([])
        const title = 'Welcome to the Chatbot Project! Send a message using the textbox below.'
        
        return (

        <div className = "app-container">
          <h1 className = "title">{chatMessages.length === 0 && title}</h1>
          <ChatHistory
          chatMessages = {chatMessages}
          />
            <ChatInput
          chatMessage = {chatMessages}
          setChatMessages = {setChatMessages}
          />
        </div>
      )
    }
    

export default App
