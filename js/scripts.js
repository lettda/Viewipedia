$(document).ready(function() {
	
	$(".btn-primary").click(function() {
		var searchTerm = $("#subjectSearch").val();
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm +"&format=json&callback=?";

	$.ajax( {
    	url: url,
    	async: false,
    	dataType: 'json',
    	headers: { 'Api-User-Agent': 'Example/1.0' },
    	type: 'GET',
    		success: function(data) {

       			for (var i = 0; i < data[1].length; i++) {
       				$("#output").prepend("<li><a href= "+ data[3][i]+"+>" +data[1][i] +"</a><p>"+data[2][i]+"</p></li>") //Prepend Article information to HTML list (Article link as hyperlink connected to Article header, Article summary follow underneath )
       				$("#searchUi").fadeOut("slow",function(){

       				});
       			}
    		},
    		error: function(errorMsg) {
    			alert("Error Occured!");
    		}
		});
	});
	$(".navbar-brand").click(function(){ //Click navigation bar brand to Fade in or Fade out Search UI
		$("#searchUi").fadeToggle("slow",function(){

		});
	});

});