# Vue Switch Match

[![CI](https://github.com/Hebilicious/vue-switch-match/actions/workflows/ci.yaml/badge.svg)](https://github.com/Hebilicious/vue-switch-match/actions/workflows/ci.yaml)
[![npm version](https://badge.fury.io/js/@hebilicious%2Fnuxt-switch-match.svg)](https://badge.fury.io/js/@hebilicious%2Fnuxt-switch-match)
[![npm version](https://badge.fury.io/js/@hebilicious%2Fvue-switch-match.svg)](https://badge.fury.io/js/@hebilicious%2Fvue-switch-match)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

🚀 Pattern Matching Switch Match Component for Vue and Nuxt. Inspired by Solid.js

## 📦 Installation

Refer to the [Vue](./packages/vue-switch-match/README.md) or [Nuxt](./packages/nuxt-switch-match/README.md) README for installation instructions.

## 🚀 Usage

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

## 📦 Contributing

Contributions, issues and feature requests are welcome!

1. Fork this repo

2. [Install `bun`.](https://bun.sh/docs/installation)

3. Intall pnpm `corepack enable && pnpm corepack use pnpm@latest`

4. Use `pnpm i` at the mono-repo root.

5. Make modifications and follow conventional commits.

6. Open a PR 🚀🚀🚀
