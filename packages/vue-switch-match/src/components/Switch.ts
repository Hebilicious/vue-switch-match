import { type Component, computed, defineComponent } from "vue"
import type { WhenProp } from "./Match"

export const Switch = defineComponent({
	name: "Switch",
	inheritAttrs: false,
	setup(props, { slots }) {
		const result = computed(() => {
			const children = slots.default?.() || []
			const matchComponents = children.filter((c) => (c.type as Component).name === "Match")
			const fallbackComponent = children.find((c) => (c.type as Component).name === "Fallback")

			const matched = matchComponents.find((matchComponent) => {
				const { when } = matchComponent.props as {
					when: WhenProp
				}
				const condition = typeof when === "function" ? when() : when
				return condition
			})

			if (matched) return matched

			return fallbackComponent || null
		})
		return () => result.value
	}
})
