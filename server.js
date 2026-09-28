import { createServer } from "http";
import studioData from "./data/studio.js";
import summitData from "./data/summit.js";
import sgxData from "./data/sgx.js";
import highcoonData from "./data/highcoon.js";

const PORT = process.env.PORT || 8080;

const TOOLS = [
  {
    name: "get_studio_info",
    description: "Returns complete Spatialgineers studio info: founders, specialties, projects, brand guide, tech stack, platforms, operating principles.",
    inputSchema: { type: "object", properties: {}, required: [] }
  },
  {
    name: "get_summit_status",
    description: "Returns Spatialgineers Summit 2026 ground truth: dates, venue, run of show all 3 days, gamification, sponsorship tiers, countdown phases, critical path.",
    inputSchema: { type: "object", properties: {}, required: [] }
  },
  {
    name: "get_sgx_framework",
    description: "Returns the complete SGX Guild system: 6 pillars, 8 ranks, evaluation dimensions, Trials structure, Wild Card rule, La Germinadora, full Grimoire OS spec.",
    inputSchema: { type: "object", properties: {}, required: [] }
  },
  {
    name: "get_highcoon_universe",
    description: "Returns the complete Highcoon canon: character, 8 terpenes, Terp-nology, characters, Stigma City, Libro 1 chapters, Libro 2 multiverse rules, Dhuma Ganji, Spatial ecosystem.",
    inputSchema: { type: "object", properties: {}, required: [] }
  }
];

const DATA_MAP = {
  get_studio_info: studioData,
  get_summit_status: summitData,
  get_sgx_framework: sgxData,
  get_highcoon_universe: highcoonData
};

function jsonrpc(id, result) {
  return JSON.stringify({ jsonrpc: "2.0", id, result });
}

function jsonrpcError(id, code, message) {
  return JSON.stringify({ jsonrpc: "2.0", id, error: { code, message } });
}

async function handleMCP(req, res) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const body = Buffer.concat(chunks).toString();

  let msg;
  try {
    msg = JSON.parse(body);
  } catch {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(jsonrpcError(null, -32700, "Parse error"));
    return;
  }

  const { id, method, params } = msg;

  res.writeHead(200, { "Content-Type": "application/json" });

  if (method === "initialize") {
    res.end(jsonrpc(id, {
      protocolVersion: "2024-11-05",
      capabilities: { tools: {} },
      serverInfo: { name: "spatialgineers-mcp", version: "2.0.0" }
    }));
    return;
  }

  if (method === "notifications/initialized") {
    res.end("");
    return;
  }

  if (method === "tools/list") {
    res.end(jsonrpc(id, { tools: TOOLS }));
    return;
  }

  if (method === "tools/call") {
    const name = params?.name;
    const data = DATA_MAP[name];
    if (!data) {
      res.end(jsonrpcError(id, -32601, `Unknown tool: ${name}`));
      return;
    }
    res.end(jsonrpc(id, {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }]
    }));
    return;
  }

  res.end(jsonrpcError(id, -32601, `Method not found: ${method}`));
}

const httpServer = createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok", server: "spatialgineers-mcp", version: "2.0.0" }));
    return;
  }

  if (req.url === "/mcp" && req.method === "POST") {
    await handleMCP(req, res);
    return;
  }

  if (req.url === "/mcp" && req.method === "DELETE") {
    res.writeHead(200);
    res.end();
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found. MCP endpoint: POST /mcp" }));
});

httpServer.listen(PORT, () => {
  console.log(`Spatialgineers MCP v2.0.0 — port ${PORT}`);
});
