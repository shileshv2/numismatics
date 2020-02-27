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
    });
});
