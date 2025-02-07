<script setup>
import ClientsUse from "@/components/ClientsUse.vue";
import Email from "@/components/Email.vue";
import Features from "@/components/Features.vue";
import HowWork from "@/components/HowWork.vue";
import Wrapper from "@/components/Wrapper.vue";
import HowUseTelegram from "@/components/HowUseTelegram.vue";
import AboutCompany from "@/components/AboutCompany.vue";
import AppFooter from "./AppFooter.vue";
import GraphSale from "@/components/GraphSale.vue";

const props = defineProps({
  data: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <Wrapper :data="props.data" />
  <about-company :data="props.data" />
  <Features :data="props.data" />
  <HowWork :data="props.data" />
  <graph-sale :data="props.data"/>
  <how-use-telegram :data="props.data" />
  <ClientsUse :data="props.data" />
  <Email :data="props.data" />
  <app-footer :data="props.data" />
</template>

<style src="../style.css"></style>
