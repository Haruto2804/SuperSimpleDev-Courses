import RobotProfileImage from '../robot.png'
import UserProfileImage from '../haruto.jpg'
import './ChatMessages.css'
  export function ChatMessage ({message,sender}) {
        return (
          <div className = {sender === 
          'user' ? 'chat-message-user' : 
          'chat-message-robot'}>
            {sender === 'robot' && (
              <img src = {RobotProfileImage}/>)}
            <div className = "chat-message-text">
                {message}
            </div>
            
            
            {sender === 'user' && (
              <img className = "chat-message-haruto-picture"src = {UserProfileImage} />)}

          </div>
        )
      }

export default ChatMessage;