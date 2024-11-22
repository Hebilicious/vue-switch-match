# Nuxt Switch Match

Pattern Matching Switch Match Component for Nuxt. Inspired by Solid.js

## Installation

```bash
pnpm i @hebilicious/nuxt-switch-match
```

Then edit your nuxt.config.ts :

```ts
export default defineNuxtConfig({
  modules: ["@hebilicious/nuxt-switch-match"],
});
```

## Usage

The module will auto-import the components.

```vue
<script lang="ts" setup>
const state = ref(0);
const swap = () => {
  const newValue = state.value === 0 ? 1 : 0;
  state.value = newValue;
};
</script>

<template>
  <button @click="swap">Click Me !</button>
  <button @click="state = 2">Fallback</button>
  <Switch>
    <Match :when="state === 0">Hello</Match>
    <Match :when="state === 1">World</Match>
    <Fallback>Bye</Fallback>
  </Switch>
</template>
```

## Options

Pass the following options :

```ts
export default defineNuxtConfig({
  modules: ["@hebilicious/nuxt-switch-match"],
  nuxtSwitchMatch: {
    customPrefix: "My",
    switchName: "Switch",
    matchName: "Match",
    fallbackName: "Fallback",
  },
});
```
