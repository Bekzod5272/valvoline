<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div
    class="md:container flex flex-col justify-center items-center text-white"
  >
    <div>
      <p class="text-3xl font-semibold sm:text-[45px] mb-4 text-center">
        {{ props.data.contractModul.questions }}
      </p>
      <p class="mt-5">{{ props.data.contractModul.infoSale }}</p>
      <!-- <ul class="ml-1 poco2:ml-3 list-disc list-inside text-[16px]">
        <li>{{ props.data.contractModul.phone }}: +998 71 231 87 87</li>
        <a href="https://t.me/Valvoline_Support">
          <li>Telegram: @Valvoline_Support</li>
        </a>
      </ul> -->
      <a href="https://t.me/Valvoline_Support" class="flex justify-center">
        <button
          class="bg-[#FFDD00] text-black font-bold px-5 py-2 mt-5 rounded-md"
        >
          {{ props.data.contractModul.writingTg }}
        </button>
      </a>
    </div>
  </div>
</template>