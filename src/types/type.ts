export type InsightData = {
  packageVersion: {
    package?: {
      ecosystem?: string;
      name?: string;
    };
    version?: string;
  };
  insight: {
    dependencies?: {
      package: {
        ecosystem: string;
        name: string;
      };
      version: string;
    }[];
    vulnerabilities?: {
      id?: {
        type?: string;
        value?: string;
      };
      summary?: string;
      aliases?: {
        type?: string;
        value?: string;
      }[];
      related?: {
        value?: string;
      }[];
      severities?: {
        type?: string;
        score?: string;
        risk?: string;
      }[];
      publishedAt?: string;
      modifiedAt?: string;
    }[];
    projectInsights?: {
      project?: {
        type?: string;
        name?: string;
        url?: string;
      };
      stars?: string;
      forks?: string;
      issues?: {
        open?: string;
      };
      scorecard?: {
        date?: string;
        score?: number;
        repo?: {
          name?: string;
          commit?: string;
        };
        checks?: {
          name?: string;
          score?: number;
          reason?: string;
          documentation?: {
            url?: string;
            description?: string;
          };
        }[];
      };
    }[];
    licenses?: {
      licenses?: {
        licenseId?: string;
      }[];
    };
    packagePublishedAt?: string;
    registries?: string[];
    availableVersions?: {
      version?: string;
      publishedAt?: string;
    }[];
    dependencyGraph?: {
      dependencies?: {
        packageVersion?: {
          package?: {
            ecosystem?: string;
            name?: string;
          };
          version?: string;
        };
        relation?: string;
      }[];
      dependencyRelations?: {
        to?: number;
        requirement?: string;
      }[];
    };
  };
};

export interface InsightContextType {
  data: InsightData;
  setData: React.Dispatch<React.SetStateAction<any>>;  // eslint-disable-line @typescript-eslint/no-explicit-any
  loading: boolean;
}

export type MetricCardProps = {
  icon: React.ElementType;
  value: number | string;
  label: string;
  color?: string;
  tooltipContent?: string;
};