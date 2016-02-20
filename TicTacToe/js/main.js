$(function() {	
	//player names above board
	var whosPlaying = $("#vs");
	
	//grid of divs and p tags
	var board;
	
	//boolean to store if user wants to play or not
	var play;	
	
	//to record names from user
	var name1;
	var name2;
	
	//variables to store person instances
	var person1, person2;
	
	//variables to provide handles into grid p tags
	var p1;
	var p2;
	var p3;
	var p4;
	var p5;
	var p6;
	var p7;
	var p8;
	var p9;
	
	var winner;
	var gameCount;
	localStorage.getItem("GameCount") ? gameCount=localStorage.getItem("GameCount") : gameCount = 0;
	
	//launch initial newgame setup
	$("#newGameBtn").click(newGame);

	function newGame() {
		var conf = confirm("Are you sure you want to start a new game? \n\n\t\t\tBoard will be reset.");
		winner = null;
		if (conf) {
			$(".box p").empty();
			setNames();
		}
	}
	function setNames() {
		name1 = prompt("Please enter player one's name:");
		if(name1 === null) {
			return false;
		} else if (name1 === "") {
			alert("You must enter a value for player one.");
			setNames();
			return false;
		}
		
		name2 = prompt("Please enter player two's name.")
		if(name2 === null) {
			return false;
		} else if (name2 === "") {
			alert("You must enter a value for player two.");
			setNames();
			return false;
		}
		launchSetup(name1, name2);
	}
	
	function launchSetup(n1, n2) {
		//shows player names above the board
		whosPlaying.text(n1 + " vs. " + n2);
		
		//instantiates players (name, icon, turn);
		person1 = new Person(n1,"X",true);
		person2 = new Person(n2,"O",false);
		
		//adds click event listeners to div boxes on the grid.  Will launch clicked function.
		$(".box p").off("click"); //needed to remove event listeners if user starts new game in the middle of a game so they aren't added twice
		$(".box p").click(clicked);
		
		//provides handle into each div box in the grid.  Mainly used in the check winner function.
		p1 = $("#b1 p");
		p2 = $("#b2 p");
		p3 = $("#b3 p");
		p4 = $("#b4 p");
		p5 = $("#b5 p");
		p6 = $("#b6 p");
		p7 = $("#b7 p");
		p8 = $("#b8 p");
		p9 = $("#b9 p");
		
	}
	
	function clicked(evt) {
		var p = $(evt.target);
		if(p.text() === "") {
			
			//assign X or O from player objects to p tag within boxes
			if(person1.turn) {
				p.text(person1.icon);
			} else {
				p.text(person2.icon);
			}
			
			//toggle turn
			var a = person1.turn;
			person1.turn = person2.turn;
			person2.turn = a;

			checkWinner();
			
		} else {
			alert("Box taken!");
		}
	}
	
	function Person(pName, i, t) {
		this.playerName = pName;
		this.icon = i;
		this.turn = t;
	}
	
	function checkWinner() {
		if(p1.text() === "X" && p2.text() === "X" && p3.text() === "X") {
			winner = person1.playerName;
			alert(winner + " has won!");
			$('.box p').unbind('click',clicked);
		} else if (p1.text() === "O" && p2.text() === "O" && p3.text() === "O") {
			winner = person2.playerName;
			alert(winner + " has won!");
			$('.box p').unbind('click',clicked);
		} else if(p4.text() === "X" && p5.text() === "X" && p6.text() === "X") {
			winner = person1.playerName;
			alert(winner + " has won!");
			$('.box p').unbind('click',clicked);
		} else if (p4.text() === "O" && p5.text() === "O" && p6.text() === "O") {
			winner = person2.playerName;
			alert(winner + " has won!");
			$('.box p').unbind('click',clicked);
		} else if(p7.text() === "X" && p8.text() === "X" && p9.text() === "X") {
			winner = person1.playerName;
			alert(winner + " has won!");
			$('.box p').unbind('click',clicked);
		} else if (p7.text() === "O" && p8.text() === "O" && p9.text() === "O") {
			winner = person2.playerName;
			alert(winner + " has won!");
			$('.box p').unbind('click',clicked);
		} else if(p1.text() === "X" && p4.text() === "X" && p7.text() === "X") {
			winner = person1.playerName;
			alert(winner + " has won!");
			$('.box p').unbind('click',clicked);
		} else if (p1.text() === "O" && p4.text() === "O" && p7.text() === "O") {
			winner = person2.playerName;
			alert(winner + " has won!");
			$('.box p').unbind('click',clicked);
		} else if(p2.text() === "X" && p5.text() === "X" && p8.text() === "X") {
			winner = person1.playerName;
			alert(winner + " has won!");
			$('.box p').unbind('click',clicked);
		} else if (p2.text() === "O" && p5.text() === "O" && p8.text() === "O") {
			winner = person2.playerName;
			alert(winner + " has won!");
			$('.box p').unbind('click',clicked);
		} else if(p3.text() === "X" && p6.text() === "X" && p9.text() === "X") {
			winner = person1.playerName;
			alert(winner + " has won!");
			$('.box p').unbind('click',clicked);
		} else if (p3.text() === "O" && p6.text() === "O" && p9.text() === "O") {
			winner = person2.playerName;
			alert(winner + " has won!");
			$('.box p').unbind('click',clicked);
		} else if(p1.text() === "X" && p5.text() === "X" && p9.text() === "X") {
			winner = person1.playerName;
			alert(winner + " has won!");
			$('.box p').unbind('click',clicked);
		} else if (p1.text() === "O" && p5.text() === "O" && p9.text() === "O") {
			winner = person2.playerName;
			alert(winner + " has won!");
			$('.box p').unbind('click',clicked);
		} else if(p3.text() === "X" && p5.text() === "X" && p7.text() === "X") {
			winner = person1.playerName;
			alert(winner + " has won!");
			$('.box p').unbind('click',clicked);
		} else if (p3.text() === "O" && p5.text() === "O" && p7.text() === "O") {
			winner = person2.playerName;
			alert(winner + " has won!");
			$('.box p').unbind('click',clicked);
		} else {
			//code to check for a tie - all boxes filled return tie
			if(p1.text() && p2.text() && p3.text() && p4.text() && p5.text() && p6.text() && p7.text() && p8.text() && p9.text()) {
				winner = "Tie";
				alert("It's a tie!");	
				$('.box p').unbind('click',clicked);
			} //closes interior if statement
		}//closes the outer if
		
		if (winner) {
			gameCount++;
			setLog(gameCount, winner);
		}
	}//closes check winner
	
	function setLog(g, w) {
		if(localStorage.getItem("GameLog")) {
			var lsLog = localStorage.getItem("GameLog");
			var msg = "<p>Game " + g + " winner: " + w + "!</p>"; 
			localStorage.setItem("GameLog", msg + lsLog);
			localStorage.setItem("GameCount",g);
			$("#log").html(localStorage.getItem("GameLog"));
		} else {
			var msg = "<p>Game " + g + " winner: " + w + "!</p>";;
			localStorage.setItem("GameLog", msg);
			localStorage.setItem("GameCount",g);
			$("#log").html(localStorage.getItem("GameLog"));
		}
		//console.log();
	}
});



