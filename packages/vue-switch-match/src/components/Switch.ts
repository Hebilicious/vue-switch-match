import { computed, defineComponent } from "vue"

export const Switch = defineComponent({
	name: "Switch",
	setup(props, { slots }) {
		const result = computed(() => {
			const children = slots.default?.() || []
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			const matchComponents = children.filter((child) => (child.type as any).name === "Match")
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			const fallbackComponent = children.find((child) => (child.type as any).name === "Fallback")

			const matched = matchComponents.filter((matchComponent) => {
				const { when } = matchComponent.props as {
					when: boolean | (() => boolean)
				}
				const condition = typeof when === "function" ? when() : when
				return condition
			})

			if (matched.length > 0) return matched

			return fallbackComponent || null
		})
		return () => result.value
	}
})
