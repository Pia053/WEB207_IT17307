window.GetGiaySneaker = function ($scope, $http, $rootScope, $routeParams) {
  $rootScope.listsGiaySneaker = [];
  $rootScope.listsThuocTinh = [];
  $rootScope.quanLyGiay = {
    id: "",
    ten: "",
    gia: 0,
    soLuong: 0,
    size: 0,
    thuocTinh: "",
    thuongHieu: " ",
    anh: "",
    tenDangNhap: "",
  };
  $scope.c_filter = {
    thuocTinh: {},
  };
  $scope.viTriIndex = -1;
  $http.get(thuocTinhAPI).then(
    function (response) {
      if (response.statusText === "OK") {
        $rootScope.listsThuocTinh = response.data;
      }
    },
    function (e) {
      console.log(e);
    }
  );
  $http.get(giaySneaker).then(
    function (response) {
      if (response.statusText === "OK") {
        $rootScope.listsGiaySneaker = response.data;
      }
    },
    function (e) {
      console.log(e);
    }
  );
  // get theo id
  let id = $routeParams.id;
  $http.get(`${giaySneaker}/${id}`).then(
    function (response) {
      if (response.statusText === "OK") {
        $rootScope.listsGiaySneaker = response.data;
      }
    },
    function (e) {
      console.log(e);
    }
  );

  $scope.filterByCategory = function (c) {
    console.log(c.tenThuocTinh);
    $scope.c_filter.thuocTinh = c.tenThuocTinh;
  };
  //detail
  $scope.detailGiaySneaker = function (event, index) {
    event.preventDefault();
    $http
      .get(`${giaySneaker}/${$rootScope.listsGiaySneaker[index].id}`)
      .then(function (response) {
        if (response.statusText === "OK") {
          $scope.quanLyGiay.id = response.data.id;
          $scope.quanLyGiay.ten = response.data.ten;
          $scope.quanLyGiay.gia = response.data.gia;
          $scope.quanLyGiay.soLuong = response.data.soLuong;
          $scope.quanLyGiay.size = response.data.size;
          $scope.quanLyGiay.thuocTinh = response.data.thuocTinh;
          $scope.quanLyGiay.thuongHieu = response.data.thuongHieu;
          $scope.quanLyGiay.anh = response.data.anh;
        }
      });
    $scope.viTriIndex = index;
  };
  //delete
  $scope.deleteGiaySneaker = function (event, index) {
    event.preventDefault();
    $http.delete(`${giaySneaker}/${$scope.listsGiaySneaker[index].id}`).then(
      function (response) {
        if (response.statusText === "OK") {
          $scope.listsGiaySneaker = response.data;
          alert("Xóa Thành Công");
        }
      },
      function (e) {
        console.log(e);
        alert("Xóa Không Thành Công");
      }
    );
  };
  // save
  $scope.saveGiay = function (event) {
    event.preventDefault();
    let dataForm = $scope.quanLyGiay;
    dataForm.id = Math.floor(Math.random() * 100) + 1;
    console.log(dataForm.id);
    $http.post(giaySneaker, dataForm).then(function (response) {
      if (response.statusText === "OK") {
        $scope.listsGiaySneaker.push(response.data);
      }
    });
  };

  // update
  $scope.updateGiay = function (event) {
    event.preventDefault();
    if ($scope.viTriIndex == -1) {
      alert("Chọn giày để cập nhập");
    } else {
      $http
        .put(
          `${giaySneaker}/${$scope.listsGiaySneaker[$scope.viTriIndex].id}`,
          $scope.quanLyGiay
        )
        .then(function (response) {
          $scope.listsGiaySneaker[$scope.viTriIndex] = response.data;
          alert("Cập nhập thành công");
        });
    }
  };

  ///index cart menu
};
