<script setup>
import { onMounted, ref } from "vue";
import AppChambarakIcon from "./icons/AppChambarakIcon.vue";
import AppTuningHouseIcon from "./icons/AppTuningHouseIcon.vue";
import AppDocServiceIcon from "./icons/AppDocServiceIcon.vue";
import AppGasServiceIcon from "./icons/AppGasServiceIcon.vue";
import AppWitsonIcon from "./icons/AppWitsonIcon.vue";
const icons = [
  AppChambarakIcon,
  AppTuningHouseIcon,
  AppDocServiceIcon,
  AppGasServiceIcon,
  AppWitsonIcon,
];
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <main
    class="h-auto bg-cover bg-center bg-[url('../img/background.jpg')] dark:bg-gradient-to-b dark:from-[#00000080] dark:to-[#007A6F80] pb-10 phone:px-[16px]"
  >
    <div class="md:container">
      <div class="flex justify-center phone2:w-[90%] mx-auto">
        <img
          src="../img/valvoline-logo.png"
          class="mt-10 hidden poco2:block object-contain"
        />
        <img
          src="../img/valvolineLogoMob.webp"
          class="w-[90%] mt-10 block poco2:hidden object-contain"
          alt=""
        />
      </div>
      <div class="flex justify-center mt-10">
        <img src="../img/sale.png" class="object-contain" alt="" />
      </div>
      <div class="w-[60%] poco2:[w-100%] mx-auto">
        <h1
          class="wrapper-sale-date font-bold text-2xl md:text-5xl tracking-wide font-[ValvolineFontBold] outline-text"
        >
          {{ props.data.wrapperModul.saleDate }}
        </h1>
      </div>
      <div class="flex justify-between w-[90%] mx-auto">
        <div v-for="(i, index) in icons" :key="index">
          <component :is="i" class="poco2:scale-[1.4]" />
        </div>
      </div>
      <h1
        class="text-center font-bold font-[ValvolineFontBold] text-white mt-5 uppercase text-[14px] poco2:text-[16px]"
      >
        {{ props.data.wrapperModul.aboutSale }}
      </h1>
      <div
        class="w-full flex flex-row-reverse poco2:flex-row justify-evenly gap-1 poco2:gap-5 mt-20 pb-3 poco2:pb-10 relative"
      >
        <img src="../img/bmw2.png" class="object-contain w-[52%]" />
        <img src="../img/gentra.png" class="object-contain w-[45%]" />
        <img
          src="../img/prizes.png"
          class="object-contain poco2:block hidden absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </div>
      <img
        src="../img/prizes.png"
        class="object-contain poco2:hidden block flex mx-auto"
      />
    </div>
  </main>
</template>
<style>
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.wrapper-sale-date {
  text-align: center;
  margin: 20px 0;
  text-shadow: -1px -1px 0 #cbc6c6, 1px -1px 0 #cbc6c6, -1px 1px 0 #cbc6c6,
    1px 1px 0 #cbc6c6;
  color: #be0906;
}
</style>