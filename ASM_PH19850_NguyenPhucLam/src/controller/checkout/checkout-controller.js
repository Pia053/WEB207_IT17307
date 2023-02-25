window.Checkout = function ($rootScope, $scope, $routeParams, $http) {
  $rootScope.listsSanPhamCheckout = [];
  console.log("checkout: " + $rootScope.taiKhoan);
  $scope.sanPhamCheckout = {
    id: "",
    tenSanPham: "",
    anh: "",
    soLuongThuc: 1,
    thuongHieu: "",
    gia: "",
    taiKhoanMuaHang: "",
    tenNguoiNhan: "",
    diaChi: "",
    soDienThoai: "",
  };
  let id = $routeParams.id;
  $http.get(`${giaySneaker}/${id}`).then(function (response) {
    if (response.statusText === "OK") {
      console.log(response.data);
      $rootScope.listsSanPhamCheckout.push(response.data);
    }
  });
  console;
  $scope.thanhToan = function (event) {
    event.preventDefault();
    if ($rootScope.taiKhoan == null) {
      alert("Yêu cầu Đăng Nhập");
      window.location.href = "#login";
      return;
    } else {
      let sanPhamMuaHang = $scope.sanPhamCheckout;
      sanPhamMuaHang.tenSanPham = $rootScope.listsSanPhamCheckout[0].ten;
      sanPhamMuaHang.taiKhoanMuaHang = $rootScope.taiKhoan;
      sanPhamMuaHang.id = Math.floor(Math.random() * 100) + 1;
      sanPhamMuaHang.anh = $rootScope.listsSanPhamCheckout[0].anh;
      sanPhamMuaHang.thuongHieu = $rootScope.listsSanPhamCheckout[0].thuongHieu;
      sanPhamMuaHang.gia = $rootScope.listsSanPhamCheckout[0].gia;
      sanPhamMuaHang.soLuongThuc = 1;
      console.log($scope.soLuong);
      $http.post(lichSuMuaHangAPI, sanPhamMuaHang).then(
        function (response) {
          if (response.statusText === "OK") {
            alert("Mua Hàng Thanh Công");
          }
        },
        function (e) {
          console.log(e);
        }
      );
    }
  };
};
