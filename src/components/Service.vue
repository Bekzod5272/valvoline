<script setup>
import { computed } from "vue";


const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const isDark = computed(() => document.documentElement.classList.contains("dark"));

</script>
<template>
  <section>
    <div class="container px-0 py-10 poco2:py-20 poco2:px-3">
      <div id="rate">
        <article>
          <h1 class="text-xl font-semibold poco2:text-5xl text-main mb-10">
            {{ data.service.title }}
          </h1>
          <div class="border-solid">
            <div class="p-3 poco2:p-10 shadow-custom rounded-[20px] poco2:rounded-[60px] mb-[50px] dark:bg-[#212121]">
              <div class="w-full">
                <h2
                  class="text-center font-semibold py-4 dark:text-main text-main poco2:text-xl sm2:text-2xl poco2:text-[16px]">
                  {{ data?.service?.subtitle }}
                </h2>
                <div v-for="(serv, index) in data.service.services" :key="index"
                  class="even:bg-[#F8F8F8] dark:bg-servicesDark dark:odd:bg-[#212121] rounded-[10px] poco2:rounded-[20px]">
                  <div class="flex justify-between mb-2 items-center">
                    <th class="text-slate-500 px-2 py-2 poco2:px-3 poco2:py-3 text-[10px] poco2:text-[18px]">
                      {{ serv.text }}
                    </th>
                    <th class="px-2 text-slate-500 py-2 poco2:px-3 text-[10px]  poco2:text-[18px]"
                      v-for="(pr, i) in serv.price" :key="i">
                      {{ pr }}
                    </th>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-3 poco2:p-10 shadow-custom rounded-[20px] poco2:rounded-[60px] dark:bg-[#212121]">
              <div class="w-full">
                <h2 class="text-center font-semibold py-4 dark:text-main text-main poco2:text-xl sm2:text-2xl">
                  {{ data?.service?.subtitle2 }}
                </h2>
                <div
                  class="even:bg-[#F8F8F8] dark:bg-servicesDark dark:odd:bg-[#212121] rounded-[10px] poco2:rounded-[20px]"
                  v-for="(serv, i) in data.service.smss" :key="i">
                  <div class="flex justify-between mb-2 items-center ">
                    <th class="text-slate-500 px-2 py-2 poco2:px-3 poco2:py-3 text-[10px] poco2:text-[18px]">
                      {{ serv.text }}
                    </th>
                    <th class="px-2 text-slate-500 py-2 poco2:px-3 text-[10px]  poco2:text-[18px]"
                      v-for="(pr, i) in serv.price" :key="i">
                      {{ pr }}
                    </th>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
<style scoped>
td,
tr,
th {
  border: none;
}
</style>
