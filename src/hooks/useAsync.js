import { useState, useCallback, useEffect } from 'react';

/**
 * Executes an async function using a hook. Returns common
 * loading, error and value. Can run the async function
 * immediately or you can execute it later by calling
 * the returned `execute` function.
 *
 * The returned variables are:
 *  - `value`: The result of executing the async function
 *  - `pending`: If the async function is executing
 *  - `error`: Error thrown by the async function
 *  - `execute`: Callback for executing the async function
 *  - `clearError`: Callback for setting error to `undefined`
 *
 * @param {Function} asyncFunction Async function to be executed
 * @param {Boolean} [immediate=true] Run the async function immediately or not
 * @return {Object} `{ value, pending, error, execute, clearError }`
 */
function useAsync(asyncFunction, immediate = true) {
  const [pending, setPending] = useState(immediate);
  const [value, setValue] = useState(undefined);
  const [error, setError] = useState(undefined);

  const clearError = useCallback(() => {
    setError(undefined);
  }, [setError]);

  const execute = useCallback(
    (...args) => {
      setPending(true);
      setValue(undefined);
      clearError();
      return asyncFunction(...args)
        .then(setValue)
        .catch(setError)
        .finally(() => setPending(false));
    },
    [asyncFunction, clearError],
  );

  useEffect(() => {
    if (immediate) execute();
  }, [execute, immediate]);

  return {
    value, pending, error, execute, clearError,
  };
}

export default useAsync;
