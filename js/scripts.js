<<<<<<< HEAD
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

=======
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
>>>>>>> origin/master
});