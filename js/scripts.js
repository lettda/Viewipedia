//initialze jquery
$(document).ready(function () {
	//On clicking search button run the follwoing code
	$("#search").click(function(){
		//Pull value entered into subject search field
		var searchSubject = $("#subjectSearch").val();
		//Pull API URL
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchSubject +"&format=json&callback=?";

		console.log(url);
		
		$.ajax({
			type:"GET",
			url:url,
			async:false,
			dataType: "json",
			success: function(data) {
				console.log(data[1][0]);
				console.log(data[2][0]);
				console.log(data[3][0]);



			},
			error: function(errorMessage){
				aler("ERROR!");
			}

		});

	});
});