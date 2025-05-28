<template>
  <!-- start page content -->
  <div class="page-content-wrapper">
    <div class="page-content">
      <div class="page-bar">
        <div class="page-title-breadcrumb">
          <div class="pull-left">
            <div class="page-title">Add Banner</div>
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
            <li class="active">Add Banner Details</li>
          </ol>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="card-box">
            <div class="card-head">
              <header>Add Banner Details</header>
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
                    <!-- ค่าดีฟอลต์ -->
                    <!-- <option disabled value="">-- กรุณาเลือกหน้า --</option> -->
                    <!-- วนลูป pages ที่มาจาก API -->
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
                  <h5>Selected Images:</h5>
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
              </div>

              <div class="col-lg-6 p-t-20">
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
              </div>

              <!-- <div class="col-lg-6 p-t-20">
										<div
											class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
											<input class="mdl-textfield__input" type="text" id="sample3" value=""
												readonly tabIndex="-1">
											<label for="sample3" class="pull-right margin-0">
												<i class="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
											</label>
											<label for="sample2" class="mdl-textfield__label">Meal</label>
											<ul data-mdl-for="sample3"
												class="mdl-menu mdl-menu--bottom-left mdl-js-menu">
												<li class="mdl-menu__item" data-val="1">Free Breakfast</li>
												<li class="mdl-menu__item" data-val="2">Free Dinner</li>
												<li class="mdl-menu__item" data-val="3">Free Breakfast &amp; Dinner</li>
												<li class="mdl-menu__item" data-val="4">Free Welcome Drink</li>
												<li class="mdl-menu__item" data-val="5">No Free Food</li>
											</ul>
										</div>
									</div>
									<div class="col-lg-6 p-t-20">
										<div
											class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
											<input class="mdl-textfield__input" type="text" id="sample4" value=""
												readonly tabIndex="-1">
											<label class="pull-right margin-0">
												<i class="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
											</label>
											<label class="mdl-textfield__label">Cancellation Charges</label>
											<ul data-mdl-for="sample4"
												class="mdl-menu mdl-menu--bottom-left mdl-js-menu">
												<li class="mdl-menu__item" data-val="1">Free Cancellation</li>
												<li class="mdl-menu__item" data-val="2">10% Before 24 Hours</li>
												<li class="mdl-menu__item" data-val="1">No Cancellation Allow</li>
											</ul>
										</div>
									</div>
									<div class="col-lg-6 p-t-20">
										<div
											class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
											<input class="mdl-textfield__input" type="text" id="list2" value="" readonly
												tabIndex="-1">
											<label for="list2" class="pull-right margin-0">
												<i class="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
											</label>
											<label for="list2" class="mdl-textfield__label">Bad Capacity</label>
											<ul data-mdl-for="list2" class="mdl-menu mdl-menu--bottom-left mdl-js-menu">
												<li class="mdl-menu__item" data-val="1">1</li>
												<li class="mdl-menu__item" data-val="2">2</li>
												<li class="mdl-menu__item" data-val="3">3</li>
												<li class="mdl-menu__item" data-val="4">4</li>
												<li class="mdl-menu__item" data-val="5">5</li>
												<li class="mdl-menu__item" data-val="6">6</li>
												<li class="mdl-menu__item" data-val="7">7</li>
												<li class="mdl-menu__item" data-val="8">8</li>
											</ul>
										</div>
									</div>
									<div class="col-lg-6 p-t-20">
										<div
											class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
											<input class="mdl-textfield__input" type="text"
												pattern="-?[0-9]*(\.[0-9]+)?" id="text8">
											<label class="mdl-textfield__label" for="text8">Telephone Number</label>
											<span class="mdl-textfield__error">Number required!</span>
										</div>
									</div>
									<div class="col-lg-6 p-t-20">
										<div
											class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
											<input class="mdl-textfield__input" type="text"
												pattern="-?[0-9]*(\.[0-9]+)?" id="text7">
											<label class="mdl-textfield__label" for="text7">Rent Per Night</label>
											<span class="mdl-textfield__error">Number required!</span>
										</div>
									</div>
									<div class="col-lg-12 p-t-20">
										<label class="control-label col-md-3">Upload Room Photos</label>
										<form id="id_dropzone" class="dropzone">
											<div class="dz-message">
												<div class="dropIcon">
													<i class="material-icons">cloud_upload</i>
												</div>
												<h3>Drop files here or click to upload.</h3>
												<em>(This is just a demo. Selected files are <strong>not</strong>
													actually uploaded.)
												</em>
											</div>
										</form>
									</div> -->
              <!-- <div class="col-lg-12 p-t-20">
										<div class="mdl-textfield mdl-js-textfield txt-full-width">
											<textarea class="mdl-textfield__input" rows="4" id="education"></textarea>
											<label class="mdl-textfield__label" for="text7">Room Details</label>
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

                <a href="/manage-banner/banner-list">
                  <button
                    type="button"
                    class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default"
                  >
                    Cancel
                  </button>
                </a>
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
      bannerNo: "",
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
          banner: {}, // <--- ตรงนี้จะเก็บ { name, path }
          titleMini: "",
          title: "",
          titleMiniCn: "",
          titleCn: "",
          titleMiniRu: "",
          titleRu: "",
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

        const t = this.banner.translations;
        t.en.title = response.title;
        t.en.description = response.title_mini;
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
        formData.append("pageName", this.selectedPage?.name);

        try {
          const resp = await apiService.post(
            "/media/upsert", // หรือ path ที่คุณแม็ปใน Spring
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
          console.log("Upload success:", resp);
          const { name, path } = resp.data;
          this.requestLandingPage.section1.banner = { name, path };

          console.log(
            "section1.banner:",
            this.requestLandingPage.section1.banner
          );
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
        this.requestLandingPage.section1.title = t.en.title;
        this.requestLandingPage.section1.title_mini = t.en.description;

        this.requestLandingPage.section1.title_cn = t.zh.title;
        this.requestLandingPage.section1.title_mini_cn = t.zh.description;

        this.requestLandingPage.section1.title_ru = t.ru.title;
        this.requestLandingPage.section1.title_mini_ru = t.ru.description;

        // 3. กำหนด pageId จาก selectedPageId (ถ้ามี)
        this.requestLandingPage.section1.page_id = this.selectedPage?.id;

        this.requestLandingPage.section1.status = this.selectedStatus;

        console.log("section1.banner:", this.requestLandingPage.section1);
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
