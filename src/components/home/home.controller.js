export default ['$scope', ($scope) => {
  $scope.title = 'Поиск артистов';

  $scope.query = ''

  $scope.list = [
    {id:1, name: 'Pink Floyd'},
    {id:2, name: 'Genesis'},
    {id:3, name: 'U2'},
    {id:4, name: 'Kraftwerk'},
    {id:5, name: 'Oasis'}
  ];

  $scope.sendQuery = function(evt){
    evt && evt.preventDefault();
  }
}]