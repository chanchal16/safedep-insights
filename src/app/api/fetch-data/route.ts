export const runtime = 'nodejs';

import { Ecosystem } from "@buf/safedep_api.bufbuild_es/safedep/messages/package/v1/ecosystem_pb.js";
import { InsightService } from "@buf/safedep_api.connectrpc_es/safedep/services/insights/v2/insights_connect.js";
import { createPromiseClient } from "@connectrpc/connect";

function authenticationInterceptor(token: string, tenant: string) {
  return (next: any) => async (req: any) => {
    req.header.set("authorization", token);
    req.header.set("x-tenant-id", tenant);
    return await next(req);
  };
}

export async function GET() {
  // Dynamically import the Node-only module so it’s only required at runtime.
  const { createConnectTransport } = await import("@connectrpc/connect-node");

  const token = process.env.SAFEDEP_API_KEY;
  if (!token) {
    console.error("SAFEDEP_API_KEY is required");
    return new Response("Missing API key", { status: 500 });
  }

  const tenantId = process.env.SAFEDEP_TENANT_ID;
  if (!tenantId) {
    console.error("SAFEDEP_TENANT_ID is required");
    return new Response("Missing Tenant ID", { status: 500 });
  }

  const transport = createConnectTransport({
    baseUrl: "https://api.safedep.io",
    httpVersion: "1.1",
    interceptors: [authenticationInterceptor(token, tenantId)]
  });

  const client = createPromiseClient(InsightService, transport);

  try {
    const res = await client.getPackageVersionInsight({
      packageVersion: {
        package: {
          ecosystem: Ecosystem.NPM,
          name: "express",
        },
        version: "4.10.5",
      }
    });
    console.log(res.toJson());
    return new Response(JSON.stringify(res.toJson()), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error fetching data", { status: 500 });
  }
}
