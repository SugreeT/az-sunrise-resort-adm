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
              <div class="tools"></div>
            </div>
            <div class="card-body">
              <h3>Room About</h3>
              <div class="table-scrollable">
                <table
                  class="table table-hover table-checkable order-column full-width"
                  id="tableRoom"
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
                      <th
                        class="center fix-width-header0"
                        style="min-width: 100px"
                      >
                        Action
                      </th>
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

                      <td class="text-center">{{ item.title_en }}</td>

                      <td
                        class="text-center desc-en"
                        :title="item.description_en"
                      >
                        {{ item.description_en }}
                      </td>

                      <td class="text-center">{{ item.title_cn }}</td>

                      <td class="text-center">{{ item.description_cn }}</td>

                      <td class="text-center">{{ item.title_ru }}</td>

                      <td class="text-center">{{ item.description_ru }}</td>

                      <!-- Action -->
                      <td class="center" style="min-width: 100px">
                        <NuxtLink
                          :to="`/manage-rooms/room-edit/${item.id}`"
                          class="btn btn-tbl-edit btn-xs"
                        >
                          <i class="fa fa-pencil"></i>
                        </NuxtLink>
                      </td>
                    </tr>

                    <!-- กรณีไม่มีข้อมูล -->
                    <tr v-if="!responseData.length">
                      <td class="center" colspan="11">No data found</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3>Room Type</h3>
              <div class="table-scrollable">
                <table
                  class="table table-hover table-checkable order-column full-width my-table"
                  id="tableRoomType"
                >
                  <thead>
                    <tr>
                      <th class="center">No</th>
                      <!-- <th class="center">Fitness</th> -->
                      <!-- <th class="center">Page</th> -->
                      <th class="text-center title-en">Main Title (EN)</th>
                      <th class="text-center desc-en">Description (EN)</th>
                      <th class="text-center title-cn">Main Title (CN)</th>
                      <th class="text-center desc-cn">Description (CN)</th>
                      <th class="text-center title-ru">Main Title (RU)</th>
                      <th class="text-center desc-ru">Description (RU)</th>

                      <!-- <th class="center"> Create Date </th> -->
                      <!-- <th class="center"> Status </th> -->
                      <th
                        class="center fix-width-header0"
                        style="min-width: 100px"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- loop data จาก mediaItems -->
                    <tr
                      v-for="(item, idx) in responseDataRoomType"
                      :key="item.id"
                      class="odd gradeX"
                    >
                      <td class="center">{{ idx + 1 }}</td>

                      <td class="text-center">{{ item.title_en }}</td>

                      <td class="text-center desc-en" :title="item.details_en">
                        {{ item.details_en }}
                      </td>

                      <td class="text-center">{{ item.title_cn }}</td>

                      <td class="text-center desc-cn" :title="item.details_cn">
                        {{ item.details_cn }}
                      </td>

                      <td class="text-center">{{ item.title_ru }}</td>

                      <td class="text-center desc-ru" :title="item.details_ru">
                        {{ item.details_ru }}
                      </td>

                      <!-- Action -->
                      <td class="center" style="min-width: 100px">
                        <NuxtLink
                          :to="`/manage-rooms/room-type-edit/${item.content_id}/${item.id}`"
                          class="btn btn-tbl-edit btn-xs"
                        >
                          <i class="fa fa-pencil"></i>
                        </NuxtLink>
                      </td>
                    </tr>

                    <!-- กรณีไม่มีข้อมูล -->
                    <tr v-if="!responseData.length">
                      <td class="center" colspan="11">No data found</td>
                    </tr>
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
      pageId: 8,
      pageName: "",
      pages: [],
      responseData: [], // Store selected images and previews
      responseDataRoomType: [], // Store selected images and previews
    };
  },
  async mounted() {
    // this.initPage()
    Layout.init();
    await this.callServicePageInfo();
    await this.callServiceMain();

    $("#tableRoom").DataTable({
      scrollX: true,
      pageLength: 10, // เริ่มต้นแสดง 5 รายการ
      lengthChange: false, // ปิด dropdown “Show entries”
      searching: false, // ปิดกล่อง Search ขวาบน
      info: false, // ปิด “Showing … entries”
      paging: false, // ปิด pagination bar (Previous / 1 / Next)
      lengthMenu: [
        // กำหนดตัวเลือกใน dropdown
        [10, 25, 50, 100],
        [10, 25, 50, 100],
      ],
    });

    $("#tableRoomType").DataTable({
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

        if (response) {
          this.responseData.push(response);
          this.responseDataRoomType = response.room_types;
        }

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
.fix-width-header0 {
  max-width: 100px;
}
.fix-width-header1 {
  max-width: 200px;
}
.fix-width-header2 {
  max-width: 200px;
}

/* บังคับให้ตารางใช้การคำนวณความกว้างแบบตายตัว (fixed) */
.my-table {
  width: 100%;
  table-layout: fixed;
  /* border-collapse: collapse; ถ้าต้องการขจัดระยะขอบพับซ้อน */
}

/* กำหนดความกว้างของคอลัมน์ Description (EN/CN/RU) */
/* ถ้าคุณใช้ <colgroup> ก็ใส่ class ตรง col, แต่ในตัวอย่างนี้ใช้ CSS เลือก td ตาม class */
.my-table th,
.my-table td {
  /* border: 1px solid #ddd; */
  padding: 8px;
}

/* สมมติให้คอลัมน์ Title (EN) กว้าง 150px, Description (EN) กว้าง 200px */
/* ปรับให้ตรงกับจำนวนคอลัมน์จริงของคุณ */
.my-table th.title-en,
.my-table td.title-en {
  width: 150px;
}
.my-table th.desc-en,
.my-table td.desc-en {
  width: 300px;
}
.my-table th.title-cn,
.my-table td.title-cn {
  width: 150px;
}
.my-table th.desc-cn,
.my-table td.desc-cn {
  width: 300px;
}
.my-table th.title-ru,
.my-table td.title-ru {
  width: 150px;
}
.my-table th.desc-ru,
.my-table td.desc-ru {
  width: 300px;
}

/* CSS สำหรับตัดคำ (ellipsis) โดยตรงบน <td> */
/* ห้ามใช้ display:inline-block ในที่นี้! ให้เป็น default display: table-cell */
.my-table td.desc-en,
.my-table td.desc-cn,
.my-table td.desc-ru {
  white-space: nowrap; /* ห้ามขึ้นบรรทัดใหม่ */
  overflow: hidden; /* ซ่อนส่วนเกินออกนอกเซลล์ */
  text-overflow: ellipsis; /* ให้แสดง ... เมื่อข้อความยาวเกิน */
}
</style>
