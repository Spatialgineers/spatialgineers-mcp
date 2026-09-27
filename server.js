import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { createServer } from "http";
import { z } from "zod";

import studioData from "./data/studio.js";
import summitData from "./data/summit.js";
import sgxData from "./data/sgx.js";
import highcoonData from "./data/highcoon.js";

// ─── MCP Server setup ───────────────────────────────────────────────────────

const server = new McpServer({
  name: "spatialgineers-mcp",
  version: "2.0.0",
});

// ─── Tool: get_studio_info ───────────────────────────────────────────────────

server.tool(
  "get_studio_info",
  "Returns complete Spatialgineers studio information: who they are, what they build, both founders (Danelson 'The Highgineer' and Ricardo 'Lightning Fingers'), location, specialties (VR/AR/XR, immersive games, 3D design), notable projects (Bad Bunny Land, MVFW 2025, FITUR 2026), all active products (SGX Guild, Summit 2026, Highcoon Universe, TTT, Entrepreneur Match), brand guide with official color palette, typography, operating principles, verticals, platform URLs, tech stack, and contact info.",
  {},
  async () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(studioData, null, 2),
      },
    ],
  })
);

// ─── Tool: get_summit_status ─────────────────────────────────────────────────

server.tool(
  "get_summit_status",
  "Returns the complete Spatialgineers Summit 2026 ground truth: dates (Dec 11-13 2026), venue (Chroma Space Studios, San Juan PR), format (3-day hybrid), full hour-by-hour run of show for all 3 days, gamification prize tiers, sponsorship tiers ($50/$500/$1,500-$2,500), all 5 countdown phases with dates, top 10 critical path decisions with deadlines, current phase status, platform URL, and internal notes.",
  {},
  async () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(summitData, null, 2),
      },
    ],
  })
);

// ─── Tool: get_sgx_framework ─────────────────────────────────────────────────

server.tool(
  "get_sgx_framework",
  "Returns the complete SGX Guild system and Grimoire OS framework: all 6 specialization pillars (Spark, Stage, Story, Showcase, System, Synthesize), all 8 official ranks (Recruit through Guild Master) with XP thresholds and main quests, the 5 evaluation dimensions with geometric mean scoring rule, full Trials structure (5-week hackathon), Wild Card rule, La Germinadora incubation program terms, and the complete Grimoire OS platform spec including all modules, admin capabilities, visual design system, and tech stack.",
  {},
  async () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(sgxData, null, 2),
      },
    ],
  })
);

// ─── Tool: get_highcoon_universe ─────────────────────────────────────────────

server.tool(
  "get_highcoon_universe",
  "Returns the complete Highcoon universe canon: Highcoon's character profile (bio-engineered raccoon, abilities, personality), all 8 terpenes with colors/hex codes/effects/pairings, Virere (the plant), full Terp-nology specs (Terp-Suit, Terp-Gear, Terp-Mechs, Full Spectrum Device, TRPM-8), all supporting characters (Jdazzler, Disrespecter, AMG-175, Mr. Stigma), Stigma City setting, complete Libro 1 chapter summaries, Libro 1 ending canon, Libro 2 multiverse premise and universe rules, Dhuma Ganji universe (Chapter 1 of Libro 2), the Spatial/Web3 gaming ecosystem, and all chatbot prompt commands.",
  {},
  async () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(highcoonData, null, 2),
      },
    ],
  })
);

// ─── HTTP server ─────────────────────────────────────────────────────────────

const PORT = process.env.PORT || 3000;

const httpServer = createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok", server: "spatialgineers-mcp", version: "2.0.0" }));
    return;
  }

  if (req.method === "POST" && req.url === "/mcp") {
    const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });
    res.on("close", () => transport.close());
    await server.connect(transport);
    await transport.handleRequest(req, res);
    return;
  }

  if (req.method === "GET" && req.url === "/mcp") {
    const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });
    res.on("close", () => transport.close());
    await server.connect(transport);
    await transport.handleRequest(req, res);
    return;
  }

  if (req.method === "DELETE" && req.url === "/mcp") {
    res.writeHead(200);
    res.end();
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found. MCP endpoint is POST /mcp" }));
});

httpServer.listen(PORT, () => {
  console.log(`Spatialgineers MCP server running on port ${PORT}`);
  console.log(`MCP endpoint: http://localhost:${PORT}/mcp`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});
