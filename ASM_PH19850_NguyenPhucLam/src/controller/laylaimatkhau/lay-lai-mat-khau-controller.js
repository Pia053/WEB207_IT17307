window.LayLaiMatKhau = function ($scope, $rootScope, $http) {
  $rootScope.listsTaiKhoan = [];

  $http.get(taiKhoanAPI).then(function (response) {
    console.log(response.data);
    if (response.statusText === "OK") {
      $rootScope.listsTaiKhoan = response.data;
    }
  });

  $scope.layLaiMatKhau = function () {
    let check = 0;
    for (let i = 0; i < $rootScope.listsTaiKhoan.length; i++) {
      if ($rootScope.listsTaiKhoan[i].tenDangNhap == $scope.tenDangNhap) {
        alert(
          "Thông Tin Tài Khoản: Tên Đăng Nhập: " +
            $rootScope.listsTaiKhoan[i].tenDangNhap +
            " - " +
            "Mật Khẩu: " +
            $rootScope.listsTaiKhoan[i].matKhau
        );
        console.log($rootScope.listsTaiKhoan[i].tenDangNhap);
        check = 1;
        console.log(check);
      }
    }
    if (check == 0) {
      alert("Tài Khoản Không Tồn Tại");
    }
  };
};
