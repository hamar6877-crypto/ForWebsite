/**
 * Wedding Invitation Configuration File
 * ----------------------------------------------------
 * Edit this file to update names, dates, venues, links,
 * and text translations across the entire application.
 */

window.weddingConfig = {
  // Couple Names
  groomName: {
    ckb: "ئاریان",
    ar: "آريان",
    en: "Aryan"
  },
  brideName: {
    ckb: "ڕۆژان",
    ar: "روژان",
    en: "Rozhan"
  },

  // Wedding Date & Time (ISO format for countdown timer)
  weddingDate: "2026-08-01T18:00:00",

  // Venue & Location
  venue: {
    name: {
      ckb: "هۆڵی ئیڤێنتس پەمەیی چاڤی لاند",
      ar: "قاعة إيفينتس الوردية - چاڤي لاند",
      en: "The Pink Events Hall - Chavi Land"
    },
    city: {
      ckb: "سلێمانی، هەرێمی کوردستان",
      ar: "السليمانية، إقليم كردستان",
      en: "Sulaymaniyah, Kurdistan Region"
    },
    address: {
      ckb: "شاری گەشتیاری چاڤی لاند، سلێمانی، عێراق",
      ar: "مدينة چاڤي لاند السياحية، السليمانية، العراق",
      en: "Chavi Land Tourist City, Sulaymaniyah, Iraq"
    },
    googleMapsUrl: "https://maps.google.com/?q=Chavi+Land+Sulaymaniyah",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13045.228514949511!2d45.4414999!3d35.5861499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40002c91b5ff9525%3A0xb35a4d531c36ef20!2sChavi%20Land!5e0!3m2!1sen!2siq!4v1700000000000!5m2!1sen!2siq"
  },

  // Event Details Cards
  details: {
    dateText: {
      ckb: "شەممە، ١/٨/٢٠٢٦",
      ar: "السبت، ١/٨/٢٠٢٦",
      en: "Saturday, 1/8/2026"
    },
    timeText: {
      ckb: "٦:٠٠ی ئێوارە",
      ar: "٠٦:٠0 مساءً",
      en: "06:00 PM"
    },
    dressCode: {
      ckb: "جلوبەرگی فەرمی یان کوردی سەرنجڕاکێش",
      ar: "زي رسمي أو زي كُردي فاخر",
      en: "Black Tie Optional / Formal Kurdish Attire"
    },
    reception: {
      ckb: "شێوەی بوفێی کراوە و ئاهەنگی مۆسیقا",
      ar: "بوفيه مفتوح واحتفال موسيقي راقٍ",
      en: "Gala Dinner Buffet & Musical Celebration"
    },
    parking: {
      ckb: "پارکینگی بەخۆڕایی و تایبەت بۆ تەواوی میوانان",
      ar: "موقف سيارات مجاني ومخصص لجميع الضيوف",
      en: "Free VIP Parking Available Onsite"
    },
    contactPerson: {
      ckb: "کاک پێشەوا (باوکی زاوای عەزیز)",
      ar: "السيد بيشوا (والد العريس)",
      en: "Mr. Peshawa (Groom's Father)"
    },
    phone: "+9647514141479"
  },

  // Social Links
  social: {
    instagram: "https://www.instagram.com/zinjinode?igsh=ejYwOTg0aGd1eW1z",
    whatsapp: "https://wa.me/9647514141479?text=" + encodeURIComponent("سڵاو ZnjiNode، دەتەوێت داوای دیزاینی بانگهێشتنامەی هاوسەرگیری بکەم."),
    facebook: "https://facebook.com/znjinode",
    email: "mailto:contact@znjinode.com"
  },

  // Story Chapters
  story: [
    {
      id: "the-promise",
      title: {
        ckb: "پەیمانی هەمیشەیی",
        ar: "الوعد الأبدي",
        en: "The Eternal Promise"
      },
      subtitle: {
        ckb: "بەڵێندان بۆ دروستکردنی ماڵێک پڕ لە بەختەوەری ❤️",
        ar: "التعهد ببناء بيت ملؤه السعادة والمحبة ❤️",
        en: "Vowing to build a home rooted in warmth and joy ❤️"
      },
      image: "/images/story_promise.jpg"
    },
    {
      id: "see-you",
      title: {
        ckb: "ببینن لە ئاهەنگەکەماندا",
        ar: "نراكم في حفل زفافنا",
        en: "See You At Our Wedding"
      },
      subtitle: {
        ckb: "چاوەڕێی هاتن و ئامادەبوونی پیرۆزتان دەکەین",
        ar: "ننتظر بشوق حضوركم وشرف مشاركتكم",
        en: "We eagerly anticipate celebrating our joy with you"
      },
      image: "/images/story_wedding_celebration.jpg"
    }
  ],

  // Full Language Translations Dictionary
  translations: {
    ckb: {
      siteTitle: "بانگهێشتنامەی هاوسەرگیری - ئاریان & ڕۆژان",
      heroSubtitle: "ئامادەبوونت ڕۆژە گەشاوەکەمان خۆشتر و جوانتر دەکات.",
      
      // Nav
      navHome: "سەرەتا",
      navStory: "چیرۆکەکەمان",
      navDetails: "وردەکارییەکان",
      navLocation: "شوێن",
      navContact: "پەیوەندی",

      // Countdown
      countdownTitle: "ئاهەنگەکەمان دەستپێدەکات دوای",
      days: "ڕۆژ",
      hours: "کاتژمێر",
      minutes: "خولەک",
      seconds: "چرکە",

      // Section Titles
      storyTitle: "چیرۆکی خۆشەویستیمان",
      storyTag: "گەشتێک لە دڵەوە",
      detailsTitle: "وردەکارییەکانی ئاهەنگ",
      detailsTag: "زانیاری پێویست",
      locationTitle: "شوێن و ناونیشان",
      locationTag: "چۆن دەگەیت بە ئێمە",

      // Cards Labels
      cardDate: "بەرواری ئاهەنگ",
      cardTime: "کاتی ئاهەنگ",
      cardVenue: "شوێنی ئاهەنگ",
      cardDress: "جلوبەرگ",
      cardReception: "ڕێوڕەسم و ژەم",
      cardParking: "پارکینگ",
      cardContact: "کەسی پەیوەندیدار",
      
      // Buttons & Links
      openMapsBtn: "کردنەوە لە گۆگڵ ماپ",
      viewAddressBtn: "بینینی ناونیشان",
      copiedText: "ناونیشانەکە کۆپیکرا!",
      callContact: "پەیوەندیکردن",

      // Footer
      footerText: "بە خۆشەویستییەوە دروستکراوە بۆ ئاریان و ڕۆژان لەلایەن ZnjiNode",
      createdWith: "",
      
      // Advertisement Section
      adTitle: "دەتەوێت بانگهێشتنامەیەکی تایبەتت هەبێت؟",
      adText: "ئەگەر دەتەوێت بانگهێشتنامەی هاوسەرگیری تایبەت و مۆدێرن هەبێت، ZnjiNode ئامادەیە بۆ دروستکردنی دیزاینێکی تایبەت بۆ تۆ.",
      adWhatsappBtn: "چات لە واتسئاپ",
      adInstagramBtn: "ئینستاگرام ZnjiNode",

      // Envelope Card
      openInvitation: "بیکەرەوە",
      invitationTitle: "بانگهێشتنامەی فەرمی هاوسەرگیری",
      reopenCard: "داپۆشینەوەی کارت",

      // Controls
      lightMode: "ڕۆژ",
      darkMode: "شەو"
    },
    ar: {
      siteTitle: "دعوة زفاف - آريان & روژان",
      heroSubtitle: "حضوركم يزداد به يومنا السعيد جمالاً وبهاءً.",
      
      // Nav
      navHome: "الرئيسية",
      navStory: "قصتنا",
      navDetails: "التفاصيل",
      navLocation: "الموقع",
      navContact: "الاتصال",

      // Countdown
      countdownTitle: "يبدأ حفلنا بعد",
      days: "أيام",
      hours: "ساعات",
      minutes: "دقائق",
      seconds: "ثواني",

      // Section Titles
      storyTitle: "قصة حبنا",
      storyTag: "رحلة من القلب",
      detailsTitle: "تفاصيل الحفل",
      detailsTag: "معلومات مهمة",
      locationTitle: "الموقع والعنوان",
      locationTag: "كيف تصل إلينا",

      // Cards Labels
      cardDate: "تاريخ الحفل",
      cardTime: "وقت الحفل",
      cardVenue: "قاعة الحفل",
      cardDress: "زي الحفل",
      cardReception: "المراسم والعشاء",
      cardParking: "مواقف السيارات",
      cardContact: "شخص للتواصل",
      
      // Buttons & Links
      openMapsBtn: "فتح في خرائط جوجل",
      viewAddressBtn: "عرض العنوان",
      copiedText: "تم نسخ العنوان!",
      callContact: "الاتصال الآن",

      // Footer
      footerText: "تم التصميم بكل حب من أجل آريان وروژان بواسطة ZnjiNode",
      createdWith: "",
      
      // Advertisement Section
      adTitle: "هل ترغب في دعوة زفاف فريدة لمناسبتك؟",
      adText: "إذا كنت ترغب في الحصول على بطاقة دعوة زفاف خاصة ومودرن، فإن ZnjiNode مستعدة لإنشاء تصميم فريد لك.",
      adWhatsappBtn: "محادثة واتساب",
      adInstagramBtn: "إنستغرام ZnjiNode",

      // Envelope Card
      openInvitation: "إفتح الدعوة",
      invitationTitle: "دعوة زفاف رسمية",
      reopenCard: "إغلاق البطاقة",

      // Controls
      lightMode: "نهار",
      darkMode: "ليل"
    },
    en: {
      siteTitle: "Wedding Invitation - Aryan & Rozhan",
      heroSubtitle: "Your presence will make our happiest day even more beautiful.",
      
      // Nav
      navHome: "Home",
      navStory: "Our Story",
      navDetails: "Details",
      navLocation: "Location",
      navContact: "Contact",

      // Countdown
      countdownTitle: "Counting Down To Our Special Day",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",

      // Section Titles
      storyTitle: "Our Love Story",
      storyTag: "A Journey From The Heart",
      detailsTitle: "Wedding Details",
      detailsTag: "Essential Information",
      locationTitle: "Venue & Location",
      locationTag: "How To Find Us",

      // Cards Labels
      cardDate: "Wedding Date",
      cardTime: "Event Time",
      cardVenue: "Venue Name",
      cardDress: "Dress Code",
      cardReception: "Reception & Dinner",
      cardParking: "Parking & VIP",
      cardContact: "Contact Person",
      
      // Buttons & Links
      openMapsBtn: "Open in Google Maps",
      viewAddressBtn: "View Address",
      copiedText: "Address Copied!",
      callContact: "Call Now",

      // Footer
      footerText: "Crafted with love for Aryan & Rozhan by ZnjiNode",
      createdWith: "",
      
      // Advertisement Section
      adTitle: "Want a bespoke wedding website?",
      adText: "If you want a modern, custom wedding invitation website like this, ZnjiNode is ready to design one exclusively for you.",
      adWhatsappBtn: "Chat on WhatsApp",
      adInstagramBtn: "ZnjiNode Instagram",

      // Envelope Card
      openInvitation: "Open Card",
      invitationTitle: "Official Wedding Invitation",
      reopenCard: "Close Card",

      // Controls
      lightMode: "Light",
      darkMode: "Dark"
    }
  }
};
