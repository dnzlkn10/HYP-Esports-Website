import assert from "node:assert/strict";
const base = process.env.TEST_BASE_URL || "http://127.0.0.1:3000";
const routes = [
  "/",
  "/news",
  "/matches",
  "/tournaments",
  "/teams",
  "/teams/cs2",
  "/teams/valorant",
  "/media",
  "/shop",
  "/about",
  "/join",
  "/news/a-new-chapter",
  "/news/cs2-roster",
  "/news/valorant-five",
  "/news/competition-calendar",
  "/news/first-collection",
  "/tournaments/challenger-series",
  "/tournaments/rising-circuit",
  "/tournaments/open-qualifier",
  "/shop/pro-jersey",
  "/shop/essential-tee",
];
const internalLinks = new Set();
for (const route of routes) {
  const response = await fetch(new URL(route, base));
  assert.equal(response.status, 200, `${route} must respond successfully`);
  const html = await response.text();
  assert.match(html, /<h1[\s>]/, `${route} has a page heading`);
  assert.match(html, /<main id="main-content"/, `${route} has a main landmark`);
  assert.match(html, /<title>[^<]+/, `${route} has SEO metadata`);
  for (const match of html.matchAll(/href="(\/[^"#]*)"/g)) {
    if (!match[1].startsWith("/_next/"))
      internalLinks.add(match[1].replaceAll("&amp;", "&"));
  }
  console.log(`PASS ${route}`);
}
for (const href of internalLinks) {
  const response = await fetch(new URL(href, base));
  assert.equal(
    response.status,
    200,
    `Internal link ${href} must not be broken`,
  );
}
for (const route of [
  "/not-a-page",
  "/news/not-a-story",
  "/shop/not-a-product",
  "/tournaments/not-an-event",
]) {
  assert.equal(
    (await fetch(new URL(route, base))).status,
    404,
    `${route} should return 404`,
  );
}
for (const asset of [
  "/arena.svg",
  "/team.svg",
  "/player.svg",
  "/jersey.svg",
  "/tee.svg",
  "/icon.svg",
]) {
  const response = await fetch(new URL(asset, base));
  assert.equal(response.status, 200, `${asset} should load`);
  assert.match(await response.text(), /<svg/, `${asset} contains SVG artwork`);
}
console.log(
  `Verified ${routes.length} routes, ${internalLinks.size} internal links, 4 not-found routes and 6 SVG assets.`,
);
