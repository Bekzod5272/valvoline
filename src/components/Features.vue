<script setup>
import { data } from "autoprefixer";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <main
    class="bg-gradient-to-l from-[#cc0000] to-[#660000] dark:bg-gradient-to-l dark:from-[#00000080] dark:to-[#007A6F80] dark:text-white"
  >
    <section
      class="poco2:container py-20 phone:py-0 phone:px-[16px] md:px-5 phone:pb-0 semimd:pb-28"
    >
      <article
        class="flex flex-col md:flex-row items-center pt-10 poco2:pt-20 semimd:gap-14 justify-between"
      >
        <div class="w-7/12">
          <img
            class="object-contain text-center mb-5 md:mb-0"
            src="../img/logo2.webp"
            alt="phone image"
          />
        </div>
        <article class="text-white w-3/5 text-left phone:w-full font-[ValvolineFontMedium]">
          <h4 class="font-[ValvolineFontBold] text-2xl mb-8 text-white text-black">
            {{ props.data.featuresText.conditionsPromo }}
          </h4>
          <p class="dark:text-white text-[#EFEFEF] font-medium text-lg mb-10">
            {{ props.data.featuresText.greatNews }}
          </p>
          <div
            class="poco2:flex-col flex sm:flex-row flex-wrap justify-between"
          >
            <div
              v-for="(f, i) in props.data.features"
              :key="i"
              class="w-5/12 flex-auto semibig:w-[45%] phone:w-full sm:w-full poco2:text-left mb-4 poco2:mb-12 poco2:px-3 semimd:px-0 flex items-start gap-2 poco2:gap-6"
            >
              <div class="w-[60px] box-border rounded-lg flex justify-center">
                <component v-if="f.thumb" :is="f.thumb" />
              </div>
              <div class="w-<100% - 60px>">
                <h2
                  :class="[
                    'font-[ValvolineFontBold] text-[18px] poco2:text-xl  dark:text-white mb-2 poco2:mb-4',
                    f.highlight ? 'text-yellow-400 font-bold' : 'text-white',
                  ]"
                >
                  {{ f.title }}
                </h2>
                <p
                  :class="[
                    'dark:text-indigo-300 semibig:leading-7 poco2:leading-6  dark:opacity-50 text-[14px] poco2:text-lg',
                    f.highlight
                      ? 'text-yellow-400 font-bold'
                      : 'text-[#EFEFEF]',
                  ]"
                >
                  {{ f.text }}
                </p>
              </div>
            </div>
          </div>
        </article>
      </article>
    </section>
  </main>
</template>
