<template>
  <div
    class="bg-cover bg-center bg-[url('../img/background.jpg')] dark:bg-gradient-to-l dark:from-[#00000080] dark:to-[#007A6F80] flex flex-col items-center space-y-6"
  >
    <h1 class="text-white font-bold text-[48px]">График акции</h1>
    <div class="relative w-full max-w-lg">
      <div
        class="absolute left-1/2 top-0 h-full w-0.5 border-l-2 border-dashed border-white transform -translate-x-1/2"
      ></div>
      <div
        v-for="(event, index) in events"
        :key="index"
        class="relative flex items-center mb-4"
      >
        <div class="w-1/2 poco2:text-right text-center pr-6">
          <p
            :class="[
              'text-white font-bold',
              event.highlight ? 'text-yellow-400 font-bold' : 'text-gray-200',
            ]"
          >
            {{ event.date }}
          </p>
        </div>
        <div class="flex items-center justify-center bg-red-700 rounded-full">
          <component :is="event.icon" />
        </div>
        <div class="w-1/2 pl-6">
          <p
            :class="[
              'text-white font-medium',
              event.highlight ? 'text-yellow-400 font-bold' : 'text-gray-200',
            ]"
          >
            {{ event.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<style>
.border-dashed {
  border-style: dashed;
}
</style>
<script setup>
import { computed } from "vue";
import AppSaleIcon from "./icons/AppSaleIcon.vue";
import AppTuningHouseIcon from "./icons/AppTuningHouseIcon.vue";
import AppWitsonIcon from "./icons/AppWitsonIcon.vue";
import AppAttantionIcon from "./icons/AppAttantionIcon.vue";
import AppDocServiceIcon from "./icons/AppDocServiceIcon.vue";
import AppGasServiceIcon from "./icons/AppGasServiceIcon.vue";
import AppSettingsIcon from "./icons/AppSettingsIcon.vue";
import AppChambarakIcon from "./icons/AppChambarakIcon.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const events = computed(() => [
  {
    date: "15 ФЕВРАЛЯ 2025",
    description: props.data.graphSaleModul.startSale,
    icon: AppSaleIcon,
  },
  {
    date: "30 МАРТА 2025",
    description: props.data.graphSaleModul.vaucher10mln,
    icon: AppTuningHouseIcon,
  },
  {
    date: "30 МАЯ 2025",
    description: props.data.graphSaleModul.vaucher10mln,
    icon: AppWitsonIcon,
  },
  {
    date: "01 ИЮЛЯ 2025",
    description: props.data.graphSaleModul.eventPlayerSale,
    icon: AppAttantionIcon,
  },
  {
    date: "15 ИЮЛЯ 2025",
    description: props.data.graphSaleModul.gentraAbout,
    icon: AppSettingsIcon,
    highlight: true,
  },
  {
    date: "30 ИЮЛЯ 2025",
    description: props.data.graphSaleModul.vaucher10mln,
    icon: AppGasServiceIcon,
  },
  {
    date: "30 СЕНТЯБРЯ 2025",
    description: props.data.graphSaleModul.vaucher10mln,
    icon: AppDocServiceIcon,
  },
  {
    date: "30 НОЯБРЯ 2025",
    description: props.data.graphSaleModul.vaucher10mln,
    icon: AppChambarakIcon,
  },
  {
    date: "01 ДЕКАБРЯ 2025",
    description: props.data.graphSaleModul.eventPlayerSale,
    icon: AppAttantionIcon,
  },
  {
    date: "15 ДЕКАБРЯ 2025",
    description: props.data.graphSaleModul.gentraAbout,
    icon: AppSettingsIcon,
    highlight: true,
  },
]);
</script>
  