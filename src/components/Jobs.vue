<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <section id="jobs" class="text-white dark:bg-[#6B7280] bg-[#010101] py-20 mt-20">
    <div class="container px-3 md:px-5 dark:text-white">
      <h1 class="phone:text-3xl sm:text-center poco2:text-4xl lg:text-5xl mb-5 poco2:mb-10">
        {{ data.jobs.title }}
      </h1>
      <div class="md:flex items-center semibig:items-start justify-between">
        <div class="semibig:pt-10">
          <h2 class="phone:text-lg poco2:text-xl lg:text-3xl md2:pr-5 md2:text-2xl md:w-5/6">
            {{ data.jobs.descr }}
          </h2>
          <ul class="my-10 text-lg px-5">
            <li class="my-4 flex phone:gap-5 poco2:gap-3 items-center sm:font-semibold sm:text-xl"
              v-for="(job, i) in data.jobs.jobs" :key="i">
              <img :src="job.icon" alt="icons">
              {{ job.text }}
            </li>
          </ul>
        </div>
        <div class="flex phone:flex-col poco2:mt-10 md:w-7/12">
          <div class="bg-gray-600 font-semibold md2:text-xl md2:py-10 md2:px-7 bg-opacity-30 rounded-lg p-3 md:p-5">
            <p class="mb-5 md2:mb-10 md:p-3 dark:text-slate-200">
              {{ data.jobs.inner.first }}
            </p>
            <p class="md:p-3 dark:text-slate-200">
              {{ data.jobs.inner.second }}
            </p>
          </div>
          <div class="flex py-3">
            <a class="p-3 rounded-2xl w-full text-xl text-center bg-main rounded" href="mailto:info@dgb.uz">{{
              data.jobs.inner.email }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
