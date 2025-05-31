export default defineNuxtConfig({
  compatibilityDate: '2024-11-01', // ระบุวันที่รองรับฟีเจอร์ของ Nuxt
  devtools: { enabled: true }, // เปิดเครื่องมือ DevTools
  pages: true, // เปิดใช้งานระบบ Pages
  app: {
    baseURL: '/adm/', // หรือ '/subfolder/' หากใช้ Subdirectory
    buildAssetsDir: '/adm/_nuxt/', // Path สำหรับ Static Assets
    head: {
      base: { href: '/adm/' },
      link: [
           { rel: 'icon', type: 'image/x-icon', href: '/adm/favicon.ico' },
        {
          rel: 'stylesheet',
          href: '/adm/plugins/simple-line-icons/simple-line-icons.min.css', //icons
        },
        {
          rel: 'stylesheet',
          href: '/adm/plugins/font-awesome/css/font-awesome.min.css', //icons
        },
        {
          rel: 'stylesheet',
          href: '/adm/plugins/bootstrap/css/bootstrap.min.css', // bootstrap
        },
        {
          rel: 'stylesheet',
          href: '/adm/plugins/summernote/summernote.css', // bootstrap
        },
        {
          rel: 'stylesheet',
          href: '/adm/plugins/material/material.min.css', // Material Design Lite CSS
        },
        {
          rel: 'stylesheet',
          href: '/adm/css/material_style.css', // Material Design Lite CSS
        },
        {
          rel: 'stylesheet',
          href: '/adm/plugins/datatables/plugins/bootstrap/dataTables.bootstrap4.min.css', // datatable
        },
        {
          rel: 'stylesheet',
          href: '/adm/css/pages/animate_page.css', // animation
        },
        {
          rel: 'stylesheet',
          href: '/adm/plugins/sweet-alert/sweetalert.min.css', // animation
        },
        {
          rel: 'stylesheet',
          href: '/adm/css/style.css', // Template Styles
        },
        {
          rel: 'stylesheet',
          href: '/adm/css/plugins.min.css', // Template Styles
        },
        {
          rel: 'stylesheet',
          href: '/adm/css/responsive.css', // Template Styles
        },
        {
          rel: 'stylesheet',
          href: '/adm/css/theme-color.css', // Template Styles
        },
        {
          rel: 'stylesheet',
          href: '/adm/css/pages/formlayout.css', // Template Styles
        },
      ],
    },
  },
  css: [
    // '@/assets/css/bootstrap.min.css', // Bootstrap Minified CSS
    // '@/assets/css/style.css', // Main Style CSS
    // '@/assets/css/vendors.min.css', // Vendors Minified CSS
    // '@/assets/css/custom.css', // Custom CSS
    // '@/assets/css/daterangepicker_v2.css', // Daterangepicker v2 CSS
  ],
  modules: ['@pinia/nuxt'], 
  // i18n: {
  //   // Module Options
  //   lazy: true,
  //   langDir: "@/locales", 
  //   strategy: "prefix_except_default",
  //   defaultLocale: "en", // Default Language
  //   locales: [
  //     { code: 'en', iso: 'en-US', file: 'en.json' },
  //     { code: 'zh-CN', iso: 'zh-CN', file: 'zh-CN.json' },
  //     { code: 'ru', iso: 'ru-RU', file: 'ru.json' },
  //   ],
  // },
  postcss: {
    plugins: {
      tailwindcss: {}, // ตรวจสอบว่า TailwindCSS ถูกโหลด
      autoprefixer: {}, // ใช้ Autoprefixer สำหรับเบราว์เซอร์
    },
  },
  hooks: {
    'pages:extend' (pages) {
      pages.push({
        name: 'home',
        path: '/',
        file: '~/pages/manage-banner/banner-list.vue',
        meta: { layout: 'default' }, // กำหนด layout ที่นี่
      },{
        name: 'index',
        path: '/index',
        file: '~/pages/manage-banner/banner-list.vue',
        meta: { layout: 'default' }, // กำหนด layout ที่นี่
      }
      ,{
        name: 'login',
        path: '/login',
        file: '~/pages/login.vue',
        meta: { layout: 'default-blank' }, // กำหนด layout ที่นี่
      }
    )

      // remove routes
      function removePagesMatching (pattern: RegExp, pages: NuxtPage[] = []) {
        const pagesToRemove: NuxtPage[] = []
        for (const page of pages) {
          if (page.file && pattern.test(page.file)) {
            pagesToRemove.push(page)
          } else {
            removePagesMatching(pattern, page.children)
          }
        }
        for (const page of pagesToRemove) {
          pages.splice(pages.indexOf(page), 1)
        }
      }
      removePagesMatching(/\.ts$/, pages)
    }
  }
});
