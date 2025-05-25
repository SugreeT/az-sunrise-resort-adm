<template>
  <div class="page-header-fixed sidemenu-closed-hidelogo page-content-white page-md chat-sidebar-open header-white logo-white dark-sidebar-color">
    <div class="page-wrapper">
      
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
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import Footer from '@/components/Footer.vue';

// เพิ่ม Script ที่จำเป็นใน <head>
useHead({
  script: [
    { src: '/plugins/jquery/jquery.min.js', type: 'text/javascript', defer: true },
    { src: '/plugins/popper/popper.min.js', type: 'text/javascript', defer: true },
    { src: '/plugins/jquery-blockui/jquery.blockui.min.js', type: 'text/javascript', defer: true },
    { src: '/plugins/jquery-slimscroll/jquery.slimscroll.min.js', type: 'text/javascript', defer: true },
    { src: '/plugins/bootstrap/js/bootstrap.min.js', type: 'text/javascript', defer: true },
    { src: '/plugins/counterup/jquery.waypoints.min.js', type: 'text/javascript', defer: true },
    { src: '/plugins/counterup/jquery.counterup.min.js', type: 'text/javascript', defer: true },
    { src: '/js/app.js', type: 'text/javascript', defer: true },
    { src: '/js/layout.js', type: 'text/javascript', defer: true },
    { src: '/js/theme-color.js', type: 'text/javascript', defer: true },

    { src: '/plugins/datatables/jquery.dataTables.min.js', type: 'text/javascript', defer: true },
    { src: '/plugins/datatables/plugins/bootstrap/dataTables.bootstrap4.min.js', type: 'text/javascript', defer: true },
    { src: '/js/pages/table/table_data.js', type: 'text/javascript', defer: true },

    { src: '/plugins/material/material.min.js', type: 'text/javascript', defer: true },
    { src: '/js/pages/material_select/getmdl-select.js', type: 'text/javascript', defer: true },

    { src: '/plugins/sweet-alert/sweetalert.min.js', type: 'text/javascript', defer: true },
    { src: '/js/pages/sweet-alert/sweet-alert-data.js', type: 'text/javascript', defer: true },

    { src: '/js/pages/ui/animations.js', type: 'text/javascript', defer: true },
    // { src: '/plugins/sparkline/jquery.sparkline.min.js', type: 'text/javascript', defer: true },
    // { src: '/js/pages/sparkline/sparkline-data.js', type: 'text/javascript', defer: true },
  ],
});

// ใช้ onMounted เพื่อจัดการ script ที่ต้องการ DOM พร้อมใช้งาน
onMounted(() => {
  console.log('Scripts are loaded and DOM is ready');
});
</script>
