const myApp = angular.module("myModule", ["ngRoute"]);
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/home-page", {
      templateUrl: "pages/home-page.html",
      controller: TopGiayBanChayNew,
    })
    .when("/register-account", {
      templateUrl: "pages/rigister-account.html",
      controller: DangKiTaiKhoan,
    })
    .when("/product-management", {
      templateUrl: "pages/product-management.html",
      controller: GetGiaySneaker,
    })
    .when("/login", {
      templateUrl: "pages/login.html",
      controller: DangNhapTaiKhoan,
    })
    .when("/category-management", {
      templateUrl: "pages/category-management.html",
      controller: GetCategory,
    })
    .when("/introduce", {
      templateUrl: "pages/introduce.html",
    })
    .when("/product", {
      templateUrl: "pages/product.html",
      controller: GetGiaySneaker,
    })
    .when("/change-password", {
      templateUrl: "pages/change-password.html",
      controller: LayLaiMatKhau,
    })
    .when("/detail-product/:id", {
      templateUrl: "pages/detail-product.html",
      controller: GetGiaySneaker,
    })
    .when("/cart", {
      templateUrl: "pages/cart.html",
      controller: CartSanPham,
    })
    .when("/cart/:id", {
      templateUrl: "pages/cart.html",
      controller: CartSanPham,
    })
    .when("/product-management", {
      templateUrl: "pages/product-management.html",
      controller: GetGiaySneaker,
    })
    .when("/introduce", {
      templateUrl: "pages/introduce.html",
    })
    .when("/news", {
      templateUrl: "pages/news.html",
    })
    .when("/checkout", {
      templateUrl: "pages/checkout.html",
    })
    .when("/checkout/:id", {
      templateUrl: "pages/checkout.html",
      controller: Checkout,
    })
    .when("/history", {
      templateUrl: "pages/history.html",
      controller: LichSuMuaHang,
    })
    .otherwise({
      redirectTo: "/home-page",
    });
});
