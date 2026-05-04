// 用于检查是否是大卡片布局
import { useEffect, useState } from 'react'
export const useIsBigCardLayout = () => {
  const [isBigCardLayout, setIsBigCardLayout] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1496px)');

    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsBigCardLayout(e.matches);
    };

    // 初始化
    handler(mediaQuery);

    // 监听变化
    mediaQuery.addEventListener('change', handler);

    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, [])
  return isBigCardLayout;
};