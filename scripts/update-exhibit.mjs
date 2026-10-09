import { mkdir, writeFile } from "node:fs/promises";

const curator = "sdivyanshu90";
const endpoint = new URL("https://api.github.com/search/issues");
endpoint.searchParams.set("q", `author:${curator} is:pr is:open -user:${curator}`);
endpoint.searchParams.set("sort", "updated");
endpoint.searchParams.set("order", "desc");
endpoint.searchParams.set("per_page", "30");

const headers = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": `${curator}-profile-exhibit`,
};

if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

const response = await fetch(endpoint, { headers });
if (!response.ok) {
  throw new Error(`GitHub search failed: ${response.status} ${response.statusText}`);
}

const payload = await response.json();
const exhibit = payload.items.find((item) => {
  const repository = item.repository_url.split("/").slice(-2);
  return repository[0]?.toLowerCase() !== curator.toLowerCase();
});

if (!exhibit) {
  throw new Error("No open external pull request was found for the current exhibition.");
}

const repository = exhibit.repository_url.split("/").slice(-2).join("/");
const updated = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "2-digit",
  year: "numeric",
  timeZone: "UTC",
}).format(new Date(exhibit.updated_at)).toUpperCase();

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function truncate(value, length) {
  return value.length <= length ? value : `${value.slice(0, length - 1).trimEnd()}…`;
}

function render(theme) {
  const dark = theme === "dark";
  const palette = dark
    ? { bg1: "#111116", bg2: "#0c0d11", border: "#625b51", panel: "#17171d", text: "#f1e9dc", muted: "#9f978b", faint: "#716a60", accent: "#ff8a76", seam: "#d89cff" }
    : { bg1: "#f6f0e5", bg2: "#e9dfd1", border: "#9b8a77", panel: "#fbf6ee", text: "#29211c", muted: "#6d6054", faint: "#8d7c6a", accent: "#c84d37", seam: "#9447a8" };
  const title = escapeXml(truncate(exhibit.title, 82));
  const label = escapeXml(`${repository.toUpperCase()} · PR #${exhibit.number}`);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="320" viewBox="0 0 1200 320" role="img" aria-labelledby="title desc">
  <title id="title">Now on view: ${title}</title><desc id="desc">The most recently updated open-source pull request authored by Divanshu Sharma.</desc>
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${palette.bg1}"/><stop offset="1" stop-color="${palette.bg2}"/></linearGradient><pattern id="grain" width="19" height="19" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r=".7" fill="${palette.text}" opacity=".045"/></pattern><filter id="glow"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter><style>.mono{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.serif{font-family:Georgia,&quot;Times New Roman&quot;,serif}.pulse{animation:pulse 3s ease-in-out infinite}@keyframes pulse{0%,100%{opacity:.45}50%{opacity:1}}@media(prefers-reduced-motion:reduce){.pulse{animation:none}}</style></defs>
  <rect x="1" y="1" width="1198" height="318" rx="20" fill="url(#bg)" stroke="${palette.border}" stroke-width="2"/><rect x="1" y="1" width="1198" height="318" rx="20" fill="url(#grain)"/><rect x="35" y="32" width="1130" height="256" rx="3" fill="${palette.panel}" stroke="${palette.border}"/><path d="M78 32V288" stroke="${palette.seam}" stroke-width="6"/>
  <text x="112" y="76" class="mono" fill="${palette.accent}" font-size="13" letter-spacing="3">NOW ON VIEW · LIVE FROM THE CONSERVATION LAB</text><text x="112" y="124" class="mono" fill="${palette.faint}" font-size="13" letter-spacing="1.7">${label}</text><text x="112" y="180" class="serif" fill="${palette.text}" font-size="28">${title}</text><text x="112" y="237" class="mono" fill="${palette.muted}" font-size="12" letter-spacing="1.5">LAST TOUCHED ${updated} UTC · OPEN · AUTHORED IMPLEMENTATION</text>
  <g transform="translate(1010 130)"><circle r="53" fill="none" stroke="${palette.accent}" stroke-width="1.5"/><circle r="40" fill="none" stroke="${palette.accent}" stroke-dasharray="3 7" class="pulse"/><circle r="7" fill="${palette.accent}" filter="url(#glow)" class="pulse"/><text y="83" class="mono" fill="${palette.faint}" font-size="10" letter-spacing="1.6" text-anchor="middle">ACTIVE</text></g>
  <text x="1134" y="273" class="mono" fill="${palette.faint}" font-size="10" letter-spacing="1.5" text-anchor="end">EXHIBIT GENERATED FROM PUBLIC GITHUB EVIDENCE</text>
</svg>\n`;
}

await mkdir(new URL("../assets/", import.meta.url), { recursive: true });
await Promise.all([
  writeFile(new URL("../assets/now-on-view-dark.svg", import.meta.url), render("dark")),
  writeFile(new URL("../assets/now-on-view-light.svg", import.meta.url), render("light")),
]);

console.log(`Now on view: ${repository}#${exhibit.number} — ${exhibit.title}`);
