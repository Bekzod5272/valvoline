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
    class="bg-gradient-to-r from-[#cc0000] to-[#660000] dark:bg-gradient-to-r dark:from-[#00000080] dark:to-[#007A6F80] phone:px-[16px]"
  >
    <div
      class="md:container p-0 pt-5 w-full flex flex-col gap-10 semimd:flex-row sm:justify-between"
    >
      <div
        class="semimd:w-[40%] flex semimd:justify-center items-center semimd:text-left"
      >
        <div class="overflow-hidden">
          <h1
            class="font-[ValvolineFontBold] text-[50px] text-white md:text-[55px] semind:text-[60px] ml-10 leading-[1.1]"
          >
            THE <br />
            ORIGINAL <br />
            NEVER <br />
            STOPS
          </h1>
          <img
            src="../img/sport-car3.png"
            class="object-cover w-[80%] hidden semimd:block sm:mx-auto semimd:w-[100%]"
            alt="Company logo"
          />
        </div>
      </div>

      <div
        class="w-full semimd:w-[59%] p-2 sm2:p-10 poco2:p-5 flex justify-center items-center font-[ValvolineFontSemiBold]"
      >
        <div class="text-white">
          <h1 class="font-[ValvolineFontBold] mb-5 text-xl">
            {{ props.data.aboutCompany.valvolineText }}
          </h1>
          <h2 class="font-[ValvolineFontBold] mb-2">{{ props.data.aboutCompany.whoWe }}</h2>
          <p>
            <strong>Valvoline</strong>
            {{ props.data.aboutCompany.historyComp }}
          </p>

          <div class="mt-7">
            <h2 class="font-[ValvolineFontBold]">{{ props.data.aboutCompany.whatMakes }}</h2>
            <ul class="ml-5 list-disc list-inside semimd:list-outside">
              <li>
                <strong>{{ props.data.aboutCompany.modernTech }}</strong>
                {{ props.data.aboutCompany.developmentOil }}
              </li>
              <li>
                <strong> {{ props.data.aboutCompany.rangeProducts }}</strong>
                {{ props.data.aboutCompany.wideRange }}
              </li>
              <li>
                <strong>{{ props.data.aboutCompany.ecoFriendliness }}</strong>
                {{ props.data.aboutCompany.ecoFriendly }}
              </li>
            </ul>
          </div>
          <div class="mt-7">
            <h2 class="font-[ValvolineFontBold]">{{ props.data.aboutCompany.whyChoose }}</h2>
            <ul class="ml-5 list-disc list-inside semimd:list-outside">
              <li>
                <strong>{{ props.data.aboutCompany.provenQual }}</strong>
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
  </div>
</template>