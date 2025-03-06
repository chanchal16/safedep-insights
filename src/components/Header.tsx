import { useInsights } from "@/contexts/InsightContext";
import React from "react";

const Header = () => {
  const { data } = useInsights();
  const { insight, packageVersion } = data;
  const publishedDate = insight?.packagePublishedAt;
  return (
    <div className="space-y-2 p-2 border-b-2 border-gray-100">
      <h1 className="text-3xl font-bold">
        {packageVersion?.package?.name} v{packageVersion?.version}
      </h1>
      <p className="text-muted-foreground">
        Ecosystem:{" "}
        {(packageVersion?.package?.ecosystem ?? "").replace("ECOSYSTEM_", "")}
      </p>
      <p className="text-muted-foreground">
        Published: {publishedDate?.split("T")[0]}
      </p>
      <p className="text-muted-foreground">
        License: {(insight?.licenses?.licenses ?? [])[0]?.licenseId}
      </p>
      <p className="text-muted-foreground">
        Registries: {(insight?.registries ?? []).join(", ")}
      </p>
    </div>
  );
};

export default Header;