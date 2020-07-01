$( document ).ready(function(){
	  $( ".rules" ).click(function(){
	    $.ajax({
	      method: "GET",
	      url: "rules.js",
	      dataType: "script"
	    });
	  });
	});
