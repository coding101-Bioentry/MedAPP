import React, { useState, useEffect } from 'react';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(
      () => setCurrentTime(new Date()),
      1000 // 每秒更新时间
    );

    return () => {
      clearInterval(timerID); // 清除定时器，避免内存泄漏
    };
  }, []);

  //時間格式為「時：分 AM/PM」
  const timeString = currentTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true // 使用12小时制，显示AM/PM
  });

  return (
    <div>
      {timeString}
    </div>
  );
}

export default Clock;
