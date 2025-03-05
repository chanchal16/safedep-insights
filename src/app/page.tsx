"use client";
import Dependencies from "@/components/Dependencies";
import Header from "@/components/Header";
import Metrics from "@/components/Metrics";
import Scorecard from "@/components/ScoreCard";
import { useInsights } from "@/contexts/InsightContext";

export default function Home() {
  const { data, loading } = useInsights();

  if (!data && loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-8 space-y-8 font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <Header />
      {/* Key Metrics */}
      <Metrics />
      {/* dependencies */}
      <Dependencies />
      {/* score checks */}
      <Scorecard />
    </div>
  );
}