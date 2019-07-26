import React, { useState, useEffect, useCallback } from "react";

export default (countDownTime, tick = 1000) => {
  const [timeLeft, setTimeLeft] = useState(countDownTime);
  const restart = useCallback((newCountDownTime = countDownTime) => setTimeLeft(newCountDownTime), [
    setTimeLeft,
  ]);

  const tickPassing = useCallback(() => setTimeLeft(t => t - tick), [setTimeLeft, tick]);

  useEffect(() => {
    const timerID = setInterval(tickPassing, tick);
    return () => clearInterval(timerID);
  }, [tickPassing]);

  return [timeLeft, restart];
};
