angular.module('camapp.controllers', [])

.controller('CameraCtrl', function($scope) {
  var data = [];
  var dates = [];

  $scope.getPhoto = function(){
    navigator.camera.getPicture(function(uri){
    	var today = new Date();
    	var dd = today.getDate();
    	var mm = today.getMonth()+1; 
    	var yyyy = today.getFullYear();
    	var minutes = today.getMinutes();
    	var hour = today.getHours();

    	// Date
    	if(dd<10) {
    	    dd='0'+dd
    	} 
    	if(mm<10) {
    	    mm='0'+mm
    	} 
    	today = mm+'-'+dd+'-'+yyyy+' // '+hour+':'+minutes;
    	
    	
    	$('#loremImage').attr('src', uri);
    	data.push(uri);
    	dates.push(today);
    	localStorage.setItem("media", JSON.stringify(data));
    	localStorage.setItem("dates", JSON.stringify(dates));

    	$("#upload").click(function(){
    		
    		if(localStorage.getItem("media")!=undefined) {
    			data = JSON.parse(localStorage.getItem("media"));
    			dates = JSON.parse(localStorage.getItem("dates"));
    			$('#showcase').html('');
    			for (var i = 0; i < data.length; i++) {
    				$("#showcase").prepend($('<div class="item dummy"><img src="' + data[i] + '" class="dummy-img"/><p>Date: ' + dates[i] + '</p></div>'));
    			};
    		}	
    	});
    	$("body").on("click", ".dummy-img", function (e) {
    		var SRC = $(this).attr('src');

    		$('#loremImage').attr('src', SRC);
    	});
      
    }, function(error){
      console.error(error);
    },
    {
      quality: 100,
      allowEdit : true,
      saveToPhotoAlbum: true
    });
  };
});
