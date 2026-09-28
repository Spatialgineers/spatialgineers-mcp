import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { createServer } from "http";

import studioData from "./data/studio.js";
import summitData from "./data/summit.js";
import sgxData from "./data/sgx.js";
import highcoonData from "./data/highcoon.js";

const server = new McpServer({
  name: "spatialgineers-mcp",
  version: "2.0.0",
});

server.tool(
  "get_studio_info",
  "Returns complete Spatialgineers studio info: founders, specialties, projects, brand guide, tech stack, platforms, operating principles.",
  {},
  async () => ({ content: [{ type: "text", text: JSON.stringify(studioData, null, 2) }] })
);

server.tool(
  "get_summit_status",
  "Returns Spatialgineers Summit 2026 ground truth: dates, venue, run of show (all 3 days), gamification, sponsorship tiers, countdown phases, critical path.",
  {},
  async () => ({ content: [{ type: "text", text: JSON.stringify(summitData, null, 2) }] })
);

server.tool(
  "get_sgx_framework",
  "Returns the complete SGX Guild system: 6 pillars, 8 ranks, evaluation dimensions, Trials structure, Wild Card rule, La Germinadora, and full Grimoire OS spec.",
  {},
  async () => ({ content: [{ type: "text", text: JSON.stringify(sgxData, null, 2) }] })
);

server.tool(
  "get_highcoon_universe",
  "Returns the complete Highcoon canon: character, 8 terpenes, Terp-nology, characters, Stigma City, Libro 1 chapters, Libro 2 multiverse rules, Dhuma Ganji, Spatial ecosystem.",
  {},
  async () => ({ content: [{ type: "text", text: JSON.stringify(highcoonData, null, 2) }] })
);

const PORT = process.env.PORT || 8080;

const httpServer = createServer(async (req, res) => {

  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok", server: "spatialgineers-mcp", version: "2.0.0" }));
    return;
  }

  if (req.url === "/mcp") {
    if (req.method === "POST") {
      // Collect body
      const chunks = [];
      for await (const chunk of req) chunks.push(chunk);
      const body = Buffer.concat(chunks).toString();

      let parsed;
      try {
        parsed = JSON.parse(body);
      } catch {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON" }));
        return;
      }

      const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });

      // Intercept the transport's response to force Content-Type
      const originalHandleRequest = transport.handleRequest.bind(transport);
      transport.handleRequest = async (req, res) => {
        const originalWriteHead = res.writeHead.bind(res);
        res.writeHead = (statusCode, headers) => {
          const merged = Object.assign({ "Content-Type": "application/json" }, headers || {});
          return originalWriteHead(statusCode, merged);
        };
        return originalHandleRequest(req, res);
      };

      res.on("close", () => transport.close());
      await server.connect(transport);
      await transport.handleRequest(req, res);
      return;
    }

    if (req.method === "GET") {
      res.writeHead(405, { "Content-Type": "application/json", "Allow": "POST" });
      res.end(JSON.stringify({ error: "Method Not Allowed. Use POST /mcp" }));
      return;
    }

    if (req.method === "DELETE") {
      res.writeHead(200);
      res.end();
      return;
    }
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found. MCP endpoint: POST /mcp" }));
});

httpServer.listen(PORT, () => {
  console.log(`Spatialgineers MCP v2.0.0 running on port ${PORT}`);
  console.log(`MCP endpoint: http://localhost:${PORT}/mcp`);
  console.log(`Health: http://localhost:${PORT}/health`);
});
