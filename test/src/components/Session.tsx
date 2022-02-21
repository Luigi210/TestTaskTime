import React, {FC, useEffect, useState} from 'react';
import {sessionData} from '../data/data';
import {SessionType} from '../types/types';

import '../styles/Session.sass';

type ShowActive = {
    showActive: boolean,
    search: string
}

const Session: React.FC<ShowActive> = ({showActive, search}) => {

    const [data, setData] = useState<SessionType[]>(sessionData);

    useEffect(() => {
        if(search !== ''){
            const results  = data.filter(item => item.name.toLowerCase().includes(search));
            setData(results);
        }
        else{
            setData(sessionData);
        }
    }, [search]);

    return (
        <div className="session-container">
            {data.map((session: SessionType) => {
                if (session.active === showActive) {
                        const firstLetter = session.name[0];
                        const year = session.date.getFullYear()
                        const month = session.date.getMonth()
                        const day = session.date.getDate()
                        const hour = session.date.getHours()
                        const minute = session.date.getMinutes()
                        const time = `${hour}:${minute} ${day}.${month}.${year}`;
                        const hourMinute = `${hour}:${minute}`;
                        return (<div className="session-block" key={session.id}>
                                    <div className="date-company-name"> 
                                        <span>{session.companyName}</span>
                                        <span>{time}</span>    
                                    </div>
                                    <div className="personal-data">
                                        <div className="first-letter">
                                            {firstLetter}
                                        </div>
                                        <div className="data">
                                            <div className="personal-info">
                                                <span className="personal-name">{session.name}</span><br/>
                                                <span className="personal-number">{session.phoneNumber}</span>
                                            </div>
                                            <div className="time-value">
                                                <span>{hourMinute}</span><br/>
                                                <span>{session.value}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                        }
                    }
                )
            }
        </div>
    );
}



export default Session;