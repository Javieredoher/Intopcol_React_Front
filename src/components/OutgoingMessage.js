import React from 'react'
import {date} from '../helpers/date';

export const OutgoingMessage = ({msg}) => {
    return (
                           
        <div className="outgoing_msg">
            <div className="sent_msg">
                <p>{msg.message}</p>
                <span className="time_date">{date(msg.createAt)}</span>
            </div>
        </div>
        

    )
}
