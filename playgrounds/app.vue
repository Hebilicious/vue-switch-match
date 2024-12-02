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
  <Switch>
    <Match :when="state === 0">Hello</Match>
    <Match :when="state === 1">World</Match>
    <Match :when="state < 2">Never Match</Match>
    <Fallback>Bye</Fallback>
  </Switch>
</template>
