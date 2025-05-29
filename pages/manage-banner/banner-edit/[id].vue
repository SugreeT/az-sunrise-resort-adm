<template>
  <!-- start page content -->
  <div class="page-content-wrapper">
    <div class="page-content">
      <div class="page-bar">
        <div class="page-title-breadcrumb">
          <div class="pull-left">
            <div class="page-title">Edit Banner</div>
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
              <a class="parent-item" href="">Banner</a>&nbsp;<i
                class="fa fa-angle-right"
              ></i>
            </li>
            <li class="active">Edit Banner Details</li>
          </ol>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="card-box">
            <div class="card-head">
              <header>Edit Banner Details</header>
              <!-- <button id="panel-button"
								class="mdl-button mdl-js-button mdl-button--icon pull-right"
								data-upgraded=",MaterialButton">
								<i class="material-icons">more_vert</i>
							</button>
							<ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
								data-mdl-for="panel-button">
								<li class="mdl-menu__item"><i class="material-icons">assistant_photo</i>Action
								</li>
								<li class="mdl-menu__item"><i class="material-icons">print</i>Another action
								</li>
								<li class="mdl-menu__item"><i class="material-icons">favorite</i>Something else
									here</li>
							</ul> -->
            </div>
            <div class="card-body row">
              <div class="col-lg-12 p-t-20">
                <!-- language tabs -->
                <ul class="nav nav-tabs mb-3" role="tablist">
                  <li class="nav-item">
                    <button
                      class="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#lang-en"
                      type="button"
                    >
                      English
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#lang-zh"
                      type="button"
                    >
                      Chinese
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#lang-ru"
                      type="button"
                    >
                      Russian
                    </button>
                  </li>
                </ul>

                <div class="tab-content">
                  <!-- EN -->
                  <div class="tab-pane fade show active" id="lang-en">
                    <div class="row mb-3">
                      <label class="col-sm-2 col-form-label">Main Title</label>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          v-model="banner.translations.en.title"
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-sm-2 col-form-label">Description</label>
                      <div class="col-sm-10">
                        <textarea
                          class="form-control"
                          rows="3"
                          v-model="banner.translations.en.description"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <!-- ZH -->
                  <div class="tab-pane fade" id="lang-zh">
                    <div class="row mb-3">
                      <label class="col-sm-2 col-form-label">Main Title</label>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          v-model="banner.translations.zh.title"
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-sm-2 col-form-label">Description</label>
                      <div class="col-sm-10">
                        <textarea
                          class="form-control"
                          rows="3"
                          v-model="banner.translations.zh.description"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <!-- RU -->
                  <div class="tab-pane fade" id="lang-ru">
                    <div class="row mb-3">
                      <label class="col-sm-2 col-form-label">Main Title</label>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          v-model="banner.translations.ru.title"
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-sm-2 col-form-label">Description</label>
                      <div class="col-sm-10">
                        <textarea
                          class="form-control"
                          rows="3"
                          v-model="banner.translations.ru.description"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 p-t-20">
                <div class="form-group">
                  <label for="pages" class="form-label">Choose a Page</label>
                  <select id="pages" class="form-select" v-model="selectedPage">
                    <option v-for="page in pages" :key="page.id" :value="page">
                      {{ page.description }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-lg-6 p-t-20">
                <div class="form-group">
                  <label for="images" class="form-label">Select Images</label>
                  <input
                    type="file"
                    class="form-control"
                    id="images"
                    accept="image/*"
                    @change="handleFiles"
                  />
                </div>
                <div v-if="errorMessage" class="alert alert-danger">
                  {{ errorMessage }}
                </div>
                <div v-if="images.length > 0">
                  <h5>Selected Banner:</h5>
                  <div class="row">
                    <div
                      class="col-md-3 mb-3"
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
                <div v-else>
                  <img
                    width="200"
                    height="200"
                    :src="
                      apiService.getImageUrl(
                        imagePath.bannerPath,
                        imagePath.bannerName
                      )
                    "
                    alt="Banner image"
                  />
                </div>
              </div>

              <!-- <div class="col-lg-6 p-t-20">
                <div class="form-group">
                  <label for="status" class="form-label">Status</label>
                  <select
                    id="status"
                    class="form-select"
                    v-model="selectedStatus"
                  >
                    <option
                      v-for="(value, key) in statusOptions"
                      :key="key"
                      :value="key"
                    >
                      {{ value }}
                    </option>
                  </select>
                </div>
              </div> -->

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
                <NuxtLink to="/manage-banner/banner-list">
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
      bannerTemp: {},
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
      maxSize: 50 * 1024 * 1024, // 50MB in bytes,
      pages: [],
      selectedPage: "", // เก็บค่าที่ผู้ใช้เลือก
      statusOptions: {
        A: "Active",
        I: "In Active",
      },
      selectedStatus: "A", // เก็บคีย์ที่ผู้ใช้เลือก
      requestLandingPage: {
        // ฟิลด์อื่น ๆ ของ section1 …
        banner: {}, // <--- ตรงนี้จะเก็บ { name, path }
        galleries: [],
        title_mini_en: "",
        title_en: "",
        title_mini_cn: "",
        title_cn: "",
        title_mini_ru: "",
        title_rn: "",
        // …
        // section2–section5 …
      },
      responseData: {},
    };
  },
  async mounted() {
    // this.initPage()

    await this.callServicePageInfo();
    await this.callServiceMain();

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
        const id = this.$route.params.id;
        const response = await apiService.get(
          `/api/page-info/content/section1/` + id
        );
        this.responseData = response;
        const t = this.banner.translations;
        t.en.title = response.title_en;
        t.en.description = response.title_mini_en;
        t.zh.title = response.title_cn;
        t.zh.description = response.title_mini_cn;
        t.ru.title = response.title_ru;
        t.ru.description = response.title_mini_ru;

        this.imagePath = {
          bannerName: response.banner?.name,
          bannerPath: response.banner?.path,
        };

        // 3. กำหนด pageId จาก selectedPageId (ถ้ามี)
        console.log("response.page_id >>> ", response.page_id);
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
      const selectedFiles = Array.from(event.target.files);
      const totalSize = selectedFiles.reduce((acc, f) => acc + f.size, 0);

      if (totalSize > this.maxSize) {
        this.errorMessage = "Total file size exceeds 50MB!";
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
        formData.append("page_name", this.selectedPage?.name);
        formData.append("category", "banner");

        try {
          const resp = await apiService.post(
            "/media/create", // หรือ path ที่คุณแม็ปใน Spring
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
          console.log("Upload success:", resp);
          const { id, name, path } = resp.data;
          this.requestLandingPage.banner = { id };

          this.requestLandingPage.galleries.push({
            content_id: this.responseData.id,
            banner_id: id,
            title_mini_en: "",
            title_en: "",
            title_mini_cn: "",
            title_cn: "",
            title_mini_ru: "",
            title_rn: "",
          });

          console.log("section1.banner:", this.requestLandingPage.banner);
        } catch (err) {
          console.error("Upload error:", err);
          this.errorMessage = "Upload failed: " + (err.message || err);
        }
      }
    },
    formatSize(size) {
      const mbSize = (size / (1024 * 1024)).toFixed(2);
      return `${mbSize} MB`;
    },
    async saveSections() {
      try {
        // 2. flatten translations
        const t = this.banner.translations;
        this.requestLandingPage.title_en = t.en.title;
        this.requestLandingPage.title_mini_en = t.en.description;

        this.requestLandingPage.title_cn = t.zh.title;
        this.requestLandingPage.title_mini_cn = t.zh.description;

        this.requestLandingPage.title_ru = t.ru.title;
        this.requestLandingPage.title_mini_ru = t.ru.description;

        // 3. กำหนด pageId จาก selectedPageId (ถ้ามี)
        this.requestLandingPage.page_id = this.selectedPage?.id;

        this.requestLandingPage.status = this.selectedStatus;

        console.log(
          "this.requestLandingPage.banner?.id >> ",
          this.requestLandingPage.banner?.id
        );
        if (!this.requestLandingPage.banner?.id) {
          this.requestLandingPage.banner = {
            id: this.responseData.banner?.id,
          };
        }

        console.log("section1.banner:", this.requestLandingPage.section1);
        const resp = await apiService.post(
          `/landingpage/update/page/${this.selectedPage?.name}/section/1`,
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
          () => {
            navigateTo("/manage-banner/banner-list");
          }
        );
      } catch (err) {
        console.error("Update sections error:", err);
      }
    },
  },
  beforeUnmount() {
    // Revoke preview URLs to free up memory
    this.images.forEach((image) => URL.revokeObjectURL(image.preview));
  },
};
</script>
