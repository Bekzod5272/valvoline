<script setup>
const props = defineProps({
  text: { type: String, required: false },
  icon: { type: String, required: false },
});
</script>
<template>
  <button
    class="bg-main text-white rounded-lg text-center p-4 font-medium my-5"
  >
    <slot>{{ text }}</slot>
    <i :class="icon"></i>
  </button>
</template>
