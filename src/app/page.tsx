"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/fetch-data");
        if (response.ok) {
          const responseData = await response.json();
          setData(responseData);
          console.log(responseData);
        } else {
          console.error("Error fetching data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Insights</h1>
    </div>
  );
}