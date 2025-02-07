"use client";
import React, { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimerProps {
  targetDate: number;
}

const Timer: React.FC<TimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const updateTimer = () => {
    const now = new Date().getTime();
    const timeDiff = targetDate - now;
    if (timeDiff <= 0) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    
    setTimeLeft({
        days,
        hours: hours < 10 ? Number(`0${hours}`) : hours,   
        minutes: minutes < 10 ? Number(`0${minutes}`) : minutes, 
        seconds: seconds < 10 ? Number(`0${seconds}`) : seconds, 
      });
  };

  useEffect(() => {
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
   
        <div className="w-[374px] h-[120px] ml-[5px] flex gap-[6px] justify-center mt-[20px]">
        <div className="w-[70px] h-[115px]  flex flex-col gap-[4px]">
            <div className="w-[50px] h-[50px] bg-white text-[25px] digital rounded-lg drop-shadow-lg text-center flex justify-center align-center">{timeLeft.days}</div>
            <div className='poppins-light text-[16px] ml-[10px] '>Days</div>
        </div>
        <div className="w-[70px] h-[115px]  flex flex-col gap-[4px]">
            <div className="w-[50px] h-[50px] bg-white text-[25px] digital rounded-lg drop-shadow-lg text-center flex justify-center align-center">{timeLeft.hours}</div>
            <div className='poppins-light text-[16px] ml-[10px]'>Hr</div>
        </div>
        <div className="w-[70px] h-[115px] flex flex-col gap-[4px]">
            <div className="w-[50px] h-[50px] bg-white  text-[25px] digital rounded-lg drop-shadow-lg text-center flex justify-center align-center">{timeLeft.minutes}</div>
            <div className='poppins-light text-[16px] ml-[10px] '>Mins</div>
        </div>
        <div className="w-[70px] h-[115px] flex flex-col gap-[4px]">
            <div className="w-[50px] h-[50px] bg-white  text-[25px] digital rounded-lg drop-shadow-lg text-center flex justify-center align-center">{timeLeft.seconds}</div>
            <div className='poppins-light text-[16px] ml-[10px] '>Sec</div>
        </div>


    </div>


  );
};

export default Timer;
