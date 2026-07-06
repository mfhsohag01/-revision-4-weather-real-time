import { useEffect, useRef } from "react";

const useDebounce = (cb, delay) => {
  const timeOutIdRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeOutIdRef.current) {
        clearTimeout(timeOutIdRef.current);
      }
    };
  }, [cb, delay]);

  const debounceCb = (...arg) => {
    if (timeOutIdRef.current) {
      clearTimeout(timeOutIdRef.current);
    }
    timeOutIdRef.current = setTimeout(() => {
      cb(...arg);
    }, delay);
  };
  return debounceCb;
};

export default useDebounce;
