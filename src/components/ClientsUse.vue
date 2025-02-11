<script setup>
import SectionTitle from "./SectionTitle.vue";
import SectionSub from "./SectionSub.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <main
    class="bg-gradient-to-r from-[#cc0000] to-[#660000] dark:bg-gradient-to-r dark:from-[#00000080] dark:to-[#007A6F80] dark:text-white pb-10"
  >
    <section id="about" class="pt-10 semimd:pb-0 dark:text-white poco2:pt-20">
      <div class="md:container px-[16px] sm:px-5">
        <SectionTitle class="text-center mb-5">{{
          props.data.abilsTitle
        }}</SectionTitle>
        <SectionSub class="text-left mb-5">{{
          props.data.abilsSub
        }}</SectionSub>
        <div
          class="w-full flex flex-wrap items-baseline gap-10 py-20 phone:py-4"
        >
          <div
            class="w-full sm2:w-[45%] grow"
            v-for="(k, i) in props.data.abilsCards"
            :key="i"
          >
            <div class="flex gap-5 items-center mb-2">
              <component :is="k.icon" />
              <h3
                :class="[
                  'text-2xl font-semibold poco2:text-3xl text-white mb-5 phone:mb-2',
                  k.highlight ? 'text-yellow-400 font-bold' : 'text-white',
                ]"
              >
                {{ k.title }}
              </h3>
            </div>
            <p
              :class="[
                'text-lg text-white',
                k.highlight ? 'text-yellow-400' : 'text-white',
              ]"
            >
              {{ k.desc }}
            </p>
            <br />
            <p
              :class="[
                'text-lg text-white',
                k.highlight ? 'text-yellow-400' : 'text-white',
              ]"
            >
              {{ k.numDesc }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
