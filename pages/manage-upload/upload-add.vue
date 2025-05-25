<template>
			<!-- start page content -->
			<div class="page-content-wrapper">
				<div class="page-content">
					<div class="page-bar">
						<div class="page-title-breadcrumb">
							<div class=" pull-left">
								<div class="page-title">Add Upload</div>
							</div>
							<ol class="breadcrumb page-breadcrumb pull-right">
								<li><i class="fa fa-home"></i>&nbsp;<a class="parent-item"
										href="index">Home</a>&nbsp;<i class="fa fa-angle-right"></i>
								</li>
								<li><a class="parent-item" href="">Upload</a>&nbsp;<i class="fa fa-angle-right"></i>
								</li>
								<li class="active">Add Upload Details</li>
							</ol>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<div class="card-box">
								<div class="card-head">
									<header>Add Upload Details</header>
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
								
									<div class="col-lg-6 p-t-20">
										<div class="form-group">
											<label for="images" class="form-label">Select Images</label>
											<input
											type="file"
											class="form-control"
											id="images"
											accept="image/*"
											multiple
											@change="handleFiles"
											/>
											<!-- multiple -->
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
									<!-- <div class="col-lg-6 p-t-20">
										<div class="form-group">
											<label>Upload No</label>
											<input type="text" class="form-control" v-model="bannerNo" placeholder="Enter ...">
										</div>
									</div> -->
									<div class="col-lg-6 p-t-20">
										<div class="form-group">

											<label for="pages" class="form-label">Choose a Page</label>
											<select
												id="pages"
												class="form-select"
												v-model="selectedPage"
												>
												<!-- ค่าดีฟอลต์ -->
												<!-- <option disabled value="">-- กรุณาเลือกหน้า --</option> -->
												<!-- วนลูป pages ที่มาจาก API -->
												<option
													v-for="page in pages"
													:key="page.id"
													:value="page.id"
												>
													{{ page.description }}
												</option>
												</select>
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
												<option v-for="(value, key) in statusOptions" :key="key" :value="key">
													{{ value }}
												</option>
												</select>
										</div>
									</div>
						
									<div class="col-lg-12 p-t-20 text-center">
									
											<a href="/manage-upload/upload-list"  >
												<button type="button"
											class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Submit</button>
											</a>
								
											<a href="/manage-upload/upload-list"  >
												<button type="button"
												class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default">Cancel</button>
											</a>
											<!-- <NuxtLink to="/manage-upload/upload-list"  >
												<button type="button"
											class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Submit</button>
											</NuxtLink>
								
											<NuxtLink to="/manage-upload/upload-list"  >
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
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import Footer from '@/components/Footer.vue';

// เพิ่ม Script ที่จำเป็นใน <head>
useHead({
    link: [
        {
        media:"screen",
        rel: 'stylesheet',
        href: '/plugins/dropzone/dropzone.css', // ชี้ไปยังไฟล์ CSS เฉพาะเพจ
        },
    ],
    script: [
        { src: '/js/pages/material_select/getmdl-select.js', type: 'text/javascript', defer: true },
        // { src: '/plugins/dropzone/dropzone.js', type: 'text/javascript', defer: true },
        // { src: '/plugins/dropzone/dropzone-call.js', type: 'text/javascript', defer: true },
    ],
});

// ใช้ onMounted เพื่อจัดการ script ที่ต้องการ DOM พร้อมใช้งาน
onMounted(() => {
  console.log('Scripts are loaded and DOM is ready');
});
</script>

<script>

import apiService from '@/services/apiService'

export default {
  data() {
    return {
      images: [], // Store selected images and previews
	  bannerNo: "",
      errorMessage: '',
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
    };
  },
  mounted() {
    // this.initPage()

    this.callServiceMain()
  },
  methods: {
	async callServiceMain() {
        try {
			const response = await apiService.get('/api/page-info/search')
			this.pages = response;
        } catch (err) {
            console.error('Error loading landing page:', err)
        }
    },
	async handleFiles(event) {
      this.errorMessage = '';
      const selectedFiles = Array.from(event.target.files);
      const totalSize = selectedFiles.reduce((acc, f) => acc + f.size, 0);

      if (totalSize > this.maxSize) {
        this.errorMessage = 'Total file size exceeds 50MB!';
        this.images = [];
        return;
      }

      // สร้าง preview
      this.images = selectedFiles.map(f => ({
        file: f,
        preview: URL.createObjectURL(f)
      }));

      // upload แต่ละไฟล์เลย
      for (const { file } of this.images) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('pageName', this.pageName);

        try {
          const resp = await apiService.post('/media/upsert',      // หรือ path ที่คุณแม็ปใน Spring
            formData,
            { headers: { 'Content-Type': 'multipart/form-data' } }
          );
          console.log('Upload success:', resp);
        } catch (err) {
          console.error('Upload error:', err);
          this.errorMessage = 'Upload failed: ' + (err.message || err);
        }
      }
    },
    formatSize(size) {
      const mbSize = (size / (1024 * 1024)).toFixed(2);
      return `${mbSize} MB`;
    },
    async handleSubmit() {
      if (this.images.length === 0) {
        this.errorMessage = 'Please select at least one image!';
        return;
      }

      this.isUploading = true;
      this.errorMessage = '';
      this.uploadSuccess = false;

      try {
        const formData = new FormData();
        this.images.forEach((image) => formData.append('images', image.file));

        // Simulate API upload request (replace with your actual API endpoint)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        this.uploadSuccess = true;
        this.images = [];
      } catch (error) {
        this.errorMessage = 'Failed to upload images!';
      } finally {
        this.isUploading = false;
      }
    },
  },
  beforeUnmount() {
    // Revoke preview URLs to free up memory
    this.images.forEach((image) => URL.revokeObjectURL(image.preview));
  },
};
</script>
