window.TopGiayBanChayNew = function ($scope, $rootScope, $http) {
  $scope.listsTopGiayBanChay = [];
  $scope.listsTopGiayNew = [];
  $http.get(giaySneaker).then(function (response) {
    if (response.statusText === "OK") {
      for (var i = 0; i < response.data.length; i++) {
        if (i < 3) {
          $scope.listsTopGiayBanChay.push(response.data[i]);
          console.log(response.data[i]);
        }
      }
      for (
        let i = 0;
        i < response.data.sort((a, b) => b.id - a.id).length;
        i++
      ) {
        if (i < 3) {
          $scope.listsTopGiayNew.push(
            response.data.sort((a, b) => b.id - a.id)[i]
          );
        }
      }
    }
  });
};
