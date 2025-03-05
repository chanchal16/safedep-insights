"use client";
import { InsightContextType } from "@/types/type";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const initialData = {
  insight: {},
  packageVersion: {
    package: {
      ecosystem: "",
      name: "",
    },
    version: "",
  },
};

const InsightContext = createContext<InsightContextType>({
  data: initialData,
  setData: () => {},
  loading: true,
});

const InsightProvider = ({ children }: any) => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/fetch-data");
      if (response.ok) {
        const responseData = await response.json();
        setData(responseData);
        setLoading(false);
        console.log(responseData);
      } else {
        console.error("Error fetching data:", response.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const value = useMemo(() => ({ data, setData, loading }), [data]);
  return (
    <InsightContext.Provider value={value}>{children}</InsightContext.Provider>
  );
};

const useInsights = () => useContext(InsightContext);
export { InsightProvider, useInsights };