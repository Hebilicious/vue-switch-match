import { type PropType, defineComponent } from "vue"

export type WhenProp = boolean | (() => boolean)
export const Match = defineComponent({
	name: "Match",
	props: { when: { type: Object as PropType<WhenProp>, required: true } },
	setup(_, { slots }) {
		return () => slots.default?.() ?? null
	}
})
