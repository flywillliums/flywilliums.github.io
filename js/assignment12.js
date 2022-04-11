
function getQuote() {
    $.getJSON("https://api.whatdoestrumpthink.com/api/v1/quotes/random/", function(response){
      var DonQuote = JSON.stringify(response.message);
      $("#js-quote-text").html("<b><i>"+DonQuote+"</i></b>");
      var authors = ["mini hands","donald twump","a racist",
                   "poop meister","orange julius","sir dookie donald",
                   "lord voldemort","butt sniffer","swampy johns","plastic man", 
                   "butt scratcher"]
    var rand = Math.floor(Math.random()* (authors.length));
    $("#authorHere").html("<b><i>"+" -"+authors[rand]+"</i></b>");
    });
  }
  $(document).ready(function() {
    getQuote();
    $("#js-new-quote").on("click", getQuote);
  });
