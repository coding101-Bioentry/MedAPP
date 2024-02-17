import React, { useState, useEffect } from 'react';
import sunImage from "./components/ui/sun.png"; // 引入太阳图片
import moonImage from "./components/ui/moon.png"; // 引入月亮图片

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  const isAm = currentTime.getHours() < 12;

  const imageSrc = isAm ? sunImage : moonImage;
  
  const timeString = currentTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
  return (
    <div>
      <img src={imageSrc} alt={isAm ? "sun" : "moon"} style={{ width: 50, height: 50 }} />
      <div>{timeString}</div>
    </div>
  );

    
}

export default Clock;
