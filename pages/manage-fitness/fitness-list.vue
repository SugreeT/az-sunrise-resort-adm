<template>
  <!-- start page content -->
  <div class="page-content-wrapper">
    <div class="page-content">
      <div class="page-bar">
        <div class="page-title-breadcrumb">
          <div class="pull-left">
            <div class="page-title">Manage {{ pageName }}</div>
          </div>
          <ol class="breadcrumb page-breadcrumb pull-right">
            <li>
              <i class="fa fa-home"></i>&nbsp;<a
                class="parent-item"
                href="index"
                >Home</a
              >&nbsp;<i class="fa fa-angle-right"></i>
            </li>
            <!-- <li>
              <a class="parent-item" href="">{{ pageName }}</a
              >&nbsp;<i class="fa fa-angle-right"></i>
            </li> -->
            <li class="active">{{ pageName }}</li>
          </ol>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card card-box">
            <div class="card-head">
              <header>{{ pageName }}</header>
              <div class="tools">
                <!-- <a
                  class="fa fa-repeat btn-color box-refresh"
                  href="javascript:;"
                ></a>
                <a
                  class="t-collapse btn-color fa fa-chevron-down"
                  href="javascript:;"
                ></a>
                <a
                  class="t-close btn-color fa fa-times"
                  href="javascript:;"
                ></a> -->
              </div>
            </div>
            <div class="card-body">
              <!-- <div class="row p-b-20">
                <div class="col-md-6 col-sm-6 col-6">
                  <div class="btn-group">
                    <NuxtLink to="/manage-banner/banner-add"  >
												<button type="button"  class="btn btn-info">	Add New <i class="fa fa-plus"></i></button>
													</NuxtLink>
                  </div>
                </div>
              </div> -->
              <div class="table-scrollable">
                <table
                  class="table table-hover table-checkable order-column full-width"
                  id="tableFitness"
                >
                  <thead>
                    <tr>
                      <th class="center">No</th>
                      <!-- <th class="center">Fitness</th> -->
                      <!-- <th class="center">Page</th> -->
                      <th class="center fix-width-header1">Main Title(EN)</th>
                      <th class="center fix-width-header2">Description(EN)</th>
                      <th class="center fix-width-header1">Main Title(CN)</th>
                      <th class="center fix-width-header2">Description(CN)</th>
                      <th class="center fix-width-header1">Main Title(RU)</th>
                      <th class="center fix-width-header2">Description(RU)</th>

                      <!-- <th class="center"> Create Date </th> -->
                      <!-- <th class="center"> Status </th> -->
                      <th class="center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- loop data จาก mediaItems -->
                    <tr
                      v-for="(item, idx) in responseData"
                      :key="item.id"
                      class="odd gradeX"
                    >
                      <td class="center">{{ idx + 1 }}</td>

                      <!-- Image Name -->
                      <!-- <td class="center">
                        <img
                          width="150"
                          height="150"
                          :src="
                            apiService.getImageUrl(
                              item.banner?.path,
                              item.banner?.name
                            )
                          "
                          alt="Fitness image"
                        />
                      </td> -->

                      <!-- Page (path หรือ name ตาม DTO) -->
                      <!-- <td class="text-center">{{ item.pageName }}</td> -->

                      <td class="text-left">{{ item.title_en }}</td>

                      <td class="text-left">{{ item.description_en }}</td>

                      <td class="text-left">{{ item.title_cn }}</td>

                      <td class="text-left">{{ item.description_cn }}</td>

                      <td class="text-left">{{ item.title_ru }}</td>

                      <td class="text-left">{{ item.description_ru }}</td>

                      <!-- Create Date format -->
                      <!-- <td class="center">{{ formatDate(item.created_at) }}</td> -->

                      <!-- Status -->
                      <!-- <td class="center">
													<span
														class="label label-sm"
														:class="item.status === 'active'
														? 'label-success'
														: 'label-danger'"
													>
														{{ item.status === 'active' ? 'Active' : 'Inactive' }}
													</span>
													</td> -->

                      <!-- Action -->
                      <td class="center">
                        <NuxtLink
                          :to="`/manage-fitness/fitness-edit/${item.id}`"
                          class="btn btn-tbl-edit btn-xs"
                        >
                          <i class="fa fa-pencil"></i>
                        </NuxtLink>
                        <!-- <button
														class="btn btn-tbl-delete btn-xs"
														@click="deleteBanner(item.id)"
													>
														<i class="fa fa-trash-o"></i>
													</button> -->
                      </td>
                    </tr>

                    <!-- กรณีไม่มีข้อมูล -->
                    <tr v-if="!responseData.length">
                      <td class="center" colspan="11">No data found</td>
                    </tr>
                    <!-- <tr class="odd gradeX">
													<td class="center">1</td>
													<td class="center">Main1</td>
													<td class="center">Home</td>
													<td class="center">2024-12-24 20:01</td>
													<td class="center">
														<span class="label label-sm label-success">Active</span>
													</td>
													<td class="center">
														<a href="/manage-rooms/room-edit" class="btn btn-tbl-edit btn-xs">
															<i class="fa fa-pencil"></i>
														</a>
														<a class="btn btn-tbl-delete btn-xs">
															<i class="fa fa-trash-o "></i>
														</a>
													</td>
												</tr>
												<tr class="odd gradeX">
													<td class="center">2</td>
													<td class="center">Main2</td>
													<td class="center">Home</td>
													<td class="center">2024-12-24 20:01</td>
													<td class="center">
														<span class="label label-sm label-danger"> InActive </span>
													</td>
													<td class="center">
														<NuxtLink to="/manage-banner/banner-edit"  >
															<button type="button" class="btn btn-tbl-edit btn-xs">
																<i class="fa fa-pencil"></i></button>
														</NuxtLink>
														<a class="btn btn-tbl-delete btn-xs">
															<i class="fa fa-trash-o "></i>
														</a>
													</td>
												</tr> -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end page content -->
</template>

<script setup>
// เพิ่ม Script ที่จำเป็นใน <head>
useHead({
  script: [
    // { src: '/js/pages/table/table_data.js', type: 'text/javascript', defer: true },
  ],
});

// ใช้ onMounted เพื่อจัดการ script ที่ต้องการ DOM พร้อมใช้งาน
onMounted(() => {
  console.log("Scripts are loaded and DOM is ready");
});
</script>

<script>
import apiService from "@/services/apiService";

export default {
  data() {
    return {
      pageId: 3,
      pageName: "",
      pages: [],
      responseData: [], // Store selected images and previews
    };
  },
  async mounted() {
    // this.initPage()
    Layout.init();
    await this.callServicePageInfo();
    await this.callServiceMain();

    $("#tableFitness").DataTable({
      scrollX: true,
      pageLength: 10, // เริ่มต้นแสดง 5 รายการ
      lengthChange: false, // ปิด dropdown “Show entries”
      searching: false, // ปิดกล่อง Search ขวาบน
      lengthMenu: [
        // กำหนดตัวเลือกใน dropdown
        [10, 25, 50, 100],
        [10, 25, 50, 100],
      ],
    });

    Layout.init();
  },
  methods: {
    async callServicePageInfo() {
      const response = await apiService.callServiceInfo();
      if (response) {
        this.pages = response;
        const data = this.pages.find((p) => p.id === this.pageId);
        this.pageName = data?.description;
      }
    },
    async callServiceMain() {
      try {
        const response = await apiService.get(
          "/api/page-info/content/section2/" + this.pageId
        );

        this.responseData.push(response);
        // สมมติ this.pages เป็น array ของ { id, name, ... }
        console.log("this.pages >", this.pages);

        // for (let i = 0; i < this.responseData.length; i++) {
        //   const res = this.responseData[i];

        //   // หา page object ตัวเดียวที่ id ตรงกับ res.page_id
        //   const page = this.pages.find((p) => p.id === res.page_id);

        //   // ถ้าเจอ ก็เซ็ต pageName ให้เป็นชื่อของมัน
        //   res.pageName = page ? page.description : null;
        // }

        console.log("res >", this.responseData);
        // setTimeout(() => {
        // 	console.log('2222222222222222222222222 >')
        //   $('#tableBanner').DataTable( {
        // 	"scrollX": true
        // } );
        // }, 1000);
      } catch (err) {
        console.error("Error loading landing page:", err);
      }
    },
    /** format วันที่ ให้สวยงาม */
    formatDate(dt) {
      if (!dt) return "-";
      const d = new Date(dt);
      return d.toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
    },

    /** ลบ banner ตาม id */
    async deleteBanner(id) {
      if (!confirm("Are you sure to delete this banner?")) return;
      try {
        await apiService.delete(`/banners/${id}`);
        // หลังลบเสร็จ โหลดใหม่
        await this.loadMedia();
      } catch (err) {
        console.error("Delete failed:", err);
      }
    },
  },
};
</script>
<style scoped>
.fix-width-header1 {
  max-width: 200px;
}
.fix-width-header2 {
  max-width: 200px;
}
</style>
