(function() {
  'use strict';

  angular
    .module('app.common')
    .factory('authorizationService',authorizationService);

    /* @ngInject */
    function authorizationService(api,utils,config,httpService) {
      var service={
          recordQuery : recordQuery
      };

      return service;

      function recordQuery(data){
        var config={
          url  : api.queryRecordAuthroization,
          data : data
        }

        return httpService.http(config).then(utils.getRemoteTableData);
      }
    }
})();