import React, { useState, useEffect } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export interface PropsTimer {
    secondsLeft: number;
}

export default function Timer({secondsLeft}: PropsTimer){
    const [timeLeft, setTimeLeft] = useState(secondsLeft);

    useEffect(() => {

        if (!timeLeft) return;

        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const minutes = Math.floor(timeLeft / 60);
    const secondst= timeLeft % 60;

    return (
        <div style={{ width: '90px', height: '90px', position: 'relative' }}>
            <CircularProgressbarWithChildren
                counterClockwise={true}
                value={(timeLeft / secondsLeft) * 100}
                strokeWidth={8}
                styles={buildStyles({
                    pathColor: `rgb(84,80,219)`,
                    textColor: '#fff',
                    trailColor: 'rgb(255,255,255)',

                })}
            >
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    {`${minutes.toString().padStart(2, '0')}:${secondst.toString().padStart(2, '0')}`}
                </div>
            </CircularProgressbarWithChildren>
        </div>
    );
};