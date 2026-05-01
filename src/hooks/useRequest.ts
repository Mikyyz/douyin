import { useEffect, useState } from 'react';

export const useRequest = <T>(service: () => Promise<T>) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const run = async () => {
    try {
      setLoading(true);
      const res = await service();
      setData(res);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    run();
  }, []);

  return { loading, data, error, run };
}