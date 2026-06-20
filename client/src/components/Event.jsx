import React, { useState, useEffect } from 'react'
import * as dates from '../utils/dates'
import '../css/Event.css'

const Event = (props) => {

    const [time, setTime] = useState('')
    const [remaining, setRemaining] = useState('')
    const [isPast, setIsPast] = useState(false)

    useEffect(() => {
        const formattedTime = dates.formatTime(props.time)
        setTime(formattedTime)
    }, [props.time])

    useEffect(() => {
        const timeRemaining = dates.formatRemainingTime(props.date, props.time)
        setRemaining(timeRemaining)
        setIsPast(timeRemaining === 'This event has passed')
    }, [props.date, props.time])

    return (
        <article className={`event-information ${isPast ? 'event-passed' : ''}`}>
            <img src={props.image} alt={props.title} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{props.title}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {props.date} <br /> {time}</p>
                    <p id={`remaining-${props.id}`} className={isPast ? 'negative-time-remaining' : ''}>{remaining}</p>
                </div>
            </div>
        </article>
    )
}

export default Event