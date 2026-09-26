import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { createServer } from "http";
import studioData from "./data/studio.js";
import summitData from "./data/summit.js";
import sgxData from "./data/sgx.js";

const server = new McpServer({ name: "spatialgineers-mcp", version: "1.0.0" });

server.tool("get_studio_info", "Returns Spatialgineers studio info: founders, specialties, projects, URLs.", {}, async () => ({ content: [{ type: "text", text: JSON.stringify(studioData, null, 2) }] }));
server.tool("get_summit_status", "Returns Summit 2026 ground truth: dates, venue, 3-day program, prizes, sponsors, critical path.", {}, async () => ({ content: [{ type: "text", text: JSON.stringify(summitData, null, 2) }] }));
server.tool("get_sgx_framework", "Returns SGX Guild + Grimoire OS: 5 pillars, 8 ranks, evaluation dimensions, Trials, La Germinadora.", {}, async () => ({ content: [{ type: "text", text: JSON.stringify(sgxData, null, 2) }] }));

const PORT = process.env.PORT || 3000;
const httpServer = createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/health") { res.writeHead(200, { "Content-Type": "application/json" }); res.end(JSON.stringify({ status: "ok", server: "spatialgineers-mcp", version: "1.0.0" })); return; }
  if ((req.method === "POST" || req.method === "GET") && req.url === "/mcp") { const t = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined }); res.on("close", () => t.close()); await server.connect(t); await t.handleRequest(req, res); return; }
  if (req.method === "DELETE" && req.url === "/mcp") { res.writeHead(200); res.end(); return; }
  res.writeHead(404); res.end(JSON.stringify({ error: "MCP endpoint is POST /mcp" }));
});
httpServer.listen(PORT, () => console.log(`Spatialgineers MCP running on port ${PORT}`));
