window.GetCategory = function ($http, $scope, $rootScope) {
  $rootScope.listsThuocTinh = [];
  $scope.formThuocTinh = {
    id: "",
    tenThuocTinh: "",
  };
  $scope.viTri = -1;
  // Get list
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
  // detail
  $scope.detailThuocTinh = function (event, index) {
    event.preventDefault();
    $scope.formThuocTinh.tenThuocTinh =
    $rootScope.listsThuocTinh[index].tenThuocTinh;

    $scope.viTri = index;
  };

  // addd
  $scope.saveThuocTinh = function (event) {
    event.preventDefault();
    let thuocTinh = $scope.formThuocTinh;
    thuocTinh.id = Math.floor(Math.random() * 100) + 1;
    $http.post(thuocTinhAPI, thuocTinh).then(
      function (response) {
        if (response.statusText === "OK") {
          alert("Thêm Thuộc Tính Thành Công");
          $rootScope.listsThuocTinh.push(response.data);
        }
      },
      function (e) {
        console.log(e);
        alert("Thêm Thuộc Tính Không Thành Công");
      }
    );
  };
  // delete
  $scope.deleteThuocTinh = function (event, index) {
    event.preventDefault();
    $http.delete(`${thuocTinhAPI}/${$rootScope.listsThuocTinh[index].id}`).then(
      function (response) {
        if (response.statusText === "OK") {
          $rootScope.listsThuocTinh = response.data;
          alert("Xóa Thành Công");
        }
      },
      function (e) {
        alert("Xóa Không Thành Công");
      }
    );
  };
  //update
  $scope.updateThuocTinh = function (event) {
    event.preventDefault();
    if ($scope.viTri == -1) {
      alert("Yêu Cầu chọn Thuộc Tính");
    } else {
      $http
        .put(
          `${thuocTinhAPI}/${$rootScope.listsThuocTinh[$scope.viTri].id}`,
          $scope.formThuocTinh
        )
        .then(
          function (response) {
            if (response.tatusText == "OK") {
              $rootScope.listsThuocTinh[$scope.viTri] = response.data;
              alert("Cập Nhập Thành Công");
            }
          },
          function (e) {
            console.log(e);
          }
        );
    }
  };
};
