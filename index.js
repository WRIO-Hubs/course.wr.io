var config = require('./config.json')

export default {
  async fetch(request) {
    const html = `

	<!DOCTYPE html>
	<html lang="en">
		<!--begin::Head-->
		<head>
			<!-- Google tag (gtag.js) -->
			<script async src="https://www.googletagmanager.com/gtag/js?id=G-2LW7SFRCJ7"></script>
			<script>
			  window.dataLayer = window.dataLayer || [];
			  function gtag(){dataLayer.push(arguments);}
			  gtag('js', new Date());
			  gtag('config', 'G-2LW7SFRCJ7');
			</script>
			<title>BizCom &bull; Course</title>
			<meta charset="utf-8" />
			<meta name="description" content="Learn the simple and effective strategies for launching, automating, and optimizing your small business with community building. This step-by-step course provides evergreen techniques for achieving big wins in your business." />
			<meta name="keywords" content="micro enterprise, small business, community building, launching, automating, optimizing, evergreen strategies, big wins" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta property="og:locale" content="en_US" />
			<link rel="shortcut icon" href="https://bizcom.wr.io/assets/media/logos/favicon.ico" />
			<!--begin::Fonts-->
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700" />
			<!--end::Fonts-->
			<!--begin::Global Stylesheets Bundle(used by all pages)-->
			<link href="https://bizcom.wr.io/assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
			<link href="https://bizcom.wr.io/assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
			<link href="https://bizcom.wr.io/assets/css/update.css" rel="stylesheet" type="text/css" />
			<!--end::Global Stylesheets Bundle-->
		</head>
		<!--end::Head-->
		<!--begin::Body-->
		<body data-kt-name="good" id="kt_app_body" data-bs-spy="scroll" data-bs-target="#kt_landing_menu" data-bs-offset="200" data-kt-app-layout="light-sidebar" class="body-bg position-relative app-blank">
			<!--begin::Theme mode setup on page load-->
			<script>var defaultThemeMode = "light"; var themeMode; if ( document.documentElement ) { if ( document.documentElement.hasAttribute("data-theme-mode")) { themeMode = document.documentElement.getAttribute("data-theme-mode"); } else { if ( localStorage.getItem("data-theme") !== null ) { themeMode = localStorage.getItem("data-theme"); } else { themeMode = defaultThemeMode; } } if (themeMode === "system") { themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; } document.documentElement.setAttribute("data-theme", themeMode); }</script>
			<!--end::Theme mode setup on page load-->
			<!--begin::Root-->
			<div class="d-flex flex-column flex-root" id="kt_app_root">
				<!--begin::Header Section-->
				<div class="m-0">
					<!--begin::Header-->
					<div class="landing-header" data-kt-sticky="true" data-kt-sticky-name="landing-header" data-kt-sticky-offset="{default: '200px', lg: '300px'}">
						<!--begin::Container-->
						<div class="container-xxl">
							<!--begin::Wrapper-->
							<div class="d-flex align-items-center">
								<!--begin::Logo-->
								<div class="d-flex align-items-center me-8">
									<!--begin::Mobile menu toggle-->
									<button class="btn btn-icon btn-active-color-primary me-3 d-flex d-lg-none ms-n2" id="kt_landing_menu_toggle">
										<!--begin::Svg Icon | path: icons/duotune/abstract/abs015.svg-->
										<span class="svg-icon svg-icon-1">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor" />
												<path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor" />
											</svg>
										</span>
										<!--end::Svg Icon-->
									</button>
									<!--end::Mobile menu toggle-->
									<!--begin::Logo image-->
									<a href="https://bizcom.wr.io/" target="_blank">
										<img alt="Logo" src="https://bizcom.wr.io/assets/media/logos/default-inv.png" class="h-40px" />
									</a>
									<!--end::Logo image-->
								</div>
								<!--end::Logo-->
								<!--begin::Menu wrapper-->
								<div class="d-lg-block">
									<div class="d-lg-block p-5 p-lg-0" data-kt-drawer="true" data-kt-drawer-name="landing-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="200px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_landing_menu_toggle" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav_wrapper'}">
										<!--begin::Menu-->
										<div class="menu menu-column flex-nowrap menu-rounded menu-lg-row menu-title-dark menu-state-title-primary nav nav-flush fs-3 fw-semibold" id="kt_landing_menu">
											<!--begin::Menu item-->
											<div class="menu-item">
												<!--begin::Menu link-->
												<a class="menu-link active nav-link py-3 px-4 px-xxl-6" href="#">Course</a>
												<!--end::Menu link-->
											</div>
											<!--end::Menu item-->
											<!--begin::Menu item-->
											<div class="menu-item">
												<!--begin::Menu link-->
												<a class="menu-link nav-link py-3 px-4 px-xxl-6" href="author">Author</a>
												<!--end::Menu link-->
											</div>
											<!--end::Menu item-->
											<!--begin::Menu item-->
											<div class="menu-item">
												<!--begin::Menu link-->
												<a class="menu-link nav-link py-3 px-4 px-xxl-6" href="project">Project</a>
												<!--end::Menu link-->
											</div>
											<!--end::Menu item-->
											<!--begin::Menu item-->
											<div class="menu-item">
												<!--begin::Menu link-->
												<a class="menu-link nav-link py-3 px-4 px-xxl-6" href="faq">FAQ</a>
												<!--end::Menu link-->
											</div>
											<!--end::Menu item-->
											<!--begin::Menu item-->
											<div class="menu-item">
												<!--begin::Menu link-->
												<a class="menu-link nav-link py-3 px-4 px-xxl-6" href="franchise">Franchise</a>
												<!--end::Menu link-->
											</div>
											<!--end::Menu item-->
										</div>
										<!--end::Menu-->
									</div>
								</div>
								<!--end::Menu wrapper-->
								<!--begin::Toolbar-->
								<div class="flex-equal text-end ms-1 position-relative z-index-2">
									<a href="login" class="btn btn-danger" data-kt-scroll-toggle="true" data-kt-drawer-dismiss="true">Login</a>
								</div>
								<!--end::Toolbar-->
							</div>
							<!--end::Wrapper-->
						</div>
						<!--end::Container-->
					</div>
					<!--end::Header-->
				</div>
				<!--end::Header Section-->
	
	
					<!--begin::Title-->
					<h3 class="fs-lg-3tx fs-3x text-dark text-center lh-base position-relative z-index-2" data-kt-scroll-offset="{default: 100, lg: 150}"></h3>
					<!--end::Title-->
				<!--begin::Coming soon-->
				<div class="container d-flex flex-column flex-center">
					<div class="py-5">
					<!--begin::Information--><div class="d-flex align-items-center rounded py-5 px-5 bg-light-info">    <!--begin::Icon-->	  <!--begin::Svg Icon | path: icons/duotune/general/gen044.svg-->
		<span class="svg-icon svg-icon-3x svg-icon-info me-5"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
		<rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="currentColor"></rect>
		<rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="currentColor"></rect>
		</svg>
		</span>
		<!--end::Svg Icon-->    <!--end::Icon-->    <!--begin::Description-->    <div class="text-gray-700 fw-bold fs-6">
						Secure your pre-access to the <a href="https://bizcom.wr.io/" target="_blank">service</a> by joining our course today!
						</div>    <!--end::Description--></div><!--end::Information-->        </div>
				</div>
				<!--end::Coming soon-->
				<!--begin::Features section-->
				<div class="mb-0">
					<!--begin::Wrapper-->
					<!--begin::Features section-->
					<div class="container-xxl">
						<!--begin::Card-->
						<div class="card mb-8 border-0 bg-primary overflow-hidden mb-lg-15 z-index-2">
							<!--begin::Body-->
							<div class="card-body text-center my-9">
								<!--begin::Title-->
								<div class="fs-lg-3tx fs-2x fw-bold text-white pt-lg-20 mt-lg-4 mb-lg-20 mb-10 pb-2 position-relative z-index-2">
									<span class="d-block mb-8">The Big Wins of a Small Business Owner</span>
									<h1 class="fs-lg px-20 fw-bold text-gray-900 mb-7 lh-base">A Step-by-Step Evergreen Simple but Effective Strategies to Launching, Automating, and Optimizing Your Business with Community Building</h1>
								<!--begin::Form-->
								<br>
								<form class="form fv-row" id="kt_coming_soon_form">
								  <!--begin::Input group-->
								  <div id="emailForm" class="d-flex flex-center">
									<!--begin::Input-->
									<input id="emailInput" class="form-control form-control-lg form-control-solid w-md-250px m-2" type="email" name="email" placeholder="Email Address" autocomplete="off" required />
									<!--end::Input-->
									<!--begin::Action-->
									<button type="button" id="kt_coming_soon_submit" class="btn btn-lg btn-danger fw-bold m-2 text-nowrap">
									  <span class="indicator-label">Get great value at no cost</span>
									  <span class="indicator-progress">Please wait...
										<span class="spinner-border spinner-border-sm align-middle ms-2"></span>
									  </span>
									</button>
									<!--end::Action-->
								  </div>
	
									<script type="text/javascript" src="https://bizcom.wr.io/assets/js/airtable.browser.js"></script>
									
								  <script type="module">
									var Airtable = require('airtable')
									
									var base = new Airtable({apiKey: '`+config.AIRTABLE_API_KEY+`}).base(`+config.AIRTABLE_BASE+`);
	
									function subscribe(email) {
										base('Subscribers').create([
											{
												"fields": {
													"Email": email,
												}
											}
										], function(err, records) {
											if (err) {
												console.error(err);
												return;
											}
											records.forEach(function (record) {
												console.log(record.getId());
											});
										});
										setTimeout(function() {
											window.location.href = "thank_you";
										}, 500);
									}
	
									// Add a click event listener to the button
									var button = document.getElementById("kt_coming_soon_submit");
									button.addEventListener("click", function(event) {
									  var emailInput = document.getElementById('emailInput').value;
									  if (isValidEmail(emailInput)) {
										// Execute existing functionality
												subscribe(emailInput);
									  }
									});
	
	
										// Add a submit event listener to the form
									var form = document.getElementById("kt_coming_soon_form");
									form.addEventListener("submit", function(event) {
									  event.preventDefault(); // Prevent form from submitting normally
	
									  var emailInput = document.getElementById('emailInput').value;
									  if (isValidEmail(emailInput)) {
												// Execute existing functionality
												subscribe(emailInput);
									  }
									});
	
									// Email validation function
									function isValidEmail(email) {
									  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
									  return regex.test(email);
									}
								  </script>
								  <!--end::Input group-->
								</form>
								<!--end::Form-->
								<br>
								<img src="/assets/media/price.png" class="" alt="" /></div>
								<!--end::Title-->
								<h5 class="px-20 text-gray-900 lh-base">* Formerly a $999/month private program, it's now free and open to the public<br>to aid <a href="/project" class="text-white">1 million micro-enterprises globally</a>, many of which are unable to pay</h5>
							</div>
							<!--end::Body-->
						</div>
						<!--end::Card-->
					</div>
					<!--end::Features section-->
					<!--end::Wrapper-->
				</div>
				<!--end::Features section-->
	
	
	
				<!--begin::Visual section-->
				<div class="pt-md-20 mb-lg-5">
					<!--begin::Container-->
					<div class="container course">
						<!--begin::Plans-->
						<div class="d-flex flex-column position-relative z-index-2">
							<!--begin::Title-->
							<h1 class="fs-lg-2tx fs-2x fw-bold text-dark text-center lh-base">From Author</h1>
							<!--end::Title-->
							<div class="row">
								<!--begin::Item-->
								<div class="col-lg-2 mb-lg-0">
								</div>
								<!--end::Item-->
								<!--begin::Item-->
								<div class="col-lg-8 mb-lg-0">
									<!--begin::Text-->
									<div class="mb-7">
												<!--begin::Blog-->
												<div class="mb-13">
													<!--begin::Section-->
													<div class="fs-5 fw-semibold text-gray-600 mt-4 mx-20">
														<!--begin::Text-->
														<!--begin::Wrapper-->
														<div class="d-flex flex-column flex-md-row">
															<!--begin::Item-->
															<div class="pe-7 py-10">
																<!--begin::Text-->
																<div class="mb-7">
																	<h3 class="text-dark fw-bold mb-3 lh-base">Mastering Business</h3>
																	<span class="text-gray-700 d-block fw-semibold fs-4">I aim to create a business framework, not just a course, with universal approaches that work for any business under any conditions. My goal is to identify patterns and regularities and break them down into simple blocks and processes. With these, anyone can assemble a successful business of any type.<br><br>
	Completing this course will equip you with the essential knowledge and skills to grow and expand your business further on the <a href="https://bizcom.wr.io/">BizCom</a> platform.
	<br>&nbsp;</span>
																</div>
																<!--end::Text-->
																<!--begin::Item-->
																<div class="d-flex align-items-center">
																	<!--begin::Avatar-->
																	<div class="symbol symbol-50px symbol-circle me-4">
																		<img src="https://bizcom.wr.io/assets/media/author_s.jpg" class="" alt="" />
																	</div>
																	<!--end::Avatar-->
																	<!--begin::User-->
																	<div class="flex-grow-1">
																		<a href="author" class="text-dark fw-bold text-hover-primary fs-6">Alexey Anshakov</a>
																		<span class="text-gray-400 d-block fw-semibold fs-6">Your Business Coach</span>
																	</div>
																	<!--end::User-->
																</div>
																<!--end::Item-->
															</div>
															<!--end::Item-->
														</div>
														<!--end::Wrapper-->
														<!--end::Text-->
													</div>
													<!--end::Section-->
												</div>
												<!--end::Blog-->
									</div>
									<!--end::Text-->
								</div>
								<!--end::Item-->
								<!--begin::Item-->
								<div class="col-lg-2 mb-lg-0">
								</div>
								<!--end::Item-->
							</div>
	
	
						</div>
						<!--end::Plans-->
					</div>
					<!--end::Container-->
				</div>
				<!--end::Visual section-->
				<!--end::Wrapper-->
	
				<!--end::Projects Section-->
				<!--begin::Footer Section-->
				<div class="mb-0">
					<!--begin::Wrapper-->
					<div class="landing-dark-bg pt-lg-20 pt-5">
						<!--begin::Separator-->
						<div class="separator separator-solid"></div>
						<!--end::Separator-->
						<!--begin::Container-->
						<div class="container">
							<!--begin::Wrapper-->
							<div class="d-flex flex-column flex-md-row flex-stack py-8">
								<!--begin::Copyright-->
								<div class="d-flex align-items-center order-2 order-md-1">
									<!--begin::Logo-->
									<a href="#top">
										<img alt="Logo" src="https://bizcom.wr.io/assets/media/logos/default-inv.png" class="h-25px h-md-30px" />
									</a>
									<!--end::Logo image-->
									<!--begin::Logo image-->
									<span class="mx-5 fs-6 fw-semibold text-gray-700 pt-1">&copy; WRIO Ltd 2023</span>
									<!--end::Logo image-->
								</div>
								<!--end::Copyright-->
								<!--begin::Menu-->
								<ul class="menu menu-gray-700 menu-hover-primary fw-semibold fs-5 fs-md-5 order-1 mb-5 mb-md-0">
									<li class="menu-item">
										<a href="https://wr.io" target="_blank" class="menu-link px-2">About</a>
									</li>
									<li class="menu-item">
										<a href="mailto:info@wr.io?subject=Support" target="_blank" class="menu-link px-2">Support</a>
									</li>
								</ul>
								<!--end::Menu-->
							</div>
							<!--end::Wrapper-->
						</div>
						<!--end::Container-->
					</div>
					<!--end::Wrapper-->
				</div>
				<!--end::Footer Section-->
				<!--begin::Scrolltop-->
				<div id="kt_scrolltop" class="scrolltop" data-kt-scrolltop="true">
					<!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg-->
					<span class="svg-icon">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
							<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
						</svg>
					</span>
					<!--end::Svg Icon-->
				</div>
				<!--end::Scrolltop-->
			</div>
			<!--end::Root-->
			<!--begin::Scrolltop-->
			<div id="kt_scrolltop" class="scrolltop" data-kt-scrolltop="true">
				<!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg-->
				<span class="svg-icon">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
						<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
					</svg>
				</span>
				<!--end::Svg Icon-->
			</div>
			<!--end::Scrolltop-->
			<!--begin::Javascript-->
			<script>var hostUrl = "";</script>
			<!--begin::Global Javascript Bundle(used by all pages)-->
			<script src="https://bizcom.wr.io/assets/plugins/global/plugins.bundle.js"></script>
			<script src="https://bizcom.wr.io/assets/js/scripts.bundle.js"></script>
			<!--end::Global Javascript Bundle-->
			<!--begin::Vendors Javascript(used by this page)-->
			<script src="https://bizcom.wr.io/assets/plugins/custom/fslightbox/fslightbox.bundle.js"></script>
			<!--end::Vendors Javascript-->
			<!--begin::Custom Javascript(used by this page)-->
			<script src="https://bizcom.wr.io/assets/js/custom/pages/pricing/general.js"></script>
			<script src="https://bizcom.wr.io/assets/js/widgets.bundle.js"></script>
			<script src="https://bizcom.wr.io/assets/js/custom/widgets.js"></script>
			<script src="https://bizcom.wr.io/assets/js/custom/apps/chat/chat.js"></script>
			<!--end::Custom Javascript-->
			<!--begin::Custom Javascript(used by this page)-->
			<script src="https://bizcom.wr.io/assets/js/custom/authentication/sign-up/coming-soon.js"></script>
			<!--end::Custom Javascript-->
			<!--end::Javascript-->
		</body>
		<!--end::Body-->
	</html>
	
`;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};
