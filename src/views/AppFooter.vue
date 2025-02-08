<script setup>
const props = defineProps({
  data: {
    type: String,
    required: true,
  },
});
</script>
<template>
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
                <a class="cursor-pointer">
                  {{ item?.text }}
                </a>
              </li>
            </ul>
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
        </div>
      </div>
    </footer>
  </div>
</template>