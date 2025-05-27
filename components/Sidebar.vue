<template>
  <!-- start sidebar menu -->
  <div class="sidebar-container">
    <div class="sidemenu-container navbar-collapse collapse fixed-menu">
      <div id="remove-scroll">
        <ul
          class="sidemenu page-header-fixed p-t-20"
          data-keep-expanded="false"
          data-auto-scroll="true"
          data-slide-speed="200"
        >
          <li class="sidebar-toggler-wrapper hide">
            <div class="sidebar-toggler">
              <span></span>
            </div>
          </li>
          <li class="sidebar-user-panel">
            <div class="user-panel">
              <!-- <div class="row">
                              <div class="sidebar-userpic">
                                <img src="/img/dp.jpg" class="img-responsive" alt=""> </div>
                            </div> -->
              <div class="profile-usertitle">
                <div class="sidebar-userpic-name">
                  Content Management System
                </div>
                <!-- <div class="profile-usertitle-job"> Content Management System </div> -->
              </div>
              <!-- <div class="sidebar-userpic-btn">
                              <a class="tooltips" href="user_profile" data-placement="top"
                                data-original-title="Profile">
                                <i class="material-icons">person_outline</i>
                              </a>
                              <a class="tooltips" href="email_inbox" data-placement="top"
                                data-original-title="Mail">
                                <i class="material-icons">mail_outline</i>
                              </a>
                              <a class="tooltips" href="chat" data-placement="top"
                                data-original-title="Chat">
                                <i class="material-icons">chat</i>
                              </a>
                              <a class="tooltips" href="login" data-placement="top"
                                data-original-title="Logout">
                                <i class="material-icons">input</i>
                              </a>
                            </div> -->
            </div>
          </li>
          <!-- <li class="menu-heading">
                          <span>-- Main</span>
                        </li> -->
          <!-- <li class="nav-item start">
                   
                          <NuxtLink to="/index"  @click="triggerGlobalFunction($event, 'click')">
                            <i class="material-icons">dashboard</i>
                            <span class="title">Dashboard</span>
                          </NuxtLink>
                        </li> -->
          <!-- <li class="nav-item">
                          <a href="#" class="nav-link nav-toggle">
                            <i class="material-icons">group</i>
                            <span class="title">Upload</span>
                            <span class="arrow"></span>
                          </a>
                          <ul class="sub-menu">
                            <li class="nav-item">
                              <a href="/manage-upload/upload-list" class="nav-link ">
                                <span class="title">Banner</span>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a href="/manage-upload/upload-list" class="nav-link ">
                                <span class="title">Gallery</span>
                              </a>
                            </li>
                          </ul>
                        </li> -->
          <li class="nav-item start">
            <!-- <NuxtLink to="/manage-banner/banner-list"  @click="triggerGlobalFunction($event, 'click')">
                            <i class="material-icons">home</i>
                            <span class="title"> Banner</span>
                          </NuxtLink> -->
            <!-- <a href="/manage-banner/banner-list" class="nav-link ">
                            <i class="material-icons">business_center</i>
                            <span class="title"> Banner</span>
                          </a> -->
            <NuxtLink
              to="/manage-banner/banner-list"
              @click="triggerGlobalFunction($event, 'click')"
            >
              <i class="material-icons">business_center</i>
              <span class="title"> Banner</span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <!-- <a href="/manage-upload/upload-list" class="nav-link ">
                            <i class="material-icons">business_center</i>
                            <span class="title"> Gallery</span>
                          </a> -->
            <NuxtLink
              to="/manage-upload/upload-list"
              @click="triggerGlobalFunction($event, 'click')"
            >
              <i class="material-icons">business_center</i>
              <span class="title"> Gallery</span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <!-- <a href="/manage-rooms/room-list" class="nav-link ">
                            <i class="material-icons">vpn_key</i>
                            <span class="title"> Rooms</span>
                          </a> -->
            <NuxtLink
              to="/manage-rooms/room-list"
              @click="triggerGlobalFunction($event, 'click')"
            >
              <i class="material-icons">vpn_key</i>
              <span class="title"> Rooms</span>
            </NuxtLink>
            <!-- <NuxtLink to="/manage-rooms/room-list"  @click="triggerGlobalFunction($event, 'click')"  class="nav-link ">
                            <i class="material-icons">vpn_key</i>
                            <span class="title"> Rooms</span>
                          </NuxtLink> -->
          </li>

          <!-- <li class="nav-item">
                          <a href="#" class="nav-link nav-toggle">
                            <i class="material-icons">business_center</i>
                            <span class="title">Servier Items</span>
                            <span class="arrow"></span>
                          </a>
                          <ul class="sub-menu"> -->
          <li class="nav-item">
            <a href="/manage-restaurant/restaurant-list" class="nav-link">
              <i class="material-icons">business_center</i>
              <span class="title"> Resterant</span>
            </a>
            <!-- <NuxtLink to="/manage-restaurant/restaurant-list"  @click="triggerGlobalFunction($event, 'click')"  class="nav-link ">
                                <span class="title"> Resterant</span>
                              </NuxtLink> -->
          </li>
          <li class="nav-item">
            <a href="/manage-fitness/fitness-list" class="nav-link">
              <i class="material-icons">business_center</i>
              <span class="title"> Fitness</span>
            </a>
            <!-- <NuxtLink to="/manage-fitness/fitness-list"  @click="triggerGlobalFunction($event, 'click')"  class="nav-link ">
                                <span class="title"> Fitness</span>
                              </NuxtLink> -->
          </li>
          <li class="nav-item">
            <a href="/manage-tour/tour-list" class="nav-link">
              <i class="material-icons">business_center</i>
              <span class="title"> Tour</span>
            </a>
            <!-- <NuxtLink to="/manage-tour/tour-list"  @click="triggerGlobalFunction($event, 'click')"  class="nav-link ">
                                <span class="title"> Tour</span>
                              </NuxtLink> -->
          </li>
          <li class="nav-item">
            <a href="/manage-transport/transport-list" class="nav-link">
              <i class="material-icons">business_center</i>
              <span class="title"> Transportation</span>
            </a>
            <!-- <NuxtLink to="/manage-transport/transport-list"  @click="triggerGlobalFunction($event, 'click')"  class="nav-link ">
                                <span class="title"> Transportation</span>
                              </NuxtLink> -->
          </li>
          <li class="nav-item">
            <a href="/manage-diving/diving-list" class="nav-link">
              <i class="material-icons">business_center</i>
              <span class="title"> Diving</span>
            </a>
            <!-- <NuxtLink to="/manage-diving/diving-list"  @click="triggerGlobalFunction($event, 'click')"  class="nav-link ">
                                <span class="title"> Diving</span>
                              </NuxtLink> -->
          </li>
          <li class="nav-item">
            <a href="/manage-spa/spa-list" class="nav-link">
              <i class="material-icons">business_center</i>
              <span class="title"> Spa</span>
            </a>
            <!-- <NuxtLink to="/manage-spa/spa-list"  @click="triggerGlobalFunction($event, 'click')"  class="nav-link ">
                                <span class="title"> Spa</span>
                              </NuxtLink> -->
          </li>
          <!-- </ul>
                        </li> -->
          <!--                      
                        <li class="nav-item">
                          <a href="#" class="nav-link nav-toggle">
                            <i class="material-icons">group</i>
                            <span class="title">Staff</span>
                            <span class="arrow"></span>
                          </a>
                          <ul class="sub-menu">
                            <li class="nav-item">
                              <a href="add_staff" class="nav-link ">
                                <span class="title">Add Staff Details</span>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a href="all_staffs" class="nav-link ">
                                <span class="title">View All Staffs</span>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a href="edit_staff" class="nav-link ">
                                <span class="title">Edit Staff Details</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li class="nav-item">
                          <a href="#" class="nav-link nav-toggle">
                            <i class="material-icons">local_taxi</i>
                            <span class="title">Transportation</span>
                            <span class="arrow"></span>
                          </a>
                          <ul class="sub-menu">
                            <li class="nav-item">
                              <a href="add_vehicle" class="nav-link ">
                                <span class="title">Add Vehicle Details</span>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a href="all_vehicles" class="nav-link ">
                                <span class="title">View All Vehicle</span>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a href="edit_vehicle" class="nav-link ">
                                <span class="title">Edit Vehicle Details</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                     -->
        </ul>
      </div>
    </div>
  </div>
  <!-- end sidebar menu -->
</template>

<script>
export default {
  methods: {
    triggerGlobalFunction(event, mode) {
      // ดึง element ที่ถูกคลิก
      const element = event.target;
      // เรียกใช้ global function
      if (typeof handleSidebarMenuActiveLink === "function") {
        // handleSidebarMenuActiveLink(mode, element);
      } else {
        console.error(
          "handleSidebarMenuActiveLink ไม่ถูกประกาศใน global scope"
        );
      }
    },
  },
};
</script>
