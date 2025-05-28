<template>
  <!-- start header -->
  <div class="page-header navbar navbar-fixed-top">
    <div class="page-header-inner">
      <!-- logo start -->
      <div class="page-logo">
        <img
          src="~assets/img/logo/AZ-sunrise-logo-h2.png"
          width="180"
          height="45"
          alt=""
        />
      </div>
      <!-- logo end -->
      <!-- <ul class="nav navbar-nav navbar-left in">
        <li>
          <a href="#" class="menu-toggler sidebar-toggler"
            ><i class="icon-menu"></i
          ></a>
        </li>
      </ul> -->
      <!-- start mobile menu -->
      <a
        href="javascript:;"
        class="menu-toggler responsive-toggler"
        data-bs-toggle="collapse"
        data-bs-target=".navbar-collapse"
      >
        <span></span>
      </a>
      <!-- end mobile menu -->
      <!-- start header menu -->
      <div class="top-menu">
        <ul class="nav navbar-nav pull-right">
          <!-- end message dropdown -->
          <!-- start manage user dropdown -->
          <li class="dropdown dropdown-user">
            <a
              href="javascript:;"
              class="dropdown-toggle"
              data-bs-toggle="dropdown"
              data-hover="dropdown"
              data-close-others="true"
            >
              <!-- <img alt="" class="img-circle" src="/img/dp.jpg" /> -->
              <span class="username username-hide-on-mobile"> Admin </span>
              <i class="fa fa-angle-down"></i>
            </a>
            <ul class="dropdown-menu dropdown-menu-default animated jello">
              <!-- <li>
									<a href="user_profile.html">
										<i class="icon-user"></i> Profile </a>
								</li>
								<li>
									<a href="#">
										<i class="icon-settings"></i> Settings
									</a>
								</li>
								<li>
									<a href="#">
										<i class="icon-directions"></i> Help
									</a>
								</li>
								<li class="divider"> </li>
								<li>
									<a href="lock_screen.html">
										<i class="icon-lock"></i> Lock
									</a>
								</li> -->
              <li>
                <a href="/login"> <i class="icon-logout"></i> Log Out </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- end header -->
</template>
