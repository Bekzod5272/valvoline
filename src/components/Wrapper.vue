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
</script>
<template>
  <main
    class="h-auto bg-cover bg-center bg-[url('../img/background.jpg')] dark:bg-gradient-to-b dark:from-[#00000080] dark:to-[#007A6F80] pb-10 phone:px-2"
  >
    <div>
      <div class="flex justify-center phone2:w-[90%] mx-auto">
        <img
          src="../img/valvoline-logo.png"
          class="mt-10 object-contain"
          alt=""
        />
      </div>
      <div class="flex justify-center mt-10">
        <img src="../img/sale.png" class="object-contain" alt="" />
      </div>
      <h1
        class="wrapper-sale-date font-bold text-3xl md:text-5xl tracking-wide outline-text style[]"
      >
        15-Fevraldan 15-Dekabrgacha
      </h1>
      <div class="flex justify-between w-[90%] mx-auto">
        <div v-for="(i, index) in icons" :key="index">
          <component :is="i" class="scale-[1.4]" />
        </div>
      </div>
      <div class="w-full flex justify-evenly gap-5 mt-20 pb-10 relative">
        <img src="../img/bmw2.png" class="object-contain w-[52%]" />
        <img src="../img/gentra.png" class="object-contain w-[45%]" />
        <img
          src="../img/prizes.png"
          class="object-contain absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </div>
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
  text-shadow: -1px -1px 0 #929090, 1px -1px 0 #929090, -1px 1px 0 #929090,
    1px 1px 0 #929090;
  color: #be0906;
}
</style>