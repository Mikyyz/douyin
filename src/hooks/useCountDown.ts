import { useCallback, useEffect, useRef, useState } from "react";

export const useCountDown = (initialTime: number) => {
  // 在两分钟内最多获取3次验证码
  const [count, setCount] = useState(initialTime);
  const [isCounting, setIsCounting] = useState(false); 

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 开始倒计时
  const startCountDown = useCallback(() => {
    setCount(initialTime);
    setIsCounting(true);
  }, [initialTime]);

  // 停止倒计时
  const stopCountDown = useCallback(() => {
    setIsCounting(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isCounting) return;
    if (count <= 0) {
      stopCountDown();
      return;
    }
    timerRef.current = setTimeout(() => {
      setCount(prev => prev - 1);
    }, 1000);

    return () => {
      if (timerRef.current) {
        stopCountDown();
        clearTimeout(timerRef.current);
      }
    };
  }, [count, isCounting, stopCountDown]);
  return {
    count,
    isCounting,
    startCountDown,
    stopCountDown
  }
};