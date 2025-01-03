<template>
  <div class="limiter">
		<div class="container-login100 page-background">
			<div class="wrap-login100">
				<form class="login100-form validate-form" method="POST" action="/">
					<span class="login100-form-logo">
						<!-- <i class="zmdi zmdi-flower"></i> -->
						<img src="~assets/img/logo/AZ-sunrise-logo.png"  alt="">
					</span>
					<span class="login100-form-title p-b-34 p-t-27">
						Log in
					</span>
					<div class="wrap-input100 validate-input" data-validate="Enter username">
						<input class="input100" type="text" name="runriseUser" placeholder="Username" value="admin">
						<span class="focus-input100" data-placeholder="&#xf207;"></span>
					</div>
					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<input class="input100" type="password" name="runrisePass" placeholder="Password" value="P@ssw0rd">
						<span class="focus-input100" data-placeholder="&#xf191;"></span>
					</div>
					<!-- <div class="contact100-form-checkbox">
						<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
						<label class="label-checkbox100" for="ckb1">
							Remember me
						</label>
					</div> -->
					<div class="container-login100-form-btn">
						<button class="login100-form-btn" >
							Login
						</button>
					</div>
					<!-- <div class="text-center p-t-90">
						<a class="txt1" href="#">
							Forgot Password?
						</a>
					</div> -->
				</form>
			</div>
		</div>
	</div>
  </template>
  
  <script setup>
  useHead({
    link: [
      {
        rel: 'stylesheet',
        href: '/plugins/font-awesome/css/font-awesome.min.css', // ชี้ไปยังไฟล์ CSS เฉพาะเพจ
      },
      {
        rel: 'stylesheet',
        href: '/plugins/iconic/css/material-design-iconic-font.min.css', // ชี้ไปยังไฟล์ CSS เฉพาะเพจ
      },
      {
        rel: 'stylesheet',
        href: '/css/pages/extra_pages.css', // ชี้ไปยังไฟล์ CSS เฉพาะเพจ
      },
    ],
    script: [
        { src: '/plugins/jquery/jquery.min.js', type: 'text/javascript', defer: true  },
        // { src: '/js/common_functions.js', type: 'text/javascript', defer: true  },
        // { src: '/phpmailer/validate.js', type: 'text/javascript', defer: true  },
        { src: '/js/pages/extra_pages/login.js', type: 'text/javascript', defer: true  },
    ],
  })
  </script>
  
<script>
export default {
  methods: {
    handleSubmit() {
      this.$router.push('/'); // ใช้สำหรับ redirect ไปยัง root path หรือเปลี่ยนเป็น path ที่ต้องการ
    },
  },
};
</script>