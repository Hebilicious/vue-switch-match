import { configKey } from "./config"
import type { ModuleOptions } from "./module"

declare module "@nuxt/schema" {
	interface RuntimeConfig {
		[configKey]: ModuleOptions
	}
	interface PublicRuntimeConfig {
		[configKey]: ModuleOptions
	}
}
