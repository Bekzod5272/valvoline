import PaymentSvg from "../components/icons/AppPaymentIcon.vue"
import SecuritySvg from "../components/icons/AppSecurityIcon.vue"
import StatisticsSvg from "../components/icons/AppStatisticsIcon.vue"
import CashbackSvg from "../components/icons/AppCashback.vue"
import AppDocumentIcon from "./icons/AppDocumentIcon.vue"
import AppLightIcon from "./icons/AppLightIcon.vue"
import AppUserIcon from "./icons/AppUserIcon.vue"
import AppUserGroupIcon from "./icons/AppUserGroupIcon.vue"

export const resource = {
  ru: {
    more: "Подробнее",
    btnTxt: "Свяжиетсь с нами",
    headerTitle: "Все услуги в одном месте",
    additional: {
      title: "Что такое Dpay-кошелек",
      subtitle: "Используйте новые возможности",
      descr:
        "Платежная системе DPAY предлагает универсальное решение для тех, кто хочет попробовать новое – электронный кошелёк. Говоря простым языком, DPAY -кошелёк — это виртуальный счёт, который можно пополнять, оплачивать с него различные товары и услуги и переводить c кошелька на карту и обратно.",
      services: {
        detail: {
          text: "Подробнее",
          icon: "fa-solid fa-arrow-right ml-3",
        },
        autoPay: {
          title: "Услуга «Автоплатеж»",
          subtitle:
            "Для удобства наших пользователей реализованы 2 вида автоплатежей:",
          descr:
            "Уникальная услуга «Автоплатеж» от компании DPAY — это возможность оставаться на связи, либо оплачивать иные услуги партнеров системы в автоматическом режиме.",
          types: ["По расписанию", "По событию"],
          first: {
            title: "Автоплатеж по расписанию",
            text: "Данный автоплатеж позволяет совершать периодические платежи за любые услуги на ежемесячной или еженедельной основе. В рамках данной возможности реализованы следующие варианты:",
            types: [
              "Ежемесячно в последний день",
              "Ежемесячно в указанный день",
              "Еженедельно.",
            ],
            activate: {
              title: "Активация услуги:",
              content:
                "Для создания автоплатежа по расписанию выберите раздел «Оплата». Далее выберите необходимую услугу и другие параметры платежа. При вводе суммы платежа система DPAY предложит создать автоплатеж. Выберите необходимый график платежа и подтвердите автоплатеж.",
            },
          },
          second: {
            title: "Автоплатеж по событию",
            descr:
              "Данный автоплатеж позволяет автоматически пополнять основной баланс Вашего телефонного номера при достижении определенного порога на указанную сумму. Услуга на текущий момент доступна для абонентов UMS, Beeline, Ucell и UzMobile. Сумма пополнения может быть: 5000, 10 000, 15 000, 20 000 и 50 000 сум.",
            activate: {
              title: "Активация услуги:",
              types: [
                "Выберите пункт «Автоплатеж»",
                "Далее, выберите подменю «Создать», укажите номер и установите нужную сумму.",
                "По факту подключения услуги вы получите оповещение в виде SMS-сообщения.",
              ],
              content:
                "В меню «Автоплатеж» вы также можете получить подробную информацию об услуге, настроить список номеров для автопополнения, просмотреть/удалить список номеров для автопополнения.",
            },
          },
        },
        eventPay: {
          title: "Оплата на местах",
          subtitle: "Изменение порядка оплаты на местах",
          descr:
            "Согласно ПП №5252 от 04.10.2021 г. и ПКМ № 943 от 23.11.2019 г. оплаты, проведенные дистанционным образом, должны быть фискализированы и по ним должен быть предоставлен электронный чек с QR-кодом.",
          descr2:
            "С 1 марта 2023 года пользователи могут оплачивать свои покупки через кассовые аппараты, с помощью приложения Dpay.",
          activate: {
            title: "Для этого пользователю необходимо:",
            types: [
              "Сообщить кассиру в точке оплаты, что он желает оплатить покупки через Dpay.",
              "Нажать в приложении Dpay кнопку ///.",
              "Продемонстрировать отображенный на экране телефона QR-код, для сканирования и оплаты.",
              "Готово! После сканирования, на экране отобразится уведомление об успешном платеже.",
            ],
          },
        },
        myInvoice: {
          title: "Услуга «Мои квитанции»",
          descr:
            "Возможность оплаты коммунальных услуг существует в DPAY давно. Но в некоторых ситуациях могут пригодиться фактические квитанции об успешных оплатах.",
          descr2:
            "Специально для таких случаев в системе DPAY появилась возможность скачать электронную версию квитанции или заказать бумажную версию с доставкой по почте в любую точку Узбекистана.",
          typesTitle:
            "Квитанции предоставляются по совершенным оплатам коммунальных услуг и некоторых других сервисов:",
          types: [
            "Газ",
            "Холодная вода",
            "Электроэнергия",
            "Вывоз мусора",
            "Горячая вода и отопление",
            "Штрафы ГУБДД",
          ],
        },
        transfer: {
          title: "Перевод с карты на карту",
          descr:
            "В системе DPAY можно переводить денежные средства непосредственно с одной пластиковой карты на другую, эмитированные банками Узбекистана.",
          descr2:
            "Для удобства пользователей DPAY перевод средств между картами можно осуществить по номеру пластиковой карты получателя, либо по номеру его телефона. При переводе по номеру телефона, получение средств будет возможно после регистрации данного номера в системе DPAY, если таковое не было сделано ранее.",
          types: [
            "Перевод по номеру сотового телефона",
            "Перевод по номеру банковской карты",
            "Перевод между своими банковскими картами",
            "Запрос средств по номеру у другого пользователя",
          ],
        },
      },
    },
    documents: {
      services: [
        { text: "Условия промо акции", link: "#place" },
        { text: "Как войти в Telegram бот?", link: "https://t.me/ValvolinePromoBot" },
        { text: "Наши ценности", link: "#invoice" },
        { text: "Вопросы и обращения", link: "#card" },
        { text: "FAQ", link: "faq" }
      ],
      help: [
        {
          text: "Взаимодействие с оператором",
          link: "/files/ofertaRu.docx",
        },
      ]
    },
    navLinks: ["Главная", "Документы"],
    mainTitle:
      "Dpay - это платежная система и мобильный банкинг в Узбекистане, быстрая оплата через мобильное приложение с использованием пластиковой карты UZCARD и HUMO.",
    descr: "Описание и возможности системы",
    popularQuests: "Популярные вопросы",

    abilsTitle: "Информация о призах и розыгрышах",
    abilsSub: "Общее количество призов: моментальные призвы 1000, 30 – крупные призы и 2 автомобилей.",
    abilsCards: [
      {
        title: "Моментальные призы",
        icon: AppUserGroupIcon,
        desc: "Моторные масла от Valvoline, а так же, масленные, моторные, воздушные и топливные фильтры для автомоболей",
      },
      {
        title: "Ваучеры на 10 млн сум",
        icon: AppUserGroupIcon,
        desc: "Ваучеры на 10 млн сум для получение услуги у знаменитых Тюнинг центрах и авто сервисах",
      },
      {
        title: "Финальный розыгрыш",
        icon: AppUserIcon,
        desc: `15 июля в онлайн-формате будут определены 15 победителей крупных призов, включая обладателя главного приза – тюнингового автомобиля Chevrolet Gentra!  Победители будут определены с помощью Telegram-бота. 
         15 декабря в онлайн-формате будут определены 15 победителей крупных призов, включая обладателя главного приза – тюнингового автомобиля BMW E-46 CUPE!`,
      },
      {
        title: "Важно!",
        icon: AppLightIcon,
        desc: "Поскольку победители определяются в ходе онлайн-розыгрыша, им будет сделан звонок во время игры. Если победитель не ответит, будет осуществлен звонок на резервный номер, указанный участником. В случае, если связаться не удастся, участие победителя аннулируется, и вместо него будет выбран новый победитель.  Если вы не смогли ответить на звонок, ваш выигрыш будет аннулирован, и участие завершится. Убедитесь, что ваш телефон включен и доступен во время розыгрыша.",
      },

    ],

    service: {
      title: "Тарифы на услуги",
      subtitle: "Обслуживание по системе Dpay",
      subtitle2: "SMS-оповещения",
      descr:
        "Оплата услуг, связанных с получением и отправкой SMS-сообщений в рамках пользования услугой Dpay, списывается оператором сотовой связи непосредственно с абонентского счета клиента.",
      smss: [
        {
          text: "1 SMS-сообщение, отправленное пользователю системой Dpay при успешном проведении операции (оплата/»Автоплатеж»/перевод/переброс средств/запрос баланса)",
          price: ["Бесплатно"],
        },
        {
          text: "1 SMS-сообщение, отправленное пользователю системой Dpay при неуспешном проведении операции (оплата/перевод/переброс средств/запрос баланса)",
          price: ["Бесплатно"],
        },
        {
          text: "1 SMS-сообщение, отправленное пользователю системой Dpay и необходимое для входа в личный кабинет (при выборе пользователем способа авторизации (входа) «Разовым SMS»)",
          price: ["Бесплатно"],
        },
      ],
      services: [
        {
          text: "Подключение к системе Dpay",
          price: ["Бесплатно"],
        },
        {
          text: "Использование системы Dpay",
          price: ["Бесплатно"],
        },
        {
          text: "Оплата за товары и услуги по системе Dpay",
          price: ["0% от суммы платежа*"],
        },
        {
          text: "Перевод средств с пластиковой карты на карту",
          price: ["0 - 0.5% от суммы перевода"],
        },
        {
          text: "История платежей (в месяц)",
          price: ["0 - 1000 сум"],
        },
        {
          text: "Перевод с Dpay-кошелька на пластиковые карты",
          price: ["1.5% от суммы перевода"],
        },
        // {
        //   text: "Открытие Dpay-кошелька",
        //   price: ["Бесплатно"],
        // },
        // {
        //   text: "Пополнение Dpay-кошелька",
        //   price: ["Бесплатно"],
        // },
        // {
        //   text: "Перевод с Dpay-кошелька на Dpay-кошелёк",
        //   price: ["0%"],
        // },

        // {
        //   text: "Пополнение Dpay-кошелька через систему PAYNET",
        //   price: ["2.0%"],
        // },
        // {
        //   text: "Пополнение Dpay-кошелька с международных карт VISA и MasterCARD",
        //   price: ["3.7%"],
        // },
        {
          text: "Идентификация физического лица",
          price: ["0 - 2250 сум"],
        },
      ],
    },
    jobs: {
      title: "Работа в Dpay",
      descr: "Мы объявляем об открытии ряда вакансий на должности:",
      jobs: [
        {
          text: "UX/UI дизайнера.",
          icon: require("../img/uiUxIcon.svg"),
        },
        {
          text: "Middle/Senior JAVA Developer.",
          icon: require("../img/javaIcon.svg"),
        },
        {
          text: "PR manager",
          icon: require("../img/prmIcon.svg"),
        },
      ],
      inner: {
        first:
          "Нам нужны специалисты среднего уровня или тот, кто готов быстро расти, тот, кто умеет работать руками, понимать дизайн-задачи и следить за достижением результата.",
        second:
          "Если вы тот, кого мы ищем, то скорей присоединяйтесь к нашей дружной команде и добивайтесь успеха вместе с Dpay.",
        email: "Отправить резюме",
      },
    },
    featuresText: {
      conditionsPromo: "Условия промо-акции от Valvoline",
      greatNews: " У нас отличные новости! Началась эксклюзивная промо-акция для моторных масел Valvoline! Участвуйте в розыгрышах и выигрывайтепризы!",
    },
    features: [
      {
        thumb: PaymentSvg,
        title: "Покупайте продукты от Valvoline",
        text: "Купите моторное масло Valvoline объемом 1л, 4л или 5л.",
      },

      {
        thumb: SecuritySvg,
        title: "Найдите стикер",
        text: "На каждом продукте ищите приклеенный акционный стикер. Сотрите специальное покрытие на стикере монетой или твердым предметом.",
      },
      {
        thumb: StatisticsSvg,
        title: "Введите в Telegram-бот",
        text: "Зайдите в Telegram-бота @ValvolinePromoBot, указанному на стикере, и зарегистрируйте промо-код",
      },
      {
        thumb: CashbackSvg,
        title: "Участвуйте в розыгрышах",
        text: "Зарегистрированные участники могут выиграть моментальные призы 1 из 1000",
      },
    ],
    slidesTitle: "Покупайте один из этих продуктов и участвуйте в Супер Акции",
    slides: [
      {
        thumb: require("../img/01.webp"),
        text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
        title: "Step 1.Advanced bydget managment",
      },
      {
        thumb: require("../img/02.webp"),
        text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
        title: "Step 2.Latest transaction history",
      },
      {
        thumb: require("../img/03.webp"),
        text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
        title: "Step 3.Transfers to people from your contact list",
      },
      {
        thumb: require("../img/04.webp"),
        text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
        title: "Step 4.Card-tocard transfers",
      },
      {
        thumb: require("../img/05.webp"),
        text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
        title: "Step 4.Card-tocard transfers",
      },
      {
        thumb: require("../img/06.webp"),
        text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
        title: "Step 1.Advanced bydget managment",
      },
      {
        thumb: require("../img/07.webp"),
        text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
        title: "Step 2.Latest transaction history",
      },
      {
        thumb: require("../img/08.webp"),
        text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
        title: "Step 3.Transfers to people from your contact list",
      },
      {
        thumb: require("../img/09.webp"),
        text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
        title: "Step 4.Card-tocard transfers",
      },
      {
        thumb: require("../img/10.webp"),
        text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
        title: "Step 4.Card-tocard transfers",
      }
    ],
    logos: [
      require("../img/uzcard.png"),
      require("../img/humocard.png"),
      require("../img/logo-paynet.png"),
      require("../img/ofb.png"),
      require("../img/transtbank.png"),
    ],
    divisions: [
      {
        title: "В какие сроки проводится акция?",
        text: "Акция проходит с [дата начала] по [дата окончания] 2025 года.",
      },
      {
        title: 'Как войти в Telegram-бот?',
        text: "На каждом продукте есть стикер с адресом Telegram-бота. Зайдите по адресу и зарегистрируйте промо-код."
      },
      {
        title: 'Как найти промо-код на стикере?',
        text: "Сотрите специальное покрытие на стикере монетой или другим твердым предметом."
      },
      {
        title: 'Где можно забрать свой приз?',
        text: "С победителями свяжутся и сообщат место и время получения призов."
      },
      {
        title: 'Участие в акции бесплатное?',
        text: "Да, участие бесплатное. Вам нужно лишь купить моторное масло Valvoline и зарегистрировать промо-код."
      },
      {
        title: 'Как увеличить свои шансы на выигрыш?',
        text: "Чем больше промо-кодов вы зарегистрируете, тем выше ваши шансы на победу."
      },
      {
        title: 'Как узнать, что я выиграл приз?',
        text: " Еженедельные победители оповещаются по телефону. Финальные победители определяются 1 июня в онлайн-формате, и им также звонят во время розыгрыша."
      }
    ],
    contacts: [
      "ООО «Lubric Oil Uzbekistan»”",
      "Телефон: +998 71 231 87 87",
      "Телефон: +998 90 123-45-67",
      "E-mail: info@lubricoil.uz",
      "Telegram: @valvoline_support",
      "Рабочий график: с ПН по ПТ с 9:00 до 18:00"
    ],
    aboutSub: "Мы – преданная своему делу команда финансовых профессионалов со всего мира со сверх целью создать платежную систему, которая позволила бы вам испытать будущее новых технологий, не теряя человеческого облика.",
    aboutSub2: "Найдя золотую середину между технологиями и человечеством, мы создали цифровую систему, ориентированную на человека , которая основывается на потребностях реальных людей.",
    aboutSub3: "Мы много занимаемся различными бизнесами, поэтому знаем банковские потребности как физических, так и юридических лиц, даже если они постоянно находятся в движении. Мы знаем что работает, а что нет. Поэтому мы создали платежную систему, которая была бы просто идеальной. Это платёжная система, в которой технологии объединены с человечностью . Это будущее. Уже сегодня. Давайте создавать его вместе.",
    siteBusiness: {
      btnTxt: 'Перейти',
      text: 'Управляйте своими финансами легко и безопасно!'

    },
    howUseTg: {
      howEnter: "Как войти в Telegram-бот?",
      findBot: "Найдите Telegram-бот @ValvolinePromoBot на стикере продукта",
      enterPromo: "Введите промо-код в бота",
      registerForPromo: "Зарегистрируйтесь в акции и участвуйте в розыгрышах!",
      enterTgBot: "Перейти в Telegram-бот"
    },
    contractModul: {
      questions: "Вопросы и обращения",
      infoSale: "Для получения дополнительной информации об акции:",
      phone: "Телефон",
      writingTg: "Написать в Телеграм"
    },
    graphSaleModul: {
      startSale: "Старт акции",
      vaucher10mln: "Розыгрыш ваучера на 10 млн сум",
      eventPlayerSale: "Отбор 10 участников для участия в розыгрыше Основных призов",
      gentraAbout: "Розыгрыш среди 10 участников 1 единицы тюнингованного автомобиля CHEVROLET GENTRA и 9 единиц бытовой техники",
    },
    aboutCompany: {
      valvolineText: "Valvoline – Бренд №1 в мире моторных масел",
      historyComp:
        "– компания с более чем 150-летней историей, первой в мире разработавшая моторное масло. Бренд является символом надежности и инноваций в уходе за двигателем.",
      whoAreWe: "Кто мы?",
      modernTech: "Современные технологии:",
      developmentOil:
        "Разработка масел для любых условий, от городской езды до спортивных нагрузок.",
      whatMakes: "Что делает нас лидерами?",
      wideRange:
        "Моторные и трансмиссионные масла, охлаждающие жидкости и автомасла для легковых, грузовых автомобилей и мотоциклов.",
      ecoFriendly:
        "Продукция снижает выбросы и увеличивает эффективность двигателя.",
      whyChoose: "Почему выбирают Valvoline?",
      provenQuality: "Рекомендовано ведущими автопроизводителями.",
      uniqueFormula: "Уникальные формулы для долговечности двигателя.",
      trustMillions: "Доверие миллионов клиентов по всему миру.",
      footerText: "С Valvoline ваш двигатель работает лучше и дольше!",
    },
  },

  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  uz: {
    more: "Batafsil",
    btnTxt: "Biz bilan bog'lanish",
    headerTitle: "Barcha xizmatlar bir joyda",
    additional: {
      title: "Dpay Hamyon nima?",
      subtitle:
        "Dpay -Hamyon — bu virtual hisob bo'lib, uni to'ldirish mumkin, undan turli xizmatlarga va xaridlarga to'lasa va pul o'tkazmalarini amalga oshirsa bo'ladi.",
      descr:
        "DPAY to‘lov tizimi yangi narsalarni sinab ko‘rmoqchi bo‘lganlar uchun universal yechim – elektron hamyonni taklif etadi. Oddiy qilib aytganda, DPAY hamyoni virtual hisob bo'lib, uni to'ldirish, undan turli xil tovarlar va xizmatlar uchun to'lash, hamyondan kartaga va aksincha o'tkazish mumkin.",
      services: {
        detail: {
          text: "Batafsil",
          icon: "fa-solid fa-arrow-right ml-3",
        },
        autoPay: {
          title: `"Avtoto'lov" xizmati`,
          subtitle:
            "Foydalanuvchilarimizga qulaylik yaratish maqsadida 2 turdagi avtoto'lovlar amalga oshiriladi:",
          descr:
            "DPAY’dan noyob “Avtoto‘lov” xizmati avtomatik rejimda aloqada bo‘lish yoki tizim hamkorlarining boshqa xizmatlari uchun haq to‘lash imkoniyatidir",
          types: ["Rejalashtirilgan", "Voqea bo'yicha"],
          first: {
            title: "Rejalashtirilgan avtomatik to'lov",
            text: "Ushbu avtomatik to'lov har qanday xizmat uchun oylik yoki haftalik ravishda takroriy to'lovlarni amalga oshirish imkonini beradi. Ushbu parametr quyidagi variantlarni taqdim etadi:",
            types: [
              "Har oy oxirgi kuni",
              "Belgilangan sanada har oy",
              "Haftalik",
            ],
            activate: {
              title: "Xizmatni faollashtirish:",
              content: `Jadvalga muvofiq avtomatik to'lovni yaratish uchun "To'lov" bo'limini tanlang. Keyinchalik, kerakli xizmatni va boshqa to'lov variantlarini tanlang. To'lov miqdorini kiritishda DPAY tizimi avtomatik to'lovni yaratishni taklif qiladi. Kerakli to'lov jadvalini tanlang va avtomatik to'lovni tasdiqlang.`,
            },
          },
          second: {
            title: "Voqea bo'yicha avtomatik to'lov",
            descr:
              "Ushbu avtomatik to'lov belgilangan miqdor uchun ma'lum chegaraga erishilganda telefon raqamingizning asosiy balansini avtomatik ravishda to'ldirish imkonini beradi. Xizmat hozirda UMS, Beeline, Ucell va UzMobile abonentlari uchun amal qiladi. To'ldirish miqdori: 5000, 10 000, 15 000, 20 000 va 50 000 so'm bo'lishi mumkin.",
            activate: {
              title: "Xizmatni faollashtirish:",
              types: [
                `Tanlang paragraf "Avtomatik to'lov»`,
                `Keyinchalik, "Yaratish" pastki menyusini tanlang, raqamni belgilang va kerakli miqdorni belgilang`,
                "Xizmatga ulangandan so'ng siz SMS-xabar shaklida bildirishnoma olasiz",
              ],
              content:
                "Shuningdek, “Avtoto‘lov” menyusida siz xizmat haqida batafsil ma’lumot olishingiz, avtomatik to‘ldirish uchun raqamlar ro‘yxatini sozlashingiz, avtomatik to‘ldirish uchun raqamlar ro‘yxatini ko‘rishingiz/o‘chirishingiz mumkin.",
            },
          },
        },
        eventPay: {
          title: "Joyida to'lash",
          subtitle: "Joylarda to’lov tartibida o’zgarishlar haqida",
          descr:
            "04.10.2021-yilning PQ 5252, hamda Vazirlar Mahkamasining 23.11.2019 yildagi №943 qaroriga binoan, masofadan amalga oshiriluvchi to’lovlar fiskallashtirilishi va ular bo’yicha QR-kodga ega elektron chek taqdim etilishi lozim.",
          descr2:
            "2023-yilning 1-mart kunidan boshlab foydalanuvchilar to’lovlarni kassa apparatlari orqali Dpay ilovasi yordamida amalga oshirish imkoniyatiga ega bo’ladilar.",
          activate: {
            title: "Buning uchun:",
            types: [
              "To’lov nuqtasida sotuvchi-kassirga Dpay orqali to’lamoqchi ekanligingizni ayting",
              "Dpay ilovasida /// tugmasini bosing",
              "Skanerlash va to’lash uchun telefon ekranida paydo bo’lgan QR-kodni kassirga ko’rsating",
              "Tayyor! Skanerlash yakunlangandan so’ng, ekranda muvaffaqiyatli to’lov haqida xabar paydo bo’ladi",
            ],
          },
        },
        myInvoice: {
          title: '"Kvitantsiyalarim" xizmati',
          descr:
            "Kommunal xizmatlarga to'lash imkoni DPAY tizimida beri joriy qilingan. Ba'zi holatlarda ushbu to'lovlar bo'yicha kvitantsiyalar foydali bo’lishi mumkin.",
          descr2:
            "Aynan shunday vaziyatlar uchun DPAY tizimida kvitantsiyaning elektron shaklini yuklab olish yoki butun O'zbekiston bo'ylab istalgan hududga pochta orqali eltib beriladigan qog'oz shakliga buyurtma berish imkoni ishga tushirildi.",
          typesTitle:
            "Kvitantsiyalar kommunal va ba'zi boshqa xizmatlarga oshirilgan to'lovlar bo'yicha taqdim qilinadi:",
          types: [
            "Gaz",
            "Sovuq suv",
            "Elektroenergiya",
            "Chiqindilarini olib chiqish",
            "Issiq suv va isitish",
            "DYHXX jarimalari",
          ],
        },
        transfer: {
          title: "Kartadan kartaga o'tkazish",
          descr:
            "DPAY tizimida Oʻzbekiston banklari tomonidan chiqarilgan bir plastik kartadan boshqasiga toʻgʻridan-toʻgʻri pul oʻtkazishingiz mumkin.",
          descr2:
            "DPAY foydalanuvchilariga qulaylik yaratish maqsadida pul mablag‘larini oluvchining plastik karta raqami yoki uning telefon raqamidan foydalangan holda kartalar o‘rtasida o‘tkazish mumkin. Telefon raqami orqali pul o'tkazishda, agar bu ilgari amalga oshirilmagan bo'lsa, ushbu raqamni DPAY tizimida ro'yxatdan o'tkazgandan so'ng pul mablag'larini olish mumkin bo'ladi.",
          types: [
            "Mobil telefon raqami orqali o'tkazish",
            "Bank kartasi raqami bo'yicha o'tkazma",
            "Bank kartalaringiz o'rtasida o'tkazma",
            "Boshqa foydalanuvchidan raqam bo'yicha pul so'rash",
          ],
        },
      },
    },
    documents: {
      services: [
        { text: "Aksiya shartlari", link: "#place" },
        { text: "Telegram botiga qanday kirish mumkin?", link: "https://t.me/ValvolinePromoBot" },
        { text: "Bizning qadriyatlarimiz", link: "#invoice" },
        { text: "Savollar va so'rovlar", link: "#card" },
        { text: "FAQ", link: "faq" }
      ],
      help: [
        {
          text: "Operator bilan suzbat qoidalari",
          link: "/files/ofertaUz.docx",
        }
      ],
    },
    navLinks: ["Xizmatlar", "Dokument"],
    mainTitle:
      "Dpay bu – O‘zbekistonda to‘lov tizimi va mobil banking, UZCARD va HUMO plastik kartalaridan foydalangan holda mobil ilova orqali tezkor to‘lov.",
    descr: "Tizimning tavsifi va imkoniyatlari",
    popularQuests: "Ommabop savollar",
    abilsTitle: "Sovrinlar va lotereyalar haqida ma'lumot",
    abilsSub: `Sovrinlarning umumiy soni: 1000 ta lahzali sovrin, 30 ta yirik sovrin va 2 ta avtomobil.`,
    abilsCards: [
      {
        title: "Tezkor sovg'alar",
        icon: AppUserGroupIcon,
        desc: "Valvoline motor moylari, shuningdek, avtomobillar uchun moy, motor, havo va yonilg'i filtrlari.",
      },
      {
        title: "10 million so'mlik vaucherlar",
        icon: AppUserGroupIcon,
        desc: "Sovrinlarning umumiy soni: 1000 ta tezkor sovrinlar, 10 million so'mlik 5 ta vaucher, 18 ta maishiy texnika va 2 ta avtomobil.",
      },
      {
        title: "Yakuniy o'yin",
        icon: AppUserIcon,
        desc: `15-iyul kuni onlayn formatda yirik sovrinlar uchun 15 ta g'olib aniqlanadi, jumladan, bosh sovrin – tўning qilingan Chevrolet Gentra avtomobili! G'oliblar Telegram-bot orqali aniqlanadi. 
         15-dekabr kuni onlayn formatda yirik sovrinlar uchun 15 ta g'olib aniqlanadi, jumladan, bosh sovrin – tўning qilingan BMW E-46 CUPE avtomobili!`,
      },
      {
        title: "Muhim!",
        icon: AppLightIcon,
        desc: "G'oliblar onlayn o'yin jarayonida aniqlanganligi sababli, ularga o'yin davomida qo'ng'iroq qilinadi. Agar g'olib javob bermasa, ishtirokchi tomonidan ko'rsatilgan zaxira raqamiga qo'ng'iroq qilinadi. Agar bog'lanish imkoni bo'lmasa, g'olibning ishtiroki bekor qilinadi va uning o'rniga yangi g'olib tanlanadi. Agar siz qo'ng'iroqqa javob bera olmasangiz, yutuq bekor qilinadi va ishtirok yakunlanadi. Ro'yxatdan o'tgan telefoningizning o'yin davomida yoqilgan va faol ekanligiga ishonch hosil qiling.",
      },
    ],

    service: {
      title: "Тарифы на услуги",
      subtitle: "Обслуживание по системе Dpay",
      subtitle2: "SMS-оповещения",
      descr:
        "Оплата услуг, связанных с получением и отправкой SMS-сообщений в рамках пользования услугой Dpay, списывается оператором сотовой связи непосредственно с абонентского счета клиента.",
      smss: [
        {
          text: "1 SMS-сообщение, отправленное пользователю системой Dpay при успешном проведении операции (оплата/»Автоплатеж»/перевод/переброс средств/запрос баланса)",
          price: ["Бесплатно"],
        },
        {
          text: "1 SMS-сообщение, отправленное пользователю системой Dpay при неуспешном проведении операции (оплата/перевод/переброс средств/запрос баланса)",
          price: ["Бесплатно"],
        },
        {
          text: "1 SMS-сообщение, отправленное пользователю системой Dpay и необходимое для входа в личный кабинет (при выборе пользователем способа авторизации (входа) «Разовым SMS»)",
          price: ["Бесплатно"],
        },
      ],
      services: [
        {
          text: "Подключение к системе Dpay",
          price: ["Бесплатно"],
        },
        {
          text: "Использование системы Dpay",
          price: ["Бесплатно"],
        },
        {
          text: "Оплата за товары и услуги по системе Dpay",
          price: ["0% от суммы платежа*"],
        },
        {
          text: "Перевод средств с пластиковой карты на карту",
          price: ["0 - 0.5% от суммы перевода"],
        },
        {
          text: "История платежей (в месяц)",
          price: ["0 - 1000 сум"],
        },
        {
          text: "Перевод с Dpay-кошелька на пластиковые карты",
          price: ["1.5% от суммы перевода"],
        },
        {
          text: "Идентификация физического лица",
          price: ["0 - 2250 сум"],
        },
      ],
    },
    featuresText: {
      conditionsPromo: "Valvoline reklamasi qoidalari va shartlari",
      greatNews: "Bizda ajoyib yangilik bor! Valvoline motor moylari uchun eksklyuziv reklama aksiyasi boshlandi! Lotereya o'yinlarida ishtirok eting va sovg'alarni yutib oling!",
    },
    features: [
      {
        thumb: PaymentSvg,
        title: "Plastik kartalar​",
        text: "Dpay ilovasida SMS-xabarnoma xizmatiga ulangan plastik kartalardan foydalaniladi. SMS-xabarnoma bepul ravishda, istalgan bank yoki infokioskda yoqtirishingiz mumkin.",
      },
      {
        thumb: SecuritySvg,
        title: "Pul o‘tkazmalari​",
        text: "Dpay ilovasida pul mablag’lari kartadan kartaga bir lahzada o‘tadi. O‘tkazma qabul qiluvchining karta raqamini har gal takroran kiritib o‘tirmaslik uchun Dpay da o‘tkazma qabul qiluvchining ism-sharifini saqlab qo‘yish mumkin – keyingi safar qabul qiluvchi ismini tanlashingiz kifoya.",
      },
      {
        thumb: StatisticsSvg,
        title: "To‘lovlar​",
        text: "Dpay orqali bank kreditlarini, maishiy texnika uchun kreditlarni, soliqlar va yig‘imlarni, byudjet tashkilotlari xizmatlari, elektr, gaz, internet va boshqa ko‘plab xizmatlar haqlarini to‘lash mumkin.",
      },
      {
        thumb: CashbackSvg,
        title: '"Joyida" to‘lash​',
        text: '"Joyida" to‘lash – Android va iOS uchun mo‘ljallangan Dpay mobil ilovasi yordamida tovarlar va xizmatlar haqin to‘lashning muqobil usulidir.',
      },
    ],
    slidesTitle: "Ushbu mahsulotlardan birini xarid qiling va Superaksiyada ishtirok eting",
    slides: [
      {
        thumb: require("../img/01.webp"),
        text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
        title: "Step 1.Advanced bydget managment",
      },
      {
        thumb: require("../img/02.webp"),
        text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
        title: "Step 2.Latest transaction history",
      },
      {
        thumb: require("../img/03.webp"),
        text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
        title: "Step 3.Transfers to people from your contact list",
      },
      {
        thumb: require("../img/04.webp"),
        text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
        title: "Step 4.Card-tocard transfers",
      },
      {
        thumb: require("../img/05.webp"),
        text: "A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.",
        title: "Step 4.Card-tocard transfers",
      }
    ],
    logos: [
      require("../img/uzcard.png"),
      require("../img/humocard.png"),
      require("../img/logo-paynet.png"),
      require("../img/ofb.png"),
      require("../img/transtbank.png"),
    ],
    divisions: [
      {
        title: "Aksiya shartlari qanday?",
        text: "Aksiya [boshlanish sanasi] dan [tugash sanasi] 2025 yilgacha amal qiladi.",
      },
      {
        title: 'Telegram botiga qanday kirish mumkin?',
        text: "Har bir mahsulotda Telegram bot manzili yozilgan stiker mavjud. Manzilga o'ting va promo-kodni ro'yxatdan o'tkazing."
      },
      {
        title: 'Stikerda promo-kodni qanday topish mumkin?',
        text: "Stikerning maxsus qoplamasini tanga yoki boshqa qattiq narsa bilan qirib tashlang."
      },
      {
        title: "Sovrinimni qayerdan olsam bo'ladi?",
        text: "G‘oliblar bilan bog‘lanib, sovrinlarni olish joyi va vaqti haqida ma’lumot beriladi."
      },
      {
        title: 'Aksiyada qatnashish bepulmi?',
        text: "Ha, ishtirok etish bepul. Buning uchun Valvoline motor moyini xarid qilish va promo-kodni ro‘yxatdan o‘tkazish kifoya."
      },
      {
        title: `G'alaba qozonish imkoniyatini qanday oshirish mumkin?`,
        text: "Qanchalik ko'p promo-kodlarni ro'yxatdan o'tkazsangiz, g'alaba qozonish imkoniyati shunchalik yuqori bo'ladi."
      },
      {
        title: `Sovrin yutganimni qanday bilsam bo'ladi?`,
        text: "Haftalik g'oliblar telefon orqali xabardor qilinadi. Yakuniy g'oliblar 1 iyun kuni onlayn tarzda tanlab olinadi va o'yin davomida qo'ng'iroq ham qabul qilinadi."
      }
    ],
    contacts: [
      "MCHJ «Lubric Oil Uzbekistan»",
      "Telefon: +998 71 231 87 87",
      "Telefon: +998 90 123-45-67",
      "E-mail: info@lubricoil.uz",
      "Telegram: @ValvolinePromo",
      "Ish vaqti: Dushanbadan Jumagacha, 9:00 dan 18:00 gacha",
      "Kechayu kunduz ishlaydigan issiq liniya: +998 (71) 000-00-00"
    ],
    aboutSub: `Biz butun dunyo bo'ylab moliyaviy mutaxassislardan iborat bo'lgan fidoyi jamoamiz va asosiy maqsad insoniylikni yo'qotmasdan yangi texnologiyalar kelajagini boshdan kechirish imkonini beruvchi to'lov tizimini yaratishdir.`,
    aboutSub2: `Texnologiya va insoniyat o'rtasidagi yoqimli nuqtani topib, biz haqiqiy odamlarning ehtiyojlariga asoslangan insonga yo'naltirilgan raqamli tizimni yaratdik.`,
    aboutSub3: `Biz juda ko'p turli xil biznes bilan shug'ullanamiz, shuning uchun biz jismoniy va yuridik shaxslarning bank ehtiyojlarini bilamiz, hatto ular doimo harakatda bo'lsa ham. Biz nima ishlayotganini va nima ishlamasligini bilamiz. Shuning uchun biz mukammal bo'ladigan to'lov tizimini yaratdik. Bu texnologiyani insoniyat bilan birlashtirgan to'lov tizimi. Bu kelajak. Allaqachon bugun. Keling, uni birgalikda yarataylik.`,
    siteBusiness: {
      btnTxt: "O'tish",
      text: 'Moliyaviy ahvolingizni oson va xavfsiz boshqaring!'
    },
    howUseTg: {
      howEnter: "Telegram-botga qanday kirish mumkin?",
      findBot: "Mahsulot stikeri orqali @ValvolinePromoBot Telegram-botini toping",
      enterPromo: "Botga promo-kodni kiriting",
      registerForPromo: "Aksiyada ro'yxatdan o'ting va yutuqli o'yinlarda ishtirok eting!",
      enterTgBot: "Telegram-botga o'tish"
    },
    contractModul: {
      questions: "Savollar va so'rovlar",
      infoSale: "Aksiya haqida batafsil ma'lumot uchun:",
      phone: "Telefon",
      writingTg: "Telegramda yozing"
    },
    graphSaleModul: {
      startSale: "Aksiya boshlanishi",
      vaucher10mln: "10 million so'mlik vaucher o'ynaladi",
      eventPlayerSale: "Bosh sovrinlar o'yinida ishtirok etish uchun 10 nafar ishtirokchini tanlash",
      gentraAbout: "1 ta sozlangan CHEVROLET GENTRA va 9 ta maishiy texnikaning 10 ta ishtirokchisi o'rtasida o'yin.",
    },
    aboutCompany: {
      valvolineText: "Valvoline – Dunyodagi №1 motor moyi brendi",
      historyComp:
        "– 150 yildan ortiq tarixga ega bo'lgan kompaniya, dunyoda birinchi bo'lib motor moyini ishlab chiqargan. Brend ishonchlilik va dvigatel parvarishidagi innovatsiyalar ramzi hisoblanadi.",
      whoAreWe: "Biz kimmiz?",
      modernTech: "Zamonaviy texnologiyalar:",
      developmentOil:
        "Shahar haydovchiligidan tortib sport yuklamalarigacha bo'lgan har qanday sharoit uchun moy ishlab chiqish.",
      whatMakes: "Bizni yetakchi qiladigan narsa nima?",
      wideRange:
        "Yengil, yuk mashinalari va mototsikllar uchun motor va transmissiya moylari, sovutish suyuqliklari va avtomobil moylari.",
      ecoFriendly:
        "Mahsulotlar chiqindilarni kamaytiradi va dvigatel samaradorligini oshiradi.",
      whyChoose: "Nima uchun Valvoline tanlanadi?",
      provenQuality: "Etakchi avtomobil ishlab chiqaruvchilari tomonidan tavsiya etilgan.",
      uniqueFormula: "Dvigatelning uzoq umr ko‘rishi uchun noyob formulalar.",
      trustMillions: "Dunyo bo‘ylab millionlab mijozlarning ishonchi.",
      footerText: "Valvoline bilan sizning dvigatelingiz yanada yaxshi va uzoqroq ishlaydi!",
    },
  },

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
};