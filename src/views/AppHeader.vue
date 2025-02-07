<script setup>
import { computed, ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import AppLogo from "@/components/icons/AppLogo.vue";
import AppTopIcon from "@/components/icons/AppTopIcon.vue";
import AppMenuIcon from "@/components/icons/AppMenuIcon.vue";
import AppPhoneIcon from "@/components/icons/AppPhoneIcon.vue";
import AppNav from "./AppNav.vue";

let theme = ref(localStorage.getItem("theme") === "dark");
let isLight = computed(() => !theme.value);

onMounted(() => {
    const html = document.querySelector("html");
    html.className = theme.value ? "dark" : "";
});

const switchLight = () => {
    theme.value = !theme.value;
    const html = document.querySelector("html");
    html.className = theme.value ? "dark" : "";
    localStorage.setItem("theme", theme.value ? "dark" : "light");
};

let lang = ref(localStorage.getItem("lang") || "ru");

const switchLang = (l) => {
    lang.value = l;
    localStorage.setItem("lang", l);
    location.reload();
};

let isShown = ref(false);
const blockScroll = (bool) => {
    const body = document.querySelector("body");
    if (bool) {
        body.classList.add("overflow-hidden");
    } else {
        body.classList.remove("overflow-hidden");
    }
};
</script>

<template>
    <nav id="top"
        class="absolute z-50 flex justify-between py-4 sm:px-3 phone:py-3 md:px-0 md2:py-5 !max-w-[100vw] shadow-md dark:shadow-none bg-white dark:bg-[#212121] dark:text-white top-0 right-0 left-0">
    </nav>
</template>
