<template>


    			<!-- start page content -->
			<div class="page-content-wrapper">
				<div class="page-content">
					<div class="page-bar">
						<div class="page-title-breadcrumb">
							<div class=" pull-left">
								<div class="page-title">Manage Upload</div>
							</div>
							<ol class="breadcrumb page-breadcrumb pull-right">
								<li><i class="fa fa-home"></i>&nbsp;<a class="parent-item"
										href="index">Home</a>&nbsp;<i class="fa fa-angle-right"></i>
								</li>
								<li><a class="parent-item" href="">Upload</a>&nbsp;<i class="fa fa-angle-right"></i>
								</li>
								<li class="active">All Upload</li>
							</ol>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="card card-box">
								<div class="card-head">
									<header>All Upload Files</header>
									<div class="tools">
										<a class="fa fa-repeat btn-color box-refresh" href="javascript:;"></a>
										<a class="t-collapse btn-color fa fa-chevron-down" href="javascript:;"></a>
										<a class="t-close btn-color fa fa-times" href="javascript:;"></a>
									</div>
								</div>
								<div class="card-body ">
									<div class="row p-b-20">
										<div class="col-md-6 col-sm-6 col-6">
											<div class="btn-group">
												<a href="/manage-upload/upload-add" id="addRow" class="btn btn-info">
												Add New <i class="fa fa-plus"></i>
												</a>
											</div>
										</div>
									</div>
									<div class="table-scrollable">
										<table class="table table-hover table-checkable order-column full-width"
											id="example4">
											<thead>
												<tr>
													<th class="center"> No </th>
													<th class="center"> Image Name </th>
													<th class="center"> Page </th>
													<th class="center"> Create Date </th>
													<th class="center"> Status </th>
													<th class="center"> Action </th>
												</tr>
											</thead>
											<tbody>
												<tr class="odd gradeX">
													<!-- <td class="user-circle-img">
														<img src="/img/user/user1.jpg" alt="">
													</td> -->
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
														<!-- <NuxtLink to="/manage-banner/banner-edit"  >
															<button type="button" class="btn btn-tbl-edit btn-xs">
																<i class="fa fa-pencil"></i></button>
														</NuxtLink> -->
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
												</tr>
												<tr class="odd gradeX">
												
													<td class="center">3</td>
													<td class="center">Restaurant1</td>
													<td class="center">Restaurant</td>
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
												
													<td class="center">4</td>
													<td class="center">Fitness.jpg</td>
													<td class="center">Fitness</td>
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
													<td class="center">5</td>
													<td class="center">Spa.jpg</td>
													<td class="center">Spa</td>
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

<script>
export default {
  data() {
    return {
        title: '', // ค่าเริ่มต้น
    };
  },
  computed: {
  },
  created() {
    // this.title = this.$t('slide-title', { name: 'vue-i18n' });
	// Layout.init();
  },
  mounted() {
	Layout.init();
  },
};
</script>