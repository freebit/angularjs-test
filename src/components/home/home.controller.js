export default ['$scope', 'GuitarPartyService', ($scope, GuitarPartyService) => {
  $scope.title = 'Поиск артистов';

  
  $scope.query = ''

  $scope.list = [
    // {id:1, name: 'Pink Floyd'},
    // {id:2, name: 'Genesis'},
    // {id:3, name: 'U2'},
    // {id:4, name: 'Kraftwerk'},
    // {id:5, name: 'Oasis'}
  ];

  $scope.sendQuery = function(evt){
    evt && evt.preventDefault();

    GuitarPartyService.getArtists(this.query)
    .then(
      
      (response) => {
        this.list = response.data.objects;
      },
      
      (err) => {
        console.log(err.data)
      }
    )
  }

  $scope.switchSortingOrder = function(){
    this.orderDesc = !this.orderDesc;
  }

  $scope.removeListItem = function(item){
    let currentIndex = this.list.indexOf(item);
    this.list.splice(currentIndex, 1);
  }
  
  $scope.orderDesc = false;
}]