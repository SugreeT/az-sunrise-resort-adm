<template>
  <div class="limiter">
    <div class="container-login100 page-background">
      <div class="wrap-login100">
        <div class="login100-form validate-form">
          <span class="login100-form-logo">
            <!-- <i class="zmdi zmdi-flower"></i> -->
            <img src="~assets/img/logo/AZ-sunrise-logo.png" alt="" />
          </span>
          <span class="login100-form-title p-b-34 p-t-27"> Log in </span>
          <div
            class="wrap-input100 validate-input"
            data-validate="Enter username"
          >
            <input
              class="input100"
              type="text"
              name="runriseUser"
              placeholder="Username"
              value="admin"
            />
            <span class="focus-input100" data-placeholder="&#xf207;"></span>
          </div>
          <div
            class="wrap-input100 validate-input"
            data-validate="Enter password"
          >
            <input
              class="input100"
              type="password"
              name="runrisePass"
              placeholder="Password"
              value="P@ssw0rd"
            />
            <span class="focus-input100" data-placeholder="&#xf191;"></span>
          </div>
          <!-- <div class="contact100-form-checkbox">
						<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
						<label class="label-checkbox100" for="ckb1">
							Remember me
						</label>
					</div> -->
          <div class="container-login100-form-btn">
            <button class="login100-form-btn" @click="handleSubmit">
              Login
            </button>
          </div>
          <!-- <div class="text-center p-t-90">
						<a class="txt1" href="#">
							Forgot Password?
						</a>
					</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "/adm/plugins/font-awesome/css/font-awesome.min.css", // ชี้ไปยังไฟล์ CSS เฉพาะเพจ
    },
    {
      rel: "stylesheet",
      href: "/adm/plugins/iconic/css/material-design-iconic-font.min.css", // ชี้ไปยังไฟล์ CSS เฉพาะเพจ
    },
    {
      rel: "stylesheet",
      href: "/adm/css/pages/extra_pages.css", // ชี้ไปยังไฟล์ CSS เฉพาะเพจ
    },
  ],
  script: [
    {
      src: "/adm/plugins/jquery/jquery.min.js",
      type: "text/javascript",
      defer: true,
    },
    // { src: '/js/common_functions.js', type: 'text/javascript', defer: true  },
    // { src: '/phpmailer/validate.js', type: 'text/javascript', defer: true  },
    {
      src: "/adm/js/pages/extra_pages/login.js",
      type: "text/javascript",
      defer: true,
    },
  ],
});
</script>

<script>
export default {
  methods: {
    handleSubmit() {
      // สร้าง UUID
      const uuid = this.generateUUID();

      // กำหนดวันหมดอายุ (นี่คือ 1 วัน)
      const expires = new Date();
      expires.setDate(expires.getDate() + 1);

      // เซ็ตคุกกี้ชื่อ keygen
      document.cookie = [
        `keygen=${uuid}`,
        `expires=${expires.toUTCString()}`,
        `path=/`, // ให้คุกกี้ใช้ได้ทุก path
        `SameSite=Lax`, // ปรับตามต้องการ (Lax, Strict, None)
        // `Secure`           // เปิดถ้าใช้ HTTPS อย่างเดียว
      ].join("; ");

      // ไปหน้า index (หรือใช้ this.$router.push('/') ก็ได้)
      window.location.href = "/adm/index";
    },

    generateUUID() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = crypto.getRandomValues(new Uint8Array(1))[0] & 15;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    },
  },
};
</script>
