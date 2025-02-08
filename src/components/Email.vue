<script setup>
import { ref } from "vue";
import AppBottomIcon from "./icons/AppBottomIcon.vue";
import Contract from "@/components/Contract.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const activeIdx = ref(-20);
const showText = (idx) => {
  if (activeIdx.value != idx) {
    activeIdx.value = idx;
  } else if (activeIdx.value == idx) {
    activeIdx.value = -20;
  }
};
</script>
<template>
  <section
    class="bg-gradient-to-l from-[#cc0000] to-[#660000] dark:bg-gradient-to-l dark:from-[#00000080] dark:to-[#007A6F80] dark:text-white pt-20 pb-40"
  >
    <Contract :data="props.data" style="margin-bottom: 50px" />
    <div class="poco2:container md:px-3">
      <section class="flex phone:w-full items-center flex-col">
        <article
          class="font-bold px-3 phone:text-center md:text-left md:pl-3 md:flex md:flex-col md:justify-center"
        >
          <h3
            class="text-white mb-5 text-center dark:text-main phone:text-xl poco:text-2xl md:text-3xl md:pr-40"
          >
            {{ data.popularQuests }}
          </h3>
        </article>
        <article
          class="my-10 phone:mx-2 md:w-11/12 shadow-custom rounded-[20px] phone2:rounded-[60px] p-10 bg-[#FFFFFF80] dark:bg-[#212121]"
        >
          <div
            @click="showText(idx)"
            :class="
              activeIdx == idx
                ? 'dark:bg-[#212121] mb-2 mt-2 shadow-custom dark:shadow-darkCustom rounded-[20px] relative overflow-hidden'
                : 'odd:bg-[#F8F8F880] dark:odd:bg-[#171717] rounded-[20px]  relative overflow-hidden'
            "
            v-for="(it, idx) in data.divisions"
            :key="it"
          >
            <div
              class="py-4 px-3 w-9/12 h-auto phone2:py-5 font-semibold text-black dark:text-white"
            >
              {{ it.title }}
              <div
                :class="
                  activeIdx == idx
                    ? 'cursor-pointer rotate-180 rounded-md absolute right-3 phone:top-2 duration-500 phone2:top-3'
                    : 'rounded-md absolute right-3 top-2 duration-500 phone2:top-3 cursor-pointer'
                "
              >
                <div class="flex items-center justify-center mt-1">
                  <app-bottom-icon />
                </div>
              </div>
            </div>
            <div
              :class="
                activeIdx == idx
                  ? 'max-h-[400px] bg-[#F8F8F880] dark:border-white ease-in-out dark:border-opacity-30 my-1 py-4 px-3 duration-700 md:pr-10'
                  : 'max-h-0 duration-700 px-3 md:pr-10 ease-in-out'
              "
            >
              <span
                :class="
                  activeIdx == idx
                    ? 'dark:opacity-50 opacity-80 duration-500 text-gray-900 dark:text-indigo-300 text-sm md:text-base'
                    : 'opacity-50 duration-500 text-sm md:text-base'
                "
              >
                {{ it.text }}
              </span>
            </div>
          </div>
        </article>
      </section>
    </div>
  </section>
</template>