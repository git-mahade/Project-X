<script setup lang="ts">
definePageMeta({
  layout: "custom",
});
const page = ref({ title: "Dashboard" });
const breadcrumbs = ref([
  {
    title: "Dashboard",
    disabled: true,
    href: "/",
  },
]);
</script>

<template>
  <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  ></BaseBreadcrumb>
  <v-row>
    <v-col cols="12" sm="12" lg="8"> <ApexChartSalesOverview /> </v-col>
    <v-col cols="12" sm="12" lg="4"><ApexChartTotalSales /></v-col>
    <v-col cols="12"><EarningCard /></v-col>
  </v-row>
</template>