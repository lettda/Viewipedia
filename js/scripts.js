$(document).ready(function() {
	
	$(".btn-primary").click(function() {
		var searchTerm = $("#subjectSearch").val();
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm +"&format=json&callback=?";
		console.log(url);

	$.ajax( {
    	url: url,
    	async: false,
    	dataType: 'json',
    	headers: { 'Api-User-Agent': 'Example/1.0' },
    	type: 'GET',
    		success: function(data) {
       			// console.log(data[1][0]); //Get Header name
       			// console.log(data[2][0]); //Get description
       			// console.log(data[3][0]); //Get link

       			for (var i = 0; i < data[1].length; i++) {
       				$("#output").prepend("<li><a href= "+ data[3][i]+">" +data[1][i] +"</a><p>"+data[2][i]+"</p></li>")
       				
       			}
    		},
    		error: function(errorMsg) {
    			alert("Error Occured!");
    		}
		});
	});

});