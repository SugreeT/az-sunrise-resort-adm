<template>


	<!-- start page content -->
<div class="page-content-wrapper">
	<div class="page-content">
		<div class="page-bar">
			<div class="page-title-breadcrumb">
				<div class=" pull-left">
					<div class="page-title">All Spa</div>
				</div>
				<ol class="breadcrumb page-breadcrumb pull-right">
					<li><i class="fa fa-home"></i>&nbsp;<a class="parent-item"
							href="index">Home</a>&nbsp;<i class="fa fa-angle-right"></i>
					</li>
					<li><a class="parent-item" href="">Spa</a>&nbsp;<i class="fa fa-angle-right"></i>
					</li>
					<li class="active">All Spa</li>
				</ol>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<div class="card card-box">
					<div class="card-head">
						<header>All Spa</header>
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
									<a href="/manage-rooms/room-add" id="addRow" class="btn btn-info">
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
										<th class="center"> img </th>
										<th class="center"> # </th>
										<th class="center"> Topic </th>
										<th class="center"> Detail </th>
										<th class="center"> Description </th>
										<th class="center"> Status </th>
										<th class="center"> Action </th>
									</tr>
								</thead>
								<tbody>
									<tr class="odd gradeX">
										<td class="user-circle-img">
											<img src="/img/user/user1.jpg" alt="">
										</td>
										<td class="center">1</td>
										<td class="center">Spa Center</td>
										<td class="left">Discover the ultimate wellness experience at our state-of-the-art fitness center. <br/> Our facility is designed to cater to all fitness levels, offering a variety of modern equipment and classes that inspire and motivate.</td>
										<td class="left">
											<span>Opening Hours 7.00am – 10.00pm</span><br/>
											<span>Yoga Class 8.00am – 9.00am </span><br/>
											<span>HIIT Training 6.00pm – 7.00pm</span>
										</td>
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
										<td class="user-circle-img">
											<img src="/img/user/user1.jpg" alt="">
										</td>
										<td class="center">2</td>
										<td class="center">Spa Center</td>
										<td class="left" >Discover the ultimate wellness experience at our state-of-the-art fitness center. <br/> Our facility is designed to cater to all fitness levels, offering a variety of modern equipment and classes that inspire and motivate.</td>
										<td class="left">
											<span>Opening Hours 8.00am – 10.00pm</span><br/>
											<span>Yoga Class 8.00am – 10.00am </span><br/>
											<span>HIIT Training 7.00pm – 8.00pm</span>
										</td>
										<td class="center">
											<span class="label label-sm label-danger"> InActive </span>
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
									<!-- <tr class="odd gradeX">
										<td class="user-circle-img">
											<img src="/img/user/user3.jpg" alt="">
										</td>
										<td class="center">103</td>
										<td class="center">King</td>
										<td class="center">AC</td>
										<td class="center">None</td>
										<td class="center">5</td>
										<td class="center">123456789</td>
										<td class="center">65$</td>
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
										<td class="user-circle-img">
											<img src="/img/user/user1.jpg" alt="">
										</td>
										<td class="center">101</td>
										<td class="center">Single</td>
										<td class="center">AC</td>
										<td class="center">Free Dinner</td>
										<td class="center">2</td>
										<td class="center">123456789</td>
										<td class="center">25$</td>
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
										<td class="user-circle-img">
											<img src="/img/user/user2.jpg" alt="">
										</td>
										<td class="center">102</td>
										<td class="center">Double</td>
										<td class="center">Non AC</td>
										<td class="center">Free Lunch</td>
										<td class="center">3</td>
										<td class="center">123456789</td>
										<td class="center">35$</td>
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
										<td class="user-circle-img">
											<img src="/img/user/user3.jpg" alt="">
										</td>
										<td class="center">103</td>
										<td class="center">King</td>
										<td class="center">AC</td>
										<td class="center">None</td>
										<td class="center">5</td>
										<td class="center">123456789</td>
										<td class="center">65$</td>
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
										<td class="user-circle-img">
											<img src="/img/user/user1.jpg" alt="">
										</td>
										<td class="center">101</td>
										<td class="center">Single</td>
										<td class="center">AC</td>
										<td class="center">Free Dinner</td>
										<td class="center">2</td>
										<td class="center">123456789</td>
										<td class="center">25$</td>
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
										<td class="user-circle-img">
											<img src="/img/user/user2.jpg" alt="">
										</td>
										<td class="center">102</td>
										<td class="center">Double</td>
										<td class="center">Non AC</td>
										<td class="center">Free Lunch</td>
										<td class="center">3</td>
										<td class="center">123456789</td>
										<td class="center">35$</td>
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
										<td class="user-circle-img">
											<img src="/img/user/user3.jpg" alt="">
										</td>
										<td class="center">103</td>
										<td class="center">King</td>
										<td class="center">AC</td>
										<td class="center">None</td>
										<td class="center">5</td>
										<td class="center">123456789</td>
										<td class="center">65$</td>
										<td class="center">
											<a href="/manage-rooms/room-edit" class="btn btn-tbl-edit btn-xs">
												<i class="fa fa-pencil"></i>
											</a>
											<a class="btn btn-tbl-delete btn-xs">
												<i class="fa fa-trash-o "></i>
											</a>
										</td>
									</tr> -->
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
console.log('Scripts are loaded and DOM is ready');
});
</script>