'use strict';

// Register `itemDetail` component, along with its associated controller and template
angular.
  module('itemDetail').
  component('itemDetail', {
    templateUrl: 'templates/item-detail.template.html',
    controller: ['$http', '$routeParams',
      function ItemDetailController($http, $routeParams) {
        var self = this;

				var var1 = $routeParams.itemId;
				self.itemId = var1;
				var ca_item_ref = "0000";

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };

				if ($routeParams.itemId.length == 2) { 
					ca_item_ref = "00"+$routeParams.itemId
				} else if ($routeParams.itemId.length == 3) {
					ca_item_ref = "0"+$routeParams.itemId
				}
				self.ca_item_ref = ca_item_ref;

        $http.get('http://169.61.209.207:31078/catalogManager/items/' + ca_item_ref).then(function(response) {

					self.item = response.data.DFH0XCMNOperationResponse.ca_inquire_single.ca_single_item;

        });

        $http.get('items/item' + $routeParams.itemId + '.json').then(function(response2) {
          self.itemDetails = response2.data;
          self.setImage(self.itemDetails.images[0]);

        });
      }
    ]
  });
