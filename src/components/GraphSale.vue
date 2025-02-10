<template>
  <div
    class="bg-cover bg-center bg-[url('../img/background.jpg')] dark:bg-gradient-to-l dark:from-[#00000080] dark:to-[#007A6F80] flex flex-col items-center space-y-6"
  >
    <h1 class="text-white font-bold text-[30px] mt-8 mb-5 poco2:text-[48px]">
      {{ props.data.graphSaleModul.graphSale }}
    </h1>
    <div
      class="md:container relative w-full max-w-[55rem] sm2:max-w-ls phone:px-[16px]"
    >
      <div
        class="absolute left-[39%] poco2:left-1/2 top-0 h-[90%] w-0.5 border-l-2 border-dashed border-white transform -translate-x-1/2"
      ></div>
      <div
        v-for="(event, index) in events"
        :key="index"
        class="relative flex items-center mb-4"
      >
        <div class="w-[35%] poco2:w-1/2 poco2:text-right text-center pr-6">
          <p
            :class="[
              'text-white font-bold text-[16px]',
              event.highlight
                ? 'text-yellow-400 font-bold text-[16px]'
                : 'text-gray-200',
            ]"
          >
            {{ event.month }}
            <br class="block poco2:hidden" />
            {{ event.date }}
          </p>
        </div>
        <div class="flex items-center justify-center bg-red-700 rounded-full">
          <component :is="event.icon" />
        </div>
        <div class="w-[64%] poco2:w-1/2 pl-6">
          <p
            :class="[
              'text-white font-medium text-[16px]',
              event.highlight
                ? 'text-yellow-400 font-bold text-[16px]'
                : 'text-gray-200',
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
    month: `15 ${props.data.months.february}`,
    date: "2025",
    description: props.data.graphSaleModul.startSale,
    icon: AppSaleIcon,
  },
  {
    month: `30 ${props.data.months.march}`,
    date: "2025",
    description: props.data.graphSaleModul.vaucher10mln,
    icon: AppTuningHouseIcon,
  },
  {
    month: `30 ${props.data.months.may}`,
    date: "2025",
    description: props.data.graphSaleModul.vaucher10mln,
    icon: AppWitsonIcon,
  },
  {
    month: `01 ${props.data.months.july}`,
    date: "2025",
    description: props.data.graphSaleModul.eventPlayerSale,
    icon: AppAttantionIcon,
  },
  {
    month: `15 ${props.data.months.july}`,
    date: "2025",
    description: props.data.graphSaleModul.gentraAbout,
    icon: AppSettingsIcon,
    highlight: true,
  },
  {
    month: `30 ${props.data.months.july}`,
    date: "2025",
    description: props.data.graphSaleModul.vaucher10mln,
    icon: AppGasServiceIcon,
  },
  {
    month: `30 ${props.data.months.september}`,
    date: "2025",
    description: props.data.graphSaleModul.vaucher10mln,
    icon: AppDocServiceIcon,
  },
  {
    month: `30 ${props.data.months.november}`,
    date: "2025",
    description: props.data.graphSaleModul.vaucher10mln,
    icon: AppChambarakIcon,
  },
  {
    month: `01 ${props.data.months.december}`,
    date: "2025",
    description: props.data.graphSaleModul.eventPlayerSale,
    icon: AppAttantionIcon,
  },
  {
    month: `01 ${props.data.months.december}`,
    date: "2025",
    description: props.data.graphSaleModul.gentraAbout,
    icon: AppSettingsIcon,
    highlight: true,
  },
]);
</script>
  