# Vue Switch Match

Pattern Matching Switch Match Component for Vue. Inspired by Solid.js

## Installation

```bash
pnpm i @hebilicious/vue-switch-match
```

## Usage

```vue
<script lang="ts" setup>
import { ref } from "vue"
import { Switch, Match, Fallback } from "@hebilicious/vue-switch-match"

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
    <Fallback>Bye</Fallback>
  </Switch>
</template>
```

## Global Component Registration

Following vue [official docs](https://vuejs.org/guide/components/registration) :

```ts
import { createApp } from "vue";
import { Switch, Match, Fallback } from "@hebilicious/vue-switch-match";

const app = createApp({});

app
    .component("Switch", Switch);
    .component("Match", Match);
    .component("Fallback", Fallback);
```
