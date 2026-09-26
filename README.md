# Spatialgineers MCP Server

Node.js MCP server exposing Spatialgineers' core knowledge as 4 queryable tools.

## Tools
| Tool | Returns |
|---|---|
| `get_studio_info` | Studio, founders, specialties, projects, URLs |
| `get_summit_status` | Summit 2026: dates, program, prizes, sponsors, critical path |
| `get_sgx_framework` | SGX Guild: pillars, ranks, evaluation, Trials, La Germinadora |
| `get_brand_guide` | Official brand guide: colors (hex), typography, panels, HUD rules |

## Local dev
```bash
npm install && node server.js
```
Health check: `GET http://localhost:3000/health`

## Deploy with Google Cloud Run
1. Go to [console.cloud.google.com](https://console.cloud.google.com) → Cloud Run
2. Click **Deploy Container** → **Continuously deploy from a repository**
3. Connect GitHub → select `Spatialgineers/spatialgineers-mcp`
4. Set Port to `3000` → Deploy
5. Copy your `https://...run.app` URL
6. In Symphony → Connectors → Connect MCP server → paste URL + `/mcp`

Verify: `GET https://your-url.run.app/health` → `{"status":"ok"}`

## Update data
Edit `data/*.js` → commit → Cloud Run redeploys automatically.
