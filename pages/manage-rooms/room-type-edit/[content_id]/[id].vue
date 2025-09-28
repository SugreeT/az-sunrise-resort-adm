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
              <i class="fa fa-home"></i>&nbsp;<a class="parent-item" href="index">Home</a>&nbsp;<i
                class="fa fa-angle-right"></i>
            </li>
            <li>
              <a class="parent-item" href="">{{ pageName }}</a>&nbsp;<i class="fa fa-angle-right"></i>
            </li>
            <li class="active">Edit {{ pageName }} Type Details</li>
          </ol>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="card-box">
            <div class="card-head">
              <header>Edit {{ pageName }} Type Details</header>
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
                    <a class="nav-link" :class="{ active: currentLang === lang }" href="#"
                      @click.prevent="currentLang = lang">
                      {{ langLabels[lang] }}
                    </a>
                  </li>
                </ul>

                <div class="tab-content">
                  <!-- EN -->
                  <div class="tab-pane" :class="{ 'show active': currentLang === 'en' }">
                    <div class="row mb-3">
                      <label class="col-sm-2 col-form-label">Mini Title</label>
                      <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="content.translations.en.titleMini" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-sm-2 col-form-label">Main Title</label>
                      <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="content.translations.en.title" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-sm-2 col-form-label">Description</label>
                      <div class="col-sm-10">
                        <textarea class="form-control" rows="5"
                          v-model="content.translations.en.description"></textarea>
                      </div>
                    </div>

                    <div class="row mb-4">
                      <label class="col-sm-2 col-form-label">Facilities</label>
                      <div class="col-sm-10">
                        <div class="row">
                          <div class="col-md-6 d-flex align-items-center mb-2" v-for="(opt, idx) in facilityOptions"
                            :key="`en-${idx}`">
                            <!-- Checkbox -->
                            <div class="form-check me-2">
                              <input class="form-check-input" type="checkbox" :id="`fac-en-${idx}`"
                                v-model="facilityState.en[idx]" />
                              <label class="form-check-label" :for="`fac-en-${idx}`">
                                {{ opt.name }}
                              </label>
                            </div>
                            <!-- แสดงไอคอนข้างขวา -->
                            <i :class="['ms-2', 'icon-size', opt.icon]" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ZH-CN -->
                  <div class="tab-pane" :class="{ 'show active': currentLang === 'cn' }">
                    <div class="row mb-3">
                      <label class="col-sm-2 col-form-label">Mini Title</label>
                      <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="content.translations.cn.titleMini" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-sm-2 col-form-label">Main Title</label>
                      <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="content.translations.cn.title" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-sm-2 col-form-label">Mini Description</label>
                      <div class="col-sm-10">
                        <textarea class="form-control" rows="5"
                          v-model="content.translations.cn.description"></textarea>
                      </div>
                    </div>

                    <div class="row mb-4">
                      <label class="col-sm-2 col-form-label">Facilities</label>
                      <div class="col-sm-10">
                        <div class="row">
                          <div class="col-md-6 d-flex align-items-center mb-2" v-for="(opt, idx) in facilityOptions"
                            :key="`cn-${idx}`">
                            <!-- Checkbox -->
                            <div class="form-check me-2">
                              <input class="form-check-input" type="checkbox" :id="`fac-cn-${idx}`"
                                v-model="facilityState.cn[idx]" />
                              <label class="form-check-label" :for="`fac-cn-${idx}`">
                                {{ opt.name }}
                              </label>
                            </div>
                            <!-- แสดงไอคอนข้างขวา -->
                            <i :class="['ms-2', 'icon-size', opt.icon]" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- ถ้าต้องการ schedules ในภาษาจีน ก็ใส่เหมือน EN ได้เลย -->
                  </div>

                  <!-- RU -->
                  <div class="tab-pane" :class="{ 'show active': currentLang === 'ru' }">
                    <div class="row mb-3">
                      <label class="col-sm-2 col-form-label">Mini Title</label>
                      <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="content.translations.ru.titleMini" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-sm-2 col-form-label">Main Title</label>
                      <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="content.translations.ru.title" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label class="col-sm-2 col-form-label">Description</label>
                      <div class="col-sm-10">
                        <textarea class="form-control" rows="5"
                          v-model="content.translations.ru.description"></textarea>
                      </div>
                    </div>

                    <div class="row mb-4">
                      <label class="col-sm-2 col-form-label">Facilities</label>
                      <div class="col-sm-10">
                        <div class="row">
                          <div class="col-md-6 d-flex align-items-center mb-2" v-for="(opt, idx) in facilityOptions"
                            :key="`ru-${idx}`">
                            <!-- Checkbox -->
                            <div class="form-check me-2">
                              <input class="form-check-input" type="checkbox" :id="`fac-ru-${idx}`"
                                v-model="facilityState.ru[idx]" />
                              <label class="form-check-label" :for="`fac-ru-${idx}`">
                                {{ opt.name }}
                              </label>
                            </div>
                            <!-- แสดงไอคอนข้างขวา -->
                            <i :class="['ms-2', 'icon-size', opt.icon]" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- ถ้าต้องการ schedules ในภาษารัสเซีย ก็ใส่เหมือน EN ได้เลย -->
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6">
                  <div class="row">
                    <div class="col-lg-6 p-t-20">
                      <div class="form-group">
                        <label for="images" class="form-label">Select Gallery</label>
                        <input type="file" class="form-control" id="images" accept="image/*" multiple
                          @change="handleFiles" />
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
                            <div class="col-md-2 mb-3" v-for="(image, index) in images" :key="index">
                              <div class="card">
                                <img :src="image.preview" class="card-img-top" alt="Preview" />
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
                        <div v-for="(gallery, idx) in responseRoomType.galleries" :key="idx" class="image-container">
                          <!-- 2) ใช้ gallery.image.path & gallery.image.name -->
                          <img v-if="gallery.image" :src="apiService.getImageUrl(
                            gallery.image.path,
                            gallery.image.thumbnail_name
                          )
                            " alt="Gallery image" />
                          <button v-if="gallery.image" class="delete-btn" @click="confirmRemove(idx)"
                            aria-label="Delete image">
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
                <button type="button" @click="saveSections"
                  class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">
                  Save
                </button>

                <!-- <a href="/manage-banner/banner-list"  >
										<button type="button"
										class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default">Cancel</button>
									</a> -->
                <NuxtLink to="/manage-rooms/room-list">
                  <button type="button"
                    class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default">
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
const routeId = route.params.content_id;
const dataId = route.params.id;

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
      pageId: 8,
      pageName: "",
      bannerTemp: {},
      imagePath: {},
      languages: ["en", "cn", "ru"],
      langLabels: {
        en: "English",
        cn: "Chinese",
        ru: "Russian",
      },
      currentLang: "en",

      facilityOptions: [
        { "icon": "icon-hotel-double_bed_2", "name": "King Size Bed", "status": "N" },
        { "icon": "customicon-double-bed", "name": "Queen Size Bed", "status": "N" },
        { "icon": "icon-hotel-single_bed", "name": "Two Single Beds", "status": "N" },

        { "icon": "icon-hotel-patio", "name": "Balcony", "status": "N" },
        { "icon": "icon-hotel-restaurant", "name": "Desk", "status": "N" },

        { "icon": "icon-spa-tisane", "name": "Free toiletries", "status": "N" },
        { "icon": "icon-hotel-shower", "name": "Shower", "status": "N" },
        { "icon": "icon-spa-towels", "name": "Towels", "status": "N" },

        { "icon": "icon-hotel-condition", "name": "Air conditioning", "status": "N" },
        { "icon": "icon-hotel-coffee", "name": "Electric kettle", "status": "N" },
        { "icon": "icon-hotel-tv", "name": "TV", "status": "N" },
        { "icon": "icon-hotel-calendar_1", "name": "Mini Refrigerator", "status": "N" },
        { "icon": "icon-hotel-hairdryer", "name": "Hairdryer", "status": "N" },
        { "icon": "icon-hotel-safety_box", "name": "Safety box", "status": "N" },

        { "icon": "icon-hotel-loundry", "name": "Bathrobe", "status": "N" },
        { "icon": "icon-spa-dress", "name": "Slipper", "status": "N" },
        { "icon": "icon-hotel-info", "name": "Umbrella", "status": "N" }
      ],

      // สถานะของ checkbox แต่ละตัวในแต่ละภาษา (true/false)
      // เมื่อต้องการดึงข้อมูลจาก API มา แมปให้ facilityState.en[i] = true ถ้า status === 'Y'
      facilityState: {
        en: [], // array ของ boolean, length เท่ากับ facilityOptions.length
        cn: [],
        ru: [],
      },
      content: {
        translations: {
          en: {
            titleMini: "",
            title: "",
            description: "",
            facilitiesJson: [],
          },
          cn: {
            titleMini: "",
            title: "",
            description: "",

            facilitiesJson: [],
          },
          ru: {
            titleMini: "",
            title: "",
            description: "",

            facilitiesJson: [],
          },
          // ถ้าต้องการเก็บ id ของ room type ด้วย ก็ใส่เพิ่มที่นี่
          id: null,
        },
      },
      errorMessage: "",
      isUploading: false,
      uploadSuccess: false,
      maxSize: 100 * 1024 * 1024, // 50MB in bytes,
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
        schedules_en: "",
        schedules_cn: "",
        schedules_ru: "",
        // …
        // section2–section5 …
      },
      roomTypeId: "",
      requestSection2Roomtype: {
        id: "",
        galleries: [],
        content_id: "",
      },
      responseRoomType: {},
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
    await this.initializeFacilityState(); // สร้าง array ของ facilityState.en = [false,false,...]

    await this.callServicePageInfo();
    await this.callServiceSection2();
    // await this.callServiceSection3();
    // this.mapSchedulesFromDB();
  },
  methods: {
    initializeFacilityState() {
      const len = this.facilityOptions.length;
      this.facilityState.en = Array(len).fill(false);
      this.facilityState.cn = Array(len).fill(false);
      this.facilityState.ru = Array(len).fill(false);
    },

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
          `/api/page-info/content/section2/` + this.pageId
        );

        if (response) {
          console.log("this.dataId >> ", this.$route.params.id);
          this.responseDataSection2 = response;
          const dataRoomType = response.room_types.find(
            (p) => Number(p.id) === Number(this.$route.params.id)
          );

          this.responseRoomType = dataRoomType;
          this.roomTypeId = dataRoomType.id;
          const t = this.content.translations;
          t.en.titleMini = dataRoomType.title_mini_en;
          t.en.title = dataRoomType.title_en;
          t.en.description = dataRoomType.details_en;
          t.cn.titleMini = dataRoomType.title_mini_cn;
          t.cn.title = dataRoomType.title_cn;
          t.cn.description = dataRoomType.details_cn;
          t.ru.titleMini = dataRoomType.title_mini_ru;
          t.ru.title = dataRoomType.title_ru;
          t.ru.description = dataRoomType.details_ru;

          const fe = dataRoomType.facilities_en || [];
          const fc = dataRoomType.facilities_cn || [];
          const fr = dataRoomType.facilities_ru || [];

          // ให้ facilityState.en[i] = true ถ้าใน fe มี object.icon === facilityOptions[i].icon
          this.facilityState.en = this.facilityOptions.map((opt) => {
            // หาใน fe ว่ามี object ที่ icon ตรงกันและ status === 'Y' หรือไม่
            const found = fe.find(
              (f) => f.icon === opt.icon && f.status === "Y"
            );
            return !!found;
          });
          // ทำซ้ำกับภาษาจีน
          this.facilityState.cn = this.facilityOptions.map((opt) => {
            const found = fc.find(
              (f) => f.icon === opt.icon && f.status === "Y"
            );
            return !!found;
          });
          // ทำซ้ำกับภาษารัสเซีย
          this.facilityState.ru = this.facilityOptions.map((opt) => {
            const found = fr.find(
              (f) => f.icon === opt.icon && f.status === "Y"
            );
            return !!found;
          });

          // console.log("response.page_id >>> ", response.page_id);
          // console.log("this.pages>>> ", this.pages);
          const page = this.pages.find((p) => p.id === response.page_id);
          console.log("page >>> ", page);
          this.selectedPage = page;
          // this.selectedStatus = "A";
        }
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
        formData.append("category", "gallery");

        try {
          const resp = await apiService.post(
            "/media/create", // หรือ path ที่คุณแม็ปใน Spring
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
          console.log("Upload success:", resp);
          const { id, name, path } = resp.data;
          let param = {
            room_type_id: this.roomTypeId,
            image_id: id,
          };
          this.requestSection2Roomtype.galleries.push(param);

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
      // await this.saveSection3();
    },
    async saveSection2() {
      try {
        const requestSection2 = this.responseDataSection2; //default section2 not change

        const dataRoomType = this.responseRoomType; //set for section2 room type change

        // 2. flatten translations
        const t = this.content.translations;
        // 1. Flatten title / description
        dataRoomType.title_mini_en = t.en.titleMini;
        dataRoomType.title_en = t.en.title;
        dataRoomType.details_en = t.en.description;
        dataRoomType.title_mini_cn = t.cn.titleMini;
        dataRoomType.title_cn = t.cn.title;
        dataRoomType.details_cn = t.cn.description;
        dataRoomType.title_mini_ru = t.ru.titleMini;
        dataRoomType.title_ru = t.ru.title;
        dataRoomType.details_ru = t.ru.description;

        ["en", "cn", "ru"].forEach((lng) => {
          const arr = this.facilityOptions.map((opt, idx) => {
            return {
              icon: opt.icon,
              name: opt.name,
              status: this.facilityState[lng][idx] ? "Y" : "N",
            };
          });
          // แปลงเป็น JSON string
          this.content.translations[lng].facilitiesJson = JSON.stringify(arr);
        });

        dataRoomType.facilities_en =
          this.content.translations.en.facilitiesJson;
        dataRoomType.facilities_cn =
          this.content.translations.cn.facilitiesJson;
        dataRoomType.facilities_ru =
          this.content.translations.ru.facilitiesJson;

        console.log("this.requestSection3:", this.requestSection2Roomtype);

        // const mapped = (dataRoomType.galleries ?? []).map(
        //   ({ id, room_type_id, image }) => ({
        //     id,
        //     room_type_id,
        //     image_id: image.id,
        //   })
        // );

        // push array ทั้งก้อนด้วย spread
        // dataRoomType.galleries.push(...mapped);
        dataRoomType.galleries.push(...this.requestSection2Roomtype.galleries);

        if (dataRoomType.galleries) {
          dataRoomType.image_id = dataRoomType.galleries[0].image_id; // set image 0 for banner
        }

        const dataOtherRoomTypes = this.responseDataSection2.room_types.filter(
          (p) => Number(p.id) !== Number(this.$route.params.id)
        );

        // 3. วนลูปแต่ละ room_type แล้วแปลง facilities_* → JSON string
        dataOtherRoomTypes.forEach((room) => {
          ["en", "cn", "ru"].forEach((lang) => {
            const fieldName = `facilities_${lang}`; // เช่น "facilities_en"
            const arr = room[fieldName] ?? []; // ถ้าไม่มีให้เป็น array เปล่า
            room[fieldName] = JSON.stringify(arr); // แปลง array → JSON string
          });
        });

        // // 3. page_id และ status
        // this.requestLandingPage.page_id = this.selectedPage?.id;
        // this.requestLandingPage.status = this.selectedStatus;

        console.log("this.requestSection2:", requestSection2);
        const resp = await apiService.post(
          `/landingpage/update/page/${this.selectedPage?.name}/section/2`,
          requestSection2
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
            navigateTo("/manage-rooms/room-list");
          }
        );
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
            navigateTo("/manage-rooms/room-list");
          }
        );
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
      const removed = this.responseRoomType.galleries.splice(index, 1)[0];
    },

    // ลบออกจาก array และเรียก API ฝั่ง server ถ้าต้องการ
    async removeImage(index) {
      const removed = this.responseRoomType.galleries.splice(index, 1)[0];
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

.icon-size {
  font-size: 2.125rem;
  color: #978667;
}
</style>
