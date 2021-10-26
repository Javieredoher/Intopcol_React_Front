import React, {useState} from 'react'
import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
import {SocketContext} from '../context/SocketContext'

export const SendMessage = () => {

    const [message, setMessage] = useState('');
    const {socket} = useContext (SocketContext);
    const {auth} = useContext(AuthContext);
    const {chatState} = useContext(ChatContext);

    const onChange = ({target}) => {
        setMessage(target.value);
    }

    const onSubmit = (ev) => {
        ev.preventDefault();

        if (message.lentgh === 0){return;}
        setMessage('');

        //TODO: EMITIR EVENTO DE SOCKETS PARA ENVIAR EL MENSAJE

        socket.emit('personal-message', {
                from: auth.uid,
                to: chatState.chatActivo,
                message
        });
    }

    return (

        <form onSubmit={onSubmit}>
            <div className="type_msg row">
                <div className="input_msg_write col-sm-9">
                    <input 
                        type="text" 
                        className="write_msg" 
                        placeholder="Mensaje..." 
                        value={message}
                        onChange={onChange}
                    />
                </div>

                <div className="col-sm-3 text-center">

                    <button className="msg_send_btn mt-3" type="submit">
                        enviar
                    </button>
                    
                </div>
            </div>
        </form>
                       
    )
}
