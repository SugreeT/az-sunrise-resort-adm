<template>
  <!-- start page content -->
  <div class="page-content-wrapper">
    <div class="page-content">
      <div class="page-bar">
        <div class="page-title-breadcrumb">
          <div class="pull-left">
            <!-- <div class="page-title">{{ pageName }}</div> -->
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
              <a class="parent-item" href="">{{ pageName }}</a
              >&nbsp;<i class="fa fa-angle-right"></i>
            </li>
            <li class="active">Edit {{ pageName }} Details</li>
          </ol>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="card-box">
            <div class="card-head">
              <header>Edit {{ pageName }} Details</header>
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
                <!-- ─── Tabs ภาษา ─────────────────────────────── -->
                <ul class="nav nav-tabs mb-3" role="tablist">
                  <li class="nav-item" v-for="lang in languages" :key="lang">
                    <a
                      class="nav-link"
                      :class="{ active: currentLang === lang }"
                      href="#"
                      @click.prevent="currentLang = lang"
                    >
                      {{ langLabels[lang] }}
                    </a>
                  </li>
                </ul>

                <div class="tab-content">
                  <!-- EN -->
                  <div
                    class="tab-pane"
                    :class="{ 'show active': currentLang === 'en' }"
                  >
                    <div class="row mb-3">
                      <label class="col-sm-2 col-form-label">Main Title</label>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          v-model="content.translations.en.title"
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-sm-2 col-form-label">Description</label>
                      <div class="col-sm-10">
                        <textarea
                          class="form-control"
                          rows="5"
                          v-model="content.translations.en.description"
                        ></textarea>
                      </div>
                    </div>

                    <div>
                      <label class="font-weight-bold">Schedules</label>
                      <div
                        v-for="(sched, idx) in content.translations.en
                          .schedules"
                        :key="idx"
                        class="align-items-center mb-2"
                      >
                        <div class="row mb-1">
                          <div class="col-sm-5">
                            <input
                              v-model="sched.title"
                              placeholder="e.g. Opening Hours"
                              class="form-control mr-2"
                            />
                          </div>
                          <div class="col-sm-5">
                            <input
                              v-model="sched.time"
                              placeholder="e.g. 7:00am – 10:00pm"
                              class="form-control mr-2"
                            />
                          </div>
                          <div class="col-sm-1">
                            <button
                              v-if="
                                content.translations.en.schedules.length > 1
                              "
                              class="btn btn-outline-danger"
                              @click="removeSchedule(idx)"
                            >
                              –
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        class="btn btn-outline-primary"
                        @click="addSchedule"
                      >
                        + Add Schedule
                      </button>
                    </div>
                  </div>

                  <!-- ZH-CN -->
                  <div
                    class="tab-pane"
                    :class="{ 'show active': currentLang === 'cn' }"
                  >
                    <div class="row mb-3">
                      <label class="col-sm-2 col-form-label">Main Title</label>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          v-model="content.translations.cn.title"
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-sm-2 col-form-label">Description</label>
                      <div class="col-sm-10">
                        <textarea
                          class="form-control"
                          rows="5"
                          v-model="content.translations.cn.description"
                        ></textarea>
                      </div>
                    </div>
                    <!-- ถ้าต้องการ schedules ในภาษาจีน ก็ใส่เหมือน EN ได้เลย -->
                    <div>
                      <label class="font-weight-bold">Schedules</label>
                      <div
                        v-for="(sched, idx) in content.translations.cn
                          .schedules"
                        :key="idx"
                        class="align-items-center mb-2"
                      >
                        <div class="row mb-1">
                          <div class="col-sm-5">
                            <input
                              v-model="sched.title"
                              placeholder="e.g. Opening Hours"
                              class="form-control mr-2"
                            />
                          </div>
                          <div class="col-sm-5">
                            <input
                              v-model="sched.time"
                              placeholder="e.g. 7:00am – 10:00pm"
                              class="form-control mr-2"
                            />
                          </div>
                          <div class="col-sm-1">
                            <button
                              v-if="
                                content.translations.cn.schedules.length > 1
                              "
                              class="btn btn-outline-danger"
                              @click="removeSchedule(idx)"
                            >
                              –
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        class="btn btn-outline-primary"
                        @click="addSchedule"
                      >
                        + Add Schedule
                      </button>
                    </div>
                  </div>

                  <!-- RU -->
                  <div
                    class="tab-pane"
                    :class="{ 'show active': currentLang === 'ru' }"
                  >
                    <div class="row mb-3">
                      <label class="col-sm-2 col-form-label">Main Title</label>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          v-model="content.translations.ru.title"
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-sm-2 col-form-label">Description</label>
                      <div class="col-sm-10">
                        <textarea
                          class="form-control"
                          rows="5"
                          v-model="content.translations.ru.description"
                        ></textarea>
                      </div>
                    </div>
                    <!-- ถ้าต้องการ schedules ในภาษารัสเซีย ก็ใส่เหมือน EN ได้เลย -->
                    <div>
                      <label class="font-weight-bold">Schedules</label>
                      <div
                        v-for="(sched, idx) in content.translations.ru
                          .schedules"
                        :key="idx"
                        class="align-items-center mb-2"
                      >
                        <div class="row mb-1">
                          <div class="col-sm-5">
                            <input
                              v-model="sched.title"
                              placeholder="e.g. Opening Hours"
                              class="form-control mr-2"
                            />
                          </div>
                          <div class="col-sm-5">
                            <input
                              v-model="sched.time"
                              placeholder="e.g. 7:00am – 10:00pm"
                              class="form-control mr-2"
                            />
                          </div>
                          <div class="col-sm-1">
                            <button
                              v-if="
                                content.translations.ru.schedules.length > 1
                              "
                              class="btn btn-outline-danger"
                              @click="removeSchedule(idx)"
                            >
                              –
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        class="btn btn-outline-primary"
                        @click="addSchedule"
                      >
                        + Add Schedule
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6">
                  <div class="row">
                    <div class="col-lg-6 p-t-20">
                      <div class="form-group">
                        <label for="images" class="form-label"
                          >Select Gallery</label
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
                          <h5>Selected Gallery:</h5>
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
                    <h5>All Gallery:</h5>
                    <div class="preview-section">
                      <div class="gallery-preview">
                        <div
                          v-for="(
                            gallery, idx
                          ) in responseDataSection3.galleries"
                          :key="idx"
                          class="image-container"
                          style="
                            /* ปรับขนาดกล่องตามต้องการ */
                            overflow: hidden;
                            position: relative;
                          "
                        >
                          <!-- skeleton -->
                          <div
                            v-if="!resizedUrls[idx]"
                            class="image-skeleton"
                            style="width: 100%; height: 100%; background: #eee"
                          ></div>

                          <!-- ภาพย่อ -->
                          <img
                            v-else
                            :src="resizedUrls[idx]"
                            alt="Gallery image"
                            loading="lazy"
                            style="
                              /* ขยายให้เต็มกล่อง และครอปเท่าที่เกิน */
                              width: 100%;
                              height: 100%;
                              object-fit: cover;
                              display: block;
                            "
                          />

                          <button
                            class="delete-btn"
                            @click="confirmRemove(idx)"
                            aria-label="Delete image"
                            style="
                              position: absolute;
                              top: 8px;
                              right: 8px;
                              background: rgba(0, 0, 0, 0.5);
                              color: white;
                              border: none;
                              border-radius: 50%;
                              width: 24px;
                              height: 24px;
                              line-height: 20px;
                              text-align: center;
                              cursor: pointer;
                            "
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
                <NuxtLink to="/manage-fitness/fitness-list">
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
      pageId: 9,
      pageName: "",
      bannerTemp: {},
      resizedUrls: [],
      imagePath: {},
      languages: ["en", "cn", "ru"],
      langLabels: {
        en: "English",
        cn: "Chinese",
        ru: "Russian",
      },
      currentLang: "en",
      content: {
        translations: {
          en: {
            title: "",
            description: "",
            schedules: [{ title: "", time: "" }],
          },
          cn: {
            title: "",
            description: "",
            schedules: [{ title: "", time: "" }],
          },
          ru: {
            title: "",
            description: "",
            schedules: [{ title: "", time: "" }],
          },
        },
      },
      errorMessage: "",
      isUploading: false,
      uploadSuccess: false,
      maxSize: 100 * 1024 * 1024, // 50MB in bytes,
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
        // ฟิลด์อื่น ๆ ของ section1 …
        banner: {}, // <--- ตรงนี้จะเก็บ { name, path }
        galleries: [],
        title_mini_en: "",
        title_en: "",
        title_mini_cn: "",
        title_cn: "",
        title_mini_ru: "",
        title_rn: "",
        schedules_en: "",
        schedules_cn: "",
        schedules_ru: "",
        // …
        // section2–section5 …
      },
      requestSection3: {
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
      responseDataSection2: {},
      responseDataSection3: {},
    };
  },
  async mounted() {
    // this.initPage()
    Layout.init();
    await this.callServicePageInfo();
    await this.callServiceSection2();
    await this.callServiceSection3();
    this.mapSchedulesFromDB();
    const galleries = this.responseDataSection3.galleries || [];
    this.resizedUrls = await Promise.all(
      galleries.map((g) =>
        this.resizeImage(
          apiService.getImageUrl(g.image.path, g.image.name),
          300, // ความกว้างสูงสุดใน px
          0.9 // คุณภาพ JPEG 0.0–1.0
        )
      )
    );
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
    async callServiceSection2() {
      try {
        const id = this.$route.params.id;
        const response = await apiService.get(
          `/api/page-info/content/section2/` + this.pageId + "/" + id
        );
        this.responseDataSection2 = response;
        const t = this.content.translations;
        t.en.title = response.title_en;
        t.en.description = response.description_en;
        t.cn.title = response.title_cn;
        t.cn.description = response.description_cn;
        t.ru.title = response.title_ru;
        t.ru.description = response.description_ru;

        // console.log("response.page_id >>> ", response.page_id);
        // console.log("this.pages>>> ", this.pages);
        const page = this.pages.find((p) => p.id === response.page_id);
        console.log("page >>> ", page);
        this.selectedPage = page;
        this.selectedStatus = "A";
      } catch (err) {
        console.error("Error loading landing page:", err);
      }
    },
    async callServiceSection3() {
      try {
        const id = this.$route.params.id;
        const response = await apiService.get(
          `/api/page-info/content/section3/` + this.pageId
        );
        this.responseDataSection3 = response;

        console.log("callServiceSection3 >>> ", this.responseDataSection3);
      } catch (err) {
        console.error("Error loading landing page:", err);
      }
    },
    async handleFiles(event) {
      this.errorMessage = "";
      const selectedFiles = Array.from(event.target.files);
      const totalSize = selectedFiles.reduce((acc, f) => acc + f.size, 0);

      if (totalSize > this.maxSize) {
        this.errorMessage = "Total file size exceeds 100MB!";
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

        try {
          const resp = await apiService.post(
            "/media/create", // หรือ path ที่คุณแม็ปใน Spring
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
          console.log("Upload success:", resp);
          const { id, name, path } = resp.data;
          let param = {
            content_id: this.responseDataSection3.id,
            image_id: id,
          };
          this.requestSection3.galleries.push(param);

          console.log("requestSection3:", this.requestSection3);
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
      await this.saveSection2();
      await this.saveSection3();
    },
    async saveSection2() {
      try {
        // 2. flatten translations
        const t = this.content.translations;

        // 1. Flatten title / description
        this.requestLandingPage.title_en = t.en.title;
        this.requestLandingPage.description_en = t.en.description;

        this.requestLandingPage.title_cn = t.cn.title;
        this.requestLandingPage.description_cn = t.cn.description;

        this.requestLandingPage.title_ru = t.ru.title;
        this.requestLandingPage.description_ru = t.ru.description;

        // 2. Flatten schedules
        this.requestLandingPage.schedules_en = t.en.schedules;
        this.requestLandingPage.schedules_cn = t.cn.schedules;
        this.requestLandingPage.schedules_ru = t.ru.schedules;

        // 3. page_id และ status
        this.requestLandingPage.page_id = this.selectedPage?.id;
        this.requestLandingPage.status = this.selectedStatus;

        console.log("this.requestLandingPage:", this.requestLandingPage);
        const resp = await apiService.post(
          `/landingpage/update/page/${this.selectedPage?.name}/section/2`,
          this.requestLandingPage
        );
        console.log("Update sections success:", resp);
        // swal(
        //   {
        //     title: "Save Success",
        //     type: "success",
        //     showCancelButton: false,
        //     confirmButtonText: "OK",
        //   },
        //   () => {
        //     navigateTo("/manage-fitness/fitness-list");
        //   }
        // );
      } catch (err) {
        console.error("Update sections error:", err);
      }
    },
    async saveSection3() {
      try {
        console.log("this.requestSection3:", this.requestSection3);

        const mapped = (this.responseDataSection3.galleries ?? []).map(
          ({ id, content_id, image }) => ({
            id,
            content_id,
            image_id: image.id,
          })
        );

        // push array ทั้งก้อนด้วย spread
        this.requestSection3.galleries.push(...mapped);

        const resp = await apiService.post(
          `/landingpage/update/page/${this.selectedPage?.name}/section/3`,
          this.requestSection3
        );
        console.log("Update sections success:", resp);
        swal(
          {
            title: "Save Success",
            type: "success",
            showCancelButton: false,
            confirmButtonText: "OK",
          },
          () => {
            navigateTo("/manage-fitness/fitness-list");
          }
        );
      } catch (err) {
        console.error("Update sections error:", err);
      }
    },
    addSchedule() {
      this.content.translations[this.currentLang].schedules.push({
        title: "",
        time: "",
      });
    },
    removeSchedule(idx) {
      this.content.translations[this.currentLang].schedules.splice(idx, 1);
    },
    mapSchedulesFromDB() {
      const langs = ["en", "cn", "ru"];
      langs.forEach((lang) => {
        // key ใน requestLandingPage
        const key = `schedules_${lang}`;
        // ถ้า backend ให้มาจริง ๆ ให้ใช้ array นั้นเลย
        const arr = this.responseDataSection2[key] || [];
        // ถ้า arr ว่าง ให้ใส่ default 1 row เปล่า ๆ
        this.content.translations[lang].schedules = arr.length
          ? // คัดกรองเฉพาะ title+time (กัน field เกิน)
            arr.map((item) => ({
              title: item.title ?? "",
              time: item.time ?? "",
            }))
          : [{ title: "", time: "" }];
      });
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
      const removed = this.responseDataSection3.galleries.splice(index, 1)[0];
    },

    // ลบออกจาก array และเรียก API ฝั่ง server ถ้าต้องการ
    async removeImage(index) {
      const removed = this.responseDataSection3.galleries.splice(index, 1)[0];
      // ถ้าต้องการ sync กับ backend:
      // await this.$axios.$delete('/api/gallery/image', {
      //   data: { name: removed.banner.name, path: removed.banner.path }
      // })
    },
    resizeImage(srcUrl, maxWidth, quality = 1) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          const ratio = maxWidth / img.width;
          const w = maxWidth;
          const h = img.height * ratio;

          const canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, w, h);

          canvas.toBlob(
            (blob) => {
              if (!blob) return reject(new Error("Canvas toBlob failed"));
              resolve(URL.createObjectURL(blob));
            },
            "image/jpeg",
            quality
          );
        };
        img.onerror = () => reject(new Error("Image load error: " + srcUrl));
        img.src = srcUrl;
      });
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

  /* .image-skeleton {
    width: 300px;
    height: 300px;
    background: #f0f0f0;
  } */

  .image-container {
    position: relative;
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
