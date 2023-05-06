<script setup lang="ts">
import { SalesOverviewData } from "./SalesOverviewData";
</script>

<template>
  <v-card>
    <v-card-text>
      <div class="d-sm-flex align-center">
        <div>
          <h3 class="text-h6 title font-weight-medium">Sales Overview</h3>
          <h5 class="subtitle">Ample Admin Vs Pixel Admin</h5>
        </div>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <div class="d-flex align-center">
            <div class="d-flex align-center px-2">
              <span class="text-primary">
                <span class="text-overline">
                  <i class="mdi mdi-brightness-1 mx-1"></i>
                </span>
                <span class="font-weight-regular">Ample</span>
              </span>
            </div>
            <div class="d-flex align-center px-2">
              <span class="text-secondary">
                <span class="text-overline">
                  <i class="mdi mdi-brightness-1 mx-1"></i>
                </span>
                <span class="font-weight-regular">Pixel Admin</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <apexchart
          type="bar"
          height="320px"
          :options="SalesOverviewData.chartOptions"
          :series="SalesOverviewData.series"
        ></apexchart>
      </div>
    </v-card-text>
  </v-card>
</template>
