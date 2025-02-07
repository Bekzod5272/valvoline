<script setup>
import { ref } from 'vue';
import AppCloseIcon from '@/components/icons/AppCloseIcon.vue';
const props = defineProps({
    isShown: {
        type: Boolean,
        default: false
    }
});
let lang = ref(localStorage.getItem("lang") || "ru");

const switchLang = (l) => {
    location.reload();
    lang.value = l;
    localStorage.setItem("lang", l);
}
const emit = defineEmits(["close"]);
</script>

<template>
    <div class="bg-[#fff]  dark:bg-[#111] fixed top-0 right-0 h-full z-550 shadow-lg transition-transform duration-300 transform"
        :class="isShown ? 'translate-x-0' : 'translate-x-full'" style="width: 70%;">
        <div class="p-9">
            <button @click="$emit('close')" class="flex ml-auto">
                <app-close-icon class="fill-[#fff] dark:fill-[#111]" />
            </button>
            <div class="shadow-custom dark:shadow-darkCustom mt-2 p-3 rounded-md">
                <div class="flex items-center mb-3 mt-2">
                    <span @click="switchLang('ru')" :class="{
                        'bg-[#007A6F] dark:bg-[#007A6F] text-white dark:text-white': lang === 'ru',
                        'bg-[#bfbfbf] dark:bg-[#808080] text-white dark:text-white': lang !== 'ru'
                    }" class="dark:bg-white  font-bold px-2 rounded-md py-1 dark:text-black cursor-pointer mx-3">
                        RU
                    </span>
                    <span @click="switchLang('uz')" :class="{
                        'bg-[#007A6F] dark:bg-[#007A6F] text-white dark:text-white': lang === 'uz',
                        'bg-[#bfbfbf] text-white dark:bg-[#808080] dark:text-white': lang !== 'uz'
                    }" class="dark:bg-white  font-bold px-2 rounded-md py-1 dark:text-black cursor-pointer">
                        UZ
                    </span>
                    <span @click="switchLang('en')" :class="{
                        'bg-[#007A6F] dark:bg-[#007A6F] text-white dark:text-white': lang === 'en',
                        'bg-[#bfbfbf] dark:bg-[#808080] text-white dark:text-white': lang !== 'en'
                    }" class="dark:bg-white  font-bold px-2 rounded-md py-1 dark:text-black cursor-pointer ml-3">
                        EN
                    </span>
                </div>
                <!-- Menu -->
                <div class="w-full poco2:flex  gap-2">
                    <div class="bg-[#f4f4f4] dark:bg-[#212121] mb-2 poco2:mb-0 group cursor-pointer relative border p-2 rounded-md text-[13px] poco2:text-md"
                        @click="$emit('close')">
                        {{
                            lang == "ru"
                                ? "Связаться с нами"
                                : lang == "en"
                                    ? "Contact us"
                                    : "Biz bilan bog'lanish"
                        }}
                        <div
                            class="bg-slate-200 dark:bg-[#212121] text-black px-4 h-0 group-active:h-auto group-active:py-3 group-hover:h-auto group-hover:py-3 group-hover:mt-3 overflow-hidden rounded duration-500 absolute top-8 w-52 shadow-lg flex flex-col right-10">
                            <a href="tel:+9989712008900" class="border rounded-md p-1 dark:text-white mt-2">+998 (71)
                                200 89 00</a>
                            <a href="mailto:info@dgb.uz" class="border rounded-md p-1 dark:text-white mt-2">
                                info@dgb.uz</a>
                            <a href="https://t.me/digital_pay_support_bot"
                                class="border rounded-md p-1 dark:text-white mt-2">Telegram</a>
                        </div>
                    </div>
                        <RouterLink to="/#about" class="mb-2 poco2:mb-0 bg-[#f4f4f4] dark:bg-[#212121] border p-2 rounded-md text-[13px] poco2:text-md block"
                        @click="$emit('close')">{{
                            lang == "ru"
                                ? "О нас"
                                : lang == "en"
                                    ? "About Us"
                                    : "Biz haqimizda"
                        }}</RouterLink>
                        <RouterLink to="Services"
                        class="bg-[#f4f4f4] dark:bg-[#212121] border p-2 rounded-md text-[13px] poco2:text-md block"
                        @click="$emit('close')">{{
                            lang == "ru" ? "Услуги" : lang == "en" ? "Services" : "Xizmatlar"
                        }}</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
