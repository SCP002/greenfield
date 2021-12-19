import { useEffect, useRef } from 'react';

export const useEffectNoFirst = (func: Function, deps: any[]) => {
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    func();
    // eslint-disable-next-line
  }, deps);
};
