// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://leafy-taffy-a04edc.netlify.app/",
  integrations: [preact()],
});