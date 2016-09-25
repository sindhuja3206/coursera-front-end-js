'use strict';

angular.module('confusionApp')
.controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
  $scope.tab = 1;
  $scope.filtText = '';
  $scope.showDetails = false;

   $scope.dishes= menuFactory.getDishes();

  $scope.select = function(setTab, filter) {
    this.tab = setTab;
    this.filtText = filter;
  };

  $scope.isSelected = function(checkTab) {
    return (this.tab === checkTab);
  };

  $scope.toggleDetails = function() {
    $scope.showDetails = !$scope.showDetails;
  };

}])

.controller('ContactController', ['$scope', function($scope) {

           $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                              agree:false, email:"" };

            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
                          $scope.channels = channels;
              $scope.invalidChannelSelection = false;
       }])

       .controller('FeedbackController', ['$scope', function($scope) {
         $scope.sendFeedback = function() {
                               console.log($scope.feedback);
                               if ($scope.feedback.agree && ($scope.feedback.mychannel == "")&& !$scope.feedback.mychannel) {
                                 $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                                       agree:false, email:"" };
                    $scope.feedback.mychannel="";

                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
              }
       }])
       .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
            $scope.dish = menuFactory.getDish(parseInt($stateParams.id,10));
          }])

.controller('DishCommentController', ['$scope', function($scope) {

  var resetComment = function() {
    return {rating: 5, comment: '', author: ''}
  };

  $scope.comment = resetComment();

  $scope.numbers = [1, 2, 3, 4, 5];

  $scope.submitComment = function () {
      $scope.comment.date = new Date().toISOString();
      $scope.dish.comments.push($scope.comment);
      $scope.commentForm.$setPristine();
      $scope.comment = resetComment();
  }
}])
       ;
