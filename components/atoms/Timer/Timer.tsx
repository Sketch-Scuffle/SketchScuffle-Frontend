import React, { useState, useEffect } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from '@/components/atoms/Timer/custom.module.scss';
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
        <div style={{ width: '90px', height: '90px', position: 'relative' }} >

            <CircularProgressbarWithChildren
                className={styles.progressBar}
                counterClockwise={true}
                value={(timeLeft / secondsLeft) * 100}
                styles={buildStyles({
                    pathColor: `rgb(84,80,219)`,
                    textColor: '#fff',
                    trailColor: 'rgba(255,255,255,0)',

                })}

            >
                <div className={styles.trail}>
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    {`${minutes.toString().padStart(2, '0')}:${secondst.toString().padStart(2, '0')}`}
                </div>
                </div>
            </CircularProgressbarWithChildren>

        </div>
    );
};