<script setup lang="ts">
definePageMeta({
  layout: "custom",
});
const page = ref({ title: "Analytical" });
const breadcrumbs = ref([
  {
    title: "Admin",
    disabled: false,
    href: "/",
  },
  {
    title: "Analytical",
    disabled: true,
  },
]);
</script>

<template>
  <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  ></BaseBreadcrumb>
</template>