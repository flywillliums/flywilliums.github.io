
function getQuote() {
    $.getJSON("https://api.whatdoestrumpthink.com/api/v1/quotes/random/", function(response){
      var DonQuote = JSON.stringify(response.message);
      $("#js-quote-text").html("<b><i>"+DonQuote+"</i></b>");
    });
  }
  $(document).ready(function() {
    getQuote();
    $("#js-new-quote").on("click", getQuote);
  });
