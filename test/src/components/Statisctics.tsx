import React, {FC} from 'react';
import {Users, BarChart} from 'react-feather';
import '../styles/Statistics.sass';

const Statistics: FC = () => {
    return (
        <>
            <div className="today-benefit">
                <div className="barchart-icons">
                    <BarChart/>
                </div>
                <div className="benefit-statistic">
                    <h3>56 000 tg</h3>
                    <p>За сегодня</p>
                </div>
                
            </div>
            <div className="active-trains"> 
                <div className="user-icons">
                    <Users/>
                </div>
                <div className="train-statistic">
                    <h3>120</h3>
                    <p>Активных тренировок</p>
                </div>
            </div>
        </>
    );
}



export default Statistics;