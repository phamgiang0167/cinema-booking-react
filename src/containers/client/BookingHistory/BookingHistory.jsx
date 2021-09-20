import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { actHistoryTicketApi } from './modules/actions'
import Loader from 'components/Loader/Loader';
import './BookingHistory.scss'
import historyTicketReducer from './modules/reducer';
import HistoryItem from './components/HistoryItem/HistoryItem';
export default function BookingHistory(props) {
    const { historyTicket, loading } = useSelector(state => state.historyTicketReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actHistoryTicketApi())
    }, [])
    console.log(historyTicket)
    if (loading) return <Loader />
    return (
        <div className="history">
            <div className="p-5 ">
                <h3>Lịch sử đặt vé</h3>
            </div>
            <div className="row" style={{width: "100%", margin: "0"}}>
               {historyTicket?.map((item) => {
                    return (
                        <HistoryItem historyTicket={item} />
                    )
                })}
            </div>
        </div>

    )
}
