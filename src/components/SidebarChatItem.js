import React, {useContext} from 'react'
import { ChatContext } from '../context/chat/ChatContext'
import { fetchConToken } from '../helpers/fetch';
import { scrollToBotton } from '../helpers/scrollToBotton';
import { types } from '../types/types'

export const SidebarChatItem = ({user}) => {

    const {chatState, dispatch} = useContext(ChatContext);
    const {chatActivo} = chatState;

    const onClick = async() => {

        dispatch({
            type:types.activarChat,
            payload: user.uid
        });


        const resp = await fetchConToken(`mensajes/${user.uid}`);
        console.log(resp.messages);
        dispatch({
            type: types.chargeMessages,
            payload: resp.messages
        });
        
        scrollToBotton('messages');

    }
    return (
          
            <div 
                className={`chat_list ${(user.uid ===chatActivo) && 'active_chat'}`}
                onClick={onClick}
            >
                {/* Active Chat */}

                <div className="chat_people">
                    <div className="chat_img"> 
                        <img src="https://p.kindpng.com/picc/s/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="avatar" />
                    </div>
                    <div className="chat_ib">
                        <h5>{user.name}</h5>
                        { 
                            (user.online)
                                ? <span className="text-success">Online</span>
                                : <span className="text-danger">Offline</span>

                        }
                       
                    </div>
                </div>
            </div>
          
    )
}
