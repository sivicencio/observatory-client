import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

export function useAsyncAction(action, ...args) {
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(() => dispatch(action(...args)), [
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ...args,
    action,
    dispatch,
  ]);
}

export default useAsyncAction;
