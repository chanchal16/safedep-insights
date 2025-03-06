import React from "react";
import { useInsights } from "@/contexts/InsightContext";
import MetricCard from "./MetricCard";
import { Star, GitFork, AlertCircle, Shield, Tag } from "lucide-react";

const Metrics = () => {
  const { data } = useInsights();
  const { insight } = data;
  const projInsights = insight?.projectInsights ?? []
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      <MetricCard
        icon={Star}
        value={projInsights[0]?.stars ?? 0}
        label="GitHub Stars"
        color="text-yellow-500"
        tooltipContent="Total number of stars on the GitHub repository"
      />
      <MetricCard
        icon={GitFork}
        value={projInsights[0]?.forks ?? 0}
        label="GitHub Forks"
        color="text-green-500"
        tooltipContent="Number of times the repository has been forked"
      />
      <MetricCard
        icon={AlertCircle}
        value={projInsights[0]?.issues?.open ?? 0}
        label="GitHub Issues"
        color="text-red-500"
        tooltipContent="Open issues in the GitHub repository"
      />
      <MetricCard
        icon={Shield}
        value={`${projInsights[0]?.scorecard?.score?.toFixed(
          1
        )}/10`}
        label="Scorecard Rating"
        color="text-purple-500"
        tooltipContent="Security score based on various best practices"
      />
      <MetricCard
        icon={Tag}
        value={insight?.availableVersions?.length ?? 0}
        label="Available Versions"
        color="text-blue-500"
        tooltipContent="Number of different versions of the package"
      />
    </div>
  );
};

export default Metrics;