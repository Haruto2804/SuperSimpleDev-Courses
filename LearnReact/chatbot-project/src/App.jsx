import { useState } from 'react'
import {ChatInput} from './assets/components/ChatInput'
import ChatHistory from './assets/components/ChatHistory'
import './App.css'






      

  function App () {
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
