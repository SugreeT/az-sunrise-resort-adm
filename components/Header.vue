<template>
  <!-- start header -->
  <div class="page-header navbar navbar-fixed-top">
    <div
      class="page-header-inner d-flex justify-content-between align-items-center px-2"
    >
      <!-- ====================
         1) บล็อกโลโก้: ไม่มี d-none
         ==================== -->
      <div class="page-logo">
        <a href="/adm">
          <img
            src="~assets/img/logo/AZ-sunrise-logo-h2.png"
            alt="A.Z. Sunrise"
            style="max-height: 40px; max-width: 160px"
          />
        </a>
      </div>

      <!-- ==============================
         2) ปุ่ม Hamburger (เฉพาะมือถือ) – ใช้ Font Awesome bars
         ============================== -->
      <a
        href="javascript:;"
        class="menu-toggler d-block d-md-none"
        data-bs-toggle="collapse"
        data-bs-target=".navbar-collapse"
        style="color: #97a0b3; padding-right: 15px"
      >
        <i class="fa fa-bars" style="font-size: 1.5rem"></i>
      </a>

      <!-- ============================================
         3) ส่วน Top-Menu (Admin dropdown) เฉพาะเดสก์ท็อป
         ============================================ -->
      <div class="top-menu d-none d-md-block">
        <ul class="nav navbar-nav pull-right">
          <li class="dropdown dropdown-user">
            <a
              href="javascript:;"
              class="dropdown-toggle"
              data-bs-toggle="dropdown"
              data-hover="dropdown"
              data-close-others="true"
            >
              <span class="username">Admin</span>
              <i class="fa fa-angle-down"></i>
            </a>
            <ul class="dropdown-menu dropdown-menu-default animated jello">
              <li>
                <a href="javascript:void(0);" @click="logout">
                  <i class="icon-logout"></i> Log Out
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- end header -->
</template>

<script setup>
import { useRouter } from "vue-router";
import { useCookie } from "#app";
const router = useRouter();

function logout() {
  const key = useCookie("keygen");
  if (key) {
    key.value = null;

    window.location.href = "/adm/login";
    // navigateTo("/login");
  }
}
</script>

<style scoped>
/* ลดความสูงของ .page-header-inner บนมือถือ */
@media (max-width: 767.98px) {
  /* ยืนยันว่า .page-logo ไม่ถูกซ่อน */
  .page-logo {
    display: block !important;
  }
  /* ลด padding ของ header ให้โลโก้ไม่กินพื้นที่สูงเกินไป */
  .page-header .page-header-inner {
    padding-top: 6px;
    padding-bottom: 6px;
  }
  .page-logo img {
    max-height: 35px; /* ปรับขนาดให้พอดีมือถือ */
  }
}
</style>
