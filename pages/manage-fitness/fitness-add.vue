<template>
  <!-- start page content -->
  <div class="page-content-wrapper">
    <div class="page-content">
      <div class="page-bar">
        <div class="page-title-breadcrumb">
          <div class="pull-left">
            <div class="page-title">Add Fitness Details</div>
          </div>
          <ol class="breadcrumb page-breadcrumb pull-right">
            <li>
              <i class="fa fa-home"></i>&nbsp;<a
                class="parent-item"
                href="index.html"
                >Home</a
              >&nbsp;<i class="fa fa-angle-right"></i>
            </li>
            <li>
              <a class="parent-item" href="">Fitness</a>&nbsp;<i
                class="fa fa-angle-right"
              ></i>
            </li>
            <li class="active">Add Fitness Details</li>
          </ol>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="card-box">
            <div class="card-head">
              <header>Add Fitness Details</header>
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
              <!-- Number -->
              <div class="col-lg-6 p-t-20">
                <div class="form-group">
                  <label for="number" class="form-label">Number</label>
                  <input
                    type="number"
                    id="number"
                    v-model="formData.number"
                    class="form-control"
                    placeholder="Enter number"
                  />
                </div>
              </div>

              <!-- Type -->
              <div class="col-lg-6 p-t-20">
                <div class="form-group">
                  <label for="type" class="form-label">Type</label>
                  <input
                    type="text"
                    id="type"
                    v-model="formData.type"
                    class="form-control"
                    placeholder="Enter type"
                  />
                </div>
              </div>

              <!-- Topic -->
              <div class="col-lg-6 p-t-20">
                <div class="form-group">
                  <label for="topic" class="form-label">Topic</label>
                  <input
                    type="text"
                    id="topic"
                    v-model="formData.topic"
                    class="form-control"
                    placeholder="Enter topic"
                  />
                </div>
              </div>

              <!-- Detail -->
              <div class="col-lg-6 p-t-20">
                <div class="form-group">
                  <label for="detail" class="form-label">Detail</label>
                  <textarea
                    id="detail"
                    v-model="formData.detail"
                    class="form-control"
                    rows="3"
                    placeholder="Enter detail"
                  ></textarea>
                </div>
              </div>

              <!-- Facilities -->
              <div class="col-lg-6 p-t-20">
                <div class="form-group">
                  <label for="facilities" class="form-label">Facilities</label>
                  <input
                    type="number"
                    id="facilities"
                    v-model="formData.facilities"
                    class="form-control"
                    placeholder="Enter facilities"
                  />
                </div>
              </div>
              <div class="col-lg-6 p-t-20">
                <div class="form-group">
                  <label for="images" class="form-label">Gallery</label>
                  <input
                    type="file"
                    class="form-control"
                    id="images"
                    accept="image/*"
                    multiple
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

              <!-- Status -->
              <div class="col-lg-6 p-t-20">
                <div class="form-group">
                  <label for="status" class="form-label">Status</label>
                  <select
                    id="status"
                    v-model="formData.status"
                    class="form-select"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-12 p-t-20 text-center">
                <a href="/manage-rooms/room-list">
                  <button
                    type="button"
                    class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink"
                  >
                    Save
                  </button>
                </a>

                <a href="/manage-rooms/room-list">
                  <button
                    type="button"
                    class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default"
                  >
                    Cancel
                  </button>
                </a>
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

// เพิ่ม Script ที่จำเป็นใน <head>
useHead({
  link: [
    {
      media: "screen",
      rel: "stylesheet",
      href: "/plugins/dropzone/dropzone.css", // ชี้ไปยังไฟล์ CSS เฉพาะเพจ
    },
  ],
  script: [
    {
      src: "/js/pages/material_select/getmdl-select.js",
      type: "text/javascript",
      defer: true,
    },
    // { src: '/plugins/dropzone/dropzone.js', type: 'text/javascript', defer: true },
    // { src: '/plugins/dropzone/dropzone-call.js', type: 'text/javascript', defer: true },
  ],
});

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
      imagePreview: null, // แสดงรูปตัวอย่าง
      formData: {
        number: "",
        type: "",
        topic: "",
        detail: "",
        facilities: "",
        status: "Active", // ค่าเริ่มต้นของ Status
      },
    };
  },
  methods: {
    handleFiles(event) {
      this.errorMessage = "";
      const selectedFiles = Array.from(event.target.files);
      const totalSize = selectedFiles.reduce((acc, file) => acc + file.size, 0);

      if (totalSize > this.maxSize) {
        this.errorMessage = "Total file size exceeds 50MB!";
        this.images = [];
        return;
      }

      // Generate previews for each image
      this.images = selectedFiles.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
    },
    formatSize(size) {
      const mbSize = (size / (1024 * 1024)).toFixed(2);
      return `${mbSize} MB`;
    },
    handleImage(event) {
      const file = event.target.files[0];
      if (file) {
        this.imagePreview = URL.createObjectURL(file); // สร้าง URL เพื่อแสดงตัวอย่างรูปภาพ
        this.formData.image = file.name; // เก็บชื่อไฟล์ใน formData
      }
    },
    handleSubmit() {
      console.log("Form Data:", this.formData);
      alert("Data has been saved!");
      this.resetForm();
    },
    resetForm() {
      this.imagePreview = null;
      this.formData = {
        number: "",
        type: "",
        topic: "",
        detail: "",
        facilities: "",
        status: "Active",
      };
    },
  },
};
</script>
