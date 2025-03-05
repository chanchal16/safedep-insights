import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useInsights } from "@/contexts/InsightContext";

const Metrics = () => {
  const { data } = useInsights();
  const { insight } = data;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>GitHub Stars</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">
            {insight?.projectInsights[0]?.stars}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>GitHub Forks</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">
            {insight?.projectInsights[0]?.forks}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>GitHub Issues</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">
            {insight?.projectInsights[0]?.issues?.open}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Scorecard Rating</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">
            {insight?.projectInsights[0]?.scorecard?.score?.toFixed(1)}/10
          </p>
        </CardContent>
      </Card>
      {/* Repeat for Forks, Open Issues, and Scorecard Rating */}
    </div>
  );
};

export default Metrics;