```sh
npx nuxi@latest init projname
# codium projname
yarn install

# will add automajically  modules: ["@nuxtjs/tailwindcss"]
npx nuxi module add @nuxtjs/tailwindcss 

npx tailwindcss init

yarn add primevue
yarn add --dev nuxt-primevue

```

update nuxt config
```js
import * as path from "path"

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-primevue"],
  devtools: { enabled: true },
  primevue: {
    options: { unstyled: true },
    importPT: { as: "Lara", from: path.resolve(__dirname, "./presets/lara/") },
    components: {
      exclude: ["Editor", "Chart"]
    }
  
  },
})

```
cp ~/Downloads/lara ./presets/ -r

tailwind config should look like this

```css
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "presets/**/*.{js,vue,ts}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-50": "rgb(var(--primary-50))",
        "primary-100": "rgb(var(--primary-100))",
        "primary-200": "rgb(var(--primary-200))",
        "primary-300": "rgb(var(--primary-300))",
        "primary-400": "rgb(var(--primary-400))",
        "primary-500": "rgb(var(--primary-500))",
        "primary-600": "rgb(var(--primary-600))",
        "primary-700": "rgb(var(--primary-700))",
        "primary-800": "rgb(var(--primary-800))",
        "primary-900": "rgb(var(--primary-900))",
        "primary-950": "rgb(var(--primary-950))",

        "surface-0": "rgb(var(--surface-0))",
        "surface-50": "rgb(var(--surface-50))",
        "surface-100": "rgb(var(--surface-100))",
        "surface-200": "rgb(var(--surface-200))",
        "surface-300": "rgb(var(--surface-300))",
        "surface-400": "rgb(var(--surface-400))",
        "surface-500": "rgb(var(--surface-500))",
        "surface-600": "rgb(var(--surface-600))",
        "surface-700": "rgb(var(--surface-700))",
        "surface-800": "rgb(var(--surface-800))",
        "surface-900": "rgb(var(--surface-900))",
        "surface-950": "rgb(var(--surface-950))"
      }
    }
  },
  plugins: []
}
```


assets/css/base.css should look like this
```css
:root {
    --primary-50: 236 253 245;
    --primary-100: 209 250 229;
    --primary-200: 167 243 208;
    --primary-300: 110 231 183;
    --primary-400: 52 211 153;
    --primary-500: 16 185 129;
    --primary-600: 5 150 105;
    --primary-700: 4 120 87;
    --primary-800: 6 95 70;
    --primary-900: 4 78 56;
    --primary-950: 2 44 34;
    --surface-0: 255 255 255;
    --surface-50: 248 250 252;
    --surface-100: 241 245 249;
    --surface-200: 226 232 240;
    --surface-300: 203 213 225;
    --surface-400: 148 163 184;
    --surface-500: 100 116 139;
    --surface-600: 71 85 105;
    --surface-700: 45 55 72;
    --surface-800: 30 41 59;
    --surface-900: 15 23 42;
    --surface-950: 3 6 23;
}
```

ensure you are calling the base css somewhere e.g. layout of just app.vue
<style>
@import url("~/assets/css/base.css");
</style>
here is an example app.vue using primevues passthrough options

```vue
<template>
  <div>
    <section class=" bg-white dark:bg-gray-800 p-10 rounded-xl flex flex-col gap-8 max-w-3xl">
      <h1 class="text-4xl text-black dark:text-white font-bold text-center">
        Tailwind CSS + PrimeVue
      </h1>
      <!-- panel 1 -->
      <Panel header="Default Preset">
        <p>
          First panel component uses the global pass through preset from Lara.
        </p>
      </Panel>
      <!-- panel 2 with huge padding on header -->
      <Panel
        header="Custom Header"
        :pt="{
          header:
            'p-52 flex items-center justify-between border border-indigo-300 bg-indigo-500 text-indigo-50 rounded-tl-lg rounded-tr-lg dark:bg-indigo-900 dark:border-indigo-900/40 dark:text-white/80',
        }"
      >
        <p>
          Second panel overrides the header section with custom a custom style.
        </p>
      </Panel>
      <!-- panel 3 -->
      <Panel
        header="Custom Design"
        :pt-options="{ mergeSections: false }"
        :pt="{
          header:
            'flex items-center justify-center p-5 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-tl-2xl rounded-tr-2xl text-white',
          title: 'leading-none font-bold uppercase text-2xl',
          content:
            'bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 px-5 pb-8 pt-3 text-white text-center rounded-bl-2xl rounded-br-2xl text-xl',
        }"
      >
        <p>
          Third panel ignores the default preset with
          <b>mergeSections: false</b> and applies a custom style to all elements
          of the panel instead.
        </p>
      </Panel>
    </section>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
<style>
@import url("~/assets/css/base.css");
</style>

```