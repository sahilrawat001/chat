 import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';

const  projectID="042cb433-1b2e-416d-b3f2-91705521a3a2";
 
const App =()=> {
  if (!localStorage.getItem('username')) return <LoginForm/>;
  return (
    <>
      <ChatEngine
      height ='100vh'
      projectID= {projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={ (chatApp)=><ChatFeed {...chatApp}/>}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}

      />
    </>
  );
}

export default App;
