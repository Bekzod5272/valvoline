<script setup>
import { onMounted, ref } from "vue";
import AppLogo from "@/components/icons/AppLogo.vue";
import AppTopIcon from "@/components/icons/AppTopIcon.vue";
import AppMenuIcon from "@/components/icons/AppMenuIcon.vue";
import AppstoreIcon from "../components/icons/AppstoreIcon.vue";
import GooglePlayIcon from "../components/icons/GooglePlayIcon.vue";
import AppPhoneIcon from "@/components/icons/AppPhoneIcon.vue";
import AppSendIcon from "@/components/icons/AppSendIcon.vue";
import AppEmailIcon from "@/components/icons/AppEmailIcon.vue";

import { RouterView, RouterLink } from "vue-router";

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
  <main
    class="h-auto bg-cover bg-center bg-[url('../img/background.jpg')] dark:bg-gradient-to-b dark:from-[#00000080] dark:to-[#007A6F80] pb-10"
  >
    <div>
      <div class="flex justify-center phone2:w-[90%] mx-auto">
        <img
          src="../img/valvoline-logo.png"
          class="mt-10 object-contain"
          alt=""
        />
      </div>
      <div class="flex justify-center mt-10">
        <img src="../img/sale.png" class="object-contain" alt="" />
      </div>
      <div class="w-full flex justify-evenly gap-5 mt-20 pb-10 relative">
        <img src="../img/bmw2.png" class="object-contain w-[52%]" />
        <img src="../img/gentra.png" class="object-contain w-[45%]" />
        <img
          src="../img/prizes.png"
          class="object-contain absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </div>
    </div>
  </main>
</template>
<style>
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>