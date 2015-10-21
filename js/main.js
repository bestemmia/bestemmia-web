$(document).ready(function(){
	
});

(function() {
  var flickerAPI = "https://api.github.com/repos/videojs/video-js-swf/commits";
  $.getJSON(flickerAPI)
    .done(function( data ) {
      $.each( data, function( i, item ) {
		    if(item.author){
        $("#textMachine").append( "<div><img style=\"height:60px;\" src=\""+item.author.avatar_url+"\" />"+item.commit.message+"</div>" );
        }
      });
	  $("#textMachine").slotMachine({
		active	: 1,
		delay	: 450,
		auto	: 1500
	});
    });
})();