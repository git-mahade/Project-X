<script setup lang="ts">
import { useCustomizerStore } from "@/stores/customizer";
function reloadPage() {
  if (customizer.setHorizontalLayout) {
    window.location.reload();
  }
}
const customizer = useCustomizerStore();
</script>

<template>
  <v-navigation-drawer
    app
    temporary
    elevation="10"
    location="right"
    v-model="customizer.Customizer_drawer"
  >
    <div class="px-4 py-4">
      <h3>Customizer</h3>
    </div>

    <v-divider></v-divider>
    <div class="px-4 py-4">
      <h4>Horizontal Layout</h4>
      <div @click="reloadPage">
        <v-checkbox
          hide-details
          v-model="customizer.setHorizontalLayout"
          label="Horizontal"
        ></v-checkbox>
      </div>
      <br />
      <h4>Dark Mode</h4>
      <v-checkbox
        hide-details
        v-model="customizer.darktheme"
        label="Dark"
      ></v-checkbox
      ><br />
      <h4>Mini Sidebar</h4>
      <v-checkbox
        hide-details
        v-model="customizer.mini_sidebar"
        label="Mini"
      ></v-checkbox>
    </div>
    <v-divider></v-divider>
  </v-navigation-drawer>
</template>

<style lang="scss">
.v-application .v-item-group .v-avatar--density-default {
  border: 1px solid rgb(0, 0, 0, 0.1) !important;
}
.v-application .v-item-group .v-sidebar_active {
  border: 2px solid black !important;
}
</style>
