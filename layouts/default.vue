<template>
  <div
    class="page-header-fixed sidemenu-closed-hidelogo page-content-white page-md chat-sidebar-open header-white logo-white dark-sidebar-color"
  >
    <div class="page-wrapper">
      <div v-if="isLoading" class="loading-overlay">
        <div class="spinner"></div>
      </div>
      <Header />
      <!-- start page container -->
      <div class="page-container">
        <Sidebar />
        <NuxtPage />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";
// ดึงสถานะ loading มาจาก composable
import { useLoading } from "@/composables/useLoading";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useCookie } from "#app";
const router = useRouter();

const { start, done, isLoading } = useLoading();

const key = useCookie("keygen");
if (!key.value) {
  navigateTo("/login");
}

// if (!sessionStorage.getItem("keygen")) {
//   window.location.href = "/login";
// }

start();
// เพิ่ม Script ที่จำเป็นใน <head>
useHead({
  script: [
    {
      src: "/adm/plugins/jquery/jquery.min.js",
      type: "text/javascript",
      defer: true,
    },
    {
      src: "/adm/plugins/popper/popper.min.js",
      type: "text/javascript",
      defer: true,
    },
    {
      src: "/adm/plugins/jquery-blockui/jquery.blockui.min.js",
      type: "text/javascript",
      defer: true,
    },
    {
      src: "/adm/plugins/jquery-slimscroll/jquery.slimscroll.min.js",
      type: "text/javascript",
      defer: true,
    },
    {
      src: "/adm/plugins/bootstrap/js/bootstrap.min.js",
      type: "text/javascript",
      defer: true,
    },
    {
      src: "/adm/plugins/counterup/jquery.waypoints.min.js",
      type: "text/javascript",
      defer: true,
    },
    {
      src: "/adm/plugins/counterup/jquery.counterup.min.js",
      type: "text/javascript",
      defer: true,
    },
    { src: "/adm/js/app.js", type: "text/javascript", defer: true },
    { src: "/adm/js/layout.js", type: "text/javascript", defer: true },
    { src: "/adm/js/theme-color.js", type: "text/javascript", defer: true },
    {
      src: "/adm/plugins/datatables/jquery.dataTables.min.js",
      type: "text/javascript",
      defer: true,
    },
    {
      src: "/adm/plugins/datatables/plugins/bootstrap/dataTables.bootstrap4.min.js",
      type: "text/javascript",
      defer: true,
    },
    {
      src: "/adm/js/pages/table/table_data.js",
      type: "text/javascript",
      defer: true,
    },
    {
      src: "/adm/plugins/material/material.min.js",
      type: "text/javascript",
      defer: true,
    },
    {
      src: "/adm/js/pages/material_select/getmdl-select.js",
      type: "text/javascript",
      defer: true,
    },
    {
      src: "/adm/plugins/sweet-alert/sweetalert.min.js",
      type: "text/javascript",
      defer: true,
    },
    {
      src: "/adm/js/pages/sweet-alert/sweet-alert-data.js",
      type: "text/javascript",
      defer: true,
    },
    {
      src: "/adm/js/pages/ui/animations.js",
      type: "text/javascript",
      defer: true,
    },
    // { src: '/plugins/sparkline/jquery.sparkline.min.js', type: 'text/javascript', defer: true },
    // { src: '/js/pages/sparkline/sparkline-data.js', type: 'text/javascript', defer: true },
  ],
});

// ใช้ onMounted เพื่อจัดการ script ที่ต้องการ DOM พร้อมใช้งาน
onMounted(() => {
  console.log("Scripts are loaded and DOM is ready");
});
</script>
<script>
export default {
  data() {
    return {
      title: "", // ค่าเริ่มต้น
    };
  },
  computed: {},
  created() {
    // this.title = this.$t('slide-title', { name: 'vue-i18n' });
    // Layout.init();
  },
  mounted() {
    Layout.init();
  },
};
</script>
<!-- <style scoped>
/* ถ้าใช้ SCSS หรือ global CSS ก็ใส่ไว้ตรงนั้นได้เลย */
.page-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh; /* เต็มความสูง viewport */
}

.page-container {
  flex: 1 1 auto; /* ยืดเต็มพื้นที่ที่เหลือระหว่าง Header กับ Footer */
  display: flex; /* ถ้าต้องการให้ Sidebar + NuxtPage นอนเรียงกัน */
  overflow: auto; /* ถ้าเนื้อหาเยอะ ให้ scroll เฉพาะตรงนี้ */
}
</style> -->

<style scoped>
/* overlay ปิดทั้งหน้าจอ */
.loading-overlay {
  position: fixed;
  inset: 0; /* top:0; bottom:0; left:0; right:0 */
  background: rgba(255, 255, 255, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loading-overlay .spinner {
  width: 48px;
  height: 48px;
  border: 6px solid #eee;
  /* เปลี่ยนมาเป็นเหลืองทอง ไม่จ้าเกินไป */
  border-top-color: #d4af37;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* keyframes */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 767.98px) {
  ::v-deep .dataTables_length {
    display: none !important;
  }
  ::v-deep .dataTables_filter {
    display: none !important;
  }
}
</style>
