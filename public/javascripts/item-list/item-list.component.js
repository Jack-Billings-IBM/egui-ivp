'use strict';

// Register `itemList` component, along with its associated controller and template
angular.
  module('itemList').
  component('itemList', {
    templateUrl: 'templates/item-list.template.html',
    controller: ['$http', function ItemListController($http) {
      var self = this;
      self.orderProp = 'ca_description';

      $http.get('http://catalogmanager-http-wazi.mycluster-dal10-b-757928-43c2ef432ca78feaa5f623952e817c97-0000.us-south.containers.appdomain.cloud:32360/catalogManager/items?startItemID=0010').then(function(response) {

			self.items = response.data.DFH0XCMNOperationResponse.ca_inquire_request.ca_cat_item;
	
      });
    }]
  });
