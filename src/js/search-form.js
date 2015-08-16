function SearchForm(searchForm){
  'use strict';
  
  var LOCATION_SERVICE_API = 'http://location-backend-service.herokuapp.com/locations';

  searchForm.on('click', '#searchButton', function(){
    var name = $('#locationInput', searchForm).val(),
        filter = name ? '?name=' + name : '' ;

    $.ajax({
      url: LOCATION_SERVICE_API + filter,
      success: function(data){
        $(document).trigger('searched', data);
      }
    })
  });
}
