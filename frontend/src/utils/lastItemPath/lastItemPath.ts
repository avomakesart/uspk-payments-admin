import { useEffect } from 'react';

export const usegetLastItemOnPath = (value: string) =>
  useEffect(() => {
    const pathname = window.location.pathname;
    const coolFunction = () =>
      pathname.includes(`${value}/`) && pathname.replace(`${value}/`, '');

    coolFunction();
    return () => {};
  }, []);
