$(document).ready(function() {
    var source = $("#homepageTemplate").html();
    var template = Handlebars.compile(source);
  
    // Make API call or provide data for the template
    // ...
    var query = ''
$.ajax({
    method: 'GET',
    url: 'https://api.calorieninjas.com/v1/nutrition?query=' + query,
    headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

var formData = new FormData();
formData.append('file', $('#imagefile')[0].files[0]);
$.ajax({
    method: 'POST',
    url: 'https://api.calorieninjas.com/v1/imagetextnutrition',
    data: formData,
    enctype: 'multipart/form-data',
    processData: false,
    contentType: false, 
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText);
    }
});

var query = ''
$.ajax({
    method: 'GET',
    url: 'https://api.calorieninjas.com/v1/recipe?query=' + query,
    headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
    // Render the template with the data
    // ...
  
    // Other JavaScript code specific to the homepage
    // ...
  });
  