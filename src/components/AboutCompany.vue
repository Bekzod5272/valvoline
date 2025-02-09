<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="p-0 pt-5  w-full flex flex-col gap-10 semimd:flex-row sm:justify-between bg-gradient-to-r from-[#cc0000] to-[#660000] dark:bg-gradient-to-r dark:from-[#00000080] dark:to-[#007A6F80]"
  >
    <div
      class="md:container semimd:w-[40%] flex semimd:justify-center  items-center  semimd:text-left"
    >
      <div class="overflow-hidden">
        <h1
          class="font-[900] text-[50px] text-white md:text-[55px] semind:text-[60px] ml-10 leading-[1.1]"
        >
          THE <br />
          ORIGINAL <br />
          NEVER <br />
          STOPS
        </h1>
        <img
          src="../img/sport-car3.png"
          class="object-cover w-[80%] relative right-[40%] hidden semimd:block sm:mx-auto semimd:w-[100%]"
          alt="Company logo"
        />
      </div>
    </div>

    <div
      class="w-full semimd:w-[59%] p-2 sm2:p-10 poco2:p-5 flex justify-center items-center"
    >
      <div class="text-white">
        <h1 class="font-bold mb-5 text-xl">
          {{ props.data.aboutCompany.valvolineText }}
        </h1>
        <h2 class="font-bold mb-2">Кто мы?</h2>
        <p>
          <strong>Valvoline</strong>
          {{ props.data.aboutCompany.historyComp }}
        </p>

        <div class="mt-7">
          <h2 class="font-bold">{{ props.data.aboutCompany.whatMakes }}</h2>
          <ul class="ml-5 list-disc list-inside semimd:list-outside">
            <li>
              <strong>{{ props.data.aboutCompany.modernTech }}</strong>
              {{ props.data.aboutCompany.developmentOil }}
            </li>
            <li>
              <strong>Широкий ассортимент:</strong>
              {{ props.data.aboutCompany.wideRange }}
            </li>
            <li>
              <strong>Экологичность:</strong>
              {{ props.data.aboutCompany.ecoFriendly }}
            </li>
          </ul>
        </div>
        <div class="mt-7">
          <h2 class="font-bold">{{ props.data.aboutCompany.whyChoose }}</h2>
          <ul class="ml-5 list-disc list-inside semimd:list-outside">
            <li>
              <strong>Проверенное качество:</strong>
              {{ props.data.aboutCompany.provenQuality }}
            </li>
            <li>{{ props.data.aboutCompany.uniqueFormula }}</li>
            <li>{{ props.data.aboutCompany.trustMillions }}</li>
          </ul>

          <p class="footer-text">
            {{ props.data.aboutCompany.footerText }}
          </p>
        </div>
      </div>
    </div>
    <img
          src="../img/sport-car3.png"
          class="object-cover w-[80%] relative right-[35%] block semimd:hidden sm:mx-auto semimd:w-[100%]"
          alt="Company logo"
        />
  </div>
</template>