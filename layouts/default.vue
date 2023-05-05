<script setup lang="ts">
import { useCustomizerStore } from "@/stores/customizer";
const customizer = useCustomizerStore();
</script>

<template>
  <v-app :theme="customizer.darktheme ? 'dark' : 'light'">
    <slot />
  </v-app>
</template>
