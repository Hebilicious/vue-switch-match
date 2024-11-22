// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@hebilicious/nuxt-switch-match"],
	nuxtSwitchMatch: {
		customPrefix: "My",
		switchName: "Switch",
		matchName: "Match",
		fallbackName: "Fallback"
	},
	devtools: {
		enabled: true
	},
	compatibilityDate: "2024-11-22"
})
