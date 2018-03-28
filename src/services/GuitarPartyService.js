export default ['$http', 'apiKey', function($http, apiKey){

  return {

    artists:[],

    getArtists(query){
      const queryStr = query.split(' ').join('+');
      
      return $http({
        method: 'GET',
        headers: apiKey,
        url: `http://api.guitarparty.com/v2/artists/?query=${ queryStr }`
      });
    }

  }

}]