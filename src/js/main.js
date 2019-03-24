// import "./moving";
// All of our JavaScript code goes here... 
	
	// 1 => <div class='wall'></div>
	// 2 => <div class='coin'></div>
	// 3 => <div class='ground'></div>
	// 4 => <div class='ghost'></div>
	// 5 => <div class='pacman'></div>
	// map = [ 1, 2, 3 ]
	// map = [ [1,2,3], [1,2,3], [1,2,3] ];
window.onload = function () { 
    drawWorld(map);
}

	pacman = {
		x: 6,
		y: 4
	}

	map = [ 
		[1,1,1,1,1,1,1,1,1,1,1,1,1], 
		[1,3,3,3,3,3,1,0,3,0,2,2,1], 
		[1,2,1,1,3,2,1,2,1,1,1,2,1], 
		[1,2,1,2,2,2,2,2,2,2,1,2,1], 
		[1,2,2,2,1,1,5,1,1,2,2,2,1], 
		[1,2,1,2,2,2,2,2,2,2,1,2,1], 
		[1,2,1,1,2,2,1,2,2,1,1,2,1], 
		[1,2,2,2,2,2,1,2,2,2,2,2,1], 
		[1,1,1,1,1,1,1,1,1,1,1,1,1]
	]

	var el = document.getElementById('world');
	
	function drawWorld(){
		el.innerHTML = '';
		for(var y = 0; y < map.length ; y = y + 1) {
			for(var x = 0; x < map[y].length ; x = x + 1) {		
				if (map[y][x] === 1) {
					el.innerHTML += "<div class='wall'></div>";
				}
				else if (map[y][x] === 2) {
					el.innerHTML += "<div class='food'></div>";
				}
				else if (map[y][x] === 3) {
					el.innerHTML += "<div class='monster'></div>";
				}
				else if (map[y][x] === 0) {
					el.innerHTML += "<div class='ground'></div>";
				}
				else if (map[y][x] === 5) {
					el.innerHTML += "<div class='pacman'></div>";
				}
			}
			el.innerHTML += "<br>";
		}
	}
    

	document.onkeydown = function(event){
		// console.log(event);
		if (event.keyCode === 37){ // PACMAN MOVE LEFT
			goLeft(map,pacman,drawWorld)
		}
		else if (event.keyCode === 38){ // PACMAN MOVE UP
			goUp(map,pacman,drawWorld);
		}
		else if (event.keyCode === 39){ // PACMAN MOVE RIGHT
			goRight(map,pacman,drawWorld);
		}
		else if (event.keyCode === 40){ // PACMAN MOVE DOWN
			goDown(map,pacman,drawWorld);
		}
		console.log(map)
    }
    
   