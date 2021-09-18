import {
    HISTORY_TICKET
} from './types'
const initialState = {
    historyTicket: []
}

const historyTicketReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case HISTORY_TICKET:
            return {...state, historyTicket: payload}
        default: return {...state}
    }
}

export default historyTicketReducer