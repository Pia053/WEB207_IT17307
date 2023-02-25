window.DangKiTaiKhoan = function ($rootScope, $scope, $http) {
  $rootScope.listsTaiKhoan = [];
  $scope.taiKhoan = {
    id: "",
    hoTen: "",
    tenDangNhap: "",
    matKhau: "",
    email: "",
    gioiTinh: false,
    diaChi: "",
    role: "2",
  };
  // get
  $http.get(taiKhoanAPI).then(function (response) {
    if (response.statusText === "OK") {
      $scope.listsTaiKhoan = response.data;
      console.log($scope.listsTaiKhoan);
    }
  });
  // post - push
  $scope.dangKi = function (event) {
    event.preventDefault();
    let taiKhoan = $scope.taiKhoan;
    taiKhoan.id = Math.floor(Math.random() * 100) + 1;
    taiKhoan.role = 2;
    $http.post(taiKhoanAPI, taiKhoan).then(function (response) {
      $scope.listsTaiKhoan.push(response.data);
      alert("Đăng Kí thành Công");
      window.location.href = "#login";
    });
  };
};
