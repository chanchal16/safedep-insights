import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MetricCardProps } from "@/types/type";

const MetricCard = ({
  icon: Icon,
  value,
  label,
  color = "text-blue-500",
  tooltipContent,
}: MetricCardProps) => {
  const formattedValue =
    typeof value === "number" ? value.toLocaleString() : value;

  const cardContent = (
    <Card className="hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <CardContent className="p-4 flex items-center space-x-4">
        <div className={`p-3 rounded-full bg-gray-100 ${color}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="text-2xl font-bold text-gray-800">
            {formattedValue}
          </div>
          <div className="text-sm text-gray-500">{label}</div>
        </div>
      </CardContent>
    </Card>
  );

  // If tooltip content is provided, wrap the card in a tooltip
  return tooltipContent ? (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="w-full">{cardContent}</TooltipTrigger>
        <TooltipContent>{tooltipContent}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ) : (
    cardContent
  );
};
export default MetricCard;