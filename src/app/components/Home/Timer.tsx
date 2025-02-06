"use client"
import {useState,useEffect} from "react";   
import Banner from "./Banner";

const Timer = () =>{
const [currentTime, setCurrentTime] = useState(new Date());
const [timeUp, setTimeUp] = useState(false);


const targetDate = new Date('2025-03-06T10:00:00'); 

useEffect(() => {
  const intervalId = setInterval(() => {
    const now = new Date();
    setCurrentTime(now);

    
    if (now >= targetDate) {
      clearInterval(intervalId);
      setTimeUp(true); 
    }
  }, 1000);

  return () => clearInterval(intervalId); 
}, []);

const getTimeRemaining = () => {
  const totalTime = targetDate.getTime() - currentTime.getTime();

  
  if (totalTime <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const seconds = Math.floor((totalTime / 1000) % 60);
  const minutes = Math.floor((totalTime / (1000 * 60)) % 60);
  const hours = Math.floor((totalTime / (1000 * 60 * 60)) % 24);
  const days = Math.floor(totalTime / (1000 * 60 * 60 * 24));

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

const { days, hours, minutes, seconds } = getTimeRemaining();

return (
  <>
    {timeUp ? (
      <div>
        <h1>Countdown Over!</h1>
        <p>The target date has passed.</p>
      </div>
    ) : (
      <Banner days={days} hours={hours} minutes={minutes} seconds={seconds} />
    )}
</>
);
}

export default Timer;