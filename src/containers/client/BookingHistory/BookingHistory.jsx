import React from 'react'
import { Tabs } from 'antd';
import { List, Avatar } from 'antd';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {actHistoryTicketApi} from './modules/actions'
export default function BookingHistory(props) {
    const {historyTicket} = useSelector(state => state.historyTicketReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actHistoryTicketApi())
    }, [])
    console.log(historyTicket)
    return (
        <div className="p-5">
            <List
                itemLayout="horizontal"
                dataSource={historyTicket}   
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}
