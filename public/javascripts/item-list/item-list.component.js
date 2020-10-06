'use strict';

// Register `itemList` component, along with its associated controller and template
angular.
  module('itemList').
  component('itemList', {
    templateUrl: 'templates/item-list.template.html',
    controller: ['$http', function ItemListController($http) {
      var self = this;
      self.orderProp = 'ca_description';

      $http.get('http://esysmvs.wsclab.washington.ibm.com:39555/catalogManager/items?startItemID=0010',
	       {
          		headers: {Authorization: 'Basic amJpbGw6dGhvcjEz'},
        	}          
      	)
	       .then(function(response) {

			self.items = response.data.DFH0XCMNOperationResponse.ca_inquire_request.ca_cat_item;
	
      });
    }]
  });
