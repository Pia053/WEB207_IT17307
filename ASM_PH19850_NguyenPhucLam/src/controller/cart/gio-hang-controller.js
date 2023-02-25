window.CartSanPham = function ($scope, $rootScope, $http, $routeParams) {
  $rootScope.listsSanPhamCart = [];
  $rootScope.listsGiaySneaker = [];
  $rootScope.indexItemCart = 0;
  $rootScope.formSanPham = {
    ten: "",
    gia: 0,
    soLuong: 0,
    thuocTinh: "",
    thuongHieu: "",
    anh: "",
    id: "",
  };
  let id = $routeParams.id;
  // add giỏ hàng trùng
  // lấy ra id xong dùng for lặp add vào form
  console.log("ID Giày:" + id);
  $http.get(`${giaySneaker}/${id}`).then(
    function (response) {
      $http
        .post(cartAPI, {
          ten: response.data.ten,
          gia: response.data.gia,
          soLuong: 1,
          thuocTinh: response.data.thuocTinh,
          thuongHieu: response.data.thuongHieu,
          anh: response.data.anh,
          id: response.data.id,
        })
        .then(
          function (response) {
            if (response.statusText === "OK") {
              $rootScope.listsSanPhamCart.push(response.data);
            }
          },
          function (e) {
            console.log(e);
          }
        );
    },
    function (e) {
      console.log(e);
    }
  );
  $scope.thanhToan = function () {
    for (let i = 0; i < $rootScope.listsSanPhamCart.length; i++) {
      console.log($rootScope.listsSanPhamCart[i].soLuong);
    }
  };

  // lấy ra
  $http.get(cartAPI).then(function (response) {
    if (response.statusText === "OK") {
      $rootScope.listsSanPhamCart = response.data;
      $rootScope.indexItemCart += response.data.length;
    }
  });
  // tổng giá
  $scope.tongGia = function () {
    var tongGia = 0;
    for (var i = 0; i < $scope.listsSanPhamCart.length; i++) {
      if ($scope.listsSanPhamCart[i].chon) {
        console.log($scope.listsSanPhamCart[i].chon);
        console.log($rootScope.listsSanPhamCart[i].id);
        tongGia +=
          $rootScope.listsSanPhamCart[i].gia *
          $rootScope.listsSanPhamCart[i].soLuong;
      }
    }
    return tongGia;
  };
  // xóa card
  $scope.deleteCart = function (event, index) {
    event.preventDefault();
    $http
      .delete(`${cartAPI}/${$scope.listsSanPhamCart[index].id}`)
      .then(function (response) {
        if (response.statusText === "OK") {
          $rootScope.listsSanPhamCart = response.data;
        }
      });
  };
  // số lượng giỏ hàng
  for (let i = 0; i < $rootScope.listsSanPhamCart.length; i++) {
    console.log(i);
  }

  //
  $scope.thanhToan = function () {
    if ($scope.taiKhoan == null) {
      alert("Yêu cầu Đăng Nhập");
      window.location.href = "#login";
    } else {
      for (var i = 0; i < $scope.listsSanPhamCart.length; i++) {
        if ($scope.listsSanPhamCart[i].chon) {
          window.location.href = "#checkout";
        }
      }
    }
  };
  //
  console.log();
};
