document.addEventListener('DOMContentLoaded', function () {
    var tooltips = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipInstances = tooltips.map(function (tooltip) {
      var apiEndpoint = 'API_ENDPOINT'; // Replace with your API endpoint

      tooltip.addEventListener('shown.bs.tooltip', function () {
        // Get the food name and serving amount from the `data-food` attribute
        var foodData = tooltip.getAttribute('data-food').split(' ');
        var foodName = foodData[0];
        var servingAmount = foodData[1];

        // Make the API call to populate the tooltip content
        fetch(apiEndpoint)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            // Populate the tooltip content with the API response
            tooltip.setAttribute('data-bs-original-title', 'Food: ' + foodName + '<br>Serving Amount: ' + servingAmount + '<br>API Data: ' + data);
          });
      });

      return new bootstrap.Tooltip(tooltip);
    });
  });

  
/*
  document.addEventListener('DOMContentLoaded', function () {
    var tooltips = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

    tooltips.forEach(function (tooltip) {
      var apiEndpoint = 'API_ENDPOINT'; // Replace with your API endpoint

      tooltip.addEventListener('shown.bs.tooltip', function () {
        // Get the food name and serving amount from the `data-food` attribute
        var foodData = tooltip.getAttribute('data-food').split(' ');
        var foodName = foodData[0];
        var servingAmount = foodData[1];

        // Make the API call to populate the tooltip content
        fetch(apiEndpoint)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            // Populate the tooltip content with the API response
            tooltip.setAttribute('data-bs-original-title', 'Food: ' + foodName + '<br>Serving Amount: ' + servingAmount + '<br>API Data: ' + data);
          });
      });

      new bootstrap.Tooltip(tooltip);
    });
  });
  */