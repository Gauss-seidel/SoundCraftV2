import { useEffect } from 'react';

export const useScrollTop = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.scrollY !== 0) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }, 200);

    return () => clearTimeout(timer);
  }, []);
};