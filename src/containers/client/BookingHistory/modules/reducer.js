import {
    HISTORY_TICKET
} from './types'
const initialState = {
    historyTicket: [],
    loading: true
}

const historyTicketReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case HISTORY_TICKET:
            return {...state, historyTicket: payload, loading: false}
        default: return {...state}
    }
}

export default historyTicketReducer