<script setup lang="ts">
import { useCustomizerStore } from "@/stores/customizer";
import sidebarItems from "./sidebarItem";

const customizer = useCustomizerStore();
const sidebarMenu = ref(sidebarItems);
</script>

<template>
  <v-navigation-drawer
    left
    :permanent="$vuetify.display.mdAndUp"
    v-model="customizer.Sidebar_drawer"
    elevation="10"
    :class="customizer.SidebarColor == 'white' ? '' : 'text-white'"
    :color="customizer.darktheme ? '' : customizer.SidebarColor"
    rail-width="75"
    mobile-breakpoint="960"
    app
    :rail="customizer.mini_sidebar"
    expand-on-hover
  >
    <perfect-scrollbar class="scrollnavbar">
      <div class="profile">
        <div class="profile-pic">
          <v-avatar size="45">
            <img src="@/assets/images/users/user2.jpg" width="50" alt="Julia" />
          </v-avatar>
        </div>
        <div class="profile-name">
          <h5>Jonathan Deo</h5>
        </div>
      </div>
      <v-list class="pa-3" >
        <template v-for="(item, i) in sidebarMenu">
          <v-list-subheader v-if="item.header">{{
            item.header
          }}</v-list-subheader>
          <v-list-group v-else-if="item.children" class="">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                :value="item.title"
                rounded="lg"
                class="mb-1"
              >
                <v-list-item-title
                  v-text="item.title"
                  class="mr-auto"
                ></v-list-item-title>
                <template v-slot:prepend>
                  <vue-feather
                    :type="item.icon"
                    class="feather-sm v-icon v-icon--size-default"
                  ></vue-feather>
                </template>
                <template v-slot:append>
                  <vue-feather
                    type="chevron-down"
                    class="feather-sm"
                  ></vue-feather>
                </template>
              </v-list-item>
            </template>
            <v-list-item
              v-for="(subitem, i) in item.children"
              :key="i"
              :value="subitem.to"
              :to="subitem.to"
              rounded="lg"
              class="first-level-item mb-1"
            >
              <v-list-item-title v-text="subitem.title"></v-list-item-title>
              <template v-slot:prepend>
                <vue-feather type="disc" class="feather-sm mr-5 tw-mb-0.5"></vue-feather>
              </template>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="i" :to="item.to" rounded="lg" class="mb-1">
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <template v-slot:prepend>
              <vue-feather
                :type="item.icon"
                class="feather-sm v-icon v-icon--size-default"
              ></vue-feather>
            </template>
          </v-list-item>
        </template>
      </v-list>
    </perfect-scrollbar>
  </v-navigation-drawer>
</template>
