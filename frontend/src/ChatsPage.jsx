
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  

    return (
    <div style={{height:"100vh"}}>
              <PrettyChatWindow
              projectId="9840ab20-8eb2-4275-b162-81fe6c51fc30"
              username={props.user.username}
              secret={props.user.secret}
              style={{ height: '100vh' }}
              />
          </div>
    )
  };
  export default ChatsPage;