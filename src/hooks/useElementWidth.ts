import { RefObject, useState, useLayoutEffect } from "react";

export const useElementWidth = (ref: RefObject<HTMLElement>) => {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    if (!ref.current) return;
    const update = () => setWidth((ref.current as HTMLElement).offsetWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return width;
};
