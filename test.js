$(document).ready(function() {
	squareNum = 16;
	for (var i = 1; i <= squareNum; i++) {
		for (var j = 1; j <= squareNum; j++) {
			$('#container').append('<div class="pixel"></div>')
		};
	}

	$("div").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "black");
});


	$("#start").click(function() {
  squareNum = prompt("How many squares would you like?", "16");
  
  var squareSize = 960/squareNum;
  console.log(squareNum);
  console.log(squareSize);
	
   $(".pixel").remove();

for (var i = 1; i <= squareNum; i++) {
		for (var j = 1; j <= squareNum; j++) {
			$('#container').append('<div class="pixel"></div>')
		};
	}

	$(".pixel").css("height", squareSize+"px");
	$(".pixel").css("width", squareSize+"px");


	$("div").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "black");
});
	
	//location.reload();
});

	$("#clear").click(function() {
	
   $(".pixel").remove();

for (var i = 1; i <= squareNum; i++) {
		for (var j = 1; j <= squareNum; j++) {
			$('#container').append('<div class="pixel"></div>')
		};
	}

	$("div").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "black");
});
	
	//location.reload();
});
});

