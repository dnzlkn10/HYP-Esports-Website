import { test, expect } from "@playwright/test";
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
  "/tournaments/challenger-series",
  "/shop/pro-jersey",
];
for (const width of [360, 768, 1440]) {
  test(`routes have no overflow or browser errors at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    for (const route of routes) {
      const response = await page.goto(route);
      expect(response?.status(), route).toBe(200);
      await expect(page.locator("h1")).toBeVisible();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
        `overflow on ${route}`,
      ).toBe(true);
    }
    expect(errors).toEqual([]);
  });
}
test("mobile navigation supports opening, navigation and Escape", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeVisible();
  const mobileLinks = page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link");
  await expect(mobileLinks.first()).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(
    page.getByRole("button", { name: "Close navigation" }),
  ).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(mobileLinks.last()).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("button", { name: "Close navigation" }),
  ).toBeFocused();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Teams" })
    .click();
  await expect(page).toHaveURL("/teams");
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toBeFocused();
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.setViewportSize({ width: 1440, height: 900 });
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toHaveCount(0);
  await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
});
test("game and result filters update actual match data", async ({ page }) => {
  await page.goto("/matches");
  await expect(page.locator(".match-card")).toHaveCount(2);
  await page.getByRole("button", { name: "CS2", exact: true }).click();
  await expect(page.locator(".match-card")).toHaveCount(1);
  await expect(page.locator(".match-card")).toContainText("NOVA");
  await page.getByRole("button", { name: "RESULTS", exact: true }).click();
  await expect(page.locator(".match-card")).toHaveCount(2);
  await page.getByRole("button", { name: "VALORANT", exact: true }).click();
  await expect(page.locator(".match-card")).toHaveCount(1);
  await expect(page.locator(".match-card")).toContainText("ORBIT");
});
test("news filtering and detail navigation work", async ({ page }) => {
  await page.goto("/news");
  await page.getByRole("button", { name: "CS2", exact: true }).click();
  await expect(page.locator(".news-card")).toHaveCount(1);
  await page.locator(".news-card").click();
  await expect(page).toHaveURL("/news/cs2-roster");
  await expect(page.locator("h1")).toHaveText("BUILDING OUR NEXT FIVE.");
});
test("media filter and accessible dialog work", async ({ page }) => {
  await page.goto("/media");
  await page.getByRole("button", { name: "Photos", exact: true }).click();
  await expect(page.locator(".media-card")).toHaveCount(1);
  await page.locator(".media-card").click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("dialog")).toContainText(
    "Original merchandise concept artwork",
  );
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(page.locator(".media-card")).toBeFocused();
});
test("rosters contain the requested names and no invented player photos", async ({
  page,
}) => {
  await page.goto("/teams/cs2");
  await expect(page.locator(".player-info h3")).toHaveText([
    "JINAZEE",
    "Salwo",
    "Script",
    "TBA",
    "TBA",
  ]);
  await expect(page.locator(".unannounced")).toHaveCount(2);
  await page.goto("/teams/valorant");
  await expect(page.locator(".player-info h3")).toHaveText([
    "JINAZEE",
    "VYNOX",
    "PHYONK",
    "VASHI",
    "turta",
  ]);
});
test("application validates input and explicitly stays a local demo", async ({
  page,
}) => {
  await page.goto("/join");
  await page
    .getByRole("button", { name: "APPLY FOR VALORANT", exact: true })
    .click();
  await page.getByLabel("Nickname", { exact: true }).fill("TestPlayer");
  await page.getByLabel("Age", { exact: true }).fill("17");
  await page.getByLabel("Country", { exact: true }).fill("Türkiye");
  await page.getByLabel("Discord", { exact: true }).fill("testplayer");
  await page.getByLabel("Riot ID", { exact: true }).fill("Test#HYP");
  await page.getByLabel("Current rank", { exact: true }).fill("Immortal");
  await page.getByLabel("Main role", { exact: true }).selectOption("Initiator");
  await page
    .getByLabel("Competitive experience", { exact: true })
    .fill("Sample competitive experience");
  await page
    .getByLabel("About yourself", { exact: true })
    .fill("Sample application for automated verification");
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: "Preview application" }).click();
  await expect(page.getByRole("status")).toContainText(
    "No application was sent or stored",
  );
});
test("shop is a coming-soon collection without checkout", async ({ page }) => {
  await page.goto("/shop");
  await expect(
    page.getByRole("main").getByText("COMING SOON", { exact: true }),
  ).toHaveCount(3);
  await page.getByRole("link", { name: /HYP PRO JERSEY/ }).click();
  await expect(page).toHaveURL("/shop/pro-jersey");
  await expect(
    page.getByText("No payments or orders are accepted.", { exact: false }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: /checkout|buy|add to cart/i }),
  ).toHaveCount(0);
});
