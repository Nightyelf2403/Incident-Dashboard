import { useEffect, useState } from "react";

export const useFetch = (dataSource: any[]) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setData(dataSource);
    }, 500);
  }, [dataSource]);

  return data;
};
