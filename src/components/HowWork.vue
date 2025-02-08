<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import AppRightIcon from "./icons/AppRightIcon.vue";
import AppLeftIcon from "./icons/AppLeftIcon.vue";
import { ref, computed } from "vue";
import SectionTitle from "./SectionTitle.vue";

const currentSlide = ref(1);
let carousel = ref(null);

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div
    class="h-auto pt-10 bg-cover bg-center bg-[url('../img/background.jpg')] dark:bg-how-work-back-dark"
  >
    <p class="w-1/2 mx-auto text-[28px] poco2:text-[45px] text-white font-bold text-center">
      {{ data.slidesTitle }}
    </p>
    <section
      class="dark:text-white pt-20 pb-10 justify-center container relative"
    >
      <div class="phone:w-11/12 md:w-full mx-auto pt-[75px]">
        <Carousel
          transition="700"
          :items-to-show="2.7"
          :wrap-around="true"
          ref="carousel"
          v-model="currentSlide"
          class="carousel phone:duration-300 md2:duration-700 w-full md:mx-auto"
          :breakpoints="{
            320: {
              itemsToShow: 1,
              transition: 500,
            },
            780: {
              itemsToShow: 2,
            },
            1100: {
              itemsToShow: 3,
            },
          }"
        >
          <Slide
            class="pb-[50px] slide"
            v-for="(slide, idx) in data.slides"
            :key="slide"
          >
            <div
              :class="
                currentSlide == idx
                  ? 'carousel__item  flex flex-col opacity-100 duration-500'
                  : 'carousel__item flex flex-col opacity-30 duration-500'
              "
            >
              <img
                width="290"
                class="big2:w-[290px] big:min-w-[290px] phone:w-8/12 rounded-3xl md2:min-w-[120%] mx-auto poco:w-full big:h-[600px] poco:h-[550px] md:h-[490px] md:min-w-[240px] semimd:h-[530px]"
                :src="slide.thumb"
                alt="image"
              />
            </div>
          </Slide>
        </Carousel>

        <div>
          <button
            class="flex items-center justify-center p-2 phone:left-2 semimd:left-10 phone:top-[50%] shadow bg-[#C32328] dark:bg-[rgb(42,40,56)] box-border absolute top-[500px] left-20 rounded-full"
            @click="carousel.prev"
          >
            <app-left-icon />
          </button>
          <button
            class="flex items-center justify-center p-2 phone:right-2 semimd:right-10 phone:top-[50%] shadow bg-[#780F14] dark:bg-[rgb(42,40,56)] box-border absolute top-[500px] right-20 rounded-full"
            @click="carousel.next"
          >
            <app-right-icon />
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped lang="css">
.phone__text,
.carousel .slide {
  transition: 0.6s;
}
</style>
