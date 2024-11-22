import { type PropType, defineComponent } from "vue"

export const Match = defineComponent({
	name: "Match",
	props: {
		when: {
			type: [Boolean, Function] as PropType<boolean | (() => boolean)>,
			required: true
		}
	},
	setup(_, { slots }) {
		return () => slots.default?.() ?? null
	}
})
