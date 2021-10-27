import React from 'react';
import { ChatProvider } from './context/chat/ChatContext';
import { AuthProvider } from './auth/AuthContext';
import { SocketProvider } from './context/SocketContext';
import { AppRouter } from './router/AppRouter';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');


export const ChatApp = () => {

    console.log("Update1")
    
    return (
        <ChatProvider>
            <AuthProvider>
                <SocketProvider>
                    <AppRouter />
                </SocketProvider>
            </AuthProvider>
        </ChatProvider>
    )
}
