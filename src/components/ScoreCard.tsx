import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, AlertCircle, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useInsights } from "@/contexts/InsightContext";

const Scorecard = () => {
  const { data } = useInsights();
  const { insight } = data;
  const projInsights = insight?.projectInsights ?? []
  const checks = projInsights[0]?.scorecard?.checks;

  // Determine icon and color based on score
  const getScoreIcon = (score: number) => {
    if (score === 10) return <CheckCircle2 className="text-green-500" />;
    if (score === -1 || !score) return <Info className="text-blue-500" />;
    if (score < 5) return <XCircle className="text-red-500" />;
    return <AlertCircle className="text-yellow-500" />;
  };

  // Render placeholder if no checks
  if (!checks || checks.length === 0) {
    return (
      <div className="container mx-auto p-6 text-center">
        <Card>
          <CardContent className="p-6">
            <p className="text-gray-500">No security checks available</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto space-y-6">
      {/* Detailed Checks Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Security Checks Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-x-auto">
            <div className="min-w-full">
              <div className="grid grid-cols-4 bg-gray-100 p-3 font-semibold border-b">
                <div>Check</div>
                <div>Score</div>
                <div className="col-span-2">Reason</div>
              </div>
              {checks.map(
                (check) =>
                  check && (
                    <div
                      key={check.name}
                      className="grid grid-cols-4 p-3 border-b hover:bg-gray-50 items-center"
                    >
                      <div className="flex items-center space-x-2">
                        {getScoreIcon(check?.score ?? 0)}
                        <span>{check.name}</span>
                      </div>
                      <div>
                        <Badge
                          variant={
                            check.score === 10
                              ? "default"
                              : check.score === -1 || !check.score
                              ? "secondary"
                              : check.score < 5
                              ? "destructive"
                              : "outline"
                          }
                        >
                          {check.score === -1 || !check.score
                            ? "N/A"
                            : `${check.score}/10`}
                        </Badge>
                      </div>
                      <div className="col-span-2 flex justify-between items-center">
                        <span>{check.reason}</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <a
                                href={check.documentation?.url ?? "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline ml-2"
                              >
                                Learn More
                              </a>
                            </TooltipTrigger>
                            <TooltipContent>
                              {check.documentation?.description ??
                                "No additional information"}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default Scorecard;