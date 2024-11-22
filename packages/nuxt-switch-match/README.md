[![CI](https://github.com/Hebilicious/vue-switch-match/actions/workflows/ci.yaml/badge.svg)](https://github.com/Hebilicious/vue-switch-match/actions/workflows/ci.yaml)
[![npm version](https://badge.fury.io/js/@hebilicious%2Fnuxt-switch-match.svg)](https://badge.fury.io/js/@hebilicious%2Fnuxt-switch-match)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Nuxt Switch Match

Pattern Matching Switch Match Component for Nuxt. Inspired by Solid.js

## Installation

_If you're not using Nuxt, use the [Vue package](https://www.npmjs.com/package/@hebilicious/vue-switch-match) directly._

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
