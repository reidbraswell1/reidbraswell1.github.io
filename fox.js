$(document).ready(function() {
  document.getElementById("myBtn").addEventListener("click", getImage);
  console.log("document.ready")
  jQuery.get();
});

function getImage() {
  console.log("getImage")
  const URL = "https://cors-anywhere.herokuapp.com/https://randomfox.ca/floof/"
  var settings = {
    'cache': false,
    'dataType': "json",
    'contentType': "application/html; charset=utf-8",
    "async": true,
    "crossDomain": true,
    "url": URL,
    "method": "GET",
    "headers": {
      "accept": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  }
  jQuery.ajax(settings)
    .done(function(response) {
      console.log(`response=${JSON.stringify(response)}`);
      $("#fox-image").attr("src", response.image);
      $("#fox-text-area").text(JSON.stringify(response,null,4));
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.log(`textStatus=${textStatus}`);
      console.log(`errorThrown=${errorThrown}`)
    });
}
