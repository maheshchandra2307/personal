import { useState, useEffect } from 'react';

/**
 * Generic async data-fetching hook.
 * @param {() => Promise<unknown>} fetcher
 */
export function useFetch(fetcher) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [requestId, setRequestId] = useState(0);

  useEffect(() => {
    let isActive = true;

    async function loadData() {
      setLoading(true);
      setError(null);

      try {
        const result = await fetcher();
        if (isActive) {
          setData(result);
        }
      } catch (err) {
        if (isActive) {
          setError(err instanceof Error ? err : new Error('Request failed'));
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    loadData();

    return () => {
      isActive = false;
    };
  }, [fetcher, requestId]);

  function refetch() {
    setRequestId((current) => current + 1);
  }

  return { data, loading, error, refetch };
}

export default useFetch;
