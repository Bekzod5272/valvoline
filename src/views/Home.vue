<script setup>
import { onMounted, ref } from "vue";
import { resource } from "@/components/resources";
import AppLogo from "@/components/icons/AppLogo.vue";
import AppTopIcon from "@/components/icons/AppTopIcon.vue";
import AppFooter from "./AppFooter.vue";
import AppMenuIcon from "@/components/icons/AppMenuIcon.vue";
import AppstoreIcon from "../components/icons/AppstoreIcon.vue";
import GooglePlayIcon from "../components/icons/GooglePlayIcon.vue";
import AppPhoneIcon from "@/components/icons/AppPhoneIcon.vue";
import AppSendIcon from "@/components/icons/AppSendIcon.vue";
import AppEmailIcon from "@/components/icons/AppEmailIcon.vue";

import { RouterView, RouterLink } from "vue-router";
import AppNav from "./AppNav.vue";

const showContact = ref(false);
let lang = ref(localStorage.getItem("lang") || "ru");
let theme = localStorage.getItem("theme") || false;
let isLight = theme ? ref(false) : ref(true);
let isShown = ref(false);
let html = document.querySelector("html");
html.className = isLight.value ? "" : "dark";

const contactUsData = ref([
  {
    title: "+998 (71) 200 89 00",
    link: "tel:+998712008900",
    icon: AppPhoneIcon,
  },
  {
    title: "E-mail",
    link: "mailto:info@dgb.uz",
    icon: AppEmailIcon,
  },
  {
    title: "Telegram",
    link: "https://t.me/digital_pay_support_bot",
    icon: AppSendIcon,
  },
]);

const switchLight = () => {
  isLight.value = !isLight.value;
  let html = document.querySelector("html");
  html.className = isLight.value ? "" : "dark";

  isLight.value
    ? localStorage.removeItem("theme")
    : localStorage.setItem("theme", "dark");
};

const blockScroll = (bool) => {
  const body = document.querySelector("body");
  if (bool) {
    body.classList.add("overflow-hidden");
  } else {
    body.classList.remove("overflow-hidden");
  }
};

const switchLang = (l) => {
  lang.value = l;
  localStorage.setItem("lang", l);
};
</script>
<template>
  <section class="dark:bg-[#000000]">
    <nav
      id="top"
      class="flex bg-cover bg-center bg-[url('../img/background.jpg')] dark:bg-gradient-to-l dark:from-[#00000080] dark:to-[#007A6F80] justify-between py-4 sm:px-3 phone:py-3 md:px-0 md2:py-5 !max-w-[100vw] dark:bg-[#212121] dark:text-white top-0 right-0 left-0"
    >
      <div class="container flex justify-end">
        <div class="flex items-center font-semibold">
          <div class="mr-10 poco2:flex hidden items-center">
            <span
              @click="switchLang('ru')"
              :class="{
                'bg-[#254893] text-white': lang === 'ru',
                'dark:bg-[#808080] bg-[#bfbfbf] text-white': lang !== 'ru',
              }"
              class="dark:text-white phone:hidden semimd:inline font-bold px-2 rounded-md py-1 cursor-pointer mx-3"
            >
              RU
            </span>
            <span
              @click="switchLang('uz')"
              :class="{
                'bg-[#254893] text-white': lang === 'uz',
                'dark:bg-[#808080] bg-[#bfbfbf] text-white': lang !== 'uz',
              }"
              class="dark:text-white phone:hidden semimd:inline font-bold px-2 rounded-md py-1 cursor-pointer"
            >
              UZ
            </span>
          </div>

          <div class="flex items-center">
            <span
              class="font-semibold poco:inline dark:opacity-70 poco:text-base text-lg text-white spacing tracking-wide phone:hidden"
              >Light</span
            >
            <label
              class="relative flex  items-center cursor-pointer ml-0 poco2:ml-3"
            >
              <input
                type="checkbox"
                :checked="theme ? true : false"
                class="sr-only peer"
              />
              <div
                @click="switchLight"
                class="w-14 h-7 phone:mr-3 phone:h-6 phone:w-12 bg-[#254893] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-7 phone:peer-checked:after:translate-x-[22px] peer-checked:after:border-white after:content-[''] after:absolute after:top-1 phone:after:top-[3px] after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 phone:after:h-[18px] phone:after:w-[18px] after:transition-all"
              ></div>
            </label>
            <span
              class="font-semibold opacity-80 text-white poco:inline poco:mr-5 poco:text-base dark:opacity-100 text-lg spacing tracking-wide phone:hidden"
              >Dark</span
            >
          </div>
        </div>
      </div>
      <div
        class="fixed flex px-6 py-3 text-white gap-2 cursor-pointer bg-main rounded-full xl:top-[83vh] z-50 duration-300 lg:right-25 phone:right-[1rem] phone:top-[75vh] animate-pulse-scale"
        @click="showContact = !showContact"
      >
        <app-phone-icon />
        <p class="poco2:block hidden">Bog'lanish</p>
      </div>

      <transition-group name="list" tag="div">
        <div
          v-if="showContact"
          class="flex flex-col gap-4 fixed xl:top-[75vh] z-50 duration-300 lg:right-25 phone:right-2 phone:top-[60vh]"
        >
          <a
            href="https://t.me/valvoline_support"
            target="_blank"
            class="bg-blue-500 text-white rounded-full px-6 py-2 cursor-pointer animate-slide-in flex gap-2"
          >
            <app-send-icon />
            <p>Telegram</p>
          </a>
        </div>
      </transition-group>
      <div
        class="bg-[#f4f4f4] dark:bg-[#212121] rounded-full p-3 fixed xl:top-[90vh] z-50 duration-300 lg:right-20 phone:right-[1rem] phone:top-[85vh] poco:right-3"
        :class="isShown == false ? 'block' : 'hidden'"
      >
        <a href="#top">
          <AppTopIcon class="fill-black" />
        </a>
      </div>
    </nav>
    <RouterView
      :data="
        lang == 'ru' ? resource.ru : lang == 'en' ? resource.en : resource.uz
      "
    />
  </section>
</template>

<style>
@keyframes pulse-scale {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

.animate-pulse-scale {
  animation: pulse-scale 1.5s infinite ease-in-out;
}

@keyframes slide-in {
  from {
    transform: translateX(50px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in {
  animation: slide-in 0.5s ease-in-out;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>