import { fileURLToPath } from "node:url"
import { $fetch, setup } from "@nuxt/test-utils"
import { describe, expect, it } from "vitest"

describe("basic test", async () => {
	await setup({
		rootDir: fileURLToPath(new URL("./fixtures/basic", import.meta.url))
	})

	it("displays data", async () => {
		// Get response to a server-rendered page with `$fetch`.
		const html = await $fetch("/")
		expect(html).toContain("Hello")
		expect(html).toContain("World")
	})
})
