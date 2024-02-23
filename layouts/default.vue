<template>
  <div>
    <Menubar :model="items">
      <template #item="{ item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
        </a>
      </template>
    </Menubar>
    <div class="bg-surface-100 dark:bg-surface-900 flex justify-center min-h-screen p-10">
      <slot />
    </div>
  </div>
</template>

<style>
@import url("~/assets/css/base.css");
</style>



<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    route: '/'

  },
  {
    label: 'Test Form create',
    icon: 'pi pi-star',
    route: '/testform/new'
  },
  {
    label: 'Test Form edit',
    icon: 'pi pi-search',
    route: '/testform/108'
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope'
  }
]);
</script>

Template