(function() {
  'use strict';

  angular
    .module('app.authorization')
    .controller('AuthorizationRecordController',AuthorizationRecordController);

    /* @ngInject */
    function AuthorizationRecordController(config,utils,authorizationService){
      var vm = this;

      vm.tableParams=createTableParams();

      function createTableParams() {
        return new utils.NgTableParams({},{
          getData:function(params){
            return authorizationService.recordQuery(angular.extend({},params.transform())).then(utils.renderCommonTable(params))
          }
        });
      }
    }
})()