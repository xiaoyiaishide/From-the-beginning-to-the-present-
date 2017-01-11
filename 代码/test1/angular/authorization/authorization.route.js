(function() {

  'use strict';

  angular
    .module('app.authorization')
    .config(routeConfig);

  function routeConfig($stateProvider) {
    $stateProvider
    ////////////////////////
    // 业务功能 > 授权管理 //
    ///////////////////////
    .state('features.authorization', {
      abstract: true,
      url: '/authorization',
      template: '<div ui-view></div>'
    })

    ///////////////////////////////////
    // 业务功能 > 授权管理 > 活动授权 //
    //////////////////////////////////
    .state('features.authorization.activity', {
      url: '/activity',
      templateUrl: 'app/authorization/views/authorization.activity.html',
      controller: 'AuthorizationActivityController',
      controllerAs: 'authorization'
    })


    ///////////////////////////////////
    // 业务功能 > 授权管理 > 授权记录 //
    //////////////////////////////////
    .state('features.authorization.record', {
      url: '/record',
      templateUrl: 'app/authorization/views/authorization.record.html',
      controller: 'AuthorizationRecordController',
      controllerAs: 'authorization'
    })
  }

})();