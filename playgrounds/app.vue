<script lang="ts" setup>
const state = ref(0)
const swap = () => {
	const newValue = state.value === 0 ? 1 : 0
	state.value = newValue
}
</script>

<template>
  <button @click="swap">Click Me !</button>
  <button @click="(state = 2)">Fallback</button>
  <MySwitch>
    <MyMatch :when="state === 0">Hello</MyMatch>
    <MyMatch :when="state === 1">World</MyMatch>
    <MyFallback>Bye</MyFallback>
  </MySwitch>
</template>
