import { InsightData } from "@/types/type";

export const classifyVulnerabilities = (
  vulnerabilities: InsightData["insight"]["vulnerabilities"]
) => {
  return (
    vulnerabilities?.reduce((acc, vuln) => {
      const severity =
        vuln.severities?.find((s) => s.risk) || vuln.severities?.[0];
      const risk = severity?.risk ?? "RISK_LOW";

      if (!acc[risk]) {
        acc[risk] = 0;
      }
      acc[risk]++;

      return acc;
    }, {} as Record<string, number>) || {}
  );
};