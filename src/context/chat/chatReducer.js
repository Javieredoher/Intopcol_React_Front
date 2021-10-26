import { types } from "../../types/types";


export const chatReducer = (state, action) => {

    switch (action.type) {

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
        default:
            return state;
    }

} 