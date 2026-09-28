import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { createServer } from "http";

import studioData from "./data/studio.js";
import summitData from "./data/summit.js";
import sgxData from "./data/sgx.js";
import highcoonData from "./data/highcoon.js";

// ─── MCP Server setup ───────────────────────────────────────────────────────

const server = new McpServer({
  name: "spatialgineers-mcp",
  version: "2.0.0",
});

// ─── Tools ──────────────────────────────────────────────────────────────────

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
  "Returns the complete Highcoon canon: character, 8 terpenes, Terp-nology, characters, Stigma City, Libro 1 chapters, Libro 2 multiverse rules, Dhuma Ganji, Spatial ecosystem, chatbot commands.",
  {},
  async () => ({ content: [{ type: "text", text: JSON.stringify(highcoonData, null, 2) }] })
);

// ─── HTTP server ─────────────────────────────────────────────────────────────

const PORT = process.env.PORT || 3000;

const httpServer = createServer(async (req, res) => {

  // Health check
  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok", server: "spatialgineers-mcp", version: "2.0.0" }));
    return;
  }

  // MCP endpoint — POST only (Streamable HTTP transport)
  if (req.url === "/mcp") {
    if (req.method === "POST") {
      const transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: undefined,
      });
      res.on("close", () => transport.close());
      await server.connect(transport);
      await transport.handleRequest(req, res);
      return;
    }

    // GET /mcp — return 405, do not pass to transport
    if (req.method === "GET") {
      res.writeHead(405, {
        "Content-Type": "application/json",
        "Allow": "POST",
      });
      res.end(JSON.stringify({ error: "Method Not Allowed. Use POST /mcp" }));
      return;
    }

    // DELETE /mcp — session teardown
    if (req.method === "DELETE") {
      res.writeHead(200);
      res.end();
      return;
    }
  }

  // Fallback
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found. MCP endpoint: POST /mcp" }));
});

httpServer.listen(PORT, () => {
  console.log(`Spatialgineers MCP v2.0.0 running on port ${PORT}`);
  console.log(`MCP endpoint: http://localhost:${PORT}/mcp`);
  console.log(`Health: http://localhost:${PORT}/health`);
});
