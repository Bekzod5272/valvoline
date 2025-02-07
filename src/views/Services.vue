<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <section class="container px-3 pt-32 dark:text-white text-center">
    <div>
      <h1 class="text-2xl sm2:text-3xl md2:text-5xl font-semibold">
        {{ data.additional.title }}
      </h1>
      <p class="mb-10 mt-3 sm2:text-lg">{{ data.additional.subtitle }}</p>
      <div class="flex flex-col pb-20">
        <p class="font-medium dark:text-slate-200 sm2:text-lg text-left">
          {{ data.additional.descr }}
        </p>
        <p class="font-medium mt-10 text-left dark:text-slate-200 sm2:text-lg">
          {{ data.aboutSub }}
        </p>
        <p class="font-medium mt-10 text-left dark:text-slate-200 sm2:text-lg">
          {{ data.aboutSub2 }}
        </p>
        <p class="font-medium mt-10 text-left dark:text-slate-200 sm2:text-lg">
          {{ data.aboutSub3 }}
        </p>
      </div>
    </div>
    <main class="pt-20 semibig:text-left">
      <div>
        <article id="auto" class="sm2:text-lg semibig:text-xl">
          <h2 class="text-2xl text-main mb-5 sm2:text-3xl md2:text-5xl">
            {{ data.additional.services.autoPay.title }}
          </h2>
          <p class="mt-2 mb-5 sm2:text-xl sm2:mb-1">
            {{ data.additional.services.autoPay.descr }}
          </p>
          <p class="text-sm sm2:text-xl mb-5 dark:text-slate-300">
            {{ data.additional.services.autoPay.subtitle }}
          </p>
          <ul class="list-disc px-5">
            <li class="text-left sm2:text-xl" v-for="(t, i) in data.additional.services.autoPay.types" :key="i">
              {{ t }}
            </li>
          </ul>
          <div class="text-left sm2:text-xl py-10">
            <h2 class="text-xl sm2:text-2xl mb-3 text-main">
              {{ data.additional.services.autoPay.first.title }}
            </h2>
            <p class="dark:text-gray-300 text-black">
              {{ data.additional.services.autoPay.first.text }}
            </p>
            <ul class="list-disc px-5 py-5">
              <li v-for="(t, i) in data.additional.services.autoPay.first.types" :key="i">
                {{ t }}
              </li>
            </ul>
            <h3 class="text-main font-medium">
              {{ data.additional.services.autoPay.first.activate.title }}
            </h3>
            <p class="py-3 dark:text-gray-300 text-black">
              {{ data.additional.services.autoPay.first.activate.content }}
            </p>
          </div>
        </article>
        <article class="pb-10 sm2:text-xl">
          <div class="text-left">
            <h2 class="text-xl sm2:text-2xl text-main mb-3">
              {{ data.additional.services.autoPay.second.title }}
            </h2>
            <p class="dark:text-gray-300 text-black">
              {{ data.additional.services.autoPay.second.descr }}
            </p>
            <p class="my-3 text-main font-medium">
              {{ data.additional.services.autoPay.second.activate.title }}
            </p>
            <ul class="list-disk">
              <li class="my-3" v-for="(t, idx) in data.additional.services.autoPay.second
                .activate.types" :key="idx">
                {{ idx + 1 }}. {{ t }}
              </li>
            </ul>
            <p class="dark:text-gray-400 text-black">
              {{ data.additional.services.autoPay.second.activate.content }}
            </p>
          </div>
        </article>
        <article id="place" class="pb-10 pt-20 sm2:text-xl">
          <h2 class="text-2xl sm2:text-3xl md2:text-5xl text-main mb-5">
            {{ data.additional.services.eventPay.title }}
          </h2>
          <p>{{ data.additional.services.eventPay.subtitle }}</p>
          <p class="my-4">{{ data.additional.services.eventPay.descr }}</p>
          <p class="my-4">{{ data.additional.services.eventPay.descr2 }}</p>
          <div class="text-left">
            <h3 class="text-main font-medium">
              {{ data.additional.services.eventPay.activate.title }}
            </h3>
            <ul class="my-5">
              <li class="my-3" v-for="(t, idx) in data.additional.services.eventPay.activate
                .types" :key="idx">
                {{ idx + 1 }}. {{ t }}
              </li>
            </ul>
            <p class="text-red-700 font-medium">
              {{ data.additional.services.eventPay.activate.warn }}
            </p>
          </div>
        </article>
        <article id="invoice" class="sm2:text-xl pb-20">
          <h2 class="text-2xl sm2:text-3xl md2:text-5xl text-main mb-5 pt-20">
            {{ data.additional.services.myInvoice.title }}
          </h2>
          <p class="my-3">{{ data.additional.services.myInvoice.descr }}</p>
          <p>{{ data.additional.services.myInvoice.descr2 }}</p>
          <div class="text-left py-5">
            <h4 class="dark:text-gray-300 text-black">
              {{ data.additional.services.myInvoice.typesTitle }}
            </h4>
            <ul>
              <li v-for="(t, idx) in data.additional.services.myInvoice.types" :key="idx">
                {{ idx + 1 }}. {{ t }}
              </li>
            </ul>
          </div>
        </article>
        <article id="card" class="py-20 sm2:text-xl">
          <h2 class="text-2xl sm2:text-3xl md2:text-5xl text-main mb-5 sm2:tetxt-3xl">
            {{ data.additional.services.transfer.title }}
          </h2>
          <p class="my-3 dark:text-gray-300 text-black">
            {{ data.additional.services.transfer.descr }}
          </p>
          <p class="dark:text-gray-300 text-black">
            {{ data.additional.services.transfer.descr2 }}
          </p>
          <ul class="text-left pt-10">
            <li class="mb-2" v-for="(t, idx) in data.additional.services.transfer.types" :key="idx">
              {{ idx + 1 }}. {{ t }}
            </li>
          </ul>
        </article>
      </div>
    </main>
  </section>
</template>
