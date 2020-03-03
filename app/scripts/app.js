angular.module("myCoins", ["ui.router"]);

angular.module("myCoins").config(function($stateProvider) {
  $stateProvider
    .state("adminPage", {
      url: "/admin-login",
      templateUrl: "/app/admin-login.html"
    })
    .state("usrPage", {
      url: "/user-page",
      templateUrl: "/app/user-page.html"
    })
    .state("adminHome",{
      url:"/admin-home",
      templateUrl:"/app/admin-home.html",
    })
    .state("inputPage",{
      url:"/input-data",
      templateUrl:"/app/input-data.html",
    });
});

angular.module("myCoins").controller("inputCtrl",function($scope){
  $scope.formData={
    title:"Dollar",
    desc:"Sample Dollar description",
    id: '1'
  };
  $scope.showData=$scope.formData;
})


angular.module("myCoins").controller("uploadImg",function($scope)
{
  
})