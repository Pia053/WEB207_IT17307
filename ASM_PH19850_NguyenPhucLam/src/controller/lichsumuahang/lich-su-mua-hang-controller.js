window.LichSuMuaHang = function ($http, $rootScope, $scope) {
  $scope.listsLichSuMuaHang = [];
  $scope.v = [];

  $http.get(lichSuMuaHangAPI).then(function (response) {
    $scope.listsLichSuMuaHang = response.data;
    for (let i = 0; i < $scope.listsLichSuMuaHang.length; i++) {
      if ($scope.listsLichSuMuaHang[i].taiKhoanMuaHang == $rootScope.taiKhoan) {
        console.log($scope.listsLichSuMuaHang[i].taiKhoanMuaHang);
        $scope.listsLichSuMuaHangTaiKhoan = $scope.listsLichSuMuaHang[i];
        console.log($scope.listsLichSuMuaHangTaiKhoan.id);
      }
    }
  });
};
