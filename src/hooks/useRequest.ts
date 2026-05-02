import { useCallback, useEffect, useState } from "react";

export const useRequest = <T, Args extends any[]>(
  service: (...args: Args) => Promise<T>,
  options?: {
    manual?: boolean; // 是否手动触发
  },
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const run = useCallback(
    async (...args: Args) => {
      try {
        setLoading(true);
        const res = await service(...args);
        setData(res);
        return res;
      } catch (err) {
        setError(err as Error);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [service],
  );

  useEffect(() => {
    if (!options?.manual) {
      console.log("run>>");
      // 无参数默认执行
      run(...([] as unknown as Args));
    }
  }, [run, options?.manual]);

  return { loading, data, error, run };
};
