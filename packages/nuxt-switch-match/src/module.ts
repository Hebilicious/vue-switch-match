import { addComponent, defineNuxtModule, useLogger } from "@nuxt/kit"
import { defu } from "defu"
import { NAME, configKey } from "./config"

export type ModuleOptions = {
	customPrefix: string
	switchName: string
	matchName: string
	fallbackName: string
}

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: NAME,
		configKey
	},
	setup(userOptions, nuxt) {
		const logger = useLogger(NAME)

		logger.info(`Adding ${NAME} module...`, userOptions)
		// 1. Set up runtime configuration
		const options = defu(nuxt.options.runtimeConfig.public[configKey], userOptions, {
			customPrefix: "",
			switchName: "Switch",
			matchName: "Match",
			fallbackName: "Fallback"
		})
		nuxt.options.runtimeConfig.public[configKey] = options

		const optionMap = [
			[options.switchName, "Switch"],
			[options.matchName, "Match"],
			[options.fallbackName, "Fallback"]
		] as const

		// Add vue-switch-match components
		for (const [customName, exportName] of optionMap) {
			addComponent({
				name: `${options.customPrefix}${customName}`,
				export: exportName,
				filePath: "@hebilicious/vue-switch-match"
			})
		}

		logger.success(`Added ${NAME} module successfully.`)
	}
})
