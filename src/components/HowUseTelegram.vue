<script setup>
import SectionTitle from "./SectionTitle.vue";
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div
    class="bg-gradient-to-r from-[#cc0000] to-[#660000] dark:bg-gradient-to-r dark:from-[#00000080] dark:to-[#007A6F80] dark:text-white pb-10 poco2:pt-10 pt-5"
  >
    <div
      class="md:container flex flex-col sm:flex-row items-center justify-center"
    >
      <div class="p-5">
        <section-title> {{ props?.data?.howUseTg?.howEnter }} </section-title>
        <ul class="list-disc list-inside text-2xl text-white">
          <li class="text-xl mt-4">{{ props?.data?.howUseTg?.findBot }}</li>
          <li class="text-xl mt-4">{{ props.data.howUseTg.enterPromo }}</li>
          <li class="text-xl mt-4">
            {{ props.data.howUseTg.registerForPromo }}
          </li>
        </ul>
        <a href="https://t.me/ValvolinePromoBot">
          <button
            class="bg-[#254893] py-3 px-7 text-lg text-white rounded-md mt-5"
          >
            {{ props.data.howUseTg.enterTgBot }}
          </button></a
        >
      </div>
      <div>
        <img src="../img/tg-qr.webp" alt="" />
      </div>
    </div>
  </div>
</template>