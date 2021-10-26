import { types } from "../../types/types";


export const chatReducer = (state, action) => {

    switch (action.type) {

        case types.logOut:
            return{ 
                uid: '',
                chatActivo: null,
                users: [],
                messages: []
            }
        case types.uploadedUsers:
            return{
                ...state,
                users: [...action.payload]
            }

        case types.activarChat:
            
            if( state.chatActivo === action.payload) return state;
            return{
                ...state,
                chatActivo: action.payload,
                mensajes: []
            }

        case types.newMessage:
            if (state.chatActivo === action.payload.from ||
                state.chatActivo === action.payload.to 
            ) {return{
                    ...state,
                    messages: [...state.messages, action.payload]
                }
            } else {
                return state;
            }
            case types.chargeMessages:
                return {
                    ...state,
                    messages: [...action.payload]
                }
        default:
            return state;
    }

} 