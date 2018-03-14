export default ['$http', 'apiKey', function($http, apiKey){

  return {

    artists:[],

    getArtists(query){
      return $http({
        method: 'GET',
        headers: apiKey,
        url: `http://api.guitarparty.com/v2/artists/?query=${ query.split(' ').join('+') }`
      });
    }

  }

}]