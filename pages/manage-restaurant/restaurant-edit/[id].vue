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
              <!-- <div
                class="d-flex justify-content-center align-items-center py-4"
              >
                <div class="me-5 d-flex align-items-center">
                  <span class="toggle-label">Content</span>
                  <label class="switchToggle ms-2">
                    <input type="checkbox" v-model="showContent" />
                    <span class="slider green round"></span>
                  </label>
                </div>
                <div class="d-flex align-items-center">
                  <span class="toggle-label">Gallery</span>
                  <label class="switchToggle ms-2">
                    <input type="checkbox" v-model="showGallery" />
                    <span class="slider green round"></span>
                  </label>
                </div>
              </div> -->
              <div class="col-lg-12 border rounded">
                <!-- ─── Tabs ภาษา ─────────────────────────────── -->
                <ul class="nav nav-tabs mb-3 mt-3" role="tablist">
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

                <div class="tab-content mb-3 mt-3">
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

                    <div class="pb-3">
                      <div class="text-center">
                        <label
                          class="font-weight-bold"
                          style="font-size: 20px; font-weight: bold"
                          >Schedules</label
                        >
                      </div>
                      <div class="p-3 border rounded">
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

                    <div class="pb-3">
                      <div class="text-center">
                        <label
                          class="font-weight-bold"
                          style="font-size: 20px; font-weight: bold"
                          >Restaurant Menu</label
                        >
                      </div>
                      <!-- loop แต่ละหมวด -->
                      <div
                        v-for="(cat, catIdx) in contentRestaurant.tabs[
                          currentLang
                        ].menu_categories"
                        :key="catIdx"
                        class="mb-4 p-3 border rounded"
                      >
                        <!-- แถวกรอกชื่อหมวด + ปุ่มลบหมวด -->
                        <div class="row align-items-center mb-3">
                          <div class="col-sm-10">
                            <label class="form-label">Category</label>
                            <input
                              class="form-control form-control-lg"
                              placeholder="e.g.  Starters, Main Dishes, Desserts, Drinks"
                              v-model="cat.categoryName"
                            />
                          </div>
                          <div class="col-sm-2 text-end">
                            <button
                              v-if="
                                contentRestaurant.tabs[currentLang]
                                  .menu_categories.length > 1
                              "
                              class="btn btn-outline-danger"
                              @click="removeCategory(catIdx)"
                            >
                              – Remove Category
                            </button>
                          </div>
                        </div>

                        <!-- หัวตารางคอลัมน์ -->
                        <div class="row mb-2">
                          <div class="col-sm-3">Menu Name</div>
                          <div class="col-sm-2">Menu Price</div>
                          <div class="col-sm-4">Menu Material</div>
                          <div class="col-sm-2">Picture</div>
                          <div class="col-sm-2"></div>
                        </div>

                        <!-- loop รายการอาหารในหมวด -->
                        <div
                          v-for="(item, menuIdx) in cat.food_menus"
                          :key="menuIdx"
                          class="row align-items-center mb-2"
                        >
                          <div class="col-sm-3">
                            <input
                              class="form-control"
                              placeholder="e.g. Soft shell crab"
                              v-model="item.name"
                            />
                          </div>
                          <div class="col-sm-2">
                            <input
                              class="form-control"
                              placeholder="e.g. $14"
                              v-model="item.price"
                            />
                          </div>
                          <div class="col-sm-4">
                            <input
                              class="form-control"
                              placeholder="e.g. Chicken, Potato, Salad"
                              v-model="item.material"
                            />
                          </div>
                          <div class="col-sm-2">
                            <div class="input-group">
                              <input
                                v-show="!item.previewName"
                                type="file"
                                class="form-control"
                                id="imagesMenu"
                                accept="image/*"
                                @change="
                                  handleFileImageMenu($event, catIdx, menuIdx)
                                "
                              />
                              <label
                                class="form-label"
                                v-show="item.previewName"
                                >{{ item.previewName }}</label
                              >
                              <button
                                v-show="item.previewName"
                                class="btn btn-outline-secondary btn-sm ms-2"
                                @click="
                                  item.previewName = '';
                                  item.preview = '';
                                "
                                title="Preview Image"
                              >
                                <i class="fa fa-pencil"></i>
                              </button>
                              <button
                                v-show="item.preview"
                                class="btn btn-outline-secondary btn-sm ms-2"
                                @click="openPreview(item.preview)"
                                title="Preview Image"
                              >
                                <i class="fa fa-search"></i>
                              </button>
                            </div>
                          </div>
                          <div class="col-sm-1">
                            <button
                              v-if="cat.food_menus.length > 1"
                              class="btn btn-outline-danger"
                              @click="removeRestaurantMenu(catIdx, menuIdx)"
                            >
                              –
                            </button>
                          </div>
                        </div>

                        <!-- ปุ่มเพิ่มเมนูในหมวดนี้ -->
                        <div class="text-start">
                          <button
                            class="btn btn-outline-primary"
                            @click="addRestaurantMenu(catIdx)"
                          >
                            + Add Menu
                          </button>
                        </div>
                      </div>

                      <!-- ปุ่มเพิ่มหมวด -->
                      <div class="text-center">
                        <button class="btn btn-primary" @click="addCategory">
                          + Add Category
                        </button>
                      </div>
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
                    <div class="pb-3">
                      <div class="text-center">
                        <label
                          class="font-weight-bold"
                          style="font-size: 20px; font-weight: bold"
                          >Schedules</label
                        >
                      </div>
                      <div class="p-3 border rounded">
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

                    <div class="pb-3">
                      <div class="text-center">
                        <label
                          class="font-weight-bold"
                          style="font-size: 20px; font-weight: bold"
                          >Restaurant Menu</label
                        >
                      </div>
                      <!-- loop แต่ละหมวด -->
                      <div
                        v-for="(cat, catIdx) in contentRestaurant.tabs[
                          currentLang
                        ].menu_categories"
                        :key="catIdx"
                        class="mb-4 p-3 border rounded"
                      >
                        <!-- แถวกรอกชื่อหมวด + ปุ่มลบหมวด -->
                        <div class="row align-items-center mb-3">
                          <div class="col-sm-10">
                            <label class="form-label">Category</label>
                            <input
                              class="form-control form-control-lg"
                              placeholder="e.g.  Starters, Main Dishes, Desserts, Drinks"
                              v-model="cat.categoryName"
                            />
                          </div>
                          <div class="col-sm-2 text-end">
                            <button
                              v-if="
                                contentRestaurant.tabs[currentLang]
                                  .menu_categories.length > 1
                              "
                              class="btn btn-outline-danger"
                              @click="removeCategory(catIdx)"
                            >
                              – Remove Category
                            </button>
                          </div>
                        </div>

                        <!-- หัวตารางคอลัมน์ -->
                        <div class="row mb-2">
                          <div class="col-sm-3">Menu Name</div>
                          <div class="col-sm-2">Menu Price</div>
                          <div class="col-sm-4">Menu Material</div>
                          <div class="col-sm-2">Picture</div>
                          <div class="col-sm-2"></div>
                        </div>

                        <!-- loop รายการอาหารในหมวด -->
                        <div
                          v-for="(item, menuIdx) in cat.food_menus"
                          :key="menuIdx"
                          class="row align-items-center mb-2"
                        >
                          <div class="col-sm-3">
                            <input
                              class="form-control"
                              placeholder="e.g. Soft shell crab"
                              v-model="item.name"
                            />
                          </div>
                          <div class="col-sm-2">
                            <input
                              class="form-control"
                              placeholder="e.g. $14"
                              v-model="item.price"
                            />
                          </div>
                          <div class="col-sm-4">
                            <input
                              class="form-control"
                              placeholder="e.g. Chicken, Potato, Salad"
                              v-model="item.material"
                            />
                          </div>
                          <!-- <div class="col-sm-2">
                            <div class="input-group">
                              <input
                                v-show="!item.previewName"
                                type="file"
                                class="form-control"
                                id="imagesMenu"
                                accept="image/*"
                                @change="
                                  handleFileImageMenu($event, catIdx, menuIdx)
                                "
                              />
                              <label
                                class="form-label"
                                v-show="item.previewName"
                                >{{ item.previewName }}</label
                              >
                              <button
                                v-show="item.previewName"
                                class="btn btn-outline-secondary btn-sm ms-2"
                                @click="
                                  item.previewName = '';
                                  item.preview = '';
                                "
                                title="Preview Image"
                              >
                                <i class="fa fa-pencil"></i>
                              </button>
                              <button
                                v-show="item.preview"
                                class="btn btn-outline-secondary btn-sm ms-2"
                                @click="openPreview(item.preview)"
                                title="Preview Image"
                              >
                                <i class="fa fa-search"></i>
                              </button>
                            </div>
                          </div> -->
                          <div class="col-sm-1">
                            <button
                              v-if="cat.food_menus.length > 1"
                              class="btn btn-outline-danger"
                              @click="removeRestaurantMenu(catIdx, menuIdx)"
                            >
                              –
                            </button>
                          </div>
                        </div>

                        <!-- ปุ่มเพิ่มเมนูในหมวดนี้ -->
                        <div class="text-start">
                          <button
                            class="btn btn-outline-primary"
                            @click="addRestaurantMenu(catIdx)"
                          >
                            + Add Menu
                          </button>
                        </div>
                      </div>

                      <!-- ปุ่มเพิ่มหมวด -->
                      <div class="text-center">
                        <button class="btn btn-primary" @click="addCategory">
                          + Add Category
                        </button>
                      </div>
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
                    <div class="pb-3">
                      <div class="text-center">
                        <label
                          class="font-weight-bold"
                          style="font-size: 20px; font-weight: bold"
                          >Schedules</label
                        >
                      </div>
                      <div class="p-3 border rounded">
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

                    <div class="pb-3">
                      <div class="text-center">
                        <label
                          class="font-weight-bold"
                          style="font-size: 20px; font-weight: bold"
                          >Restaurant Menu</label
                        >
                      </div>
                      <!-- loop แต่ละหมวด -->
                      <div
                        v-for="(cat, catIdx) in contentRestaurant.tabs[
                          currentLang
                        ].menu_categories"
                        :key="catIdx"
                        class="mb-4 p-3 border rounded"
                      >
                        <!-- แถวกรอกชื่อหมวด + ปุ่มลบหมวด -->
                        <div class="row align-items-center mb-3">
                          <div class="col-sm-10">
                            <label class="form-label">Category</label>
                            <input
                              class="form-control form-control-lg"
                              placeholder="e.g.  Starters, Main Dishes, Desserts, Drinks"
                              v-model="cat.categoryName"
                            />
                          </div>
                          <div class="col-sm-2 text-end">
                            <button
                              v-if="
                                contentRestaurant.tabs[currentLang]
                                  .menu_categories.length > 1
                              "
                              class="btn btn-outline-danger"
                              @click="removeCategory(catIdx)"
                            >
                              – Remove Category
                            </button>
                          </div>
                        </div>

                        <!-- หัวตารางคอลัมน์ -->
                        <div class="row mb-2">
                          <div class="col-sm-3">Menu Name</div>
                          <div class="col-sm-2">Menu Price</div>
                          <div class="col-sm-4">Menu Material</div>
                          <div class="col-sm-2">Picture</div>
                          <div class="col-sm-2"></div>
                        </div>

                        <!-- loop รายการอาหารในหมวด -->
                        <div
                          v-for="(item, menuIdx) in cat.food_menus"
                          :key="menuIdx"
                          class="row align-items-center mb-2"
                        >
                          <div class="col-sm-3">
                            <input
                              class="form-control"
                              placeholder="e.g. Soft shell crab"
                              v-model="item.name"
                            />
                          </div>
                          <div class="col-sm-2">
                            <input
                              class="form-control"
                              placeholder="e.g. $14"
                              v-model="item.price"
                            />
                          </div>
                          <div class="col-sm-4">
                            <input
                              class="form-control"
                              placeholder="e.g. Chicken, Potato, Salad"
                              v-model="item.material"
                            />
                          </div>
                          <!-- <div class="col-sm-2">
                            <div class="input-group">
                              <input
                                v-show="!item.previewName"
                                type="file"
                                class="form-control"
                                id="imagesMenu"
                                accept="image/*"
                                @change="
                                  handleFileImageMenu($event, catIdx, menuIdx)
                                "
                              />
                              <label
                                class="form-label"
                                v-show="item.previewName"
                                >{{ item.previewName }}</label
                              >
                              <button
                                v-show="item.previewName"
                                class="btn btn-outline-secondary btn-sm ms-2"
                                @click="
                                  item.previewName = '';
                                  item.preview = '';
                                "
                                title="Preview Image"
                              >
                                <i class="fa fa-pencil"></i>
                              </button>
                              <button
                                v-show="item.preview"
                                class="btn btn-outline-secondary btn-sm ms-2"
                                @click="openPreview(item.preview)"
                                title="Preview Image"
                              >
                                <i class="fa fa-search"></i>
                              </button>
                            </div>
                          </div> -->
                          <div class="col-sm-1">
                            <button
                              v-if="cat.food_menus.length > 1"
                              class="btn btn-outline-danger"
                              @click="removeRestaurantMenu(catIdx, menuIdx)"
                            >
                              –
                            </button>
                          </div>
                        </div>

                        <!-- ปุ่มเพิ่มเมนูในหมวดนี้ -->
                        <div class="text-start">
                          <button
                            class="btn btn-outline-primary"
                            @click="addRestaurantMenu(catIdx)"
                          >
                            + Add Menu
                          </button>
                        </div>
                      </div>

                      <!-- ปุ่มเพิ่มหมวด -->
                      <div class="text-center">
                        <button class="btn btn-primary" @click="addCategory">
                          + Add Category
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 border rounded mt-3">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="row">
                      <div class="col-lg-6 p-t-20 pb-2">
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
                          >
                            <!-- 2) ใช้ gallery.image.path & gallery.image.name -->
                            <img
                              :src="
                                apiService.getImageUrl(
                                  gallery.image.path,
                                  gallery.image.thumbnail_name
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

              <div
                class="modal fade"
                id="exampleModalCenter"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
                @click.self="closePreview"
              >
                <div
                  class="modal-dialog modal-fluid modal-dialog-centered"
                  role="document"
                >
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Image Preview</h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        @click="closePreview"
                      ></button>
                    </div>
                    <div class="modal-body text-center">
                      <img
                        :src="modalImageUrl"
                        alt="Preview"
                        class="img-fluid"
                      />
                    </div>
                    <!-- <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div> -->
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
                <NuxtLink to="/manage-restaurant/restaurant-list">
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
      imagesMenu: [],
      images: [], // Store selected images and previews
      pageId: 2,
      pageName: "",
      bannerTemp: {},
      imagePath: {},
      showContent: true, // เริ่มต้นให้โชว์ทั้งคู่
      showGallery: true,
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
      contentRestaurant: {
        tabs: {
          en: {
            menu_categories: [
              {
                categoryName: "", // ชื่อหมวด
                food_menus: [
                  // รายการอาหารในหมวด
                  {
                    name: "",
                    price: "",
                    material: "",
                    image_id: "",
                    preview: "",
                  },
                ],
              },
            ],
          },
          cn: {
            menu_categories: [
              {
                categoryName: "", // ชื่อหมวด
                food_menus: [
                  // รายการอาหารในหมวด
                  {
                    name: "",
                    price: "",
                    material: "",
                    image_id: "",
                    preview: "",
                  },
                ],
              },
            ],
          },
          ru: {
            menu_categories: [
              {
                categoryName: "", // ชื่อหมวด
                food_menus: [
                  // รายการอาหารในหมวด
                  {
                    name: "",
                    price: "",
                    material: "",
                    image_id: "",
                    preview: "",
                  },
                ],
              },
            ],
          },
        },
      },
      showModal: false,
      modalImageUrl: "",
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
      requestSection3: {
        // ฟิลด์อื่น ๆ ของ section1 …
        id: "",
        banner: {}, // <--- ตรงนี้จะเก็บ { name, path }
        galleries: [],
        title_mini_en: "",
        title_en: "",
        title_mini_cn: "",
        title_cn: "",
        title_mini_ru: "",
        title_rn: "",
        tabs: [],
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

        // 3. ทำการแมปค่าจาก responseDataSection3.tabs → contentRestaurant.tabs.en.menu_categories
        const tabsFromApi = this.responseDataSection3.tabs || [];
        const mappedCategories = tabsFromApi.map((tab) => ({
          // เก็บค่า id ของ tab ถ้ามี (ใช้ตอน update)
          id: tab.id,
          // เก็บชื่อหมวด (ใช้ property ที่คุณตั้งไว้ใน form)
          categoryName: tab.name_en || "",
          // เก็บ image_id ของ tab (ถ้าใช้หมวดละรูป)
          image_id: tab.image_id || null,

          // สร้าง array ของ food_menus ภายในหมวด
          food_menus: (tab.food_menus || []).map((menu) => ({
            // แมปค่าจาก API → field ที่ฟอร์มใช้ bind
            id: menu.id,
            image_id: menu.image_id,
            name: menu.name_en || "",
            price: menu.price_en || "",
            material: menu.material_en || "",
            // สร้าง preview จาก path ของ image (ถ้ามี)
            // สมมติว่า menu.image.path มี URL ของรูป เช่น "/media/restaurant/abc.jpg"
            preview: menu.image
              ? apiService.getImageUrl(menu.image.path, menu.image.name)
              : "",
            previewName: menu.image ? menu.image.original_name : "",

            // ถ้า backend ส่งมาเป็น full URL แล้วก็ใช้ menu.image.url แทน
          })),
        }));

        // 4. เอา mappedCategories ไปเก็บใน contentRestaurant.tabs.en.menu_categories

        this.contentRestaurant.tabs.en.menu_categories = mappedCategories;

        // 5. ถ้าต้องการโหลดภาษาอื่น (cn, ru) ให้ทำ mapping คล้ายกัน:
        //    สมมติ API ส่งชื่อหมวดเป็น tab.name_cn, tab.name_ru ด้วย
        const mappedCategoriesCN = tabsFromApi.map((tab) => ({
          id: tab.id,
          categoryName: tab.name_cn || "",
          image_id: tab.image_id || null,
          food_menus: (tab.food_menus || []).map((menu) => ({
            id: menu.id,
            image_id: menu.image_id,
            name: menu.name_cn || "",
            price: menu.price_cn || "",
            material: menu.material_cn || "",
            preview: menu.image
              ? apiService.getImageUrl(
                  menu.image.path,
                  menu.image.thumbnail_name
                )
              : "",
            imageName: menu.image ? menu.image.name : "",
          })),
        }));

        this.contentRestaurant.tabs.cn.menu_categories = mappedCategoriesCN;

        const mappedCategoriesRU = tabsFromApi.map((tab) => ({
          id: tab.id,
          categoryName: tab.name_ru || "",
          image_id: tab.image_id || null,
          food_menus: (tab.food_menus || []).map((menu) => ({
            id: menu.id,
            image_id: menu.image_id,
            name: menu.name_ru || "",
            price: menu.price_ru || "",
            material: menu.material_ru || "",
            preview: menu.image
              ? apiService.getImageUrl(
                  menu.image.path,
                  menu.image.thumbnail_name
                )
              : "",
            imageName: menu.image ? menu.image.name : "",
          })),
        }));
        this.contentRestaurant.tabs.ru.menu_categories = mappedCategoriesRU;

        console.log("callServiceSection3 >>> ", this.responseDataSection3);
      } catch (err) {
        console.error("Error loading landing page:", err);
      }
    },
    openPreview(previewUrl) {
      this.modalImageUrl = previewUrl;
      // this.showModal = true;
      $("#exampleModalCenter").modal("show");
    },
    closePreview() {
      // this.showModal = false;
      $("#exampleModalCenter").modal("hide");
      this.modalImageUrl = "";
    },
    async handleFileImageMenu(event, catIdx, menuIdx) {
      this.errorMessage = "";
      const selectedFiles = Array.from(event.target.files);
      const totalSize = selectedFiles.reduce((acc, f) => acc + f.size, 0);

      if (totalSize > this.maxSize) {
        this.errorMessage = "Total file size exceeds 100MB!";
        this.imagesMenu = [];
        return;
      }

      const file = event.target.files[0];
      // สร้าง URL ชั่วคราว สำหรับ preview
      const previewUrl = URL.createObjectURL(file);
      // สร้าง preview
      this.imagesMenu = selectedFiles.map((f) => ({
        file: f,
        preview: URL.createObjectURL(f),
      }));

      // เก็บ preview ไว้ในเมนูนั้น ๆ
      this.contentRestaurant.tabs[this.currentLang].menu_categories[
        catIdx
      ].food_menus[menuIdx].preview = previewUrl;

      // upload แต่ละไฟล์เลย
      for (const { file } of this.imagesMenu) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("page_name", this.selectedPage?.name);
        formData.append("category", "image");

        try {
          const resp = await apiService.post(
            "/media/create", // หรือ path ที่คุณแม็ปใน Spring
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
          console.log("Upload success:", resp);
          const { id, name, path } = resp.data;

          this.contentRestaurant.tabs[this.currentLang].menu_categories[
            catIdx
          ].food_menus[menuIdx].image_id = id;
          // let param = {
          //   content_id: this.responseDataSection3.id,
          //   image_id: id,
          // };
          // this.requestSection3.galleries.push(param);

          // console.log("requestSection3:", this.requestSection3);
        } catch (err) {
          console.error("Upload error:", err);
          this.errorMessage = "Upload failed: " + (err.message || err);
        }
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

        this.requestSection3.id = this.responseDataSection3.id || "";
        this.requestSection3.page_id = this.selectedPage?.id;
        // 1. เรียก array ของหมวด (menu_categories) จากภาษาปัจจุบัน
        // 1. เรียก array ของหมวดหมู่ (menu_categories) ทั้ง 3 ภาษา
        //    สมมติว่า contentRestaurant.tabs มี key เป็น 'en', 'zh-CN', 'ru'

        //  menu_categories: [
        //       {
        //         categoryName: "", // ชื่อหมวด
        //         food_menus: [
        //           // รายการอาหารในหมวด
        //           {
        //             name: "",
        //             price: "",
        //             material: "",
        //             image_id: "",
        //             preview: "",
        //           },
        //         ],
        //       },
        //     ],
        const catsEn = this.contentRestaurant.tabs.en?.menu_categories || [];
        const catsCn = this.contentRestaurant.tabs.cn?.menu_categories || [];
        const catsRu = this.contentRestaurant.tabs.ru?.menu_categories || [];

        // 2. ทำการ map ให้ได้โครงที่ Backend ต้องการ (payloadTabs)
        const payloadTabs = catsEn.map((enTab) => {
          // หา category ที่ตรงกันในแต่ละภาษาด้วย id จาก enTab
          const cnTab = catsCn.find((t) => t.id === enTab.id) || {};
          const ruTab = catsRu.find((t) => t.id === enTab.id) || {};

          return {
            // ถ้า enTab.id มีค่า (มาจาก DB) ก็เอาไปใช้งาน ส่วนถ้าเป็นรายการใหม่ก็ null
            id: enTab.id || null,
            image_id: enTab.image_id || null,

            // ดึงชื่อหมวดหมู่จากแต่ละภาษาตาม key ใน JSON
            name_en: enTab.categoryName || "",
            name_cn: cnTab.categoryName || "",
            name_ru: ruTab.categoryName || "",

            // ผูกกับ Section ปัจจุบัน
            content_id: this.requestSection3.id,

            // ดึงเมนูภายในแต่ละหมวด (food_menus) แล้ว map ทุกภาษาย่อยอีกที
            food_menus: (enTab.food_menus || []).map((enMenu) => {
              // หาเมนูที่ตรงกัน (รหัส id) ในภาษาจีนและรัสเซีย
              const cnMenu =
                (cnTab.food_menus || []).find((m) => m.id === enMenu.id) || {};
              const ruMenu =
                (ruTab.food_menus || []).find((m) => m.id === enMenu.id) || {};

              return {
                id: enMenu.id || null,
                image_id: enMenu.image_id || null,

                // ชื่อเมนูแต่ละภาษา
                name_en: enMenu.name || "",
                name_cn: cnMenu.name || "",
                name_ru: ruMenu.name || "",

                // ราคาแต่ละภาษา (แม้ค่าอาจเท่ากันก็ map ไปเลย)
                price_en: enMenu.price || "",
                price_cn: cnMenu.price || "",
                price_ru: ruMenu.price || "",

                // วัสดุ (material) แต่ละภาษา
                material_en: enMenu.material || "",
                material_cn: cnMenu.material || "",
                material_ru: ruMenu.material || "",

                // อ้างอิงกลับไปที่ tab_id (คือ enTab.id)
                tab_id: enTab.id || null,
              };
            }),
          };
        });

        // 3. นำ payloadTabs ที่ได้ไป push เข้า requestSection3.tabs
        //    (หากต้องการ replace ทั้งหมดก็สามารถเขียนเป็น this.requestSection3.tabs = payloadTabs; เลยได้)
        this.requestSection3.tabs = payloadTabs;

        const mapped = (this.responseDataSection3.galleries ?? []).map(
          ({ id, content_id, image }) => ({
            id,
            content_id,
            image_id: image.id,
          })
        );

        // push array ทั้งก้อนด้วย spread
        this.requestSection3.galleries.push(...mapped);
        console.log("Update requestSection3:", this.requestSection3);
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
            navigateTo("/manage-restaurant/restaurant-list");
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
    addCategory() {
      this.contentRestaurant.tabs[this.currentLang].menu_categories.push({
        categoryName: "",
        food_menus: [{ name: "", price: "", material: "", image_id: "" }],
      });
    },
    removeCategory(catIdx) {
      this.contentRestaurant.tabs[this.currentLang].menu_categories.splice(
        catIdx,
        1
      );
    },
    addRestaurantMenu(catIdx) {
      this.contentRestaurant.tabs[this.currentLang].menu_categories[
        catIdx
      ].food_menus.push({ name: "", price: "", material: "", image_id: "" });
    },
    removeRestaurantMenu(catIdx, idx) {
      this.contentRestaurant.tabs[this.currentLang].menu_categories[
        catIdx
      ].food_menus.splice(idx, 1);
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
      const removed = this.responseDataSection3.galleries.splice(index, 1)[0];
    },

    // ลบออกจาก array และเรียก API ฝั่ง server ถ้าต้องการ
    async removeImage(index) {
      const removed = this.responseDataSection3.galleries.splice(index, 1)[0];
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

/* ปรับฟ้อนท์ให้สวยงามขึ้น */
.toggle-label {
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  color: #2c3e50;
}

/* ปรับสีเมื่อ active */
.switchToggle input:checked + .slider {
  background-color: #28a745;
}

/* เนื้อหา modal (body) */
.modal-body {
  padding: 1rem;
}

/* ให้รูปปรับขนาดตามกล่อง modal */
.modal-body img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
}

/* ใส่ใน <style scoped> หรือไฟล์ CSS ของโปรเจ็ค */
.border {
  border: 1px solid #e0e0e0 !important;
}
.rounded {
  border-radius: 8px !important;
}
.fw-bold {
  font-weight: 600 !important;
}
</style>
