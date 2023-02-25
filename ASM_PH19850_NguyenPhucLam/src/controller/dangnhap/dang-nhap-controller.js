window.DangNhapTaiKhoan = function ($scope, $rootScope, $http) {
  $scope.listsTaiKhoan = [];

  // get;
  $http.get(taiKhoanAPI).then(function (response) {
    if (response.statusText === "OK") {
      $scope.listsTaiKhoan = response.data;
    }
  });

  $scope.dangNhapTaiKhoan = function () {
    for (var i = 0; i < $scope.listsTaiKhoan.length; i++) {
      if (
        $scope.listsTaiKhoan[i].tenDangNhap == $scope.tenDangNhap &&
        $scope.listsTaiKhoan[i].matKhau == $scope.matKhau &&
        $scope.listsTaiKhoan[i].role == 1
      ) {
        console.log($scope.listsTaiKhoan.index);
        alert("Đăng Nhập Thành Công Với Vai Trò Admin");
        window.location.href = "#home-pages";
        $rootScope.roleAdmin = 1;
        $rootScope.taiKhoan = $scope.listsTaiKhoan[i].tenDangNhap;
        $rootScope.viTriTaiKhoan = $scope.listsTaiKhoan.index;
        return;
      } else if (
        $scope.listsTaiKhoan[i].tenDangNhap == $scope.tenDangNhap &&
        $scope.listsTaiKhoan[i].matKhau == $scope.matKhau &&
        $scope.listsTaiKhoan[i].role == 2
      ) {
        window.location.href = "#home-pages";
        $rootScope.roleAdmin = 2;
        $rootScope.taiKhoan = $scope.listsTaiKhoan[i].tenDangNhap;
        $rootScope.viTriTaiKhoan = $scope.listsTaiKhoan.index;
        alert("Đăng Nhập Thành Công Với Vai Trò Khách Hàng");
        return;
      } else if (
        $scope.listsTaiKhoan[i].tenDangNhap != $scope.tenDangNhap ||
        $scope.listsTaiKhoan[i].matKhau != $scope.matKhau ||
        $scope.listsTaiKhoan[i].role == 2
      ) {
        alert("Tài Khoản Mật Khẩu");
      }
    }
  };
};
