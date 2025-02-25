import { defineComponent } from "vue"

export type WhenProp = boolean | (() => boolean)
export const Match = defineComponent({
	name: "Match",
	props: {
		when: {
			validator: (value: WhenProp) => { 
				return typeof value === "function" || typeof value === "boolean"
			},
			required: true
		}
	},
	setup(_, { slots }) {
		return () => slots.default?.() ?? null
	}
})
