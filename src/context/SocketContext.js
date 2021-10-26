import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from './chat/ChatContext';
import { useSocket } from '../hooks/useSocket'
import { types } from '../types/types';
import { scrollToBottonAnimated } from '../helpers/scrollToBotton';

export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { socket, online, conectarSocket, desconectarSocket } = useSocket('https://chatintopcol.herokuapp.com/api');
    const { auth } = useContext( AuthContext );
    const {dispatch} = useContext( ChatContext);  

    useEffect(() => {
        if ( auth.logged ) {
            conectarSocket();
        }
    }, [ auth, conectarSocket ]);

    useEffect(() => {
        if ( !auth.logged ) {
            desconectarSocket();
        }
    }, [ auth, desconectarSocket ]);

     //Listen changes in conected users

     useEffect(() => {
        socket?.on('users-list', (users) => {
            dispatch({
                type: types.uploadedUsers,
                payload: users
            })
        })
    }, [ socket, dispatch ]);

    useEffect(() => {
        socket?.on('personal-message', (message) => {
            dispatch({
                type: types.newMessage,
                payload: message
            })
            
            scrollToBottonAnimated('messages');

        })
    }, [socket, dispatch]);

    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}