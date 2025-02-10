<script setup>
import ClientsUse from "@/components/ClientsUse.vue";
import Email from "@/components/Email.vue";
import Features from "@/components/Features.vue";
import HowWork from "@/components/HowWork.vue";
import Wrapper from "@/components/Wrapper.vue";
import HowUseTelegram from "@/components/HowUseTelegram.vue";
import AboutCompany from "@/components/AboutCompany.vue";
import GraphSale from "@/components/GraphSale.vue";
import { nextTick, onMounted, ref } from "vue";
import eventBus from "@/constants/eventBus";

const props = defineProps({
  data: {
    type: String,
    required: true,
  },
});

const wrapperContainerRef = ref(null);
const howUseTelegramRef = ref(null);
const aboutCompany = ref(null);
const emailRef = ref(null);

function scrollToWrapper() {
  nextTick(() => {
    wrapperContainerRef.value?.$el.scrollIntoView({ behavior: "smooth" });
  });
}

function scrollToAboutCompany() {
  nextTick(() => {
    aboutCompany.value.$el.scrollIntoView({ behavior: "smooth" });
  });
}

function scrollToHowUseTelegram() {
  nextTick(() => {
    if (howUseTelegramRef.value?.$el) {
      howUseTelegramRef.value.$el.scrollIntoView({ behavior: "smooth" });
    }
  });
}

function scrollToEmail() {
  nextTick(() => {
    if (emailRef.value.$el) {
      emailRef.value.$el.scrollIntoView({ behavior: "smooth" });
    }
  });
}

onMounted(() => {
  eventBus.on("scroll-to-wrapper", scrollToWrapper);
  eventBus.on("scroll-to-about-company", scrollToAboutCompany);
  eventBus.on("scroll-to-how-use-telegram", scrollToHowUseTelegram);
  eventBus.on("scroll-to-email", scrollToEmail);
});
</script>
<template>
  <Wrapper :data="props.data" ref="wrapperContainerRef" />
  <about-company :data="props.data" ref="aboutCompany" />
  <Features :data="props.data" />
  <HowWork :data="props.data" />
  <graph-sale :data="props.data" />
  <how-use-telegram :data="props.data" ref="howUseTelegramRef" />
  <ClientsUse :data="props.data" />
  <Email :data="props.data" ref="emailRef" />
  <div>
    <footer
      class="bg-gradient-to-r from-[#cc0000] to-[#660000] dark:bg-gradient-to-r dark:from-[#00000080] dark:to-[#007A6F80] dark:text-white pb-10 text-white border-gray-300 dark:border-gray-700 dark:bg-[#212121]"
    >
      <div class="poco2:container gap-10 px-2 md:px-5 py-5 flex">
        <div class="flex md:flex-row flex-col-reverse md:gap-10">
          <div class="min-w-fit self-start">
            <p
              v-for="(contact, index) in props.data.contacts"
              class="font-semibold my-1 text-sm text-white dark:text-gray-500"
              :key="index"
            >
              {{ contact }}
            </p>
          </div>

          <div class="flex flex-col">
            <h4
              class="shadow-custom dark:shadow-darkCustom rounded-xl md:text-xl text-white max-w-max sm:text-2xl text-lg p-1 px-5 text-center"
            >
              {{ props.data.navLinks[1] }}
            </h4>
            <ul class="pt-3">
              <li
                class="mb-3 text-white text-lg"
                v-for="(item, index) in props.data.documents.help"
                :key="index"
              >
                <a :href="item.link" target="_blank">{{ item?.text }}</a>
              </li>
            </ul>
          </div>
          <div class="flex flex-col">
            <h4
              class="shadow-custom dark:shadow-darkCustom rounded-xl md:text-xl text-white max-w-max sm:text-2xl text-lg p-1 px-6 text-center"
            >
              {{ props.data.navLinks[0] }}
            </h4>
            <ul class="pt-3">
              <li
                class="mb-3 text-white text-lg"
                v-for="(item, index) in props.data.documents.services"
                :key="index"
              >
                <a
                  class="cursor-pointer"
                  @click.prevent="
                    item.link === 'wrapper'
                      ? scrollToWrapper()
                      : item.link === 'about'
                      ? scrollToAboutCompany()
                      : item.link === 'telegram'
                      ? scrollToHowUseTelegram()
                      : item.link === 'email'
                      ? scrollToEmail()
                      : null
                  "
                >
                  {{ item?.text }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style src="../style.css"></style>
