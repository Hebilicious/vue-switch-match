import { defineComponent } from "vue"

export const Fallback = defineComponent({
	name: "Fallback",
	setup(_, { slots }) {
		return () => slots.default?.() ?? null
	}
})
