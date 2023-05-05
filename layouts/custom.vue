<script setup lang="ts">
import VerticalSidebar from "@/components/global/vertical-sidebar/VerticalSidebar.vue";
import VerticalHeader from "@/components/global/vertical-header/VerticalHeader.vue";
import Customizer from "@/components/global/customizer/Customizer.vue";
import { useCustomizerStore } from "@/stores/customizer";
import HorizontalHeader from "@/components/global/horizontal-header/HorizontalHeader.vue";
import HorizontalSidebar from "@/components/global/horizontal-sidebar/HorizontalSidebar.vue";
const customizer = useCustomizerStore();
</script>

<template>
  <v-app
    :theme="customizer.darktheme ? 'dark' : 'light'"
    :class="[
      customizer.mini_sidebar ? 'mini-sidebar' : '',
      customizer.setHorizontalLayout ? 'horizontalLayout' : 'verticalLayout',
    ]"
  >
    <Customizer />
    <VerticalHeader v-if="!customizer.setHorizontalLayout" />
    <VerticalSidebar v-if="!customizer.setHorizontalLayout" />

    <v-main>
      <HorizontalHeader v-if="customizer.setHorizontalLayout" />
      <HorizontalSidebar v-if="customizer.setHorizontalLayout" />
      <v-container fluid class="page-wrapper">
        <v-btn
          class="customizer-btn"
          variant="flat"
          icon="mdi-cog"
          size="large"
          flat
          @click.stop="
            customizer.SET_CUSTOMIZER_DRAWER(!customizer.Customizer_drawer)
          "
        >
        </v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>
