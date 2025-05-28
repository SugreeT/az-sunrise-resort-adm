<template>
  <!-- start page content -->
  <div class="page-content-wrapper">
    <div class="page-content">
      <div class="page-bar">
        <div class="page-title-breadcrumb">
          <div class="pull-left">
            <div class="page-title">Edit Gallery</div>
          </div>
          <ol class="breadcrumb page-breadcrumb pull-right">
            <li>
              <i class="fa fa-home"></i>&nbsp;<a
                class="parent-item"
                href="index"
                >Home</a
              >&nbsp;<i class="fa fa-angle-right"></i>
            </li>
            <li>
              <a class="parent-item" href="">Gallery</a>&nbsp;<i
                class="fa fa-angle-right"
              ></i>
            </li>
            <li class="active">Gallery Details</li>
          </ol>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="card-box">
            <div class="card-head">
              <header>Edit Gallery Details</header>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6">
                  <div class="row">
                    <div class="col-lg-6 p-t-20">
                      <div class="form-group">
                        <label for="pages" class="form-label"
                          >Choose a Page</label
                        >
                        <select
                          id="pages"
                          class="form-select"
                          v-model="selectedPage"
                        >
                          <option
                            v-for="page in pages"
                            :key="page.id"
                            :value="page"
                          >
                            {{ page.description }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6 p-t-20">
                      <div class="form-group">
                        <label for="images" class="form-label"
                          >Select Images</label
                        >
                        <input
                          type="file"
                          class="form-control"
                          id="images"
                          accept="image/*"
                          multiple
                          @change="handleFiles"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12 p-t-20">
                        <div v-if="errorMessage" class="alert alert-danger">
                          {{ errorMessage }}
                        </div>
                        <div v-if="images.length > 0">
                          <h5>Selected Images:</h5>
                          <div class="row">
                            <div
                              class="col-md-2 mb-3"
                              v-for="(image, index) in images"
                              :key="index"
                            >
                              <div class="card">
                                <img
                                  :src="image.preview"
                                  class="card-img-top"
                                  alt="Preview"
                                />
                                <div class="card-body p-2">
                                  <p class="card-text text-truncate">
                                    {{ image.file.name }}
                                  </p>
                                  <p class="card-text text-muted">
                                    {{ formatSize(image.file.size) }}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 p-t-20">
                  <div>
                    <h5>All Images:</h5>
                    <div class="preview-section">
                      <div class="gallery-preview">
                        <div
                          v-for="(item, idx) in requestLandingPage.section1
                            .galleries"
                          :key="idx"
                          class="image-container"
                        >
                          <img
                            :src="
                              apiService.getImageUrl(
                                item.banner.path,
                                item.banner.name
                              )
                            "
                            alt="Gallery image"
                          />
                          <button
                            class="delete-btn"
                            @click="confirmRemove(idx)"
                            aria-label="Delete image"
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-12 p-t-20 text-center">
                <button
                  type="button"
                  @click="saveSections"
                  class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink"
                >
                  Save
                </button>

                <!-- <a href="/manage-banner/banner-list"  >
										<button type="button"
										class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default">Cancel</button>
									</a> -->
                <NuxtLink to="/manage-upload/upload-list">
                  <button
                    type="button"
                    class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default"
                  >
                    Cancel
                  </button>
                </NuxtLink>
                <!-- <NuxtLink to="/manage-banner/banner-list"  >
										<button type="button"
									class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Save</button>
									</NuxtLink>
						
									<NuxtLink to="/manage-banner/banner-list"  >
										<button type="button"
										class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default">Cancel</button>
									</NuxtLink> -->
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
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";

import apiService from "@/services/apiService";
import { useRoute } from "vue-router";

const route = useRoute();
const routeId = route.params.id;

// ใช้ onMounted เพื่อจัดการ script ที่ต้องการ DOM พร้อมใช้งาน
onMounted(() => {
  console.log("Scripts are loaded and DOM is ready");
});
</script>

<script>
export default {
  data() {
    return {
      images: [], // Store selected images and previews
      imageUploadTemp: [], // Store selected images and previews
      bannerNo: "",
      imagePath: {},
      banner: {
        translations: {
          en: { title: "", description: "" },
          zh: { title: "", description: "" },
          ru: { title: "", description: "" },
        },
      },
      errorMessage: "",
      isUploading: false,
      uploadSuccess: false,
      maxSize: 30 * 1024 * 1024, // 30MB in bytes,
      pages: [
        "Home",
        "Room",
        "Bar & Restaurant",
        "Fitness Club",
        "Tour",
        "Transportation",
        "Diving",
        "Spa",
        "About",
        "Contact Us",
      ],
      selectedPage: "", // เก็บค่าที่ผู้ใช้เลือก
      statusOptions: {
        A: "Active",
        I: "In Active",
      },
      selectedStatus: "A", // เก็บคีย์ที่ผู้ใช้เลือก
      requestLandingPage: {
        section1: {
          // ฟิลด์อื่น ๆ ของ section1 …
          banner: null, // <--- ตรงนี้จะเก็บ { name, path }
          galleries: [],
          titleMini: null,
          title: null,
          titleMiniCn: null,
          titleCn: null,
          titleMiniRu: null,
          titleRu: null,
          // …
        },
        // section2–section5 …
      },
    };
  },
  async mounted() {
    // this.initPage()

    await this.callServiceInfo();
    await this.callServiceMain();

    Layout.init();
  },
  methods: {
    async callServiceInfo() {
      const response = await apiService.get("/api/page-info/search");
      this.pages = response;
    },
    async callServiceMain() {
      try {
        const id = this.$route.params.id;
        const response = await apiService.get(
          `/api/page-info/content/section1/` + id
        );

        console.log("response >>> ", response);

        // const t = this.banner.translations;
        // t.en.title = response.title;
        // t.en.description = response.title_mini;
        // t.zh.title = response.title_cn;
        // t.zh.description = response.title_mini_cn;
        // t.ru.title = response.title_ru;
        // t.ru.description = response.title_mini_ru;

        // this.imagePath = {
        //   bannerName: response.banner?.name,
        //   bannerPath: response.banner?.path,
        // };
        if (response.galleries) {
          this.requestLandingPage.section1.galleries = response.galleries;
        }

        // 3. กำหนด pageId จาก selectedPageId (ถ้ามี)
        console.log("this.pages>>> ", this.pages);
        const page = this.pages.find((p) => p.id === response.page_id);
        console.log("page >>> ", page);
        this.selectedPage = page;
        this.selectedStatus = "A";
      } catch (err) {
        console.error("Error loading landing page:", err);
      }
    },
    async handleFiles(event) {
      this.errorMessage = "";
      this.imageUploadTemp = [];
      const selectedFiles = Array.from(event.target.files);
      const totalSize = selectedFiles.reduce((acc, f) => acc + f.size, 0);

      if (totalSize > this.maxSize) {
        this.errorMessage = "Total file size exceeds 20MB!";
        this.images = [];
        return;
      }

      // สร้าง preview
      this.images = selectedFiles.map((f) => ({
        file: f,
        preview: URL.createObjectURL(f),
      }));

      // upload แต่ละไฟล์เลย
      for (const { file } of this.images) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("pageName", this.selectedPage?.name);

        try {
          const resp = await apiService.post(
            "/media/upsert", // หรือ path ที่คุณแม็ปใน Spring
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
          console.log("Upload success:", resp);
          const { name, path } = resp.data;

          //   this.requestLandingPage.section1.galleries.push({ name, path });
          this.imageUploadTemp.push({ name, path });
        } catch (err) {
          console.error("Upload error:", err);
          this.errorMessage = "Upload failed: " + (err.message || err);
        }
      }
      console.log("section1.galleries:", this.imageUploadTemp);
    },
    formatSize(size) {
      const mbSize = (size / (1024 * 1024)).toFixed(2);
      return `${mbSize} MB`;
    },
    async saveSections() {
      try {
        // 3. กำหนด pageId จาก selectedPageId (ถ้ามี)
        this.requestLandingPage.section1.page_id = this.selectedPage?.id;

        this.requestLandingPage.section1.status = this.selectedStatus;

        const uploadsFormatted = this.imageUploadTemp.map((item) => ({
          title: "",
          banner: {
            name: item.name,
            path: item.path,
          },
          title_mini: "",
        }));

        // เพิ่มชุดใหม่เข้าไป (ไม่ทับของเดิม)
        this.requestLandingPage.section1.galleries.push(...uploadsFormatted);

        console.log("request save :", this.requestLandingPage.section1);

        const resp = await apiService.post(
          `/landingpage/update/page/${this.selectedPage?.name}/sections`,
          this.requestLandingPage
        );
        console.log("Update sections success:", resp);
        swal(
          {
            title: "Save Success",
            // text: "You will not be able to recover this imaginary file!",
            type: "success",
            showCancelButton: false,
            // confirmButtonColor: "#DD6B55",
            confirmButtonText: "OK",
          },
          () => {}
        );
        navigateTo("/manage-upload/upload-list");
      } catch (err) {
        console.error("Update sections error:", err);
      }
    },
    // ยืนยันก่อนลบ
    confirmRemove(index) {
      //   swal(
      //     {
      //       title: "Are you sure?",
      //       text: "You will not be able to recover this imaginary file!",
      //       type: "warning",
      //       showCancelButton: true,
      //       confirmButtonColor: "#DD6B55",
      //       confirmButtonText: "Yes",
      //       cancelButtonText: "No",
      //       closeOnConfirm: false,
      //     },
      //     () => {
      //       // swal("Deleted!", "Your imaginary file has been deleted.", "success");
      //     }
      //   );
      const removed = this.requestLandingPage.section1.galleries.splice(
        index,
        1
      )[0];
    },

    // ลบออกจาก array และเรียก API ฝั่ง server ถ้าต้องการ
    async removeImage(index) {
      const removed = this.requestLandingPage.section1.galleries.splice(
        index,
        1
      )[0];
      // ถ้าต้องการ sync กับ backend:
      // await this.$axios.$delete('/api/gallery/image', {
      //   data: { name: removed.banner.name, path: removed.banner.path }
      // })
    },
  },
  beforeUnmount() {
    // Revoke preview URLs to free up memory
    this.images.forEach((image) => URL.revokeObjectURL(image.preview));
  },
};
</script>
<style scoped>
.preview-section {
  .gallery-preview {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .image-container {
    position: relative;
    width: 200px;
    height: 180px;
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .delete-btn {
      position: absolute;
      top: 4px;
      right: 4px;
      width: 20px;
      height: 20px;
      line-height: 18px;
      text-align: center;
      padding: 0;
      background: rgba(0, 0, 0, 0.6);
      border: none;
      color: white;
      font-size: 16px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
}
</style>
