"use client";
import Dependencies from "@/components/Dependencies";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import Metrics from "@/components/Metrics";
import Scorecard from "@/components/ScoreCard";
import VulnerabilitySummary from "@/components/Vulnerability";
import { useInsights } from "@/contexts/InsightContext";

export default function Home() {
  const { loading } = useInsights();

  
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="p-8 space-y-8 font-[family-name:var(--font-geist-sans)]">
          <div>
            <h1 className="text-4xl pb-3 font-medium">Package Insights</h1>
            <hr></hr>
          </div>
          <Header />
          <Metrics />
          <Dependencies />
          <Scorecard />
          <VulnerabilitySummary />
        </div>
      )}
    </>
  );
}