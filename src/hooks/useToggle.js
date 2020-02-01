import { useCallback, useState } from 'react';

export default function useToggle(initialState) {
  const [value, setValue] = useState(initialState);

  const toggle = useCallback(() => {
    setValue((prevValue) => !prevValue);
  }, []);

  return [value, toggle];
}
