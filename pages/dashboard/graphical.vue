<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

const page = ref({ title: "Graphical" });
const breadcrumbs = ref([
  {
    title: "Graphical",
    disabled: true,
    href: "/graphical",
  },
]);
</script>

<template>
    <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  ></BaseBreadcrumb>
  <v-row>
    <v-col cols="12" lg="8">
      <Map />
    </v-col>
  </v-row>
</template>
